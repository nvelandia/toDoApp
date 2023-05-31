import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ToDo from './ToDo';
import {colors} from '../style/colors';
import {
  clearAsyncStorage,
  getAsyncStorage,
  setAsyncStorage,
} from '../service/storage';
import IconList from '../assets/svg/list.svg';

const ToDoList = ({flag, clearList}) => {
  const [listTodo, setListTodo] = useState([]);

  const onFilter = (list, filter) => {
    if (!filter) {
      let new_list = list.filter(x => !x.dateDone);
      setListTodo(new_list);
    }
  };

  const getList = async () => {
    const list = await getAsyncStorage('list');
    if (list) {
      setListTodo(JSON.parse(list));
      console.log('listTodo', listTodo);
    }
  };

  useEffect(() => {
    getList();
  }, [flag]);

  const onEdit = async (id, key, value) => {
    let newList = listTodo.map(x => {
      if (x.id == id) {
        x[key] = value;
      }
      return x;
    });

    const test = await setAsyncStorage('list', JSON.stringify(newList));
    setListTodo(newList);
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.containerButtons}>
          <Text style={styles.title}>Tasks</Text>
          <TouchableOpacity onPress={clearList}>
            <IconList />
          </TouchableOpacity>
        </View>
        {listTodo.length > 0 &&
          listTodo.map((item, index) => (
            <ToDo index={index} item={item} onEdit={onEdit} />
          ))}
      </View>
    </ScrollView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    color: colors.five,
    fontWeight: 'bold',
    verticalAlign: 'top',
  },
  containerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 30,
    marginBottom: 10,
  },
});
