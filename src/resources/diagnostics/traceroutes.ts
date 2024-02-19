// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TraceroutesAPI from 'cloudflare/resources/diagnostics/traceroutes';

export class Traceroutes extends APIResource {
  /**
   * Run traceroutes from Cloudflare colos.
   */
  diagnosticsTraceroute(
    accountId: string,
    body: TracerouteDiagnosticsTracerouteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TracerouteDiagnosticsTracerouteResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/diagnostics/traceroute`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TracerouteDiagnosticsTracerouteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TracerouteDiagnosticsTracerouteResponse =
  Array<TracerouteDiagnosticsTracerouteResponse.TracerouteDiagnosticsTracerouteResponseItem>;

export namespace TracerouteDiagnosticsTracerouteResponse {
  export interface TracerouteDiagnosticsTracerouteResponseItem {
    colos?: Array<TracerouteDiagnosticsTracerouteResponseItem.Colo>;

    /**
     * The target hostname, IPv6, or IPv6 address.
     */
    target?: string;
  }

  export namespace TracerouteDiagnosticsTracerouteResponseItem {
    export interface Colo {
      colo?: Colo.Colo;

      /**
       * Errors resulting from collecting traceroute from colo to target.
       */
      error?:
        | ''
        | 'Could not gather traceroute data: Code 1'
        | 'Could not gather traceroute data: Code 2'
        | 'Could not gather traceroute data: Code 3'
        | 'Could not gather traceroute data: Code 4';

      hops?: Array<Colo.Hop>;

      /**
       * Aggregated statistics from all hops about the target.
       */
      target_summary?: unknown;

      /**
       * Total time of traceroute in ms.
       */
      traceroute_time_ms?: number;
    }

    export namespace Colo {
      export interface Colo {
        /**
         * Source colo city.
         */
        city?: string;

        /**
         * Source colo name.
         */
        name?: string;
      }

      export interface Hop {
        /**
         * An array of node objects.
         */
        nodes?: Array<Hop.Node>;

        /**
         * Number of packets where no response was received.
         */
        packets_lost?: number;

        /**
         * Number of packets sent with specified TTL.
         */
        packets_sent?: number;

        /**
         * The time to live (TTL).
         */
        packets_ttl?: number;
      }

      export namespace Hop {
        export interface Node {
          /**
           * AS number associated with the node object.
           */
          asn?: string;

          /**
           * IP address of the node.
           */
          ip?: string;

          /**
           * Field appears if there is an additional annotation printed when the probe
           * returns. Field also appears when running a GRE+ICMP traceroute to denote which
           * traceroute a node comes from.
           */
          labels?: Array<string>;

          /**
           * Maximum RTT in ms.
           */
          max_rtt_ms?: number;

          /**
           * Mean RTT in ms.
           */
          mean_rtt_ms?: number;

          /**
           * Minimum RTT in ms.
           */
          min_rtt_ms?: number;

          /**
           * Host name of the address, this may be the same as the IP address.
           */
          name?: string;

          /**
           * Number of packets with a response from this node.
           */
          packet_count?: number;

          /**
           * Standard deviation of the RTTs in ms.
           */
          std_dev_rtt_ms?: number;
        }
      }
    }
  }
}

export interface TracerouteDiagnosticsTracerouteParams {
  targets: Array<string>;

  /**
   * If no source colo names specified, all colos will be used. China colos are
   * unavailable for traceroutes.
   */
  colos?: Array<string>;

  options?: TracerouteDiagnosticsTracerouteParams.Options;
}

export namespace TracerouteDiagnosticsTracerouteParams {
  export interface Options {
    /**
     * Max TTL.
     */
    max_ttl?: number;

    /**
     * Type of packet sent.
     */
    packet_type?: 'icmp' | 'tcp' | 'udp' | 'gre' | 'gre+icmp';

    /**
     * Number of packets sent at each TTL.
     */
    packets_per_ttl?: number;

    /**
     * For UDP and TCP, specifies the destination port. For ICMP, specifies the initial
     * ICMP sequence value. Default value 0 will choose the best value to use for each
     * protocol.
     */
    port?: number;

    /**
     * Set the time (in seconds) to wait for a response to a probe.
     */
    wait_time?: number;
  }
}

export namespace Traceroutes {
  export import TracerouteDiagnosticsTracerouteResponse = TraceroutesAPI.TracerouteDiagnosticsTracerouteResponse;
  export import TracerouteDiagnosticsTracerouteParams = TraceroutesAPI.TracerouteDiagnosticsTracerouteParams;
}
