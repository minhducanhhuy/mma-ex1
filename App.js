import React, { useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import ProfileScreen from './screens/ProfileScreen';
import AllAppsScreen from './screens/AllAppsScreen';
import BottomTabBar from './components/BottomTabBar';

export default function App() {
  const [currentTab, setCurrentTab] = useState('Profile');

  const renderScreen = () => {
    switch (currentTab) {
      case 'All Apps':
        return <AllAppsScreen />;
      case 'Profile':
        return <ProfileScreen />;
      case 'Home':
      case 'Gold':
      case 'Game':
      default:
        // Màn hình trống cho Home, Gold, Game
        return <View style={styles.emptyScreen} />;
    }
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.mobileContainer}>
        <View style={styles.screenContainer}>{renderScreen()}</View>
        <BottomTabBar currentTab={currentTab} onSelectTab={setCurrentTab} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#EAEFF5',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  mobileContainer: {
    width: '100%',
    maxWidth: 440,
    height: '100%',
    maxHeight: 900,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    overflow: 'hidden',
    ...(Platform.OS === 'web' ? { borderRadius: 16 } : {}),
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  emptyScreen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
