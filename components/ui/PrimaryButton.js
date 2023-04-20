import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/colors";

function PrimaryButton({ children, onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 40,
    margin: 4,
    overflow: "hidden",
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 13,
    paddingHorizontal: 26,
    borderRadius: 12,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
