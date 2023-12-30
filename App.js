// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import NoteCreationScreen from './NoteCreationScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleSaveNote = (newNote) => {
    setNotes([...notes, { ...newNote, id: Date.now() }]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} notes={notes} onAddPress={() => props.navigation.navigate('CreateNote')} />}
        </Stack.Screen>
        <Stack.Screen name="CreateNote">
          {props => <NoteCreationScreen {...props} onSave={note => {
            handleSaveNote(note);
            props.navigation.goBack();
          }} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
