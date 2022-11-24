import { ExtendedTheme } from "@react-navigation/native";
import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface Style {
  container: ViewStyle;
  descriptionTextStyle: TextStyle;
  contentContainer: ViewStyle;
  languageContainer: ViewStyle;
  languageColorStyle: ViewStyle;
  starContainer: ViewStyle;
  valueTextStyle: TextStyle;
  forkContainer: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      padding: 8,
      marginHorizontal: 8,
      marginBottom: 18,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: 'white',
      backgroundColor: colors.dynamicBackground,
      width: '45%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
      elevation: 3,
    },
    descriptionTextStyle: {
      marginTop: 8,
    },
    contentContainer: {
      marginTop: 16,
      flexDirection: "row",
      alignItems: "center",
    },
    languageContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    languageColorStyle: {
      width: 15,
      height: 15,
      borderWidth: 1,
      borderRadius: 15,
      borderColor: colors.borderColor,
      backgroundColor: colors.calpyse,
    },
    starContainer: {
      marginLeft: 16,
      flexDirection: "row",
      alignItems: "center",
    },
    valueTextStyle: {
      marginLeft: 8,
    },
    forkContainer: {
      marginLeft: 16,
      flexDirection: "row",
      alignItems: "center",
    },
  });
};
