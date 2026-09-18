import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  MyProfileIcon,
  SettingsIcon,
  SupportIcon,
  FAQIcon,
  AdminIcon,
  LogoutIcon,
} from '../components/ProfileIcons';

export default function ProfileScreen({ navigation }) {
  const menuItems = [
    { id: '1', title: 'My Profile', IconComponent: MyProfileIcon },
    { id: '2', title: 'Settings', IconComponent: SettingsIcon },
    { id: '3', title: 'Support', IconComponent: SupportIcon },
    { id: '4', title: 'FAQ', IconComponent: FAQIcon },
    { id: '5', title: 'Admin', IconComponent: AdminIcon },
    { id: '6', title: 'Logout', IconComponent: LogoutIcon, isLogout: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#287AE6" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Cover Header Banner */}
        <View style={styles.headerCover}>
          {/* Subtle Decorative Shapes */}
          <View style={styles.decorativeCircle1} />
          <View style={styles.decorativeCircle2} />
        </View>

        {/* Profile Avatar & Name Container */}
        <View style={styles.profileSection}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>K</Text>
            </View>
            <TouchableOpacity activeOpacity={0.8} style={styles.cameraBadge}>
              <Ionicons name="camera" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          <Text style={styles.userName}>Phạm Quang Khang (KHANGPQ3)</Text>
          <Text style={styles.userRole}>(BM SE)</Text>
        </View>

        {/* Menu Items List */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => {
            const Icon = item.IconComponent;
            return (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.7}
                style={[
                  styles.menuItem,
                  index === menuItems.length - 1 && styles.noBorderBottom,
                ]}
              >
                <View style={styles.menuLeft}>
                  <View style={styles.iconContainer}>
                    <Icon size={22} color="#1860C3" />
                  </View>
                  <Text
                    style={[
                      styles.menuTitle,
                      item.isLogout && styles.logoutTitle,
                    ]}
                  >
                    {item.title}
                  </Text>
                </View>
                {!item.isLogout && (
                  <Ionicons name="chevron-forward" size={20} color="#C7C7CC" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>

        {/* App Version & Copyright Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>myFPT Version 5.9.10</Text>
          <Text style={styles.footerText}>Copyright @ FPT Software 2021</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  headerCover: {
    height: 140,
    backgroundColor: '#287AE6',
    position: 'relative',
    overflow: 'hidden',
  },
  decorativeCircle1: {
    position: 'absolute',
    top: -40,
    right: -20,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  decorativeCircle2: {
    position: 'absolute',
    bottom: -50,
    left: -30,
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: -55,
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 12,
  },
  avatarCircle: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: '#DDEBFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  avatarText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#1860C3',
  },
  cameraBadge: {
    position: 'absolute',
    bottom: 2,
    right: 2,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#6A7885',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1A1A1A',
    textAlign: 'center',
  },
  userRole: {
    fontSize: 14,
    color: '#757575',
    marginTop: 4,
    textAlign: 'center',
  },
  menuContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  noBorderBottom: {
    borderBottomWidth: 0,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 36,
    alignItems: 'flex-start',
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#262626',
    marginLeft: 8,
  },
  logoutTitle: {
    color: '#262626',
  },
  footer: {
    alignItems: 'center',
    marginTop: 35,
    marginBottom: 30,
  },
  footerText: {
    fontSize: 13,
    color: '#9E9E9E',
    lineHeight: 20,
  },
});
