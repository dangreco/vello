import { Resolver, RTBike, RTStation, Topic } from './types';

export const Resolvers: Record<Topic, Resolver> = {
  [Topic.Bikes]: async (bixi): Promise<RTBike[] | undefined> => {
    const layer = await bixi.rest.getBikeLayer();

    if (!layer) return undefined;

    return layer.features.map((feature) => {
      const bike = feature.properties;
      const [lon, lat] = feature.geometry.coordinates;

      return {
        id: bike.bike_id,
        disabled: bike.disabled,
        reserved: bike.reserved,
        lat,
        lon,
      };
    });
  },
  [Topic.Stations]: async (bixi): Promise<RTStation[] | undefined> => {
    const status = await bixi.gbfs.getStationStatus();

    if (!status) return undefined;

    return status.data.stations.map((station) => ({
      id: station.station_id,
      bikes: {
        available: station.num_bikes_available,
        disabled: station.num_bikes_disabled,
      },
      ebikes: {
        available: station.num_ebikes_available,
        disabled: -1,
      },
      docks: {
        available: station.num_docks_available,
        disabled: station.num_docks_disabled,
      },
      isRenting: station.is_renting === 1,
      isReturning: station.is_returning === 1,
      isCharging: station.is_charging,
    }));
  },
  [Topic.Alerts]: async (bixi) => {
    const data = await bixi.gbfs.getSystemAlerts();
    return data?.data.alerts;
  },
};
