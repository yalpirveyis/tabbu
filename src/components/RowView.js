import { View, Text } from "react-native";
import React from "react";

export default function RowView({ children, ViewWidth }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "space-between",
        alignItems: "center",
        width: ViewWidth ? ViewWidth : "100%",
      }}
    >
      {children}
    </View>
  );
}
