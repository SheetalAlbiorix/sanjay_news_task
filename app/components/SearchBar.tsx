import { memo } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import icons from "../../assets/images/icons";
import { useSelector } from "react-redux";
import { stateIsLightTheme } from "../store/themeSlice";
import colors, { darkMColors } from "../../assets/colors";

type Props = {
  value: string;
  onValueChange: TextInputProps["onChangeText"];
  onClear: () => void;
};

const SearchBar: React.FC<Props> = ({ value, onValueChange, onClear }) => {
  const isLightTheme = useSelector(stateIsLightTheme);

  return (
    <View style={[styles.root, !isLightTheme ? styles.darkRoot : undefined]}>
      {isLightTheme ? (
        <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.icon}
          tintColor={colors.black}
        />
      ) : (
        <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.icon}
          tintColor={colors.white}
        />
      )}

      <TextInput
        value={value}
        onChangeText={onValueChange}
        placeholder="Search..."
        placeholderTextColor={isLightTheme ? "grey" : darkMColors.lightGrey}
        style={[styles.input, isLightTheme ? undefined : styles.darkInput]}
      />

      <TouchableOpacity onPress={onClear}>
        {isLightTheme ? (
          <Image
            source={icons.close}
            resizeMode="contain"
            style={styles.close}
            tintColor={colors.black}
          />
        ) : (
          <Image
            source={icons.close}
            resizeMode="contain"
            style={styles.close}
            tintColor={colors.white}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default memo(SearchBar);

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    height: 56,
    marginBottom: 24,
    paddingHorizontal: 16,
  },

  darkRoot: {
    borderColor: darkMColors.lightGrey,
  },

  icon: {
    height: 24,
    width: 24,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    marginLeft: 12,
  },

  darkInput: {
    color: colors.white,
  },

  close: {
    height: 20,
    width: 20,
    tintColor: colors.black,
  },
});
