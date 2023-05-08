import React from "react";
import { Text, View } from "react-native";
import Notify from "./API/notify.js";
import ClipBoard from "./API/Clipboard.js";
import { StyleSheet } from "react-native";
import Dim from "./API/dim.js";
import LocationApp from "./API/location.js";
import PanResopn from "./API/PanRespon.js";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Notify /> */}
      {/* <ClipBoard /> */}
      {/* <Dim /> */}
      {/* <LocationApp /> */}
      <PanResopn />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App;
