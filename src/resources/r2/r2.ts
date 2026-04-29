// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TemporaryCredentialsAPI from './temporary-credentials';
import { BaseTemporaryCredentials, TemporaryCredentials } from './temporary-credentials';
import * as BucketsAPI from './buckets/buckets';
import { BaseBuckets, Buckets } from './buckets/buckets';
import * as SuperSlurperAPI from './super-slurper/super-slurper';
import { BaseSuperSlurper, SuperSlurper } from './super-slurper/super-slurper';

export class BaseR2 extends APIResource {
  static override readonly _key: readonly ['r2'] = Object.freeze(['r2'] as const);
}
export class R2 extends BaseR2 {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
  temporaryCredentials: TemporaryCredentialsAPI.TemporaryCredentials =
    new TemporaryCredentialsAPI.TemporaryCredentials(this._client);
  superSlurper: SuperSlurperAPI.SuperSlurper = new SuperSlurperAPI.SuperSlurper(this._client);
}

R2.Buckets = Buckets;
R2.BaseBuckets = BaseBuckets;
R2.TemporaryCredentials = TemporaryCredentials;
R2.BaseTemporaryCredentials = BaseTemporaryCredentials;
R2.SuperSlurper = SuperSlurper;
R2.BaseSuperSlurper = BaseSuperSlurper;

export declare namespace R2 {
  export { Buckets as Buckets, BaseBuckets as BaseBuckets };

  export {
    TemporaryCredentials as TemporaryCredentials,
    BaseTemporaryCredentials as BaseTemporaryCredentials,
  };

  export { SuperSlurper as SuperSlurper, BaseSuperSlurper as BaseSuperSlurper };
}
