// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class NetworkPath extends APIResource {
  /**
   * Get a breakdown of hops and performance metrics for a specific traceroute test
   * run
   *
   * @example
   * ```ts
   * const networkPath =
   *   await client.zeroTrust.dex.tracerouteTestResults.networkPath.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '01a7362d577a6c3019a474fd6f485823' },
   *   );
   * ```
   */
  get(
    testResultId: string,
    params: NetworkPathGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkPathGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dex/traceroute-test-results/${testResultId}/network-path`,
        options,
      ) as Core.APIPromise<{ result: NetworkPathGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface NetworkPathGetResponse {
  /**
   * An array of the hops taken by the device to reach the end destination.
   */
  hops: Array<NetworkPathGetResponse.Hop>;

  /**
   * API Resource UUID tag.
   */
  resultId: string;

  /**
   * Cloudflare colo airport code.
   */
  colo?: string;

  /**
   * Name of the device associated with this network path response.
   */
  deviceName?: string;

  /**
   * Whether the test was run inside or outside of the WARP tunnel.
   */
  execution_context?: 'EXECUTION_CONTEXT_INVALID' | 'OUT_OF_TUNNEL' | 'IN_TUNNEL';

  /**
   * API Resource UUID tag.
   */
  testId?: string;

  /**
   * Name of the traceroute test.
   */
  testName?: string;

  /**
   * Timestamp indicating when the traceroute test execution began.
   */
  time_start?: string;

  tunnel_type?: string | null;
}

export namespace NetworkPathGetResponse {
  export interface Hop {
    ttl: number;

    asn?: number | null;

    aso?: string | null;

    ipAddress?: string | null;

    location?: Hop.Location | null;

    mile?: 'client-to-app' | 'client-to-cf-egress' | 'client-to-cf-ingress' | 'client-to-isp' | null;

    name?: string | null;

    packetLossPct?: number | null;

    rttMs?: number | null;
  }

  export namespace Hop {
    export interface Location {
      city?: string | null;

      state?: string | null;

      zip?: string | null;
    }
  }
}

export interface NetworkPathGetParams {
  /**
   * Unique identifier linked to an account.
   */
  account_id: string;
}

export declare namespace NetworkPath {
  export {
    type NetworkPathGetResponse as NetworkPathGetResponse,
    type NetworkPathGetParams as NetworkPathGetParams,
  };
}
