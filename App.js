import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <HomeScreen />
    </>
  );
}
