import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomTabBar({ currentTab, onSelectTab }) {
  const tabs = [
    {
      id: 'Home',
      label: 'Home',
      activeIcon: 'home',
      inactiveIcon: 'home-outline',
    },
    {
      id: 'All Apps',
      label: 'All Apps',
      activeIcon: 'folder',
      inactiveIcon: 'folder-outline',
    },
    {
      id: 'Gold',
      label: 'Gold',
      activeIcon: 'information-circle',
      inactiveIcon: 'information-circle-outline',
    },
    {
      id: 'Game',
      label: 'Game',
      activeIcon: 'game-controller',
      inactiveIcon: 'game-controller-outline',
    },
    {
      id: 'Profile',
      label: 'Profile',
      activeIcon: 'person',
      inactiveIcon: 'person-outline',
    },
  ];

  return (
    <View style={styles.tabBarContainer}>
      {tabs.map((tab) => {
        const isActive = currentTab === tab.id;
        const iconName = isActive ? tab.activeIcon : tab.inactiveIcon;
        const activeColor = '#1860C3';
        const inactiveColor = '#7E8B9B';

        return (
          <TouchableOpacity
            key={tab.id}
            activeOpacity={0.6}
            style={styles.tabItem}
            onPress={() => onSelectTab(tab.id)}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <View style={styles.iconWrapper} pointerEvents="none">
              <Ionicons
                name={iconName}
                size={22}
                color={isActive ? activeColor : inactiveColor}
              />
            </View>
            <Text
              pointerEvents="none"
              style={[
                styles.tabLabel,
                { color: isActive ? activeColor : inactiveColor },
                isActive && styles.activeTabLabel,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 65,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    paddingBottom: Platform.OS === 'ios' ? 12 : 4,
    paddingTop: 6,
    zIndex: 999,
    elevation: 10,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    ...(Platform.OS === 'web' ? { cursor: 'pointer' } : {}),
  },
  iconWrapper: {
    marginBottom: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 11,
    fontWeight: '500',
    textAlign: 'center',
  },
  activeTabLabel: {
    fontWeight: '700',
  },
});
