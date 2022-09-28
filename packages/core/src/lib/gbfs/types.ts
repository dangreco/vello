export type GbfsData<T> = {
  ttl: number;
  last_updated: number;
  data: T;
};

export enum Feed {
  SystemAlerts = 'system_alerts',
  SystemInformation = 'system_information',
  StationStatus = 'station_status',
  StationInformation = 'station_information',
}

export type Language = 'en' | 'fr';

export type StationService = {
  id: string;
  service_type: string; // ???
  bikes_availability: string; // ???
  docks_availability: string; // ???
  name: string;
  description: string;
  schedule_description: string;
  link_for_more_info: string;
};

export enum RentalMethod {
  CreditCard = 'CREDITCARD',
  Key = 'KEY',
}

/* system_alerts */

export type SystemAlert = unknown;
export type SystemAlertsData = { alerts: SystemAlert[] };

/* system_information */

export type SystemInformation = {
  system_id: string;
  language: Language;
  name: string;
  short_name: string;
  operator: string;
  url: string;
  purchase_url: string;
  start_date: string;
  phone_number: string;
  email: string;
  license_url: string;
  timezone: string;
};

export type SystemInformationData = SystemInformation;

/* station_status */

export type StationStatus = {
  station_id: string;
  num_bikes_available: number;
  num_ebikes_available: number;
  num_bikes_disabled: number;
  num_docks_available: number;
  num_docks_disabled: number;
  is_installed: 1 | 0;
  is_renting: 1 | 0;
  is_returning: 1 | 0;
  last_reported: 1 | 0;
  eightd_has_available_keys: boolean;
  is_charging: boolean;
  eightd_active_station_services: Pick<StationService, 'id'>[];
};

export type StationStatusData = { stations: StationStatus[] };

/* station_information */

export type StationInformation = {
  station_id: string;
  external_id: string;
  name: string;
  short_name: string;
  lat: number;
  lon: number;
  capacity: number;
  rental_methods: RentalMethod[];
  electric_bike_surcharge_waiver: boolean;
  is_charging: boolean;
  eightd_has_key_dispenser: boolean;
  eightd_station_services: StationService[];
  has_kiosk: boolean;
};

export type StationInformationData = { stations: StationInformation[] };
