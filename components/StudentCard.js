import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";

export default function StudentCard({
  id,
  name,
  year,
  photoUrl,
  flagged,
  onToggleFlag,
}) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: photoUrl }}
        style={styles.photo}
      />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.year}>{year}</Text>
      </View>

      <Pressable
        onPress={() => onToggleFlag(id)}
        style={({ pressed }) => [
          styles.button,
          flagged && styles.flaggedButton,
          pressed && styles.pressedButton,
        ]}
      >
        <Text
          style={[
            styles.buttonText,
            flagged && styles.flaggedText,
          ]}
        >
          {flagged ? "★ Flagged" : "☆ Flag"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#DDD8EF",
    elevation: 2,
  },

  photo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#EAE6F5",
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#24204A",
  },

  year: {
    fontSize: 13,
    color: "#777",
    marginTop: 4,
  },

  button: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#7C70A6",
  },

  flaggedButton: {
    backgroundColor: "#D99A00",
    borderColor: "#D99A00",
  },

  pressedButton: {
    opacity: 0.6,
  },

  buttonText: {
    color: "#5B5185",
    fontWeight: "bold",
  },

  flaggedText: {
    color: "#FFFFFF",
  },
});
