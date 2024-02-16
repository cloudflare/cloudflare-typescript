// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BucketsAPI from 'cloudflare/resources/r2/buckets';

export class R2 extends APIResource {
  buckets: BucketsAPI.Buckets = new BucketsAPI.Buckets(this._client);
}

export namespace R2 {
  export import Buckets = BucketsAPI.Buckets;
  export import BucketCreateResponse = BucketsAPI.BucketCreateResponse;
  export import BucketListResponse = BucketsAPI.BucketListResponse;
  export import BucketDeleteResponse = BucketsAPI.BucketDeleteResponse;
  export import BucketGetResponse = BucketsAPI.BucketGetResponse;
  export import BucketCreateParams = BucketsAPI.BucketCreateParams;
  export import BucketListParams = BucketsAPI.BucketListParams;
}
