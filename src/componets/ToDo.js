import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../style/colors';
import IconCircle from '../assets/svg/circle.svg';
import IconCheck from '../assets/svg/check-circle.svg';

const ToDo = ({item, index, onEdit}) => {
  const {title, description, priority, dateDone, id} = item;

  if (dateDone) return null;

  return (
    <View style={styles.container} key={index}>
      <View style={styles.priority(priority)}></View>
      <View style={styles.right}>
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <TouchableOpacity
          style={styles.option}
          onPress={() => {
            onEdit(id, 'dateDone', new Date());
          }}>
          {dateDone ? <IconCheck /> : <IconCircle />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
    backgroundColor: colors.two,
    borderRadius: 20,
    width: '90%',
    height: 80,

    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  title: {
    color: colors.five,
    fontWeight: 'bold',
  },
  description: {
    color: colors.four,
    fontWeight: '400',
  },
  priority: priority => {
    let color = {
      1: colors.priority1,
      2: colors.priority2,
      3: colors.priority3,
    };
    return {
      backgroundColor: color[priority],
      width: 20,
      height: '100%',
    };
  },
  text: {},
  option: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    padding: 20,
  },
});
