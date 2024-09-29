// MapComponent.js
import React, { useEffect, useRef } from "react";
import "ol/ol.css"; // Import OpenLayers CSS
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";

const MapComponent = () => {
  const mapRef = useRef<any>(null); // Reference for the map container

  useEffect(() => {
    // Initialize the map
    const map = new Map({
      target: mapRef.current, // Set target to the div element
      layers: [
        new TileLayer({
          source: new OSM(), // Use OpenStreetMap tiles
        }),
      ],
      view: new View({
        center: fromLonLat([-0.09, 51.505]), // Longitude, Latitude for London
        zoom: 13, // Initial zoom level
      }),
    });

    return () => map.setTarget(undefined); // Cleanup on unmount
  }, []);

  return <div ref={mapRef} style={{ height: "400px", width: "100%" }} />;
};

export default MapComponent;
