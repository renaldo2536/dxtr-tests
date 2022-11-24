import React, { useMemo } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import createStyles from "./index.style";
import { IProductItem } from "@services/models";
import { Header } from "./components/Header";
import { CatalogueImage } from "./components/CatalogueImage";
import { CataloguePrice } from "./components/CataloguePrice";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

interface ICardItemProps {
  style?: CustomStyleProp;
  data: IProductItem;
  onPress: () => void;
}

const Catalogue: React.FC<ICardItemProps> = ({ style, data, onPress }) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const { id, name, image, rating, isFav, out_of_stock, new: isNew, price, off } = data;

  return (
    <RNBounceable style={[styles.container, style]} onPress={onPress}>
      <Header isFav={isFav} outOfStock={out_of_stock} isNew={isNew}/>
      <CatalogueImage imageURL={image} rating={rating} keyId={id}/>
      <CataloguePrice name={name} price={price} discount={off}/>
    </RNBounceable>
  );
};

export default Catalogue;
