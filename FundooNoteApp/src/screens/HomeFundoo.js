import {View, TouchableOpacity} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import TopBar from '../components/TopBar';
import BottomBar from '../components/BottomBar';
import {AuthContext} from '../navigation/AuthProvider';
import Notecard from '../components/Notecard';
import {fetchingNote, deleteNote} from '../services/FirebaseNoteService';
import {FlatList} from 'react-native-gesture-handler';

const HomeFundoo = ({navigation}) => {
  const {user} = useContext(AuthContext);
  const [noteData, setNoteData] = useState([]);

  const getData = async () => {
    const result = await fetchingNote(user.uid);
    setNoteData(result);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getData();
    });

    return unsubscribe;
  }, []);

  return (
    <View style={{flex: 1}}>
      <View>
        <TopBar menuPress={() => navigation.toggleDrawer()} />
      </View>
      {/* <ScrollView style={{flex: 1}}>
        {noteData.map(item => (
          <Notecard {...item} />
        ))}
      </ScrollView> */}

      <FlatList
        numColumns={2}
        data={noteData}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('EditNote', {...item})}>
            <Notecard {...item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.noteId}
        key={item => item.noteId}
      />
      <View style={{justifyContent: 'flex-end'}}>
        <BottomBar navigation={navigation} />
      </View>
    </View>
  );
};

export default HomeFundoo;
