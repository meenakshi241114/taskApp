import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  dContainer: {
    flex: 1,
    paddingTop: 50
},
  container: {
    width:'92%',
    marginHorizontal:'4%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    flexDirection: 'row',
},
itemContainer: {
    elevation: 8,
    backgroundColor: '#ebebeb',
    flex: 1,
    padding: 8,
    borderRadius: 4
},
key: {
    flex: 2
},
value: {
    flex: 3
},
section: {
    flexDirection: 'row'
},
loading: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
}
});
