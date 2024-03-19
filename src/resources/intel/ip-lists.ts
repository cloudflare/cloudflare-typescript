// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPListsAPI from 'cloudflare/resources/intel/ip-lists';

export class IPLists extends APIResource {
  /**
   * Get IP Lists
   */
  get(params: IPListGetParams, options?: Core.RequestOptions): Core.APIPromise<IPListGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/intel/ip-list`, options) as Core.APIPromise<{
        result: IPListGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IntelIPList {
  id?: number;

  description?: string;

  name?: string;
}

export type IPListGetResponse = Array<IntelIPList>;

export interface IPListGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace IPLists {
  export import IntelIPList = IPListsAPI.IntelIPList;
  export import IPListGetResponse = IPListsAPI.IPListGetResponse;
  export import IPListGetParams = IPListsAPI.IPListGetParams;
}
