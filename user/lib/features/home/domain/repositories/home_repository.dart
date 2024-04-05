import 'package:naqla/core/type_definitions.dart';
import 'package:naqla/features/home/domain/use_case/upload_photos_use_case.dart';

abstract class HomeRepository {
  FutureResult<List<String>> uploadMultiplePhoto(UploadPhotosParam param);
}