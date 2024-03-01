// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPsAPI from 'cloudflare/resources/addressing/address-maps/ips';

export class IPs extends APIResource {
  /**
   * Add an IP from a prefix owned by the account to a particular address map.
   */
  update(
    addressMapId: string,
    ipAddress: string,
    params: IPUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPUpdateResponse | null> {
    const { account_id } = params;
    return (
      this._client.put(
        `/accounts/${account_id}/addressing/address_maps/${addressMapId}/ips/${ipAddress}`,
        options,
      ) as Core.APIPromise<{ result: IPUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove an IP from a particular address map.
   */
  delete(
    addressMapId: string,
    ipAddress: string,
    params: IPDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/addressing/address_maps/${addressMapId}/ips/${ipAddress}`,
        options,
      ) as Core.APIPromise<{ result: IPDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type IPUpdateResponse = unknown | Array<unknown> | string;

export type IPDeleteResponse = unknown | Array<unknown> | string;

export interface IPUpdateParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface IPDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace IPs {
  export import IPUpdateResponse = IPsAPI.IPUpdateResponse;
  export import IPDeleteResponse = IPsAPI.IPDeleteResponse;
  export import IPUpdateParams = IPsAPI.IPUpdateParams;
  export import IPDeleteParams = IPsAPI.IPDeleteParams;
}
