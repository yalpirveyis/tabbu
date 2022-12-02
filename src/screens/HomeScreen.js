import { Image, SafeAreaView, Platform, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import size from "../constants/theme/size";
import colors from "../constants/theme/colors";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import RowView from "../components/RowView";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    Team1: "",
    Team2: "",
    Time: 60,
    Lap: 3,
    Pass: 2,
    Tabu: 2,
  });
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Platform.OS == "android" ? size.androidTopMargin : 0,
        backgroundColor: colors.aquaBlue,
      }}
    >
      <Image
        style={{
          width: size.logoSize,
          height: size.logoSize,
          alignSelf: "center",
        }}
        source={require("../assets/img/logo.png")}
      />
      <Text
        style={{ alignSelf: "center", color: colors.white, fontSize: size.h2 }}
      >
        Tabbu
      </Text>
      <Input placeholder={"Takım 1"} value={form.Team1} />
      <Input placeholder={"Takım 2"} value={form.Team2} />
      <RowView ViewWidth={size.buttonDefaultWidth}>
        <Input
          placeholder={"Süre"}
          value={form.Time}
          InputWidth={size.halfButtonDefaultWidth}
        />
        <Input
          placeholder={"Tur"}
          value={form.Lap}
          InputWidth={size.halfButtonDefaultWidth}
        />
      </RowView>
      <RowView ViewWidth={size.buttonDefaultWidth}>
        <Input
          placeholder={"Pass Hakkı"}
          value={form.Pass}
          InputWidth={size.halfButtonDefaultWidth}
        />
        <Input
          placeholder={"Tabu"}
          value={form.Tabu}
          InputWidth={size.halfButtonDefaultWidth}
        />
      </RowView>
      <CustomButton onPress={() => navigation.navigate("Game")}>
        Oyuna Başla
      </CustomButton>
    </SafeAreaView>
  );
}
