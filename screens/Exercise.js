import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import {Video} from 'expo-av';
// You can import from local files


// or any pure javascript modules available in npm


export default class Exercise extends React.Component {
  render(){
   const video = React.useRef(null);
   const secondVideo = React.useRef(null);
   const thirdVideo = React.useRef(null);
   const fourthVideo = React.useRef(null);
   const fifthVideo = React.useRef(null);
   const sixthVideo = React.useRef(null);
   const seventhVideo = React.useRef(null);
   const [status, setStatus] = React.useState({});
   const [statusSecondVideo, setStatusSecondVideo] = React.useState({});

  return (
    <View style={styles.container}>
    <Text style={styles.text}> EXERCISE </Text>
        <Video
        ref={video}
        style={styles.video}
        source={{uri: ""}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
   
        <Video
        ref={secondVideo}
        style={styles.video}
        source={{uri: ""}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />

         <Video
        ref={thirdVideo}
        style={styles.video}
        source={{uri: ""}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />

           <Video
        ref={fourthVideo}
        style={styles.video}
        source={{uri: ""}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />

         <Video
        ref={fifthVideo}
        style={styles.video}
        source={{uri: ""}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />

         <Video
        ref={sixthVideo}
        style={styles.video}
        source={{uri: ""}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />

         <Video
        ref={seventhVideo}
        style={styles.video}
        source={{uri: ""}}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={setStatus}
      />
     
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'grey',
    padding: 8,
  },
    video: {
    flex: 1,
    alignSelf: 'stretch',
    marginTop:20
  },
   text: {
     backgroundColor:'white',
     color:'b',
    textAlign: 'center',
    fontSize: 30,
    margin:20,
    fontWeight: 'bold',

},

});
