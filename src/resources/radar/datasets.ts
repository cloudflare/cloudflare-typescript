// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Datasets extends APIResource {
  /**
   * Get a list of datasets.
   */
  list(
    query: DatasetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DatasetListResponse> {
    return (
      this._client.get('/radar/datasets', { query, ...options }) as APIPromise<{
        result: DatasetListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a URL to download a single dataset.
   */
  download(params: DatasetDownloadParams, options?: RequestOptions): APIPromise<DatasetDownloadResponse> {
    const { format, ...body } = params;
    return (
      this._client.post('/radar/datasets/download', { query: { format }, body, ...options }) as APIPromise<{
        result: DatasetDownloadResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the CSV content of a given dataset by alias or ID. When getting the content
   * by alias the latest dataset is returned, optionally filtered by the latest
   * available at a given date.
   */
  get(alias: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/radar/datasets/${alias}`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/csv' }, options?.headers]),
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

export interface DatasetDownloadParams {
  /**
   * Body param:
   */
  datasetId: number;

  /**
   * Query param: Format results are returned in.
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
