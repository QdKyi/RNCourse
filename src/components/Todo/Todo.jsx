import React from 'react'
import { View, Pressable, Text } from 'react-native'
import { styles } from './styles';
import { lists } from '../../data/data';

const Todo = (props) => {
    const { todoText, isCompleted, categoryId } = props.todo;

    const todoColor = lists.find(list => list.id === categoryId).color;

    return (
        <Pressable style={styles.container}>
            <View style={styles.leftContainer}>
                {
                    isCompleted
                        ?
                        <View style={[styles.checkbox, styles.checkboxCompleted]}>

                        </View>
                        :
                        <View style={styles.checkbox} />
                }
            </View>
            <View style={styles.rightContainer}>
                <View>
                    <Text style={styles.text}>{todoText}</Text>
                </View>
                <View style={[styles.circle, { backgroundColor: todoColor }]} />
            </View>
        </Pressable>
    )
}

export default Todo;
