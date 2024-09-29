// DonutDetailScreen.tsx
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import * as React from "react";
import { SafeAreaView, StyleSheet, View, Image } from "react-native";
import {
  Text,
  Button,
  IconButton,
  Divider,
  Icon,
  ActivityIndicator,
} from "react-native-paper";
import { getDonutById } from "../../services/donutService";
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

const DonutDetailScreen = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  const [quantity, setQuantity] = React.useState(1);
  const route = useRoute();
  const { id } = route.params as { id: number }; // Lấy id từ navigation route params

  const [donut, setDonut] = React.useState<Donut | null>(null); // State để lưu thông tin donut
  const [loading, setLoading] = React.useState(true); // State cho trạng thái loading

  // Hàm fetch chi tiết donut theo id
  const fetchDonutDetails = async (donutId: number) => {
    try {
      const response = await getDonutById(donutId);
      setDonut(response);
    } catch (error) {
      console.error("Failed to fetch donut details:", error);
    }
    setLoading(false);
  };

  // Gọi API khi component mount
  React.useEffect(() => {
    fetchDonutDetails(id);
  }, [id]);

  if (loading) {
    return (
      <ActivityIndicator style={{ flex: 1 }} size="large" color="orange" />
    );
  }

  if (!donut) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>No donut found!</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        {/* Donut Image */}
        <Image source={images[donut.id]} style={styles.donutImage} />

        {/* Donut Information */}
        <Text style={styles.donutTitle}>{donut.name}</Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.donutDescription}>{donut.description}</Text>
          <Text style={styles.donutPrice}>${donut.price}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Icon source="clock" size={20} />
          <Text>Delivery in</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Delivery Info */}
          <View style={styles.deliveryInfoContainer}>
            <Text style={styles.deliveryTime}>30 min</Text>
          </View>
          {/* Quantity Selector */}
          <View style={styles.quantityContainer}>
            <IconButton
              icon="minus"
              size={20}
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            />
            <Text style={styles.quantityText}>{quantity}</Text>
            <IconButton
              icon="plus"
              size={20}
              onPress={() => setQuantity(quantity + 1)}
            />
          </View>
        </View>

        {/* Restaurant Info */}
        <Divider style={styles.divider} />
        <View style={{ width: "100%" }}>
          <Text style={styles.restaurantInfoTitle}>Restaurants info</Text>
          <Text style={styles.restaurantInfoDescription}>
            Order a Large Pizza but the size is the equivalent of a medium/small
            from other places at the same price range.
          </Text>
        </View>
      </View>

      {/* Add to Cart Button */}
      <Button
        mode="contained"
        style={styles.addToCartButton}
        onPress={() => {
          navigation.goBack();
        }}
      >
        Add to cart
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    justifyContent: "space-between",
  },
  contentContainer: {
    alignItems: "center",
  },
  donutImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  donutTitle: {
    alignSelf: "flex-start",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  donutDescription: {
    fontSize: 16,
    color: "gray",
    marginBottom: 8,
  },
  donutPrice: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  deliveryInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  deliveryTime: {
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "bold",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 16,
  },
  divider: {
    width: "100%",
    marginVertical: 20,
  },
  restaurantInfoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  restaurantInfoDescription: {
    fontSize: 14,
    textAlign: "center",
  },
  addToCartButton: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "orange",
  },
});

export default DonutDetailScreen;
