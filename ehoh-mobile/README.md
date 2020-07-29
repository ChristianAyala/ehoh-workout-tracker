# EHOH Workout Tracker

EHOH workouts, or **E**very **H**our **O**n the **H**our, is an easy way to stay active
_in these trying times_. As the name implies, the goal is to do a tiny workout every
hour during a normal work day. They shouldn't take more than a minute or two, and
can help break the monotony of all-day zoom calls while getting the body moving.

This is a mobile app written in React Native, with support for both Android and iOS.
The app is meant to record those hourly workouts so you can see what you've tried
and how you've progressed over time. It's not meant to replace your other workout
apps, but rather supplement them with these small motions that would otherwise go
unrecorded or undetected by smartwatches.

## Preparing the app

As mentioned previously this app is written in [React Native](https://reactnative.dev)
with [Expo](https://expo.io). This makes setup fairly quick, in particular without having
to do development within XCode or Android Studio (though both are required if you want
to use the iOS and Android smulators, see below):

```sh
# Install homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

# Install node and yarn
brew install node yarn

# Add expo-cli as a global package
yarn global add expo-cli

# Clone the repo, install dependencies and start 'er up
git clone https://github.com/ChristianAyala/ehoh-workout-tracker.git
cd ehoh-workout-tracker/ehoh-mobile
yarn
expo start
```

## Running the app on a device

There are a few ways to get the app running on a device:

- iOS Simulator: Requires installing [XCode](https://apps.apple.com/us/app/xcode/id497799835?mt=12).
Once installed, launch Simulator from Spotlight or from terminal with the following:

```sh
open /Applications/Xcode.app/Contents/Developer/Applications/Simulator.app/
```

Once it boots, enter `i` in the terminal window where you ran `expo start`. This
will install the Expo client on the device then launch the app (the first time will
take a while as it compiles the JS bundle).

- On a physical device: When running `expo start` you'll see a QR code generated
in the terminal window. You can scan that QR code with your phone, which will launch
the app on your device (or install the Expo client if you don't have it).

## Debugging

The easiest way to debug the app is to use react-native-debugger. To quickly install:

```sh
brew cask install react-native-debugger
```

This will install React Native Debugger into your `/Applications` folder. Launch the app,
which will start listening for debug connections on port 8080. Enter `Command-T`, which
will open a new window with a port entry field. Set the port to `19001`. 

Once the app is running on a simulator, enter `Command-D` in the simulator, which will
open the debug menu. Select `Enable Remote JS`, which will then connect to RND. You
will now be able to triage React and Redux issues.