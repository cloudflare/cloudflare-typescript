// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BucketsAPI from './buckets';
import * as SippyAPI from './sippy';
import * as TemporaryCredentialsAPI from './temporary-credentials';
import * as DomainsAPI from './domains/domains';

export class R2 extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
  sippy: SippyAPI.SippyResource = new SippyAPI.SippyResource(this._client);
  temporaryCredentials: TemporaryCredentialsAPI.TemporaryCredentials =
    new TemporaryCredentialsAPI.TemporaryCredentials(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
}

export namespace R2 {
  export import Buckets = BucketsAPI.Buckets;
  export import Bucket = BucketsAPI.Bucket;
  export import BucketListResponse = BucketsAPI.BucketListResponse;
  export import BucketDeleteResponse = BucketsAPI.BucketDeleteResponse;
  export import BucketCreateParams = BucketsAPI.BucketCreateParams;
  export import BucketListParams = BucketsAPI.BucketListParams;
  export import BucketDeleteParams = BucketsAPI.BucketDeleteParams;
  export import BucketGetParams = BucketsAPI.BucketGetParams;
  export import SippyResource = SippyAPI.SippyResource;
  export import Provider = SippyAPI.Provider;
  export import Sippy = SippyAPI.Sippy;
  export import SippyDeleteResponse = SippyAPI.SippyDeleteResponse;
  export import SippyUpdateParams = SippyAPI.SippyUpdateParams;
  export import SippyDeleteParams = SippyAPI.SippyDeleteParams;
  export import SippyGetParams = SippyAPI.SippyGetParams;
  export import TemporaryCredentials = TemporaryCredentialsAPI.TemporaryCredentials;
  export import TemporaryCredential = TemporaryCredentialsAPI.TemporaryCredential;
  export import TemporaryCredentialCreateResponse = TemporaryCredentialsAPI.TemporaryCredentialCreateResponse;
  export import TemporaryCredentialCreateParams = TemporaryCredentialsAPI.TemporaryCredentialCreateParams;
  export import Domains = DomainsAPI.Domains;
}
