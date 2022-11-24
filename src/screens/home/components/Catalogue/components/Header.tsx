import React from "react";
import {
  View,
  Text as RNText,
  StyleSheet,
} from "react-native";
import Icon from "react-native-dynamic-vector-icons";

type headerProps = {
  isFav: boolean;
  outOfStock: boolean;
  isNew: boolean;
};

const OutOfStock = () => (
  <View style={styles.outOfStockContainer}>
    <RNText style={styles.textOutOfStock}>Out of stock</RNText>
  </View>
);

const New = () => (
  <View style={styles.newStockContainer}>
    <RNText style={styles.newStockText}>New</RNText>
  </View>
);

export const Header = (props: headerProps) => {
  const { isFav, outOfStock, isNew } = props;
  return (
    <View style={styles.container}>
      {outOfStock === true && <OutOfStock />}
      {isNew && <New />}
      <View
        style={[
          styles.headerSection,
          {
            width: !outOfStock && !isNew ? "100%" : "50%",
          },
        ]}
      >
        {isFav ? (
          <Icon name="heart" type="Ionicons" color="#ff0000" size={20} />
        ) : (
          <Icon name="heart-outline" type="Ionicons" color="black" size={20} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  headerSection: {
    backgroundColor: "white",
    alignItems: "flex-end",
  },
  outOfStockContainer: {
    backgroundColor: "#ff2a48",
    width: "50%",
    justifyContent: "center",
    borderRadius: 5,
  },
  textOutOfStock: {
    fontSize: 12,
    color: "white",
    alignSelf: "center",
  },
  newStockContainer: {
    width: "50%",
    justifyContent: "center",
    borderRadius: 5,
  },
  newStockText: {
    fontSize: 13,
    color: "black",
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
});
