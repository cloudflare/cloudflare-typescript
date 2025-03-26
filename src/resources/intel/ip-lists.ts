// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class IPLists extends APIResource {
  /**
   * Get IP Lists
   */
  get(params: IPListGetParams, options?: RequestOptions): PagePromise<IPListsSinglePage, IPList> {
    const { account_id } = params;
    return this._client.getAPIList(path`/accounts/${account_id}/intel/ip-list`, SinglePage<IPList>, options);
  }
}

export type IPListsSinglePage = SinglePage<IPList>;

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

export declare namespace IPLists {
  export {
    type IPList as IPList,
    type IPListsSinglePage as IPListsSinglePage,
    type IPListGetParams as IPListGetParams,
  };
}
