import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [filter, setFilter] = useState('all'); // Estado para o filtro
  const [tasks, setTasks] = useState([
    { id: 1, descricao: 'Tarefa 1', status: 'pending' },
    { id: 2, descricao: 'Tarefa 2', status: 'completed' },
    { id: 3, descricao: 'Tarefa 3', status: 'pending' },
  ]); // Tarefas de exemplo

  // Filtra as tarefas com base no estado `filter`
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    return task.status === filter;
  });

  // Função para deletar uma tarefa
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'all' && styles.activeFilter]}
          onPress={() => setFilter('all')}>
          <Text style={styles.filterText}>Todas</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'pending' && styles.activeFilter]}
          onPress={() => setFilter('pending')}>
          <Text style={styles.filterText}>Pendentes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'completed' && styles.activeFilter]}
          onPress={() => setFilter('completed')}>
          <Text style={styles.filterText}>Concluídas</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.taskItem,
              item.status === 'completed' && styles.completedTask,
            ]}>
            <Text style={styles.taskText}>{item.descricao}</Text>
            <View style={styles.taskButtons}>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditarTarefa', { task: item })}
                style={styles.editButton}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteTask(item.id)}
                style={styles.deleteButton}>
                <Text style={styles.buttonText}>Deletar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('NovaTarefa')}>
        <Text style={styles.addButtonText}>+ Nova Tarefa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000',
},
filterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'space-around',
},
filterButton: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: '#8A2BE2',
},
activeFilter: {
    backgroundColor: '#5A189A',
},
filterText: {
    color: '#FFF',
    fontWeight: 'bold',
},
taskItem: {
    backgroundColor: 'gray',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
},
completedTask: {
    backgroundColor: '#202020',
},

taskText: {
    flex: 1,
    color: '#fff',
},
taskButtons: {
    flexDirection: 'row',
},
editButton: {
    marginRight: 10,
    padding: 5,
    backgroundColor: '#8A2BE2', 
    borderRadius: 5,
},
deleteButton: {
    padding: 5,
    backgroundColor: '#8A2BE2',
    borderRadius: 5,
},
buttonText: {
    color: 'white',
},
addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#8A2BE2', 
    padding: 15,
    borderRadius: 30,
    elevation: 5,
},
addButtonText: {
    color: 'white',
    fontWeight: 'bold',
},
});


