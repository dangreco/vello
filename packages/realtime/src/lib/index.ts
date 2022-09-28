import { SystemAlert } from '@velo/core';
import { subscribe } from './subscribe';
import { RTBike, RTStation, SubscribeOptions, Topic } from './types';

export * from './types';

export class BixiRT {
  static subscribeBikes(options?: SubscribeOptions) {
    return subscribe<RTBike>(Topic.Bikes, options);
  }

  static subscribeStations(options?: SubscribeOptions) {
    return subscribe<RTStation>(Topic.Stations, options);
  }

  static subscribeAlerts(options?: SubscribeOptions) {
    return subscribe<SystemAlert>(Topic.Alerts, options);
  }
}
