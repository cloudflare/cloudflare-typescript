// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as DownloadsAPI from './downloads';

export class Downloads extends APIResource {
  /**
   * Creates a download for a video when a video is ready to view.
   */
  create(identifier: string, params: DownloadCreateParams, options?: Core.RequestOptions): Core.APIPromise<DownloadCreateResponse> {
    const { account_id, body } = params;
    return (this._client.post(`/accounts/${account_id}/stream/${identifier}/downloads`, { body: body, ...options }) as Core.APIPromise<{ result: DownloadCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete the downloads for a video.
   */
  delete(identifier: string, params: DownloadDeleteParams, options?: Core.RequestOptions): Core.APIPromise<DownloadDeleteResponse> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/stream/${identifier}/downloads`, options) as Core.APIPromise<{ result: DownloadDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the downloads created for a video.
   */
  get(identifier: string, params: DownloadGetParams, options?: Core.RequestOptions): Core.APIPromise<DownloadGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/stream/${identifier}/downloads`, options) as Core.APIPromise<{ result: DownloadGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export type DownloadCreateResponse = unknown

export type DownloadDeleteResponse = string

export type DownloadGetResponse = unknown

export interface DownloadCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface DownloadDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface DownloadGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Downloads {
  export import DownloadCreateResponse = DownloadsAPI.DownloadCreateResponse;
  export import DownloadDeleteResponse = DownloadsAPI.DownloadDeleteResponse;
  export import DownloadGetResponse = DownloadsAPI.DownloadGetResponse;
  export import DownloadCreateParams = DownloadsAPI.DownloadCreateParams;
  export import DownloadDeleteParams = DownloadsAPI.DownloadDeleteParams;
  export import DownloadGetParams = DownloadsAPI.DownloadGetParams;
}
