import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:naqla/features/app/presentation/pages/base_page.dart';
import 'package:naqla/features/chat/presentation/pages/chat_page.dart';
import 'package:naqla/features/home/data/model/order_model.dart';
import 'package:naqla/features/home/presentation/pages/create_order.dart';
import 'package:naqla/features/orders/presentation/pages/order_page.dart';

import '../../../features/auth/presentation/pages/phone_verfication.dart';
import '../../../features/auth/presentation/pages/register_page.dart';
import '../../../features/auth/presentation/pages/sign_in_page.dart';
import '../../../features/auth/presentation/pages/welcome_page.dart';
import '../../../features/chat/presentation/pages/messages_page.dart';
import '../../../features/home/presentation/pages/home_page.dart';
import '../../../features/home/presentation/pages/order_details_page.dart';
import '../../../features/home/presentation/pages/order_photos_page.dart';
import '../../../features/on_boarding/presentation/pages/on_boarding_screen.dart';
import '../../../features/profile/presentation/pages/about_us_page.dart';
import '../../../features/profile/presentation/pages/delete_account_page.dart';
import '../../../features/profile/presentation/pages/edit_phone_number_page.dart';
import '../../../features/profile/presentation/pages/edit_profile_page.dart';
import '../../../features/profile/presentation/pages/help_and_support_page.dart';
import '../../../features/profile/presentation/pages/language_page.dart';
import '../../../features/profile/presentation/pages/profile_page.dart';
import '../../../features/welcome/splash.dart';

final GlobalKey<NavigatorState> _rootNavigatorKey = GlobalKey<NavigatorState>(debugLabel: 'root');

final GlobalKey<NavigatorState> _shell1NavigatorKey = GlobalKey<NavigatorState>(debugLabel: 'shell1');

final GlobalKey<NavigatorState> _shell2NavigatorKey = GlobalKey<NavigatorState>(debugLabel: 'shell2');

final GlobalKey<NavigatorState> _shell3NavigatorKey = GlobalKey<NavigatorState>(debugLabel: 'shell3');

final GlobalKey<NavigatorState> _shell4NavigatorKey = GlobalKey<NavigatorState>(debugLabel: 'shell4');

// static GoRouter get router => _router;

final router = GoRouter(initialLocation: SplashScreen.path, navigatorKey: _rootNavigatorKey, routes: <RouteBase>[
  GoRoute(
      path: SplashScreen.path,
      name: SplashScreen.name,
      pageBuilder: (BuildContext context, GoRouterState state) {
        return _builderPage(child: const SplashScreen(), state: state);
      }),
  GoRoute(
      path: OnBoardingScreen.path,
      name: OnBoardingScreen.name,
      pageBuilder: (BuildContext context, GoRouterState state) {
        return _builderPage(child: const OnBoardingScreen(), state: state);
      }),
  GoRoute(
      path: WelcomePage.path,
      name: WelcomePage.name,
      pageBuilder: (BuildContext context, GoRouterState state) {
        return _builderPage(child: const WelcomePage(), state: state);
      }),
  GoRoute(
    path: RegisterPage.path,
    name: RegisterPage.name,
    builder: (context, state) => RegisterPage(showTextButton: state.extra as bool),
  ),
  GoRoute(
    path: PhoneVerificationPage.path,
    name: PhoneVerificationPage.name,
    builder: (context, state) => PhoneVerificationPage(param: state.extra as PhoneVerificationParam),
  ),
  GoRoute(
    path: SignInPage.path,
    name: SignInPage.name,
    builder: (context, state) => SignInPage(showTextButton: state.extra as bool),
  ),
  StatefulShellRoute.indexedStack(
    builder: (context, state, child) {
      var fullPath = GoRouter.of(context).routeInformationProvider.value.uri.path;
      return BasePage(
        fullPath: fullPath,
        child: child,
      );
    },
    branches: [
      StatefulShellBranch(initialLocation: HomePage.path, navigatorKey: _shell1NavigatorKey, routes: [
        GoRoute(
            parentNavigatorKey: _shell1NavigatorKey,
            path: HomePage.path,
            name: HomePage.name,
            builder: (context, state) => HomePage(
                  comeFromSplash: state.extra as bool,
                ),
            routes: [
              GoRoute(
                parentNavigatorKey: _rootNavigatorKey,
                path: CreateOrderPage.path,
                name: CreateOrderPage.name,
                builder: (context, state) => const CreateOrderPage(),
              ),
              GoRoute(
                parentNavigatorKey: _rootNavigatorKey,
                path: OrderPhotosPage.path,
                name: OrderPhotosPage.name,
                builder: (context, state) => const OrderPhotosPage(),
              ),
              GoRoute(
                parentNavigatorKey: _rootNavigatorKey,
                path: OrderDetailsPage.path,
                name: OrderDetailsPage.name,
                builder: (context, state) => OrderDetailsPage(
                  orderModel: state.extra as OrderModel,
                ),
              ),
            ]),
      ]),
      StatefulShellBranch(initialLocation: OrderPage.path, navigatorKey: _shell2NavigatorKey, routes: [
        GoRoute(path: OrderPage.path, name: OrderPage.name, parentNavigatorKey: _shell2NavigatorKey, builder: (context, state) => const OrderPage())
      ]),
      StatefulShellBranch(initialLocation: ChatPage.path, navigatorKey: _shell3NavigatorKey, routes: [
        GoRoute(
            path: ChatPage.path,
            name: ChatPage.name,
            parentNavigatorKey: _shell3NavigatorKey,
            builder: (context, state) => const ChatPage(),
            routes: [
              GoRoute(
                path: MessagesPage.path,
                name: MessagesPage.name,
                parentNavigatorKey: _rootNavigatorKey,
                builder: (context, state) => const MessagesPage(),
                pageBuilder: (context, state) => CustomTransitionPage(
                  child: const MessagesPage(),
                  transitionsBuilder: (context, animation, secondaryAnimation, child) => SlideTransition(
                    position: Tween<Offset>(begin: const Offset(1, 0), end: Offset.zero).animate(animation),
                    child: child,
                  ),
                ),
              )
            ])
      ]),
      StatefulShellBranch(initialLocation: ProfilePage.path, navigatorKey: _shell4NavigatorKey, routes: [
        GoRoute(
            parentNavigatorKey: _shell4NavigatorKey,
            path: ProfilePage.path,
            name: ProfilePage.name,
            builder: (context, state) => const ProfilePage(),
            routes: [
              GoRoute(
                parentNavigatorKey: _rootNavigatorKey,
                path: EditProfilePage.path,
                name: EditProfilePage.name,
                builder: (context, state) => EditProfilePage(param: state.extra as EditProfileParam),
                pageBuilder: (context, state) => CustomTransitionPage(
                  child: EditProfilePage(param: state.extra as EditProfileParam),
                  transitionsBuilder: (context, animation, secondaryAnimation, child) => SlideTransition(
                    position: Tween<Offset>(begin: const Offset(1, 0), end: Offset.zero).animate(animation),
                    child: child,
                  ),
                ),
              ),
              GoRoute(
                parentNavigatorKey: _rootNavigatorKey,
                path: EditPhoneNumberPage.path,
                name: EditPhoneNumberPage.name,
                builder: (context, state) => EditPhoneNumberPage(param: state.extra as EditPhoneParam),
                pageBuilder: (context, state) => CustomTransitionPage(
                  child: EditPhoneNumberPage(param: state.extra as EditPhoneParam),
                  transitionsBuilder: (context, animation, secondaryAnimation, child) => SlideTransition(
                    position: Tween<Offset>(begin: const Offset(1, 0), end: Offset.zero).animate(animation),
                    child: child,
                  ),
                ),
              ),
              GoRoute(
                parentNavigatorKey: _rootNavigatorKey,
                path: DeleteAccountPage.path,
                name: DeleteAccountPage.name,
                builder: (context, state) => const DeleteAccountPage(),
                pageBuilder: (context, state) => CustomTransitionPage(
                  child: const DeleteAccountPage(),
                  transitionsBuilder: (context, animation, secondaryAnimation, child) => SlideTransition(
                    position: Tween<Offset>(begin: const Offset(1, 0), end: Offset.zero).animate(animation),
                    child: child,
                  ),
                ),
              ),
              GoRoute(
                parentNavigatorKey: _rootNavigatorKey,
                path: LanguagePage.path,
                name: LanguagePage.name,
                builder: (context, state) => const LanguagePage(),
                pageBuilder: (context, state) => CustomTransitionPage(
                  child: const LanguagePage(),
                  transitionsBuilder: (context, animation, secondaryAnimation, child) => SlideTransition(
                    position: Tween<Offset>(begin: const Offset(1, 0), end: Offset.zero).animate(animation),
                    child: child,
                  ),
                ),
              ),
              GoRoute(
                parentNavigatorKey: _rootNavigatorKey,
                path: AboutUsPage.path,
                name: AboutUsPage.name,
                builder: (context, state) => const AboutUsPage(),
                pageBuilder: (context, state) => CustomTransitionPage(
                  child: const AboutUsPage(),
                  transitionsBuilder: (context, animation, secondaryAnimation, child) => SlideTransition(
                    position: Tween<Offset>(begin: const Offset(1, 0), end: Offset.zero).animate(animation),
                    child: child,
                  ),
                ),
              ),
              GoRoute(
                parentNavigatorKey: _rootNavigatorKey,
                path: HelpAndSupportPage.path,
                name: HelpAndSupportPage.name,
                builder: (context, state) => const HelpAndSupportPage(),
                pageBuilder: (context, state) => CustomTransitionPage(
                  child: const HelpAndSupportPage(),
                  transitionsBuilder: (context, animation, secondaryAnimation, child) => SlideTransition(
                    position: Tween<Offset>(begin: const Offset(1, 0), end: Offset.zero).animate(animation),
                    child: child,
                  ),
                ),
              ),
            ]),
      ]),
    ],
  )
]);

Page<dynamic> _builderPage<T>({required Widget child, required GoRouterState state}) {
  if (Platform.isIOS) {
    return CupertinoPage<T>(child: child, key: state.pageKey);
  } else {
    return MaterialPage<T>(child: child, key: state.pageKey);
  }
}
