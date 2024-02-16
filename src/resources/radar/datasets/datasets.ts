// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DatasetsAPI from 'cloudflare/resources/radar/datasets/datasets';
import * as DownloadsAPI from 'cloudflare/resources/radar/datasets/downloads';

export class Datasets extends APIResource {
  downloads: DownloadsAPI.Downloads = new DownloadsAPI.Downloads(this._client);

  /**
   * Get a list of datasets.
   */
  list(query?: DatasetListParams, options?: Core.RequestOptions): Core.APIPromise<DatasetListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DatasetListResponse>;
  list(
    query: DatasetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/datasets', { query, ...options }) as Core.APIPromise<{
        result: DatasetListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the csv content of a given dataset by alias or id. When getting the content
   * by alias the latest dataset is returned, optionally filtered by the latest
   * available at a given date.
   */
  get(alias: string, query?: DatasetGetParams, options?: Core.RequestOptions): Core.APIPromise<string>;
  get(alias: string, options?: Core.RequestOptions): Core.APIPromise<string>;
  get(
    alias: string,
    query: DatasetGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(query)) {
      return this.get(alias, {}, query);
    }
    return this._client.get(`/radar/datasets/${alias}`, {
      query,
      ...options,
      headers: { Accept: 'text/csv', ...options?.headers },
    });
  }
}

export interface DatasetListResponse {
  datasets: Array<DatasetListResponse.Dataset>;
}

export namespace DatasetListResponse {
  export interface Dataset {
    id: number;

    description: string;

    meta: unknown;

    tags: Array<string>;

    title: string;

    type: string;
  }
}

export type DatasetGetResponse = string;

export interface DatasetListParams {
  /**
   * Dataset type.
   */
  datasetType?: 'RANKING_BUCKET' | 'REPORT';

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Number of objects to skip before grabbing results.
   */
  offset?: number;
}

export interface DatasetGetParams {
  /**
   * Filter dataset alias by date
   */
  date?: string | null;
}

export namespace Datasets {
  export import DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export import DatasetGetResponse = DatasetsAPI.DatasetGetResponse;
  export import DatasetListParams = DatasetsAPI.DatasetListParams;
  export import DatasetGetParams = DatasetsAPI.DatasetGetParams;
  export import Downloads = DownloadsAPI.Downloads;
  export import DownloadRadarPostDatasetDownloadResponse = DownloadsAPI.DownloadRadarPostDatasetDownloadResponse;
  export import DownloadRadarPostDatasetDownloadParams = DownloadsAPI.DownloadRadarPostDatasetDownloadParams;
}
