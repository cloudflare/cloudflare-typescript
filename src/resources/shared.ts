// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from 'cloudflare/resources/shared';
import * as TunnelsAPI from 'cloudflare/resources/zero-trust/tunnels/tunnels';

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

export interface PaginationInfo {
  /**
   * Total number of results for the requested service
   */
  count?: number;

  /**
   * Current page within paginated list of results
   */
  page?: number;

  /**
   * Number of results per page of results
   */
  per_page?: number;

  /**
   * Total results available without any search parameters
   */
  total_count?: number;
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

    result: unknown | Array<unknown> | string;

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

export type UnnamedSchemaRef619309774d07ec6904f1e354560d6028 = unknown;

/**
 * An object configuring the rule's logging behavior.
 */
export interface UnnamedSchemaRef70f2c6ccd8a405358ac7ef8fc3d6751c {
  /**
   * Whether to generate a log when the rule matches.
   */
  enabled: boolean;
}

export type UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a = unknown | string | null;

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
