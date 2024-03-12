// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IPsAPI from 'cloudflare/resources/zero-trust/networks/routes/ips';
import * as RoutesAPI from 'cloudflare/resources/zero-trust/networks/routes/routes';

export class IPs extends APIResource {
  /**
   * Fetches routes that contain the given IP address.
   */
  get(
    ip: string,
    params: IPGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutesAPI.TunnelTeamnet> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/teamnet/routes/ip/${ip}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: RoutesAPI.TunnelTeamnet }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IPGetParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Query param: UUID of the Tunnel Virtual Network this route belongs to. If no
   * virtual networks are configured, the route is assigned to the default virtual
   * network of the account.
   */
  virtual_network_id?: unknown;
}

export namespace IPs {
  export import IPGetParams = IPsAPI.IPGetParams;
}
