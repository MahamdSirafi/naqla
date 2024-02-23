import 'dart:io';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../features/auth/presentation/pages/forgot_password_page.dart';
import '../../../features/auth/presentation/pages/forgot_password_sms_page.dart';
import '../../../features/auth/presentation/pages/registration/phone_verfication.dart';
import '../../../features/auth/presentation/pages/registration/register_page.dart';
import '../../../features/auth/presentation/pages/set_location_page.dart';
import '../../../features/auth/presentation/pages/set_new_password_page.dart';
import '../../../features/auth/presentation/pages/sign_in_page.dart';
import '../../../features/auth/presentation/pages/welcome_page.dart';
import '../../../features/home/presentation/pages/home_page.dart';
import '../../../features/on_boarding/presentation/pages/on_boarding_screen.dart';
import '../../../features/welcome/splash.dart';

final GlobalKey<NavigatorState> _rootNavigatorKey =
    GlobalKey<NavigatorState>(debugLabel: 'root');
final GlobalKey<NavigatorState> _homeNavigatorKey =
    GlobalKey<NavigatorState>(debugLabel: 'home');
GlobalKey<NavigatorState> get rootNavigatorKey => _rootNavigatorKey;
GlobalKey<NavigatorState> get homeNavigatorKey => _homeNavigatorKey;

class GRouter {
  static GoRouter get router => _router;

  static final GoRouter _router = GoRouter(
      initialLocation: HomePage.path,
      navigatorKey: _rootNavigatorKey,
      routes: <RouteBase>[
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
              return _builderPage(
                  child: const OnBoardingScreen(), state: state);
            }),
        GoRoute(
            path: SetLocationPage.path,
            name: SetLocationPage.name,
            pageBuilder: (BuildContext context, GoRouterState state) {
              return _builderPage(child: const SetLocationPage(), state: state);
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
          builder: (context, state) =>
              RegisterPage(showTextButton: state.extra as bool),
        ),
        GoRoute(
          path: PhoneVerificationPage.path,
          name: PhoneVerificationPage.name,
          builder: (context, state) => const PhoneVerificationPage(),
        ),
        GoRoute(
          path: SignInPage.path,
          name: SignInPage.name,
          builder: (context, state) =>
              SignInPage(showTextButton: state.extra as bool),
        ),
        GoRoute(
          path: ForgotPasswordPage.path,
          name: ForgotPasswordPage.name,
          builder: (context, state) => const ForgotPasswordPage(),
        ),
        GoRoute(
          path: ForgotPasswordSmsPage.path,
          name: ForgotPasswordSmsPage.name,
          builder: (context, state) => const ForgotPasswordSmsPage(),
        ),
        GoRoute(
          path: SetNewPasswordPage.path,
          name: SetNewPasswordPage.name,
          builder: (context, state) => const SetNewPasswordPage(),
        ),
        GoRoute(
          path: HomePage.path,
          name: HomePage.name,
          builder: (context, state) => const HomePage(),
        ),
      ]);

  static Page<dynamic> _builderPage<T>(
      {required Widget child, required GoRouterState state}) {
    if (Platform.isIOS) {
      return CupertinoPage<T>(child: child, key: state.pageKey);
    } else {
      return MaterialPage<T>(child: child, key: state.pageKey);
    }
  }
}
