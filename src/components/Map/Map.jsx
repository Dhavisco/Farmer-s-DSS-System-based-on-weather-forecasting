import { Fragment } from "react";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useStore } from "../../store/store";
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const { lon, lat } = useStore((state) => ({
    lon: state.lon,
    lat: state.lat,
  }));

  // console.log(center);
  return (
    <Fragment>
      <MapContainer
        center={[lat, lon]}
        zoom={13}
        style={{
          height: "400px",
          width: "100%",
          position: "relative",
          zIndex: "10",
        }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Add other components (e.g., Markers) here */}
        <Marker position={[lat, lon]}></Marker>
      </MapContainer>
    </Fragment>
  );
};

export default Map;
