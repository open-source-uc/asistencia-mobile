import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

function Attendances({ navigation, route }) {
  const { courseCode } = route.params;

  const generateActivities = (num: number) => {
    return Array.from({ length: num }).map((_, index) => ({
      activity: `Act ${index + 1}`,
      date: new Date(new Date().setDate(new Date().getDate() - index)),
    }));
  };

  const data = generateActivities(10);

  const isToday = (someDate = new Date()) => {
    const today = new Date();
    return (
      someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{courseCode}</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          isToday(item.date) ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("TakeAttendance", {
                  courseCode,
                  date: item.date.toDateString(),
                })
              }
            >
              <View style={{ ...styles.card, backgroundColor: "#0DABAB" }}>
                <Text style={{ color: "white" }}>
                  {item.activity}. {item.date.toDateString()}
                </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.card}>
              <Text>
                {item.activity}. {item.date.toDateString()}
              </Text>
            </View>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
  },
  card: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 16,
    borderRadius: 8,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});

export default Attendances;
