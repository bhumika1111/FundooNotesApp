import {useState}from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LabelCard = props => {
//  const [checkIcon,setCheckIcon] = useState(item.label)
// const [iconVisible,setIconVisible]=useState(false)

// const handleUpdate=()=>{

// }

  return (
    <View style={styles.view}>
      <Icon
        size={26}
        name="label-outline"
        style={styles.labelIcon}
        color="black"
      />
      <Text style={styles.text}>{props.label}</Text>

      <Icon size={26} name="pencil" style={styles.pencilIcon} color="black" />
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

    marginLeft: 8,
  },
  text: {
    textAlign: 'left',
    color: 'black',
    flexGrow: 1,

  },
});

export default LabelCard;
