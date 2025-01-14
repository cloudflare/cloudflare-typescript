// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TemporaryCredentialsAPI from './temporary-credentials';
import {
  TemporaryCredential,
  TemporaryCredentialCreateParams,
  TemporaryCredentialCreateResponse,
  TemporaryCredentials,
} from './temporary-credentials';
import * as BucketsAPI from './buckets/buckets';
import {
  Bucket,
  BucketCreateParams,
  BucketDeleteParams,
  BucketDeleteResponse,
  BucketGetParams,
  BucketListParams,
  BucketListResponse,
  Buckets,
} from './buckets/buckets';

export class R2 extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
  temporaryCredentials: TemporaryCredentialsAPI.TemporaryCredentials =
    new TemporaryCredentialsAPI.TemporaryCredentials(this._client);
}

R2.Buckets = Buckets;
R2.TemporaryCredentials = TemporaryCredentials;

export declare namespace R2 {
  export {
    Buckets as Buckets,
    type Bucket as Bucket,
    type BucketListResponse as BucketListResponse,
    type BucketDeleteResponse as BucketDeleteResponse,
    type BucketCreateParams as BucketCreateParams,
    type BucketListParams as BucketListParams,
    type BucketDeleteParams as BucketDeleteParams,
    type BucketGetParams as BucketGetParams,
  };

  export {
    TemporaryCredentials as TemporaryCredentials,
    type TemporaryCredential as TemporaryCredential,
    type TemporaryCredentialCreateResponse as TemporaryCredentialCreateResponse,
    type TemporaryCredentialCreateParams as TemporaryCredentialCreateParams,
  };
}
