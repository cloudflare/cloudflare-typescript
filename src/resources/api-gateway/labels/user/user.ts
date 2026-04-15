// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ResourcesAPI from './resources/resources';
import { BaseResources, Resources } from './resources/resources';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseUser extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'labels', 'user'] = Object.freeze([
    'apiGateway',
    'labels',
    'user',
  ] as const);

  /**
   * Update all fields on a label
   *
   * @example
   * ```ts
   * const user = await client.apiGateway.labels.user.update(
   *   'login',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  update(name: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<UserUpdateResponse> {
    const { zone_id = this._client.zoneID, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/api_gateway/labels/user/${name}`, {
        body,
        ...options,
      }) as APIPromise<{ result: UserUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete user label
   *
   * @example
   * ```ts
   * const user = await client.apiGateway.labels.user.delete(
   *   'login',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    name: string,
    params: UserDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserDeleteResponse> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return (
      this._client.delete(path`/zones/${zone_id}/api_gateway/labels/user/${name}`, options) as APIPromise<{
        result: UserDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create user labels
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const userBulkCreateResponse of client.apiGateway.labels.user.bulkCreate(
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [{ name: 'login' }],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  bulkCreate(
    params: UserBulkCreateParams,
    options?: RequestOptions,
  ): PagePromise<UserBulkCreateResponsesSinglePage, UserBulkCreateResponse> {
    const { zone_id = this._client.zoneID, body } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/api_gateway/labels/user`,
      SinglePage<UserBulkCreateResponse>,
      { body: body, method: 'post', ...options },
    );
  }

  /**
   * Delete user labels
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const userBulkDeleteResponse of client.apiGateway.labels.user.bulkDelete(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  bulkDelete(
    params: UserBulkDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<UserBulkDeleteResponsesSinglePage, UserBulkDeleteResponse> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return this._client.getAPIList(
      path`/zones/${zone_id}/api_gateway/labels/user`,
      SinglePage<UserBulkDeleteResponse>,
      { method: 'delete', ...options },
    );
  }

  /**
   * Update certain fields on a label
   *
   * @example
   * ```ts
   * const response = await client.apiGateway.labels.user.edit(
   *   'login',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  edit(name: string, params: UserEditParams, options?: RequestOptions): APIPromise<UserEditResponse> {
    const { zone_id = this._client.zoneID, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/api_gateway/labels/user/${name}`, {
        body,
        ...options,
      }) as APIPromise<{ result: UserEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve user label
   *
   * @example
   * ```ts
   * const user = await client.apiGateway.labels.user.get(
   *   'login',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    name: string,
    params: UserGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UserGetResponse> {
    const { zone_id = this._client.zoneID, ...query } = params ?? {};
    return (
      this._client.get(path`/zones/${zone_id}/api_gateway/labels/user/${name}`, {
        query,
        ...options,
      }) as APIPromise<{ result: UserGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class User extends BaseUser {
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);
}

export type UserBulkCreateResponsesSinglePage = SinglePage<UserBulkCreateResponse>;

export type UserBulkDeleteResponsesSinglePage = SinglePage<UserBulkDeleteResponse>;

export interface UserUpdateResponse {
  created_at: string;

  /**
   * The description of the label
   */
  description: string;

  last_updated: string;

  /**
   * Metadata for the label
   */
  metadata: unknown;

  /**
   * The name of the label
   */
  name: string;

  /**
   * - `user` - label is owned by the user
   * - `managed` - label is owned by cloudflare
   */
  source: 'user' | 'managed';
}

export interface UserDeleteResponse {
  created_at: string;

  /**
   * The description of the label
   */
  description: string;

  last_updated: string;

  /**
   * Metadata for the label
   */
  metadata: unknown;

  /**
   * The name of the label
   */
  name: string;

  /**
   * - `user` - label is owned by the user
   * - `managed` - label is owned by cloudflare
   */
  source: 'user' | 'managed';
}

export interface UserBulkCreateResponse {
  created_at: string;

  /**
   * The description of the label
   */
  description: string;

  last_updated: string;

  /**
   * Metadata for the label
   */
  metadata: unknown;

  /**
   * The name of the label
   */
  name: string;

  /**
   * - `user` - label is owned by the user
   * - `managed` - label is owned by cloudflare
   */
  source: 'user' | 'managed';
}

export interface UserBulkDeleteResponse {
  created_at: string;

  /**
   * The description of the label
   */
  description: string;

  last_updated: string;

  /**
   * Metadata for the label
   */
  metadata: unknown;

  /**
   * The name of the label
   */
  name: string;

  /**
   * - `user` - label is owned by the user
   * - `managed` - label is owned by cloudflare
   */
  source: 'user' | 'managed';
}

export interface UserEditResponse {
  created_at: string;

  /**
   * The description of the label
   */
  description: string;

  last_updated: string;

  /**
   * Metadata for the label
   */
  metadata: unknown;

  /**
   * The name of the label
   */
  name: string;

  /**
   * - `user` - label is owned by the user
   * - `managed` - label is owned by cloudflare
   */
  source: 'user' | 'managed';
}

export interface UserGetResponse {
  created_at: string;

  /**
   * The description of the label
   */
  description: string;

  last_updated: string;

  /**
   * Metadata for the label
   */
  metadata: unknown;

  /**
   * The name of the label
   */
  name: string;

  /**
   * - `user` - label is owned by the user
   * - `managed` - label is owned by cloudflare
   */
  source: 'user' | 'managed';

  /**
   * Provides counts of what resources are linked to this label
   */
  mapped_resources?: unknown;
}

export interface UserUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Body param: The description of the label
   */
  description?: string;

  /**
   * Body param: Metadata for the label
   */
  metadata?: unknown;
}

export interface UserDeleteParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export interface UserBulkCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Body param
   */
  body: Array<UserBulkCreateParams.Body>;
}

export namespace UserBulkCreateParams {
  export interface Body {
    /**
     * The name of the label
     */
    name: string;

    /**
     * The description of the label
     */
    description?: string;

    /**
     * Metadata for the label
     */
    metadata?: unknown;
  }
}

export interface UserBulkDeleteParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export interface UserEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Body param: The description of the label
   */
  description?: string;

  /**
   * Body param: Metadata for the label
   */
  metadata?: unknown;
}

export interface UserGetParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Query param: Include `mapped_resources` for each label
   */
  with_mapped_resource_counts?: boolean;
}

User.Resources = Resources;
User.BaseResources = BaseResources;

export declare namespace User {
  export {
    type UserUpdateResponse as UserUpdateResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserBulkCreateResponse as UserBulkCreateResponse,
    type UserBulkDeleteResponse as UserBulkDeleteResponse,
    type UserEditResponse as UserEditResponse,
    type UserGetResponse as UserGetResponse,
    type UserBulkCreateResponsesSinglePage as UserBulkCreateResponsesSinglePage,
    type UserBulkDeleteResponsesSinglePage as UserBulkDeleteResponsesSinglePage,
    type UserUpdateParams as UserUpdateParams,
    type UserDeleteParams as UserDeleteParams,
    type UserBulkCreateParams as UserBulkCreateParams,
    type UserBulkDeleteParams as UserBulkDeleteParams,
    type UserEditParams as UserEditParams,
    type UserGetParams as UserGetParams,
  };

  export { Resources as Resources, BaseResources as BaseResources };
}
