import { RestClient } from './rest';

describe('gbfs', () => {
  let rest: RestClient;

  beforeAll(() => {
    rest = new RestClient();
  });

  it('can get bike layer', async () => {
    const data = await rest.getBikeLayer();
    expect(data).toBeDefined();
  });

  it('can get station layer', async () => {
    const data = await rest.getStationLayer();
    expect(data).toBeDefined();
  });

  it('can get bike', async () => {
    const data = await rest.getBikes();
    expect(data).toBeDefined();
    expect(data?.length).toBeGreaterThan(0);
  });

  it('can get stations', async () => {
    const data = await rest.getStations();
    expect(data).toBeDefined();
    expect(data?.length).toBeGreaterThan(0);
  });

  it('can get battery level', async () => {
    const battery = await rest.getBatteryLevel('E20143');
    expect(battery).toBeDefined();
    expect(battery).toBeGreaterThanOrEqual(0);
  });
});
