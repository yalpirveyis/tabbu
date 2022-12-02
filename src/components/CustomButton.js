import { View, Text, TouchableOpacity } from "react-native";
import React, { Children } from "react";
import size from "../constants/theme/size";
import colors from "../constants/theme/colors";

export default function CustomButton({
  children,
  color,
  onPress,
  disable,
  buttonWidth,
  bgColor,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable ? disable : false}
      style={{
        width: buttonWidth ? buttonWidth : size.buttonDefaultWidth,
        height: size.buttonDefaultHeight,
        backgroundColor: bgColor ? bgColor : colors.white,
        alignSelf: "center",
        borderRadius: size.radius,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: size.mb,
      }}
    >
      <Text
        style={{
          fontWeight: "800",
          fontSize: 20,
          color: color ? color : colors.blue,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
