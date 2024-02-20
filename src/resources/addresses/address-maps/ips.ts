// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPsAPI from 'cloudflare/resources/addresses/address-maps/ips';

export class IPs extends APIResource {
  /**
   * Add an IP from a prefix owned by the account to a particular address map.
   */
  update(
    accountId: string,
    addressMapId: string,
    ipAddress: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPUpdateResponse | null> {
    return (
      this._client.put(
        `/accounts/${accountId}/addressing/address_maps/${addressMapId}/ips/${ipAddress}`,
        options,
      ) as Core.APIPromise<{ result: IPUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

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
}

export type IPUpdateResponse = unknown | Array<unknown> | string;

export type IPDeleteResponse = unknown | Array<unknown> | string;

export namespace IPs {
  export import IPUpdateResponse = IPsAPI.IPUpdateResponse;
  export import IPDeleteResponse = IPsAPI.IPDeleteResponse;
}
