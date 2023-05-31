import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../style/colors';
import ToDoList from '../componets/ToDoList';
import ModalEdit from '../componets/ModalEdit';
import {getAsyncStorage, setAsyncStorage} from '../service/storage';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [flag, setFlag] = useState(false);

  const onModal = () => {
    setModalVisible(!modalVisible);
  };

  const onAddTask = async ({title, description, category, priority}) => {
    const list = await getAsyncStorage('list');

    let newList;

    if (list) {
      let decodelist = JSON.parse(list);
      decodelist.push({
        title,
        description,
        category,
        priority,
        id: decodelist.length + 1,
        dateCreate: new Date(),
        dateDone: null,
      });
      newList = JSON.stringify(decodelist);
    } else {
      let decodelist = [
        {
          title,
          description,
          category,
          priority,
          id: 1,
          dateCreate: new Date(),
          dateDone: null,
        },
      ];
      newList = JSON.stringify(decodelist);
    }

    setFlag(!flag);
    await setAsyncStorage('list', newList);
    setModalVisible(!modalVisible);
  };

  const clearList = async () => {
    await clearAsyncStorage();
    setFlag(!flag);
  };

  return (
    <View style={styles.container}>
      <ToDoList flag={flag} clearList={clearList} />
      <ModalEdit
        modalVisible={modalVisible}
        onModal={onModal}
        onAddTask={onAddTask}
      />
      <View style={{alignItems: 'center', marginBottom: 10}}>
        <TouchableOpacity
          style={[styles.button, styles.buttonOpen]}
          onPress={onModal}>
          <Text style={styles.textStyle}>Add task</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.one,
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 15,
    padding: 10,
    marginVertical: 15,
    width: '90%',
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: colors.three,
  },
  textStyle: {
    color: colors.five,
    fontWeight: 'bold',
  },
});

export default Home;
