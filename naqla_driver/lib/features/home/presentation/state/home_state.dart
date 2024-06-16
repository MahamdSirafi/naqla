part of 'home_bloc.dart';

class HomeState extends StateObject<HomeState> {
  static String subOrders = "subOrders";
  static String getAllCars = "getAllCars";
  static String setDriver = "setDriver";
  static String orderCars = "orderCars";

  HomeState({States? states})
      : super([
          InitialState<List<SubOrderModel>>(subOrders),
          InitialState<List<CarModel>>(getAllCars),
          InitialState<void>(setDriver),
          InitialState<List<CarModel>>(orderCars),
        ], (states) => HomeState(states: states), states);
}
