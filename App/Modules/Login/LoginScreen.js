import React, { Component } from 'react'
import { View, Text, Image, Keyboard, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import Style from './LoginScreenStyle'
import UserActions from 'App/Stores/User/Actions'

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPass: true
        }
    }
    submit = () => {
        Keyboard.dismiss();
        this.props.loginUser({
            password: this.props.password,
            userName: this.props.userName
        });
    }

    render() {
        const { userName, password, userLoginIsLoading } = this.props;
        const { showPass } = this.state;
        return (
            <View style={Style.container}>
                <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                    <Text style={[Style.LabelText, { alignSelf: 'center', paddingLeft: 30,fontWeight: 'bold', color: '#4E5760',paddingBottom:70 }]}>Login to your acccount</Text>
                    
                    <View style={Style.SectionStyle1}>
                        <Image source={require('App/Assets/Images/user.png')} />
                        <TextInput
                            style={[Style.inputTxt, { paddingLeft: 10, paddingTop: 5 }]}
                            placeholder={'Username'}
                            underlineColorAndroid="transparent"
                            placeholderTextColor='grey'
                            value={userName}
                            maxLength={20}
                            autoCapitalize="none"
                            onChangeText={(value) => this.props.changeLoginForm({ userName: value, password: password })}
                        />
                    </View>

                    <View style={Style.SectionStyle1}>
                        <Image source={require('App/Assets/Images/lock.png')} />
                        <TextInput
                            style={[Style.inputTxt, { paddingLeft: 10, paddingTop: 5,color:'#000000'}]}
                            placeholder={'Password'}
                            placeholderTextColor='grey'
                            underlineColorAndroid="transparent"
                            value={password}
                            autoCapitalize="none"
                            maxLength={30}
                            secureTextEntry={this.state.showPass}
                            onChangeText={(value) => this.props.changeLoginForm({ password: value, userName: userName })}
                        />
                    </View>

                    <View style={{ paddingTop: 40 }}>
                        <TouchableOpacity onPress={this.submit}>
                            <View style={{ backgroundColor: '#78A22F', borderWidth: 1, borderColor: '#78A22F', width: 120, height: 45, borderRadius: 4 }}>
                                <Text style={{ fontSize: 18, color: '#ffffff', textAlign: 'center', paddingTop: 10 }}>Login</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    userName: state.user.userName,
    password: state.user.password,
    userLoginIsLoading: state.user.userLoginIsLoading,
    userLoginErrorMessage: state.user.userLoginErrorMessage,
    validation: state.user.validation
})

const mapDispatchToProps = (dispatch) => ({
    loginUser: (data) => dispatch(UserActions.loginUser(data)),
    changeLoginForm: (data) => dispatch(UserActions.changeLoginForm(data))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen)
