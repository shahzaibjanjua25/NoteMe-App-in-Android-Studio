// HomeScreen.js
import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({ notes, onAddPress }) => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={notes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
      <TouchableOpacity onPress={onAddPress} style={{ position: 'absolute', bottom: 20, right: 20 }}>
        <Text style={{ fontSize: 28 }}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
