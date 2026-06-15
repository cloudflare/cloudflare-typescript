// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class FleetStatus extends APIResource {
  /**
   * Get the live status of a latest device given device_id from the device_state
   * table
   *
   * @example
   * ```ts
   * const fleetStatus =
   *   await client.zeroTrust.devices.fleetStatus.get(
   *     'cb49c27f-7f97-49c5-b6f3-f7c01ead0fd7',
   *     {
   *       account_id: '01a7362d577a6c3019a474fd6f485823',
   *       since_minutes: 10,
   *     },
   *   );
   * ```
   */
  get(
    deviceId: string,
    params: FleetStatusGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FleetStatusGetResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/dex/devices/${deviceId}/fleet-status/live`, {
      query,
      ...options,
    });
  }
}

export interface FleetStatusGetResponse {
  /**
   * Cloudflare colo airport code.
   */
  colo: string;

  /**
   * Device identifier (UUID v4)
   */
  deviceId: string;

  /**
   * The mode under which the WARP client is run.
   */
  mode: string;

  /**
   * Operating system.
   */
  platform: string;

  /**
   * Network status.
   */
  status: string;

  timestamp: string;

  /**
   * WARP client version.
   */
  version: string;

  alwaysOn?: boolean | null;

  batteryCharging?: boolean | null;

  batteryCycles?: number | null;

  batteryPct?: number | null;

  connectionType?: string | null;

  cpuPct?: number | null;

  cpuPctByApp?: Array<FleetStatusGetResponse.CPUPctByApp> | null;

  deviceIpv4?: FleetStatusGetResponse.DeviceIPV4 | null;

  deviceIpv6?: FleetStatusGetResponse.DeviceIPV6 | null;

  /**
   * Device identifier (human readable).
   */
  deviceName?: string;

  /**
   * @deprecated Use `registrationId` instead.
   */
  deviceRegistration?: string | null;

  diskReadBps?: number | null;

  diskUsagePct?: number | null;

  diskWriteBps?: number | null;

  dohSubdomain?: string | null;

  estimatedLossPct?: number | null;

  firewallEnabled?: boolean | null;

  gatewayIpv4?: FleetStatusGetResponse.GatewayIPV4 | null;

  gatewayIpv6?: FleetStatusGetResponse.GatewayIPV6 | null;

  handshakeLatencyMs?: number | null;

  ispIpv4?: FleetStatusGetResponse.ISPIPV4 | null;

  ispIpv6?: FleetStatusGetResponse.ISPIPV6 | null;

  metal?: string | null;

  networkRcvdBps?: number | null;

  networkSentBps?: number | null;

  networkSsid?: string | null;

  /**
   * User contact email address
   */
  personEmail?: string;

  ramAvailableKb?: number | null;

  ramUsedPct?: number | null;

  ramUsedPctByApp?: Array<FleetStatusGetResponse.RamUsedPctByApp> | null;

  /**
   * Device registration identifier (UUID v4). On multi-user devices, this uniquely
   * identifies a user's registration on the device.
   */
  registrationId?: string | null;

  /**
   * Round-trip time statistics for the WARP tunnel.
   */
  rtt?: FleetStatusGetResponse.RTT | null;

  switchLocked?: boolean | null;

  /**
   * WARP tunnel packet and byte counters.
   */
  tunnelStats?: FleetStatusGetResponse.TunnelStats | null;

  tunnelType?: string | null;

  wifiStrengthDbm?: number | null;
}

export namespace FleetStatusGetResponse {
  export interface CPUPctByApp {
    /**
     * CPU usage percentage, on a scale of 0 to 100.
     */
    cpu_pct?: number | null;

    /**
     * Application name.
     */
    name?: string | null;
  }

  export interface DeviceIPV4 {
    address?: string | null;

    asn?: number | null;

    aso?: string | null;

    location?: DeviceIPV4.Location;

    name?: string | null;

    netmask?: string | null;

    /**
     * IP version (`1` for IPv4, `2` for IPv6, `0` if unknown).
     */
    version?: number;
  }

  export namespace DeviceIPV4 {
    export interface Location {
      city?: string | null;

      country_iso?: string | null;

      state_iso?: string | null;

      zip?: string | null;
    }
  }

  export interface DeviceIPV6 {
    address?: string | null;

    asn?: number | null;

    aso?: string | null;

    location?: DeviceIPV6.Location;

    name?: string | null;

    netmask?: string | null;

    /**
     * IP version (`1` for IPv4, `2` for IPv6, `0` if unknown).
     */
    version?: number;
  }

  export namespace DeviceIPV6 {
    export interface Location {
      city?: string | null;

      country_iso?: string | null;

      state_iso?: string | null;

      zip?: string | null;
    }
  }

  export interface GatewayIPV4 {
    address?: string | null;

    asn?: number | null;

    aso?: string | null;

    location?: GatewayIPV4.Location;

    name?: string | null;

    netmask?: string | null;

    /**
     * IP version (`1` for IPv4, `2` for IPv6, `0` if unknown).
     */
    version?: number;
  }

  export namespace GatewayIPV4 {
    export interface Location {
      city?: string | null;

      country_iso?: string | null;

      state_iso?: string | null;

      zip?: string | null;
    }
  }

  export interface GatewayIPV6 {
    address?: string | null;

    asn?: number | null;

    aso?: string | null;

    location?: GatewayIPV6.Location;

    name?: string | null;

    netmask?: string | null;

    /**
     * IP version (`1` for IPv4, `2` for IPv6, `0` if unknown).
     */
    version?: number;
  }

  export namespace GatewayIPV6 {
    export interface Location {
      city?: string | null;

      country_iso?: string | null;

      state_iso?: string | null;

      zip?: string | null;
    }
  }

  export interface ISPIPV4 {
    address?: string | null;

    asn?: number | null;

    aso?: string | null;

    location?: ISPIPV4.Location;

    name?: string | null;

    netmask?: string | null;

    /**
     * IP version (`1` for IPv4, `2` for IPv6, `0` if unknown).
     */
    version?: number;
  }

  export namespace ISPIPV4 {
    export interface Location {
      city?: string | null;

      country_iso?: string | null;

      state_iso?: string | null;

      zip?: string | null;
    }
  }

  export interface ISPIPV6 {
    address?: string | null;

    asn?: number | null;

    aso?: string | null;

    location?: ISPIPV6.Location;

    name?: string | null;

    netmask?: string | null;

    /**
     * IP version (`1` for IPv4, `2` for IPv6, `0` if unknown).
     */
    version?: number;
  }

  export namespace ISPIPV6 {
    export interface Location {
      city?: string | null;

      country_iso?: string | null;

      state_iso?: string | null;

      zip?: string | null;
    }
  }

  export interface RamUsedPctByApp {
    /**
     * Application name.
     */
    name?: string | null;

    /**
     * RAM usage percentage, on a scale of 0 to 100.
     */
    ram_used_pct?: number | null;
  }

  /**
   * Round-trip time statistics for the WARP tunnel.
   */
  export interface RTT {
    /**
     * Minimum round-trip time in microseconds.
     */
    minRttUs?: RTT.MinRTTUs | null;

    /**
     * Round-trip time in microseconds.
     */
    rttUs?: RTT.RTTUs | null;

    /**
     * Round-trip time variance in microseconds.
     */
    rttVarUs?: RTT.RTTVarUs | null;
  }

  export namespace RTT {
    /**
     * Minimum round-trip time in microseconds.
     */
    export interface MinRTTUs {
      downstream?: number | null;

      upstream?: number | null;
    }

    /**
     * Round-trip time in microseconds.
     */
    export interface RTTUs {
      downstream?: number | null;

      upstream?: number | null;
    }

    /**
     * Round-trip time variance in microseconds.
     */
    export interface RTTVarUs {
      downstream?: number | null;

      upstream?: number | null;
    }
  }

  /**
   * WARP tunnel packet and byte counters.
   */
  export interface TunnelStats {
    /**
     * Number of bytes lost, split by direction.
     */
    bytesLost?: TunnelStats.BytesLost | null;

    /**
     * Number of bytes received, split by direction.
     */
    bytesReceived?: TunnelStats.BytesReceived | null;

    /**
     * Number of bytes retransmitted, split by direction.
     */
    bytesRetransmitted?: TunnelStats.BytesRetransmitted | null;

    /**
     * Number of bytes sent, split by direction.
     */
    bytesSent?: TunnelStats.BytesSent | null;

    /**
     * Number of packets lost, split by direction.
     */
    packetsLost?: TunnelStats.PacketsLost | null;

    /**
     * Number of packets received, split by direction.
     */
    packetsReceived?: TunnelStats.PacketsReceived | null;

    /**
     * Number of packets retransmitted, split by direction.
     */
    packetsRetransmitted?: TunnelStats.PacketsRetransmitted | null;

    /**
     * Number of packets sent, split by direction.
     */
    packetsSent?: TunnelStats.PacketsSent | null;

    /**
     * The measurement window duration in milliseconds.
     */
    statsWindowMs?: number | null;
  }

  export namespace TunnelStats {
    /**
     * Number of bytes lost, split by direction.
     */
    export interface BytesLost {
      downstream?: number | null;

      upstream?: number | null;
    }

    /**
     * Number of bytes received, split by direction.
     */
    export interface BytesReceived {
      downstream?: number | null;

      upstream?: number | null;
    }

    /**
     * Number of bytes retransmitted, split by direction.
     */
    export interface BytesRetransmitted {
      downstream?: number | null;

      upstream?: number | null;
    }

    /**
     * Number of bytes sent, split by direction.
     */
    export interface BytesSent {
      downstream?: number | null;

      upstream?: number | null;
    }

    /**
     * Number of packets lost, split by direction.
     */
    export interface PacketsLost {
      downstream?: number | null;

      upstream?: number | null;
    }

    /**
     * Number of packets received, split by direction.
     */
    export interface PacketsReceived {
      downstream?: number | null;

      upstream?: number | null;
    }

    /**
     * Number of packets retransmitted, split by direction.
     */
    export interface PacketsRetransmitted {
      downstream?: number | null;

      upstream?: number | null;
    }

    /**
     * Number of packets sent, split by direction.
     */
    export interface PacketsSent {
      downstream?: number | null;

      upstream?: number | null;
    }
  }
}

export interface FleetStatusGetParams {
  /**
   * Path param: Unique identifier linked to an account.
   */
  account_id: string;

  /**
   * Query param: Number of minutes before current time.
   */
  since_minutes: number;

  /**
   * Query param: List of data centers to filter results.
   */
  colo?: string;

  /**
   * Query param: Current time in ISO format.
   */
  time_now?: string;
}

export declare namespace FleetStatus {
  export {
    type FleetStatusGetResponse as FleetStatusGetResponse,
    type FleetStatusGetParams as FleetStatusGetParams,
  };
}
