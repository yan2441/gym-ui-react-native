import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import QrFrame from '../components/svg/QrFrame';

const { width } = Dimensions.get('window');
const qrSize = width * 0.8;

const QrCodeScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}>
        <QrFrame />
        <Text onPress={() => alert("Navigate back from here")} style={styles.btn}>
          Cancel
        </Text>

      </BarCodeScanner>
      {scanned && (
        <Text onPress={() => setScanned(false)} style={styles.btn}>
          Scan Again
        </Text>
      )}
    </View>
  );
}

export default QrCodeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  btn: {
    fontSize: width * 0.05,
    textAlign: 'center',
    width: '50%',
    color: 'white',
    backgroundColor: "#7368FF",
    padding: 15,
    margin: 15,
    borderRadius: 15
  },
});
