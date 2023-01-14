import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Keyboard,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import Header from "./Header";
import { Formik } from "formik";
import { RadioButton } from "react-native-paper";
import * as Yup from "yup";
import ProfileImage from "./ProfileImage";
import { firebase } from "../../config";

const Form = () => {
  const [courseOpen, setCourseOpen] = useState(false);
  const [courseValue, setCourseValue] = useState("");
  const [course, setCourse] = useState([
    { label: "Course A", value: "Web Development" },
    { label: "Course B", value: "ReactJS" },
    { label: "Course C", value: "React-Native" },
  ]);
  const [checked, setChecked] = React.useState("first");

  const [handleGalleryPermission, setHandleGalleryPermission] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const todoRef = firebase.firestore().collection("FORMDATA");

  //   add a new field
  const addField = () => {
    // check if we have new field data
    if (
      name &&
      name.length &&
      password &&
      password.length &&
      email &&
      email.length &&
      city &&
      city.length &&
      course &&
      course.length > 0
    ) {
      //    get the timestamp
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        createdAt: timestamp,
        city: city,
        course: courseValue,
        email: email,
        password: password,
        ImageURL: image,
        name: name,
      };
      todoRef
        .add(data)
        .then(() => {
          //  release the new feild state
          setName("");
          setEmail("");
          setPassword("");
          setCity("");
          // release keyboard
          Keyboard.dismiss();
        })
        .catch((error) => {
          // show an alert in case of error
          alert(error);
        });
    }
  };

  const selectC = (e) => {
    setCourse(e);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header />

        <Text style={styles.label}>Name</Text>

        <TextInput
          style={styles.input}
          selectionColor={"#5188E3"}
          onChangeText={(x) => setName(x)}
          value={name}
          textContentType="name"
        />

        <Text style={styles.label}>Password</Text>

        <TextInput
          style={styles.input}
          secureTextEntry={true}
          selectionColor={"#5188E3"}
          onChangeText={(x) => setPassword(x)}
          value={password}
          textContentType="password"
        />
        <Text style={styles.label}>Email</Text>

        <TextInput
          style={styles.input}
          selectionColor={"#5188E3"}
          onChangeText={(x) => setEmail(x)}
          value={email}
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="emailAddress"
        />

        <Text style={styles.label}>Gender</Text>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <RadioButton
            value="first"
            status={checked === "first" ? "checked" : "unchecked"}
            onPress={() => setChecked("first")}
          />
          <Text>Male</Text>
          <RadioButton
            value="second"
            status={checked === "second" ? "checked" : "unchecked"}
            onPress={() => setChecked("second")}
          />
          <Text>Female</Text>
        </View>

        <Text style={styles.label}>City</Text>

        <TextInput
          style={styles.input}
          selectionColor={"#5188E3"}
          onChangeText={(x) => setCity(x)}
          value={city}
          textContentType="city"
        />

        <View style={{ paddingHorizontal: 10 }}>
          <Text style={[styles.label, { marginLeft: 0 }]}>Course</Text>

          <DropDownPicker
            style={styles.dropdown}
            open={courseOpen}
            value={courseValue} //courseValue
            items={course}
            setOpen={setCourseOpen}
            setValue={setCourseValue}
            setItems={setCourse}
            placeholder="Select Course"
            placeholderStyle={styles.placeholderStyles}
            activityIndicatorColor="#5188E3"
            searchable={true}
            searchPlaceholder="Search your course here..."
            onChangeText={selectC}
            zIndex={1000}
            zIndexInverse={3000}
          />
        </View>

        <ProfileImage
          setHandleGalleryPermission={setHandleGalleryPermission}
          handleGalleryPermission={handleGalleryPermission}
          image={image}
          setImage={setImage}
        />

        <TouchableOpacity>
          <Text style={styles.submit} onPress={addField}>
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f4f4",
  },
  input: {
    borderStyle: "solid",
    borderColor: "#B7B7B7",
    borderRadius: 7,
    borderWidth: 1,
    fontSize: 15,
    height: 50,
    marginHorizontal: 10,
    paddingStart: 10,
    marginBottom: 15,
  },
  label: {
    marginBottom: 7,
    marginStart: 10,
  },
  placeholderStyles: {
    color: "grey",
  },
  dropdownCourse: {
    marginHorizontal: 10,
    marginBottom: 15,
  },
  dropdown: {
    borderColor: "#B7B7B7",
    height: 50,
    backgroundColor: "#f8f4f4",
  },
  submit: {
    backgroundColor: "#fc5c65",
    color: "white",
    textAlign: "center",
    marginHorizontal: 60,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 20,
  },
  logIn: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 10,
  },
  links: {
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#758580",
  },
});

export default Form;
