// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as V1sAPI from 'cloudflare/resources/images/v1s/v1s';
import * as BlobsAPI from 'cloudflare/resources/images/v1s/blobs';
import * as KeysAPI from 'cloudflare/resources/images/v1s/keys';
import * as StatsAPI from 'cloudflare/resources/images/v1s/stats';
import * as VariantsAPI from 'cloudflare/resources/images/v1s/variants';
import { multipartFormRequestOptions } from 'cloudflare/core';
import { V4PagePagination, type V4PagePaginationParams } from 'cloudflare/pagination';

export class V1s extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);
  blobs: BlobsAPI.Blobs = new BlobsAPI.Blobs(this._client);

  /**
   * Upload an image with up to 10 Megabytes using a single HTTP POST
   * (multipart/form-data) request. An image can be uploaded by sending an image file
   * or passing an accessible to an API url.
   */
  create(
    accountId: string,
    body: V1CreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1CreateResponse> {
    return (
      this._client.post(
        `/accounts/${accountId}/images/v1`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: V1CreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update image access control. On access control change, all copies of the image
   * are purged from cache.
   */
  update(
    accountId: string,
    imageId: string,
    body: V1UpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1UpdateResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/images/v1/${imageId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: V1UpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List up to 100 images with one request. Use the optional parameters below to get
   * a specific range of images.
   */
  list(
    accountId: string,
    query?: V1ListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<V1ListResponsesV4PagePagination, V1ListResponse>;
  list(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<V1ListResponsesV4PagePagination, V1ListResponse>;
  list(
    accountId: string,
    query: V1ListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<V1ListResponsesV4PagePagination, V1ListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return this._client.getAPIList(`/accounts/${accountId}/images/v1`, V1ListResponsesV4PagePagination, {
      query,
      ...options,
    });
  }

  /**
   * Delete an image on Cloudflare Images. On success, all copies of the image are
   * deleted and purged from cache.
   */
  delete(
    accountId: string,
    imageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1DeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountId}/images/v1/${imageId}`, options) as Core.APIPromise<{
        result: V1DeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch details for a single image.
   */
  get(accountId: string, imageId: string, options?: Core.RequestOptions): Core.APIPromise<V1GetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/images/v1/${imageId}`, options) as Core.APIPromise<{
        result: V1GetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class V1ListResponsesV4PagePagination extends V4PagePagination<V1ListResponse> {}

export interface V1CreateResponse {
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

export interface V1UpdateResponse {
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

export interface V1ListResponse {
  errors: Array<V1ListResponse.Error>;

  messages: Array<V1ListResponse.Message>;

  result: V1ListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export namespace V1ListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    images?: Array<Result.Image>;
  }

  export namespace Result {
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
}

export type V1DeleteResponse = unknown | string;

export interface V1GetResponse {
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

export type V1CreateParams = V1CreateParams.ImagesImageUploadViaFile | V1CreateParams.ImagesImageUploadViaURL;

export namespace V1CreateParams {
  export interface ImagesImageUploadViaFile {
    /**
     * An image binary data.
     */
    file: unknown;
  }

  export interface ImagesImageUploadViaURL {
    /**
     * A URL to fetch an image from origin.
     */
    url: string;
  }
}

export interface V1UpdateParams {
  /**
   * User modifiable key-value store. Can be used for keeping references to another
   * system of record for managing images. No change if not specified.
   */
  metadata?: unknown;

  /**
   * Indicates whether the image can be accessed using only its UID. If set to
   * `true`, a signed token needs to be generated with a signing key to view the
   * image. Returns a new UID on a change. No change if not specified.
   */
  requireSignedURLs?: boolean;
}

export interface V1ListParams extends V4PagePaginationParams {}

export namespace V1s {
  export import V1CreateResponse = V1sAPI.V1CreateResponse;
  export import V1UpdateResponse = V1sAPI.V1UpdateResponse;
  export import V1ListResponse = V1sAPI.V1ListResponse;
  export import V1DeleteResponse = V1sAPI.V1DeleteResponse;
  export import V1GetResponse = V1sAPI.V1GetResponse;
  export import V1ListResponsesV4PagePagination = V1sAPI.V1ListResponsesV4PagePagination;
  export import V1CreateParams = V1sAPI.V1CreateParams;
  export import V1UpdateParams = V1sAPI.V1UpdateParams;
  export import V1ListParams = V1sAPI.V1ListParams;
  export import Keys = KeysAPI.Keys;
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import Stats = StatsAPI.Stats;
  export import StatGetResponse = StatsAPI.StatGetResponse;
  export import Variants = VariantsAPI.Variants;
  export import VariantCreateResponse = VariantsAPI.VariantCreateResponse;
  export import VariantUpdateResponse = VariantsAPI.VariantUpdateResponse;
  export import VariantListResponse = VariantsAPI.VariantListResponse;
  export import VariantDeleteResponse = VariantsAPI.VariantDeleteResponse;
  export import VariantGetResponse = VariantsAPI.VariantGetResponse;
  export import VariantCreateParams = VariantsAPI.VariantCreateParams;
  export import VariantUpdateParams = VariantsAPI.VariantUpdateParams;
  export import Blobs = BlobsAPI.Blobs;
}
