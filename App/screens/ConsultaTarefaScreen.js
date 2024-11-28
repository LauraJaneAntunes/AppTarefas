import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { API_BASE_URL } from '@env';

const ConsultaScreen = () => {
  const [dados, setDados] = useState([]);

  const handleConsulta = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/consulta`);
      setDados(response.data);
      alert('Consulta realizada com sucesso!');
    } catch (error) {
      console.error('Erro ao consultar dados:', error);
      alert('Erro na consulta');
    }
  };

  const renderUserData = ({ item }) => {
    return (
      <View style={styles.userContainer}>
        <Text style={styles.userText}>Nome: {item.nome}</Text>
        <Text style={styles.userText}>Email: {item.email}</Text>
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consulta de Usuário</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Consultar" 
          onPress={handleConsulta} 
          color="#02DAC5"
        />
      </View>
      {/* Exibir dados, se necessário */}
      {dados.length > 0 && (
        <View>
          {dados.map((item, index) => (
            <Text key={index}>{item.name}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  buttonContainer: {
    alignItems: 'center',
  },
});

export default ConsultaScreen;
