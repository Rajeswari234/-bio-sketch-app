import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function AssetExample() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>
        {'WELCOME TO THE UNIVERSITY OF THE CUMBERLANDS\nCourse ID: MSCS 533'}
      </Text>

      <View style={styles.card}>
        {/* The code below will display my BioSketch @ UC, and it's amazing!!!! */}
        <Text style={styles.bio}>
          Rajeswari Gopu, a Ph.D. student in Information Technology
          at the University of the Cumberlands and a Full Stack Developer
          at BioPathogenix. I hold a master's degree in Computer Science
          from Northern Arizona University and am passionate about using
          technology to build practical, real-world solutions.
        </Text>

        {/*  Displays my professional photograph from the assets folder. */}
        <Image
          source={require('../assets/Photo.jpg')}
          style={styles.photo}
          resizeMode="cover"
          accessibilityLabel="professional photograph of Rajeswari Gopu"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e60026',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  heading: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  bio: {
    color: '#000000',
    fontSize: 13,
    lineHeight: 18,
    textAlign: 'center',
    marginBottom: 15,
  },
  photo: {
    width: 130,
    height: 130,
    resizeMode: 'cover',
  },
});