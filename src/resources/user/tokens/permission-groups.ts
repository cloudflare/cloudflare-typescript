// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';

export class BasePermissionGroups extends APIResource {
  static override readonly _key: readonly ['user', 'tokens', 'permissionGroups'] = Object.freeze([
    'user',
    'tokens',
    'permissionGroups',
  ] as const);

  /**
   * Find all available permission groups for API Tokens.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const permissionGroupListResponse of client.user.tokens.permissionGroups.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: PermissionGroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<PermissionGroupListResponsesSinglePage, PermissionGroupListResponse> {
    return this._client.getAPIList(
      '/user/tokens/permission_groups',
      SinglePage<PermissionGroupListResponse>,
      { query, ...options },
    );
  }
}
export class PermissionGroups extends BasePermissionGroups {}

export type PermissionGroupListResponsesSinglePage = SinglePage<PermissionGroupListResponse>;

export interface PermissionGroupListResponse {
  /**
   * Public ID.
   */
  id?: string;

  /**
   * Product category that this permission group belongs to.
   */
  category?:
    | 'developer_platform'
    | 'ai_and_machine_learning'
    | 'dns_and_zones'
    | 'app_security'
    | 'rules_and_configuration'
    | 'cloudflare_one_and_zero_trust'
    | 'analytics_and_logs'
    | 'network_services'
    | 'media'
    | 'email_and_messaging'
    | 'cache_and_performance'
    | 'account_and_billing'
    | 'other';

  /**
   * Permission Group Name
   */
  name?: string;

  /**
   * Resources to which the Permission Group is scoped
   */
  scopes?: Array<
    | 'com.cloudflare.api.account'
    | 'com.cloudflare.api.account.zone'
    | 'com.cloudflare.api.user'
    | 'com.cloudflare.edge.r2.bucket'
  >;
}

export interface PermissionGroupListParams {
  /**
   * Filter by the name of the permission group. The value must be URL-encoded.
   */
  name?: string;

  /**
   * Filter by the scope of the permission group. The value must be URL-encoded.
   */
  scope?: string;
}

export declare namespace PermissionGroups {
  export {
    type PermissionGroupListResponse as PermissionGroupListResponse,
    type PermissionGroupListResponsesSinglePage as PermissionGroupListResponsesSinglePage,
    type PermissionGroupListParams as PermissionGroupListParams,
  };
}
