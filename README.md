# Mini-onboarding


## Requirements

- Make sure you are using node LTS version v6.10.0 or above. If you are not using this version,
  please optionally install nvm, (follow the step here: https://github.com/creatio nix/nvm#installation)
  and install the node version 6.10.0 in nvm and try to use it before you start.
- Make sure you have react native installed in your machine. If not, please follow the steps and install it:
  1. Install watchman with Homebrew by running this in your terminal: brew install watchman
  2. Install React Native command line interface using npm by running this in your terminal: npm install -g react-native-cli
- Install Xcode
  Install Xcode is via the Mac App Store. Installing Xcode will also install the iOS Simulator.
  If you have already installed Xcode on your system, make sure it is version 8 or higher.
- Android Studio & Android SDK
  Please go to this page: https://facebook.github.io/react-native/docs/getting-started.html.
  Click Development OS as macOS and Target OS as Android, and follow the steps to install & setup JDK, Android Studio & Android SDK.

## Quick Start

- git clone the project
- cd onboarding
- npm install

# Command Line Commands for running the app locally

## Development

```Shell
iOS: react-native run ios
Android: react-native run android ( For Android, the simulator has to be open befor you run this command)
```

Starts the debug server running on `http://localhost:8081/debugger-ui`