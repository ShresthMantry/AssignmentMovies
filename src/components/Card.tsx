import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { getRandomDogImage } from '../api/dogApi';

const Card = ({ title, author }: { title: string, author: string }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    fetchDogImage();
  }, []);

  const fetchDogImage = async () => {
    const url = await getRandomDogImage();
    setImageUrl(url);
  };

  return (
    <TouchableOpacity style={styles.card} >
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Card;