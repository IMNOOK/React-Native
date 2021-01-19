import React from 'react';
import {View, Text, StyleSheet, ScrollView,TouchableOpacity} from 'react-native';

const TextList = (props) => {

    return (
        <ScrollView style={{width:'100%'}}>
            {
                props.text.map((item, idx)=>(
                    <TouchableOpacity 
                        style={styles.textList} 
                        key={idx}
                        onPress={()=>props.delete(idx)}    
                    >
                        <Text>{item}</Text>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textList: {
        backgroundColor: 'pink',
        alignItems: 'center',
        padding: 5,
        width: '100%',
        marginTop: 5
    }
})

export default TextList;