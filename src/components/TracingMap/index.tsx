import React, { ReactElement, useRef } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { DEFAULT_CENTER_ADD_CASE, DEFAULT_ZOOM_ADD_CASE, MAP_ACCESS_TOKEN } from 'constants/maps';
import { View } from 'react-native';
import styles from './styles';

MapboxGL.setAccessToken(MAP_ACCESS_TOKEN);

const TracingMap = (): ReactElement => {
  const centerMap = DEFAULT_CENTER_ADD_CASE;
  const zoomMap = DEFAULT_ZOOM_ADD_CASE;
  const map = useRef<MapboxGL.MapView>(null);

  return (
    <View style={styles.matchParent}>
      <MapboxGL.MapView
        ref={map}
        styleURL={MapboxGL.StyleURL.Light}
        style={styles.matchParent}
        logoEnabled={false}
        attributionEnabled={false}
        rotateEnabled={false}
        compassEnabled={false}>
        <MapboxGL.Camera zoomLevel={zoomMap} centerCoordinate={centerMap}/>
      </MapboxGL.MapView>
    </View>
  );
};

export default TracingMap;
