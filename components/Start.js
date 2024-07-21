import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Start = ({ navigation }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/Background-Image.png")}
        style={styles.bgImage}
      >
        <Text style={styles.title}>Chat App</Text>

        <View style={styles.loginCard}>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Type your username here"
          />
          <Text style={styles.chooseBackgroundTxt}>
            Choose Background Color:
          </Text>
          <View style={styles.colorSelection}>
            <TouchableOpacity
              style={styles.blackButton}
              onPress={() => setColor("#090C08")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.purpleButton}
              onPress={() => setColor("#474056")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.blueButton}
              onPress={() => setColor("#8A95A5")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={styles.greenButton}
              onPress={() => setColor("#B9C6AE")}
            ></TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              navigation.navigate("Chat", { name: name, color: color })
            }
          >
            <Text style={styles.buttonText}>Start Chatting</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    //alignItems: "center",
  },
  textInput: {
    width: "88%",
    padding: 15,
    borderWidth: 1,
    marginTop: 15,
    marginBottom: 15,
    fontWeight: "300",
    color: "#757803",
    opacity: 50,
    borderColor: "#757803",
  },
  title: {
    fontSize: 45,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
  },
  bgImage: {
    flex: 1,
    justifyContent: "center",
  },

  loginCard: {
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    width: "88%",
    marginLeft: 25,
    marginTop: 50,
    marginBottom: 400,
    borderRadius: 10,
  },
  button: {
    backgroundColor: "#757803",
    paddingLeft: 75,
    paddingRight: 75,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    marginTop: 10,
    marginBottom: 10,
  },
  chooseBackgroundTxt: {
    color: "#757803",
  },
  colorSelection: {
    flexDirection: "row",
    padding: 5,
    margin: 5,
  },
  blackButton: {
    backgroundColor: "#090C08",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    margin: 5,
  },
  purpleButton: {
    backgroundColor: "#474056",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    margin: 5,
  },
  blueButton: {
    backgroundColor: "#8A95A5",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    margin: 5,
  },
  greenButton: {
    backgroundColor: "#B9C6AE",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    margin: 5,
  },
});

export default Start;
