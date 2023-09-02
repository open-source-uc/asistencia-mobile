import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { takeAttendance } from "@/api/attendance";

function TakeAttendance({ route, navigation }) {
  const { courseCode, date } = route.params;
  const parsedDate = new Date(date);
  const [studentRut, setStudentRut] = useState("");

  const handleManualEntry = () => {
    takeAttendance({ rut: studentRut });
    Alert.alert("Asistencia registrada");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{courseCode}</Text>
      <Text style={styles.subtitle}>
        Actividad: {parsedDate.toDateString()}
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Escanear QR"
          onPress={() => {
            navigation.navigate("QrScan", { courseCode, date });
          }}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Escanear NFC"
          onPress={() => {
            navigation.navigate("NfcScan", { courseCode, date });
          }}
        />
      </View>

      <View style={styles.manualEntry}>
        <TextInput
          style={styles.input}
          placeholder="Ingresar RUT/N° Alumno/Nombre"
          onChangeText={(text) => setStudentRut(text)}
        />
        <Button
          title="Agregar"
          onPress={() => {
            handleManualEntry();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
  },
  buttonContainer: {
    marginBottom: 16,
  },
  manualEntry: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
  },
});

export default TakeAttendance;
