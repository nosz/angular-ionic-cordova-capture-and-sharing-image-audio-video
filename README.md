# Example Ionic Angular Image Voice Video Sharing

of the  
[Ionic Framework](https://ionicframework.com/)
and  
[Angular](https://angular.io/)

## Table of Contents

- [Getting Started](#getting-started)
- [Step by Step Example Image Voice Video Sharing](#step-by-step)
- [App Preview](#app-preview)
- [Deploying](#deploying)
  - [Android](#android)
  - [iOS](#ios)

## Getting Started

1. [Download the installer](https://nodejs.org/) for Node.js
   - check it with: `node --version`
2. Install the angular CLI globally: `npm install -g @angular/cli`
   - check it with: `ng --version`
3. Install the ionic CLI globally: `npm install -g ionic`
   - check it with: `ionic --version`
4. Install Ionic native-run `npm i -g native-run`
5. Create Ionic Template blank: `ionic start YourProjectName blank`
   - creates a new Folder with the Name: YourProjectName and with the blank template
6. Go to your newly created project: `cd .\YourProjectName`
7. Run `ionic serve` within the app directory to see your app
   - you see it in: [localhost:8100](http://localhost:8100)

## Step by Step

1. Run `ionic cordova plugin add cordova-plugin-media-capture` from the project root

   - this will create folder resources and config.xml in the project root and adding cordova-plugin-media-capture to package.json

2. Run `npm install @ionic-native/media-capture` from the project root

   - this will adding @ionic-native/media-capture to node_modules

3. Run `ionic cordova plugin add cordova-plugin-x-socialsharing`

3. Change the /src/app/app.module.ts

```typescript

```

## App Preview

All app preview screenshots were taken by running `ionic serve --lab` on a retina display.

## Deploying

### Android

1. Check Android Setup: [https://ionicframework.com/docs/installation/android](https://ionicframework.com/docs/installation/android)

2. Run `ionic cordova run android --prod`

### iOS

1. Check iOS Setup: [https://ionicframework.com/docs/installation/ios](https://ionicframework.com/docs/installation/ios)

2. Run `ionic cordova run ios --prod`
