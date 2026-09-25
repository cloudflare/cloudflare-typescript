// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseBGPFilterProfiles extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'bgpFilterProfiles'] = Object.freeze([
    'magicTransit',
    'bgpFilterProfiles',
  ] as const);

  /**
   * Creates a new BGP filter profile for an account.
   *
   * @example
   * ```ts
   * const bgpFilterProfile =
   *   await client.magicTransit.bgpFilterProfiles.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     match_action: 'allow',
   *     name: 'Allowed On-Prem Imports',
   *     targets: ['10.0.0.0/8{8,32}'],
   *   });
   * ```
   */
  create(
    params: BGPFilterProfileCreateParams,
    options?: RequestOptions,
  ): APIPromise<BGPFilterProfileCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/magic/bgp/filter_profiles`, {
        body,
        ...options,
      }) as APIPromise<{ result: BGPFilterProfileCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a BGP filter profile. Omitted properties are left unchanged. To clear an
   * existing description send `description: ""`.
   *
   * @example
   * ```ts
   * const bgpFilterProfile =
   *   await client.magicTransit.bgpFilterProfiles.update(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  update(
    profileID: string,
    params: BGPFilterProfileUpdateParams,
    options?: RequestOptions,
  ): APIPromise<BGPFilterProfileUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/magic/bgp/filter_profiles/${profileID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: BGPFilterProfileUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all BGP filter profiles for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const bgpFilterProfileListResponse of client.magicTransit.bgpFilterProfiles.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: BGPFilterProfileListParams,
    options?: RequestOptions,
  ): PagePromise<BGPFilterProfileListResponsesSinglePage, BGPFilterProfileListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/magic/bgp/filter_profiles`,
      SinglePage<BGPFilterProfileListResponse>,
      options,
    );
  }

  /**
   * Deletes a BGP filter profile.
   *
   * @example
   * ```ts
   * const bgpFilterProfile =
   *   await client.magicTransit.bgpFilterProfiles.delete(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    profileID: string,
    params: BGPFilterProfileDeleteParams,
    options?: RequestOptions,
  ): APIPromise<BGPFilterProfileDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/magic/bgp/filter_profiles/${profileID}`,
        options,
      ) as APIPromise<{ result: BGPFilterProfileDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a specific BGP filter profile for an account.
   *
   * @example
   * ```ts
   * const bgpFilterProfile =
   *   await client.magicTransit.bgpFilterProfiles.get(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    profileID: string,
    params: BGPFilterProfileGetParams,
    options?: RequestOptions,
  ): APIPromise<BGPFilterProfileGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/magic/bgp/filter_profiles/${profileID}`,
        options,
      ) as APIPromise<{ result: BGPFilterProfileGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class BGPFilterProfiles extends BaseBGPFilterProfiles {}

export type BGPFilterProfileListResponsesSinglePage = SinglePage<BGPFilterProfileListResponse>;

export interface BGPFilterProfileCreateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Description of the filter profile
   */
  description: string;

  /**
   * Action to take when a route matches one of the targets in this profile
   */
  match_action: 'allow' | 'deny';

  /**
   * Friendly name for the filter profile
   */
  name: string;

  /**
   * List of CIDR prefixes. Each entry may carry an optional suffix that specifies
   * which prefix lengths to match relative to the prefix length N: '{X,Y}' matches
   * prefix lengths in the inclusive range [X, Y] where N <= X <= Y <= max (max is 32
   * for IPv4, 128 for IPv6), '{X}' matches exactly length X (equivalent to {X,X}),
   * '+' is shorthand for {N, max} (the prefix and all more-specific subnets,
   * including at length N itself; valid even when N is the maximum length). Omit the
   * suffix to match the prefix exactly at length N.
   */
  targets: Array<string>;

  created_on?: string;

  modified_on?: string;
}

export interface BGPFilterProfileUpdateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Description of the filter profile
   */
  description: string;

  /**
   * Action to take when a route matches one of the targets in this profile
   */
  match_action: 'allow' | 'deny';

  /**
   * Friendly name for the filter profile
   */
  name: string;

  /**
   * List of CIDR prefixes. Each entry may carry an optional suffix that specifies
   * which prefix lengths to match relative to the prefix length N: '{X,Y}' matches
   * prefix lengths in the inclusive range [X, Y] where N <= X <= Y <= max (max is 32
   * for IPv4, 128 for IPv6), '{X}' matches exactly length X (equivalent to {X,X}),
   * '+' is shorthand for {N, max} (the prefix and all more-specific subnets,
   * including at length N itself; valid even when N is the maximum length). Omit the
   * suffix to match the prefix exactly at length N.
   */
  targets: Array<string>;

  created_on?: string;

  modified_on?: string;
}

export interface BGPFilterProfileListResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Description of the filter profile
   */
  description: string;

  /**
   * Action to take when a route matches one of the targets in this profile
   */
  match_action: 'allow' | 'deny';

  /**
   * Friendly name for the filter profile
   */
  name: string;

  /**
   * List of CIDR prefixes. Each entry may carry an optional suffix that specifies
   * which prefix lengths to match relative to the prefix length N: '{X,Y}' matches
   * prefix lengths in the inclusive range [X, Y] where N <= X <= Y <= max (max is 32
   * for IPv4, 128 for IPv6), '{X}' matches exactly length X (equivalent to {X,X}),
   * '+' is shorthand for {N, max} (the prefix and all more-specific subnets,
   * including at length N itself; valid even when N is the maximum length). Omit the
   * suffix to match the prefix exactly at length N.
   */
  targets: Array<string>;

  created_on?: string;

  modified_on?: string;
}

export interface BGPFilterProfileDeleteResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Description of the filter profile
   */
  description: string;

  /**
   * Action to take when a route matches one of the targets in this profile
   */
  match_action: 'allow' | 'deny';

  /**
   * Friendly name for the filter profile
   */
  name: string;

  /**
   * List of CIDR prefixes. Each entry may carry an optional suffix that specifies
   * which prefix lengths to match relative to the prefix length N: '{X,Y}' matches
   * prefix lengths in the inclusive range [X, Y] where N <= X <= Y <= max (max is 32
   * for IPv4, 128 for IPv6), '{X}' matches exactly length X (equivalent to {X,X}),
   * '+' is shorthand for {N, max} (the prefix and all more-specific subnets,
   * including at length N itself; valid even when N is the maximum length). Omit the
   * suffix to match the prefix exactly at length N.
   */
  targets: Array<string>;

  created_on?: string;

  modified_on?: string;
}

export interface BGPFilterProfileGetResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * Description of the filter profile
   */
  description: string;

  /**
   * Action to take when a route matches one of the targets in this profile
   */
  match_action: 'allow' | 'deny';

  /**
   * Friendly name for the filter profile
   */
  name: string;

  /**
   * List of CIDR prefixes. Each entry may carry an optional suffix that specifies
   * which prefix lengths to match relative to the prefix length N: '{X,Y}' matches
   * prefix lengths in the inclusive range [X, Y] where N <= X <= Y <= max (max is 32
   * for IPv4, 128 for IPv6), '{X}' matches exactly length X (equivalent to {X,X}),
   * '+' is shorthand for {N, max} (the prefix and all more-specific subnets,
   * including at length N itself; valid even when N is the maximum length). Omit the
   * suffix to match the prefix exactly at length N.
   */
  targets: Array<string>;

  created_on?: string;

  modified_on?: string;
}

export interface BGPFilterProfileCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Action to take when a route matches one of the targets in this
   * profile
   */
  match_action: 'allow' | 'deny';

  /**
   * Body param: Friendly name for the filter profile
   */
  name: string;

  /**
   * Body param: List of CIDR prefixes. Each entry may carry an optional suffix that
   * specifies which prefix lengths to match relative to the prefix length N: '{X,Y}'
   * matches prefix lengths in the inclusive range [X, Y] where N <= X <= Y <= max
   * (max is 32 for IPv4, 128 for IPv6), '{X}' matches exactly length X (equivalent
   * to {X,X}), '+' is shorthand for {N, max} (the prefix and all more-specific
   * subnets, including at length N itself; valid even when N is the maximum length).
   * Omit the suffix to match the prefix exactly at length N.
   */
  targets: Array<string>;

  /**
   * Body param: Description of the filter profile
   */
  description?: string;
}

export interface BGPFilterProfileUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Description of the filter profile
   */
  description?: string;

  /**
   * Body param: Action to take when a route matches one of the targets in this
   * profile
   */
  match_action?: 'allow' | 'deny';

  /**
   * Body param: Friendly name for the filter profile
   */
  name?: string;

  /**
   * Body param: List of CIDR prefixes. Each entry may carry an optional suffix that
   * specifies which prefix lengths to match relative to the prefix length N: '{X,Y}'
   * matches prefix lengths in the inclusive range [X, Y] where N <= X <= Y <= max
   * (max is 32 for IPv4, 128 for IPv6), '{X}' matches exactly length X (equivalent
   * to {X,X}), '+' is shorthand for {N, max} (the prefix and all more-specific
   * subnets, including at length N itself; valid even when N is the maximum length).
   * Omit the suffix to match the prefix exactly at length N.
   */
  targets?: Array<string>;
}

export interface BGPFilterProfileListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface BGPFilterProfileDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface BGPFilterProfileGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace BGPFilterProfiles {
  export {
    type BGPFilterProfileCreateResponse as BGPFilterProfileCreateResponse,
    type BGPFilterProfileUpdateResponse as BGPFilterProfileUpdateResponse,
    type BGPFilterProfileListResponse as BGPFilterProfileListResponse,
    type BGPFilterProfileDeleteResponse as BGPFilterProfileDeleteResponse,
    type BGPFilterProfileGetResponse as BGPFilterProfileGetResponse,
    type BGPFilterProfileListResponsesSinglePage as BGPFilterProfileListResponsesSinglePage,
    type BGPFilterProfileCreateParams as BGPFilterProfileCreateParams,
    type BGPFilterProfileUpdateParams as BGPFilterProfileUpdateParams,
    type BGPFilterProfileListParams as BGPFilterProfileListParams,
    type BGPFilterProfileDeleteParams as BGPFilterProfileDeleteParams,
    type BGPFilterProfileGetParams as BGPFilterProfileGetParams,
  };
}
