// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ZonesAPI from 'cloudflare/resources/zones/zones';
import * as HoldAPI from 'cloudflare/resources/zones/hold';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Zones extends APIResource {
  hold: HoldAPI.Hold = new HoldAPI.Hold(this._client);

  /**
   * Create Zone
   */
  create(body: ZoneCreateParams, options?: Core.RequestOptions): Core.APIPromise<ZoneCreateResponse> {
    return (
      this._client.post('/zones', { body, ...options }) as Core.APIPromise<{ result: ZoneCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edits a zone. Only one zone property can be changed at a time.
   */
  update(
    zoneId: string,
    body: ZoneUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}`, { body, ...options }) as Core.APIPromise<{
        result: ZoneUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists, searches, sorts, and filters your zones.
   */
  list(
    query?: ZoneListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZoneListResponsesV4PagePaginationArray, ZoneListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZoneListResponsesV4PagePaginationArray, ZoneListResponse>;
  list(
    query: ZoneListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZoneListResponsesV4PagePaginationArray, ZoneListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/zones', ZoneListResponsesV4PagePaginationArray, { query, ...options });
  }

  /**
   * Deletes an existing zone.
   */
  delete(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<ZoneDeleteResponse | null> {
    return (
      this._client.delete(`/zones/${zoneId}`, options) as Core.APIPromise<{
        result: ZoneDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Zone Details
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<ZoneGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}`, options) as Core.APIPromise<{ result: ZoneGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ZoneListResponsesV4PagePaginationArray extends V4PagePaginationArray<ZoneListResponse> {}

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

export interface ZoneUpdateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The account the zone belongs to
   */
  account: ZoneUpdateResponse.Account;

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
  meta: ZoneUpdateResponse.Meta;

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
  owner: ZoneUpdateResponse.Owner;

  /**
   * An array of domains used for custom name servers. This is only available for
   * Business and Enterprise plans.
   */
  vanity_name_servers?: Array<string>;
}

export namespace ZoneUpdateResponse {
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

export interface ZoneListResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The account the zone belongs to
   */
  account: ZoneListResponse.Account;

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
  meta: ZoneListResponse.Meta;

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
  owner: ZoneListResponse.Owner;

  /**
   * An array of domains used for custom name servers. This is only available for
   * Business and Enterprise plans.
   */
  vanity_name_servers?: Array<string>;
}

export namespace ZoneListResponse {
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

export interface ZoneDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface ZoneGetResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The account the zone belongs to
   */
  account: ZoneGetResponse.Account;

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
  meta: ZoneGetResponse.Meta;

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
  owner: ZoneGetResponse.Owner;

  /**
   * An array of domains used for custom name servers. This is only available for
   * Business and Enterprise plans.
   */
  vanity_name_servers?: Array<string>;
}

export namespace ZoneGetResponse {
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

export interface ZoneUpdateParams {
  /**
   * (Deprecated) Please use the `/zones/{zone_id}/subscription` API to update a
   * zone's plan. Changing this value will create/cancel associated subscriptions. To
   * view available plans for this zone, see Zone Plans.
   */
  plan?: ZoneUpdateParams.Plan;

  /**
   * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
   * typically a partner-hosted zone or a CNAME setup. This parameter is only
   * available to Enterprise customers or if it has been explicitly enabled on a
   * zone.
   */
  type?: 'full' | 'partial' | 'secondary';

  /**
   * An array of domains used for custom name servers. This is only available for
   * Business and Enterprise plans.
   */
  vanity_name_servers?: Array<string>;
}

export namespace ZoneUpdateParams {
  /**
   * (Deprecated) Please use the `/zones/{zone_id}/subscription` API to update a
   * zone's plan. Changing this value will create/cancel associated subscriptions. To
   * view available plans for this zone, see Zone Plans.
   */
  export interface Plan {
    /**
     * Identifier
     */
    id?: string;
  }
}

export interface ZoneListParams extends V4PagePaginationArrayParams {
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
  export import ZoneUpdateResponse = ZonesAPI.ZoneUpdateResponse;
  export import ZoneListResponse = ZonesAPI.ZoneListResponse;
  export import ZoneDeleteResponse = ZonesAPI.ZoneDeleteResponse;
  export import ZoneGetResponse = ZonesAPI.ZoneGetResponse;
  export import ZoneListResponsesV4PagePaginationArray = ZonesAPI.ZoneListResponsesV4PagePaginationArray;
  export import ZoneCreateParams = ZonesAPI.ZoneCreateParams;
  export import ZoneUpdateParams = ZonesAPI.ZoneUpdateParams;
  export import ZoneListParams = ZonesAPI.ZoneListParams;
  export import Hold = HoldAPI.Hold;
  export import HoldEnforceResponse = HoldAPI.HoldEnforceResponse;
  export import HoldGetResponse = HoldAPI.HoldGetResponse;
  export import HoldRemoveResponse = HoldAPI.HoldRemoveResponse;
  export import HoldEnforceParams = HoldAPI.HoldEnforceParams;
  export import HoldRemoveParams = HoldAPI.HoldRemoveParams;
}
