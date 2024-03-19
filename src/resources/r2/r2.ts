// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as BucketsAPI from 'cloudflare/resources/r2/buckets';
import * as SippyAPI from 'cloudflare/resources/r2/sippy';

export class R2 extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
  sippy: SippyAPI.Sippy = new SippyAPI.Sippy(this._client);
}

export namespace R2 {
  export import Buckets = BucketsAPI.Buckets;
  export import R2Bucket = BucketsAPI.R2Bucket;
  export import BucketDeleteResponse = BucketsAPI.BucketDeleteResponse;
  export import R2BucketsCursorPagination = BucketsAPI.R2BucketsCursorPagination;
  export import BucketCreateParams = BucketsAPI.BucketCreateParams;
  export import BucketListParams = BucketsAPI.BucketListParams;
  export import BucketDeleteParams = BucketsAPI.BucketDeleteParams;
  export import BucketGetParams = BucketsAPI.BucketGetParams;
  export import Sippy = SippyAPI.Sippy;
  export import R2Sippy = SippyAPI.R2Sippy;
  export import SippyDeleteResponse = SippyAPI.SippyDeleteResponse;
  export import SippyUpdateParams = SippyAPI.SippyUpdateParams;
  export import SippyDeleteParams = SippyAPI.SippyDeleteParams;
  export import SippyGetParams = SippyAPI.SippyGetParams;
}
