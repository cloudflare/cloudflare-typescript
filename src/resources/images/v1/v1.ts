// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BlobsAPI from './blobs';
import { BlobGetParams, Blobs } from './blobs';
import * as KeysAPI from './keys';
import {
  Key,
  KeyDeleteParams,
  KeyDeleteResponse,
  KeyListParams,
  KeyListResponse,
  KeyUpdateParams,
  KeyUpdateResponse,
  Keys,
} from './keys';
import * as StatsAPI from './stats';
import { Stat, StatGetParams, Stats } from './stats';
import * as VariantsAPI from './variants';
import {
  Variant,
  VariantCreateParams,
  VariantCreateResponse,
  VariantDeleteParams,
  VariantDeleteResponse,
  VariantEditParams,
  VariantEditResponse,
  VariantGetParams,
  VariantGetResponse,
  VariantListParams,
  Variants,
} from './variants';
import { V4PagePagination, type V4PagePaginationParams } from '../../../pagination';

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
  create(params: V1CreateParams, options?: Core.RequestOptions): Core.APIPromise<Image> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/images/v1`,
        Core.multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: Image }>
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
  edit(imageId: string, params: V1EditParams, options?: Core.RequestOptions): Core.APIPromise<Image> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/images/v1/${imageId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Image }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch details for a single image.
   */
  get(imageId: string, params: V1GetParams, options?: Core.RequestOptions): Core.APIPromise<Image> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/images/v1/${imageId}`, options) as Core.APIPromise<{
        result: Image;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class V1ListResponsesV4PagePagination extends V4PagePagination<V1ListResponse> {}

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
  variants?: Array<string>;
}

export interface V1ListResponse {
  images?: Array<Image>;
}

export type V1DeleteResponse = unknown | string;

export interface V1CreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: An image binary data. Only needed when type is uploading a file.
   */
  file?: unknown;

  /**
   * Body param: User modifiable key-value store. Can use used for keeping references
   * to another system of record for managing images.
   */
  metadata?: unknown;

  /**
   * Body param: Indicates whether the image requires a signature token for the
   * access.
   */
  requireSignedURLs?: boolean;

  /**
   * Body param: A URL to fetch an image from origin. Only needed when type is
   * uploading from a URL.
   */
  url?: string;
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

V1.V1ListResponsesV4PagePagination = V1ListResponsesV4PagePagination;
V1.Keys = Keys;
V1.Stats = Stats;
V1.Variants = Variants;
V1.Blobs = Blobs;

export declare namespace V1 {
  export {
    type Image as Image,
    type V1ListResponse as V1ListResponse,
    type V1DeleteResponse as V1DeleteResponse,
    V1ListResponsesV4PagePagination as V1ListResponsesV4PagePagination,
    type V1CreateParams as V1CreateParams,
    type V1ListParams as V1ListParams,
    type V1DeleteParams as V1DeleteParams,
    type V1EditParams as V1EditParams,
    type V1GetParams as V1GetParams,
  };

  export {
    Keys as Keys,
    type Key as Key,
    type KeyUpdateResponse as KeyUpdateResponse,
    type KeyListResponse as KeyListResponse,
    type KeyDeleteResponse as KeyDeleteResponse,
    type KeyUpdateParams as KeyUpdateParams,
    type KeyListParams as KeyListParams,
    type KeyDeleteParams as KeyDeleteParams,
  };

  export { Stats as Stats, type Stat as Stat, type StatGetParams as StatGetParams };

  export {
    Variants as Variants,
    type Variant as Variant,
    type VariantCreateResponse as VariantCreateResponse,
    type VariantDeleteResponse as VariantDeleteResponse,
    type VariantEditResponse as VariantEditResponse,
    type VariantGetResponse as VariantGetResponse,
    type VariantCreateParams as VariantCreateParams,
    type VariantListParams as VariantListParams,
    type VariantDeleteParams as VariantDeleteParams,
    type VariantEditParams as VariantEditParams,
    type VariantGetParams as VariantGetParams,
  };

  export { Blobs as Blobs, type BlobGetParams as BlobGetParams };
}
