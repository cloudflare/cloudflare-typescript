// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  CursorPaginationAfter,
  type CursorPaginationAfterParams,
  PagePromise,
  SinglePage,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseAudit extends APIResource {
  static override readonly _key: readonly ['accounts', 'logs', 'audit'] = Object.freeze([
    'accounts',
    'logs',
    'audit',
  ] as const);

  /**
   * Gets a list of audit logs for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const auditListResponse of client.accounts.logs.audit.list(
   *   {
   *     account_id: 'a67e14daa5f8dceeb91fe5449ba496ef',
   *     before: '2024-10-31',
   *     since: '2024-10-30',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: AuditListParams,
    options?: RequestOptions,
  ): PagePromise<AuditListResponsesCursorPaginationAfter, AuditListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/logs/audit`,
      CursorPaginationAfter<AuditListResponse>,
      { query, ...options },
    );
  }

  /**
   * Returns the chronological change history for the resource identified by the
   * given audit log entry.
   *
   * The endpoint first locates the source audit log entry by `id` (using
   * `action_time` to narrow the lookup window), derives identifying filters from
   * that entry, and then returns matching audit logs within the `since`/`before`
   * window.
   *
   * The `result_info.history_status` field indicates the quality of the resource
   * identification used:
   *
   * - `exact`: Resource was identified by the resource URI.
   * - `approximate`: Resource was identified without the resource URI.
   * - `unavailable`: The source audit log entry did not contain enough information
   *   to identify the resource; an empty result is returned.
   *
   * @example
   * ```ts
   * const response = await client.accounts.logs.audit.history(
   *   'f174be97-19b1-40d6-954d-70cd5fbd52db',
   *   {
   *     account_id: 'a67e14daa5f8dceeb91fe5449ba496ef',
   *     action_time: '2024-10-30T15:00:00Z',
   *     before: '2024-10-31',
   *     since: '2024-10-30',
   *   },
   * );
   * ```
   */
  history(
    id: string,
    params: AuditHistoryParams,
    options?: RequestOptions,
  ): APIPromise<AuditHistoryResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/logs/audit/${id}/history`, {
        query,
        ...options,
      }) as APIPromise<{ result: AuditHistoryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the available audit log product categories and the resource products each
   * one expands to. Use these values with the product_category filter on the account
   * audit logs endpoint.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const auditProductCategoriesResponse of client.accounts.logs.audit.productCategories(
   *   { account_id: 'a67e14daa5f8dceeb91fe5449ba496ef' },
   * )) {
   *   // ...
   * }
   * ```
   */
  productCategories(
    params: AuditProductCategoriesParams,
    options?: RequestOptions,
  ): PagePromise<AuditProductCategoriesResponsesSinglePage, AuditProductCategoriesResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/logs/audit/product_categories`,
      SinglePage<AuditProductCategoriesResponse>,
      options,
    );
  }
}
export class Audit extends BaseAudit {}

export type AuditListResponsesCursorPaginationAfter = CursorPaginationAfter<AuditListResponse>;

export type AuditProductCategoriesResponsesSinglePage = SinglePage<AuditProductCategoriesResponse>;

export interface AuditListResponse {
  /**
   * A unique identifier for the audit log entry.
   */
  id?: string;

  /**
   * Contains account related information.
   */
  account?: AuditListResponse.Account;

  /**
   * Provides information about the action performed.
   */
  action?: AuditListResponse.Action;

  /**
   * Provides details about the actor who performed the action.
   */
  actor?: AuditListResponse.Actor;

  /**
   * Provides raw information about the request and response.
   */
  raw?: AuditListResponse.Raw;

  /**
   * Provides details about the affected resource.
   */
  resource?: AuditListResponse.Resource;

  /**
   * Provides details about the zone affected by the action.
   */
  zone?: AuditListResponse.Zone;
}

export namespace AuditListResponse {
  /**
   * Contains account related information.
   */
  export interface Account {
    /**
     * A unique identifier for the account.
     */
    id?: string;

    /**
     * A string that identifies the account name.
     */
    name?: string;
  }

  /**
   * Provides information about the action performed.
   */
  export interface Action {
    /**
     * A short description of the action performed.
     */
    description?: string;

    /**
     * The result of the action, indicating success or failure.
     */
    result?: string;

    /**
     * A timestamp indicating when the action was logged.
     */
    time?: string;

    /**
     * A short string that describes the action that was performed.
     */
    type?: string;
  }

  /**
   * Provides details about the actor who performed the action.
   */
  export interface Actor {
    /**
     * The ID of the actor who performed the action. If a user performed the action,
     * this will be their User ID.
     */
    id?: string;

    context?: 'api_key' | 'api_token' | 'dash' | 'oauth' | 'origin_ca_key';

    /**
     * The email of the actor who performed the action.
     */
    email?: string;

    /**
     * The IP address of the request that performed the action.
     */
    ip_address?: string;

    /**
     * The API token ID when the actor context is an api_token or oauth.
     */
    token_id?: string;

    /**
     * The API token name when the actor context is an api_token or oauth.
     */
    token_name?: string;

    /**
     * The type of actor.
     */
    type?: 'account' | 'cloudflare_admin' | 'system' | 'user';
  }

  /**
   * Provides raw information about the request and response.
   */
  export interface Raw {
    /**
     * The Cloudflare Ray ID for the request.
     */
    cf_ray_id?: string;

    /**
     * The HTTP method of the request.
     */
    method?: string;

    /**
     * The HTTP response status code returned by the API.
     */
    status_code?: number;

    /**
     * The URI of the request.
     */
    uri?: string;

    /**
     * The client's user agent string sent with the request.
     */
    user_agent?: string;
  }

  /**
   * Provides details about the affected resource.
   */
  export interface Resource {
    /**
     * The unique identifier for the affected resource.
     */
    id?: string;

    /**
     * The Cloudflare product associated with the resource.
     */
    product?: string;

    request?: unknown;

    response?: unknown;

    /**
     * The scope of the resource.
     */
    scope?: unknown;

    /**
     * The type of the resource.
     */
    type?: string;
  }

  /**
   * Provides details about the zone affected by the action.
   */
  export interface Zone {
    /**
     * A string that identifies the zone id.
     */
    id?: string;

    /**
     * A string that identifies the zone name.
     */
    name?: string;
  }
}

export type AuditHistoryResponse = Array<AuditHistoryResponse.AuditHistoryResponseItem>;

export namespace AuditHistoryResponse {
  export interface AuditHistoryResponseItem {
    /**
     * A unique identifier for the audit log entry.
     */
    id?: string;

    /**
     * Contains account related information.
     */
    account?: AuditHistoryResponseItem.Account;

    /**
     * Provides information about the action performed.
     */
    action?: AuditHistoryResponseItem.Action;

    /**
     * Provides details about the actor who performed the action.
     */
    actor?: AuditHistoryResponseItem.Actor;

    /**
     * Provides raw information about the request and response.
     */
    raw?: AuditHistoryResponseItem.Raw;

    /**
     * Provides details about the affected resource.
     */
    resource?: AuditHistoryResponseItem.Resource;

    /**
     * Provides details about the zone affected by the action.
     */
    zone?: AuditHistoryResponseItem.Zone;
  }

  export namespace AuditHistoryResponseItem {
    /**
     * Contains account related information.
     */
    export interface Account {
      /**
       * A unique identifier for the account.
       */
      id?: string;

      /**
       * A string that identifies the account name.
       */
      name?: string;
    }

    /**
     * Provides information about the action performed.
     */
    export interface Action {
      /**
       * A short description of the action performed.
       */
      description?: string;

      /**
       * The result of the action, indicating success or failure.
       */
      result?: string;

      /**
       * A timestamp indicating when the action was logged.
       */
      time?: string;

      /**
       * A short string that describes the action that was performed.
       */
      type?: string;
    }

    /**
     * Provides details about the actor who performed the action.
     */
    export interface Actor {
      /**
       * The ID of the actor who performed the action. If a user performed the action,
       * this will be their User ID.
       */
      id?: string;

      context?: 'api_key' | 'api_token' | 'dash' | 'oauth' | 'origin_ca_key';

      /**
       * The email of the actor who performed the action.
       */
      email?: string;

      /**
       * The IP address of the request that performed the action.
       */
      ip_address?: string;

      /**
       * The API token ID when the actor context is an api_token or oauth.
       */
      token_id?: string;

      /**
       * The API token name when the actor context is an api_token or oauth.
       */
      token_name?: string;

      /**
       * The type of actor.
       */
      type?: 'account' | 'cloudflare_admin' | 'system' | 'user';
    }

    /**
     * Provides raw information about the request and response.
     */
    export interface Raw {
      /**
       * The Cloudflare Ray ID for the request.
       */
      cf_ray_id?: string;

      /**
       * The HTTP method of the request.
       */
      method?: string;

      /**
       * The HTTP response status code returned by the API.
       */
      status_code?: number;

      /**
       * The URI of the request.
       */
      uri?: string;

      /**
       * The client's user agent string sent with the request.
       */
      user_agent?: string;
    }

    /**
     * Provides details about the affected resource.
     */
    export interface Resource {
      /**
       * The unique identifier for the affected resource.
       */
      id?: string;

      /**
       * The Cloudflare product associated with the resource.
       */
      product?: string;

      request?: unknown;

      response?: unknown;

      /**
       * The scope of the resource.
       */
      scope?: unknown;

      /**
       * The type of the resource.
       */
      type?: string;
    }

    /**
     * Provides details about the zone affected by the action.
     */
    export interface Zone {
      /**
       * A string that identifies the zone id.
       */
      id?: string;

      /**
       * A string that identifies the zone name.
       */
      name?: string;
    }
  }
}

/**
 * A predefined product category and the resource products it expands to.
 */
export interface AuditProductCategoriesResponse {
  /**
   * A human-readable label for the product category.
   */
  label?: string;

  /**
   * The resource products that the product category expands to.
   */
  products?: Array<AuditProductCategoriesResponse.Product>;

  /**
   * The product category identifier used with the product_category filter.
   */
  value?: string;
}

export namespace AuditProductCategoriesResponse {
  /**
   * A resource product within a product category.
   */
  export interface Product {
    /**
     * A human-readable label for the product.
     */
    label?: string;

    /**
     * The resource_product value that the product category expands to.
     */
    value?: string;
  }
}

export interface AuditListParams extends CursorPaginationAfterParams {
  /**
   * Path param: The unique id that identifies the account.
   */
  account_id: string;

  /**
   * Query param: Limits the returned results to logs older than the specified date.
   * This can be a date string 2019-04-30 (interpreted in UTC) or an absolute
   * timestamp that conforms to RFC3339.
   */
  before: string;

  /**
   * Query param: Limits the returned results to logs newer than the specified date.
   * This can be a date string 2019-04-30 (interpreted in UTC) or an absolute
   * timestamp that conforms to RFC3339.
   */
  since: string;

  /**
   * Query param
   */
  id?: AuditListParams.ID;

  /**
   * Query param
   */
  account_name?: AuditListParams.AccountName;

  /**
   * Query param
   */
  action_result?: AuditListParams.ActionResult;

  /**
   * Query param
   */
  action_type?: AuditListParams.ActionType;

  /**
   * Query param
   */
  actor_context?: AuditListParams.ActorContext;

  /**
   * Query param
   */
  actor_email?: AuditListParams.ActorEmail;

  /**
   * Query param
   */
  actor_id?: AuditListParams.ActorID;

  /**
   * Query param
   */
  actor_ip_address?: AuditListParams.ActorIPAddress;

  /**
   * Query param
   */
  actor_token_id?: AuditListParams.ActorTokenID;

  /**
   * Query param
   */
  actor_token_name?: AuditListParams.ActorTokenName;

  /**
   * Query param
   */
  actor_type?: AuditListParams.ActorType;

  /**
   * Query param
   */
  audit_log_id?: AuditListParams.AuditLogID;

  /**
   * Query param: Sets sorting order.
   */
  direction?: 'desc' | 'asc';

  /**
   * Query param: The number limits the objects to return. The cursor attribute may
   * be used to iterate over the next batch of objects if there are more than the
   * limit.
   */
  limit?: number;

  /**
   * Query param: Filters audit logs by one or more predefined product categories.
   * Each product category expands into a curated set of resource_product values and
   * is unioned with any explicit resource_product filter. Matched
   * case-insensitively; unknown product categories return 400. Repeatable. Use the
   * audit log product categories endpoint to discover the available values.
   */
  product_category?: Array<string>;

  /**
   * Query param
   */
  raw_cf_ray_id?: AuditListParams.RawCfRayID;

  /**
   * Query param
   */
  raw_method?: AuditListParams.RawMethod;

  /**
   * Query param
   */
  raw_status_code?: AuditListParams.RawStatusCode;

  /**
   * Query param
   */
  raw_uri?: AuditListParams.RawURI;

  /**
   * Query param
   */
  resource_id?: AuditListParams.ResourceID;

  /**
   * Query param
   */
  resource_product?: AuditListParams.ResourceProduct;

  /**
   * Query param
   */
  resource_scope?: AuditListParams.ResourceScope;

  /**
   * Query param
   */
  resource_type?: AuditListParams.ResourceType;

  /**
   * Query param
   */
  zone_id?: AuditListParams.ZoneID;

  /**
   * Query param
   */
  zone_name?: AuditListParams.ZoneName;
}

export namespace AuditListParams {
  export interface ID {
    /**
     * Filters out audit logs by their IDs.
     */
    not?: Array<string>;
  }

  export interface AccountName {
    /**
     * Filters out audit logs by the account name.
     */
    not?: Array<string>;
  }

  export interface ActionResult {
    /**
     * Filters out audit logs by whether the action was successful or not.
     */
    not?: Array<'success' | 'failure'>;
  }

  export interface ActionType {
    /**
     * Filters out audit logs by the action type.
     */
    not?: Array<'create' | 'delete' | 'view' | 'update'>;
  }

  export interface ActorContext {
    /**
     * Filters out audit logs by the actor context.
     */
    not?: Array<'api_key' | 'api_token' | 'dash' | 'oauth' | 'origin_ca_key'>;
  }

  export interface ActorEmail {
    /**
     * Filters out audit logs by the actor's email address.
     */
    not?: Array<string>;
  }

  export interface ActorID {
    /**
     * Filters out audit logs by the actor ID. This can be either the Account ID or
     * User ID.
     */
    not?: Array<string>;
  }

  export interface ActorIPAddress {
    /**
     * Filters out audit logs IP address where the action was initiated.
     */
    not?: Array<string>;
  }

  export interface ActorTokenID {
    /**
     * Filters out audit logs by the API token ID when the actor context is an
     * api_token or oauth.
     */
    not?: Array<string>;
  }

  export interface ActorTokenName {
    /**
     * Filters out audit logs by the API token name when the actor context is an
     * api_token or oauth.
     */
    not?: Array<string>;
  }

  export interface ActorType {
    /**
     * Filters out audit logs by the actor type.
     */
    not?: Array<'account' | 'cloudflare_admin' | 'system' | 'user'>;
  }

  export interface AuditLogID {
    /**
     * @deprecated Filters out audit logs by their IDs.
     */
    not?: Array<string>;
  }

  export interface RawCfRayID {
    /**
     * Filters out audit logs by the response CF Ray ID.
     */
    not?: Array<string>;
  }

  export interface RawMethod {
    /**
     * Filters out audit logs by the HTTP method for the API call.
     */
    not?: Array<string>;
  }

  export interface RawStatusCode {
    /**
     * Filters out audit logs by the response status code that was returned.
     */
    not?: Array<number>;
  }

  export interface RawURI {
    /**
     * Filters out audit logs by the request URI.
     */
    not?: Array<string>;
  }

  export interface ResourceID {
    /**
     * Filters out audit logs by the resource ID.
     */
    not?: Array<string>;
  }

  export interface ResourceProduct {
    /**
     * Filters out audit logs by the Cloudflare product associated with the changed
     * resource.
     */
    not?: Array<string>;
  }

  export interface ResourceScope {
    /**
     * Filters out audit logs by the resource scope, specifying whether the resource is
     * associated with an user, an account, a zone, or a membership.
     */
    not?: Array<'accounts' | 'user' | 'zones' | 'memberships'>;
  }

  export interface ResourceType {
    /**
     * Filters out audit logs based on the unique type of resource changed by the
     * action.
     */
    not?: Array<string>;
  }

  export interface ZoneID {
    /**
     * Filters out audit logs by the zone ID.
     */
    not?: Array<string>;
  }

  export interface ZoneName {
    /**
     * Filters out audit logs by the zone name associated with the change.
     */
    not?: Array<string>;
  }
}

export interface AuditHistoryParams {
  /**
   * Path param: The unique ID that identifies the account.
   */
  account_id: string;

  /**
   * Query param: RFC3339 timestamp of the source audit log entry's action time. Used
   * to narrow the source-entry lookup window. Provide the `action.time` value from
   * the audit log identified by `id`.
   */
  action_time: string;

  /**
   * Query param: Limits the returned results to logs older than the specified date.
   * This can be a date string 2019-04-30 (interpreted in UTC) or an absolute
   * timestamp that conforms to RFC3339.
   */
  before: string;

  /**
   * Query param: Limits the returned results to logs newer than the specified date.
   * This can be a date string 2019-04-30 (interpreted in UTC) or an absolute
   * timestamp that conforms to RFC3339.
   */
  since: string;

  /**
   * Query param: The cursor is an opaque token used to paginate through large sets
   * of records. It indicates the position from which to continue when requesting the
   * next set of records. A valid cursor value can be obtained from the cursor object
   * in the result_info structure of a previous response.
   */
  cursor?: string;

  /**
   * Query param: Sets sorting order.
   */
  direction?: 'desc' | 'asc';

  /**
   * Query param: The number limits the objects to return. The cursor attribute may
   * be used to iterate over the next batch of objects if there are more than the
   * limit.
   */
  limit?: number;
}

export interface AuditProductCategoriesParams {
  /**
   * The unique id that identifies the account.
   */
  account_id: string;
}

export declare namespace Audit {
  export {
    type AuditListResponse as AuditListResponse,
    type AuditHistoryResponse as AuditHistoryResponse,
    type AuditProductCategoriesResponse as AuditProductCategoriesResponse,
    type AuditListResponsesCursorPaginationAfter as AuditListResponsesCursorPaginationAfter,
    type AuditProductCategoriesResponsesSinglePage as AuditProductCategoriesResponsesSinglePage,
    type AuditListParams as AuditListParams,
    type AuditHistoryParams as AuditHistoryParams,
    type AuditProductCategoriesParams as AuditProductCategoriesParams,
  };
}
