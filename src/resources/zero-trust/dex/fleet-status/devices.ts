// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Devices extends APIResource {
  /**
   * List details for devices using WARP.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const deviceListResponse of client.zeroTrust.dex.fleetStatus.devices.list(
   *   {
   *     account_id: '01a7362d577a6c3019a474fd6f485823',
   *     from: '2023-10-11 00:00:00+00',
   *     page: 1,
   *     per_page: 10,
   *     to: '2023-10-11 00:00:00+00',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DeviceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DeviceListResponsesV4PagePaginationArray, DeviceListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dex/fleet-status/devices`,
      DeviceListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export class DeviceListResponsesV4PagePaginationArray extends V4PagePaginationArray<DeviceListResponse> {}

export interface DeviceListResponse {
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

  cpuPctByApp?: Array<DeviceListResponse.CPUPctByApp> | null;

  deviceIpv4?: DeviceListResponse.DeviceIPV4 | null;

  deviceIpv6?: DeviceListResponse.DeviceIPV6 | null;

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

  gatewayIpv4?: DeviceListResponse.GatewayIPV4 | null;

  gatewayIpv6?: DeviceListResponse.GatewayIPV6 | null;

  handshakeLatencyMs?: number | null;

  ispIpv4?: DeviceListResponse.ISPIPV4 | null;

  ispIpv6?: DeviceListResponse.ISPIPV6 | null;

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

  ramUsedPctByApp?: Array<DeviceListResponse.RamUsedPctByApp> | null;

  /**
   * Device registration identifier (UUID v4). On multi-user devices, this uniquely
   * identifies a user's registration on the device.
   */
  registrationId?: string | null;

  /**
   * Round-trip time statistics for the WARP tunnel.
   */
  rtt?: DeviceListResponse.RTT | null;

  switchLocked?: boolean | null;

  /**
   * WARP tunnel packet and byte counters.
   */
  tunnelStats?: DeviceListResponse.TunnelStats | null;

  tunnelType?: string | null;

  wifiStrengthDbm?: number | null;
}

export namespace DeviceListResponse {
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

export interface DeviceListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Unique identifier linked to an account.
   */
  account_id: string;

  /**
   * Query param: Start of the time range to query. Timestamp can be provided in ISO
   * 8601 datetime format or milliseconds since epoch.
   */
  from: string;

  /**
   * Query param: End of the time range to query. Timestamp can be provided in ISO
   * 8601 datetime format or milliseconds since epoch.
   */
  to: string;

  /**
   * Query param: Cloudflare colo airport code.
   */
  colo?: string;

  /**
   * Query param: Device-specific ID, given as UUID.
   */
  device_id?: string;

  /**
   * Query param: The mode under which the WARP client is run.
   */
  mode?: string;

  /**
   * Query param: Operating system.
   */
  platform?: string;

  /**
   * Query param: Dimension to sort results by.
   */
  sort_by?: 'colo' | 'device_id' | 'mode' | 'platform' | 'status' | 'timestamp' | 'version';

  /**
   * Query param: Source:
   *
   * - `hourly` - device details aggregated hourly, up to 7 days prior
   * - `last_seen` - device details, up to 60 minutes prior. Time windows exceeding
   *   60 minutes will be rejected from June 1st, 2026. Please use 'hourly' or 'raw'
   *   instead for longer time ranges.
   * - `raw` - device details, up to 7 days prior
   */
  source?: 'last_seen' | 'hourly' | 'raw';

  /**
   * Query param: Network status.
   */
  status?: string;

  /**
   * Query param: WARP client version.
   */
  version?: string;
}

Devices.DeviceListResponsesV4PagePaginationArray = DeviceListResponsesV4PagePaginationArray;

export declare namespace Devices {
  export {
    type DeviceListResponse as DeviceListResponse,
    DeviceListResponsesV4PagePaginationArray as DeviceListResponsesV4PagePaginationArray,
    type DeviceListParams as DeviceListParams,
  };
}
