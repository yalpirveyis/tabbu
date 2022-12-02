import { View, Text } from "react-native";
import React from "react";
import size from "../constants/theme/size";
import colors from "../constants/theme/colors";

export default function Timer({ time, gameTotalTime }) {
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
      }}
    >
      <View
        style={{
          width: (size.buttonDefaultWidth / time) * gameTotalTime,
          backgroundColor: colors.green,
          height: size.timerHeight,
          borderRadius: size.radius,
        }}
      />
      <Text style={{ position: "absolute", right: 10, fontWeight: "600" }}>
        {gameTotalTime}
      </Text>
    </View>
  );
}
