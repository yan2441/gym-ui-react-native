import React from 'react';

import { StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FloatingAction } from "react-native-floating-action";

const WorkOutScreen = () => {
  return (
    <View style={styles.con}>
      <FloatingAction color={'#7368FF'} overlayColor={'#000'} />
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My workout week</Text>
      </View>
      {/* divider */}
      <View style={styles.divider}></View>
      {/* card container */}
      <View style={styles.cardsCon}>
        {/* cards */}
        <View style={styles.card}>
          <View style={styles.cardText}>
            <Text style={styles.title}>20X Jump rope</Text>
            <Text style={styles.subtitle}>02:00</Text>
          </View>
          <View style={styles.cardIcon}>
            <MaterialCommunityIcons name="check" color={"#7368FF"} size={30} />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardText}>
            <Text style={styles.title}>20X Jump rope</Text>
            <Text style={styles.subtitle}>02:00</Text>
          </View>
          <View style={styles.cardIcon}>
            <MaterialCommunityIcons name="check" color={"#7368FF"} size={30} />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardText}>
            <Text style={styles.title}>20x Squat thrust split jumps</Text>
            <Text style={styles.subtitle}>02:00</Text>
          </View>
          <View style={styles.cardIcon}>
            <MaterialCommunityIcons name="play" color={"#FF6C59"} size={30} />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardText}>
            <Text style={styles.title}>20x Squat thrust split jumps</Text>
            <Text style={styles.subtitle}>02:00</Text>
          </View>
          <View style={styles.cardIcon}>
            <MaterialCommunityIcons name="play" color={"#FF6C59"} size={30} />
          </View>
        </View>

      </View>

    </View>
  )
}

export default WorkOutScreen

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    height: '10%',
    width: '100%',
    paddingLeft: 25,
    paddingTop: 10,
  },
  headerText: {
    color: "#fff",
    fontWeight: '500',
    fontSize: 36,
    fontFamily: "Poppins_400Regular"
  },
  divider: {
    position: "absolute",
    width: "88%",
    height: 2,
    backgroundColor: "#3F3F3F",
    top: 80,
    zIndex: 10
  },
  cardsCon: {
    height: '90%',
    width: '100%',
    padding: 23,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  card: {
    height: '15%',
    width: '100%',
    backgroundColor: "#252525",
    borderRadius: 20,
    flexDirection: "row",
    marginVertical: 10
  },
  cardText: {
    width: '80%',
    padding: 20,
    justifyContent: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins_400Regular"
  },
  subtitle: {
    color: '#828282',
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Poppins_400Regular"
  },
  cardIcon: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
