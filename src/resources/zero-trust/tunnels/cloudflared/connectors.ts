// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as ConnectionsAPI from './connections';

export class Connectors extends APIResource {
  /**
   * Fetches connector and connection details for a Cloudflare Tunnel.
   *
   * @example
   * ```ts
   * const client =
   *   await client.zeroTrust.tunnels.cloudflared.connectors.get(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     '1bedc50d-42b3-473c-b108-ff3d10c0d925',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  get(
    tunnelId: string,
    connectorId: string,
    params?: ConnectorGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionsAPI.Client>;
  get(
    tunnelId: string,
    connectorId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionsAPI.Client>;
  get(
    tunnelId: string,
    connectorId: string,
    params: ConnectorGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionsAPI.Client> {
    if (isRequestOptions(params)) {
      return this.get(tunnelId, connectorId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/cfd_tunnel/${tunnelId}/connectors/${connectorId}`,
        options,
      ) as Core.APIPromise<{ result: ConnectionsAPI.Client }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConnectorGetParams {
  /**
   * Cloudflare account ID
   */
  account_id?: string;
}

export declare namespace Connectors {
  export { type ConnectorGetParams as ConnectorGetParams };
}
