import React from 'react';

import {
  SafeAreaView,
  ScrollView,
} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




function App() {
return(
  <SafeAreaView>
  <ScrollView>
   <FlatCards/>
   <ElevatedCards/>
   <FancyCards/>
   <ActionCard/>
 </ScrollView>
</SafeAreaView>
);
}

export default App;
