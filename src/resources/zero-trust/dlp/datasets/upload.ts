// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as DatasetsAPI from './datasets';
import { APIPromise } from '../../../../api-promise';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Upload extends APIResource {
  /**
   * Prepare to upload a new version of a dataset
   */
  create(datasetID: string, params: UploadCreateParams, options?: RequestOptions): APIPromise<NewVersion> {
    const { account_id } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/dlp/datasets/${datasetID}/upload`,
        options,
      ) as APIPromise<{ result: NewVersion }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * This is used for single-column EDMv1 and Custom Word Lists. The EDM format can
   * only be created in the Cloudflare dashboard. For other clients, this operation
   * can only be used for non-secret Custom Word Lists. The body must be a UTF-8
   * encoded, newline (NL or CRNL) separated list of words to be matched.
   */
  edit(version: number, params: UploadEditParams, options?: RequestOptions): APIPromise<DatasetsAPI.Dataset> {
    const { account_id, dataset_id, body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dlp/datasets/${dataset_id}/upload/${version}`, {
        body: body,
        ...options,
        headers: buildHeaders([{ 'Content-Type': 'application/octet-stream' }, options?.headers]),
      }) as APIPromise<{ result: DatasetsAPI.Dataset }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface NewVersion {
  encoding_version: number;

  max_cells: number;

  version: number;

  columns?: Array<NewVersion.Column>;

  secret?: string;
}

export namespace NewVersion {
  export interface Column {
    entry_id: string;

    header_name: string;

    num_cells: number;

    upload_status: 'empty' | 'uploading' | 'processing' | 'failed' | 'complete';
  }
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
   * Path param:
   */
  dataset_id: string;

  /**
   * Body param:
   */
  body: string | ArrayBuffer | ArrayBufferView | Blob | DataView;
}

export declare namespace Upload {
  export {
    type NewVersion as NewVersion,
    type UploadCreateParams as UploadCreateParams,
    type UploadEditParams as UploadEditParams,
  };
}
