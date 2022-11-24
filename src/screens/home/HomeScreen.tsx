import React, { useEffect, useMemo } from "react";
import { View, FlatList } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import createStyles from "./HomeScreen.style";
import Catalogue from "./components/Catalogue";
import Header from "./components/Header";
import Category from "./components/Category";
import { getCategoryData } from "@services/api/Category";
import { ICategoryItem, IProductItem } from "@services/models";
import { categoryDataAtom, productListAtom } from "@services/storage/Atom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getProductData } from "@services/api/Product";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const setCategoryList = useSetRecoilState<ICategoryItem[]>(categoryDataAtom);
  const [productList, setProductList] = useRecoilState<IProductItem[]>(productListAtom);


  const List = () => (
    <View style={styles.listContainer}>
      <FlatList
        data={productList ?? {}}
        numColumns={2}
        renderItem={({ item }) => (
          <Catalogue data={item} onPress={() => null} key={item?.id}/>
        )}
      />
    </View>
  );

  const getCategory = () => {
    getCategoryData().then(res => {
      setCategoryList(res.data);
    });
  }

  const getProduct = () => {
    getProductData().then(res => {
      setProductList(res.data)
    })
  }

  useEffect(() => {
    getCategory();
    getProduct();
  }, []);

  const Content = () => (
    <View style={styles.contentContainer}>
      <List />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Category />
      <Content />
    </SafeAreaView>
  );
};

export default HomeScreen;
