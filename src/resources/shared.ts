// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from 'cloudflare/resources/shared';
import * as LoadBalancersAPI from 'cloudflare/resources/load-balancers/load-balancers';
import * as PoolsAPI from 'cloudflare/resources/user/load-balancers/pools';
import * as TunnelsAPI from 'cloudflare/resources/zero-trust/tunnels/tunnels';
import { V4PagePaginationArray } from 'cloudflare/pagination';

export interface ErrorData {
  code?: number;

  message?: string;
}

export interface Identifier {
  /**
   * Identifier
   */
  id?: string;
}

export interface ResponseInfo {
  code: number;

  message: string;
}

export type Result = Result.UnionMember0 | Result.AaaAPIResponseCommon;

export namespace Result {
  export interface UnionMember0 {
    errors?: unknown | null;

    messages?: Array<unknown>;

    result?: Array<UnionMember0.Result>;

    success?: boolean;
  }

  export namespace UnionMember0 {
    export interface Result {
      /**
       * A string that uniquely identifies the audit log.
       */
      id?: string;

      action?: Result.Action;

      actor?: Result.Actor;

      /**
       * The source of the event.
       */
      interface?: string;

      /**
       * An object which can lend more context to the action being logged. This is a
       * flexible value and varies between different actions.
       */
      metadata?: unknown;

      /**
       * The new value of the resource that was modified.
       */
      newValue?: string;

      /**
       * The value of the resource before it was modified.
       */
      oldValue?: string;

      owner?: Result.Owner;

      resource?: Result.Resource;

      /**
       * A UTC RFC3339 timestamp that specifies when the action being logged occured.
       */
      when?: string;
    }

    export namespace Result {
      export interface Action {
        /**
         * A boolean that indicates if the action attempted was successful.
         */
        result?: boolean;

        /**
         * A short string that describes the action that was performed.
         */
        type?: string;
      }

      export interface Actor {
        /**
         * The ID of the actor that performed the action. If a user performed the action,
         * this will be their User ID.
         */
        id?: string;

        /**
         * The email of the user that performed the action.
         */
        email?: string;

        /**
         * The IP address of the request that performed the action.
         */
        ip?: string;

        /**
         * The type of actor, whether a User, Cloudflare Admin, or an Automated System.
         */
        type?: 'user' | 'admin' | 'Cloudflare';
      }

      export interface Owner {
        /**
         * Identifier
         */
        id?: string;
      }

      export interface Resource {
        /**
         * An identifier for the resource that was affected by the action.
         */
        id?: string;

        /**
         * A short string that describes the resource that was affected by the action.
         */
        type?: string;
      }
    }
  }

  export interface AaaAPIResponseCommon {
    errors: Array<Shared.ResponseInfo>;

    messages: Array<Shared.ResponseInfo>;

    result: Shared.UnnamedSchemaRefEc4d85c3d1bcc6b3b7e99c199ae99846;

    /**
     * Whether the API call was successful
     */
    success: true;
  }
}

export interface UnnamedSchemaRef025497b7e63379c31929636b5186e45c {
  /**
   * Monitored pool IDs mapped to their respective names.
   */
  pools?: Record<string, string>;

  preview_id?: string;
}

export interface UnnamedSchemaRef2173d81a0b2d332c9e2ac46900fe8bb9 {
  name: string;

  value: string;
}

export interface UnnamedSchemaRef23001f1f0b697900e282236466a95fa3 {
  batch_size?: number;

  max_retries?: number;

  max_wait_time_ms?: number;
}

/**
 * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
 */
export type UnnamedSchemaRef33f2e3917f3fe46ad98af0acbb1d9a19 =
  | UnnamedSchemaRef33f2e3917f3fe46ad98af0acbb1d9a19.TunnelCfdTunnel
  | TunnelsAPI.WARPConnectorTunnel;

export namespace UnnamedSchemaRef33f2e3917f3fe46ad98af0acbb1d9a19 {
  /**
   * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
   */
  export interface TunnelCfdTunnel {
    /**
     * UUID of the tunnel.
     */
    id?: string;

    /**
     * Cloudflare account ID
     */
    account_tag?: string;

    /**
     * The Cloudflare Tunnel connections between your origin and Cloudflare's edge.
     */
    connections?: Array<TunnelCfdTunnel.Connection>;

    /**
     * Timestamp of when the tunnel established at least one connection to Cloudflare's
     * edge. If `null`, the tunnel is inactive.
     */
    conns_active_at?: string | null;

    /**
     * Timestamp of when the tunnel became inactive (no connections to Cloudflare's
     * edge). If `null`, the tunnel is active.
     */
    conns_inactive_at?: string | null;

    /**
     * Timestamp of when the tunnel was created.
     */
    created_at?: string;

    /**
     * Timestamp of when the tunnel was deleted. If `null`, the tunnel has not been
     * deleted.
     */
    deleted_at?: string | null;

    /**
     * Metadata associated with the tunnel.
     */
    metadata?: unknown;

    /**
     * A user-friendly name for the tunnel.
     */
    name?: string;

    /**
     * If `true`, the tunnel can be configured remotely from the Zero Trust dashboard.
     * If `false`, the tunnel must be configured locally on the origin machine.
     */
    remote_config?: boolean;

    /**
     * The status of the tunnel. Valid values are `inactive` (tunnel has never been
     * run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy
     * state), `healthy` (tunnel is active and able to serve traffic), or `down`
     * (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
     */
    status?: string;

    /**
     * The type of tunnel.
     */
    tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';
  }

  export namespace TunnelCfdTunnel {
    export interface Connection {
      /**
       * UUID of the Cloudflare Tunnel connection.
       */
      id?: string;

      /**
       * UUID of the cloudflared instance.
       */
      client_id?: unknown;

      /**
       * The cloudflared version used to establish this connection.
       */
      client_version?: string;

      /**
       * The Cloudflare data center used for this connection.
       */
      colo_name?: string;

      /**
       * Cloudflare continues to track connections for several minutes after they
       * disconnect. This is an optimization to improve latency and reliability of
       * reconnecting. If `true`, the connection has disconnected but is still being
       * tracked. If `false`, the connection is actively serving traffic.
       */
      is_pending_reconnect?: boolean;

      /**
       * Timestamp of when the connection was established.
       */
      opened_at?: string;

      /**
       * The public IP address of the host running cloudflared.
       */
      origin_ip?: string;

      /**
       * UUID of the Cloudflare Tunnel connection.
       */
      uuid?: string;
    }
  }
}

/**
 * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
 */
export type UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8 =
  | UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8.TunnelCfdTunnel
  | TunnelsAPI.WARPConnectorTunnel;

export namespace UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8 {
  /**
   * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
   */
  export interface TunnelCfdTunnel {
    /**
     * UUID of the tunnel.
     */
    id?: string;

    /**
     * Cloudflare account ID
     */
    account_tag?: string;

    /**
     * The Cloudflare Tunnel connections between your origin and Cloudflare's edge.
     */
    connections?: Array<TunnelCfdTunnel.Connection>;

    /**
     * Timestamp of when the tunnel established at least one connection to Cloudflare's
     * edge. If `null`, the tunnel is inactive.
     */
    conns_active_at?: string | null;

    /**
     * Timestamp of when the tunnel became inactive (no connections to Cloudflare's
     * edge). If `null`, the tunnel is active.
     */
    conns_inactive_at?: string | null;

    /**
     * Timestamp of when the tunnel was created.
     */
    created_at?: string;

    /**
     * Timestamp of when the tunnel was deleted. If `null`, the tunnel has not been
     * deleted.
     */
    deleted_at?: string | null;

    /**
     * Metadata associated with the tunnel.
     */
    metadata?: unknown;

    /**
     * A user-friendly name for the tunnel.
     */
    name?: string;

    /**
     * If `true`, the tunnel can be configured remotely from the Zero Trust dashboard.
     * If `false`, the tunnel must be configured locally on the origin machine.
     */
    remote_config?: boolean;

    /**
     * The status of the tunnel. Valid values are `inactive` (tunnel has never been
     * run), `degraded` (tunnel is active and able to serve traffic but in an unhealthy
     * state), `healthy` (tunnel is active and able to serve traffic), or `down`
     * (tunnel can not serve traffic as it has no connections to the Cloudflare Edge).
     */
    status?: string;

    /**
     * The type of tunnel.
     */
    tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';
  }

  export namespace TunnelCfdTunnel {
    export interface Connection {
      /**
       * UUID of the Cloudflare Tunnel connection.
       */
      id?: string;

      /**
       * UUID of the cloudflared instance.
       */
      client_id?: unknown;

      /**
       * The cloudflared version used to establish this connection.
       */
      client_version?: string;

      /**
       * The Cloudflare data center used for this connection.
       */
      colo_name?: string;

      /**
       * Cloudflare continues to track connections for several minutes after they
       * disconnect. This is an optimization to improve latency and reliability of
       * reconnecting. If `true`, the connection has disconnected but is still being
       * tracked. If `false`, the connection is actively serving traffic.
       */
      is_pending_reconnect?: boolean;

      /**
       * Timestamp of when the connection was established.
       */
      opened_at?: string;

      /**
       * The public IP address of the host running cloudflared.
       */
      origin_ip?: string;

      /**
       * UUID of the Cloudflare Tunnel connection.
       */
      uuid?: string;
    }
  }
}

export type UnnamedSchemaRef602dd5f63eab958d53da61434dec08f0 = unknown | string;

export type UnnamedSchemaRef619309774d07ec6904f1e354560d6028 = unknown;

export type UnnamedSchemaRef65e3c8c1a9c4638ec25cdbbaca7165c1 = unknown | Array<unknown> | string;

export type UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 = unknown | Array<unknown> | string;

/**
 * An object configuring the rule's logging behavior.
 */
export interface UnnamedSchemaRef70f2c6ccd8a405358ac7ef8fc3d6751c {
  /**
   * Whether to generate a log when the rule matches.
   */
  enabled: boolean;
}

export type UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f = unknown | string;

export type UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a = unknown | string | null;

export type UnnamedSchemaRefB0ec5cc02c98b665099a5707a2db4ea6 = Array<PoolsAPI.Pool>;

export interface UnnamedSchemaRefB52ad7cf99890d19f16edcd84d16ef5b {
  id?: string;

  /**
   * Do not validate the certificate when monitor use HTTPS. This parameter is
   * currently only valid for HTTP and HTTPS monitors.
   */
  allow_insecure?: boolean;

  /**
   * To be marked unhealthy the monitored origin must fail this healthcheck N
   * consecutive times.
   */
  consecutive_down?: number;

  /**
   * To be marked healthy the monitored origin must pass this healthcheck N
   * consecutive times.
   */
  consecutive_up?: number;

  created_on?: string;

  /**
   * Object description.
   */
  description?: string;

  /**
   * A case-insensitive sub-string to look for in the response body. If this string
   * is not found, the origin will be marked as unhealthy. This parameter is only
   * valid for HTTP and HTTPS monitors.
   */
  expected_body?: string;

  /**
   * The expected HTTP response code or code range of the health check. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  expected_codes?: string;

  /**
   * Follow redirects if returned by the origin. This parameter is only valid for
   * HTTP and HTTPS monitors.
   */
  follow_redirects?: boolean;

  /**
   * The HTTP request headers to send in the health check. It is recommended you set
   * a Host header by default. The User-Agent header cannot be overridden. This
   * parameter is only valid for HTTP and HTTPS monitors.
   */
  header?: unknown;

  /**
   * The interval between each health check. Shorter intervals may improve failover
   * time, but will increase load on the origins as we check from multiple locations.
   */
  interval?: number;

  /**
   * The method to use for the health check. This defaults to 'GET' for HTTP/HTTPS
   * based checks and 'connection_established' for TCP based health checks.
   */
  method?: string;

  modified_on?: string;

  /**
   * The endpoint path you want to conduct a health check against. This parameter is
   * only valid for HTTP and HTTPS monitors.
   */
  path?: string;

  /**
   * The port number to connect to for the health check. Required for TCP, UDP, and
   * SMTP checks. HTTP and HTTPS checks should only define the port when using a
   * non-standard port (HTTP: default 80, HTTPS: default 443).
   */
  port?: number;

  /**
   * Assign this monitor to emulate the specified zone while probing. This parameter
   * is only valid for HTTP and HTTPS monitors.
   */
  probe_zone?: string;

  /**
   * The number of retries to attempt in case of a timeout before marking the origin
   * as unhealthy. Retries are attempted immediately.
   */
  retries?: number;

  /**
   * The timeout (in seconds) before marking the health check as failed.
   */
  timeout?: number;

  /**
   * The protocol to use for the health check. Currently supported protocols are
   * 'HTTP','HTTPS', 'TCP', 'ICMP-PING', 'UDP-ICMP', and 'SMTP'.
   */
  type?: 'http' | 'https' | 'tcp' | 'udp_icmp' | 'icmp_ping' | 'smtp';
}

export interface UnnamedSchemaRefB92f86eb861cd3dee83c40884802fda6 {
  id?: string;

  /**
   * A list of regions from which to run health checks. Null means every Cloudflare
   * data center.
   */
  check_regions?: Array<LoadBalancersAPI.CheckRegion> | null;

  created_on?: string;

  /**
   * A human-readable description of the pool.
   */
  description?: string;

  /**
   * This field shows up only if the pool is disabled. This field is set with the
   * time the pool was disabled at.
   */
  disabled_at?: string;

  /**
   * Whether to enable (the default) or disable this pool. Disabled pools will not
   * receive traffic and are excluded from health checks. Disabling a pool will cause
   * any load balancers using it to failover to the next pool (if any).
   */
  enabled?: boolean;

  /**
   * The latitude of the data center containing the origins used in this pool in
   * decimal degrees. If this is set, longitude must also be set.
   */
  latitude?: number;

  /**
   * Configures load shedding policies and percentages for the pool.
   */
  load_shedding?: LoadBalancersAPI.LoadShedding;

  /**
   * The longitude of the data center containing the origins used in this pool in
   * decimal degrees. If this is set, latitude must also be set.
   */
  longitude?: number;

  /**
   * The minimum number of origins that must be healthy for this pool to serve
   * traffic. If the number of healthy origins falls below this number, the pool will
   * be marked unhealthy and will failover to the next available pool.
   */
  minimum_origins?: number;

  modified_on?: string;

  /**
   * The ID of the Monitor to use for checking the health of origins within this
   * pool.
   */
  monitor?: unknown;

  /**
   * A short name (tag) for the pool. Only alphanumeric characters, hyphens, and
   * underscores are allowed.
   */
  name?: string;

  /**
   * This field is now deprecated. It has been moved to Cloudflare's Centralized
   * Notification service
   * https://developers.cloudflare.com/fundamentals/notifications/. The email address
   * to send health status notifications to. This can be an individual mailbox or a
   * mailing list. Multiple emails can be supplied as a comma delimited list.
   */
  notification_email?: string;

  /**
   * Filter pool and origin health notifications by resource type or health status.
   * Use null to reset.
   */
  notification_filter?: LoadBalancersAPI.NotificationFilter | null;

  /**
   * Configures origin steering for the pool. Controls how origins are selected for
   * new sessions and traffic without session affinity.
   */
  origin_steering?: LoadBalancersAPI.OriginSteering;

  /**
   * The list of origins within this pool. Traffic directed at this pool is balanced
   * across all currently healthy origins, provided the pool itself is healthy.
   */
  origins?: Array<LoadBalancersAPI.Origin>;
}

export interface UnnamedSchemaRefCc2ac1a037e5d6702fc77b3bcb527854 {
  valid?: boolean;
}

export type UnnamedSchemaRefD8600eb4758b3ae35607a0327bcd691b = '*' | 'referral' | 'referrer';

export type UnnamedSchemaRefEc4d85c3d1bcc6b3b7e99c199ae99846 = unknown | Array<unknown> | string;

/**
 * JSON encoded metadata about the uploaded parts and Worker configuration.
 */
export interface UnnamedSchemaRefEe1e79edcb234d14c4dd266880f2fd24 {
  /**
   * Name of the part in the multipart request that contains the script (e.g. the
   * file adding a listener to the `fetch` event). Indicates a
   * `service worker syntax` Worker.
   */
  body_part?: string;

  /**
   * Name of the part in the multipart request that contains the main module (e.g.
   * the file exporting a `fetch` handler). Indicates a `module syntax` Worker.
   */
  main_module?: string;
}

export class UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8sV4PagePaginationArray extends V4PagePaginationArray<UnnamedSchemaRef413ab4522f0bb93f63444799121fe2f8> {}
