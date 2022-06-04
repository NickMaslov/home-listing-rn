import { useEffect, useState } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/Card';
import * as houseAction from '../redux/actions/houseAction';

const HomeListScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const { houses } = useSelector((state) => state.house);

  useEffect(() => {
    setIsLoading(true);
    dispatch(houseAction.fetchHouses())
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  }, [dispatch]);

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size='large' />
      </View>
    );
  }

  if (houses.length === 0 && !isLoading) {
    return (
      <View style={styles.centered}>
        <Text>No home found. You could add one!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={houses}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return <Card house={item} navigation={navigation} />;
        }}
      />
      <FloatingAction
        position='right'
        animated={false}
        showBackground={false}
        onPressMain={() => navigation.navigate('AddHome')}
      />
    </View>
  );
};

export default HomeListScreen;

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: { flex: 1 },
});
