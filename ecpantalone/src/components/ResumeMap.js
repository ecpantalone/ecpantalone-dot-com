import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import pins from "../mapstuff/pins";
// import cards from "../mapstuff/cards/";

const styles = {
  width: "100vw",
  height: "calc(100vh - 80px)",
  position: "absolute"
};

const ResumeMap = () => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [-79.88, 40.440624],
        zoom: 11
      });
      var chatham = [-79.9241, 40.4487]
      var chathamPopup = new mapboxgl.Popup({ offset: 25 }).setText(
        'Chatham University'
        );
      var el = document.createElement('div');
      el.id = 'marker';

      new mapboxgl.Marker(el)
        .setLngLat(chatham)
        .setPopup(chathamPopup)
        .addTo(map);

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return <div ref={el => (mapContainer.current = el)} style={styles} />;
};

export default ResumeMap;
