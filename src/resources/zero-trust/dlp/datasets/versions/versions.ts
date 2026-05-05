// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as EntriesAPI from './entries';
import { BaseEntries, Entries, EntryCreateParams, EntryCreateResponse } from './entries';
import { PagePromise, SinglePage } from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseVersions extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'datasets', 'versions'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'datasets',
    'versions',
  ] as const);

  /**
   * This is used for multi-column EDMv2 datasets. The EDMv2 format can only be
   * created in the Cloudflare dashboard. The columns in the response appear in the
   * same order as in the request.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const versionCreateResponse of client.zeroTrust.dlp.datasets.versions.create(
   *   0,
   *   {
   *     account_id: 'account_id',
   *     dataset_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     body: [
   *       { entry_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *     ],
   *   },
   * )) {
   *   // ...
   * }
   * ```
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
export class Versions extends BaseVersions {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);
}

export type VersionCreateResponsesSinglePage = SinglePage<VersionCreateResponse>;

export interface VersionCreateResponse {
  entry_id: string;

  header_name: string;

  num_cells: number;

  upload_status: 'empty' | 'uploading' | 'pending' | 'processing' | 'failed' | 'complete';
}

export interface VersionCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Path param
   */
  dataset_id: string;

  /**
   * Body param
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
Versions.BaseEntries = BaseEntries;

export declare namespace Versions {
  export {
    type VersionCreateResponse as VersionCreateResponse,
    type VersionCreateResponsesSinglePage as VersionCreateResponsesSinglePage,
    type VersionCreateParams as VersionCreateParams,
  };

  export {
    Entries as Entries,
    BaseEntries as BaseEntries,
    type EntryCreateResponse as EntryCreateResponse,
    type EntryCreateParams as EntryCreateParams,
  };
}
