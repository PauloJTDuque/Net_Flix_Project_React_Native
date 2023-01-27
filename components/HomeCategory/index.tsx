import * as React from 'react';
import {  Image, FlatList } from 'react-native';


import { Text, } from '../../components/Themed';

import styles from './styles';


const firstCategory = categories.items[0];

const HomeCategory = () => {

  return (
    <>
        <Text style={styles.title}>Popular on Netflix</Text>
       

        <FlatList
            data={firstCategory.movies} 
            renderItem={({item}) => (
                <Image style={styles.image} source={{ uri: item.poster}}/>
            )}
            horizontal
        />
    </>
  );
}

export default HomeCategory;