import 'dart:io';

import 'package:dio/dio.dart';
import 'package:injectable/injectable.dart';
import 'package:naqla/core/api/api_utils.dart';
import 'package:naqla/core/common/constants/configuration/api_routes.dart';
import 'package:naqla/features/home/domain/use_case/upload_photos_use_case.dart';
import 'package:http_parser/http_parser.dart' as mime;

@injectable
class HomeRemoteDataSource {
  final Dio dio;

  HomeRemoteDataSource(this.dio);

  Future<List<String>> uploadPhotos(UploadPhotosParam param) {
    return throwAppException(() async {
      List<MultipartFile> files = [];
      for (File? file in param.photos) {
        files.add(await MultipartFile.fromFile(file!.path, contentType: mime.MediaType('image', 'jpeg')));
      }

      Map<String, dynamic> data = {};
      data["photos"] = files;

      FormData formData = FormData.fromMap(data);
      final result = await dio.post(ApiRoutes.multiple, data: formData);
      return List<String>.from(result.data);
    });
  }
}