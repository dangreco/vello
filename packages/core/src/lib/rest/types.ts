import { FeatureCollection, Point } from 'geojson';

export type BikeProperties = {
  bike_id: string;
  reserved: boolean;
  disabled: boolean;
};
export type BikeLayer = FeatureCollection<Point, BikeProperties>;

export type EbikeProperties = {
  bike_number: string;
  charge: number;
};

export type StationProperties = {
  station_id: string;
  name: string;
  terminal: string;
  capacity: number;
  bikes_available: number;
  docks_available: number;
  bikes_disabled: number;
  docks_disabled: number;
  renting: boolean;
  returning: boolean;
  ebike_surcharge_waiver: boolean;
  installed: boolean;
  last_reported: number;
  icon_pin_bike_layer: string;
  icon_pin_dock_layer: string;
  icon_dot_bike_layer: string;
  icon_dot_dock_layer: string;
  ebikes_available: number;
  bike_angels_action: string;
  bike_angels_points: number;
  bike_angels_digits: number;
  valet_status: string;

  /* optional */
  ebikes?: EbikeProperties[];

  sponsor_name?: string;
  sponsor_image_url?: string;
  sponsor_link_out_url?: string;
};
export type StationLayer = FeatureCollection<Point, StationProperties>;

export type Bike = BikeProperties;
export type Station = StationProperties;
