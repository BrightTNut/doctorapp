import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";

export default function App() {
  const [formData, setFormData] = useState({
    Name: "",
    NameUpper: "",
    PhoneNo: "",
    WhatsappNo: "",
    CountryCode: "",
    Email: "",
    Gender: "",
    Age: "",
    AgeUnit: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Simulating a successful form submission on the frontend without backend
    Alert.alert("Success", "Form data submitted successfully!");

    // Set the form submission state to true
    setSubmitted(true);

    // Log the form data in the console for debugging purposes
    console.log("Form Data Submitted: ", formData);
  };

  if (submitted) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>User Profile</Text>

        {/* Profile Info */}
        <View style={styles.infoBox}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.infoText}>{formData.NameUpper}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Phone No</Text>
          <Text style={styles.infoText}>{formData.PhoneNo}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Whatsapp No</Text>
          <Text style={styles.infoText}>{formData.WhatsappNo}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Country Code</Text>
          <Text style={styles.infoText}>{formData.CountryCode}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.infoText}>{formData.Email}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Gender</Text>
          <Text style={styles.infoText}>{formData.Gender}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.label}>Age</Text>
          <Text style={styles.infoText}>
            {formData.Age} {formData.AgeUnit}
          </Text>
        </View>

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setSubmitted(false)}
        >
          <Text style={styles.backButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>User Details Form</Text>

      {/* Name */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          placeholderTextColor="#AAA"
          value={formData.Name}
          onChangeText={(value) => handleInputChange("Name", value)}
        />
      </View>

      {/* Name Upper */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Name Upper</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name in Uppercase"
          placeholderTextColor="#AAA"
          value={formData.NameUpper}
          onChangeText={(value) => handleInputChange("NameUpper", value)}
        />
      </View>

      {/* Phone Number */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Phone No</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone Number"
          placeholderTextColor="#AAA"
          value={formData.PhoneNo}
          onChangeText={(value) => handleInputChange("PhoneNo", value)}
          keyboardType="phone-pad"
        />
      </View>

      {/* Whatsapp Number */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Whatsapp No</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Whatsapp Number"
          placeholderTextColor="#AAA"
          value={formData.WhatsappNo}
          onChangeText={(value) => handleInputChange("WhatsappNo", value)}
          keyboardType="phone-pad"
        />
      </View>

      {/* Country Code */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Country Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Country Code"
          placeholderTextColor="#AAA"
          value={formData.CountryCode}
          onChangeText={(value) => handleInputChange("CountryCode", value)}
        />
      </View>

      {/* Email */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          placeholderTextColor="#AAA"
          value={formData.Email}
          onChangeText={(value) => handleInputChange("Email", value)}
          keyboardType="email-address"
        />
      </View>

      {/* Gender */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Gender</Text>
        <View style={{ flexDirection: "row" }}>
          {["Male", "Female", "Other"].map((gender) => (
            <TouchableOpacity
              key={gender}
              style={[
                styles.genderButton,
                formData.Gender === gender && {
                  backgroundColor: "#FF5733",
                  borderColor: "#FF5733",
                },
              ]}
              onPress={() => handleInputChange("Gender", gender)}
            >
              <Text
                style={[
                  styles.genderText,
                  formData.Gender === gender && { color: "#FFF" },
                ]}
              >
                {gender}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Age */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Age"
          placeholderTextColor="#AAA"
          value={formData.Age}
          onChangeText={(value) => handleInputChange("Age", value)}
          keyboardType="numeric"
        />
      </View>

      {/* Age Unit */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Age Unit</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Age Unit (e.g., Years)"
          placeholderTextColor="#AAA"
          value={formData.AgeUnit}
          onChangeText={(value) => handleInputChange("AgeUnit", value)}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FF5733",
    textAlign: "center",
    marginBottom: 20,
  },
  inputBox: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: "#FAFAFA",
  },
  genderButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: "#FF5733",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  genderText: {
    fontSize: 16,
    color: "#FF5733",
    fontWeight: "bold",
  },
  submitButton: {
    backgroundColor: "#FF5733",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  infoBox: {
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: "#555",
  },
  backButton: {
    backgroundColor: "#FF5733",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
});
