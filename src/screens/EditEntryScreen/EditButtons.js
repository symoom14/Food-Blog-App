import React, { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "../../styles/EditButtonsStyles";
import { ThemeContext } from "../../context/ThemeContext";

export default function EditButtons({ onSave, onDelete }) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <TouchableOpacity
        onPress={onSave}
        style={[
          styles.saveButton,
          { backgroundColor: theme.success || "#0bb825" },
        ]}
      >
        <Text
          style={[
            styles.saveButtonText,
            { color: theme.textOnSuccess || "white" },
          ]}
        >
          Save Changes
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onDelete}
        style={[
          styles.deleteButton,
          { backgroundColor: theme.errorBackground || "#ffeaea" },
        ]}
      >
        <Text
          style={[
            styles.deleteButtonText,
            { color: theme.danger || "red" },
          ]}
        >
          Delete Entry
        </Text>
      </TouchableOpacity>
    </>
  );
}
