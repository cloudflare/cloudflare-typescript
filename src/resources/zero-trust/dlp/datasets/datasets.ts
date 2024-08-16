// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as DatasetsAPI from './datasets';
import * as UploadAPI from './upload';
import { SinglePage } from '../../../../pagination';

export class Datasets extends APIResource {
  upload: UploadAPI.Upload = new UploadAPI.Upload(this._client);

  /**
   * Create a new dataset
   */
  create(params: DatasetCreateParams, options?: Core.RequestOptions): Core.APIPromise<DatasetCreation> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/datasets`, { body, ...options }) as Core.APIPromise<{
        result: DatasetCreation;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update details about a dataset
   */
  update(
    datasetId: string,
    params: DatasetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Dataset> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/datasets/${datasetId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Dataset }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch all datasets
   */
  list(
    params: DatasetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatasetsSinglePage, Dataset> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/dlp/datasets`, DatasetsSinglePage, options);
  }

  /**
   * This deletes all versions of the dataset.
   */
  delete(
    datasetId: string,
    params: DatasetDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/dlp/datasets/${datasetId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetch a specific dataset
   */
  get(datasetId: string, params: DatasetGetParams, options?: Core.RequestOptions): Core.APIPromise<Dataset> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/dlp/datasets/${datasetId}`, options) as Core.APIPromise<{
        result: Dataset;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DatasetsSinglePage extends SinglePage<Dataset> {}

export interface Dataset {
  id: string;

  columns: Array<Dataset.Column>;

  created_at: string;

  encoding_version: number;

  name: string;

  num_cells: number;

  secret: boolean;

  status: 'empty' | 'uploading' | 'processing' | 'failed' | 'complete';

  updated_at: string;

  uploads: Array<Dataset.Upload>;

  /**
   * The description of the dataset
   */
  description?: string | null;
}

export namespace Dataset {
  export interface Column {
    entry_id: string;

    header_name: string;

    num_cells: number;

    upload_status: 'empty' | 'uploading' | 'processing' | 'failed' | 'complete';
  }

  export interface Upload {
    num_cells: number;

    status: 'empty' | 'uploading' | 'processing' | 'failed' | 'complete';

    version: number;
  }
}

export type DatasetArray = Array<Dataset>;

export interface DatasetCreation {
  dataset: Dataset;

  /**
   * Encoding version to use for dataset
   */
  encoding_version: number;

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

export interface DatasetCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param: The description of the dataset
   */
  description?: string | null;

  /**
   * Body param: Dataset encoding version
   *
   * Non-secret custom word lists with no header are always version 1. Secret EDM
   * lists with no header are version 1. Multicolumn CSV with headers are version 2.
   * Omitting this field provides the default value 0, which is interpreted the same
   * as 1.
   */
  encoding_version?: number;

  /**
   * Body param: Generate a secret dataset.
   *
   * If true, the response will include a secret to use with the EDM encoder. If
   * false, the response has no secret and the dataset is uploaded in plaintext.
   */
  secret?: boolean;
}

export interface DatasetUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The description of the dataset
   */
  description?: string | null;

  /**
   * Body param: The name of the dataset, must be unique
   */
  name?: string | null;
}

export interface DatasetListParams {
  account_id: string;
}

export interface DatasetDeleteParams {
  account_id: string;
}

export interface DatasetGetParams {
  account_id: string;
}

export namespace Datasets {
  export import Dataset = DatasetsAPI.Dataset;
  export import DatasetArray = DatasetsAPI.DatasetArray;
  export import DatasetCreation = DatasetsAPI.DatasetCreation;
  export import DatasetsSinglePage = DatasetsAPI.DatasetsSinglePage;
  export import DatasetCreateParams = DatasetsAPI.DatasetCreateParams;
  export import DatasetUpdateParams = DatasetsAPI.DatasetUpdateParams;
  export import DatasetListParams = DatasetsAPI.DatasetListParams;
  export import DatasetDeleteParams = DatasetsAPI.DatasetDeleteParams;
  export import DatasetGetParams = DatasetsAPI.DatasetGetParams;
  export import Upload = UploadAPI.Upload;
  export import NewVersion = UploadAPI.NewVersion;
  export import UploadCreateParams = UploadAPI.UploadCreateParams;
  export import UploadEditParams = UploadAPI.UploadEditParams;
}
