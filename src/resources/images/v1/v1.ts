// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BlobsAPI from './blobs';
import { BaseBlobs, Blobs } from './blobs';
import * as KeysAPI from './keys';
import { BaseKeys, Keys } from './keys';
import * as StatsAPI from './stats';
import { BaseStats, Stats } from './stats';
import * as VariantsAPI from './variants';
import { BaseVariants, Variants } from './variants';

export class BaseV1 extends APIResource {
  static override readonly _key: readonly ['images', 'v1'] = Object.freeze(['images', 'v1'] as const);
}
export class V1 extends BaseV1 {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);
  blobs: BlobsAPI.Blobs = new BlobsAPI.Blobs(this._client);
}

V1.Keys = Keys;
V1.BaseKeys = BaseKeys;
V1.Stats = Stats;
V1.BaseStats = BaseStats;
V1.Variants = Variants;
V1.BaseVariants = BaseVariants;
V1.Blobs = Blobs;
V1.BaseBlobs = BaseBlobs;

export declare namespace V1 {
  export { Keys as Keys, BaseKeys as BaseKeys };

  export { Stats as Stats, BaseStats as BaseStats };

  export { Variants as Variants, BaseVariants as BaseVariants };

  export { Blobs as Blobs, BaseBlobs as BaseBlobs };
}
