import { GbfsClient } from './gbfs';
import { Language } from './gbfs/types';
import { RestClient } from './rest';

export * from './gbfs/types';
export * from './rest/types';

export class Bixi {
  readonly gbfs: GbfsClient;
  readonly rest: RestClient;

  constructor(private language: Language) {
    this.gbfs = new GbfsClient(this.language);
    this.rest = new RestClient();
  }
}
