// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ManagedAPI from './managed/managed';
import { Managed, ManagedGetParams, ManagedGetResponse } from './managed/managed';
import * as UserAPI from './user/user';
import {
  User,
  UserBulkCreateParams,
  UserBulkCreateResponse,
  UserBulkCreateResponsesSinglePage,
  UserBulkDeleteParams,
  UserBulkDeleteResponse,
  UserBulkDeleteResponsesSinglePage,
  UserDeleteParams,
  UserDeleteResponse,
  UserEditParams,
  UserEditResponse,
  UserGetParams,
  UserGetResponse,
  UserUpdateParams,
  UserUpdateResponse,
} from './user/user';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Labels extends APIResource {
  user: UserAPI.User = new UserAPI.User(this._client);
  managed: ManagedAPI.Managed = new ManagedAPI.Managed(this._client);

  /**
   * Retrieve all labels
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const labelListResponse of client.apiGateway.labels.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: LabelListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LabelListResponsesV4PagePaginationArray, LabelListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/api_gateway/labels`,
      LabelListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export class LabelListResponsesV4PagePaginationArray extends V4PagePaginationArray<LabelListResponse> {}

export interface LabelListResponse {
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

export interface LabelListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Query param: Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Filter for labels where the name or description matches using
   * substring match
   */
  filter?: string;

  /**
   * Query param: Field to order by
   */
  order?: 'name' | 'description' | 'created_at' | 'last_updated' | 'mapped_resources.operations';

  /**
   * Query param: Filter for labels with source
   */
  source?: 'user' | 'managed';

  /**
   * Query param: Include `mapped_resources` for each label
   */
  with_mapped_resource_counts?: boolean;
}

Labels.LabelListResponsesV4PagePaginationArray = LabelListResponsesV4PagePaginationArray;
Labels.User = User;
Labels.UserBulkCreateResponsesSinglePage = UserBulkCreateResponsesSinglePage;
Labels.UserBulkDeleteResponsesSinglePage = UserBulkDeleteResponsesSinglePage;
Labels.Managed = Managed;

export declare namespace Labels {
  export {
    type LabelListResponse as LabelListResponse,
    LabelListResponsesV4PagePaginationArray as LabelListResponsesV4PagePaginationArray,
    type LabelListParams as LabelListParams,
  };

  export {
    User as User,
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

  export {
    Managed as Managed,
    type ManagedGetResponse as ManagedGetResponse,
    type ManagedGetParams as ManagedGetParams,
  };
}
