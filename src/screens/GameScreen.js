import { View, Text, SafeAreaView, Modal } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import CustomButton from "../components/CustomButton";
import colors from "../constants/theme/colors";
import size from "../constants/theme/size";
import Timer from "../components/Timer";
import RowView from "../components/RowView";
import Divider from "../components/Divider";
import { data } from "../data/wordData";
import { useRoute } from "@react-navigation/native";

export default function GameScreen() {
  const route = useRoute();
  let gameRule = route.params.form;
  let Teams = [gameRule.Team1, gameRule.Team2];
  let time = gameRule.Time;
  const [point, setPoint] = useState(0);
  const [level, setLevel] = useState(0);
  const [teamTurn, setTeamTurn] = useState(0);
  const [pass, setPass] = useState(gameRule.Pass);
  const [lap, setLap] = useState(gameRule.Lap);
  const [score, setScore] = useState({ Team1: 0, Team2: 0 });
  const [modalVisible, setModalVisible] = useState(false);

  const CorrectAnswer = () => {
    setPoint(point + 1);
    setLevel(level + 1);
  };
  const WrongAnswer = () => {
    setPoint(point - gameRule.Tabu);
  };
  const [gameTotalTime, setGameTotalTime] = useState(time);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setGameTotalTime((gameTotalTime) => gameTotalTime - 1);
    }, 1000);
    return () => clearInterval(timerId.current);
  }, [lap]);
  useEffect(() => {
    if (gameTotalTime <= 0) {
      clearInterval(timerId.current);
      TimeIsUp();
    }
  }, [gameTotalTime]);

  const TimeIsUp = () => {
    if (teamTurn == 0) {
      setScore({ ...score, Team1: point });
    } else {
      setScore({ ...score, Team2: point });
    }
    setPoint(0);
    setPass(gameRule.Pass);
    setGameTotalTime(time);
    setModalVisible(!modalVisible);
  };
  const Continue = () => {
    if (teamTurn == 0) {
      setTeamTurn(1);
    } else {
      setTeamTurn(0);
    }
    setLap(lap - 1);
    setModalVisible(!modalVisible);
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Platform.OS == "android" ? size.androidTopMargin : 0,
        backgroundColor: colors.aquaBlue,
      }}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 22,
          }}
        >
          <View
            style={{
              margin: 20,
              width: size.buttonDefaultWidth,
              height: size.buttonDefaultWidth * 1.5,
              backgroundColor: "white",
              borderRadius: 20,
              padding: 35,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <RowView>
              <Text>{Teams[0]}</Text>
              <Text>{Teams[1]}</Text>
            </RowView>
            <RowView>
              <Text>{score.Team1}</Text>
              <Text>{score.Team2}</Text>
            </RowView>
            <Text>Kalan Tur:{lap}</Text>
            <Text>Sıra:{teamTurn == 0 ? Teams[1] : Teams[0]}</Text>
            <CustomButton
              bgColor={colors.green}
              color={colors.white}
              buttonWidth={size.halfButtonDefaultWidth}
              onPress={() => Continue()}
            >
              Devam Et
            </CustomButton>
          </View>
        </View>
      </Modal>
      <RowView ViewWidth={size.buttonDefaultWidth}>
        <Text
          style={{
            margin: size.mb,
            alignSelf: "center",
            fontWeight: "800",
            fontSize: size.h4,
          }}
        >
          {Teams[teamTurn]}
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
      <Timer time={time} gameTotalTime={gameTotalTime} />
      <Text
        style={{
          margin: size.mb,
          alignSelf: "center",
          fontWeight: "800",
          fontSize: size.h2,
          color: colors.white,
        }}
      >
        {data[level].Word}
      </Text>
      <CustomButton disable={true}>Köpek</CustomButton>
      <CustomButton disable={true}>Miyav</CustomButton>
      <CustomButton disable={true}>Tekir</CustomButton>
      <CustomButton disable={true}>Fare</CustomButton>
      <Divider />
      <RowView ViewWidth={size.buttonDefaultWidth}>
        <CustomButton
          disable={data.length - 1 == level}
          bgColor={colors.green}
          color={colors.white}
          buttonWidth={size.halfButtonDefaultWidth}
          onPress={CorrectAnswer}
        >
          Doğru
        </CustomButton>
        <CustomButton
          bgColor={colors.purple}
          color={colors.white}
          buttonWidth={size.halfButtonDefaultWidth}
          onPress={WrongAnswer}
        >
          Tabu (-{gameRule.Tabu})
          {
            //TODO
            //Tabu değeri negatif bir değer ise bunu dikkate alarak pozitif bir değere çevirmemiz gerekeiyor.
          }
        </CustomButton>
      </RowView>
      <CustomButton
        disable={data.length - 1 == level || pass == 0}
        disableColor={data.length - 1 == level || pass == 0}
        bgColor={colors.orange}
        color={colors.white}
        onPress={() => {
          setLevel(level + 1);
          setPass(pass - 1);
        }}
      >
        Pas ({pass})
      </CustomButton>
    </SafeAreaView>
  );
}
