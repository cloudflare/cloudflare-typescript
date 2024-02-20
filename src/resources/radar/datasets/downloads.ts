// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DownloadsAPI from 'cloudflare/resources/radar/datasets/downloads';

export class Downloads extends APIResource {
  /**
   * Get a url to download a single dataset.
   */
  create(
    params: DownloadCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadCreateResponse> {
    const { format, ...body } = params;
    return (
      this._client.post('/radar/datasets/download', {
        query: { format },
        body,
        ...options,
      }) as Core.APIPromise<{ result: DownloadCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DownloadCreateResponse {
  dataset: DownloadCreateResponse.Dataset;
}

export namespace DownloadCreateResponse {
  export interface Dataset {
    url: string;
  }
}

export interface DownloadCreateParams {
  /**
   * Body param:
   */
  datasetId: number;

  /**
   * Query param: Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export namespace Downloads {
  export import DownloadCreateResponse = DownloadsAPI.DownloadCreateResponse;
  export import DownloadCreateParams = DownloadsAPI.DownloadCreateParams;
}
