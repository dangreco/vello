import { Axios } from 'axios';
import { createClient } from './client';
import { Bike, BikeLayer, Station, StationLayer } from './types';

export class RestClient {
  private readonly client: Axios;

  constructor() {
    this.client = createClient();
  }

  async getBikeLayer(): Promise<BikeLayer | undefined> {
    const { data } = await this.client.get('/map/v1/mtl/bikes');
    return data;
  }

  async getStationLayer(): Promise<StationLayer | undefined> {
    const { data } = await this.client.get('/map/v1/mtl/stations');
    return data;
  }

  async getBikes(): Promise<Bike[] | undefined> {
    const layer = await this.getBikeLayer();
    return layer?.features.map(({ properties }) => properties);
  }

  async getStations(): Promise<Station[] | undefined> {
    const layer = await this.getStationLayer();
    return layer?.features.map(({ properties }) => properties);
  }

  async getBatteryLevel(bike_id: string): Promise<number | undefined> {
    const stations = await this.getStations();

    if (!stations) return undefined;

    let charge = undefined;

    loop: for (const station of stations) {
      if (!station.ebikes) continue;

      for (const bike of station.ebikes) {
        if (bike.bike_number === bike_id) {
          charge = bike.charge;
          break loop;
        }
      }
    }

    return charge;
  }
}
