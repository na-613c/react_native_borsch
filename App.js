import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Alert , View } from "react-native";
import { Navbar } from "./components/Navbr";
import { data } from "./data/data.json";
import * as Progress from "react-native-progress";
import { Action } from "./components/Action";
import { MyModal } from "./components/MyModal";

export default function App() {
  const [state, setState] = useState(data);
  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   counter === state - 1 && Alert.alert("БОРЩ ГОТОВ !!!");
  // }, [counter]);

  return (
    <View style={styles.root}>
      <Navbar />
      <View style={styles.container}>
        <View style={styles.progress}>
          <Progress.Circle
            progress={`${(counter / (state.length - 1)).toFixed(2)}`}
            size={150}
            animated={true}
            direction="counter-clockwise"
            showsText={true}
            formatText={() => {
              return `${((counter * 100) / (state.length - 1)).toFixed(0)}%`;
            }}
          />
        </View>
        <View style={styles.control}>
          <Button
            style={styles.button}
            title="Вернуться"
            onPress={() => setCounter(counter - 1)}
            disabled={counter === 0}
          />
          <Button
            style={styles.button}
            title="Следующий шаг"
            onPress={() => setCounter(counter + 1)}
            disabled={counter === state.length - 1}
          />
        </View>

        <Action
          title={state[counter].title}
          body={state[counter].body}
          uri={state[counter].img}
        />
      </View>
      <MyModal isShow={counter === state - 1}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  control: {
    marginBottom: "5%",
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  progress: {
    marginTop: "5%",
    marginBottom: "5%",
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  action: {
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
    height:20,
    width: 250,
    margin: "5%",
    color:'red'
  },
  root: {
    backgroundColor: "#eee",
    height: "100%",
    color: "blue",
  },
});
