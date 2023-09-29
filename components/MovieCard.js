import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const MovieCard = ({ poster, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={1}
  >
    <Card style={styles.card}>
      <Card.Cover source={{ uri: poster }} />
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: 120,
    height: 190,
    marginLeft: 8,
  },
});

export default MovieCard;