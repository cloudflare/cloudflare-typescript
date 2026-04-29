// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BlobsAPI from './blobs';
import { Blobs } from './blobs';
import * as KeysAPI from './keys';
import { Keys } from './keys';
import * as StatsAPI from './stats';
import { Stats } from './stats';
import * as VariantsAPI from './variants';
import { Variants } from './variants';

export class V1 extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);
  blobs: BlobsAPI.Blobs = new BlobsAPI.Blobs(this._client);
}

V1.Keys = Keys;
V1.Stats = Stats;
V1.Variants = Variants;
V1.Blobs = Blobs;

export declare namespace V1 {
  export { Keys as Keys };

  export { Stats as Stats };

  export { Variants as Variants };

  export { Blobs as Blobs };
}
