import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { styles } from './styles';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today</Text>
            <Pressable>
                <Image source={require('../../../assets/moreIcon.png')} height={20} width={20} style={styles.icon} />
            </Pressable>
        </View>
    )
}

export default Header;
