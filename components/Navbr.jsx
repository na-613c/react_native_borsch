import { StyleSheet, Text, View } from "react-native";

export const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>БОРЩ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "blue",
    paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});
