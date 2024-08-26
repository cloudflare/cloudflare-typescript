// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../core'
import * as Shared from './shared';
import { SinglePage, V4PagePaginationArray } from '../pagination';

export type ASN = number

export type ASNParam = number

export interface AuditLog {
  /**
   * A string that uniquely identifies the audit log.
   */
  id?: string;

  action?: AuditLog.Action;

  actor?: AuditLog.Actor;

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

  owner?: AuditLog.Owner;

  resource?: AuditLog.Resource;

  /**
   * A UTC RFC3339 timestamp that specifies when the action being logged occured.
   */
  when?: string;
}

export namespace AuditLog {
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

/**
 * The Certificate Authority that will issue the certificate
 */
export type CertificateCA = 'digicert' | 'google' | 'lets_encrypt' | 'ssl_com'

/**
 * The Certificate Authority that will issue the certificate
 */
export type CertificateCAParam = 'digicert' | 'google' | 'lets_encrypt' | 'ssl_com'

/**
 * Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa),
 * or "keyless-certificate" (for Keyless SSL servers).
 */
export type CertificateRequestType = 'origin-rsa' | 'origin-ecc' | 'keyless-certificate'

/**
 * Signature type desired on certificate ("origin-rsa" (rsa), "origin-ecc" (ecdsa),
 * or "keyless-certificate" (for Keyless SSL servers).
 */
export type CertificateRequestTypeParam = 'origin-rsa' | 'origin-ecc' | 'keyless-certificate'

/**
 * A Cloudflare Tunnel that connects your origin to Cloudflare's edge.
 */
export interface CloudflareTunnel {
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
  connections?: Array<CloudflareTunnel.Connection>;

  /**
   * Timestamp of when the tunnel established at least one connection to Cloudflare's
   * edge. If `null`, the tunnel is inactive.
   */
  conns_active_at?: string;

  /**
   * Timestamp of when the tunnel became inactive (no connections to Cloudflare's
   * edge). If `null`, the tunnel is active.
   */
  conns_inactive_at?: string;

  /**
   * Timestamp of when the resource was created.
   */
  created_at?: string;

  /**
   * Timestamp of when the resource was deleted. If `null`, the resource has not been
   * deleted.
   */
  deleted_at?: string;

  /**
   * Metadata associated with the tunnel.
   */
  metadata?: unknown;

  /**
   * A user-friendly name for a tunnel.
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
  status?: 'inactive' | 'degraded' | 'healthy' | 'down';

  /**
   * The type of tunnel.
   */
  tun_type?: 'cfd_tunnel' | 'warp_connector' | 'ip_sec' | 'gre' | 'cni';
}

export namespace CloudflareTunnel {
  export interface Connection {
    /**
     * UUID of the Cloudflare Tunnel connection.
     */
    id?: string;

    /**
     * UUID of the Cloudflare Tunnel connector.
     */
    client_id?: string;

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

export interface LoadBalancerPreview {
  /**
   * Monitored pool IDs mapped to their respective names.
   */
  pools?: Record<string, string>;

  preview_id?: string;
}

export interface Member {
  /**
   * Membership identifier tag.
   */
  id?: string;

  /**
   * Roles assigned to this member.
   */
  roles?: Array<Member.Role>;

  /**
   * A member's status in the account.
   */
  status?: 'accepted' | 'pending';

  /**
   * Details of the user associated to the membership.
   */
  user?: Member.User;
}

export namespace Member {
  export interface Role {
    /**
     * Role identifier tag.
     */
    id: string;

    /**
     * Description of role's permissions.
     */
    description: string;

    /**
     * Role name.
     */
    name: string;

    permissions: Role.Permissions;
  }

  export namespace Role {
    export interface Permissions {
      analytics?: Shared.PermissionGrant;

      billing?: Shared.PermissionGrant;

      cache_purge?: Shared.PermissionGrant;

      dns?: Shared.PermissionGrant;

      dns_records?: Shared.PermissionGrant;

      lb?: Shared.PermissionGrant;

      logs?: Shared.PermissionGrant;

      organization?: Shared.PermissionGrant;

      ssl?: Shared.PermissionGrant;

      waf?: Shared.PermissionGrant;

      zone_settings?: Shared.PermissionGrant;

      zones?: Shared.PermissionGrant;
    }
  }

  /**
   * Details of the user associated to the membership.
   */
  export interface User {
    /**
     * The contact email address of the user.
     */
    email: string;

    /**
     * Identifier
     */
    id?: string;

    /**
     * User's first name
     */
    first_name?: string | null;

    /**
     * User's last name
     */
    last_name?: string | null;

    /**
     * Indicates whether two-factor authentication is enabled for the user account.
     * Does not apply to API authentication.
     */
    two_factor_authentication_enabled?: boolean;
  }
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

export type Permission = string

export interface PermissionGrant {
  read?: boolean;

  write?: boolean;
}

export interface PermissionGrantParam {
  read?: boolean;

  write?: boolean;
}

export interface ResponseInfo {
  code: number;

  message: string;
}

export type Result = Result.UnionMember0 | Result.AaaAPIResponseCommon

export namespace Result {
  export interface UnionMember0 {
    errors?: Array<Shared.ResponseInfo>;

    messages?: Array<Shared.ResponseInfo>;

    result?: Array<Shared.AuditLog>;

    success?: boolean;
  }

  export interface AaaAPIResponseCommon {
    errors: Array<Shared.ResponseInfo>;

    messages: Array<Shared.ResponseInfo>;

    /**
     * Whether the API call was successful
     */
    success: true;
  }
}

export interface Role {
  /**
   * Role identifier tag.
   */
  id: string;

  /**
   * Description of role's permissions.
   */
  description: string;

  /**
   * Role Name.
   */
  name: string;

  /**
   * Access permissions for this User.
   */
  permissions: Array<Permission>;
}

/**
 * Direction to order DNS records in.
 */
export type SortDirection = 'asc' | 'desc'

/**
 * Direction to order DNS records in.
 */
export type SortDirectionParam = 'asc' | 'desc'

export class RolesSinglePage extends SinglePage<Role> {
}

export class AuditLogsV4PagePaginationArray extends V4PagePaginationArray<AuditLog> {
}
