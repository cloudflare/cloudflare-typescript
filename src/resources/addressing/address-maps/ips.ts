// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPsAPI from 'cloudflare/resources/addressing/address-maps/ips';
import * as Shared from 'cloudflare/resources/shared';

export class IPs extends APIResource {
  /**
   * Add an IP from a prefix owned by the account to a particular address map.
   */
  update(
    addressMapId: string,
    ipAddress: string,
    params: IPUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/addressing/address_maps/${addressMapId}/ips/${ipAddress}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null }>
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
  ): Core.APIPromise<Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null> {
    const { account_id, body } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/addressing/address_maps/${addressMapId}/ips/${ipAddress}`,
        { body: body, ...options },
      ) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export namespace IPs {
  export import IPUpdateParams = IPsAPI.IPUpdateParams;
  export import IPDeleteParams = IPsAPI.IPDeleteParams;
}
