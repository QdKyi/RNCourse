import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Header from '../../components/Header/Header';
import List from '../../components/List/List';
import Todo from '../../components/Todo/Todo';
import { lists, todos } from '../../data/data';
import { styles } from './styles';

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            {todos.map(todo => <Todo key={todo.id} todo={todo} />)}
            <View style={styles.listContainer}>
                <Text style={styles.listText}>Lists</Text>
                {lists.map(list => <List key={list.id} list={list} />)}
            </View>
        </ScrollView>
    )
}

export default Home;
