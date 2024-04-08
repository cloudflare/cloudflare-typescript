// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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
  ): Core.APIPromise<NewVersion> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/dlp/datasets/${datasetId}/upload`,
        options,
      ) as Core.APIPromise<{ result: NewVersion }>
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
  ): Core.APIPromise<DatasetsAPI.Dataset> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/datasets/${datasetId}/upload/${version}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: DatasetsAPI.Dataset }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface NewVersion {
  max_cells: number;

  version: number;

  secret?: string;
}

export interface UploadCreateParams {
  account_id: string;
}

export interface UploadEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export namespace Upload {
  export import NewVersion = UploadAPI.NewVersion;
  export import UploadCreateParams = UploadAPI.UploadCreateParams;
  export import UploadEditParams = UploadAPI.UploadEditParams;
}
