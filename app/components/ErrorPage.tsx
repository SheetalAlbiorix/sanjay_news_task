import { memo } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import lottie from "../../assets/lottie";

type Props = {
  onTryAgain?: () => void;
};

const ErrorPage: React.FC<Props> = ({ onTryAgain }) => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Oops! Something went wrong</Text>

      <LottieView
        source={lottie.error}
        autoPlay
        loop
        style={styles.animation}
      />

      <Button title="Try Again" onPress={onTryAgain} />
    </View>
  );
};

export default memo(ErrorPage);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    color: "black",
    fontWeight: "800",
  },

  animation: {
    width: "100%",
    aspectRatio: 1,
  },
});
