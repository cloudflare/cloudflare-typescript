// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DownloadsAPI from 'cloudflare/resources/stream/downloads';
import * as Shared from 'cloudflare/resources/shared';

export class Downloads extends APIResource {
  /**
   * Creates a download for a video when a video is ready to view.
   */
  create(
    identifier: string,
    params: DownloadCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/stream/${identifier}/downloads`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete the downloads for a video.
   */
  delete(
    identifier: string,
    params: DownloadDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef602dd5f63eab958d53da61434dec08f0> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/stream/${identifier}/downloads`,
        options,
      ) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef602dd5f63eab958d53da61434dec08f0 }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the downloads created for a video.
   */
  get(
    identifier: string,
    params: DownloadGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/stream/${identifier}/downloads`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
  export import DownloadCreateParams = DownloadsAPI.DownloadCreateParams;
  export import DownloadDeleteParams = DownloadsAPI.DownloadDeleteParams;
  export import DownloadGetParams = DownloadsAPI.DownloadGetParams;
}
