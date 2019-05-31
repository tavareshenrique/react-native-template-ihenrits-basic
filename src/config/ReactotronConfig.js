import Reactotron from "reactotron-react-native";

if (__DEV__) {
  // if necessary, enter the ip of your computer for the Reactotron to work.
  const tron = Reactotron.configure(/*{ host: "192.168.9.101" }*/) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  console.tron = tron;

  tron.clear();
}
