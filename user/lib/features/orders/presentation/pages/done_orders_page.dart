import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:naqla/core/common/constants/constants.dart';
import 'package:naqla/core/common/enums/order_status.dart';
import 'package:naqla/core/core.dart';
import 'package:naqla/features/app/presentation/widgets/states/app_common_state_builder.dart';
import 'package:naqla/features/home/data/model/order_model.dart';
import 'package:naqla/features/home/presentation/widget/order_card.dart';
import 'package:naqla/features/orders/presentation/state/order_bloc.dart';

import '../../../../generated/flutter_gen/assets.gen.dart';

class DoneOrdersPage extends StatelessWidget {
  const DoneOrdersPage({super.key});

  @override
  Widget build(BuildContext context) {
    return RefreshIndicator(
      onRefresh: () async {
        context.read<OrderBloc>().add(GetOrdersEvent());
      },
      child: AppCommonStateBuilder<OrderBloc, List<OrderModel>>(
        stateName: OrderState.getOrders,
        onSuccess: (data) {
          return data
                  .where(
                    (element) =>
                        (element.status == OrderStatus.delivered || element.status == OrderStatus.refused || element.status == OrderStatus.canceled),
                  )
                  .isEmpty
              ? ListView(
                  padding: REdgeInsets.symmetric(vertical: UIConstants.screenPadding30),
                  children: [
                    AppImage.asset(Assets.images.svg.noDataRafiki1.path),
                  ],
                )
              : ListView.builder(
                  itemBuilder: (context, index) => Padding(
                    padding: REdgeInsets.symmetric(horizontal: UIConstants.screenPadding20, vertical: 10),
                    child: OrderCard(
                      orderModel: data
                          .where(
                            (element) => (element.status == OrderStatus.delivered ||
                                element.status == OrderStatus.refused ||
                                element.status == OrderStatus.canceled),
                          )
                          .elementAt(index),
                      showBorder: true,
                    ),
                  ),
                  itemCount: data
                      .where(
                        (element) => (element.status == OrderStatus.delivered ||
                            element.status == OrderStatus.refused ||
                            element.status == OrderStatus.canceled),
                      )
                      .length,
                );
        },
      ),
    );
  }
}
