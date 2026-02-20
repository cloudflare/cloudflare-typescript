// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import { type BlobLike } from '../../../../uploads';

export class Upload extends APIResource {
  /**
   * Prepare to upload a new version of a dataset
   *
   * @example
   * ```ts
   * const upload =
   *   await client.zeroTrust.dlp.datasets.upload.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
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
   * This is used for single-column EDMv1 and Custom Word Lists. The EDM format can
   * only be created in the Cloudflare dashboard. For other clients, this operation
   * can only be used for non-secret Custom Word Lists. The body must be a UTF-8
   * encoded, newline (NL or CRNL) separated list of words to be matched.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.dlp.datasets.upload.edit(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     0,
   *     fs.createReadStream('path/to/file'),
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  edit(
    datasetId: string,
    version: number,
    dataset: string | ArrayBufferView | ArrayBuffer | BlobLike,
    params: UploadEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UploadEditResponse> {
    const { account_id } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/datasets/${datasetId}/upload/${version}`, {
        body: dataset,
        ...options,
        headers: { 'Content-Type': 'application/octet-stream', ...options?.headers },
        __binaryRequest: true,
      }) as Core.APIPromise<{ result: UploadEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface NewVersion {
  encoding_version: number;

  max_cells: number;

  version: number;

  case_sensitive?: boolean;

  columns?: Array<NewVersion.Column>;

  secret?: string;
}

export namespace NewVersion {
  export interface Column {
    entry_id: string;

    header_name: string;

    num_cells: number;

    upload_status: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }
}

export interface UploadCreateResponse {
  encoding_version: number;

  max_cells: number;

  version: number;

  case_sensitive?: boolean;

  columns?: Array<UploadCreateResponse.Column>;

  secret?: string;
}

export namespace UploadCreateResponse {
  export interface Column {
    entry_id: string;

    header_name: string;

    num_cells: number;

    upload_status: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }
}

export interface UploadEditResponse {
  id: string;

  columns: Array<UploadEditResponse.Column>;

  created_at: string;

  encoding_version: number;

  name: string;

  num_cells: number;

  secret: boolean;

  status: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';

  /**
   * Stores when the dataset was last updated.
   *
   * This includes name or description changes as well as uploads.
   */
  updated_at: string;

  uploads: Array<UploadEditResponse.Upload>;

  case_sensitive?: boolean;

  /**
   * The description of the dataset.
   */
  description?: string | null;
}

export namespace UploadEditResponse {
  export interface Column {
    entry_id: string;

    header_name: string;

    num_cells: number;

    upload_status: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
  }

  export interface Upload {
    num_cells: number;

    status: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';

    version: number;
  }
}

export interface UploadCreateParams {
  account_id: string;
}

export interface UploadEditParams {
  /**
   * Path param
   */
  account_id: string;
}

export declare namespace Upload {
  export {
    type NewVersion as NewVersion,
    type UploadCreateResponse as UploadCreateResponse,
    type UploadEditResponse as UploadEditResponse,
    type UploadCreateParams as UploadCreateParams,
    type UploadEditParams as UploadEditParams,
  };
}
