import React from 'react'
import { TouchableOpacity, 
   Text, 
   View,
   StyleSheet,
   Button  } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'


const goToAbout = () => {
   Actions.about()
}

class Home extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <TextInput 
              placeholder="Email"
              onChangeText = {onChangeTextEmail}
              // value={email}
            />
             <Text>You have EMAIL:{ this.props.all_subjects.current.length }</Text>
            <TextInput 
              placeholder="Email"
              onChangeText = {onChangeTextEmail}
              // value={email}
            />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              onChangeText = {onChangeTextPassword}
            />
            
           <TouchableOpacity style = {{ margin: 128 }} onPress={() =>
            this.props.navigation.navigate('Subjects')
          }
            // onPress = {goToAbout}
            >
             <Text>LOGIN</Text>
          </TouchableOpacity>
       </View>
      ) 
   }
  
}
export default Home