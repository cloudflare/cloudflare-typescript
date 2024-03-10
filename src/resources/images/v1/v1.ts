// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as V1API from 'cloudflare/resources/images/v1/v1';
import * as BlobsAPI from 'cloudflare/resources/images/v1/blobs';
import * as KeysAPI from 'cloudflare/resources/images/v1/keys';
import * as StatsAPI from 'cloudflare/resources/images/v1/stats';
import * as VariantsAPI from 'cloudflare/resources/images/v1/variants';
import { multipartFormRequestOptions } from 'cloudflare/core';
import { V4PagePagination, type V4PagePaginationParams } from 'cloudflare/pagination';

export class V1 extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  stats: StatsAPI.Stats = new StatsAPI.Stats(this._client);
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);
  blobs: BlobsAPI.Blobs = new BlobsAPI.Blobs(this._client);

  /**
   * Upload an image with up to 10 Megabytes using a single HTTP POST
   * (multipart/form-data) request. An image can be uploaded by sending an image file
   * or passing an accessible to an API url.
   */
  create(params: V1CreateParams, options?: Core.RequestOptions): Core.APIPromise<ImagesImage> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/images/v1`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: ImagesImage }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List up to 100 images with one request. Use the optional parameters below to get
   * a specific range of images.
   */
  list(
    params: V1ListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<V1ListResponsesV4PagePagination, V1ListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/images/v1`, V1ListResponsesV4PagePagination, {
      query,
      ...options,
    });
  }

  /**
   * Delete an image on Cloudflare Images. On success, all copies of the image are
   * deleted and purged from cache.
   */
  delete(
    imageId: string,
    params: V1DeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1DeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/images/v1/${imageId}`, options) as Core.APIPromise<{
        result: V1DeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update image access control. On access control change, all copies of the image
   * are purged from cache.
   */
  edit(imageId: string, params: V1EditParams, options?: Core.RequestOptions): Core.APIPromise<ImagesImage> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/images/v1/${imageId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ImagesImage }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch details for a single image.
   */
  get(imageId: string, params: V1GetParams, options?: Core.RequestOptions): Core.APIPromise<ImagesImage> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/images/v1/${imageId}`, options) as Core.APIPromise<{
        result: ImagesImage;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class V1ListResponsesV4PagePagination extends V4PagePagination<V1ListResponse> {}

export interface ImagesImage {
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
    images?: Array<V1API.ImagesImage>;
  }
}

export type V1DeleteResponse = unknown | string;

export interface V1CreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param:
   */
  metadata?: unknown;

  /**
   * Body param: Indicates whether the image requires a signature token for the
   * access.
   */
  requireSignedURLs?: boolean;
}

export interface V1ListParams extends V4PagePaginationParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;
}

export interface V1DeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface V1EditParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: User modifiable key-value store. Can be used for keeping references
   * to another system of record for managing images. No change if not specified.
   */
  metadata?: unknown;

  /**
   * Body param: Indicates whether the image can be accessed using only its UID. If
   * set to `true`, a signed token needs to be generated with a signing key to view
   * the image. Returns a new UID on a change. No change if not specified.
   */
  requireSignedURLs?: boolean;
}

export interface V1GetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export namespace V1 {
  export import ImagesImage = V1API.ImagesImage;
  export import V1ListResponse = V1API.V1ListResponse;
  export import V1DeleteResponse = V1API.V1DeleteResponse;
  export import V1ListResponsesV4PagePagination = V1API.V1ListResponsesV4PagePagination;
  export import V1CreateParams = V1API.V1CreateParams;
  export import V1ListParams = V1API.V1ListParams;
  export import V1DeleteParams = V1API.V1DeleteParams;
  export import V1EditParams = V1API.V1EditParams;
  export import V1GetParams = V1API.V1GetParams;
  export import Keys = KeysAPI.Keys;
  export import ImagesImageKeys = KeysAPI.ImagesImageKeys;
  export import KeyUpdateParams = KeysAPI.KeyUpdateParams;
  export import KeyListParams = KeysAPI.KeyListParams;
  export import KeyDeleteParams = KeysAPI.KeyDeleteParams;
  export import Stats = StatsAPI.Stats;
  export import ImagesImagesStats = StatsAPI.ImagesImagesStats;
  export import StatGetParams = StatsAPI.StatGetParams;
  export import Variants = VariantsAPI.Variants;
  export import ImageVariant = VariantsAPI.ImageVariant;
  export import ImageVariants = VariantsAPI.ImageVariants;
  export import VariantDeleteResponse = VariantsAPI.VariantDeleteResponse;
  export import VariantCreateParams = VariantsAPI.VariantCreateParams;
  export import VariantListParams = VariantsAPI.VariantListParams;
  export import VariantDeleteParams = VariantsAPI.VariantDeleteParams;
  export import VariantEditParams = VariantsAPI.VariantEditParams;
  export import VariantGetParams = VariantsAPI.VariantGetParams;
  export import Blobs = BlobsAPI.Blobs;
  export import BlobGetParams = BlobsAPI.BlobGetParams;
}
