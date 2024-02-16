// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DownloadsAPI from 'cloudflare/resources/stream/downloads';

export class Downloads extends APIResource {
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

  /**
   * Creates a download for a video when a video is ready to view.
   */
  streamMP4DownloadsCreateDownloads(
    accountId: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadStreamMP4DownloadsCreateDownloadsResponse> {
    return (
      this._client.post(`/accounts/${accountId}/stream/${identifier}/downloads`, options) as Core.APIPromise<{
        result: DownloadStreamMP4DownloadsCreateDownloadsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the downloads created for a video.
   */
  streamMP4DownloadsListDownloads(
    accountId: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadStreamMP4DownloadsListDownloadsResponse> {
    return (
      this._client.get(`/accounts/${accountId}/stream/${identifier}/downloads`, options) as Core.APIPromise<{
        result: DownloadStreamMP4DownloadsListDownloadsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DownloadDeleteResponse = unknown | string;

export type DownloadStreamMP4DownloadsCreateDownloadsResponse = unknown | string;

export type DownloadStreamMP4DownloadsListDownloadsResponse = unknown | string;

export namespace Downloads {
  export import DownloadDeleteResponse = DownloadsAPI.DownloadDeleteResponse;
  export import DownloadStreamMP4DownloadsCreateDownloadsResponse = DownloadsAPI.DownloadStreamMP4DownloadsCreateDownloadsResponse;
  export import DownloadStreamMP4DownloadsListDownloadsResponse = DownloadsAPI.DownloadStreamMP4DownloadsListDownloadsResponse;
}
