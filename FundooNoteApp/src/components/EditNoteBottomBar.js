import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Modal} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EditNoteBottomBar = ({deleteData, setDeleteData}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.header}>
      <View style={styles.square}>
        <TouchableOpacity onPress={() => {}}>
          <Feather name="plus-square" size={24} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => {}} style={styles.board}>
        <MaterialCommunityIcons name="palette-outline" size={26} />
      </TouchableOpacity>
      <View style={styles.text}>
        <Text>Edited</Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          setModalVisible(true);
        }}
        style={styles.dotIcon}>
        <Ionicons name="ellipsis-vertical" size={22} />
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalcontainer}>
          <View style={styles.modalbackground}>
            <TouchableOpacity
              onPress={() => {
                setDeleteData(!deleteData);
                setModalVisible(!modalVisible);
              }}>
              <View style={{flexDirection: 'row'}}>
                <AntDesign name="delete" size={22}/>
                <Text style={styles.del}> Delete</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}}>
            <View style={{flexDirection: 'row',paddingTop:20}}>
                <MaterialIcons name="label-outline" size={22}  />
                <Text style={styles.del}> Label</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditNoteBottomBar;
const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: 'row',
    paddingLeft: 15,
    marginTop: 465,
  },
  dotIcon: {
    marginLeft: 110,
    paddingTop: 16,
  },
  board: {
    marginLeft: 15,
    padding: 7,
    paddingBottom: 15,
  },
  text: {
    marginLeft: 76,
    paddingTop: 14,
  },
  square: {
    paddingTop: 9,
    alignItems: 'flex-end',
  },
  modalcontainer: {
    flex: 1,
    justifyContent: 'center',
    //padding: 20,
    marginTop: 500,
  },
  modalbackground: {
    backgroundColor: '#e8cad0',
    flex: 1,

    padding: 10,
    borderRadius: 10,
  },
  del: {
    paddingLeft: 10,
    fontSize: 20,
    alignContent: 'space-between',
    marginLeft: 10,
  },
  
});
