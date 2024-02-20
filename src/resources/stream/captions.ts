// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CaptionsAPI from 'cloudflare/resources/stream/captions';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Captions extends APIResource {
  /**
   * Lists the available captions or subtitles for a specific video.
   */
  list(
    accountId: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/stream/${identifier}/captions`, options) as Core.APIPromise<{
        result: CaptionListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Removes the captions or subtitles from a video.
   */
  delete(
    accountId: string,
    identifier: string,
    language: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/stream/${identifier}/captions/${language}`,
        options,
      ) as Core.APIPromise<{ result: CaptionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Uploads the caption or subtitle file to the endpoint for a specific BCP47
   * language. One caption or subtitle file per language is allowed.
   */
  replace(
    accountId: string,
    identifier: string,
    language: string,
    body: CaptionReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionReplaceResponse> {
    return (
      this._client.put(
        `/accounts/${accountId}/stream/${identifier}/captions/${language}`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: CaptionReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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

export type CaptionReplaceResponse = unknown | string;

export interface CaptionReplaceParams {
  /**
   * The WebVTT file containing the caption or subtitle content.
   */
  file: string;
}

export namespace Captions {
  export import CaptionListResponse = CaptionsAPI.CaptionListResponse;
  export import CaptionDeleteResponse = CaptionsAPI.CaptionDeleteResponse;
  export import CaptionReplaceResponse = CaptionsAPI.CaptionReplaceResponse;
  export import CaptionReplaceParams = CaptionsAPI.CaptionReplaceParams;
}
