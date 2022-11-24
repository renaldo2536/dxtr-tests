import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Icon from "react-native-dynamic-vector-icons";

type catalogueProps = {
  imageURL: string;
  rating: number;
  keyId: string;
};

const showStars = (rating: number) => {
  const ratingStar = [];
  for (let i = 0; i < rating; i++) {
    ratingStar.push(
      <Icon name="star" type="Ionicons" color="orange" size={15} />,
    );
  }
  return ratingStar;
};

export const CatalogueImage = (props: catalogueProps) => {
  const { imageURL, rating, keyId } = props;
  return (
    <View style={styles.container} key={keyId}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageURL }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.rating}>{showStars(rating)}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
  },
  rating: {
    flexDirection: "row",
  },
});
