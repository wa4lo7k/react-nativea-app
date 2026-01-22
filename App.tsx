/**
 * React Native Navigation App
 * Demonstrates Stack and Bottom Tab Navigation
 *
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, View} from 'react-native';
import 'react-native-gesture-handler';
import AuthNavigator from './src/navigation/AuthNavigator';
import TabNavigator from './src/navigation/TabNavigator';
import NavigationToggle from './src/components/NavigationToggle';

function App(): React.JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleNavigation = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#007AFF" />
        {isAuthenticated ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <NavigationToggle
        onToggle={toggleNavigation}
        isAuthenticated={isAuthenticated}
      />
    </View>
  );
}

export default App;
