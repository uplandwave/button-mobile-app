import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, Vibration, alert, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function App() {
  const [score, setScore] = useState(0);
  const [clicks, setClicks] = useState(0);
  const [confettiKey, setConfettiKey] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);



  // const handlePress = () => console.log("text pressed");
  const bigParty = () => console.log("Huston we have done it!")

  const giveThemhell = () => 
    Alert.alert ("What do you think you're doing flyboy")

  const handleButtonClick = () => {
    setScore(score + 1);
    setClicks(clicks + 1);
    setConfettiKey(confettiKey + 1);
    bigParty();
  }

  const takeAway = () => {
    setScore(score - 1);
    setClicks(clicks - 1);
  }

  // constuctor() ;{
  //   super();
  //   this.state = {
  //     shoot: false,
  //   };
  // }

  useEffect(() => {
    if (clicks % 10 === 0 && score !== 0) {
      Vibration.vibrate([100]);
    }
    if (clicks == 10) {
      setShowImage(true);
    }
    else {
      setShowImage(false)
    }
    if (clicks == 20) {
      giveThemhell()
    }
    if (clicks == 60){
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  }, [clicks]);

  return (
        <SafeAreaView style={styles.container}>
        {/* <Image source={require('./assets/cat.png')} /> */}
        {/* <Text onPress={handlePress}>Hello World!</Text> */}
        <TouchableOpacity 
          onPress = {handleButtonClick} 
          style = {styles.button}>
          <Text style = {styles.buttonText}>Button</Text>
        </TouchableOpacity>
        <Text style = {styles.scoreText}> {score}</Text>
        <StatusBar style="auto" />
        <TouchableOpacity 
          onPress = {takeAway} 
          style = {styles.buttonTwo}>
          <Text style = {styles.removeButton}> - </Text>
        </TouchableOpacity> 
          {showImage && <Image source={require('./assets/cat.png')} style={styles.image} />} 
          {showMessage && (
        <View style={styles.overlay}>
          <Text style={styles.message}>God loves you!</Text>
        </View>
        )}
          <ConfettiCannon key={confettiKey} count={10} origin={{ x: Math.random(), y: Math.random() }} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',

  },
  button: {
    backgroundColor: 'white',
    // backgroundColor: 'rgba(255,255,255,0.5)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'dodgerblue'
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  removeButton: {
    fontSize: 25,
    color: 'dodgerblue'
  },
  buttonTwo: {
    position: 'absolute',
    bottom: 125,
    right: 25,
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 100,
    marginBottom: 2,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, Vibration } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
// import ConfettiCannon from 'react-native-confetti-cannon';

// export default function App() {
//   const [score, setScore] = useState(0);
//   const [clicks, setClicks] = useState(0);


//   // const handlePress = () => console.log("text pressed");
//   const bigParty = () => console.log("Huston we have done it!")

//   const handleButtonClick = () => {
//     setScore(score + 1);
//     setClicks(clicks + 1);
//   };

//   const takeAway = () => {
//     setScore(score - 1);
//     setClicks(clicks - 1);
//   }

//   useEffect(() => {
//     if (clicks % 10 === 0 && score !== 0) {
//       Vibration.vibrate([100]);
//     }
//   }, [clicks]);

//   return (
//     <SafeAreaView style = {styles.container}>
//       {/* <Image source={require('./assets/cat.png')} /> */}
//       {/* <Text onPress={handlePress}>Hello World!</Text> */}
//       <TouchableOpacity onPress = {handleButtonClick} style = {styles.button}>
//         <Text style = {styles.buttonText}>Button</Text>
//       </TouchableOpacity>
//       <Text style = {styles.scoreText}> {score}</Text>
//       <StatusBar style="auto" />
//       <ConfettiCannon count = {score === 69 ? 200 : 0} origin = {{ x: 0.5, y: 0 }} />
//       <TouchableOpacity onPress = {takeAway} style = {styles.buttonTwo}>
//         <Text style = {styles.removeButton}> - </Text>
//       </TouchableOpacity> 
//     </SafeAreaView>
 
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'dodgerblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: 'white',
//     // backgroundColor: 'rgba(255,255,255,0.5)',
//     padding: 20,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   buttonText: {
//     fontSize: 30,
//     fontWeight: 'bold',
//     color: 'dodgerblue'
//   },
//   scoreText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white'
//   },
//   removeButton: {
//     fontSize: 25,
//     color: 'dodgerblue'
//   },
//   buttonTwo: {
//     backgroundColor: 'white',
//     padding: 5,
//     borderRadius: 100,
//     marginBottom: 2,
//   }
// });