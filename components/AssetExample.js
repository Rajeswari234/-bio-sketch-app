import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

// This component renders the full Bio Sketch screen: a heading banner,
// and a white card containing my bio text and photo. It's kept as its
// own component (rather than living directly in App.js) so App.js stays
// a simple entry point, and this file stays focused on one job:
// displaying the bio sketch content.
export default function AssetExample() {
  return (
    // ScrollView (instead of a plain View) is used as the outer wrapper
    // so the content stays scrollable/visible even on smaller screens
    // where the card and heading together might not fit on one page.
    <ScrollView contentContainerStyle={styles.container}>
      {/* The '\n' below inserts a real line break inside the string,
          so "Course ID: MSCS 533" renders on its own line under the
          welcome message rather than wrapping automatically. */}
      <Text style={styles.heading}>
        {'WELCOME TO THE UNIVERSITY OF THE CUMBERLANDS\nCourse ID: MSCS 533'}
      </Text>

      {/* The white card groups the bio text and photo together visually,
          separating them from the red background so they're easier to
          read at a glance. */}
      <View style={styles.card}>
        {/* The code below will display my BioSketch @ UC, and it's amazing!!!! */}
        <Text style={styles.bio}>
          I am Rajeswari Gopu, a Ph.D. student in Information Technology
          at the University of the Cumberlands and a Full Stack Developer
          at BioPathogenix. I hold a master's degree in Computer Science
          from Northern Arizona University and am passionate about using
          technology to build practical, real-world solutions.
        </Text>

        {/* Photo is loaded locally from the assets folder using
            require(), since Snack needs a static, build-time reference
            to bundle the image correctly rather than a runtime URL. */}
        <Image
          source={require('../assets/Photo.jpg')}
          style={styles.photo}
        />
      </View>
    </ScrollView>
  );
}

// Styles are kept in a single StyleSheet.create() block, grouped by the
// element they apply to (container, heading, card, bio, photo), so it's
// easy to find and adjust the styling for any one piece of the layout.
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // lets content grow beyond one screen height inside the ScrollView
    justifyContent: 'center', // vertically centers the card within the red background
    alignItems: 'center',
    backgroundColor: '#e60026', // required background color per assignment instructions
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
    marginBottom: 15, // separates the bio text from the photo below it
  },
  photo: {
    width: 130,
    height: 130,
    resizeMode: 'cover', // fills the fixed width/height without distorting the image
  },
});