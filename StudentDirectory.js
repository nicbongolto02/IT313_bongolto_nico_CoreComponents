import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";

import StudentCard from "./components/StudentCard";

const initialStudents = [
  {
    id: "s1",
    name: "Ana Cruz",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=1",
    flagged: false,
  },
  {
    id: "s2",
    name: "Bea Santos",
    year: "2nd Year",
    photoUrl: "https://i.pravatar.cc/100?img=2",
    flagged: false,
  },
  {
    id: "s3",
    name: "Cid Ramos",
    year: "4th Year",
    photoUrl: "https://i.pravatar.cc/100?img=3",
    flagged: false,
  },
  {
    id: "s4",
    name: "Dex Alonzo",
    year: "1st Year",
    photoUrl: "https://i.pravatar.cc/100?img=4",
    flagged: false,
  },
  {
    id: "s5",
    name: "Eli Tan",
    year: "3rd Year",
    photoUrl: "https://i.pravatar.cc/100?img=5",
    flagged: false,
  },
];

export default function StudentDirectory() {
  const [students, setStudents] = useState(initialStudents);
  const [query, setQuery] = useState("");

  const toggleFlag = (id) => {
    setStudents((previousStudents) =>
      previousStudents.map((student) =>
        student.id === id
          ? { ...student, flagged: !student.flagged }
          : student
      )
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Student Directory</Text>
        <Text style={styles.subtitle}>
          {students.length} students this term
        </Text>
      </View>

      <TextInput
        style={styles.search}
        placeholder="Search students..."
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContent}
      >
        {filteredStudents.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            name={student.name}
            year={student.year}
            photoUrl={student.photoUrl}
            flagged={student.flagged}
            onToggleFlag={toggleFlag}
          />
        ))}

        {filteredStudents.length === 0 && (
          <Text style={styles.empty}>
            No students found.
          </Text>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F2FA",
    paddingTop: 45,
  },

  header: {
    backgroundColor: "#211A52",
    padding: 22,
  },

  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  subtitle: {
    color: "#D5D0E8",
    marginTop: 5,
  },

  search: {
    backgroundColor: "#FFFFFF",
    margin: 16,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#DDD8EF",
  },

  list: {
    flex: 1,
  },

  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },

  empty: {
    textAlign: "center",
    color: "#777",
    marginTop: 30,
  },
});
