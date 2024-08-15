import { View, Text, StyleSheet, SafeAreaView, FlatList, StatusBar, TextInput } from 'react-native';
import { useState } from 'react';
import Data from './jobs.json';
// import '@react-navigation/bottom-tabs';
// import '@react-navigation/native';

const TopBar = ({ username }) => {
  return (
    <View style={styles.topBar}>
      <Text style={styles.username}>Hey, {username}</Text>
    </View>
  );
};
const SearchBar = ({ searchQuery, onSearch }) => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search projects..."
        value={searchQuery}
        onChangeText={onSearch}
      />
    </View>
  );
};

// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={App} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = Data.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopBar username="Ahmad" />
      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <FlatList
        data={filteredData}
        keyExtractor={item => item._id}
        renderItem={({ item }) => (
          <View style={styles.jobsContainer}>
            <View style={styles.jobTitle}>
              <Text style={styles.jobsTitle}>{item.title}</Text>
            </View>
            <View style={styles.price}>
              <Text>Price: {item.price}</Text>
            </View>
            <View style={styles.price}>
              <Text>Duration: {item.duration}</Text>
            </View>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  topBar: {
    height: 90,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  username: {
    color: 'black',
    fontSize: 25,
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  searchBarContainer: {
    margin: 10,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#E6E6E7',
  },
  searchBar: {
    height: 40,
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  jobsContainer: {
    flexDirection: 'column',
    padding: 20,
    marginHorizontal: 10,
    backgroundColor: 'white',
    marginBottom: 9,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#E6E6E7',
    alignItems: 'flex-start',
  },
  jobsTitle: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 20,
  },
  price: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E7',
    backgroundColor: '#FAF9F6',
  },
  description: {
    marginTop: 15,
  },
});

export default App;


