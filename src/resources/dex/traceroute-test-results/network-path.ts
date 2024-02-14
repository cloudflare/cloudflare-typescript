// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NetworkPathAPI from 'cloudflare/resources/dex/traceroute-test-results/network-path';

export class NetworkPath extends APIResource {
  /**
   * Get a breakdown of hops and performance metrics for a specific traceroute test
   * run
   */
  list(
    accountId: string,
    testResultId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetworkPathListResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/dex/traceroute-test-results/${testResultId}/network-path`,
        options,
      ) as Core.APIPromise<{ result: NetworkPathListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface NetworkPathListResponse {
  /**
   * an array of the hops taken by the device to reach the end destination
   */
  hops: Array<NetworkPathListResponse.Hop>;

  /**
   * API Resource UUID tag.
   */
  resultId: string;

  /**
   * date time of this traceroute test
   */
  time_start: string;

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

export namespace NetworkPathListResponse {
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

export namespace NetworkPath {
  export import NetworkPathListResponse = NetworkPathAPI.NetworkPathListResponse;
}
