import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function ShapeColorChanger() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  const [bgChanger, setBgChanger] = useState();
  const bgModifier = () => {};
  return (
    <View>
      <View style={styles.Container}>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.ButtonText}>Press Here</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Shapes}>
        <View style={styles.sOne}></View>
        <View style={styles.sTwo}></View>
        <View style={styles.sThree}></View>
        <View style={styles.sFour}></View>
        <View style={styles.sFive}></View>
        <View style={styles.sSix}></View>
        <View style={styles.sSvn}></View>
        <View style={styles.sEgt}></View>
        <View style={styles.sNine}></View>
        <View style={styles.sTen}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    width: 200,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginVertical: 50,
  },
  sOne: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    margin: 20,
  },
  sTwo: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    margin: 20,
  },
  sThree: {
    height: 100,
    width: 100,
    backgroundColor: 'black',
    margin: 20,
  },
  sFour: {
    height: 100,
    width: 100,
    backgroundColor: 'red',
    margin: 20,
  },
  sFive: {
    height: 100,
    width: 100,
    backgroundColor: 'yellow',
    margin: 20,
  },
  sSix: {
    height: 100,
    width: 100,
    backgroundColor: 'brown',
    margin: 20,
  },
  sSvn: {
    height: 100,
    width: 100,
    backgroundColor: 'pink',
    margin: 20,
  },
  sEgt: {
    height: 100,
    width: 100,
    backgroundColor: 'gray',
    margin: 20,
  },
  sNine: {
    height: 100,
    width: 100,
    backgroundColor: 'violet',
    margin: 20,
  },
  sTen: {
    height: 100,
    width: 100,
    backgroundColor: 'cyan',
    margin: 20,
  },

  Shapes: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
});
