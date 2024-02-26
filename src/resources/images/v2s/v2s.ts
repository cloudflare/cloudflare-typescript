// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as V2sAPI from 'cloudflare/resources/images/v2s/v2s';
import * as DirectUploadsAPI from 'cloudflare/resources/images/v2s/direct-uploads';

export class V2s extends APIResource {
  directUploads: DirectUploadsAPI.DirectUploads = new DirectUploadsAPI.DirectUploads(this._client);

  /**
   * List up to 10000 images with one request. Use the optional parameters below to
   * get a specific range of images. Endpoint returns continuation_token if more
   * images are present.
   */
  list(
    accountId: string,
    query?: V2ListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V2ListResponse>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<V2ListResponse>;
  list(
    accountId: string,
    query: V2ListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<V2ListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/images/v2`, { query, ...options }) as Core.APIPromise<{
        result: V2ListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface V2ListResponse {
  /**
   * Continuation token to fetch next page. Passed as a query param when requesting
   * List V2 api endpoint.
   */
  continuation_token?: string | null;

  images?: Array<V2ListResponse.Image>;
}

export namespace V2ListResponse {
  export interface Image {
    /**
     * Image unique identifier.
     */
    id?: string;

    /**
     * Image file name.
     */
    filename?: string;

    /**
     * User modifiable key-value store. Can be used for keeping references to another
     * system of record for managing images. Metadata must not exceed 1024 bytes.
     */
    meta?: unknown;

    /**
     * Indicates whether the image can be a accessed only using it's UID. If set to
     * true, a signed token needs to be generated with a signing key to view the image.
     */
    requireSignedURLs?: boolean;

    /**
     * When the media item was uploaded.
     */
    uploaded?: string;

    /**
     * Object specifying available variants for an image.
     */
    variants?: Array<string | string | string>;
  }
}

export interface V2ListParams {
  /**
   * Continuation token for a next page. List images V2 returns continuation_token
   */
  continuation_token?: string | null;

  /**
   * Number of items per page.
   */
  per_page?: number;

  /**
   * Sorting order by upload time.
   */
  sort_order?: 'asc' | 'desc';
}

export namespace V2s {
  export import V2ListResponse = V2sAPI.V2ListResponse;
  export import V2ListParams = V2sAPI.V2ListParams;
  export import DirectUploads = DirectUploadsAPI.DirectUploads;
  export import DirectUploadCreateResponse = DirectUploadsAPI.DirectUploadCreateResponse;
  export import DirectUploadCreateParams = DirectUploadsAPI.DirectUploadCreateParams;
}
