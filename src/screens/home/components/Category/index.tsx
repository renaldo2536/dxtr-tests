import React, { useMemo } from "react";
import { Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import RNBounceable from "@freakycoder/react-native-bounceable";
import createStyles from "./index.style";
import { ICategoryItem } from "@services/models";
import { FlatList } from "react-native-gesture-handler";
import { categoryDataAtom } from "@services/storage/Atom";
import { useRecoilValue } from "recoil";

interface HomeScreenProps {}

const Category: React.FC<HomeScreenProps> = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(), [theme]);

  const categoryList = useRecoilValue<ICategoryItem[]>(categoryDataAtom);

  const Content = () => {
    return (
      <FlatList
        contentContainerStyle={{
          flexDirection: "row",
        }}
        style={{ paddingVertical: 10 }}
        data={categoryList}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item }) => (
          <RNBounceable style={styles.shadowContainer}>
            <Text style={{ color: "black" }}>{item.name}</Text>
          </RNBounceable>
        )}
      />
    );
  };

  return (
    <View style={styles.header}>
      <Content />
    </View>
  );
};

export default Category;
