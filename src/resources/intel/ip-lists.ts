// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as IPListsAPI from './ip-lists';

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

export interface IPList {
  id?: number;

  description?: string;

  name?: string;
}

export type IPListGetResponse = Array<IPList>;

export interface IPListGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace IPLists {
  export import IPList = IPListsAPI.IPList;
  export import IPListGetResponse = IPListsAPI.IPListGetResponse;
  export import IPListGetParams = IPListsAPI.IPListGetParams;
}
