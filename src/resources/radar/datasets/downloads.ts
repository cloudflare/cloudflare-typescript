// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DownloadsAPI from 'cloudflare/resources/radar/datasets/downloads';

export class Downloads extends APIResource {
  /**
   * Get a url to download a single dataset.
   */
  radarPostDatasetDownload(
    params: DownloadRadarPostDatasetDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DownloadRadarPostDatasetDownloadResponse> {
    const { format, ...body } = params;
    return (
      this._client.post('/radar/datasets/download', {
        query: { format },
        body,
        ...options,
      }) as Core.APIPromise<{ result: DownloadRadarPostDatasetDownloadResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DownloadRadarPostDatasetDownloadResponse {
  dataset: DownloadRadarPostDatasetDownloadResponse.Dataset;
}

export namespace DownloadRadarPostDatasetDownloadResponse {
  export interface Dataset {
    url: string;
  }
}

export interface DownloadRadarPostDatasetDownloadParams {
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
  export import DownloadRadarPostDatasetDownloadResponse = DownloadsAPI.DownloadRadarPostDatasetDownloadResponse;
  export import DownloadRadarPostDatasetDownloadParams = DownloadsAPI.DownloadRadarPostDatasetDownloadParams;
}
