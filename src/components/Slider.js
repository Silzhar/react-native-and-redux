import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import Slider from '@react-native-community/slider';

const App = () => {
  //const [value, setValue] = useState(0);
  const [email, onChangeText] = React.useState("nada");

  //const [password, setPassword] = useState(0);

  const handlePress = () => { 
            alert("El campo tiene " + email);

  }
  return (
    <View>
      <Text> Demo Form </Text>
      <View>
        <TextInput placeholder="Email"
          onChangeText = {onChangeText} 
          // value={email}
          />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          // value={password}
        />
        <Button 
          onPress={handlePress}
          //onClick={() => setEmail(email)}
          title="BOTON"
          color="#000000"
        />
        <Text>
          Rate your teams performance this quarter
        </Text>
        
      </View>
    </View>
  );
};

export default App;