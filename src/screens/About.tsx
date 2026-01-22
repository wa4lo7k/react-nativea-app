import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const About: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Icon
          name="information-circle"
          size={100}
          color="#007AFF"
          style={styles.icon}
        />
        <Text style={styles.title}>About This App</Text>

        <View style={styles.card}>
          <Text style={styles.appName}>React Navigation App</Text>
          <Text style={styles.version}>Version 1.0.0</Text>
          <Text style={styles.description}>
            A comprehensive React Native application demonstrating Stack and
            Bottom Tab Navigation with beautiful UI components and smooth
            transitions.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Features</Text>
          <View style={styles.featureItem}>
            <Icon name="checkmark-circle" size={24} color="#34C759" />
            <Text style={styles.featureText}>Stack Navigation</Text>
          </View>
          <View style={styles.featureItem}>
            <Icon name="checkmark-circle" size={24} color="#34C759" />
            <Text style={styles.featureText}>Bottom Tab Navigation</Text>
          </View>
          <View style={styles.featureItem}>
            <Icon name="checkmark-circle" size={24} color="#34C759" />
            <Text style={styles.featureText}>Vector Icons</Text>
          </View>
          <View style={styles.featureItem}>
            <Icon name="checkmark-circle" size={24} color="#34C759" />
            <Text style={styles.featureText}>Flexbox Layouts</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Contact</Text>
          <TouchableOpacity style={styles.contactItem}>
            <Icon name="mail" size={24} color="#007AFF" />
            <Text style={styles.contactText}>support@example.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactItem}>
            <Icon name="globe" size={24} color="#007AFF" />
            <Text style={styles.contactText}>www.example.com</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.copyright}>© 2026 React Navigation App</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  icon: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 5,
  },
  version: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 22,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  featureText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  contactText: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 12,
  },
  copyright: {
    fontSize: 14,
    color: '#999',
    marginTop: 20,
    marginBottom: 30,
  },
});

export default About;
