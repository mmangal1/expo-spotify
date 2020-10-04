# MAIKUP

## UI:

Login Screen:  
**[X]** Title  
**[X]** Email/Password Inputtable Box  
**[X]** Login Button  
**[X]** SignUp Button  
**[]** Forgot Password Button  
**[X]** SignUp Button -> SignUp Screen  
**[X]** Login Button -> LoginPage(LoginPage not yet made - this just directs you to another page)  
**[X]** Email handler (save it in this.state)  
**[X]** Password handler (save it in this.state)  
**[X]** Login with Authentication  
**[]** Screen needs to slide up when keyboard present  
**[]** Persist Login Info so user doesn't need to sign in again  

SignUp Screen:  
**[X]** Full Name Box  
**[X]** UserName Box  
**[X]** Email Box  
**[X]** Password Box  
**[X]** SignUp Button  
**[X]** SignUp Button -> FirstTimeUser Screen  
**[X]** SignUp with Authentication  
**[]** Screen needs to slide up when keyboard present  
  
FirstTimeUser Screen:  
**[]** Title Header  
**[]** ColorShade Boxes  
**[]** Know Your Foundation? Enter Here Button  
**[]** Know Your Foundation? Enter Here Button -> KnowYourFoundation Screen  

## Backend:

## BoilerPlate Taken From
https://github.com/calebnance/expo-spotify

## Table of Contents

- [Install & Build](#install--build)
- [Features](#features)
- [Linting](#linting)
- [Expo Web](#expo-web)
- [Demo & Release Notes](#release-notes)

## Install & Build

First, make sure you have Expo CLI installed: `npm install -g expo-cli`

Install: `yarn` or `yarn install`

Run Project Locally: `yarn dev` or `yarn start`

## Features

- Expo SDK 39
- iOS, Android and PWA (Web App)
- React Navigation v4
- PropTypes

## Linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and airbnb config
- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file

## Expo Web

Currently Expo Web support is **not production ready**, but if you want to see how this project looks on the web as a PWA (Progressive Web App)... using [react-native-web](https://github.com/necolas/react-native-web) and react-dom.

[PWA: Expo Spotify](https://expo-spotify.calebnance.now.sh) looks best on a mobile device, but not bad on desktop!

**Dev with Expo Web**
- Remove node_modules if they exist: `rm -rf nodes_modules`
- Install/Re-install: `yarn`
- Start development: `yarn web` or `expo start --web`
- Build PWA: `yarn web-build` or `expo build:web`
