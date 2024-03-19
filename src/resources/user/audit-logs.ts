// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AuditLogsAPI from 'cloudflare/resources/user/audit-logs';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class AuditLogs extends APIResource {
  /**
   * Gets a list of audit logs for a user account. Can be filtered by who made the
   * change, on which zone, and the timeframe of the change.
   */
  list(
    query?: AuditLogListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditLogListResponsesV4PagePaginationArray, AuditLogListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditLogListResponsesV4PagePaginationArray, AuditLogListResponse>;
  list(
    query: AuditLogListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AuditLogListResponsesV4PagePaginationArray, AuditLogListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/user/audit_logs', AuditLogListResponsesV4PagePaginationArray, {
      query,
      ...options,
    });
  }
}

export class AuditLogListResponsesV4PagePaginationArray extends V4PagePaginationArray<AuditLogListResponse> {}

export interface AuditLogListResponse {
  /**
   * A string that uniquely identifies the audit log.
   */
  id?: string;

  action?: AuditLogListResponse.Action;

  actor?: AuditLogListResponse.Actor;

  /**
   * The source of the event.
   */
  interface?: string;

  /**
   * An object which can lend more context to the action being logged. This is a
   * flexible value and varies between different actions.
   */
  metadata?: unknown;

  /**
   * The new value of the resource that was modified.
   */
  newValue?: string;

  /**
   * The value of the resource before it was modified.
   */
  oldValue?: string;

  owner?: AuditLogListResponse.Owner;

  resource?: AuditLogListResponse.Resource;

  /**
   * A UTC RFC3339 timestamp that specifies when the action being logged occured.
   */
  when?: string;
}

export namespace AuditLogListResponse {
  export interface Action {
    /**
     * A boolean that indicates if the action attempted was successful.
     */
    result?: boolean;

    /**
     * A short string that describes the action that was performed.
     */
    type?: string;
  }

  export interface Actor {
    /**
     * The ID of the actor that performed the action. If a user performed the action,
     * this will be their User ID.
     */
    id?: string;

    /**
     * The email of the user that performed the action.
     */
    email?: string;

    /**
     * The IP address of the request that performed the action.
     */
    ip?: string;

    /**
     * The type of actor, whether a User, Cloudflare Admin, or an Automated System.
     */
    type?: 'user' | 'admin' | 'Cloudflare';
  }

  export interface Owner {
    /**
     * Identifier
     */
    id?: string;
  }

  export interface Resource {
    /**
     * An identifier for the resource that was affected by the action.
     */
    id?: string;

    /**
     * A short string that describes the resource that was affected by the action.
     */
    type?: string;
  }
}

export interface AuditLogListParams extends V4PagePaginationArrayParams {
  /**
   * Finds a specific log by its ID.
   */
  id?: string;

  action?: AuditLogListParams.Action;

  actor?: AuditLogListParams.Actor;

  /**
   * Limits the returned results to logs older than the specified date. This can be a
   * date string `2019-04-30` or an absolute timestamp that conforms to RFC3339.
   */
  before?: string;

  /**
   * Changes the direction of the chronological sorting.
   */
  direction?: 'desc' | 'asc';

  /**
   * Indicates that this request is an export of logs in CSV format.
   */
  export?: boolean;

  /**
   * Indicates whether or not to hide user level audit logs.
   */
  hide_user_logs?: boolean;

  /**
   * Limits the returned results to logs newer than the specified date. This can be a
   * date string `2019-04-30` or an absolute timestamp that conforms to RFC3339.
   */
  since?: string;

  zone?: AuditLogListParams.Zone;
}

export namespace AuditLogListParams {
  export interface Action {
    /**
     * Filters by the action type.
     */
    type?: string;
  }

  export interface Actor {
    /**
     * Filters by the email address of the actor that made the change.
     */
    email?: string;

    /**
     * Filters by the IP address of the request that made the change by specific IP
     * address or valid CIDR Range.
     */
    ip?: string;
  }

  export interface Zone {
    /**
     * Filters by the name of the zone associated to the change.
     */
    name?: string;
  }
}

export namespace AuditLogs {
  export import AuditLogListResponse = AuditLogsAPI.AuditLogListResponse;
  export import AuditLogListResponsesV4PagePaginationArray = AuditLogsAPI.AuditLogListResponsesV4PagePaginationArray;
  export import AuditLogListParams = AuditLogsAPI.AuditLogListParams;
}
