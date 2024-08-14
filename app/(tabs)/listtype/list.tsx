import { StyleSheet, Text, View, FlatList, Button, ScrollView } from 'react-native'
import React, { useState } from 'react'
ScrollView
const Listx = () => {
    const data = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
        { id: 3, name: 'Charlie', age: 35 },
      ];
      const [count, setCount] = useState<number>(0);
  return (<>
  
    <ScrollView>
       <FlatList
       style={styles.container}
      data={data}
      renderItem={({ item }) => (
        <View >
          <Text>{item.name}</Text>
          <Text>{item.age}</Text>
          
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
    <View>

        <Button title='+' onPress={()=>{setCount(count+1)}} />
        <Button title='-' onPress={()=>{setCount(count-1)}} />
        </View>
      <View>
        <Text>{count}</Text>
      </View>
    </ScrollView>
    </>)
}

export default Listx

const styles = StyleSheet.create({container: {
    flex: 1,
    flexDirection: 'row',
    gap: 2,
    
    backgroundColor: '#F5FCFF',   

  }})