import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, BackHandler, Modal} from 'react-native';

class ModalComponent extends Component {
    state = {
        modal: false
    }

    handleModal = () => {
        this.setState({
            modal: this.state.modal ? false : true
        })
    }
    
    render() {
        return (
            <View style={{width: '100%'}}>
                <Button
                    title="Open Modal"
                    onPress={this.handleModal}
                />
                <Modal
                    visible={this.state.modal}
                    animationType={'slide'}
                    onShow={()=>alert('warning!!')}
                >
                    <View style={{
                        marginTop: 20,
                        backgroundColor: 'rgb(255, 255, 128);'
                    }}>
                        <Text>this is modal content</Text>
                        <Button
                            title="Go Back"
                            onPress={this.handleModal}
                        />
                    </View>
                </Modal>
            </View>
        )
    }
}

export default ModalComponent;