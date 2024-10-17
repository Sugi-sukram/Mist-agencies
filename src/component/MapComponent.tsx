// MapComponent.js
import React, { useEffect, useRef } from "react";
import "ol/ol.css"; // Import OpenLayers CSS
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { ContactDetails } from "@/config/Contact-details";

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

  return (
    <div
      className=" flex justify-center flex-row items-center "
      style={{ height: "auto", borderRadius: "30px" }}
    >
      <div
        className="rounded overflow-hidden"
        style={{ height: "300px", width: "70%", borderRadius: "30px" }}
        onClick={(e) => {
          e.stopPropagation();
          window.open(ContactDetails.googleLocationUrl, "_blank");
        }}
        ref={mapRef}
      ></div>
    </div>
  );
};

export default MapComponent;
