// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as IPsAPI from './ips';

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
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/addressing/address_maps/${addressMapId}/ips/${ipAddress}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: IPUpdateResponse | null }>
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

export type IPUpdateResponse = Array<unknown>;

export type IPDeleteResponse = Array<unknown>;

export interface IPUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
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
