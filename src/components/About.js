import React from 'react'
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { configureStore } from '@reduxjs/toolkit'
import { connect } from 'react-redux';


const goToLogin = () => {
  Actions.login()
}

class About extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{ margin: 128 }} onPress={goToLogin}>
          <Text>This is ABOUT</Text>
          {
            this.props.subjects.all_subjects.map((subject, index) => (
              <Button
                key={subject}
                title={`Add ${subject}`}
                onPress={() =>
                  this.props.addSubject(index)
                }
              />
            ))
          }
          <Button
            title="Back to home"
            onPress={() =>
              this.props.navigation.navigate('Home')
            }
          />
          <Text>Email: {this.props.all_subjects.current.length}</Text>
          <Text>Go to login</Text>
        </TouchableOpacity>
      </View>

    )
  }

}

const mapStateToProps = (state) => {
  const { subjects } = state
  return { subjects }
}

export default connect(mapStateToProps)(About)
// export default About