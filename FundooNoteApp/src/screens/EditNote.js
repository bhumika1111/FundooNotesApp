import {View, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import EditNoteTopBar from '../components/EditNoteTopBar';
import EditNoteBottomBar from '../components/EditNoteBottomBar';
import {TextInput} from 'react-native-gesture-handler';
import {addNote, updateNote, deleteNote} from '../services/FirebaseNoteService';
import {AuthContext} from '../navigation/AuthProvider';

const EditNote = ({navigation, route}) => {
  const noteData = route.params;

  const [isDeleted, setIsDeleted] = useState(noteData?.isDeleted || false);
  const [title, setTitle] = useState(noteData?.title || ''); //opetionalchaninging
  const [note, setNote] = useState(noteData?.note || '');
  const [pinData, setIspinData] = useState(noteData?.pinData || '');
  const {user} = useContext(AuthContext);
  const onBackPress = async () => {
    let userId = user.uid;
    if (noteData.noteId) {
      await updateNote(title, note, noteData.noteId, userId);
    } else {
      await addNote(title, note, userId);
    }
    navigation.goBack();
  };
  const onDeleteHandle = () => {
    setIsDeleted(!isDeleted);
  };
  return (
    <View>
      <View>
        <EditNoteTopBar onBackPress={onBackPress} />
      </View>
      <View style={styles.notestyle}>
        <TextInput
          style={styles.titleField}
          placeholder="Title"
          value={title}
          onChangeText={content => setTitle(content)}
        />
        <TextInput
          style={styles.noteField}
          placeholder="Note"
          multiline={true}
          value={note}
          onChangeText={content => setNote(content)}
        />
      </View>
      <View>
        <EditNoteBottomBar isDeleted={isDeleted} noteId={noteData.noteId} />
      </View>
    </View>
  );
};

export default EditNote;
const styles = StyleSheet.create({
  titleField: {
    padding: 15,
    fontSize: 22,
  },
  noteField: {
    padding: 15,
    fontSize: 18,
    marginTop: -5,
    marginRight: 11,
    marginLeft: 3,
  },
  notestyle: {
    paddingTop: 35,
    marginLeft: 12,
  },
});
