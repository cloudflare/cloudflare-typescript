// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DatasetsAPI from 'cloudflare/resources/dlp/datasets';

export class Datasets extends APIResource {
  /**
   * Create a new dataset.
   */
  create(
    accountId: string,
    body: DatasetCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/dlp/datasets`, { body, ...options }) as Core.APIPromise<{
        result: DatasetCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update details about a dataset.
   */
  update(
    accountId: string,
    datasetId: string,
    body: DatasetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/dlp/datasets/${datasetId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DatasetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch all datasets with information about available versions.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<DatasetListResponse> {
    return (
      this._client.get(`/accounts/${accountId}/dlp/datasets`, options) as Core.APIPromise<{
        result: DatasetListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a dataset.
   *
   * This deletes all versions of the dataset.
   */
  delete(accountId: string, datasetId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/accounts/${accountId}/dlp/datasets/${datasetId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch a specific dataset with information about available versions.
   */
  get(
    accountId: string,
    datasetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/dlp/datasets/${datasetId}`, options) as Core.APIPromise<{
        result: DatasetGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Upload a new version of a dataset.
   */
  upload(
    accountId: string,
    datasetId: string,
    version: number,
    body: DatasetUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetUploadResponse> {
    return (
      this._client.post(
        `/accounts/${accountId}/dlp/datasets/${datasetId}/upload/${version}`,
        options,
      ) as Core.APIPromise<{ result: DatasetUploadResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Prepare to upload a new version of a dataset.
   */
  uploadPrepare(
    accountId: string,
    datasetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetUploadPrepareResponse> {
    return (
      this._client.post(
        `/accounts/${accountId}/dlp/datasets/${datasetId}/upload`,
        options,
      ) as Core.APIPromise<{ result: DatasetUploadPrepareResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DatasetCreateResponse {
  dataset: DatasetCreateResponse.Dataset;

  max_cells: number;

  /**
   * The version to use when uploading the dataset.
   */
  version: number;

  /**
   * The secret to use for Exact Data Match datasets. This is not present in Custom
   * Wordlists.
   */
  secret?: string;
}

export namespace DatasetCreateResponse {
  export interface Dataset {
    id: string;

    created_at: string;

    name: string;

    num_cells: number;

    secret: boolean;

    status: 'empty' | 'uploading' | 'failed' | 'complete';

    updated_at: string;

    uploads: Array<Dataset.Upload>;

    description?: string | null;
  }

  export namespace Dataset {
    export interface Upload {
      num_cells: number;

      status: 'empty' | 'uploading' | 'failed' | 'complete';

      version: number;
    }
  }
}

export interface DatasetUpdateResponse {
  id: string;

  created_at: string;

  name: string;

  num_cells: number;

  secret: boolean;

  status: 'empty' | 'uploading' | 'failed' | 'complete';

  updated_at: string;

  uploads: Array<DatasetUpdateResponse.Upload>;

  description?: string | null;
}

export namespace DatasetUpdateResponse {
  export interface Upload {
    num_cells: number;

    status: 'empty' | 'uploading' | 'failed' | 'complete';

    version: number;
  }
}

export type DatasetListResponse = Array<DatasetListResponse.DatasetListResponseItem>;

export namespace DatasetListResponse {
  export interface DatasetListResponseItem {
    id: string;

    created_at: string;

    name: string;

    num_cells: number;

    secret: boolean;

    status: 'empty' | 'uploading' | 'failed' | 'complete';

    updated_at: string;

    uploads: Array<DatasetListResponseItem.Upload>;

    description?: string | null;
  }

  export namespace DatasetListResponseItem {
    export interface Upload {
      num_cells: number;

      status: 'empty' | 'uploading' | 'failed' | 'complete';

      version: number;
    }
  }
}

export interface DatasetGetResponse {
  id: string;

  created_at: string;

  name: string;

  num_cells: number;

  secret: boolean;

  status: 'empty' | 'uploading' | 'failed' | 'complete';

  updated_at: string;

  uploads: Array<DatasetGetResponse.Upload>;

  description?: string | null;
}

export namespace DatasetGetResponse {
  export interface Upload {
    num_cells: number;

    status: 'empty' | 'uploading' | 'failed' | 'complete';

    version: number;
  }
}

export interface DatasetUploadResponse {
  id: string;

  created_at: string;

  name: string;

  num_cells: number;

  secret: boolean;

  status: 'empty' | 'uploading' | 'failed' | 'complete';

  updated_at: string;

  uploads: Array<DatasetUploadResponse.Upload>;

  description?: string | null;
}

export namespace DatasetUploadResponse {
  export interface Upload {
    num_cells: number;

    status: 'empty' | 'uploading' | 'failed' | 'complete';

    version: number;
  }
}

export interface DatasetUploadPrepareResponse {
  max_cells: number;

  version: number;

  secret?: string;
}

export interface DatasetCreateParams {
  name: string;

  description?: string | null;

  /**
   * Generate a secret dataset.
   *
   * If true, the response will include a secret to use with the EDM encoder. If
   * false, the response has no secret and the dataset is uploaded in plaintext.
   */
  secret?: boolean;
}

export interface DatasetUpdateParams {
  description?: string | null;

  name?: string | null;
}

export interface DatasetUploadParams {}

export namespace Datasets {
  export import DatasetCreateResponse = DatasetsAPI.DatasetCreateResponse;
  export import DatasetUpdateResponse = DatasetsAPI.DatasetUpdateResponse;
  export import DatasetListResponse = DatasetsAPI.DatasetListResponse;
  export import DatasetGetResponse = DatasetsAPI.DatasetGetResponse;
  export import DatasetUploadResponse = DatasetsAPI.DatasetUploadResponse;
  export import DatasetUploadPrepareResponse = DatasetsAPI.DatasetUploadPrepareResponse;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetUpdateParams = DatasetsAPI.DatasetUpdateParams;
  export import DatasetUploadParams = DatasetsAPI.DatasetUploadParams;
}
