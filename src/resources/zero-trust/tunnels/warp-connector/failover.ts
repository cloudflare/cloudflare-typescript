// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Failover extends APIResource {
  /**
   * Triggers a manual failover for a specific WARP Connector Tunnel, setting the
   * specified client as the active connector. The tunnel must be configured for high
   * availability (HA) and the client must be linked to the tunnel.
   *
   * @example
   * ```ts
   * const failover =
   *   await client.zeroTrust.tunnels.warpConnector.failover.update(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     {
   *       account_id: '699d98642c564d2e855e9661899b7252',
   *       client_id: '1bedc50d-42b3-473c-b108-ff3d10c0d925',
   *     },
   *   );
   * ```
   */
  update(
    tunnelId: string,
    params: FailoverUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FailoverUpdateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/warp_connector/${tunnelId}/failover`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FailoverUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FailoverUpdateResponse = unknown;

export interface FailoverUpdateParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: UUID of the Cloudflare Tunnel connector.
   */
  client_id: string;
}

export declare namespace Failover {
  export {
    type FailoverUpdateResponse as FailoverUpdateResponse,
    type FailoverUpdateParams as FailoverUpdateParams,
  };
}
