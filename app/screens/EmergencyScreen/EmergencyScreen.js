import React from 'react';
import { StyleSheet, View } from 'react-native';
import Card from './Card';
import CircleButton from './CircleButton';
import Header from './Header';
import PersonIcon from './PersonIcon';
import TitleSection from './TitleSection';

function EmergencyScreen() {
  return (
    <View style={{ paddingTop: 45, paddingBottom: 180 }}>
      <Header/>
      <TitleSection />
      <View style={styles.container}>
        <PersonIcon top={20} right={45} name="police" />
        <PersonIcon top={190} right={75} name="Wild life Dep" />
        <PersonIcon top={160} left={75} name="Dad" />
        <CircleButton />
      </View>
      <View>
        <Card location='22A lsac Lane, Yala Road , Katharagama' />
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingBottom: 200
  },
});

export default EmergencyScreen