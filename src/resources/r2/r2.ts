// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TemporaryCredentialsAPI from './temporary-credentials';
import { TemporaryCredentials } from './temporary-credentials';
import * as BucketsAPI from './buckets/buckets';
import { Buckets } from './buckets/buckets';
import * as SuperSlurperAPI from './super-slurper/super-slurper';
import { SuperSlurper } from './super-slurper/super-slurper';

export class R2 extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
  temporaryCredentials: TemporaryCredentialsAPI.TemporaryCredentials =
    new TemporaryCredentialsAPI.TemporaryCredentials(this._client);
  superSlurper: SuperSlurperAPI.SuperSlurper = new SuperSlurperAPI.SuperSlurper(this._client);
}

R2.Buckets = Buckets;
R2.TemporaryCredentials = TemporaryCredentials;
R2.SuperSlurper = SuperSlurper;

export declare namespace R2 {
  export { Buckets as Buckets };

  export { TemporaryCredentials as TemporaryCredentials };

  export { SuperSlurper as SuperSlurper };
}
