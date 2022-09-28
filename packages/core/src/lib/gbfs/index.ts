import { Axios } from 'axios';
import { createClient } from './client';
import {
  Feed,
  GbfsData,
  Language,
  StationInformationData,
  StationStatusData,
  SystemAlertsData,
  SystemInformationData,
} from './types';

export class GbfsClient {
  private readonly client: Axios;

  constructor(private language: Language) {
    this.client = createClient(this.language);
  }

  private async getFeed<T>(feed: Feed): Promise<GbfsData<T> | undefined> {
    const { status, data } = await this.client.get<GbfsData<T>>(
      `/${feed}.json`
    );

    return status === 200 && data ? data : undefined;
  }

  async getSystemAlerts() {
    return this.getFeed<SystemAlertsData>(Feed.SystemAlerts);
  }

  async getSystemInformation() {
    return this.getFeed<SystemInformationData>(Feed.SystemInformation);
  }

  async getStationStatus() {
    return this.getFeed<StationStatusData>(Feed.StationStatus);
  }

  async getStationInformation() {
    return this.getFeed<StationInformationData>(Feed.StationInformation);
  }
}
