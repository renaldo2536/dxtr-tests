import React from "react";
import { View, Text, StyleSheet } from "react-native";

type CataloguePriceProps = {
  name: string;
  price: string;
  discount: string;
};

export const CataloguePrice = (props: CataloguePriceProps) => {
  const { name, price, discount } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>{name}</Text>
      <View style={styles.priceSectionContainer}>
        <Text style={styles.price}>{price}</Text>
        <Text style={styles.discount}>{discount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  textName: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
    marginTop: 5,
  },
  priceSectionContainer: {
    width: "100%",
    flexDirection: "row",
    marginTop: 5,
  },
  price: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
    width: "50%",
  },
  discount: {
    color: "grey",
    fontSize: 13,
    fontWeight: "bold",
    width: "50%",
    textAlign: "right",
  },
});
