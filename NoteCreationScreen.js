// NoteCreationScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const NoteCreationScreen = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }
    onSave({ title, content });
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        style={{ fontSize: 18, marginBottom: 20 }}
      />
      <TextInput
        value={content}
        onChangeText={setContent}
        placeholder="Content"
        style={{ fontSize: 18, marginBottom: 20 }}
        multiline
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default NoteCreationScreen;
