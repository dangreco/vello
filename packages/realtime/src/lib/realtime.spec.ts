import { filter } from 'rxjs';
import { BixiRT } from './index';

describe('subscribe(...)', () => {
  it('can subscribe bikes', () => {
    const { subject, unsubscribe } = BixiRT.subscribeBikes();

    expect(subject).toBeDefined();
    expect(unsubscribe).toBeDefined();
  });

  it('can subscribe stations', () => {
    const { subject, unsubscribe } = BixiRT.subscribeStations();

    expect(subject).toBeDefined();
    expect(unsubscribe).toBeDefined();
  });

  it('can subscribe alerts', () => {
    const { subject, unsubscribe } = BixiRT.subscribeAlerts();

    expect(subject).toBeDefined();
    expect(unsubscribe).toBeDefined();
  });
});

describe('subscriptions', () => {
  it('can retrieve bike data', (done) => {
    let count = 0;

    BixiRT.subscribeBikes().subject.subscribe((bike) => {
      if (count === 10) done();

      count += 1;

      expect(bike.id).toBeTruthy();
      expect(bike.lat).toBeTruthy();
      expect(bike.lon).toBeTruthy();
    });
  });
  it('can retrieve station data', (done) => {
    let count = 0;

    BixiRT.subscribeStations().subject.subscribe((station) => {
      if (count === 10) done();

      count += 1;

      expect(station.id).toBeTruthy();
      expect(station.bikes.available).toBeGreaterThanOrEqual(0);
    });
  });
  it('can filter station by id', (done) => {
    let count = 0;

    BixiRT.subscribeStations({ ttl: 100 })
      .subject.pipe(filter((station) => station.id === '67'))
      .subscribe((station) => {
        if (count === 3) done();
        count += 1;
        expect(station.id === '67');
      });
  });
});
