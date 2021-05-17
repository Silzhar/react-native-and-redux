import React from 'react'
import { TouchableOpacity, Text, View,  TextInput  } from 'react-native'
import { Actions } from 'react-native-router-flux'
// import { Form as NativeBaseForm } from 'native-base'
// import styled from 'styled-components/native'

// const Form = styled(NativeBaseForm)`
//   width: 100%;
// `

const Home = () => {
    const [email, onChangeTextEmail] = React.useState(" ")
    const [password, onChangeTextPassword] = React.useState(" ")

    const goToAbout = () => {
        Actions.about()
    }
    
    return (
      // <Form>
       <View>
          {/* <View> */}
            <TextInput 
              placeholder="Email"
              onChangeText = {onChangeTextEmail}
              // value={email}
            />
          {/* </View> */}
          {/* <View> */}
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
            
          {/* </View> */}
           <TouchableOpacity style = {{ margin: 128 }} onPress = {goToAbout}>
             <Text>LOGIN</Text>
          </TouchableOpacity>
       </View>
      //  </Form>
    )
 }

export function emailReducer(state = email, action){
  if ( action.type !== '') {
    return state
  }
}

 export default Home