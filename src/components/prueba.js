import React, { Component } from 'react'
import { View, Text } from 'react-native'

//redux
import { connect } from 'react-redux'

class Prueba extends Component {
    render() {
        console.log(this.props.contactos);
        return (
            <View>
                <Text>componente deddff prueba</Text>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    contactos: state.contactos
})

const mapDispatchToProps = dispatch => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Prueba);