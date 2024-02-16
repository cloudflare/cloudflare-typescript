// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPListsAPI from 'cloudflare/resources/intels/ip-lists';

export class IPLists extends APIResource {
  /**
   * Get IP Lists
   */
  ipListGetIPLists(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPListIPListGetIPListsResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/intel/ip-list`, options) as Core.APIPromise<{
        result: IPListIPListGetIPListsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type IPListIPListGetIPListsResponse =
  Array<IPListIPListGetIPListsResponse.IPListIPListGetIPListsResponseItem>;

export namespace IPListIPListGetIPListsResponse {
  export interface IPListIPListGetIPListsResponseItem {
    id?: number;

    description?: string;

    name?: string;
  }
}

export namespace IPLists {
  export import IPListIPListGetIPListsResponse = IPListsAPI.IPListIPListGetIPListsResponse;
}
