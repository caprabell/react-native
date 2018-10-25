import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>First React App!</Text>
          <Text style={styles.postDescription}>Creating the first app using react native</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>First React App!</Text>
          <Text style={styles.postDescription}>Creating the first app using react native</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>First React App!</Text>
          <Text style={styles.postDescription}>Creating the first app using react native</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>First React App!</Text>
          <Text style={styles.postDescription}>Creating the first app using react native</Text>
        </View>

        <View style={styles.postContainer}>
          <Text style={styles.postTitle}>First React App!</Text>
          <Text style={styles.postDescription}>Creating the first app using react native</Text>
        </View>


      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333",
  },

  postContainer: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 3,
    backgroundColor: "#b3ffb3"
  },

  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#602060"
  },

  postDescription: {
    color: "#000"
  }
});
