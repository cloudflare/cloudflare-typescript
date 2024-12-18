// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { CursorLimitPagination, type CursorLimitPaginationParams } from '../../../pagination';

export class Audit extends APIResource {
  /**
   * Gets a list of audit logs for an account. <br /> <br /> This is the beta release
   * of Audit Logs Version 2. Since this is a beta version, there may be gaps or
   * missing entries in the available audit logs. Be aware of the following
   * limitations. <br /> <ul> <li>Audit logs are available only for the past 30 days.
   * <br /></li> <li>Error handling is not yet implemented. <br /> </li> </ul>
   */
  list(
    params: AuditListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditListResponsesCursorLimitPagination, AuditListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/logs/audit`,
      AuditListResponsesCursorLimitPagination,
      { query, ...options },
    );
  }
}

export class AuditListResponsesCursorLimitPagination extends CursorLimitPagination<AuditListResponse> {}

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
     * Filters by the API token ID when the actor context is an api_token.
     */
    token_id?: string;

    /**
     * Filters by the API token name when the actor context is an api_token.
     */
    token_name?: string;

    /**
     * The type of actor.
     */
    type?: 'user' | 'account' | 'cloudflare-admin';
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

export interface AuditListParams extends CursorLimitPaginationParams {
  /**
   * Path param: The unique id that identifies the account.
   */
  account_id: string;

  /**
   * Query param: Filters actions based on a given timestamp in the format
   * yyyy-mm-dd, returning only logs that occurred on and before the specified date.
   */
  before: string;

  /**
   * Query param: Filters actions based on a given timestamp in the format
   * yyyy-mm-dd, returning only logs that occurred on and after the specified date.
   */
  since: string;

  /**
   * Query param: Filters by the account name.
   */
  account_name?: string;

  /**
   * Query param: Whether the action was successful or not.
   */
  action_result?: 'success' | 'failure';

  /**
   * Query param: Filters by the action type.
   */
  action_type?: 'create' | 'delete' | 'view' | 'update';

  /**
   * Query param: Filters by the actor context.
   */
  actor_context?: 'api_key' | 'api_token' | 'dash' | 'oauth' | 'origin_ca_key';

  /**
   * Query param: Filters by the actor's email address.
   */
  actor_email?: string;

  /**
   * Query param: Filters by the actor ID. This can be either the Account ID or User
   * ID.
   */
  actor_id?: string;

  /**
   * Query param: The IP address where the action was initiated.
   */
  actor_ip_address?: string;

  /**
   * Query param: Filters by the API token ID when the actor context is an api_token
   * or oauth.
   */
  actor_token_id?: string;

  /**
   * Query param: Filters by the API token name when the actor context is an
   * api_token or oauth.
   */
  actor_token_name?: string;

  /**
   * Query param: Filters by the actor type.
   */
  actor_type?: 'cloudflare_admin' | 'account' | 'user';

  /**
   * Query param: Finds a specific log by its ID.
   */
  audit_log_id?: string;

  /**
   * Query param: Sets sorting order.
   */
  direction?: 'desc' | 'asc';

  /**
   * Query param: Filters by the response CF Ray ID.
   */
  raw_cf_ray_id?: string;

  /**
   * Query param: The HTTP method for the API call.
   */
  raw_method?: string;

  /**
   * Query param: The response status code that was returned.
   */
  raw_status_code?: number;

  /**
   * Query param: Filters by the request URI.
   */
  raw_uri?: string;

  /**
   * Query param: Filters by the resource ID.
   */
  resource_id?: string;

  /**
   * Query param: Filters audit logs by the Cloudflare product associated with the
   * changed resource.
   */
  resource_product?: string;

  /**
   * Query param: Filters by the resource scope, specifying whether the resource is
   * associated with an user, an account, or a zone.
   */
  resource_scope?: 'accounts' | 'user' | 'zones';

  /**
   * Query param: Filters audit logs based on the unique type of resource changed by
   * the action.
   */
  resource_type?: string;

  /**
   * Query param: Filters by the zone ID.
   */
  zone_id?: string;

  /**
   * Query param: Filters by the zone name associated with the change.
   */
  zone_name?: string;
}

Audit.AuditListResponsesCursorLimitPagination = AuditListResponsesCursorLimitPagination;

export declare namespace Audit {
  export {
    type AuditListResponse as AuditListResponse,
    AuditListResponsesCursorLimitPagination as AuditListResponsesCursorLimitPagination,
    type AuditListParams as AuditListParams,
  };
}
