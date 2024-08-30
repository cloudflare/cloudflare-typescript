// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as VersionsAPI from './versions';
import * as EntriesAPI from './entries';

export class Versions extends APIResource {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);

  /**
   * This is used for multi-column EDMv2 datasets. The EDMv2 format can only be
   * created in the Cloudflare dashboard. The columns in the response appear in the
   * same order as in the request.
   */
  create(
    datasetId: string,
    version: number,
    params: VersionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VersionCreateResponse> {
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/datasets/${datasetId}/versions/${version}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: VersionCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type VersionCreateResponse = Array<VersionCreateResponse.VersionCreateResponseItem>;

export namespace VersionCreateResponse {
  export interface VersionCreateResponseItem {
    entry_id: string;

    header_name: string;

    num_cells: number;

    upload_status: 'empty' | 'uploading' | 'processing' | 'failed' | 'complete';
  }
}

export interface VersionCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<VersionCreateParams.ExistingColumn | VersionCreateParams.NewColumn>;
}

export namespace VersionCreateParams {
  export interface ExistingColumn {
    entry_id: string;
  }

  export interface NewColumn {
    entry_name: string;
  }
}

export namespace Versions {
  export import VersionCreateResponse = VersionsAPI.VersionCreateResponse;
  export import VersionCreateParams = VersionsAPI.VersionCreateParams;
  export import Entries = EntriesAPI.Entries;
  export import EntryCreateResponse = EntriesAPI.EntryCreateResponse;
  export import EntryCreateParams = EntriesAPI.EntryCreateParams;
}
