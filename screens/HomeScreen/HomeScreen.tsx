import * as React from 'react';
import {  Image, FlatList } from 'react-native';


import { Text, View } from '../../components/Themed';

import styles from './styles';
import categories from '../../assets/data/categories';

// import { RootTabScreenProps } from '../types';

// export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

const firstCategory = categories.items[0];

const HomeScreen = () => {

  return (
    <View style={styles.container}>
        
       

        <FlatList
            data={firstCategory.movies} 
            renderItem={({item}) => (
                <Image style={styles.image} source={{ uri: item.poster}}/>
            )}

        />
    </View>
  );
}

export default HomeScreen;