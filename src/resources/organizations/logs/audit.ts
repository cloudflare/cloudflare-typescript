// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { CursorPaginationAfter, type CursorPaginationAfterParams } from '../../../pagination';

export class Audit extends APIResource {
  /**
   * Gets a list of audit logs for an organization.
   */
  list(
    organizationId: string,
    query: AuditListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditListResponsesCursorPaginationAfter, AuditListResponse> {
    return this._client.getAPIList(
      `/organizations/${organizationId}/logs/audit`,
      AuditListResponsesCursorPaginationAfter,
      { query, ...options },
    );
  }
}

export class AuditListResponsesCursorPaginationAfter extends CursorPaginationAfter<AuditListResponse> {}

export interface AuditListResponse {
  /**
   * A unique identifier for the audit log entry.
   */
  id?: string;

  /**
   * Provides information about the action performed.
   */
  action?: AuditListResponse.Action;

  /**
   * Provides details about the actor who performed the action.
   */
  actor?: AuditListResponse.Actor;

  /**
   * Contains organization related information.
   */
  organization?: AuditListResponse.Organization;

  /**
   * Provides raw information about the request and response.
   */
  raw?: AuditListResponse.Raw;

  /**
   * Provides details about the affected resource.
   */
  resource?: AuditListResponse.Resource;
}

export namespace AuditListResponse {
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
    type?: 'cloudflare_admin' | 'system' | 'user';
  }

  /**
   * Contains organization related information.
   */
  export interface Organization {
    /**
     * A unique identifier for the organization.
     */
    id?: string;
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
}

export interface AuditListParams extends CursorPaginationAfterParams {
  /**
   * Limits the returned results to logs older than the specified date. This can be a
   * date string 2019-04-30 (interpreted in UTC) or an absolute timestamp that
   * conforms to RFC3339.
   */
  before: string;

  /**
   * Limits the returned results to logs newer than the specified date. This can be a
   * date string 2019-04-30 (interpreted in UTC) or an absolute timestamp that
   * conforms to RFC3339.
   */
  since: string;

  id?: AuditListParams.ID;

  action_result?: AuditListParams.ActionResult;

  action_type?: AuditListParams.ActionType;

  actor_context?: AuditListParams.ActorContext;

  actor_email?: AuditListParams.ActorEmail;

  actor_id?: AuditListParams.ActorID;

  actor_ip_address?: AuditListParams.ActorIPAddress;

  actor_token_id?: AuditListParams.ActorTokenID;

  actor_token_name?: AuditListParams.ActorTokenName;

  actor_type?: AuditListParams.ActorType;

  /**
   * Sets sorting order.
   */
  direction?: 'desc' | 'asc';

  /**
   * The number limits the objects to return. The cursor attribute may be used to
   * iterate over the next batch of objects if there are more than the limit.
   */
  limit?: number;

  raw_cf_ray_id?: AuditListParams.RawCfRayID;

  raw_method?: AuditListParams.RawMethod;

  raw_status_code?: AuditListParams.RawStatusCode;

  raw_uri?: AuditListParams.RawURI;

  resource_id?: AuditListParams.ResourceID;

  resource_product?: AuditListParams.ResourceProduct;

  resource_scope?: AuditListParams.ResourceScope;

  resource_type?: AuditListParams.ResourceType;
}

export namespace AuditListParams {
  export interface ID {
    /**
     * Filters out audit logs by their IDs.
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
     * Filters out audit logs by the actor's user ID.
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
    not?: Array<'cloudflare_admin' | 'system' | 'user'>;
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
     * associated with an organization.
     */
    not?: Array<'organizations'>;
  }

  export interface ResourceType {
    /**
     * Filters out audit logs based on the unique type of resource changed by the
     * action.
     */
    not?: Array<string>;
  }
}

Audit.AuditListResponsesCursorPaginationAfter = AuditListResponsesCursorPaginationAfter;

export declare namespace Audit {
  export {
    type AuditListResponse as AuditListResponse,
    AuditListResponsesCursorPaginationAfter as AuditListResponsesCursorPaginationAfter,
    type AuditListParams as AuditListParams,
  };
}
