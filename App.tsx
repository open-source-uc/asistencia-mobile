import { useState } from "react";
import Login from "@/screens/Login";
import Courses from "@/screens/Courses";
import TakeAttendance from "@/screens/TakeAttendance";
import Attendances from "@/screens/Attendances";
import NfcScan from "@/screens/NfcScan";
import QrScan from "@/screens/QrScan";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Courses" component={Courses} />
            <Stack.Screen name="Attendances" component={Attendances} />
            <Stack.Screen name="TakeAttendance" component={TakeAttendance} />
            <Stack.Screen name="NfcScan" component={NfcScan} />
            <Stack.Screen name="QrScan" component={QrScan} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
