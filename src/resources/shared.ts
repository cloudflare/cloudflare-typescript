// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from 'cloudflare/resources/shared';
import { V4PagePaginationArray } from 'cloudflare/pagination';

export interface AuditLog {
  /**
   * A string that uniquely identifies the audit log.
   */
  id?: string;

  action?: AuditLog.Action;

  actor?: AuditLog.Actor;

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

  owner?: AuditLog.Owner;

  resource?: AuditLog.Resource;

  /**
   * A UTC RFC3339 timestamp that specifies when the action being logged occured.
   */
  when?: string;
}

export namespace AuditLog {
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

export interface ErrorData {
  code?: number;

  message?: string;
}

export interface Identifier {
  /**
   * Identifier
   */
  id?: string;
}

export interface LoadBalancerPreview {
  /**
   * Monitored pool IDs mapped to their respective names.
   */
  pools?: Record<string, string>;

  preview_id?: string;
}

export interface PaginationInfo {
  /**
   * Total number of results for the requested service
   */
  count?: number;

  /**
   * Current page within paginated list of results
   */
  page?: number;

  /**
   * Number of results per page of results
   */
  per_page?: number;

  /**
   * Total results available without any search parameters
   */
  total_count?: number;
}

export interface ResponseInfo {
  code: number;

  message: string;
}

export type Result = Result.UnionMember0 | Result.AaaAPIResponseCommon;

export namespace Result {
  export interface UnionMember0 {
    errors?: unknown | null;

    messages?: Array<unknown>;

    result?: Array<Shared.AuditLog>;

    success?: boolean;
  }

  export interface AaaAPIResponseCommon {
    errors: Array<Shared.ResponseInfo>;

    messages: Array<Shared.ResponseInfo>;

    result: unknown | Array<unknown> | string;

    /**
     * Whether the API call was successful
     */
    success: true;
  }
}

export class AuditLogsV4PagePaginationArray extends V4PagePaginationArray<AuditLog> {}
