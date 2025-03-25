import React, { useContext } from "react";
import {
  TouchableOpacity,
  Text,
  Platform,
  Alert,
  ActionSheetIOS,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { ThemeContext } from "../../context/ThemeContext";

export default function ImagePickerButton({ onImagePicked, style, textStyle }) {
  const { theme } = useContext(ThemeContext);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) onImagePicked(result.assets[0].uri);
  };

  const takePhoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Permission Required", "Camera access is needed to take photos.");
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) onImagePicked(result.assets[0].uri);
  };

  const handleImagePicker = () => {
    if (Platform.OS === "ios") {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ["Cancel", "Take a Photo", "Choose from Gallery"],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex === 1) takePhoto();
          else if (buttonIndex === 2) pickImage();
        }
      );
    } else {
      Alert.alert("Select Image", "Choose an image source", [
        { text: "Cancel", style: "cancel" },
        { text: "Take a Photo", onPress: takePhoto },
        { text: "Choose from Gallery", onPress: pickImage },
      ]);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleImagePicker}
      style={[style, { backgroundColor: theme.buttonBackgroundImagePicker }]}
    >
      <Ionicons name="add-circle" size={20} color={theme.accent} />
      <Text style={[textStyle, { color: theme.accent }]}>
        Attach an Image
      </Text>
    </TouchableOpacity>
  );
}
