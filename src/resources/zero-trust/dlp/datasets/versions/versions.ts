// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as EntriesAPI from './entries';
import { Entries, EntryCreateParams, EntryCreateResponse } from './entries';
import { PagePromise, SinglePage } from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Versions extends APIResource {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);

  /**
   * This is used for multi-column EDMv2 datasets. The EDMv2 format can only be
   * created in the Cloudflare dashboard. The columns in the response appear in the
   * same order as in the request.
   */
  create(
    version: number,
    params: VersionCreateParams,
    options?: RequestOptions,
  ): PagePromise<VersionCreateResponsesSinglePage, VersionCreateResponse> {
    const { account_id, dataset_id, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dlp/datasets/${dataset_id}/versions/${version}`,
      SinglePage<VersionCreateResponse>,
      { body: body, method: 'post', ...options },
    );
  }
}

export type VersionCreateResponsesSinglePage = SinglePage<VersionCreateResponse>;

export interface VersionCreateResponse {
  entry_id: string;

  header_name: string;

  num_cells: number;

  upload_status: 'empty' | 'uploading' | 'processing' | 'failed' | 'complete';
}

export interface VersionCreateParams {
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
  body: Array<VersionCreateParams.ExistingColumn | VersionCreateParams.NewColumn>;
}

export namespace VersionCreateParams {
  export interface ExistingColumn {
    entry_id: string;

    header_name?: string;

    num_cells?: number;
  }

  export interface NewColumn {
    entry_name: string;

    header_name?: string;

    num_cells?: number;
  }
}

Versions.Entries = Entries;

export declare namespace Versions {
  export {
    type VersionCreateResponse as VersionCreateResponse,
    type VersionCreateResponsesSinglePage as VersionCreateResponsesSinglePage,
    type VersionCreateParams as VersionCreateParams,
  };

  export {
    Entries as Entries,
    type EntryCreateResponse as EntryCreateResponse,
    type EntryCreateParams as EntryCreateParams,
  };
}
