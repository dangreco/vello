import { Bixi, Language } from '@vello/core';

export enum Topic {
  Bikes = 'BIKES',
  Stations = 'STATIONS',
  Alerts = 'ALERTS',
}

export type Resolver<T = unknown> = (bixi: Bixi) => Promise<T[] | undefined>;

export type SubscribeOptions = {
  ttl?: number;
  client?: Bixi;
  language?: Language;
};

export type RTBike = {
  id: string;
  reserved: boolean;
  disabled: boolean;
  lat: number;
  lon: number;
};

export type Resource = {
  available: number;
  disabled: number;
};

export type RTEbike = {
  id: string;
  charge: number;
};

export type RTStation = {
  id: string;
  bikes: Resource;
  ebikes: Resource;
  docks: Resource;
  isRenting: boolean;
  isReturning: boolean;
  isCharging: boolean;
};
