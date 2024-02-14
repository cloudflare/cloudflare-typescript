// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ZonesAPI from 'cloudflare/resources/zones';

export class Zones extends APIResource {
  /**
   * Create Zone
   */
  create(body: ZoneCreateParams, options?: Core.RequestOptions): Core.APIPromise<ZoneCreateResponse> {
    return (
      this._client.post('/zones', { body, ...options }) as Core.APIPromise<{ result: ZoneCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists, searches, sorts, and filters your zones.
   */
  list(query?: ZoneListParams, options?: Core.RequestOptions): Core.APIPromise<ZoneListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ZoneListResponse>;
  list(
    query: ZoneListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/zones', { query, ...options }) as Core.APIPromise<{ result: ZoneListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ZoneCreateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The account the zone belongs to
   */
  account: ZoneCreateResponse.Account;

  /**
   * The last time proof of ownership was detected and the zone was made active
   */
  activated_on: string | null;

  /**
   * When the zone was created
   */
  created_on: string;

  /**
   * The interval (in seconds) from when development mode expires (positive integer)
   * or last expired (negative integer) for the domain. If development mode has never
   * been enabled, this value is 0.
   */
  development_mode: number;

  /**
   * Metadata about the zone
   */
  meta: ZoneCreateResponse.Meta;

  /**
   * When the zone was last modified
   */
  modified_on: string;

  /**
   * The domain name
   */
  name: string;

  /**
   * DNS host at the time of switching to Cloudflare
   */
  original_dnshost: string | null;

  /**
   * Original name servers before moving to Cloudflare Notes: Is this only available
   * for full zones?
   */
  original_name_servers: Array<string> | null;

  /**
   * Registrar for the domain at the time of switching to Cloudflare
   */
  original_registrar: string | null;

  /**
   * The owner of the zone
   */
  owner: ZoneCreateResponse.Owner;

  /**
   * An array of domains used for custom name servers. This is only available for
   * Business and Enterprise plans.
   */
  vanity_name_servers?: Array<string>;
}

export namespace ZoneCreateResponse {
  /**
   * The account the zone belongs to
   */
  export interface Account {
    /**
     * Identifier
     */
    id?: string;

    /**
     * The name of the account
     */
    name?: string;
  }

  /**
   * Metadata about the zone
   */
  export interface Meta {
    /**
     * The zone is only configured for CDN
     */
    cdn_only?: boolean;

    /**
     * Number of Custom Certificates the zone can have
     */
    custom_certificate_quota?: number;

    /**
     * The zone is only configured for DNS
     */
    dns_only?: boolean;

    /**
     * The zone is setup with Foundation DNS
     */
    foundation_dns?: boolean;

    /**
     * Number of Page Rules a zone can have
     */
    page_rule_quota?: number;

    /**
     * The zone has been flagged for phishing
     */
    phishing_detected?: boolean;

    step?: number;
  }

  /**
   * The owner of the zone
   */
  export interface Owner {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Name of the owner
     */
    name?: string;

    /**
     * The type of owner
     */
    type?: string;
  }
}

export type ZoneListResponse = Array<ZoneListResponse.ZoneListResponseItem>;

export namespace ZoneListResponse {
  export interface ZoneListResponseItem {
    /**
     * Identifier
     */
    id: string;

    /**
     * The account the zone belongs to
     */
    account: ZoneListResponseItem.Account;

    /**
     * The last time proof of ownership was detected and the zone was made active
     */
    activated_on: string | null;

    /**
     * When the zone was created
     */
    created_on: string;

    /**
     * The interval (in seconds) from when development mode expires (positive integer)
     * or last expired (negative integer) for the domain. If development mode has never
     * been enabled, this value is 0.
     */
    development_mode: number;

    /**
     * Metadata about the zone
     */
    meta: ZoneListResponseItem.Meta;

    /**
     * When the zone was last modified
     */
    modified_on: string;

    /**
     * The domain name
     */
    name: string;

    /**
     * DNS host at the time of switching to Cloudflare
     */
    original_dnshost: string | null;

    /**
     * Original name servers before moving to Cloudflare Notes: Is this only available
     * for full zones?
     */
    original_name_servers: Array<string> | null;

    /**
     * Registrar for the domain at the time of switching to Cloudflare
     */
    original_registrar: string | null;

    /**
     * The owner of the zone
     */
    owner: ZoneListResponseItem.Owner;

    /**
     * An array of domains used for custom name servers. This is only available for
     * Business and Enterprise plans.
     */
    vanity_name_servers?: Array<string>;
  }

  export namespace ZoneListResponseItem {
    /**
     * The account the zone belongs to
     */
    export interface Account {
      /**
       * Identifier
       */
      id?: string;

      /**
       * The name of the account
       */
      name?: string;
    }

    /**
     * Metadata about the zone
     */
    export interface Meta {
      /**
       * The zone is only configured for CDN
       */
      cdn_only?: boolean;

      /**
       * Number of Custom Certificates the zone can have
       */
      custom_certificate_quota?: number;

      /**
       * The zone is only configured for DNS
       */
      dns_only?: boolean;

      /**
       * The zone is setup with Foundation DNS
       */
      foundation_dns?: boolean;

      /**
       * Number of Page Rules a zone can have
       */
      page_rule_quota?: number;

      /**
       * The zone has been flagged for phishing
       */
      phishing_detected?: boolean;

      step?: number;
    }

    /**
     * The owner of the zone
     */
    export interface Owner {
      /**
       * Identifier
       */
      id?: string;

      /**
       * Name of the owner
       */
      name?: string;

      /**
       * The type of owner
       */
      type?: string;
    }
  }
}

export interface ZoneCreateParams {
  account: ZoneCreateParams.Account;

  /**
   * The domain name
   */
  name: string;

  /**
   * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
   * typically a partner-hosted zone or a CNAME setup.
   */
  type?: 'full' | 'partial' | 'secondary';
}

export namespace ZoneCreateParams {
  export interface Account {
    /**
     * Identifier
     */
    id?: string;
  }
}

export interface ZoneListParams {
  account?: ZoneListParams.Account;

  /**
   * Direction to order zones.
   */
  direction?: 'asc' | 'desc';

  /**
   * Whether to match all search requirements or at least one (any).
   */
  match?: 'any' | 'all';

  /**
   * A domain name. Optional filter operators can be provided to extend refine the
   * search:
   *
   * - `equal` (default)
   * - `not_equal`
   * - `starts_with`
   * - `ends_with`
   * - `contains`
   * - `starts_with_case_sensitive`
   * - `ends_with_case_sensitive`
   * - `contains_case_sensitive`
   */
  name?: string;

  /**
   * Field to order zones by.
   */
  order?: 'name' | 'status' | 'account.id' | 'account.name';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of zones per page.
   */
  per_page?: number;

  /**
   * A zone status
   */
  status?: 'initializing' | 'pending' | 'active' | 'moved';
}

export namespace ZoneListParams {
  export interface Account {
    /**
     * An account ID
     */
    id?: string;

    /**
     * An account Name. Optional filter operators can be provided to extend refine the
     * search:
     *
     * - `equal` (default)
     * - `not_equal`
     * - `starts_with`
     * - `ends_with`
     * - `contains`
     * - `starts_with_case_sensitive`
     * - `ends_with_case_sensitive`
     * - `contains_case_sensitive`
     */
    name?: string;
  }
}

export namespace Zones {
  export import ZoneCreateResponse = ZonesAPI.ZoneCreateResponse;
  export import ZoneListResponse = ZonesAPI.ZoneListResponse;
  export import ZoneCreateParams = ZonesAPI.ZoneCreateParams;
  export import ZoneListParams = ZonesAPI.ZoneListParams;
}
