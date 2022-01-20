import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import firebase from "firebase/app";
import "firebase/firestore";

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyDyunLmGbHS5I1nBKyu_wOyft2SfGmyczc",
    authDomain: "shop-review-bdb9f.firebaseapp.com",
    projectId: "shop-review-bdb9f",
    storageBucket: "shop-review-bdb9f.appspot.com",
    messagingSenderId: "603702928308",
    appId: "1:603702928308:web:545fcfb34e0b11f99408e1",
    measurementId: "G-GQLKKWX484",
  };

  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  useEffect(() => {
    getFirebaseItems();
  }, []);

  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection("shop").get();
    const shops = snapshot.docs.map((doc) => doc.data());
    console.log(shops);
  };
  return (
    <View style={styles.container}>
      <Text>Hello Review App!!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
