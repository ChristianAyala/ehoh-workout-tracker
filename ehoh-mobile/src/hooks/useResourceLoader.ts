import { useFonts } from '@expo-google-fonts/open-sans';
import fonts from 'config/fonts';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

const useResourceLoader = () => {
  const [fontsLoaded] = useFonts(fonts.OpenSans);
  const isLoading = !fontsLoaded;

  useEffect(() => {
    const hideSplash = async () => await SplashScreen.preventAutoHideAsync();

    if (isLoading) hideSplash();

    return () => {
      const showSplash = async () => await SplashScreen.hideAsync();
      showSplash();
    };
  }, [isLoading]);

  return isLoading;
};

export default useResourceLoader;
