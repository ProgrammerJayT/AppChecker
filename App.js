import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Share from 'react-native-share';

Share.isPackageInstalled('com.softwapp.mzolo')
  .then(response => {
    alert(response.isInstalled);
  })
  .catch(error => {
    alert(error);
  });

const App = () => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
