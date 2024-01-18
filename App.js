import { PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import ProductDetails from "./screens/product/ProductDetails";
import Checkout from "./screens/checkout/Checkout";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName="Home"
            >
              <Stack.Screen
                name="BottomTabNavigation"
                component={BottomTabNavigation}
              />
              <Stack.Screen name="ProductDetails" component={ProductDetails} />
              <Stack.Screen name="Checkout" component={Checkout} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </PaperProvider>
  );
}
