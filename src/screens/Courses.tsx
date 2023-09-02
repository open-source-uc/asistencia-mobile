import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
function Courses({ navigation }) {
  const courses = [
    { code: "IIC3585-1", name: "Diseño Avaz..." },
    { code: "IIC3585-2", name: "Web Avaz..." },
    { code: "IIC3585-3", name: "Aplicación Avaz..." },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tienes permiso para tomar asistencia en</Text>
      {courses.map((course, index) => (
        <View key={index} style={styles.courseButton}>
        <Button
          key={index}
          title={`${course.code} ${course.name}`}
          onPress={() => {
            navigation.navigate("Attendances", { courseCode: course.code });
          }}
        />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
  courseButton: {
    marginBottom: 16,
  },
});

export default Courses;
