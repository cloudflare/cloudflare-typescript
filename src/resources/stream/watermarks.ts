// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as WatermarksAPI from './watermarks';
import { SinglePage } from '../../pagination';

export class Watermarks extends APIResource {
  /**
   * Creates watermark profiles using a single `HTTP POST multipart/form-data`
   * request.
   */
  create(params: WatermarkCreateParams, options?: Core.RequestOptions): Core.APIPromise<Watermark> {
    const { account_id, ...body } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/stream/watermarks`,
        Core.multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: Watermark }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all watermark profiles for an account.
   */
  list(
    params: WatermarkListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WatermarksSinglePage, Watermark> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/stream/watermarks`,
      WatermarksSinglePage,
      options,
    );
  }

  /**
   * Deletes a watermark profile.
   */
  delete(
    identifier: string,
    params: WatermarkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WatermarkDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/stream/watermarks/${identifier}`,
        options,
      ) as Core.APIPromise<{ result: WatermarkDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves details for a single watermark profile.
   */
  get(
    identifier: string,
    params: WatermarkGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Watermark> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/stream/watermarks/${identifier}`,
        options,
      ) as Core.APIPromise<{ result: Watermark }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class WatermarksSinglePage extends SinglePage<Watermark> {}

export interface Watermark {
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

export type WatermarkDeleteResponse = string;

export interface WatermarkCreateParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: The image file to upload.
   */
  file: string;

  /**
   * Body param: A short description of the watermark profile.
   */
  name?: string;

  /**
   * Body param: The translucency of the image. A value of `0.0` makes the image
   * completely transparent, and `1.0` makes the image completely opaque. Note that
   * if the image is already semi-transparent, setting this to `1.0` will not make
   * the image completely opaque.
   */
  opacity?: number;

  /**
   * Body param: The whitespace between the adjacent edges (determined by position)
   * of the video and the image. `0.0` indicates no padding, and `1.0` indicates a
   * fully padded video width or length, as determined by the algorithm.
   */
  padding?: number;

  /**
   * Body param: The location of the image. Valid positions are: `upperRight`,
   * `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores
   * the `padding` parameter.
   */
  position?: string;

  /**
   * Body param: The size of the image relative to the overall size of the video.
   * This parameter will adapt to horizontal and vertical videos automatically. `0.0`
   * indicates no scaling (use the size of the image as-is), and `1.0 `fills the
   * entire video.
   */
  scale?: number;
}

export interface WatermarkListParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface WatermarkDeleteParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface WatermarkGetParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export namespace Watermarks {
  export import Watermark = WatermarksAPI.Watermark;
  export import WatermarkDeleteResponse = WatermarksAPI.WatermarkDeleteResponse;
  export import WatermarksSinglePage = WatermarksAPI.WatermarksSinglePage;
  export import WatermarkCreateParams = WatermarksAPI.WatermarkCreateParams;
  export import WatermarkListParams = WatermarksAPI.WatermarkListParams;
  export import WatermarkDeleteParams = WatermarksAPI.WatermarkDeleteParams;
  export import WatermarkGetParams = WatermarksAPI.WatermarkGetParams;
}
