import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  RefreshControl,
  ScrollView,
  View,
  FlatList,
} from "react-native";
import Constants from "expo-constants";

export default function App() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [weather, setWeather] = React.useState([]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);

    try {
      const response = await fetch("http://10.1.1.65:5000/WeatherForecast");
      if (response.ok) {
        const data = await response.json();
        setWeather(data);
      } else {
        console.log(response.statusText);
      }
    } catch (error) {
      console.log(error.message);
    }
    setRefreshing(false);
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <StatusBar style="auto" />
        <Text style={styles.title}>Push to fetch/reload weather info!</Text>
        <FlatList
          data={weather}
          keyExtractor={(item) => item.date}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{`Date: ${item.date}`}</Text>
              <Text>{`Summary: ${item.summary}`}</Text>
              <Text>{`Temperature: ${item.temperatureC} º C`}</Text>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    marginBottom: 20,
  },
  scrollView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});
