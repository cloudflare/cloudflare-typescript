// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Configurations extends APIResource {
  /**
   * Adds or updates the high-availability configuration for a WARP Connector tunnel.
   *
   * @example
   * ```ts
   * const configuration =
   *   await client.zeroTrust.tunnels.warpConnector.configurations.update(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       ha_mode: 'aws',
   *     },
   *   );
   * ```
   */
  update(
    tunnelId: string,
    params: ConfigurationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/warp_connector/${tunnelId}/configurations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigurationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the high-availability configuration for a WARP Connector tunnel.
   *
   * @example
   * ```ts
   * const configuration =
   *   await client.zeroTrust.tunnels.warpConnector.configurations.get(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    tunnelId: string,
    params: ConfigurationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/warp_connector/${tunnelId}/configurations`,
        options,
      ) as Core.APIPromise<{ result: ConfigurationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConfigurationUpdateResponse {
  /**
   * Monotonically increasing configuration version, incremented on each PUT.
   */
  configuration_version: number;

  /**
   * Timestamp of when the resource was created.
   */
  created_at: string;

  /**
   * High-availability mode for the WARP Connector tunnel. `none` means HA is enabled
   * but no provider is configured yet (newly created tunnels default to this).
   * `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move for
   * failover. `local` uses virtual IPs (VIPs) on the local interface.
   */
  ha_mode: 'none' | 'disabled' | 'aws' | 'local';

  /**
   * UUID of the tunnel.
   */
  tunnel_id: string;

  /**
   * Provider-specific configuration. Present for `aws` and `local` modes.
   */
  config?:
    | ConfigurationUpdateResponse.TunnelMeshAwsConfig
    | ConfigurationUpdateResponse.TunnelMeshLocalConfig
    | null;

  /**
   * Timestamp of the last update. Null if never updated.
   */
  updated_at?: string | null;
}

export namespace ConfigurationUpdateResponse {
  export interface TunnelMeshAwsConfig {
    /**
     * Floating Network Resource ID — the secondary ENI that is moved between nodes on
     * failover.
     */
    fnr_id: string;
  }

  export interface TunnelMeshLocalConfig {
    /**
     * VIPs to assign on the CloudflareWARP interface.
     */
    vips: Array<TunnelMeshLocalConfig.Vip>;

    /**
     * VIPs to clean up on demotion or version drift.
     */
    vips_previous?: Array<TunnelMeshLocalConfig.VipsPrevious>;
  }

  export namespace TunnelMeshLocalConfig {
    export interface Vip {
      /**
       * Virtual IP address (IPv4 or IPv6).
       */
      address: string;
    }

    export interface VipsPrevious {
      /**
       * Virtual IP address (IPv4 or IPv6).
       */
      address: string;
    }
  }
}

export interface ConfigurationGetResponse {
  /**
   * Monotonically increasing configuration version, incremented on each PUT.
   */
  configuration_version: number;

  /**
   * Timestamp of when the resource was created.
   */
  created_at: string;

  /**
   * High-availability mode for the WARP Connector tunnel. `none` means HA is enabled
   * but no provider is configured yet (newly created tunnels default to this).
   * `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move for
   * failover. `local` uses virtual IPs (VIPs) on the local interface.
   */
  ha_mode: 'none' | 'disabled' | 'aws' | 'local';

  /**
   * UUID of the tunnel.
   */
  tunnel_id: string;

  /**
   * Provider-specific configuration. Present for `aws` and `local` modes.
   */
  config?:
    | ConfigurationGetResponse.TunnelMeshAwsConfig
    | ConfigurationGetResponse.TunnelMeshLocalConfig
    | null;

  /**
   * Timestamp of the last update. Null if never updated.
   */
  updated_at?: string | null;
}

export namespace ConfigurationGetResponse {
  export interface TunnelMeshAwsConfig {
    /**
     * Floating Network Resource ID — the secondary ENI that is moved between nodes on
     * failover.
     */
    fnr_id: string;
  }

  export interface TunnelMeshLocalConfig {
    /**
     * VIPs to assign on the CloudflareWARP interface.
     */
    vips: Array<TunnelMeshLocalConfig.Vip>;

    /**
     * VIPs to clean up on demotion or version drift.
     */
    vips_previous?: Array<TunnelMeshLocalConfig.VipsPrevious>;
  }

  export namespace TunnelMeshLocalConfig {
    export interface Vip {
      /**
       * Virtual IP address (IPv4 or IPv6).
       */
      address: string;
    }

    export interface VipsPrevious {
      /**
       * Virtual IP address (IPv4 or IPv6).
       */
      address: string;
    }
  }
}

export interface ConfigurationUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: High-availability mode for the WARP Connector tunnel. `none` means
   * HA is enabled but no provider is configured yet (newly created tunnels default
   * to this). `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move
   * for failover. `local` uses virtual IPs (VIPs) on the local interface.
   */
  ha_mode: 'none' | 'disabled' | 'aws' | 'local';

  /**
   * Body param: Provider-specific configuration. Required shape depends on ha_mode.
   * For `aws`, must contain `fnr_id`. For `local`, must contain `vips`. For `none`
   * and `disabled`, must be empty or omitted.
   */
  config?:
    | ConfigurationUpdateParams.TunnelMeshAwsConfig
    | ConfigurationUpdateParams.TunnelMeshLocalConfig
    | unknown
    | null;
}

export namespace ConfigurationUpdateParams {
  export interface TunnelMeshAwsConfig {
    /**
     * Floating Network Resource ID — the secondary ENI that is moved between nodes on
     * failover.
     */
    fnr_id: string;
  }

  export interface TunnelMeshLocalConfig {
    /**
     * VIPs to assign on the CloudflareWARP interface.
     */
    vips: Array<TunnelMeshLocalConfig.Vip>;

    /**
     * VIPs to clean up on demotion or version drift.
     */
    vips_previous?: Array<TunnelMeshLocalConfig.VipsPrevious>;
  }

  export namespace TunnelMeshLocalConfig {
    export interface Vip {
      /**
       * Virtual IP address (IPv4 or IPv6).
       */
      address: string;
    }

    export interface VipsPrevious {
      /**
       * Virtual IP address (IPv4 or IPv6).
       */
      address: string;
    }
  }
}

export interface ConfigurationGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Configurations {
  export {
    type ConfigurationUpdateResponse as ConfigurationUpdateResponse,
    type ConfigurationGetResponse as ConfigurationGetResponse,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
    type ConfigurationGetParams as ConfigurationGetParams,
  };
}
