import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

const List = (props) => {
    const { name, taskCount, color } = props.list;
    const taskCountText = taskCount === 1 ? `${taskCount} task` : `${taskCount} task`;
    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.taskCount}>{taskCountText}</Text>
        </View>
    )
}

export default List;
