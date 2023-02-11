import React, { useEffect, useRef, useState } from "react";
import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import { Icon, Style } from "ol/style";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";

function OpenLayersMap() {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState([0, 0]); // default center
  const [zoom, setZoom] = useState(2); // default zoom

  useEffect(() => {
    if (!map) {
      const newMap = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: fromLonLat([70.8022, 22.3039]),
          zoom: 10,
        }),
      });
      setMap(newMap);
    } else {
      map.getView().setCenter(center);
      map.getView().setZoom(zoom);
    }
  }, [map, center, zoom]);

  useEffect(() => {
    if (map) {
      const marker1 = new Feature({
        geometry: new Point(fromLonLat([70.8197142, 22.2347302])),
      
      });
      const marker2 = new Feature({
        geometry: new Point(fromLonLat([70.7347, 22.4035])),
        zoom:10
      });
      const marker3 = new Feature({
        geometry: new Point(fromLonLat([70.61, 22.2314])),
      });
      const marker4 = new Feature({
        geometry: new Point(fromLonLat([70.8705, 22.25133])),
       
      });

      const markerStyle = new Style({
        image: new Icon({
          src: "https://cdn3.iconfinder.com/data/icons/softwaredemo/PNG/32x32/Circle_Red.png",
        }),
      });

      marker1.setStyle(markerStyle);
      marker2.setStyle(markerStyle);
      marker3.setStyle(markerStyle);
      marker4.setStyle(markerStyle);

      const markerSource = new VectorSource({
        features: [marker1, marker2, marker3, marker4],
      });

      const markerLayer = new VectorLayer({
        source: markerSource,
      });

      map.addLayer(markerLayer);
    }
  }, [map]);

  return (
    <div
      ref={mapRef}
      className="map-container ml-32"
      style={{ width: "80vw", height: "500px" }}
    />
  );
}

export default OpenLayersMap;
