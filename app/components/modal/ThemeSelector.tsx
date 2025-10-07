import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { ModalRefType } from "./index.types";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export type ThemeType = "dark" | "light" | "system";

type Props = {
  onThemeSelect?: (theme: ThemeType) => void;
};

const ThemeSelector = forwardRef<ModalRefType, Props>(
  ({ onThemeSelect }, ref) => {
    const [visible, setVisible] = useState<boolean>(false);

    const hideModal = useCallback(() => {
      setVisible(false);
    }, []);

    useImperativeHandle(
      ref,
      () => {
        return {
          show: setVisible?.bind(null, true),
          hide: hideModal,
        };
      },
      []
    );

    const onThemePress = useCallback(
      (theme: ThemeType) => {
        onThemeSelect?.call(null, theme);
        setVisible(false);
      },
      [onThemeSelect]
    );

    return (
      <Modal
        visible={visible}
        onRequestClose={hideModal}
        onDismiss={hideModal}
        transparent
      >
        <Pressable onPress={hideModal} style={styles.overlay}>
          <Pressable style={styles.content}>
            <Text style={styles.title}>Select theme</Text>

            <View style={styles.divider} />

            <TouchableOpacity
              onPress={onThemePress?.bind(null, "system")}
              style={styles.optionCont}
            >
              <Text style={styles.option}>System</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity
              onPress={onThemePress?.bind(null, "light")}
              style={styles.optionCont}
            >
              <Text style={styles.option}>Light</Text>
            </TouchableOpacity>

            <View style={styles.divider} />

            <TouchableOpacity
              onPress={onThemePress?.bind(null, "dark")}
              style={styles.optionCont}
            >
              <Text style={styles.option}>Dark</Text>
            </TouchableOpacity>

            <View style={styles.divider} />
          </Pressable>
        </Pressable>
      </Modal>
    );
  }
);

export default ThemeSelector;

const styles = StyleSheet.create({
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    paddingHorizontal: 16,
  },

  content: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
  },

  title: {
    fontSize: 20,
    color: "black",
    fontWeight: "700",
    marginBottom: 16,
  },

  divider: {
    height: 1,
    backgroundColor: "grey",
  },

  optionCont: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },

  option: {
    fontSize: 16,
    color: "grey",
  },
});
