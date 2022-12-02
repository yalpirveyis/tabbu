import { Image, SafeAreaView, Platform, Text } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import size from "../constants/theme/size";
import colors from "../constants/theme/colors";
import CustomButton from "../components/CustomButton";
import Input from "../components/Input";
import RowView from "../components/RowView";
import gameRules from "../constants/game/gameRules";

export default function HomeScreen() {
  const navigation = useNavigation();
  const [form, setForm] = useState({
    Team1: "Ronaldo",
    Team2: "Messi",
    Time: gameRules.time,
    Lap: gameRules.lap,
    Pass: gameRules.pass,
    Tabu: gameRules.tabu,
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
      <Input
        onChangeText={(text) => setForm({ ...form, Team1: text })}
        placeholder={"Takım 1"}
        value={form.Team1}
      />
      <Input
        onChangeText={(text) => setForm({ ...form, Team2: text })}
        placeholder={"Takım 2"}
        value={form.Team2}
      />
      <RowView ViewWidth={size.buttonDefaultWidth}>
        <Input
          isValid={
            form.Time < gameRules.minTime || form.Time > gameRules.maxTime
              ? false
              : true
          }
          onChangeText={(text) => setForm({ ...form, Time: text })}
          placeholder={"Süre"}
          keyboardType="numeric"
          value={form.Time.toString()}
          InputWidth={size.halfButtonDefaultWidth}
        />
        <Input
          isValid={
            form.Time < gameRules.minLap || form.Lap > gameRules.maxLap
              ? false
              : true
          }
          onChangeText={(text) => setForm({ ...form, Lap: text })}
          placeholder={"Tur"}
          keyboardType="numeric"
          value={form.Lap.toString()}
          InputWidth={size.halfButtonDefaultWidth}
        />
      </RowView>
      <RowView ViewWidth={size.buttonDefaultWidth}>
        <Input
          isValid={
            form.Time < gameRules.minPass || form.Pass > gameRules.maxPass
              ? false
              : true
          }
          onChangeText={(text) => setForm({ ...form, Pass: text })}
          placeholder={"Pass Hakkı"}
          keyboardType="numeric"
          value={form.Pass.toString()}
          InputWidth={size.halfButtonDefaultWidth}
        />
        <Input
          isValid={
            form.Time < gameRules.minTabu || form.Tabu > gameRules.maxTabu
              ? false
              : true
          }
          onChangeText={(text) => setForm({ ...form, Tabu: text })}
          placeholder={"Tabu"}
          keyboardType="numeric"
          value={form.Tabu.toString()}
          InputWidth={size.halfButtonDefaultWidth}
        />
      </RowView>

      <CustomButton
        disable={
          form.Tabu < gameRules.minTabu ||
          form.Tabu > gameRules.maxTabu ||
          form.Pass < gameRules.minPass ||
          form.Pass > gameRules.maxPass ||
          form.Lap < gameRules.minLap ||
          form.Lap > gameRules.maxLap ||
          form.Time < gameRules.minTime ||
          form.Time > gameRules.maxTime
            ? true
            : false
        }
        onPress={() => navigation.navigate("Game", { form })}
      >
        Oyuna Başla
      </CustomButton>
      {(form.Tabu < gameRules.minTabu ||
        form.Tabu > gameRules.maxTabu ||
        form.Pass < gameRules.minPass ||
        form.Pass > gameRules.maxPass ||
        form.Lap < gameRules.minLap ||
        form.Lap > gameRules.maxLap ||
        form.Time < gameRules.minTime ||
        form.Time > gameRules.maxTime) && (
        <Text
          style={{
            color: colors.red,
            alignSelf: "center",
            marginBottom: size.mb,
            fontWeight: "700",
            fontSize: size.text,
            textAlign: "center",
          }}
        >
          Doğru Değerler giriniz {"\n"}
          Süre: 30-180 {"\n"}
          Tur: 2-10 {"\n"}
          Pas: 0-5 {"\n"}
          Tabu: 1-5 {"\n"}
        </Text>
      )}
    </SafeAreaView>
  );
}
