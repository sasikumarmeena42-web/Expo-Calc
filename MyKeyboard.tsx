import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { myColors } from "../styles/Colors";

interface KeypadProps {
  handlePress: (value: string) => void;
}

export const Keypad: React.FC<KeypadProps> = ({ handlePress }) => {
  const buttons = [
    ["C","(",")"],
    ["sin", "cos", "tan", "√",],
    ["log", "ln", "^", "/"],
    ["7", "8", "9", "*"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["π", "e", "0", "."],
    [ "+/-", "%", "="],
  ];

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 30 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {buttons.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((button) => (
              <TouchableOpacity
                key={button}
                style={[
                  styles.button,
                  button === "="
                    ? { backgroundColor: myColors.blue }
                    : ["C", "+/-", "%"].includes(button)
                    ? { backgroundColor: myColors.btnGray }
                    : { backgroundColor: myColors.btnDark },
                ]}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.text}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  button: {
    flex: 1,
    height: 60, // reduced from 70 → fits on all screens
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: myColors.white,
  },
});