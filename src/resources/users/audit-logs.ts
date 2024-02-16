// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AuditLogsAPI from 'cloudflare/resources/users/audit-logs';

export class AuditLogs extends APIResource {
  /**
   * Gets a list of audit logs for a user account. Can be filtered by who made the
   * change, on which zone, and the timeframe of the change.
   */
  list(query?: AuditLogListParams, options?: Core.RequestOptions): Core.APIPromise<AuditLogListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AuditLogListResponse>;
  list(
    query: AuditLogListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuditLogListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/user/audit_logs', { query, ...options });
  }
}

export type AuditLogListResponse =
  | AuditLogListResponse.UnionMember0
  | AuditLogListResponse.ZpUfpni7APIResponseCommon;

export namespace AuditLogListResponse {
  export interface UnionMember0 {
    errors?: unknown | null;

    messages?: Array<unknown>;

    result?: Array<UnionMember0.Result>;

    success?: boolean;
  }

  export namespace UnionMember0 {
    export interface Result {
      /**
       * A string that uniquely identifies the audit log.
       */
      id?: string;

      action?: Result.Action;

      actor?: Result.Actor;

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

      owner?: Result.Owner;

      resource?: Result.Resource;

      /**
       * A UTC RFC3339 timestamp that specifies when the action being logged occured.
       */
      when?: string;
    }

    export namespace Result {
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
  }

  export interface ZpUfpni7APIResponseCommon {
    errors: Array<ZpUfpni7APIResponseCommon.Error>;

    messages: Array<ZpUfpni7APIResponseCommon.Message>;

    result: unknown | Array<unknown> | string;

    /**
     * Whether the API call was successful
     */
    success: true;
  }

  export namespace ZpUfpni7APIResponseCommon {
    export interface Error {
      code: number;

      message: string;
    }

    export interface Message {
      code: number;

      message: string;
    }
  }
}

export interface AuditLogListParams {
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
   * Defines which page of results to return.
   */
  page?: number;

  /**
   * Sets the number of results to return per page.
   */
  per_page?: number;

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
  export import AuditLogListParams = AuditLogsAPI.AuditLogListParams;
}
