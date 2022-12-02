import { View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";
import colors from "../constants/theme/colors";
import size from "../constants/theme/size";
import Timer from "../components/Timer";
import RowView from "../components/RowView";
import Divider from "../components/Divider";

export default function GameScreen() {
  const [point, setPoint] = useState(0);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Platform.OS == "android" ? size.androidTopMargin : 0,
        backgroundColor: colors.aquaBlue,
      }}
    >
      <RowView ViewWidth={size.buttonDefaultWidth}>
        <Text
          style={{
            margin: size.mb,
            alignSelf: "center",
            fontWeight: "800",
            fontSize: size.h4,
          }}
        >
          Takım adı
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.orange,
            borderRadius: size.radius,
            width: size.mb * 3,
            height: size.mb * 3,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "800",
              fontSize: size.h4,
              color: colors.white,
            }}
          >
            {point}
          </Text>
        </View>
      </RowView>
      <Timer />
      <Text
        style={{
          margin: size.mb,
          alignSelf: "center",
          fontWeight: "800",
          fontSize: size.h2,
          color: colors.white,
        }}
      >
        Kedi
      </Text>
      <CustomButton disable={true}>Köpek</CustomButton>
      <CustomButton disable={true}>Miyav</CustomButton>
      <CustomButton disable={true}>Tekir</CustomButton>
      <CustomButton disable={true}>Fare</CustomButton>
      <Divider />
      <RowView ViewWidth={size.buttonDefaultWidth}>
        <CustomButton
          bgColor={colors.green}
          color={colors.white}
          buttonWidth={size.halfButtonDefaultWidth}
          onPress={() => setPoint(point + 1)}
        >
          Doğru
        </CustomButton>
        <CustomButton
          bgColor={colors.purple}
          color={colors.white}
          buttonWidth={size.halfButtonDefaultWidth}
          onPress={() => setPoint(point - 2)}
        >
          Tabu (-2)
        </CustomButton>
      </RowView>
      <CustomButton bgColor={colors.orange} color={colors.white}>
        Pas (2)
      </CustomButton>
    </SafeAreaView>
  );
}
