import React, { useLayoutEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, NFTData } from '../constants';
import { NFTCard, HomeHead, FocusedStatusBar } from '../components';

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View className="flex-row pb-3 mx-4 space-x-2 items-center ">
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          style={styles.headerImg}
          className="rounded-full bg-gray-300 w-7 h-7"
        />
        <View>
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current Location</Text>
        </View>
      </View>
      {/* <FocusedStatusBar background={COLORS.primary} /> */}
      {/* <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            keyExtractor={(item) => item.id}
            ListHeaderComponent={<HomeHead />}
            renderItem={({ item }) => <NFTCard data={item} />}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View
            style={{ flex: 1, height: 300, backgroundColor: COLORS.white }}
          />
        </View>
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

export default Home;
