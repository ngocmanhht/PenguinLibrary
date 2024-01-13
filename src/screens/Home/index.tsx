import { Dimensions, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Pdf from 'react-native-pdf';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Pdf
        source={{
          uri: 'https://storage.googleapis.com/lets-read-asia/pdfs/1677c3f7-e83e-47b9-976d-8c4970989f7d/Ch%C3%BA%20S%C3%B3c%20n%C3%A2u_Ti%E1%BA%BFng%20Vi%E1%BB%87t_PORTRAIT_V12021.04.26T043829+0000.pdf',
          cache: true,
        }}
        style={styles.pdf}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },

  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
