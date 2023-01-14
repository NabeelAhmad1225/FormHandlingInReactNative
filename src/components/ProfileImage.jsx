import { Button, StyleSheet, Text, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import * as imagePicker from "expo-image-picker";

const ProfileImage = ({
  handleGalleryPermission,
  setHandleGalleryPermission,
  image,
  setImage,
}) => {
  // const [handleGalleryPermission, setHandleGalleryPermission] = useState(null);
  // const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      const galleryStatus =
        await imagePicker.requestMediaLibraryPermissionsAsync();
      setHandleGalleryPermission(galleryStatus.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    let result = await imagePicker.launchImageLibraryAsync({
      mediaTypes: imagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  if (handleGalleryPermission === false) {
    return <Text>No acess to Internal Storage</Text>;
  }
  console.log(image);
  return (
    <View
      style={{ marginTop: 10, width: 200, marginLeft: 10, borderRadius: 25 }}
    >
      <Button
        title="Upload Profile Image"
        onPress={pickImage}
        style={styles.btn}
      />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({});
