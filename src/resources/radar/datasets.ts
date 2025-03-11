// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Datasets extends APIResource {
  /**
   * Retrieves a list of datasets.
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
   * Retrieves an URL to download a single dataset.
   */
  download(
    params: DatasetDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetDownloadResponse> {
    const { format, ...body } = params;
    return (
      this._client.post('/radar/datasets/download', {
        query: { format },
        body,
        ...options,
      }) as Core.APIPromise<{ result: DatasetDownloadResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the CSV content of a given dataset by alias or ID. When getting the
   * content by alias the latest dataset is returned, optionally filtered by the
   * latest available at a given date.
   */
  get(alias: string, options?: Core.RequestOptions): Core.APIPromise<string> {
    return this._client.get(`/radar/datasets/${alias}`, {
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

export interface DatasetDownloadResponse {
  dataset: DatasetDownloadResponse.Dataset;
}

export namespace DatasetDownloadResponse {
  export interface Dataset {
    url: string;
  }
}

export type DatasetGetResponse = string;

export interface DatasetListParams {
  /**
   * Filters results by dataset type.
   */
  datasetType?: 'RANKING_BUCKET' | 'REPORT';

  /**
   * Filters results by the specified date.
   */
  date?: string;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Skips the specified number of objects before fetching the results.
   */
  offset?: number;
}

export interface DatasetDownloadParams {
  /**
   * Body param:
   */
  datasetId: number;

  /**
   * Query param: Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';
}

export declare namespace Datasets {
  export {
    type DatasetListResponse as DatasetListResponse,
    type DatasetDownloadResponse as DatasetDownloadResponse,
    type DatasetGetResponse as DatasetGetResponse,
    type DatasetListParams as DatasetListParams,
    type DatasetDownloadParams as DatasetDownloadParams,
  };
}
