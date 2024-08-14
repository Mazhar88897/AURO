import { Image, Text, View } from 'react-native';
import React from 'react';


import Listx from './listtype/list';
export default function HomeScreen() {
  return (<>
    <View   >
     
        <Text>Welcome!</Text>
        <View >
        <Text>Open up App.js to start working on your app!</Text>
      
    </View>
      
      <Listx />
    </View>   
    </>
  );
}





