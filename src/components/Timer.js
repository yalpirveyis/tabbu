import { View, Text } from "react-native";
import React from "react";
import size from "../constants/theme/size";
import colors from "../constants/theme/colors";

export default function Timer({ time }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        width: size.buttonDefaultWidth,
        backgroundColor: colors.white,
        height: size.timerHeight,
        borderRadius: size.radius,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View
        style={{
          width: size.buttonDefaultWidth - 200,
          backgroundColor: colors.green,
          height: size.timerHeight,
          borderRadius: size.radius,
        }}
      />
      <Text style={{ marginRight: 10, fontWeight: "600" }}>30</Text>
    </View>
  );
}
