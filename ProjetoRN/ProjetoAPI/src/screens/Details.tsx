import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/Navigation';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type Props = {
  route: DetailsScreenRouteProp;
};

const Details: React.FC<Props> = ({ route }) => {
  const { match } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{match.title}</Text>
      <Text style={styles.date}>{match.date}</Text>
      <Text style={styles.details}>{match.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 18,
    color: '#666',
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
  },
});

export default Details;
