import { View, Text, StyleSheet } from 'react-native';
import { myColors } from '../styles/Colors';

interface DisplayProps {
  input: string;
  result: string;
}

export const Display: React.FC<DisplayProps> = ({ input, result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputText} numberOfLines={1} adjustsFontSizeToFit>
        {input || '0'}
      </Text>
      <Text style={styles.resultText} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'100%',
    paddingHorizontal:20,
    paddingVertical:40,
    alignItems: 'flex-end',
  },
  inputText: {
    fontSize: 30,
    color: myColors.white,
    fontWeight: '300',
    opacity:0.8,
  },
  resultText: {
    fontSize: 60,
    color: myColors.gray,
    fontWeight: '400',
  },
});


