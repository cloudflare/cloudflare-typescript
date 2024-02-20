// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UploadAPI from 'cloudflare/resources/dlp/datasets/upload';

export class Upload extends APIResource {
  /**
   * Prepare to upload a new version of a dataset.
   */
  create(
    accountId: string,
    datasetId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UploadCreateResponse> {
    return (
      this._client.post(
        `/accounts/${accountId}/dlp/datasets/${datasetId}/upload`,
        options,
      ) as Core.APIPromise<{ result: UploadCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Upload a new version of a dataset.
   */
  edit(
    accountId: string,
    datasetId: string,
    version: number,
    body: UploadEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UploadEditResponse> {
    return (
      this._client.post(
        `/accounts/${accountId}/dlp/datasets/${datasetId}/upload/${version}`,
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

export interface UploadEditParams {}

export namespace Upload {
  export import UploadCreateResponse = UploadAPI.UploadCreateResponse;
  export import UploadEditResponse = UploadAPI.UploadEditResponse;
  export import UploadEditParams = UploadAPI.UploadEditParams;
}
