// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class IPLists extends APIResource {
  /**
   * Get IP Lists
   */
  get(params: IPListGetParams, options?: Core.RequestOptions): Core.PagePromise<IPListsSinglePage, IPList> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/intel/ip-list`, IPListsSinglePage, options);
  }
}

export class IPListsSinglePage extends SinglePage<IPList> {}

export interface IPList {
  id?: number;

  description?: string;

  name?: string;
}

export interface IPListGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

IPLists.IPListsSinglePage = IPListsSinglePage;

export declare namespace IPLists {
  export {
    type IPList as IPList,
    IPListsSinglePage as IPListsSinglePage,
    type IPListGetParams as IPListGetParams,
  };
}
