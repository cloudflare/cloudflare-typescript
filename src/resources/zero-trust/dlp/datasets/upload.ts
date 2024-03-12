// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UploadAPI from 'cloudflare/resources/zero-trust/dlp/datasets/upload';
import * as DatasetsAPI from 'cloudflare/resources/zero-trust/dlp/datasets/datasets';

export class Upload extends APIResource {
  /**
   * Prepare to upload a new version of a dataset.
   */
  create(
    datasetId: string,
    params: UploadCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DLPDatasetNewVersion> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/dlp/datasets/${datasetId}/upload`,
        options,
      ) as Core.APIPromise<{ result: DLPDatasetNewVersion }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Upload a new version of a dataset.
   */
  edit(
    datasetId: string,
    version: number,
    params: UploadEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatasetsAPI.DLPDataset> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/dlp/datasets/${datasetId}/upload/${version}`,
        options,
      ) as Core.APIPromise<{ result: DatasetsAPI.DLPDataset }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DLPDatasetNewVersion {
  max_cells: number;

  version: number;

  secret?: string;
}

export interface UploadCreateParams {
  account_id: string;
}

export interface UploadEditParams {
  account_id: string;
}

export namespace Upload {
  export import DLPDatasetNewVersion = UploadAPI.DLPDatasetNewVersion;
  export import UploadCreateParams = UploadAPI.UploadCreateParams;
  export import UploadEditParams = UploadAPI.UploadEditParams;
}
