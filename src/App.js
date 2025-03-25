import React, { useContext } from "react";
import { Text, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

// Screens
import HomeScreen from "./screens/HomeScreen";
import AddEntryScreen from "./screens/AddEntryScreen";
import HistoryScreen from "./screens/HistoryScreen";
import EditEntryScreen from "./screens/EditEntryScreen";
import SettingsScreen from "./screens/Settings";
import SplashScreen from "./screens/SplashScreen/SplashScreen";
import StatsSplashScreen from "./screens/Stats/StatsSplashScreen";
import MonthlyStatsScreen from "./screens/Stats/StatsScreen";
import MappingSplashScreen from "./screens/Map/MappingSplashScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  const { theme } = useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home": iconName = "home"; break;
            case "Add Entry": iconName = "add-circle"; break;
            case "History": iconName = "time"; break;
            case "Settings": iconName = "settings"; break;
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
          backgroundColor: theme.tabBarBackground,
          borderTopColor: theme.borderLight,
        },
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textSecondary,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Add Entry" component={AddEntryScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Main" component={MainTabs} />
      <Stack.Screen name="EditEntry" component={EditEntryScreen} />
      <Stack.Screen name="StatsSplash" component={StatsSplashScreen} />
      <Stack.Screen name="MonthlyStats" component={MonthlyStatsScreen} />
      <Stack.Screen name="MappingSplash" component={MappingSplashScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) return <AppLoading />;

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = { fontFamily: "Inter_400Regular" };

  return (
    <ThemeProvider>
      <AppWithTheme />
    </ThemeProvider>
  );
}

function AppWithTheme() {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </>
  );
}
