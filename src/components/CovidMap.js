import React from 'react';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './covidMap.css';

const CovidMap = ({ countries }) => {
	const mapStyle = {
		fillColor: 'white',
		weight: 1,
		color: 'black',
		fillOpacity: 1,
	};
	const onEachCountry = (country, layer) => {
		layer.options.fillColor = country.properties.color;
		const name = country.properties.ADMIN;
		const confirmedCases = country.properties.confirmedCases;

		layer.bindPopup(`${name} ${confirmedCases}`);
	};
	return (
		<MapContainer style={{ height: '90vh' }} zoom={2} center={[20, 100]}>
			<GeoJSON
				data={countries}
				style={mapStyle}
				onEachFeature={onEachCountry}
			/>
		</MapContainer>
	);
};

export default CovidMap;
