// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WatermarksAPI from 'cloudflare/resources/stream/watermarks';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Watermarks extends APIResource {
  /**
   * Creates watermark profiles using a single `HTTP POST multipart/form-data`
   * request.
   */
  create(
    accountId: string,
    body: WatermarkCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WatermarkCreateResponse> {
    return (
      this._client.post(
        `/accounts/${accountId}/stream/watermarks`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: WatermarkCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all watermark profiles for an account.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<WatermarkListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/stream/watermarks`, options) as Core.APIPromise<{
        result: WatermarkListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a watermark profile.
   */
  delete(
    accountId: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WatermarkDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/stream/watermarks/${identifier}`,
        options,
      ) as Core.APIPromise<{ result: WatermarkDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves details for a single watermark profile.
   */
  get(
    accountId: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WatermarkGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/stream/watermarks/${identifier}`, options) as Core.APIPromise<{
        result: WatermarkGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type WatermarkCreateResponse = unknown | string;

export type WatermarkListResponse = Array<WatermarkListResponse.WatermarkListResponseItem>;

export namespace WatermarkListResponse {
  export interface WatermarkListResponseItem {
    /**
     * The date and a time a watermark profile was created.
     */
    created?: string;

    /**
     * The source URL for a downloaded image. If the watermark profile was created via
     * direct upload, this field is null.
     */
    downloadedFrom?: string;

    /**
     * The height of the image in pixels.
     */
    height?: number;

    /**
     * A short description of the watermark profile.
     */
    name?: string;

    /**
     * The translucency of the image. A value of `0.0` makes the image completely
     * transparent, and `1.0` makes the image completely opaque. Note that if the image
     * is already semi-transparent, setting this to `1.0` will not make the image
     * completely opaque.
     */
    opacity?: number;

    /**
     * The whitespace between the adjacent edges (determined by position) of the video
     * and the image. `0.0` indicates no padding, and `1.0` indicates a fully padded
     * video width or length, as determined by the algorithm.
     */
    padding?: number;

    /**
     * The location of the image. Valid positions are: `upperRight`, `upperLeft`,
     * `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the
     * `padding` parameter.
     */
    position?: string;

    /**
     * The size of the image relative to the overall size of the video. This parameter
     * will adapt to horizontal and vertical videos automatically. `0.0` indicates no
     * scaling (use the size of the image as-is), and `1.0 `fills the entire video.
     */
    scale?: number;

    /**
     * The size of the image in bytes.
     */
    size?: number;

    /**
     * The unique identifier for a watermark profile.
     */
    uid?: string;

    /**
     * The width of the image in pixels.
     */
    width?: number;
  }
}

export type WatermarkDeleteResponse = unknown | string;

export type WatermarkGetResponse = unknown | string;

export interface WatermarkCreateParams {
  /**
   * The image file to upload.
   */
  file: string;

  /**
   * A short description of the watermark profile.
   */
  name?: string;

  /**
   * The translucency of the image. A value of `0.0` makes the image completely
   * transparent, and `1.0` makes the image completely opaque. Note that if the image
   * is already semi-transparent, setting this to `1.0` will not make the image
   * completely opaque.
   */
  opacity?: number;

  /**
   * The whitespace between the adjacent edges (determined by position) of the video
   * and the image. `0.0` indicates no padding, and `1.0` indicates a fully padded
   * video width or length, as determined by the algorithm.
   */
  padding?: number;

  /**
   * The location of the image. Valid positions are: `upperRight`, `upperLeft`,
   * `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the
   * `padding` parameter.
   */
  position?: string;

  /**
   * The size of the image relative to the overall size of the video. This parameter
   * will adapt to horizontal and vertical videos automatically. `0.0` indicates no
   * scaling (use the size of the image as-is), and `1.0 `fills the entire video.
   */
  scale?: number;
}

export namespace Watermarks {
  export import WatermarkCreateResponse = WatermarksAPI.WatermarkCreateResponse;
  export import WatermarkListResponse = WatermarksAPI.WatermarkListResponse;
  export import WatermarkDeleteResponse = WatermarksAPI.WatermarkDeleteResponse;
  export import WatermarkGetResponse = WatermarksAPI.WatermarkGetResponse;
  export import WatermarkCreateParams = WatermarksAPI.WatermarkCreateParams;
}
