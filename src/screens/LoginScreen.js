import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {height, width} from 'react-native-dimension';
import {ImageConst} from '../assets/Images';

const LoginScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
      }}>
      <View>
        <Image
          style={{width: width(28), height: height(8)}}
          source={ImageConst.amazonLogo}
        />
      </View>
      <KeyboardAvoidingView>
        <View
          style={{
            alignItems: 'center',
            marginVertical: height(2),
          }}>
          <Text
            style={{
              color: '#041E42',
              fontWeight: 'bold',
              fontSize: height(1.8),
              marginVertical: height(0.5),
            }}>
            Login in to your account
          </Text>
        </View>
        <View style={{marginVertical: height(2), backgroundColor: 'red'}}>
          <View></View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
