// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  ): Core.APIPromise<Caption> {
    const { account_id, ...body } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/stream/${identifier}/captions/${language}`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: Caption }>
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
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/stream/${identifier}/captions/${language}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: CaptionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the available captions or subtitles for a specific video.
   */
  get(
    identifier: string,
    params: CaptionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CaptionGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/stream/${identifier}/captions`, options) as Core.APIPromise<{
        result: CaptionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Caption {
  /**
   * The language label displayed in the native language to users.
   */
  label?: string;

  /**
   * The language tag in BCP 47 format.
   */
  language?: string;
}

export type CaptionDeleteResponse = string;

export type CaptionGetResponse = Array<Caption>;

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

export interface CaptionDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface CaptionGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Captions {
  export import Caption = CaptionsAPI.Caption;
  export import CaptionDeleteResponse = CaptionsAPI.CaptionDeleteResponse;
  export import CaptionGetResponse = CaptionsAPI.CaptionGetResponse;
  export import CaptionUpdateParams = CaptionsAPI.CaptionUpdateParams;
  export import CaptionDeleteParams = CaptionsAPI.CaptionDeleteParams;
  export import CaptionGetParams = CaptionsAPI.CaptionGetParams;
}
