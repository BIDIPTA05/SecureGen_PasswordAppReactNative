import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

export default function Demo() {
  const [changeColor, setChangeColor] = useState('#FFFFFF');
  const bgChanger = () => {
    const hex = '0123456789ABCDEF';
    let storeColor = '#';
    let colorIndex;
    for (let i = 0; i < 6; i++) {
      colorIndex = hex[Math.floor(Math.random() * 16)];
      storeColor += colorIndex;
    }
    console.log(storeColor);
    setChangeColor(storeColor);
  };

  return (
    <View style={[styles.Container, {backgroundColor: changeColor}]}>
      <TouchableOpacity style={styles.Button} onPress={bgChanger}>
        <Text style={styles.ButtonText}>Press Here</Text>
      </TouchableOpacity>
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
  },
});
