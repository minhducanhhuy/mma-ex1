import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Permanent GitHub raw assets URL from commit history so Snack Git import succeeds without binary upload errors
const CDN_BASE = 'https://raw.githubusercontent.com/minhducanhhuy/mma-ex1/1a06b30/asset/ic_favourite';

const getIcon = (filename) => ({
  uri: `${CDN_BASE}/${filename}`,
});

export default function AllAppsScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const sectionsData = [
    {
      title: 'WORK',
      data: [
        {
          id: 'approve_now',
          title: 'Approve Now',
          subtitle:
            'Notify managers of pending requests and allow managers to approve/reject requests from internal tools',
          icon: getIcon('ic_favourite_approve_now.png'),
        },
        {
          id: 'reward',
          title: 'Reward',
          subtitle:
            'Send colleagues a thank you note or reward Gold for exceptional contribution',
          icon: getIcon('ic_favourite_recognition.png'),
        },
        {
          id: 'discipline',
          title: 'Discipline',
          subtitle:
            'Send a discipline warning to subordinates for violation of codes of conduct',
          icon: getIcon('ic_favourite_discipline.png'),
        },
        {
          id: 'learning',
          title: 'Learning',
          subtitle:
            'View a list of mandatory, registered and suggested learning courses; check-in and send feedback for each course',
          icon: getIcon('ic_favourite_learning.png'),
        },
        {
          id: 'my_tasks',
          title: 'My Tasks',
          subtitle: '',
          icon: getIcon('ic_favorite_pear.webp'),
        },
      ],
    },
    {
      title: 'UTILITIES',
      data: [
        {
          id: 'fpt_care',
          title: 'FPT Care',
          subtitle: 'FPT Care',
          icon: getIcon('ic_favourite_fpt_care.png'),
        },
        {
          id: 'events',
          title: 'Events',
          subtitle:
            'Register, check-in, check-out, send feedback to company events and programs',
          icon: getIcon('ic_favourite_event.png'),
        },
        {
          id: 'survey',
          title: 'Survey',
          subtitle:
            'Conduct and collect responses for company-wide or department-wide surveys',
          icon: getIcon('ic_favourite_survey.png'),
        },
        {
          id: 'fpt_dating',
          title: 'FPT Dating',
          subtitle: 'Dating feature.',
          icon: getIcon('ic_favourite_dating.png'),
        },
        {
          id: 'payslip',
          title: 'Payslip',
          subtitle: 'Payslip',
          icon: getIcon('ic_favourite_payslip.png'),
        },
        {
          id: 'birthday',
          title: 'Birthday',
          subtitle:
            "Your birthday is a special moment. We're very happy to send the best wishes for you. Colleagues can send you birthday wishes on myFPT.",
          icon: getIcon('ic_favourite_birthday.png'),
        },
      ],
    },
    {
      title: 'NEWS',
      data: [
        {
          id: 'news',
          title: 'News',
          subtitle:
            'A collection of latest news and notable events around the company',
          icon: getIcon('ic_favourite_news.png'),
        },
        {
          id: 'star_ave',
          title: 'Star Ave',
          subtitle:
            'Recognise notable achievements within a business unit or within FPT',
          icon: getIcon('ic_favourite_star_ave.png'),
        },
      ],
    },
    {
      title: 'WIKI',
      data: [
        {
          id: 'employee_info',
          title: 'Employee Info',
          subtitle:
            'Basic, non-confidential employee information (name, gender, department, etc.)',
          icon: getIcon('ic_favourite_employee_info.png'),
        },
      ],
    },
    {
      title: 'GAME',
      data: [
        {
          id: 'game',
          title: 'Game',
          subtitle: 'Community-engaging games with Gold as rewards',
          icon: getIcon('ic_favourite_game.png'),
        },
      ],
    },
  ];

  // Filter sections and items based on search query
  const filteredSections = sectionsData
    .map((section) => {
      const filteredItems = section.data.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return { ...section, data: filteredItems };
    })
    .filter((section) => section.data.length > 0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Top Search Bar Header */}
      <View style={styles.searchHeader}>
        <View style={styles.searchBoxContainer}>
          <Ionicons name="search" size={18} color="#8E8E93" style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Type feature's name"
            placeholderTextColor="#8E8E93"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={18} color="#8E8E93" />
            </TouchableOpacity>
          )}
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.gridBtn}>
          <Ionicons name="grid-outline" size={24} color="#6C6C70" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {filteredSections.map((section) => (
          <View key={section.title} style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionHeaderText}>{section.title}</Text>
            </View>
            {section.data.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                activeOpacity={0.7}
                style={[
                  styles.appItemRow,
                  index === section.data.length - 1 && styles.noBorderBottom,
                ]}
              >
                <View style={styles.appIconWrapper}>
                  {item.isVectorIcon ? (
                    <Ionicons name={item.vectorIconName} size={24} color="#0A84FF" />
                  ) : (
                    <Image source={item.icon} style={styles.appIcon} resizeMode="contain" />
                  )}
                </View>
                <View style={styles.appTextContainer}>
                  <Text style={styles.appTitle}>{item.title}</Text>
                  {item.subtitle ? (
                    <Text style={styles.appSubtitle}>{item.subtitle}</Text>
                  ) : null}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  searchBoxContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEEEEF',
    borderRadius: 8,
    paddingHorizontal: 10,
    height: 38,
  },
  searchIcon: {
    marginRight: 6,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#000000',
    paddingVertical: 0,
  },
  gridBtn: {
    marginLeft: 12,
    padding: 4,
  },
  scrollView: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 0,
  },
  sectionHeader: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionHeaderText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6C6C70',
    letterSpacing: 0.5,
  },
  appItemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  noBorderBottom: {
    borderBottomWidth: 0,
  },
  appIconWrapper: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F7F8FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  appIcon: {
    width: 32,
    height: 32,
  },
  appTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1C1C1E',
    marginBottom: 2,
  },
  appSubtitle: {
    fontSize: 13,
    color: '#6C6C70',
    lineHeight: 18,
  },
});
