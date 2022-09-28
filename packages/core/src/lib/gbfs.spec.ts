import { GbfsClient } from './gbfs';

describe('gbfs', () => {
  let gbfs: GbfsClient;

  beforeAll(() => {
    gbfs = new GbfsClient('en');
  });

  it('can get system alerts', async () => {
    const data = await gbfs.getSystemAlerts();

    expect(data?.data?.alerts).toBeDefined();
  });
});
