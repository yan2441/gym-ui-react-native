import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from "@expo/vector-icons"
import { LinearGradient } from 'expo-linear-gradient';
import { FloatingAction } from 'react-native-floating-action';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ExerciseScreen = () => {
  return (
    <View style={styles.container}>

      <FloatingAction
        color={'#7368FF'}
        overlayColor={'#000'}
        floatingIcon={<MaterialCommunityIcons name='qrcode' color={"#fff"} size={30} />}
      />
      {/* background image */}
      <View style={styles.imgCon}>
        <Image style={styles.img} source={require('../assets/bg.png')} />
        <LinearGradient colors={["transparent", "#000"]} style={styles.linearGradient}>
        </LinearGradient>
      </View>
      <View style={styles.con}>
        {/* progress bar */}
        <View style={styles.card}>
          <View style={styles.cardText}>
            <Text style={styles.title}>20x Squat thurst split jumps
              Details about it</Text>
          </View>
          <View style={styles.cardIcon}>
            <Text style={styles.progress}>75%</Text>
          </View>
        </View>
        {/* clock */}
        <View style={styles.header}>
          <Text style={styles.headerText}>01:47</Text>
        </View>
        {/* music controller */}
        <View style={styles.controllerCont}>
          <Ionicons name="reload" color={"#fff"} size={20} />
          <Ionicons name="play-skip-back" color={"#fff"} size={20} />
          <View style={styles.pauseBtn}>
            <Ionicons name="pause" color={"#fff"} size={25} />
          </View>
          <Ionicons name="play-skip-forward" color={"#fff"} size={20} />
          <Ionicons name="stop" color={"#fff"} size={20} />
        </View>

      </View>
    </View>
  )
}

export default ExerciseScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  con: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
    height: '50%',
    zIndex: 3
  },
  imgCon: {
    backgroundColor: "#aaa",
    flex: 1,
    alignSelf: 'center',
    position: 'absolute',
    zIndex: 1
  },
  img: {
    height: 600,
    width: 600,
    resizeMode: "cover"
  },
  linearGradient: {
    position: "absolute",
    top: 150,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2
  },
  card: {
    height: '12%',
    width: '100%',
    backgroundColor: "rgba(37, 37, 37, 0.3)",
    flexDirection: "row",
    borderRadius: 20,
    marginVertical: 5
  },
  cardText: {
    width: '75%',
    padding: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    justifyContent: 'center',
    backgroundColor: "#FE7762",
  },
  title: {
    color: '#fff',
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "Poppins_400Regular"
  },
  cardIcon: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progress: {
    fontSize: 30,
    color: '#FE7762',
  },
  header: {
    height: '10%',
    width: '100%',
    paddingTop: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20

  },
  headerText: {
    color: "#fff",
    fontWeight: '500',
    fontSize: 50,
    fontFamily: "Poppins_400Regular"
  },
  controllerCont: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 80
  },
  pauseBtn: {
    backgroundColor: "#7368FF",
    padding: 20,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: 'rgba(256, 256, 256, 0.28)'
  }
})
