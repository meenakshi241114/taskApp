import { StyleSheet ,Dimensions} from 'react-native'
const deviceHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    height: deviceHeight,
  },
  LabelText: {
     paddingBottom: 10,
     paddingLeft: 35,
     paddingTop:30,
     marginRight:50,
     fontSize:18,
     color:'#4E5760',
     fontFamily: 'ProximaNova-Regular',
     fontWeight: 'normal'
  },

SectionStyle1: {
  width: '90%',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  height: 40,
  margin: 30,
  marginVertical:10,
  borderBottomWidth: 1,
  borderBottomColor: '#ebebeb',
  borderColor: "#0D5CAB"
},
inputTxt:{
  flex:1,
  paddingLeft: 10,
  fontSize:18,
  color: '#000000',
  fontFamily:'ProximaNova-Regular'
},
});
