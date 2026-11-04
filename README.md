# IT313 - Student Directory Viewer

## Project Description

This project is a Student Directory Viewer developed using React Native and Expo for IT313 Mobile Programming Laboratory 6.

The application allows users to view student information, search for students by name, and flag students who need academic advising.

## Features

- Display five students with their photos, names, and year levels.
- Search for students using a search bar.
- Scroll through the student directory.
- Flag and unflag students for academic advising.
- Change the appearance of the flag button when pressed.

## Component Structure

### StudentCard.js

This component displays the student's photo, name, year level, and Flag button.

It uses View, Text, Image, and Pressable.

### StudentDirectory.js

This is the parent component that manages the student list, search functionality, and flagged status.

It uses useState, TextInput, ScrollView, and array filtering.

### App.js

This is the main application component that renders StudentDirectory.

## How to Run

1. Install Node.js.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Install dependencies using `npm install`.
5. Start the application using `npx expo start`.
6. Scan the QR code using Expo Go on an Android phone.

## Technologies Used

- React Native
- Expo
- JavaScript
- Visual Studio Code

## Laboratory

IT313 - Mobile Programming

Laboratory 6: React Native Core Components in Action