import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CadastroTarefaScreen from './screens/CadastroTarefaScreen';
import ConsultaTarefaScreen from './screens/ConsultaTarefaScreen';
import EditarTarefaScreen from './screens/EditarTarefaScreen';
import DeletarTarefaScreen from './screens/DeletarTarefaScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="NovaTarefa" component={CadastroTarefaScreen} options={{ title: 'Cadastro de Tarefa' }} />
        <Stack.Screen name="ConsultarTarefa" component={ConsultaTarefaScreen} options={{ title: 'Consulta de Tarefa' }} />
        <Stack.Screen name="EditarTarefa" component={EditarTarefaScreen} options={{ title: 'Atualização de Tarefa' }} />
        <Stack.Screen name="DeletarTarefa" component={DeletarTarefaScreen} options={{ title: 'Apagar Tarefa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;