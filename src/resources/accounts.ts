// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Accounts extends APIResource {
  /**
   * List all accounts you have ownership or verified access to.
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountListResponsesV4PagePaginationArray, AccountListResponse> {
    return this._client.getAPIList('/accounts', V4PagePaginationArray<AccountListResponse>, {
      query,
      ...options,
    });
  }
}

export type AccountListResponsesV4PagePaginationArray = V4PagePaginationArray<AccountListResponse>;

export interface AccountListResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Account name
   */
  name: string;

  type: 'standard' | 'enterprise';

  /**
   * Timestamp for the creation of the account
   */
  created_on?: string;

  /**
   * Parent container details
   */
  managed_by?: AccountListResponse.ManagedBy;

  /**
   * Account settings
   */
  settings?: AccountListResponse.Settings;
}

export namespace AccountListResponse {
  /**
   * Parent container details
   */
  export interface ManagedBy {
    /**
     * ID of the parent Organization, if one exists
     */
    parent_org_id?: string;

    /**
     * Name of the parent Organization, if one exists
     */
    parent_org_name?: string;
  }

  /**
   * Account settings
   */
  export interface Settings {
    /**
     * Sets an abuse contact email to notify for abuse reports.
     */
    abuse_contact_email?: string;

    /**
     * Indicates whether membership in this account requires that Two-Factor
     * Authentication is enabled
     */
    enforce_twofactor?: boolean;
  }
}

export interface AccountListParams extends V4PagePaginationArrayParams {
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Name of the account.
   */
  name?: string;
}

export declare namespace Accounts {
  export {
    type AccountListResponse as AccountListResponse,
    type AccountListResponsesV4PagePaginationArray as AccountListResponsesV4PagePaginationArray,
    type AccountListParams as AccountListParams,
  };
}
