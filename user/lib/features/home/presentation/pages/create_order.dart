import 'package:auto_route/auto_route.dart';
import 'package:common_state/common_state.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_form_builder/flutter_form_builder.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:form_builder_validators/form_builder_validators.dart';
import 'package:go_router/go_router.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:naqla/core/common/constants/constants.dart';
import 'package:naqla/core/core.dart';
import 'package:naqla/core/di/di_container.dart';
import 'package:naqla/core/global_widgets/app_date_picker.dart';
import 'package:naqla/features/app/presentation/widgets/app_scaffold.dart';
import 'package:naqla/features/app/presentation/widgets/customer_appbar.dart';
import 'package:naqla/features/app/presentation/widgets/params_appbar.dart';
import 'package:naqla/features/app/presentation/widgets/states/app_common_state_builder.dart';
import 'package:naqla/features/home/data/model/car_advantage.dart';
import 'package:naqla/features/home/data/model/location_model.dart';
import 'package:naqla/features/home/presentation/bloc/home_bloc.dart';
import 'package:naqla/features/home/presentation/pages/order_photos_page.dart';
import 'package:naqla/features/home/presentation/widget/set_location_order.dart';

import '../../../../generated/l10n.dart';

@RoutePage()
class CreateOrderPage extends StatefulWidget {
  const CreateOrderPage({super.key});

  static const String path = "CreateOrderPage";
  static const String name = "CreateOrderPage";

  @override
  State<CreateOrderPage> createState() => _CreateOrderPageState();
}

class _CreateOrderPageState extends State<CreateOrderPage> {
  final ValueNotifier<bool> porters = ValueNotifier(false);
  final GlobalKey<FormBuilderState> _key = GlobalKey();
  List<LatLng> latLng = [];
  int length = 0;

  @override
  Widget build(BuildContext context) {
    return BlocProvider.value(
      value: getIt<HomeBloc>()..add(GetCarAdvantageEvent()),
      child: AppScaffold(
        bottomNavigationBar: BlocBuilder<HomeBloc, HomeState>(
          builder: (context, state) {
            return Padding(
              padding: REdgeInsets.symmetric(
                  horizontal: UIConstants.screenPadding16, vertical: 10),
              child: AppButton.dark(
                title: S.of(context).next,
                onPressed: () {
                  _key.currentState?.save();
                  _key.currentState?.validate();
                  if ((_key.currentState?.isValid ?? false) && length >= 2) {
                    context.read<HomeBloc>().add(SetOrderParamEvent(
                        desiredDate: _key.currentState?.value["date"],
                        locationStart: LocationModel(
                            region: '',
                            street: '',
                            latitude: latLng[0].latitude,
                            longitude: latLng[0].longitude),
                        locationEnd: LocationModel(
                            latitude: latLng[1].latitude,
                            longitude: latLng[1].longitude,
                            street: '',
                            region: ''),
                        porters: porters.value,
                        advantages: state
                            .getState<List<CarAdvantage>>(
                                HomeState.carAdvantage)
                            .data
                            ?.where((element) => element.isSelect)
                            .map((e) => e.id)
                            .toList()));
                    context.pushNamed(OrderPhotosPage.name);
                  }
                },
              ),
            );
          },
        ),
        appBar: AppAppBar(
            appBarParams: AppBarParams(title: S.of(context).new_naqla)),
        body: SingleChildScrollView(
          child: FormBuilder(
            key: _key,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                SetLocationOrder(
                  onValid: (value) => length = value?.length ?? 0,
                  onChanged: (value) => latLng = value ?? [],
                ),
                16.verticalSpace,
                Padding(
                  padding: REdgeInsets.symmetric(
                      horizontal: UIConstants.screenPadding16),
                  child: AppDatePicker(
                    validator: FormBuilderValidators.required(),
                    name: 'date',
                    minimumDate: DateTime.now(),
                  ),
                ),
                20.verticalSpace,
                Padding(
                  padding: REdgeInsets.symmetric(
                      horizontal: UIConstants.screenPadding16),
                  child: Row(
                    children: [
                      ValueListenableBuilder(
                        builder: (context, value, _) => AppCheckbox(
                          isSelected: value,
                          onChanged: (value) {
                            print(value);
                            porters.value = value;
                          },
                        ),
                        valueListenable: porters,
                      ),
                      8.horizontalSpace,
                      AppText.bodySmMedium(
                        "حمالين",
                        color: Colors.black,
                      )
                    ],
                  ),
                ),
                11.verticalSpace,
                Padding(
                  padding: REdgeInsets.symmetric(
                      horizontal: UIConstants.screenPadding16),
                  child: AppText.bodySmMedium(
                      "الاجر سيعتمد على عدد الحمالين المطلوبين والطوابق وطبيعة الأغراض المنقولة باتفاق من الطرفين."),
                ),
                18.verticalSpace,
                Padding(
                  padding: REdgeInsets.symmetric(
                      horizontal: UIConstants.screenPadding16),
                  child: AppText.bodySmMedium(
                    "مواصفات إضافية للسيارة:",
                    fontWeight: FontWeight.w700,
                    color: Colors.black,
                  ),
                ),
                AppCommonStateBuilder<HomeBloc, List<CarAdvantage>>(
                  stateName: HomeState.carAdvantage,
                  onSuccess: (data) => Padding(
                    padding: REdgeInsets.symmetric(
                        horizontal: UIConstants.screenPadding16, vertical: 10),
                    child: ListView.separated(
                      shrinkWrap: true,
                      itemCount: 3,
                      separatorBuilder: (context, index) => 14.verticalSpace,
                      itemBuilder: (context, index) => Row(
                        children: [
                          AppCheckbox(
                            isSelected: data[index].isSelect,
                            onChanged: (value) {
                              context.read<HomeBloc>().add(
                                  ChangeSelectAdvantageEvent(
                                      carAdvantage: data[index]));
                            },
                          ),
                          8.horizontalSpace,
                          Text.rich(
                              style: context.textTheme.bodySmMedium,
                              TextSpan(children: [
                                TextSpan(text: data[index].name),
                                WidgetSpan(child: 4.horizontalSpace),
                                TextSpan(text: "[${data[index].cost}]")
                              ])),
                        ],
                      ),
                    ),
                  ),
                )
              ],
            ),
          ),
        ),
      ),
    );
  }
}
