import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
} from 'react-native';
import {colors} from '../style/colors';
import IconX from '../assets/svg/x-circle.svg';
import IconPlus from '../assets/svg/plus-circle.svg';

const ModalEdit = ({modalVisible, onModal, onAddTask}) => {
  const [title, onChangeTitle] = useState('');
  const [description, onChangeDescription] = useState('');
  const [category, onChangeCategory] = useState('');
  const [priority, onChangePriority] = useState('');

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onModal}>
      <Pressable style={styles.backdrop} onPress={onModal} />
      <View style={styles.background}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Add Task</Text>
          <TextInput
            editable
            onChangeText={text => onChangeTitle(text)}
            value={title}
            placeholder="Title"
            style={styles.input}
            placeholderTextColor={'white'}
          />
          <TextInput
            editable
            multiline
            onChangeText={text => onChangeDescription(text)}
            value={description}
            placeholder="Description"
            style={styles.input}
            placeholderTextColor={'white'}
          />
          <TextInput
            editable
            multiline
            onChangeText={text => onChangeCategory(text)}
            value={category}
            placeholder="Category"
            style={styles.input}
            placeholderTextColor={'white'}
          />
          <TextInput
            editable
            multiline
            onChangeText={text => onChangePriority(text)}
            value={priority}
            placeholder="Priority"
            style={styles.input}
            keyboardType="numeric"
            placeholderTextColor={'white'}
          />
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() =>
              onAddTask({
                title,
                description,
                category,
                priority,
              })
            }>
            <IconPlus />
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    width: '70%',
    margin: 20,
    backgroundColor: colors.three,
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 15,
    padding: 10,
    marginVertical: 15,
    width: '90%',
  },
  buttonOpen: {
    backgroundColor: colors.three,
  },
  buttonClose: {
    backgroundColor: colors.two,
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },
  input: {
    marginTop: 10,
    borderRadius: 15,
    borderColor: colors.four,
    borderWidth: 1,
    padding: 5,
    paddingLeft: 15,
    width: '90%',
    color: 'white',
  },
});

export default ModalEdit;
