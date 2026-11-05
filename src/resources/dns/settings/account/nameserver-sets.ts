// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseNameserverSets extends APIResource {
  static override readonly _key: readonly ['dns', 'settings', 'account', 'nameserverSets'] = Object.freeze([
    'dns',
    'settings',
    'account',
    'nameserverSets',
  ] as const);

  /**
   * Creates a named Custom Nameserver Set. Only the customer-defined name can be
   * changed later. To change nameservers or addresses, create a new set, move any
   * zone assignments, and delete the old set. For details, refer to
   * [Nameserver sets](https://developers.cloudflare.com/dns/nameservers/custom-nameservers/nameserver-sets/).
   *
   * @example
   * ```ts
   * const nameserverSet =
   *   await client.dns.settings.account.nameserverSets.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'Production nameservers',
   *     nameservers: [{ name: 'ns1.example.com' }],
   *   });
   * ```
   */
  create(
    params: NameserverSetCreateParams,
    options?: RequestOptions,
  ): APIPromise<NameserverSetCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dns_settings/nameserver_sets`, {
        body,
        ...options,
      }) as APIPromise<{ result: NameserverSetCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists an account's Custom Nameserver Sets. For details, refer to
   * [Nameserver sets](https://developers.cloudflare.com/dns/nameservers/custom-nameservers/nameserver-sets/).
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const nameserverSetListResponse of client.dns.settings.account.nameserverSets.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: NameserverSetListParams,
    options?: RequestOptions,
  ): PagePromise<NameserverSetListResponsesV4PagePaginationArray, NameserverSetListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dns_settings/nameserver_sets`,
      V4PagePaginationArray<NameserverSetListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes an unassigned Custom Nameserver Set. For details, refer to
   * [Nameserver sets](https://developers.cloudflare.com/dns/nameservers/custom-nameservers/nameserver-sets/).
   *
   * @example
   * ```ts
   * const nameserverSet =
   *   await client.dns.settings.account.nameserverSets.delete(
   *     '0123456789abcdef0123456789abcdef',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    nameserverSetID: string,
    params: NameserverSetDeleteParams,
    options?: RequestOptions,
  ): APIPromise<NameserverSetDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/dns_settings/nameserver_sets/${nameserverSetID}`,
        options,
      ) as APIPromise<{ result: NameserverSetDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a Custom Nameserver Set owned by an account. For details, refer to
   * [Nameserver sets](https://developers.cloudflare.com/dns/nameservers/custom-nameservers/nameserver-sets/).
   *
   * @example
   * ```ts
   * const nameserverSet =
   *   await client.dns.settings.account.nameserverSets.get(
   *     '0123456789abcdef0123456789abcdef',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    nameserverSetID: string,
    params: NameserverSetGetParams,
    options?: RequestOptions,
  ): APIPromise<NameserverSetGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/dns_settings/nameserver_sets/${nameserverSetID}`,
        options,
      ) as APIPromise<{ result: NameserverSetGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class NameserverSets extends BaseNameserverSets {}

export type NameserverSetListResponsesV4PagePaginationArray =
  V4PagePaginationArray<NameserverSetListResponse>;

export type NameserverSetCreateResponse =
  | NameserverSetCreateResponse.DNSSettingsNameserverSetStandardResponse
  | NameserverSetCreateResponse.DNSSettingsNameserverSetAdvancedResponse;

export namespace NameserverSetCreateResponse {
  export interface DNSSettingsNameserverSetStandardResponse {
    /**
     * Identifier for a nameserver set.
     */
    id: string;

    /**
     * Whether the nameserver set uses Advanced anycast groups.
     */
    advanced: false;

    /**
     * When the nameserver set was created.
     */
    created_on: string;

    /**
     * Selects the account-specific IP set that supplies the nameserver addresses.
     * Nameserver sets with the same `ip_set` and `advanced` value may reuse addresses;
     * otherwise, they use disjoint address groups.
     */
    ip_set: number;

    /**
     * Customer-defined name, unique within the account by exact string equality
     * (case-sensitive, with no Unicode normalization). Must be valid UTF-8 and at most
     * 255 UTF-8 bytes, not 255 characters. Only graphical Unicode characters are
     * allowed; leading or trailing whitespace is rejected. The name can be changed
     * without changing the set's nameservers or addresses.
     */
    name: string;

    nameservers: Array<DNSSettingsNameserverSetStandardResponse.Nameserver>;
  }

  export namespace DNSSettingsNameserverSetStandardResponse {
    export interface Nameserver {
      /**
       * IPv4 addresses assigned to the nameserver.
       */
      ipv4: Array<string>;

      /**
       * IPv6 addresses assigned to the nameserver.
       */
      ipv6: Array<string>;

      /**
       * A unique lowercase Punycode nameserver name within the set.
       */
      name: string;
    }
  }

  export interface DNSSettingsNameserverSetAdvancedResponse {
    /**
     * Identifier for a nameserver set.
     */
    id: string;

    /**
     * Whether the nameserver set uses Advanced anycast groups.
     */
    advanced: true;

    /**
     * When the nameserver set was created.
     */
    created_on: string;

    /**
     * Selects the account-specific IP set that supplies the nameserver addresses.
     * Nameserver sets with the same `ip_set` and `advanced` value may reuse addresses;
     * otherwise, they use disjoint address groups.
     */
    ip_set: number;

    /**
     * Customer-defined name, unique within the account by exact string equality
     * (case-sensitive, with no Unicode normalization). Must be valid UTF-8 and at most
     * 255 UTF-8 bytes, not 255 characters. Only graphical Unicode characters are
     * allowed; leading or trailing whitespace is rejected. The name can be changed
     * without changing the set's nameservers or addresses.
     */
    name: string;

    nameservers: Array<DNSSettingsNameserverSetAdvancedResponse.Nameserver>;
  }

  export namespace DNSSettingsNameserverSetAdvancedResponse {
    export interface Nameserver {
      /**
       * IPv4 addresses assigned to the nameserver.
       */
      ipv4: Array<string>;

      /**
       * Advanced anycast group for each address in the corresponding address array.
       * Entries have the same order as, and correspond one-to-one with, the addresses.
       */
      ipv4_groups: Array<'a' | 'b' | 'c'>;

      /**
       * IPv6 addresses assigned to the nameserver.
       */
      ipv6: Array<string>;

      /**
       * Advanced anycast group for each address in the corresponding address array.
       * Entries have the same order as, and correspond one-to-one with, the addresses.
       */
      ipv6_groups: Array<'a' | 'b' | 'c'>;

      /**
       * A unique lowercase Punycode nameserver name within the set.
       */
      name: string;
    }
  }
}

export type NameserverSetListResponse =
  | NameserverSetListResponse.DNSSettingsNameserverSetStandardResponse
  | NameserverSetListResponse.DNSSettingsNameserverSetAdvancedResponse;

export namespace NameserverSetListResponse {
  export interface DNSSettingsNameserverSetStandardResponse {
    /**
     * Identifier for a nameserver set.
     */
    id: string;

    /**
     * Whether the nameserver set uses Advanced anycast groups.
     */
    advanced: false;

    /**
     * When the nameserver set was created.
     */
    created_on: string;

    /**
     * Selects the account-specific IP set that supplies the nameserver addresses.
     * Nameserver sets with the same `ip_set` and `advanced` value may reuse addresses;
     * otherwise, they use disjoint address groups.
     */
    ip_set: number;

    /**
     * Customer-defined name, unique within the account by exact string equality
     * (case-sensitive, with no Unicode normalization). Must be valid UTF-8 and at most
     * 255 UTF-8 bytes, not 255 characters. Only graphical Unicode characters are
     * allowed; leading or trailing whitespace is rejected. The name can be changed
     * without changing the set's nameservers or addresses.
     */
    name: string;

    nameservers: Array<DNSSettingsNameserverSetStandardResponse.Nameserver>;
  }

  export namespace DNSSettingsNameserverSetStandardResponse {
    export interface Nameserver {
      /**
       * IPv4 addresses assigned to the nameserver.
       */
      ipv4: Array<string>;

      /**
       * IPv6 addresses assigned to the nameserver.
       */
      ipv6: Array<string>;

      /**
       * A unique lowercase Punycode nameserver name within the set.
       */
      name: string;
    }
  }

  export interface DNSSettingsNameserverSetAdvancedResponse {
    /**
     * Identifier for a nameserver set.
     */
    id: string;

    /**
     * Whether the nameserver set uses Advanced anycast groups.
     */
    advanced: true;

    /**
     * When the nameserver set was created.
     */
    created_on: string;

    /**
     * Selects the account-specific IP set that supplies the nameserver addresses.
     * Nameserver sets with the same `ip_set` and `advanced` value may reuse addresses;
     * otherwise, they use disjoint address groups.
     */
    ip_set: number;

    /**
     * Customer-defined name, unique within the account by exact string equality
     * (case-sensitive, with no Unicode normalization). Must be valid UTF-8 and at most
     * 255 UTF-8 bytes, not 255 characters. Only graphical Unicode characters are
     * allowed; leading or trailing whitespace is rejected. The name can be changed
     * without changing the set's nameservers or addresses.
     */
    name: string;

    nameservers: Array<DNSSettingsNameserverSetAdvancedResponse.Nameserver>;
  }

  export namespace DNSSettingsNameserverSetAdvancedResponse {
    export interface Nameserver {
      /**
       * IPv4 addresses assigned to the nameserver.
       */
      ipv4: Array<string>;

      /**
       * Advanced anycast group for each address in the corresponding address array.
       * Entries have the same order as, and correspond one-to-one with, the addresses.
       */
      ipv4_groups: Array<'a' | 'b' | 'c'>;

      /**
       * IPv6 addresses assigned to the nameserver.
       */
      ipv6: Array<string>;

      /**
       * Advanced anycast group for each address in the corresponding address array.
       * Entries have the same order as, and correspond one-to-one with, the addresses.
       */
      ipv6_groups: Array<'a' | 'b' | 'c'>;

      /**
       * A unique lowercase Punycode nameserver name within the set.
       */
      name: string;
    }
  }
}

export interface NameserverSetDeleteResponse {
  /**
   * Identifier for a nameserver set.
   */
  id: string;
}

export type NameserverSetGetResponse =
  | NameserverSetGetResponse.DNSSettingsNameserverSetStandardResponse
  | NameserverSetGetResponse.DNSSettingsNameserverSetAdvancedResponse;

export namespace NameserverSetGetResponse {
  export interface DNSSettingsNameserverSetStandardResponse {
    /**
     * Identifier for a nameserver set.
     */
    id: string;

    /**
     * Whether the nameserver set uses Advanced anycast groups.
     */
    advanced: false;

    /**
     * When the nameserver set was created.
     */
    created_on: string;

    /**
     * Selects the account-specific IP set that supplies the nameserver addresses.
     * Nameserver sets with the same `ip_set` and `advanced` value may reuse addresses;
     * otherwise, they use disjoint address groups.
     */
    ip_set: number;

    /**
     * Customer-defined name, unique within the account by exact string equality
     * (case-sensitive, with no Unicode normalization). Must be valid UTF-8 and at most
     * 255 UTF-8 bytes, not 255 characters. Only graphical Unicode characters are
     * allowed; leading or trailing whitespace is rejected. The name can be changed
     * without changing the set's nameservers or addresses.
     */
    name: string;

    nameservers: Array<DNSSettingsNameserverSetStandardResponse.Nameserver>;
  }

  export namespace DNSSettingsNameserverSetStandardResponse {
    export interface Nameserver {
      /**
       * IPv4 addresses assigned to the nameserver.
       */
      ipv4: Array<string>;

      /**
       * IPv6 addresses assigned to the nameserver.
       */
      ipv6: Array<string>;

      /**
       * A unique lowercase Punycode nameserver name within the set.
       */
      name: string;
    }
  }

  export interface DNSSettingsNameserverSetAdvancedResponse {
    /**
     * Identifier for a nameserver set.
     */
    id: string;

    /**
     * Whether the nameserver set uses Advanced anycast groups.
     */
    advanced: true;

    /**
     * When the nameserver set was created.
     */
    created_on: string;

    /**
     * Selects the account-specific IP set that supplies the nameserver addresses.
     * Nameserver sets with the same `ip_set` and `advanced` value may reuse addresses;
     * otherwise, they use disjoint address groups.
     */
    ip_set: number;

    /**
     * Customer-defined name, unique within the account by exact string equality
     * (case-sensitive, with no Unicode normalization). Must be valid UTF-8 and at most
     * 255 UTF-8 bytes, not 255 characters. Only graphical Unicode characters are
     * allowed; leading or trailing whitespace is rejected. The name can be changed
     * without changing the set's nameservers or addresses.
     */
    name: string;

    nameservers: Array<DNSSettingsNameserverSetAdvancedResponse.Nameserver>;
  }

  export namespace DNSSettingsNameserverSetAdvancedResponse {
    export interface Nameserver {
      /**
       * IPv4 addresses assigned to the nameserver.
       */
      ipv4: Array<string>;

      /**
       * Advanced anycast group for each address in the corresponding address array.
       * Entries have the same order as, and correspond one-to-one with, the addresses.
       */
      ipv4_groups: Array<'a' | 'b' | 'c'>;

      /**
       * IPv6 addresses assigned to the nameserver.
       */
      ipv6: Array<string>;

      /**
       * Advanced anycast group for each address in the corresponding address array.
       * Entries have the same order as, and correspond one-to-one with, the addresses.
       */
      ipv6_groups: Array<'a' | 'b' | 'c'>;

      /**
       * A unique lowercase Punycode nameserver name within the set.
       */
      name: string;
    }
  }
}

export interface NameserverSetCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Customer-defined name, unique within the account by exact string
   * equality (case-sensitive, with no Unicode normalization). Must be valid UTF-8
   * and at most 255 UTF-8 bytes, not 255 characters. Only graphical Unicode
   * characters are allowed; leading or trailing whitespace is rejected. The name can
   * be changed without changing the set's nameservers or addresses.
   */
  name: string;

  /**
   * Body param: Lists each nameserver and the number of addresses to allocate to it.
   * Requires a unique name for each entry in the set.
   */
  nameservers: Array<NameserverSetCreateParams.Nameserver>;

  /**
   * Body param: Whether to allocate the nameservers from distinct Advanced anycast
   * groups.
   */
  advanced?: boolean;

  /**
   * Body param: Selects the account-specific IP set that supplies the nameserver
   * addresses. Nameserver sets with the same `ip_set` and `advanced` value may reuse
   * addresses; otherwise, they use disjoint address groups.
   */
  ip_set?: number;
}

export namespace NameserverSetCreateParams {
  export interface Nameserver {
    /**
     * A unique lowercase Punycode nameserver name within the set.
     */
    name: string;

    /**
     * Number of IPv4 addresses and number of IPv6 addresses to allocate to this
     * nameserver. All nameservers in an Advanced nameserver set must use the same
     * value.
     */
    ip_count?: number;
  }
}

export interface NameserverSetListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;
}

export interface NameserverSetDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface NameserverSetGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace NameserverSets {
  export {
    type NameserverSetCreateResponse as NameserverSetCreateResponse,
    type NameserverSetListResponse as NameserverSetListResponse,
    type NameserverSetDeleteResponse as NameserverSetDeleteResponse,
    type NameserverSetGetResponse as NameserverSetGetResponse,
    type NameserverSetListResponsesV4PagePaginationArray as NameserverSetListResponsesV4PagePaginationArray,
    type NameserverSetCreateParams as NameserverSetCreateParams,
    type NameserverSetListParams as NameserverSetListParams,
    type NameserverSetDeleteParams as NameserverSetDeleteParams,
    type NameserverSetGetParams as NameserverSetGetParams,
  };
}
