import { StyleSheet, Text, View, Image } from "react-native";

export const Action = ({ title, body, uri }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri:uri,
        }}
      />
      <Text style={styles.text}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: { 
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  text: {
    fontSize: 20,
  },
  title: {
    fontSize: 30,
  },
  tinyLogo: {
    margin:'5%',
    width: 300,
    height: 200,
    // resizeMode: "stretch",
  },
});
