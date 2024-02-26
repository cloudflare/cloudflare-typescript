// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UploadAPI from 'cloudflare/resources/dlp/datasets/upload';

export class Upload extends APIResource {
  /**
   * Prepare to upload a new version of a dataset.
   */
  create(
    datasetId: string,
    params: UploadCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UploadCreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/dlp/datasets/${datasetId}/upload`,
        options,
      ) as Core.APIPromise<{ result: UploadCreateResponse }>
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
  ): Core.APIPromise<UploadEditResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/dlp/datasets/${datasetId}/upload/${version}`,
        options,
      ) as Core.APIPromise<{ result: UploadEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UploadCreateResponse {
  max_cells: number;

  version: number;

  secret?: string;
}

export interface UploadEditResponse {
  id: string;

  created_at: string;

  name: string;

  num_cells: number;

  secret: boolean;

  status: 'empty' | 'uploading' | 'failed' | 'complete';

  updated_at: string;

  uploads: Array<UploadEditResponse.Upload>;

  description?: string | null;
}

export namespace UploadEditResponse {
  export interface Upload {
    num_cells: number;

    status: 'empty' | 'uploading' | 'failed' | 'complete';

    version: number;
  }
}

export interface UploadCreateParams {
  account_id: string;
}

export interface UploadEditParams {
  account_id: string;
}

export namespace Upload {
  export import UploadCreateResponse = UploadAPI.UploadCreateResponse;
  export import UploadEditResponse = UploadAPI.UploadEditResponse;
  export import UploadCreateParams = UploadAPI.UploadCreateParams;
  export import UploadEditParams = UploadAPI.UploadEditParams;
}
