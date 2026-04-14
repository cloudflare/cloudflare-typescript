// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ResourcesAPI from './resources/resources';
import { Resources } from './resources/resources';
import { SinglePage } from '../../../../pagination';

export class User extends APIResource {
  resources: ResourcesAPI.Resources = new ResourcesAPI.Resources(this._client);

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
  update(
    name: string,
    params: UserUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/api_gateway/labels/user/${name}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: UserUpdateResponse }>
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
    params: UserDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(`/zones/${zone_id}/api_gateway/labels/user/${name}`, options) as Core.APIPromise<{
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<UserBulkCreateResponsesSinglePage, UserBulkCreateResponse> {
    const { zone_id, body } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/api_gateway/labels/user`,
      UserBulkCreateResponsesSinglePage,
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
    params: UserBulkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UserBulkDeleteResponsesSinglePage, UserBulkDeleteResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/api_gateway/labels/user`,
      UserBulkDeleteResponsesSinglePage,
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
  edit(
    name: string,
    params: UserEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/api_gateway/labels/user/${name}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: UserEditResponse }>
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
  get(name: string, params: UserGetParams, options?: Core.RequestOptions): Core.APIPromise<UserGetResponse> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/api_gateway/labels/user/${name}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: UserGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class UserBulkCreateResponsesSinglePage extends SinglePage<UserBulkCreateResponse> {}

export class UserBulkDeleteResponsesSinglePage extends SinglePage<UserBulkDeleteResponse> {}

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
  zone_id: string;

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
  zone_id: string;
}

export interface UserBulkCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

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
  zone_id: string;
}

export interface UserEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

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
  zone_id: string;

  /**
   * Query param: Include `mapped_resources` for each label
   */
  with_mapped_resource_counts?: boolean;
}

User.UserBulkCreateResponsesSinglePage = UserBulkCreateResponsesSinglePage;
User.UserBulkDeleteResponsesSinglePage = UserBulkDeleteResponsesSinglePage;
User.Resources = Resources;

export declare namespace User {
  export {
    type UserUpdateResponse as UserUpdateResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserBulkCreateResponse as UserBulkCreateResponse,
    type UserBulkDeleteResponse as UserBulkDeleteResponse,
    type UserEditResponse as UserEditResponse,
    type UserGetResponse as UserGetResponse,
    UserBulkCreateResponsesSinglePage as UserBulkCreateResponsesSinglePage,
    UserBulkDeleteResponsesSinglePage as UserBulkDeleteResponsesSinglePage,
    type UserUpdateParams as UserUpdateParams,
    type UserDeleteParams as UserDeleteParams,
    type UserBulkCreateParams as UserBulkCreateParams,
    type UserBulkDeleteParams as UserBulkDeleteParams,
    type UserEditParams as UserEditParams,
    type UserGetParams as UserGetParams,
  };

  export { Resources as Resources };
}
