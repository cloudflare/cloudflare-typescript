// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import { SinglePage } from '../../pagination';

export class Roles extends APIResource {
  /**
   * Get all available roles for an account.
   */
  list(
    params: RoleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RoleListResponsesSinglePage, RoleListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/roles`, RoleListResponsesSinglePage, options);
  }

  /**
   * Get information about a specific role for an account.
   */
  get(
    roleId: string,
    params: RoleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoleGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/roles/${roleId}`, options) as Core.APIPromise<{
        result: RoleGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RoleListResponsesSinglePage extends SinglePage<RoleListResponse> {}

export interface RoleListResponse {
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

  permissions: RoleListResponse.Permissions;
}

export namespace RoleListResponse {
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

export interface RoleGetResponse {
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

  permissions: RoleGetResponse.Permissions;
}

export namespace RoleGetResponse {
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

export interface RoleListParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface RoleGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

Roles.RoleListResponsesSinglePage = RoleListResponsesSinglePage;

export declare namespace Roles {
  export {
    type RoleListResponse as RoleListResponse,
    type RoleGetResponse as RoleGetResponse,
    RoleListResponsesSinglePage as RoleListResponsesSinglePage,
    type RoleListParams as RoleListParams,
    type RoleGetParams as RoleGetParams,
  };
}
