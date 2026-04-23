// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class HostnameRoutes extends APIResource {
  /**
   * Create a hostname route.
   *
   * @example
   * ```ts
   * const hostnameRoute =
   *   await client.zeroTrust.networks.hostnameRoutes.create({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *   });
   * ```
   */
  create(params: HostnameRouteCreateParams, options?: Core.RequestOptions): Core.APIPromise<HostnameRoute> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/zerotrust/routes/hostname`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HostnameRoute }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists and filters hostname routes in an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const hostnameRoute of client.zeroTrust.networks.hostnameRoutes.list(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: HostnameRouteListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<HostnameRoutesV4PagePaginationArray, HostnameRoute> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/zerotrust/routes/hostname`,
      HostnameRoutesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a hostname route.
   *
   * @example
   * ```ts
   * const hostnameRoute =
   *   await client.zeroTrust.networks.hostnameRoutes.delete(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  delete(
    hostnameRouteId: string,
    params: HostnameRouteDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameRoute> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/zerotrust/routes/hostname/${hostnameRouteId}`,
        options,
      ) as Core.APIPromise<{ result: HostnameRoute }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a hostname route.
   *
   * @example
   * ```ts
   * const hostnameRoute =
   *   await client.zeroTrust.networks.hostnameRoutes.edit(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  edit(
    hostnameRouteId: string,
    params: HostnameRouteEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameRoute> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/zerotrust/routes/hostname/${hostnameRouteId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: HostnameRoute }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a hostname route.
   *
   * @example
   * ```ts
   * const hostnameRoute =
   *   await client.zeroTrust.networks.hostnameRoutes.get(
   *     'f70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  get(
    hostnameRouteId: string,
    params: HostnameRouteGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HostnameRoute> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/zerotrust/routes/hostname/${hostnameRouteId}`,
        options,
      ) as Core.APIPromise<{ result: HostnameRoute }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class HostnameRoutesV4PagePaginationArray extends V4PagePaginationArray<HostnameRoute> {}

export interface HostnameRoute {
  /**
   * The hostname route ID.
   */
  id?: string;

  /**
   * An optional description of the hostname route.
   */
  comment?: string;

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
   * The hostname of the route.
   */
  hostname?: string;

  /**
   * UUID of the tunnel.
   */
  tunnel_id?: string;

  /**
   * A user-friendly name for a tunnel.
   */
  tunnel_name?: string;
}

export interface HostnameRouteCreateParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: An optional description of the hostname route.
   */
  comment?: string;

  /**
   * Body param: The hostname of the route.
   */
  hostname?: string;

  /**
   * Body param: UUID of the tunnel.
   */
  tunnel_id?: string;
}

export interface HostnameRouteListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Query param: The hostname route ID.
   */
  id?: string;

  /**
   * Query param: If set, only list hostname routes with the given comment.
   */
  comment?: string;

  /**
   * Query param: If provided, include only resources that were created (and not
   * deleted) before this time. URL encoded.
   */
  existed_at?: string;

  /**
   * Query param: If set, only list hostname routes that contain a substring of the
   * given value, the filter is case-insensitive.
   */
  hostname?: string;

  /**
   * Query param: If `true`, only return deleted hostname routes. If `false`, exclude
   * deleted hostname routes.
   */
  is_deleted?: boolean;

  /**
   * Query param: If set, only list hostname routes that point to a specific tunnel.
   */
  tunnel_id?: string;
}

export interface HostnameRouteDeleteParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

export interface HostnameRouteEditParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id: string;

  /**
   * Body param: An optional description of the hostname route.
   */
  comment?: string;

  /**
   * Body param: The hostname of the route.
   */
  hostname?: string;

  /**
   * Body param: UUID of the tunnel.
   */
  tunnel_id?: string;
}

export interface HostnameRouteGetParams {
  /**
   * Cloudflare account ID
   */
  account_id: string;
}

HostnameRoutes.HostnameRoutesV4PagePaginationArray = HostnameRoutesV4PagePaginationArray;

export declare namespace HostnameRoutes {
  export {
    type HostnameRoute as HostnameRoute,
    HostnameRoutesV4PagePaginationArray as HostnameRoutesV4PagePaginationArray,
    type HostnameRouteCreateParams as HostnameRouteCreateParams,
    type HostnameRouteListParams as HostnameRouteListParams,
    type HostnameRouteDeleteParams as HostnameRouteDeleteParams,
    type HostnameRouteEditParams as HostnameRouteEditParams,
    type HostnameRouteGetParams as HostnameRouteGetParams,
  };
}
