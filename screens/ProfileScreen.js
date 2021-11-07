import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Diamond from '../components/svg/Diamond';
import Flame from '../components/svg/Flame';
import Timer from '../components/svg/Timer';


const ProfileScreen = () => {
  return (
    <View style={styles.con}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>My profile</Text>
      </View>
      {/* profile infos */}
      <View style={styles.profileCon}>
        <View>
          <Image style={styles.profileImg} source={require('../assets/icon.png')} />
          <View style={styles.editPic}>
            <MaterialCommunityIcons name='camera' size={25} color='#fff' />
          </View>
        </View>
        <Text style={styles.name}>Yassine Najem</Text>
        <Text style={styles.level}>professional</Text>
        {/* custom button  */}
        <TouchableHighlight style={styles.editProf}>
          <View style={styles.btnProf}>
            <Text style={[styles.title, { fontSize: 15 }]}>Edit profile</Text>
          </View>
        </TouchableHighlight>
      </View>
      {/* card container */}
      <View style={styles.cardsCon}>
        {/* cards */}
        <View style={styles.card}>
          <View style={styles.cardText}>
            <Text style={styles.subtitle}>Total time</Text>
            <Text style={styles.title}>02:30:15</Text>
          </View>
          <View style={styles.cardIcon}>
            <Timer />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardText}>
            <Text style={styles.subtitle}>Burned calories</Text>
            <Text style={styles.title}>2635 cal</Text>
          </View>
          <View style={styles.cardIcon}>
            <Flame />
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.cardText}>
            <Text style={styles.subtitle}>Points collected</Text>
            <Text style={styles.title}>6420 points</Text>
          </View>
          <View style={styles.cardIcon}>
            <Diamond />
          </View>
        </View>

      </View>

    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  con: {
    backgroundColor: '#000',
    flex: 1,
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
    fontSize: 40,
    fontFamily: "Poppins_400Regular"
  },
  profileCon: {
    height: '30%',
    width: '100%',
    justifyContent: "center",
    alignItems: "center"
  },
  profileImg: {
    width: 90,
    height: 90,
    borderRadius: 45
  },
  editPic: {
    backgroundColor: "#aaa",
    position: "absolute",
    borderRadius: 20,
    top: "65%",
    left: "15%",
    padding: 3
  },
  editProf: {
    backgroundColor: "#FE7762",
    borderRadius: 100,
    width: '30%'
  },
  btnProf: {
    width: '100%',
    padding: 14,
    alignItems: 'center'
  },
  cardsCon: {
    height: '60%',
    width: '100%',
    padding: 23,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  card: {
    height: 110,
    width: '100%',
    backgroundColor: "#252625",
    borderRadius: 20,
    flexDirection: "row",
    marginVertical: 10
  },
  cardText: {
    width: '70%',
    padding: 30,
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: "500",
    fontFamily: "Poppins_400Regular"
  },
  subtitle: {
    color: '#828282',
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Poppins_400Regular",
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: "700",
    marginVertical: 5,
    fontFamily: "Poppins_400Regular"
  },
  level: {
    color: '#828282',
    fontSize: 16,
    fontWeight: "500",
    marginTop: 5,
    marginBottom: 10
  },
  cardIcon: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
