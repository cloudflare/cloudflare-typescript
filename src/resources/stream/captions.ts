// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CaptionsAPI from 'cloudflare/resources/stream/captions';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Captions extends APIResource {
  /**
   * Uploads the caption or subtitle file to the endpoint for a specific BCP47
   * language. One caption or subtitle file per language is allowed.
   */
  update(
    identifier: string,
    language: string,
    params: CaptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/stream/${identifier}/captions/${language}`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: CaptionUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the available captions or subtitles for a specific video.
   */
  list(
    identifier: string,
    params: CaptionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/stream/${identifier}/captions`, options) as Core.APIPromise<{
        result: CaptionListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes the captions or subtitles from a video.
   */
  delete(
    identifier: string,
    language: string,
    params: CaptionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/stream/${identifier}/captions/${language}`,
        options,
      ) as Core.APIPromise<{ result: CaptionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CaptionUpdateResponse = unknown | string;

export type CaptionListResponse = Array<CaptionListResponse.CaptionListResponseItem>;

export namespace CaptionListResponse {
  export interface CaptionListResponseItem {
    /**
     * The language label displayed in the native language to users.
     */
    label?: string;

    /**
     * The language tag in BCP 47 format.
     */
    language?: string;
  }
}

export type CaptionDeleteResponse = unknown | Array<unknown> | string;

export interface CaptionUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The WebVTT file containing the caption or subtitle content.
   */
  file: string;
}

export interface CaptionListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface CaptionDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Captions {
  export import CaptionUpdateResponse = CaptionsAPI.CaptionUpdateResponse;
  export import CaptionListResponse = CaptionsAPI.CaptionListResponse;
  export import CaptionDeleteResponse = CaptionsAPI.CaptionDeleteResponse;
  export import CaptionUpdateParams = CaptionsAPI.CaptionUpdateParams;
  export import CaptionListParams = CaptionsAPI.CaptionListParams;
  export import CaptionDeleteParams = CaptionsAPI.CaptionDeleteParams;
}
