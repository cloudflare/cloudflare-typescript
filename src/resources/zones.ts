// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Zones extends APIResource {
  /**
   * Create Zone
   *
   * @example
   * ```ts
   * const zone = await client.zones.create({
   *   account: {},
   *   name: 'example.com',
   * });
   * ```
   */
  create(body: ZoneCreateParams, options?: RequestOptions): APIPromise<ZoneCreateResponse> {
    return this._client.post('/zones', { body, ...options });
  }

  /**
   * Edits a zone. Only one zone property can be changed at a time.
   *
   * @example
   * ```ts
   * const response = await client.zones.edit({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  edit(params: ZoneEditParams, options?: RequestOptions): APIPromise<ZoneEditResponse> {
    const { zone_id, ...body } = params;
    return this._client.patch(path`/zones/${zone_id}`, { body, ...options });
  }

  /**
   * Zone Details
   *
   * @example
   * ```ts
   * const zone = await client.zones.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: ZoneGetParams, options?: RequestOptions): APIPromise<ZoneGetResponse> {
    const { zone_id } = params;
    return this._client.get(path`/zones/${zone_id}`, options);
  }
}

export interface ZoneCreateResponse {
  errors: Array<ZoneCreateResponse.Error>;

  messages: Array<ZoneCreateResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: boolean;

  result?: ZoneCreateResponse.Result;
}

export namespace ZoneCreateResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * Identifier
     */
    id: string;

    /**
     * The account the zone belongs to.
     */
    account: Result.Account;

    /**
     * The last time proof of ownership was detected and the zone was made active.
     */
    activated_on: string | null;

    /**
     * When the zone was created.
     */
    created_on: string;

    /**
     * The interval (in seconds) from when development mode expires (positive integer)
     * or last expired (negative integer) for the domain. If development mode has never
     * been enabled, this value is 0.
     */
    development_mode: number;

    /**
     * Metadata about the zone.
     */
    meta: Result.Meta;

    /**
     * When the zone was last modified.
     */
    modified_on: string;

    /**
     * The domain name.
     */
    name: string;

    /**
     * The name servers Cloudflare assigns to a zone.
     */
    name_servers: Array<string>;

    /**
     * DNS host at the time of switching to Cloudflare.
     */
    original_dnshost: string | null;

    /**
     * Original name servers before moving to Cloudflare.
     */
    original_name_servers: Array<string> | null;

    /**
     * Registrar for the domain at the time of switching to Cloudflare.
     */
    original_registrar: string | null;

    /**
     * The owner of the zone.
     */
    owner: Result.Owner;

    /**
     * @deprecated Please use the `/zones/{zone_id}/subscription` API to update a
     * zone's plan. Changing this value will create/cancel associated subscriptions. To
     * view available plans for this zone, see
     * [Zone Plans](https://developers.cloudflare.com/api/resources/zones/subresources/plans/).
     */
    plan: Result.Plan;

    /**
     * Allows the customer to use a custom apex. _Tenants Only Configuration_.
     */
    cname_suffix?: string;

    /**
     * Indicates whether the zone is only using Cloudflare DNS services. A true value
     * means the zone will not receive security or performance benefits.
     */
    paused?: boolean;

    /**
     * @deprecated This has been replaced by Account memberships.
     */
    permissions?: Array<string>;

    /**
     * The zone status on Cloudflare.
     */
    status?: 'initializing' | 'pending' | 'active' | 'moved';

    /**
     * The root organizational unit that this zone belongs to (such as a tenant or
     * organization).
     */
    tenant?: Result.Tenant;

    /**
     * The immediate parent organizational unit that this zone belongs to (such as
     * under a tenant or sub-organization).
     */
    tenant_unit?: Result.TenantUnit;

    /**
     * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
     * typically a partner-hosted zone or a CNAME setup.
     */
    type?: 'full' | 'partial' | 'secondary' | 'internal';

    /**
     * An array of domains used for custom name servers. This is only available for
     * Business and Enterprise plans.
     */
    vanity_name_servers?: Array<string>;

    /**
     * Verification key for partial zone setup.
     */
    verification_key?: string;
  }

  export namespace Result {
    /**
     * The account the zone belongs to.
     */
    export interface Account {
      /**
       * Identifier
       */
      id?: string;

      /**
       * The name of the account.
       */
      name?: string;
    }

    /**
     * Metadata about the zone.
     */
    export interface Meta {
      /**
       * The zone is only configured for CDN.
       */
      cdn_only?: boolean;

      /**
       * Number of Custom Certificates the zone can have.
       */
      custom_certificate_quota?: number;

      /**
       * The zone is only configured for DNS.
       */
      dns_only?: boolean;

      /**
       * The zone is setup with Foundation DNS.
       */
      foundation_dns?: boolean;

      /**
       * Number of Page Rules a zone can have.
       */
      page_rule_quota?: number;

      /**
       * The zone has been flagged for phishing.
       */
      phishing_detected?: boolean;

      step?: number;
    }

    /**
     * The owner of the zone.
     */
    export interface Owner {
      /**
       * Identifier
       */
      id?: string;

      /**
       * Name of the owner.
       */
      name?: string;

      /**
       * The type of owner.
       */
      type?: string;
    }

    /**
     * @deprecated Please use the `/zones/{zone_id}/subscription` API to update a
     * zone's plan. Changing this value will create/cancel associated subscriptions. To
     * view available plans for this zone, see
     * [Zone Plans](https://developers.cloudflare.com/api/resources/zones/subresources/plans/).
     */
    export interface Plan {
      /**
       * Identifier
       */
      id?: string;

      /**
       * States if the subscription can be activated.
       */
      can_subscribe?: boolean;

      /**
       * The denomination of the customer.
       */
      currency?: string;

      /**
       * If this Zone is managed by another company.
       */
      externally_managed?: boolean;

      /**
       * How often the customer is billed.
       */
      frequency?: string;

      /**
       * States if the subscription active.
       */
      is_subscribed?: boolean;

      /**
       * If the legacy discount applies to this Zone.
       */
      legacy_discount?: boolean;

      /**
       * The legacy name of the plan.
       */
      legacy_id?: string;

      /**
       * Name of the owner.
       */
      name?: string;

      /**
       * How much the customer is paying.
       */
      price?: number;
    }

    /**
     * The root organizational unit that this zone belongs to (such as a tenant or
     * organization).
     */
    export interface Tenant {
      /**
       * Identifier
       */
      id?: string;

      /**
       * The name of the Tenant account.
       */
      name?: string;
    }

    /**
     * The immediate parent organizational unit that this zone belongs to (such as
     * under a tenant or sub-organization).
     */
    export interface TenantUnit {
      /**
       * Identifier
       */
      id?: string;
    }
  }
}

export interface ZoneEditResponse {
  errors: Array<ZoneEditResponse.Error>;

  messages: Array<ZoneEditResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: boolean;

  result?: ZoneEditResponse.Result;
}

export namespace ZoneEditResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * Identifier
     */
    id: string;

    /**
     * The account the zone belongs to.
     */
    account: Result.Account;

    /**
     * The last time proof of ownership was detected and the zone was made active.
     */
    activated_on: string | null;

    /**
     * When the zone was created.
     */
    created_on: string;

    /**
     * The interval (in seconds) from when development mode expires (positive integer)
     * or last expired (negative integer) for the domain. If development mode has never
     * been enabled, this value is 0.
     */
    development_mode: number;

    /**
     * Metadata about the zone.
     */
    meta: Result.Meta;

    /**
     * When the zone was last modified.
     */
    modified_on: string;

    /**
     * The domain name.
     */
    name: string;

    /**
     * The name servers Cloudflare assigns to a zone.
     */
    name_servers: Array<string>;

    /**
     * DNS host at the time of switching to Cloudflare.
     */
    original_dnshost: string | null;

    /**
     * Original name servers before moving to Cloudflare.
     */
    original_name_servers: Array<string> | null;

    /**
     * Registrar for the domain at the time of switching to Cloudflare.
     */
    original_registrar: string | null;

    /**
     * The owner of the zone.
     */
    owner: Result.Owner;

    /**
     * @deprecated Please use the `/zones/{zone_id}/subscription` API to update a
     * zone's plan. Changing this value will create/cancel associated subscriptions. To
     * view available plans for this zone, see
     * [Zone Plans](https://developers.cloudflare.com/api/resources/zones/subresources/plans/).
     */
    plan: Result.Plan;

    /**
     * Allows the customer to use a custom apex. _Tenants Only Configuration_.
     */
    cname_suffix?: string;

    /**
     * Indicates whether the zone is only using Cloudflare DNS services. A true value
     * means the zone will not receive security or performance benefits.
     */
    paused?: boolean;

    /**
     * @deprecated This has been replaced by Account memberships.
     */
    permissions?: Array<string>;

    /**
     * The zone status on Cloudflare.
     */
    status?: 'initializing' | 'pending' | 'active' | 'moved';

    /**
     * The root organizational unit that this zone belongs to (such as a tenant or
     * organization).
     */
    tenant?: Result.Tenant;

    /**
     * The immediate parent organizational unit that this zone belongs to (such as
     * under a tenant or sub-organization).
     */
    tenant_unit?: Result.TenantUnit;

    /**
     * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
     * typically a partner-hosted zone or a CNAME setup.
     */
    type?: 'full' | 'partial' | 'secondary' | 'internal';

    /**
     * An array of domains used for custom name servers. This is only available for
     * Business and Enterprise plans.
     */
    vanity_name_servers?: Array<string>;

    /**
     * Verification key for partial zone setup.
     */
    verification_key?: string;
  }

  export namespace Result {
    /**
     * The account the zone belongs to.
     */
    export interface Account {
      /**
       * Identifier
       */
      id?: string;

      /**
       * The name of the account.
       */
      name?: string;
    }

    /**
     * Metadata about the zone.
     */
    export interface Meta {
      /**
       * The zone is only configured for CDN.
       */
      cdn_only?: boolean;

      /**
       * Number of Custom Certificates the zone can have.
       */
      custom_certificate_quota?: number;

      /**
       * The zone is only configured for DNS.
       */
      dns_only?: boolean;

      /**
       * The zone is setup with Foundation DNS.
       */
      foundation_dns?: boolean;

      /**
       * Number of Page Rules a zone can have.
       */
      page_rule_quota?: number;

      /**
       * The zone has been flagged for phishing.
       */
      phishing_detected?: boolean;

      step?: number;
    }

    /**
     * The owner of the zone.
     */
    export interface Owner {
      /**
       * Identifier
       */
      id?: string;

      /**
       * Name of the owner.
       */
      name?: string;

      /**
       * The type of owner.
       */
      type?: string;
    }

    /**
     * @deprecated Please use the `/zones/{zone_id}/subscription` API to update a
     * zone's plan. Changing this value will create/cancel associated subscriptions. To
     * view available plans for this zone, see
     * [Zone Plans](https://developers.cloudflare.com/api/resources/zones/subresources/plans/).
     */
    export interface Plan {
      /**
       * Identifier
       */
      id?: string;

      /**
       * States if the subscription can be activated.
       */
      can_subscribe?: boolean;

      /**
       * The denomination of the customer.
       */
      currency?: string;

      /**
       * If this Zone is managed by another company.
       */
      externally_managed?: boolean;

      /**
       * How often the customer is billed.
       */
      frequency?: string;

      /**
       * States if the subscription active.
       */
      is_subscribed?: boolean;

      /**
       * If the legacy discount applies to this Zone.
       */
      legacy_discount?: boolean;

      /**
       * The legacy name of the plan.
       */
      legacy_id?: string;

      /**
       * Name of the owner.
       */
      name?: string;

      /**
       * How much the customer is paying.
       */
      price?: number;
    }

    /**
     * The root organizational unit that this zone belongs to (such as a tenant or
     * organization).
     */
    export interface Tenant {
      /**
       * Identifier
       */
      id?: string;

      /**
       * The name of the Tenant account.
       */
      name?: string;
    }

    /**
     * The immediate parent organizational unit that this zone belongs to (such as
     * under a tenant or sub-organization).
     */
    export interface TenantUnit {
      /**
       * Identifier
       */
      id?: string;
    }
  }
}

export interface ZoneGetResponse {
  errors: Array<ZoneGetResponse.Error>;

  messages: Array<ZoneGetResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: boolean;

  result?: ZoneGetResponse.Result;
}

export namespace ZoneGetResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    /**
     * Identifier
     */
    id: string;

    /**
     * The account the zone belongs to.
     */
    account: Result.Account;

    /**
     * The last time proof of ownership was detected and the zone was made active.
     */
    activated_on: string | null;

    /**
     * When the zone was created.
     */
    created_on: string;

    /**
     * The interval (in seconds) from when development mode expires (positive integer)
     * or last expired (negative integer) for the domain. If development mode has never
     * been enabled, this value is 0.
     */
    development_mode: number;

    /**
     * Metadata about the zone.
     */
    meta: Result.Meta;

    /**
     * When the zone was last modified.
     */
    modified_on: string;

    /**
     * The domain name.
     */
    name: string;

    /**
     * The name servers Cloudflare assigns to a zone.
     */
    name_servers: Array<string>;

    /**
     * DNS host at the time of switching to Cloudflare.
     */
    original_dnshost: string | null;

    /**
     * Original name servers before moving to Cloudflare.
     */
    original_name_servers: Array<string> | null;

    /**
     * Registrar for the domain at the time of switching to Cloudflare.
     */
    original_registrar: string | null;

    /**
     * The owner of the zone.
     */
    owner: Result.Owner;

    /**
     * @deprecated Please use the `/zones/{zone_id}/subscription` API to update a
     * zone's plan. Changing this value will create/cancel associated subscriptions. To
     * view available plans for this zone, see
     * [Zone Plans](https://developers.cloudflare.com/api/resources/zones/subresources/plans/).
     */
    plan: Result.Plan;

    /**
     * Allows the customer to use a custom apex. _Tenants Only Configuration_.
     */
    cname_suffix?: string;

    /**
     * Indicates whether the zone is only using Cloudflare DNS services. A true value
     * means the zone will not receive security or performance benefits.
     */
    paused?: boolean;

    /**
     * @deprecated This has been replaced by Account memberships.
     */
    permissions?: Array<string>;

    /**
     * The zone status on Cloudflare.
     */
    status?: 'initializing' | 'pending' | 'active' | 'moved';

    /**
     * The root organizational unit that this zone belongs to (such as a tenant or
     * organization).
     */
    tenant?: Result.Tenant;

    /**
     * The immediate parent organizational unit that this zone belongs to (such as
     * under a tenant or sub-organization).
     */
    tenant_unit?: Result.TenantUnit;

    /**
     * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
     * typically a partner-hosted zone or a CNAME setup.
     */
    type?: 'full' | 'partial' | 'secondary' | 'internal';

    /**
     * An array of domains used for custom name servers. This is only available for
     * Business and Enterprise plans.
     */
    vanity_name_servers?: Array<string>;

    /**
     * Verification key for partial zone setup.
     */
    verification_key?: string;
  }

  export namespace Result {
    /**
     * The account the zone belongs to.
     */
    export interface Account {
      /**
       * Identifier
       */
      id?: string;

      /**
       * The name of the account.
       */
      name?: string;
    }

    /**
     * Metadata about the zone.
     */
    export interface Meta {
      /**
       * The zone is only configured for CDN.
       */
      cdn_only?: boolean;

      /**
       * Number of Custom Certificates the zone can have.
       */
      custom_certificate_quota?: number;

      /**
       * The zone is only configured for DNS.
       */
      dns_only?: boolean;

      /**
       * The zone is setup with Foundation DNS.
       */
      foundation_dns?: boolean;

      /**
       * Number of Page Rules a zone can have.
       */
      page_rule_quota?: number;

      /**
       * The zone has been flagged for phishing.
       */
      phishing_detected?: boolean;

      step?: number;
    }

    /**
     * The owner of the zone.
     */
    export interface Owner {
      /**
       * Identifier
       */
      id?: string;

      /**
       * Name of the owner.
       */
      name?: string;

      /**
       * The type of owner.
       */
      type?: string;
    }

    /**
     * @deprecated Please use the `/zones/{zone_id}/subscription` API to update a
     * zone's plan. Changing this value will create/cancel associated subscriptions. To
     * view available plans for this zone, see
     * [Zone Plans](https://developers.cloudflare.com/api/resources/zones/subresources/plans/).
     */
    export interface Plan {
      /**
       * Identifier
       */
      id?: string;

      /**
       * States if the subscription can be activated.
       */
      can_subscribe?: boolean;

      /**
       * The denomination of the customer.
       */
      currency?: string;

      /**
       * If this Zone is managed by another company.
       */
      externally_managed?: boolean;

      /**
       * How often the customer is billed.
       */
      frequency?: string;

      /**
       * States if the subscription active.
       */
      is_subscribed?: boolean;

      /**
       * If the legacy discount applies to this Zone.
       */
      legacy_discount?: boolean;

      /**
       * The legacy name of the plan.
       */
      legacy_id?: string;

      /**
       * Name of the owner.
       */
      name?: string;

      /**
       * How much the customer is paying.
       */
      price?: number;
    }

    /**
     * The root organizational unit that this zone belongs to (such as a tenant or
     * organization).
     */
    export interface Tenant {
      /**
       * Identifier
       */
      id?: string;

      /**
       * The name of the Tenant account.
       */
      name?: string;
    }

    /**
     * The immediate parent organizational unit that this zone belongs to (such as
     * under a tenant or sub-organization).
     */
    export interface TenantUnit {
      /**
       * Identifier
       */
      id?: string;
    }
  }
}

export interface ZoneCreateParams {
  account: ZoneCreateParams.Account;

  /**
   * The domain name.
   */
  name: string;

  /**
   * A full zone implies that DNS is hosted with Cloudflare. A partial zone is
   * typically a partner-hosted zone or a CNAME setup.
   */
  type?: 'full' | 'partial' | 'secondary' | 'internal';
}

export namespace ZoneCreateParams {
  export interface Account {
    /**
     * Identifier
     */
    id?: string;
  }
}

export interface ZoneEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Indicates whether the zone is only using Cloudflare DNS services. A
   * true value means the zone will not receive security or performance benefits.
   */
  paused?: boolean;

  /**
   * Body param: (Deprecated) Please use the `/zones/{zone_id}/subscription` API to
   * update a zone's plan. Changing this value will create/cancel associated
   * subscriptions. To view available plans for this zone, see Zone Plans.
   */
  plan?: ZoneEditParams.Plan;

  /**
   * Body param: A full zone implies that DNS is hosted with Cloudflare. A partial
   * zone is typically a partner-hosted zone or a CNAME setup. This parameter is only
   * available to Enterprise customers or if it has been explicitly enabled on a
   * zone.
   */
  type?: 'full' | 'partial' | 'secondary' | 'internal';

  /**
   * Body param: An array of domains used for custom name servers. This is only
   * available for Business and Enterprise plans.
   */
  vanity_name_servers?: Array<string>;
}

export namespace ZoneEditParams {
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

export interface ZoneGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Zones {
  export {
    type ZoneCreateResponse as ZoneCreateResponse,
    type ZoneEditResponse as ZoneEditResponse,
    type ZoneGetResponse as ZoneGetResponse,
    type ZoneCreateParams as ZoneCreateParams,
    type ZoneEditParams as ZoneEditParams,
    type ZoneGetParams as ZoneGetParams,
  };
}
