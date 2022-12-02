import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default {
  width100: windowWidth,
  heighth100: windowHeight,
  androidTopMargin: 24,
  iosTopMargin: 0,
  logoSize: windowWidth / 2,
  h1: 96,
  h2: 48,
  h3: 32,
  h4: 24,
  text: 16,
  buttonDefaultWidth: windowWidth * 0.75,
  halfButtonDefaultWidth: (windowWidth * 0.75) / 2 - 7.5,
  buttonDefaultHeight: 40,
  radius: 15,
  mb: 15,
  timerHeight: 30,
};
