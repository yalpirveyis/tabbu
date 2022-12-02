import { View, Text } from "react-native";
import React from "react";
import size from "../constants/theme/size";
import colors from "../constants/theme/colors";

export default function Divider() {
  return (
    <View
      style={{
        width: size.buttonDefaultWidth,
        height: 3,
        backgroundColor: colors.white,
        marginBottom: size.mb * 2,
        marginTop: size.mb * 2,
        alignSelf: "center",
      }}
    ></View>
  );
}
