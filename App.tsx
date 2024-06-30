import {
  StyleSheet,
  Text,
  View,
  Alert,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, {useState} from 'react';
import * as YUP from 'yup';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {Formik} from 'formik';
//Validation of the password length using Yup
const passwordLengthValidation = YUP.object().shape({
  passwordLength: YUP.number()
    .min(4, 'Enter minimum 4 characters')
    .max(16, 'Maximum 16 characters allowed')
    .required('Enter password lenth between 4 to 16 characters'),
});

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  //states
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [password, setPassword] = useState('');
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbols, setSymbols] = useState(false);

  //password generation rules
  const generatePassword = (passwordLength: number) => {
    let characterKeywords = '';
    const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
    const NUMBERS = '0123456789';
    const SYMBOLS = '!@#$%^&*()-+';
    if (lowercase) characterKeywords += LOWERCASE;
    if (uppercase) characterKeywords += UPPERCASE;
    if (number) characterKeywords += NUMBERS;
    if (symbols) characterKeywords += SYMBOLS;
    if (characterKeywords === '') {
      Alert.alert('Select atleast one character type');
      return;
    }
    const generatedPassword = createPassword(characterKeywords, passwordLength);
    setPassword(generatedPassword);
    console.log('Generated Password:', generatedPassword);
    setIsPasswordGenerated(true);
  };
  //main login for picking random characters for password
  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    //we have run the loop till we need that much length password as desired by the user
    for (let i = 0; i < passwordLength; i++) {
      //from that character set we are picking random chracter using Math.random() function and character.length is the last number where we have to go to pick the random character
      const randomCharIndex = Math.round(Math.random() * characters.length);
      //adding the random char at the result variable
      result += characters.charAt(randomCharIndex);
    }
    return result;
  };
  const resetPassword = () => {
    setIsPasswordGenerated(false);
    setPassword('');
    setLowercase(true);
    setUppercase(false);
    setNumber(false);
    setSymbols(false);
  };

  return (
    <SafeAreaView
      style={isDarkMode ? styles.OuterBoxDark : styles.OuterBoxLight}>
      <ScrollView>
        <View style={styles.outerContainer}>
          <View style={styles.headerText}>
            <Text style={styles.headerTextone}>SecureGen</Text>
            <Text style={styles.headerTexttwo}>Password Generator</Text>
          </View>
          <View style={styles.InputView}>
            <Formik
              initialValues={{passwordLength: ''}}
              validationSchema={passwordLengthValidation}
              onSubmit={values => {
                console.log(values);
                console.log(values.passwordLength);
                generatePassword(+values.passwordLength);
              }}>
              {({
                values,
                errors,
                touched,
                handleChange,
                handleReset,
                handleSubmit,
                isSubmitting,
                isValid,
              }) => (
                <View>
                  <View>
                    <View style={styles.InputBox}>
                      <Text
                        style={[
                          styles.InputText,
                          isDarkMode ? styles.Light : styles.Dark,
                        ]}>
                        Length:
                      </Text>
                      <TextInput
                        style={styles.textInput}
                        value={values.passwordLength}
                        onChangeText={handleChange('passwordLength')}
                        placeholder="Enter Password Length"
                        placeholderTextColor={'#E5B143'}
                        keyboardType="numeric"
                      />
                    </View>

                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={{color: 'red'}}>
                        {errors.passwordLength}
                      </Text>
                    )}
                    <View style={styles.bouncyBoxTop}>
                      <View style={styles.bouncyBox}>
                        <Text
                          style={[
                            styles.bouncyBoxText,
                            isDarkMode ? styles.Light : styles.Dark,
                          ]}>
                          Include Lowercase
                        </Text>
                        <BouncyCheckbox
                          size={25}
                          isChecked={lowercase}
                          fillColor="#FF3E4D"
                          unFillColor="#FFFFFF"
                          iconStyle={{borderColor: 'red'}}
                          innerIconStyle={{borderWidth: 1}}
                          textStyle={{fontFamily: 'JosefinSans-Regular'}}
                          onPress={() => {
                            console.log('lowercase', lowercase);
                            setLowercase(!lowercase);
                          }}
                        />
                      </View>
                      <View style={styles.bouncyBox}>
                        <Text
                          style={[
                            styles.bouncyBoxText,
                            isDarkMode ? styles.Light : styles.Dark,
                          ]}>
                          Include Uppercase
                        </Text>
                        <BouncyCheckbox
                          size={25}
                          isChecked={uppercase}
                          fillColor="#FAD02E"
                          unFillColor="#FFFFFF"
                          iconStyle={{borderColor: 'blue'}}
                          innerIconStyle={{borderWidth: 1}}
                          textStyle={{fontFamily: 'JosefinSans-Regular'}}
                          onPress={() => {
                            console.log('uppercase', uppercase);
                            setUppercase(!uppercase);
                          }}
                        />
                      </View>
                      <View style={styles.bouncyBox}>
                        <Text
                          style={[
                            styles.bouncyBoxText,
                            isDarkMode ? styles.Light : styles.Dark,
                          ]}>
                          Include Number
                        </Text>
                        <BouncyCheckbox
                          size={25}
                          isChecked={number}
                          fillColor="#1BCA9B"
                          unFillColor="#FFFFFF"
                          iconStyle={{borderColor: 'red'}}
                          innerIconStyle={{borderWidth: 1}}
                          textStyle={{fontFamily: 'JosefinSans-Regular'}}
                          onPress={() => {
                            console.log('number', number);
                            setNumber(!number);
                          }}
                        />
                      </View>
                      <View style={styles.bouncyBox}>
                        <Text
                          style={[
                            styles.bouncyBoxText,
                            isDarkMode ? styles.Light : styles.Dark,
                          ]}>
                          Include Symbol
                        </Text>
                        <BouncyCheckbox
                          size={25}
                          isChecked={symbols}
                          fillColor="#25CCF7"
                          unFillColor="#FFFFFF"
                          iconStyle={{borderColor: 'red'}}
                          innerIconStyle={{borderWidth: 1}}
                          textStyle={{fontFamily: 'JosefinSans-Regular'}}
                          onPress={() => {
                            console.log('symbols', symbols);
                            setSymbols(!symbols);
                          }}
                        />
                      </View>
                    </View>
                  </View>

                  <View style={styles.ButtonContainer}>
                    {isPasswordGenerated ? (
                      <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}>
                        <Text
                          style={[
                            styles.buttonText,
                            isDarkMode ? styles.Light : styles.Dark,
                          ]}>
                          GENERATE MORE
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}>
                        <Text
                          style={[
                            styles.buttonText,
                            isDarkMode ? styles.Light : styles.Dark,
                          ]}>
                          GENERATE
                        </Text>
                      </TouchableOpacity>
                    )}
                    <TouchableOpacity
                      style={styles.button}
                      onPress={() => {
                        handleReset();
                        resetPassword();
                      }}>
                      <Text
                        style={[
                          styles.buttonText,
                          isDarkMode ? styles.Light : styles.Dark,
                        ]}>
                        RESET
                      </Text>
                    </TouchableOpacity>
                  </View>

                  {isPasswordGenerated ? (
                    <View style={styles.generatePwdBox}>
                      <Text style={styles.pwrdGenerateText}>
                        Generated Password
                      </Text>
                      <Text style={styles.pwrdGenerateText} selectable={true}>
                        {password}
                      </Text>
                    </View>
                  ) : null}
                </View>
              )}
            </Formik>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  OuterBoxDark: {
    height: '100%',
    backgroundColor: 'black',
  },
  OuterBoxLight: {
    height: '100%',
    backgroundColor: 'white',
  },
  outerContainer: {
    marginTop: 40,
    marginHorizontal: 20,
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextone: {
    color: '#F3B431',
    fontWeight: 'bold',
    fontSize: 50,
  },
  headerTexttwo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#F3B431',
  },
  InputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  InputText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  Dark: {
    color: 'black',
  },
  Light: {
    color: 'white',
  },
  textInput: {
    height: 50,
    width: 'auto',
    justifyContent: 'center',
    backgroundColor: '#DAE0E2',
    borderRadius: 10,
    color: '#E5B143',
    padding: 10,
    fontSize: 20,
    elevation: 10,
  },
  InputView: {
    marginTop: 50,
  },
  button: {
    backgroundColor: '#10A881',
    padding: 10,
    borderRadius: 20,
    width: '49%',
    alignItems: 'center',
    marginTop: 20,
    elevation: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bouncyBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  bouncyBoxText: {
    fontSize: 20,
    fontWeight: '500',
  },
  pwrdGenerateText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  bouncyBoxTop: {
    marginTop: 20,
  },
  ButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  generatePwdBox: {
    marginTop: 40,
    height: 100,
    backgroundColor: '#333945',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
