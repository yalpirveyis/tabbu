import React, { useState } from "react";
import { TextInput } from "react-native";
import colors from "../constants/theme/colors";
import size from "../constants/theme/size";

export default function Input({
  InputWidth,
  value,
  placeholder,
  onChangeText,
  keyboardType,
  isValid,
}) {
  return (
    <TextInput
      style={{
        width: InputWidth ? InputWidth : size.buttonDefaultWidth,
        height: size.buttonDefaultHeight,
        borderRadius: size.radius,
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: isValid == false ? colors.red : colors.white,
        alignSelf: "center",
        marginBottom: size.mb,
        padding: 10,
      }}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      keyboardType={keyboardType ? keyboardType : "default"}
    />
  );
}
