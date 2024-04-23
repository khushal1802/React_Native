
import { Button, StyleSheet} from "react-native";
import { NavigationContainer, } from "@react-navigation/native";
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from "./component/Login";
import Reg from "./component/Reg";
import Home from "./component/Home";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Drawer2 from "./component/Drawer2";

const Tab = createMaterialTopTabNavigator();

// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{
//         headerStyle:{
//           backgroundColor:"skyblue"
//         },
//         headerTintColor:"white",
//         headerTitleStyle:{
//           fontWeight:"bold"
//         } 
//       }}>
//         <Stack.Screen name="Login" component={Login} options={{title:'UserLogin',headerTitle:()=><Button title="Left"/>, headerRight:()=><Button title="Right"/>}}/>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Reg" component={Reg} />
//       </Stack.Navigator>
//     </NavigationContainer>

//   );
// }


export default function App() {
  return (
  <>
    <Drawer2 />
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Reg" component={Reg} />
        <Tab.Screen name="Home" component={Home} />
      </Tab.Navigator>
      {/* <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator> */}
    </NavigationContainer>
  </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
