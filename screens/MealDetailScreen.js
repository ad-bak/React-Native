import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import { View } from "react-native";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("header button pressed");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <SafeAreaView style={[styles.rootContainer, { flex: 1 }]}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View>
          <Text style={styles.title}>{selectedMeal.title} </Text>
          <MealDetails
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyles={styles.detailText}
          />
          <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
              <Subtitle>Ingredients</Subtitle>
              <List data={selectedMeal.ingredients} />
              <Subtitle>Steps</Subtitle>
              <List data={selectedMeal.steps} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
  },
  detailText: {
    color: "green",
    fontWeight: "bold",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  scrollContainer: {},
});
export default MealDetailScreen;
