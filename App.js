/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 import React, {Component} from 'react';
 import {Platform, StyleSheet, Text, View, ImageBackground, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native';


 import bgImage from './src/images/icon.jpg'
 import logo from './src/images/icon.jpg'
 import Icon from 'react-native-vector-icons/Ionicons'

 const { width: WIDTH } = Dimensions.get('window')

 type Props = {};
 export default class App extends Component<Props> {
   constructor() {
     super()
     this.state = {
       showPass: true,
       press: false
     }
   }

   showPass = () => {
     if(this.state.press == false) {
       this.setState({ showPass: false, press: true})
     } else {
       this.setState({ showPass: true, press: false})
     }
   }
   render() {
     return (
       <ImageBackground source={bgImage} style={styles.backgroundContainer}>
         <View style={styles.logoContainer}>
           <Image source={logo} style={styles.logo} />
         </View>
         <View style={styles.inputContainer}>
           <Icon name={'android-person-outline'} size={28} color={'red'}
             style={styles.inputIcon} />
           <TextInput
             style={styles.input}
             placeholder={'Username'}
             placeholderTextColor={'rgba(255,255,255,0.7)'}
             underlineColorAndroid='transparent'
           />
         </View>

         <View style={styles.inputContainer}>
           <Icon name={'android-lock-outline'} size={28} color={'red'}
             style={styles.inputIcon} />
           <TextInput
             style={styles.input}
             placeholder={'Password'}
             secureTextEntry= {true}
             placeholderTextColor={'rgba(255,255,255,0.7)'}
             underlineColorAndroid='transparent'
           />
         </View>
         <TouchableOpacity style={styles.btnLogin}>
           <Text style={styles.text}>Login</Text>
         </TouchableOpacity>

       </ImageBackground>
     );
   }
 }

 const styles = StyleSheet.create({
   backgroundContainer: {
     flex: 1,
     width: null,
     height: null,
     justifyContent: 'center',
     alignItems: 'center',
   },
   logoContainer: {
     alignItems: 'center',
     marginBottom: 50,
   },
   logo: {
     width: 370,
     height: 330
   },
   logoText: {
     color: 'white',
     fontSize: 20,
     fontWeight: '500',
     marginTop: 10,
     opacity: 0.5
   },
   inputContainer: {
     marginTop: 10

   },
   input: {
     width: WIDTH - 55,
     height: 45,
     borderRadius: 25,
     fontSize: 16,
     paddingLeft: 45,
     backgroundColor: 'rgba(0,0,0,0.35)',
     color: 'rgba(255,255,255,0.7)',
     marginHorizontal: 25
   },
   inputIcon: {
     position: 'absolute',
     top: 8,
     left: 37
   },
   btnLogin: {
     width: WIDTH - 55,
     height: 45,
     borderRadius: 25,
     backgroundColor: '#432577',
     justifyContent: 'center',
     alignItems: 'center',
     marginTop: 20
   },
 });
