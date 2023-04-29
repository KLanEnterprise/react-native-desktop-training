// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   Button,
//   useColorScheme,
//   View,
//   Alert,
// } from 'react-native';
// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   const [firstName, setFirstName] = React.useState('');
//   const [lastName, setLastName] = React.useState('');

//   const styles = StyleSheet.create({
//     dark: {
//       color: '#fff',
//       backgroundColor: '#000',
//     },
//     light: {
//       color: '#000',
//       backgroundColor: '#fff',
//     },
//     formItem: {
//       marginBottom: 6,
//     },
//   });

//   const backgroundStyle = {
//     backgroundColor: styles.light,
//   };

//   const showFullName = () => {
//     Alert.alert(`Hello ${firstName} ${lastName}`);
//   };
//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <View style={{padding: 12}}>
//           <Text style={backgroundStyle}>First name</Text>
//           <TextInput
//             style={styles.formItem}
//             value={firstName}
//             onChangeText={setFirstName}
//           />
//           <Text style={backgroundStyle}>Last name</Text>
//           <TextInput
//             style={styles.formItem}
//             value={lastName}
//             onChangeText={setLastName}
//           />
//           <Button
//             style={styles.formItem}
//             title="OK"
//             onPress={showFullName}
//             disabled={!firstName || !lastName}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };
// export default App;

import React from 'react';
import Index from './src';

function App() {
  return (
    <Index />
    // <View style={styles.container}>
    //   <View style={{height:'20%',backgroundColor:'green'}}></View>
    //   {/* <View style={{width:'25%',height:'100%',backgroundColor:'green'}}></View> */}
    //   <Text>Bonjour</Text>
    // </View>
  );
}
// let ScreenHeight = Dimensions.get('window').height;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     height: ScreenHeight,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     // backgroundColor: '#F5FCFF',
//   },
//   header: {
//     padding: 20,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: '1.5rem',
//     marginVertical: '1em',
//     textAlign: 'center',
//   },
//   text: {
//     lineHeight: '1.5em',
//     fontSize: '1.125rem',
//     marginVertical: '1em',
//     textAlign: 'center',
//   },
//   link: {
//     color: '#1B95E0',
//   },
//   code: {
//     fontFamily: 'monospace, monospace',
//   },
// });
export default App;
