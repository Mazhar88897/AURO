// import React, { useState } from 'react';
// import { View, FlatList, Text, Button, StyleSheet } from 'react-native';

// const Counter = () => {
//   // Initialize count state with a starting value (0)
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     // Prevent decrementing below 0 (optional)
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text styale={styles.counterText}>{count}</Text>
//       <View style={styles.buttonContainer}>
//         <Button title="+" onPress={increment} />
//         <Button title="-" onPress={decrement} disabled={count === 0} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   counterText: {
//     fontSize: 32,
//     fontWeight: 'bold',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
// });

// export default Counter;
