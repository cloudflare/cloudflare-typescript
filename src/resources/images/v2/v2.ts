// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import { DirectUploads } from './direct-uploads';
import * as V2API from './v2';
import * as V1API from '../v1/v1';
import * as DirectUploadsAPI from './direct-uploads';

export class V2 extends APIResource {
  directUploads: DirectUploadsAPI.DirectUploads = new DirectUploadsAPI.DirectUploads(this._client);

  /**
   * List up to 10000 images with one request. Use the optional parameters below to
   * get a specific range of images. Endpoint returns continuation_token if more
   * images are present.
   */
  list(params: V2ListParams, options?: Core.RequestOptions): Core.APIPromise<V2ListResponse> {
    const { account_id, ...query } = params;
    return (this._client.get(`/accounts/${account_id}/images/v2`, { query, ...options }) as Core.APIPromise<{ result: V2ListResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface V2ListResponse {
  /**
   * Continuation token to fetch next page. Passed as a query param when requesting
   * List V2 api endpoint.
   */
  continuation_token?: string | null;

  images?: Array<V1API.Image>;
}

export interface V2ListParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: Continuation token for a next page. List images V2 returns
   * continuation_token
   */
  continuation_token?: string | null;

  /**
   * Query param: Number of items per page.
   */
  per_page?: number;

  /**
   * Query param: Sorting order by upload time.
   */
  sort_order?: 'asc' | 'desc';
}

export namespace V2 {
  export import V2ListResponse = V2API.V2ListResponse;
  export import V2ListParams = V2API.V2ListParams;
  export import DirectUploads = DirectUploadsAPI.DirectUploads;
  export import DirectUploadCreateResponse = DirectUploadsAPI.DirectUploadCreateResponse;
  export import DirectUploadCreateParams = DirectUploadsAPI.DirectUploadCreateParams;
}
