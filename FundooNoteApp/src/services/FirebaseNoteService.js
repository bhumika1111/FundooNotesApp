
import React, {useContext} from 'react';
import firestore from '@react-native-firebase/firestore';
import {AuthContext} from '../navigation/AuthProvider';

const db = firestore().collection('UserData');

export const addNote = async (
  title,
  note,
  userId,
  pinData,
  archieveData,
  deleteData,
  reminderData,
) => {
  try {
    await db.doc(userId).collection('NoteData').add({
      title: title,
      note: note,
      pinData: pinData,
      archieveData: archieveData,
      deleteData: deleteData,
      reminderData: reminderData,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchingNote = async userId => {
  try {
    let array = [];
    await db
      .doc(userId)
      .collection('NoteData')
      .get()
      .then(noteData => {
        noteData.forEach(note => {
          const docData = note.data();
          docData.noteId = note.id;
          array.push(docData);
        });
      });
    return array;
  } catch (error) {
    console.log(error);
  }
};
export const updateNote = async (
  title,
  note,
  noteId,
  userId,
  pinData,
  archieveData,
  deleteData,
  reminderData,
) => {
  try {
    await db
      .doc(userId)
      .collection('NoteData')
      .doc(noteId)
      .update({
        note: note,
        title: title,
        pinData: pinData,
        archieveData: archieveData,
        deleteData: deleteData,
        reminderData: reminderData,
      })
      .then(() => {
        console.log('User updated!');
      });
  } catch (error) {
    console.log(error);
  }
};
export const deleteNote = async (noteId, userId) => {
  try {
    await db
      .doc(userId)
      .collection('NoteData')
      .doc(noteId)
      .delete()
      .then(() => {
        console.log('User deleted!');
      });
  } catch (error) {
    console.log(error);
  }
};
