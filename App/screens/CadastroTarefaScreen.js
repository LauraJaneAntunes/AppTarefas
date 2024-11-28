import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '@env';

export default function CadastroScreen({ navigation }) {
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState('pendente');

  const handleSubmit = async () => {
    if (!descricao) {
      Alert.alert('Erro', 'A descrição da tarefa é obrigatória');
      return;
    }

    try {
      await axios.post(`${API_BASE_URL}/api/tarefas`, {
        descricao,
        status,
      });

      Alert.alert('Sucesso', 'Tarefa criada com sucesso!');
      setDescricao('');
      setStatus('pendente');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao criar tarefa: ', error);
      Alert.alert('Erro', 'Não foi possível criar a tarefa');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Nova Tarefa</Text>

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
        <TouchableOpacity
          style={[styles.statusButton, status === 'pendente' && styles.statusButtonActive]}
          onPress={() => setStatus('pendente')}
        >
          <Text style={status === 'pendente' ? styles.statusTextActive : styles.statusText}>
            Pendente
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.statusButton, status === 'completa' && styles.statusButtonActive]}
          onPress={() => setStatus('completa')}
        >
          <Text style={status === 'completa' ? styles.statusTextActive : styles.statusText}>
            Completa
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Criar Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000', // Fundo preto
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#202020',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 20,
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
    elevation: 5, // Sombra
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
