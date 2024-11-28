import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '@env';

const EditarTarefaScreen = ({ route, navigation }) => {
  const task = route.params?.task;

  if (!task) {
    Alert.alert('Erro', 'Tarefa não encontrada!');
    navigation.goBack();
    return null;
  }

  const [descricao, setDescricao] = useState(task.descricao || '');
  const [status, setStatus] = useState(task.status || 'pendente');

  const handleSubmit = async () => {
    if (!descricao.trim()) {
      Alert.alert('Erro', 'A descrição da tarefa é obrigatória.');
      return;
    }

    try {
      const response = await axios.put(`${API_BASE_URL}/api/tarefas/${task.id}`, {
        descricao,
        status,
      });

      Alert.alert('Sucesso', 'Tarefa atualizada com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao atualizar tarefa: ', error.response?.data || error.message);
      Alert.alert('Erro', 'Não foi possível atualizar a tarefa.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Descrição da Tarefa:</Text>
      <TextInput
        style={styles.input}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Digite a descrição da tarefa"
        placeholderTextColor="#ccc"
        multiline
      />

      <Text style={styles.label}>Status:</Text>
      <View style={styles.statusContainer}>
        {['pendente', 'completa'].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.statusButton,
              status === option && styles.statusButtonActive,
            ]}
            onPress={() => setStatus(option)}
          >
            <Text
              style={status === option ? styles.statusTextActive : styles.statusText}
            >
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Atualizar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    minHeight: 100,
    textAlignVertical: 'top',
    color: '#fff',
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statusButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#333',
  },
  statusButtonActive: {
    backgroundColor: '#8A2BE2',
  },
  statusText: {
    color: '#fff',
  },
  statusTextActive: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#8A2BE2',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EditarTarefaScreen;
