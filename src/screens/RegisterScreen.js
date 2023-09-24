import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ImageConst} from '../assets/Images';
import {height, totalSize, width} from 'react-native-dimension';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegistration = async () => {
    const user = {
      name,
      email,
      password,
    };

    axios
      .post('http://localhost:8000/api/register', user)
      .then(response => {
        console.log(response);
        Alert.alert(
          'Registration successful',
          'You have been registered Successfully',
        );
        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        Alert.alert(
          'Registration Error',
          'An error occurred while registering',
        );
        console.log('registration failed', error);
      });
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#5B4C85',
        alignItems: 'center',
      }}>
      <View>
        <Image
          style={{
            width: width(20),
            height: height(9),
            marginVertical: height(2),
          }}
          source={ImageConst.amazonLogo}
        />
      </View>
      <KeyboardAvoidingView>
        <View
          style={{
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#FFF',
              fontWeight: 'bold',
              fontSize: height(1.8),
              marginVertical: height(0.5),
            }}>
            Register To your account
          </Text>
        </View>
        <View
          style={{
            marginVertical: height(2),
            marginHorizontal: width(1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              gap: 7,
              alignItems: 'center',
              marginVertical: height(2),
            }}>
            <Image
              source={ImageConst.user}
              style={{backgroundColor: '#5B4C85'}}
            />
            <TextInput
              placeholder="Enter your name..."
              value={name}
              onChangeText={name => setName(name)}
              style={{
                backgroundColor: '#fff',
                fontSize: height(2.3),
                width: width(70),
                borderRadius: totalSize(0.5),
                height: height(3.5),
              }}
              placeholderTextColor="grey"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 7,
              alignItems: 'center',
              marginVertical: height(2),
            }}>
            <Image
              source={ImageConst.email}
              style={{backgroundColor: '#5B4C85'}}
            />
            <TextInput
              placeholder="Enter your email..."
              value={email}
              onChangeText={email => setEmail(email)}
              style={{
                backgroundColor: '#fff',
                fontSize: height(2.3),
                width: width(70),
                borderRadius: totalSize(0.5),
                height: height(3.5),
              }}
              placeholderTextColor="grey"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 16,
              alignItems: 'center',
              marginVertical: height(2),
            }}>
            <Image
              source={ImageConst.password}
              style={{backgroundColor: '#5B4C85', width: width(6)}}
            />
            <TextInput
              placeholder="Enter your password..."
              secureTextEntry={true}
              value={password}
              onChangeText={password => setPassword(password)}
              style={{
                backgroundColor: '#fff',
                fontSize: height(2.3),
                width: width(70),
                borderRadius: totalSize(0.5),
                height: height(3.5),
              }}
              placeholderTextColor="grey"
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: height(5),
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: height(1.7),
                fontWeight: 'bold',
              }}>
              Keep me logged in
            </Text>
            <Text
              style={{
                color: '#008FFF',
                fontSize: height(1.7),
                fontWeight: 'bold',
              }}>
              Forgot password ?
            </Text>
          </View>

          <Pressable
            onPress={handleRegistration}
            style={{
              backgroundColor: '#FEBE10',
              padding: totalSize(2),
              alignItems: 'center',
              borderRadius: totalSize(1),
              marginVertical: height(5),
            }}>
            <Text style={{color: '#FFF', fontSize: height(2.5)}}>Register</Text>
          </Pressable>

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{color: '#FFF', fontSize: height(2.5)}}
              onPress={() => navigation.goBack()}>
              Already have an account? Sign In
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
