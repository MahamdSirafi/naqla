import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Employee } from '../entities/employee.entity';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Patch,
  Post,
  Req,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { Public, CheckAbilities, Id, Auth } from '@common/decorators';
import { GROUPS, Entities, Action } from '@common/enums';
import {
  CreateEmployeeDto,
  LoginEmployeeDto,
  UpdateEmployeeDto,
} from '../dtos';
import { ICrud } from '@common/interfaces';
import { AuthEmployeeResponse } from '../interfaces';
import { bad_req, data_not_found, denied_error } from '@common/constants';
import { WithDeletedInterceptor } from '@common/interceptors';
import { Request } from 'express';
import { EMPLOYEE_TYPES } from '../interfaces/type';
import { IEmployeesService } from '../interfaces/services/employees.service.interface';

@ApiTags('Employees')
@ApiBadRequestResponse({ description: bad_req })
@ApiForbiddenResponse({ description: denied_error })
@ApiNotFoundResponse({ description: data_not_found })
@Auth()
@Controller({ path: 'employees', version: '1' })
export class EmployeesController implements ICrud<Employee> {
  constructor(
    @Inject(EMPLOYEE_TYPES.service)
    private readonly employeesService: IEmployeesService,
  ) {}
  @Public()
  @ApiOperation({ summary: 'Login' })
  @ApiOkResponse({
    description: 'Employee logged in successfully',
    type: AuthEmployeeResponse,
  })
  @SerializeOptions({ groups: [GROUPS.EMPLOYEE] })
  @HttpCode(HttpStatus.OK)
  @Post('login')
  login(@Body() dto: LoginEmployeeDto) {
    return this.employeesService.login(dto);
  }

  @UseInterceptors(WithDeletedInterceptor)
  @ApiOkResponse({ type: Employee })
  @SerializeOptions({ groups: [GROUPS.ALL_EMPLOYEES] })
  @CheckAbilities({ action: Action.Read, subject: Entities.Employee })
  @Get()
  find(@Req() req: Request) {
    const withDeleted = Boolean(req.query.withDeleted);
    return this.employeesService.find(withDeleted);
  }

  @SerializeOptions({ groups: [GROUPS.EMPLOYEE] })
  @ApiOkResponse({ type: Employee })
  @CheckAbilities({ action: Action.Create, subject: Entities.Employee })
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeesService.create(createEmployeeDto);
  }

  @SerializeOptions({ groups: [GROUPS.EMPLOYEE] })
  @ApiOkResponse({ type: Employee })
  @CheckAbilities({ action: Action.Read, subject: Entities.Employee })
  @Get(':id')
  findOne(@Id() id: string) {
    return this.employeesService.findOne(id);
  }

  @SerializeOptions({ groups: [GROUPS.EMPLOYEE] })
  @ApiOkResponse({ type: Employee })
  @CheckAbilities({ action: Action.Update, subject: Entities.Employee })
  @Patch(':id')
  update(@Id() id: string, @Body() dto: UpdateEmployeeDto) {
    return this.employeesService.update(id, dto);
  }

  @ApiNoContentResponse()
  @CheckAbilities({ action: Action.Delete, subject: Entities.Employee })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Id() id: string) {
    return this.employeesService.remove(id);
  }

  // @ApiOperation({ summary: 'recover deleted Employee' })
  // @CheckAbilities({ action: Action.Update, subject: Entities.Employee })
  // @SerializeOptions({ groups: [GROUPS.EMPLOYEE] })
  // @HttpCode(HttpStatus.OK)
  // @Post(':id/recover')
  // recover(@Id() id: string) {
  //   return this.employeesService.recover(id);
  // }
}
