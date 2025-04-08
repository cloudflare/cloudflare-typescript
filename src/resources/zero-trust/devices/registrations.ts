// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Registrations extends APIResource {
  /**
   * List WARP registrations.
   */
  list(
    params: RegistrationListParams,
    options?: RequestOptions,
  ): PagePromise<RegistrationListResponsesCursorPagination, RegistrationListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/registrations`,
      CursorPagination<RegistrationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a WARP registration.
   */
  delete(
    registrationID: string,
    params: RegistrationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RegistrationDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/devices/registrations/${registrationID}`,
        options,
      ) as APIPromise<{ result: RegistrationDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a list of WARP registrations.
   */
  bulkDelete(
    params: RegistrationBulkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RegistrationBulkDeleteResponse | null> {
    const { account_id, id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/devices/registrations`, {
        query: { id },
        ...options,
      }) as APIPromise<{ result: RegistrationBulkDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single WARP registration.
   */
  get(
    registrationID: string,
    params: RegistrationGetParams,
    options?: RequestOptions,
  ): APIPromise<RegistrationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/devices/registrations/${registrationID}`,
        options,
      ) as APIPromise<{ result: RegistrationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Revokes a list of WARP registrations.
   */
  revoke(
    params: RegistrationRevokeParams,
    options?: RequestOptions,
  ): APIPromise<RegistrationRevokeResponse | null> {
    const { account_id, id } = params;
    return (
      this._client.post(path`/accounts/${account_id}/devices/registrations/revoke`, {
        query: { id },
        ...options,
      }) as APIPromise<{ result: RegistrationRevokeResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Unrevokes a list of WARP registrations.
   */
  unrevoke(
    params: RegistrationUnrevokeParams,
    options?: RequestOptions,
  ): APIPromise<RegistrationUnrevokeResponse | null> {
    const { account_id, id } = params;
    return (
      this._client.post(path`/accounts/${account_id}/devices/registrations/unrevoke`, {
        query: { id },
        ...options,
      }) as APIPromise<{ result: RegistrationUnrevokeResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RegistrationListResponsesCursorPagination = CursorPagination<RegistrationListResponse>;

/**
 * A WARP configuration tied to a single user. Multiple registrations can be
 * created from a single WARP device.
 */
export interface RegistrationListResponse {
  /**
   * The ID of the registration.
   */
  id: string;

  /**
   * The RFC3339 timestamp when the registration was created.
   */
  created_at: string;

  /**
   * Device details embedded inside of a registration.
   */
  device: RegistrationListResponse.Device;

  /**
   * The public key used to connect to the Cloudflare network.
   */
  key: string;

  /**
   * The RFC3339 timestamp when the registration was last seen.
   */
  last_seen_at: string;

  /**
   * The RFC3339 timestamp when the registration was last updated.
   */
  updated_at: string;

  /**
   * The RFC3339 timestamp when the registration was deleted.
   */
  deleted_at?: string | null;

  /**
   * The type of encryption key used by the WARP client for the active key. Currently
   * 'curve25519' for WireGuard and 'secp256r1' for MASQUE
   */
  key_type?: string | null;

  /**
   * The RFC3339 timestamp when the registration was revoked.
   */
  revoked_at?: string | null;

  /**
   * Type of the tunnel - wireguard or masque.
   */
  tunnel_type?: string | null;

  user?: RegistrationListResponse.User;
}

export namespace RegistrationListResponse {
  /**
   * Device details embedded inside of a registration.
   */
  export interface Device {
    /**
     * The ID of the device
     */
    id: string;

    /**
     * The name of the device
     */
    name: string;

    /**
     * Version of the WARP client
     */
    client_version?: string;
  }

  export interface User {
    /**
     * UUID
     */
    id?: string;

    /**
     * The contact email address of the user.
     */
    email?: string;

    /**
     * The enrolled device user's name.
     */
    name?: string;
  }
}

export type RegistrationDeleteResponse = unknown;

export type RegistrationBulkDeleteResponse = unknown;

/**
 * A WARP configuration tied to a single user. Multiple registrations can be
 * created from a single WARP device.
 */
export interface RegistrationGetResponse {
  /**
   * The ID of the registration.
   */
  id: string;

  /**
   * The RFC3339 timestamp when the registration was created.
   */
  created_at: string;

  /**
   * Device details embedded inside of a registration.
   */
  device: RegistrationGetResponse.Device;

  /**
   * The public key used to connect to the Cloudflare network.
   */
  key: string;

  /**
   * The RFC3339 timestamp when the registration was last seen.
   */
  last_seen_at: string;

  /**
   * The RFC3339 timestamp when the registration was last updated.
   */
  updated_at: string;

  /**
   * The RFC3339 timestamp when the registration was deleted.
   */
  deleted_at?: string | null;

  /**
   * The type of encryption key used by the WARP client for the active key. Currently
   * 'curve25519' for WireGuard and 'secp256r1' for MASQUE
   */
  key_type?: string | null;

  /**
   * The RFC3339 timestamp when the registration was revoked.
   */
  revoked_at?: string | null;

  /**
   * Type of the tunnel - wireguard or masque.
   */
  tunnel_type?: string | null;

  user?: RegistrationGetResponse.User;
}

export namespace RegistrationGetResponse {
  /**
   * Device details embedded inside of a registration.
   */
  export interface Device {
    /**
     * The ID of the device
     */
    id: string;

    /**
     * The name of the device
     */
    name: string;

    /**
     * Version of the WARP client
     */
    client_version?: string;
  }

  export interface User {
    /**
     * UUID
     */
    id?: string;

    /**
     * The contact email address of the user.
     */
    email?: string;

    /**
     * The enrolled device user's name.
     */
    name?: string;
  }
}

export type RegistrationRevokeResponse = unknown;

export type RegistrationUnrevokeResponse = unknown;

export interface RegistrationListParams extends CursorPaginationParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param: Filter by registration ID.
   */
  id?: Array<string>;

  /**
   * Query param:
   */
  device?: RegistrationListParams.Device;

  /**
   * Query param:
   */
  include?: string;

  /**
   * Query param: Filter by registration details.
   */
  search?: string;

  /**
   * Query param: Filters by the last_seen timestamp - returns only registrations
   * last seen after this timestamp.
   */
  seen_after?: string;

  /**
   * Query param: Filters by the last_seen timestamp - returns only registrations
   * last seen before this timestamp.
   */
  seen_before?: string;

  /**
   * Query param: The registration field to order results by.
   */
  sort_by?: 'id' | 'user.name' | 'user.email' | 'last_seen_at' | 'created_at';

  /**
   * Query param: Sort direction.
   */
  sort_order?: 'asc' | 'desc';

  /**
   * Query param: Filter by registration status. Defaults to 'active'.
   */
  status?: 'active' | 'all' | 'revoked';

  /**
   * Query param:
   */
  user?: RegistrationListParams.User;
}

export namespace RegistrationListParams {
  export interface Device {
    /**
     * Filter by WARP device ID.
     */
    id?: string;
  }

  export interface User {
    /**
     * Filter by Access user ID
     */
    id?: Array<string>;
  }
}

export interface RegistrationDeleteParams {
  account_id: string;
}

export interface RegistrationBulkDeleteParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param: A list of registration IDs to delete.
   */
  id: Array<string>;
}

export interface RegistrationGetParams {
  account_id: string;
}

export interface RegistrationRevokeParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param: A list of registration IDs to revoke
   */
  id: Array<string>;
}

export interface RegistrationUnrevokeParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param: A list of registration IDs to unrevoke
   */
  id: Array<string>;
}

export declare namespace Registrations {
  export {
    type RegistrationListResponse as RegistrationListResponse,
    type RegistrationDeleteResponse as RegistrationDeleteResponse,
    type RegistrationBulkDeleteResponse as RegistrationBulkDeleteResponse,
    type RegistrationGetResponse as RegistrationGetResponse,
    type RegistrationRevokeResponse as RegistrationRevokeResponse,
    type RegistrationUnrevokeResponse as RegistrationUnrevokeResponse,
    type RegistrationListResponsesCursorPagination as RegistrationListResponsesCursorPagination,
    type RegistrationListParams as RegistrationListParams,
    type RegistrationDeleteParams as RegistrationDeleteParams,
    type RegistrationBulkDeleteParams as RegistrationBulkDeleteParams,
    type RegistrationGetParams as RegistrationGetParams,
    type RegistrationRevokeParams as RegistrationRevokeParams,
    type RegistrationUnrevokeParams as RegistrationUnrevokeParams,
  };
}
