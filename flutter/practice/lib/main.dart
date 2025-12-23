import 'package:flutter/material.dart';
import 'package:practice/pages/first_page.dart';
import 'package:practice/pages/second_page.dart';
import 'package:practice/pages/home_page.dart';
import 'package:practice/pages/profile_page.dart';
import 'package:practice/pages/settings_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: FirstPage(),
      routes: {
        '/firstpage': (context) => FirstPage(),
        '/secondpage': (context) => SecondPage(),
        '/homepage': (context) => HomePage(),
        '/profilepage': (context) => ProfilePage(),
        '/settingspage': (context) => SettingsPage(),
      },
    );
  }
}
