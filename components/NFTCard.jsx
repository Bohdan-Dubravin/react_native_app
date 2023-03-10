import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from '../constants';

const NFTCard = ({ data }) => {
  const navigation = useNavigation({});

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View
        style={{
          width: '100%',
          height: 250,
        }}
      >
        <Image
          source={data.image}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
        />
      </View>
    </View>
  );
};

export default NFTCard;

const styles = StyleSheet.create({});
