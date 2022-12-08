import {View, StyleSheet} from 'react-native';
import React, {useContext, useState} from 'react';
import EditNoteTopBar from '../components/EditNoteTopBar';
import EditNoteBottomBar from '../components/EditNoteBottomBar';
import {TextInput} from 'react-native-gesture-handler';
import {addNote, updateNote, deleteNote} from '../services/FirebaseNoteService';
import {AuthContext} from '../navigation/AuthProvider';
import ArchieveTopBar from '../components/ArchieveTopBar';
import Search from '../screens/Search';
const EditNote = ({navigation, route}) => {
  const noteData = route.params;

  const [deleteData, setdeleteData] = useState(noteData?.isDeleted || false);
  const [title, setTitle] = useState(noteData?.title || ''); //opetionalchaninging
  const [note, setNote] = useState(noteData?.note || '');
  const [pinData, setPinData] = useState(noteData?.pinData || false);
  const [archieveData, setIsarchieveData] = useState(
    noteData?.archieveData || false,
  );
  const [reminderData, setReminderData] = useState(
    noteData?.reminderData || '',
  );
  const {user} = useContext(AuthContext);
  const onBackPress = async () => {
    const userId = user.uid;
    if (noteData.noteId) {
      await updateNote(
        title,
        note,
        noteData.noteId,
        userId,
        pinData,
        archieveData,
        deleteData,
        reminderData,
      );
    } else {
      await addNote(
        title,
        note,
        userId,
        pinData,
        archieveData,
        deleteData,
        reminderData,
      );
    }
    navigation.goBack();
  };
  const onDeleteHandle = async () => {
    const userId = user.uid;
    await updateNote(
      title,
      note,
      noteData.noteId,
      userId,
      pinData,
      archieveData,
      deleteData,
      reminderData,
    );
  };
  const onPinHandle = () => {
    setPinData(!pinData);
  };
  const onArchieveHandle = () => {
    setIsarchieveData(!archieveData);
  };
  return (
    <View>
      <View>
        <EditNoteTopBar
          onBackPress={onBackPress}
          pinData={pinData}
          archieveData={archieveData}
          deleteData={deleteData}
          onPinHandle={onPinHandle}
          onDeleteHandle={onDeleteHandle}
          onArchieveHandle={onArchieveHandle}
        />
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
        <EditNoteBottomBar
          deleteData={deleteData}
          setDeleteData={setdeleteData}
        />
      </View>
      <ArchieveTopBar
        archieveData={archieveData}
        setIsarchieveData={setIsarchieveData}
      />
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
