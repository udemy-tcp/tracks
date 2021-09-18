import React, { useContext } from 'react'
import { Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
  const {
    state: { currentLocation }
  } = useContext(LocationContext)

  if (!currentLocation)
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />

  const initialLocation = {
    longitude: -122.0312186,
    latitude: 37.33233141
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...initialLocation,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    />
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300
  }
})

export default Map
