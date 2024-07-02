// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as NetworkPathAPI from './network-path';

export class NetworkPath extends APIResource {
  /**
   * Get a breakdown of hops and performance metrics for a specific traceroute test
   * run
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
   * an array of the hops taken by the device to reach the end destination
   */
  hops: Array<NetworkPathGetResponse.Hop>;

  /**
   * API Resource UUID tag.
   */
  resultId: string;

  /**
   * name of the device associated with this network path response
   */
  deviceName?: string;

  /**
   * API Resource UUID tag.
   */
  testId?: string;

  /**
   * name of the tracroute test
   */
  testName?: string;
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
   * unique identifier linked to an account
   */
  account_id: string;
}

export namespace NetworkPath {
  export import NetworkPathGetResponse = NetworkPathAPI.NetworkPathGetResponse;
  export import NetworkPathGetParams = NetworkPathAPI.NetworkPathGetParams;
}
