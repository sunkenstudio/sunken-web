'use client';

import React from 'react';
import { Map as MapboxMap, Marker } from 'react-map-gl';
import { Icon } from '../Shared/Icon';
import { StrapiMapSection } from '@/app/types';

interface MapProps {
  mapSection: StrapiMapSection;
}

export const Map = ({ mapSection }: MapProps) => {
  const { theme, center, zoom, markers, markerIcon } = mapSection;
  const renderMarkers = () => {
    return markers.map((i) => (
      <Marker latitude={i.lat} longitude={i.lng} key={`${i.lat}-${i.lng}`}>
        {i.label}
        <Icon type={markerIcon} size={32} color={'black'} />
      </Marker>
    ));
  };

  return (
    <div style={{ position: 'relative' }}>
      <MapboxMap
        mapboxAccessToken="pk.eyJ1IjoiZGFuaWVsd2FycmljayIsImEiOiJjbGk1YmhiNWIwcjlwM2dxcDY4OW81c2tkIn0.oqnbYny0_jq4AObxrCc04Q"
        initialViewState={{
          longitude: center.lng,
          latitude: center.lat,
          zoom,
        }}
        mapStyle={theme}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 0,
        }}
      >
        {renderMarkers()}
      </MapboxMap>
    </div>
  );
};
