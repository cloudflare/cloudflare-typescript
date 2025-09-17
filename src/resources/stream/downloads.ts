// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Downloads extends APIResource {
  /**
   * Creates a download for a video when a video is ready to view.
   *
   * @example
   * ```ts
   * const download = await client.stream.downloads.create(
   *   'ea95132c15732412d22c1476fa83f27a',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: {},
   *   },
   * );
   * ```
   */
  create(
    identifier: string,
    params: DownloadCreateParams,
    options?: RequestOptions,
  ): APIPromise<DownloadCreateResponse> {
    const { account_id, body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/stream/${identifier}/downloads`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: DownloadCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete the downloads for a video.
   *
   * @example
   * ```ts
   * const download = await client.stream.downloads.delete(
   *   'ea95132c15732412d22c1476fa83f27a',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    identifier: string,
    params: DownloadDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DownloadDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/stream/${identifier}/downloads`,
        options,
      ) as APIPromise<{ result: DownloadDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the downloads created for a video.
   *
   * @example
   * ```ts
   * const download = await client.stream.downloads.get(
   *   'ea95132c15732412d22c1476fa83f27a',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    identifier: string,
    params: DownloadGetParams,
    options?: RequestOptions,
  ): APIPromise<DownloadGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/stream/${identifier}/downloads`, options) as APIPromise<{
        result: DownloadGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DownloadCreateResponse = unknown;

export type DownloadDeleteResponse = string;

export type DownloadGetResponse = unknown;

export interface DownloadCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface DownloadDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface DownloadGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Downloads {
  export {
    type DownloadCreateResponse as DownloadCreateResponse,
    type DownloadDeleteResponse as DownloadDeleteResponse,
    type DownloadGetResponse as DownloadGetResponse,
    type DownloadCreateParams as DownloadCreateParams,
    type DownloadDeleteParams as DownloadDeleteParams,
    type DownloadGetParams as DownloadGetParams,
  };
}
