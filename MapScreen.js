import React, { Component } from "react";
import { ScrollView, useWindowDimensions } from "react-native";
import HTML from "react-native-render-html";
//https://opencagedata.com/tutorials/geocode-in-javascript
const htmlContent = `
<head>
<script src="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.js"></script>
<link type="text/css" rel="stylesheet" href="https://api.mqcdn.com/sdk/mapquest-js/v1.3.2/mapquest.css"/>
<script type="text/javascript">
  window.onload = function() {
    L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';
    var map = L.mapquest.map('map', {
      center: [32.7767, -96.7970],
      layers: L.mapquest.tileLayer('map'),
      zoom: 12
    });
    map.addControl(L.mapquest.control());
  }
</script>
</head>
<body style="border: 0; margin: 0;">
<div id="map" style="width: 100%; height: 530px;"></div>
</body>
`;
const contentWidth = useWindowDimensions().width;
class MapScreen extends React.Component {
    render() {
  return (

      <View style={styles.container}>

        <Button
          title="See Map"
          onPress={() =>
            this.props.navigation.navigate('Map')
          }
        />
    <ScrollView style={{ flex: 1 }}>
      <HTML source={{ html: htmlContent }} contentWidth={contentWidth} />
    </ScrollView>
    </View>
    
  );
}
}
export default MapScreen;