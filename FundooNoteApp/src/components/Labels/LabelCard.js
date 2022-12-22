import {useState,useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {deletelabel, updateLabel} from '../../services/FirebaseLabelServices';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {AuthContext} from '../../navigation/AuthProvider';
const LabelCard = item => {
 
  const {user} = useContext(AuthContext);

  const [value, setValue] = useState(item.label);
  const [trash, setTrash] = useState(false);
  const [done, setDone] = useState(false);
  console.log('*******', item);
console.log("@@@@@@@@",value);
const userId = user.uid;

  const onDonePress = async () => {
 
    await updateLabel(value,userId,item.labelId);
    setDone(!done);
  
  };

  return (
    <View style={[styles.view, {borderColor: trash ? 'black' : 'grey'}]}>
      {trash ? (
        <AntDesign name="delete" size={22} color={'black'} onPress={() => {
          deletelabel(item.labelId,userId)
        setDone(!done)
        }} />
      ) : (
        <Icon
          size={26}
          name="label-outline"
          style={styles.labelIcon}
          color={"black"}
          onPress={() => {
            setTrash(!trash);
            setDone(!done);
          }}
        />
      )}
      {/* <Text style={styles.text}>{props.label}</Text> */}

      <TextInput
        value={value}
        onChangeText={text => setValue(text)}
        style={styles.text}
      />
      {done ? (
        <MaterialIcons
          style={{marginLeft: 'auto', marginRight: 10}}
          name="done"
          size={24}
          color={'blue'}
          onPress={() => {
            onDonePress();
          }}
        />
      ) : (
        <Icon
          size={26}
          name="pencil"
          style={styles.pencilIcon}
          color={"black"}
          onPress={() => {
            setDone(!done);
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
    marginVertical: 8,
  },
  labelIcon: {
    color: 'black',
    marginRight: 8,
  },
  pencilIcon: {
    color: 'black',
    alignContent: 'flex-end',
    alignItems: 'flex-end',

    marginLeft: 'auto',
    marginRight:10,
  },
  text: {
    textAlign: 'left',
    color: 'black',
    flexGrow: 1,
    paddingTop: -10,
    marginLeft:15,
  },
});

export default LabelCard;
