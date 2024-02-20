// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPsAPI from 'cloudflare/resources/addresses/address-maps/ips';

export class IPs extends APIResource {
  /**
   * Remove an IP from a particular address map.
   */
  delete(
    accountId: string,
    addressMapId: string,
    ipAddress: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountId}/addressing/address_maps/${addressMapId}/ips/${ipAddress}`,
        options,
      ) as Core.APIPromise<{ result: IPDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Add an IP from a prefix owned by the account to a particular address map.
   */
  replace(
    accountId: string,
    addressMapId: string,
    ipAddress: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPReplaceResponse | null> {
    return (
      this._client.put(
        `/accounts/${accountId}/addressing/address_maps/${addressMapId}/ips/${ipAddress}`,
        options,
      ) as Core.APIPromise<{ result: IPReplaceResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type IPDeleteResponse = unknown | Array<unknown> | string;

export type IPReplaceResponse = unknown | Array<unknown> | string;

export namespace IPs {
  export import IPDeleteResponse = IPsAPI.IPDeleteResponse;
  export import IPReplaceResponse = IPsAPI.IPReplaceResponse;
}
