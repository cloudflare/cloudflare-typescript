// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Downloads extends APIResource {
  /**
   * Creates a download for a video when a video is ready to view. Use
   * `/downloads/{download_type}` instead for type-specific downloads. Available
   * types are `default` and `audio`.
   *
   * @example
   * ```ts
   * const download = await client.stream.downloads.create(
   *   'ea95132c15732412d22c1476fa83f27a',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  create(
    identifier: string,
    params?: DownloadCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadCreateResponse>;
  create(identifier: string, options?: Core.RequestOptions): Core.APIPromise<DownloadCreateResponse>;
  create(
    identifier: string,
    params: DownloadCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadCreateResponse> {
    if (isRequestOptions(params)) {
      return this.create(identifier, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/stream/${identifier}/downloads`,
        options,
      ) as Core.APIPromise<{ result: DownloadCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete the downloads for a video. Use `/downloads/{download_type}` instead for
   * type-specific downloads. Available types are `default` and `audio`.
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
    params?: DownloadDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadDeleteResponse>;
  delete(identifier: string, options?: Core.RequestOptions): Core.APIPromise<DownloadDeleteResponse>;
  delete(
    identifier: string,
    params: DownloadDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(identifier, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/stream/${identifier}/downloads`,
        options,
      ) as Core.APIPromise<{ result: DownloadDeleteResponse }>
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
    params?: DownloadGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadGetResponse>;
  get(identifier: string, options?: Core.RequestOptions): Core.APIPromise<DownloadGetResponse>;
  get(
    identifier: string,
    params: DownloadGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(identifier, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(`/accounts/${account_id}/stream/${identifier}/downloads`, options) as Core.APIPromise<{
        result: DownloadGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * An object with download type keys. Each key is optional and only present if that
 * download type has been created.
 */
export interface DownloadCreateResponse {
  /**
   * The audio-only download. Only present if this download type has been created.
   */
  audio?: DownloadCreateResponse.Audio;

  /**
   * The default video download. Only present if this download type has been created.
   */
  default?: DownloadCreateResponse.Default;
}

export namespace DownloadCreateResponse {
  /**
   * The audio-only download. Only present if this download type has been created.
   */
  export interface Audio {
    /**
     * Indicates the progress as a percentage between 0 and 100.
     */
    percentComplete: number;

    /**
     * The status of a generated download.
     */
    status: 'ready' | 'inprogress' | 'error';

    /**
     * The URL to access the generated download.
     */
    url?: string;
  }

  /**
   * The default video download. Only present if this download type has been created.
   */
  export interface Default {
    /**
     * Indicates the progress as a percentage between 0 and 100.
     */
    percentComplete: number;

    /**
     * The status of a generated download.
     */
    status: 'ready' | 'inprogress' | 'error';

    /**
     * The URL to access the generated download.
     */
    url?: string;
  }
}

export type DownloadDeleteResponse = string;

/**
 * An object with download type keys. Each key is optional and only present if that
 * download type has been created.
 */
export interface DownloadGetResponse {
  /**
   * The audio-only download. Only present if this download type has been created.
   */
  audio?: DownloadGetResponse.Audio;

  /**
   * The default video download. Only present if this download type has been created.
   */
  default?: DownloadGetResponse.Default;
}

export namespace DownloadGetResponse {
  /**
   * The audio-only download. Only present if this download type has been created.
   */
  export interface Audio {
    /**
     * Indicates the progress as a percentage between 0 and 100.
     */
    percentComplete: number;

    /**
     * The status of a generated download.
     */
    status: 'ready' | 'inprogress' | 'error';

    /**
     * The URL to access the generated download.
     */
    url?: string;
  }

  /**
   * The default video download. Only present if this download type has been created.
   */
  export interface Default {
    /**
     * Indicates the progress as a percentage between 0 and 100.
     */
    percentComplete: number;

    /**
     * The status of a generated download.
     */
    status: 'ready' | 'inprogress' | 'error';

    /**
     * The URL to access the generated download.
     */
    url?: string;
  }
}

export interface DownloadCreateParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export interface DownloadDeleteParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

export interface DownloadGetParams {
  /**
   * Identifier.
   */
  account_id?: string;
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
