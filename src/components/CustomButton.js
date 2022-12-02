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
  disableColor,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable ? disable : false}
      style={{
        width: buttonWidth ? buttonWidth : size.buttonDefaultWidth,
        height: size.buttonDefaultHeight,
        backgroundColor: disableColor
          ? colors.white
          : bgColor
          ? bgColor
          : colors.white,
        alignSelf: "center",
        borderRadius: size.radius,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: size.mb,
        borderWidth: disableColor ? 3 : 0,
        borderColor: disableColor && colors.red,
      }}
    >
      <Text
        style={{
          fontWeight: "800",
          fontSize: 20,
          color: disableColor ? colors.red : color ? color : colors.blue,
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
