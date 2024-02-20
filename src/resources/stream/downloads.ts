// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DownloadsAPI from 'cloudflare/resources/stream/downloads';

export class Downloads extends APIResource {
  /**
   * Creates a download for a video when a video is ready to view.
   */
  create(
    accountId: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/stream/${identifier}/downloads`, options) as Core.APIPromise<{
        result: DownloadCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the downloads created for a video.
   */
  list(
    accountId: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/stream/${identifier}/downloads`, options) as Core.APIPromise<{
        result: DownloadListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete the downloads for a video.
   */
  delete(
    accountId: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/stream/${identifier}/downloads`,
        options,
      ) as Core.APIPromise<{ result: DownloadDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DownloadCreateResponse = unknown | string;

export type DownloadListResponse = unknown | string;

export type DownloadDeleteResponse = unknown | string;

export namespace Downloads {
  export import DownloadCreateResponse = DownloadsAPI.DownloadCreateResponse;
  export import DownloadListResponse = DownloadsAPI.DownloadListResponse;
  export import DownloadDeleteResponse = DownloadsAPI.DownloadDeleteResponse;
}
