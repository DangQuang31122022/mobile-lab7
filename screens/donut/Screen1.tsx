import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import * as React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  Appbar,
  Text,
  Button,
  Chip,
  Searchbar,
  Card,
  IconButton,
  ActivityIndicator,
} from "react-native-paper";
import { getAllDonuts, getDonutsByType } from "../../services/donutService";

interface Donut {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  type: string;
}
const images: { [key: number]: any } = {
  1: require("../../assets/donut1.png"),
  2: require("../../assets/donut2.png"),
  3: require("../../assets/donut3.png"),
  4: require("../../assets/donut4.png"),
};
const DonutHome = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [donuts, setDonuts] = React.useState<Donut[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedType, setSelectedType] = React.useState<string>("");

  const onChangeSearch = (query: string) => setSearchQuery(query);
  // Function to fetch donuts based on type
  const fetchDonuts = async (type?: string) => {
    setLoading(true); // Start loading
    try {
      const response = type
        ? await getDonutsByType(type)
        : await getAllDonuts();
      setDonuts(response);
    } catch (error) {
      console.error("Error fetching donuts:", error);
    }
    setLoading(false); // End loading
  };

  // Fetch all donuts on mount
  React.useEffect(() => {
    fetchDonuts();
  }, []);

  // Handle chip selection
  const handleChipPress = (type: string) => {
    setSelectedType(type);
    fetchDonuts(type);
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* AppBar */}
      <Appbar.Header>
        <Appbar.Content
          title="Choice you Best food"
          subtitle="Welcome, Jala!"
        />
      </Appbar.Header>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search food"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>

      {/* Chip Selection */}
      <View style={styles.chipContainer}>
        <Chip
          mode="outlined"
          selectedColor="orange"
          style={styles.chip}
          selected={selectedType === ""}
          onPress={() => handleChipPress("")}
        >
          Donut
        </Chip>
        <Chip
          mode="outlined"
          selectedColor="orange"
          style={styles.chip}
          selected={selectedType === "pink"}
          onPress={() => handleChipPress("pink")}
        >
          Pink Donut
        </Chip>
        <Chip
          mode="outlined"
          selectedColor="orange"
          style={styles.chip}
          selected={selectedType === "floating"}
          onPress={() => handleChipPress("floating")}
        >
          Floating
        </Chip>
      </View>

      {/* Food List */}
      {loading ? (
        <ActivityIndicator style={{ flex: 1 }} size="large" color="orange" />
      ) : (
        <ScrollView>
          {donuts.map((donut) => (
            <TouchableOpacity
              key={donut.id}
              onPress={() =>
                navigation.navigate("DonutDetailScreen", { id: donut.id })
              }
            >
              <FoodCard
                key={donut.id}
                image={images[donut.id]} // Assuming image is a URL or you may need to require the image path
                title={donut.name}
                price={`$${donut.price.toFixed(2)}`}
                description={donut.description}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

// Component to render a Food Card
interface FoodCardProps {
  image: any;
  title: string;
  price: string;
  description: string;
}

const FoodCard: React.FC<FoodCardProps> = ({
  image,
  title,
  price,
  description,
}) => {
  return (
    <Card style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={image} style={styles.image} />
        <View style={styles.textContent}>
          <Text variant="titleLarge">{title}</Text>
          <Text>{description}</Text>
          <Text variant="titleMedium" style={styles.price}>
            {price}
          </Text>
        </View>
        <IconButton icon="plus" mode="contained" style={styles.addButton} />
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  chipContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 10,
  },
  chip: {
    marginHorizontal: 5,
  },
  card: {
    margin: 10,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  textContent: {
    flex: 1,
    marginHorizontal: 10,
  },
  price: {
    color: "green",
    marginTop: 5,
  },
  addButton: {
    backgroundColor: "orange",
  },
});

export default DonutHome;
