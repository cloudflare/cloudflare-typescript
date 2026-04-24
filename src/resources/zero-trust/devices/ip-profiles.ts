// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class IPProfiles extends APIResource {
  /**
   * Creates a WARP Device IP profile. Currently, only IPv4 Device subnets can be
   * associated.
   *
   * @example
   * ```ts
   * const ipProfile =
   *   await client.zeroTrust.devices.ipProfiles.create({
   *     account_id: 'account_id',
   *     match: 'identity.email == "test@cloudflare.com"',
   *     name: 'IPv4 Cloudflare Source IPs',
   *     precedence: 100,
   *     subnet_id: 'b70ff985-a4ef-4643-bbbc-4a0ed4fc8415',
   *   });
   * ```
   */
  create(params: IPProfileCreateParams, options?: Core.RequestOptions): Core.APIPromise<IPProfile> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/devices/ip-profiles`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IPProfile }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a WARP Device IP profile. Currently, only IPv4 Device subnets can be
   * associated.
   *
   * @example
   * ```ts
   * const ipProfile =
   *   await client.zeroTrust.devices.ipProfiles.update(
   *     'profile_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  update(
    profileId: string,
    params: IPProfileUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPProfile> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/devices/ip-profiles/${profileId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IPProfile }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists WARP Device IP profiles.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const ipProfile of client.zeroTrust.devices.ipProfiles.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: IPProfileListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IPProfilesSinglePage, IPProfile> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/devices/ip-profiles`, IPProfilesSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Delete a WARP Device IP profile.
   *
   * @example
   * ```ts
   * const ipProfile =
   *   await client.zeroTrust.devices.ipProfiles.delete(
   *     'profile_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    profileId: string,
    params: IPProfileDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPProfileDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/devices/ip-profiles/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: IPProfileDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single WARP Device IP profile.
   *
   * @example
   * ```ts
   * const ipProfile =
   *   await client.zeroTrust.devices.ipProfiles.get(
   *     'profile_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    profileId: string,
    params: IPProfileGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPProfile> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/devices/ip-profiles/${profileId}`,
        options,
      ) as Core.APIPromise<{ result: IPProfile }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class IPProfilesSinglePage extends SinglePage<IPProfile> {}

export interface IPProfile {
  /**
   * The ID of the Device IP profile.
   */
  id: string;

  /**
   * The RFC3339Nano timestamp when the Device IP profile was created.
   */
  created_at: string;

  /**
   * An optional description of the Device IP profile.
   */
  description: string | null;

  /**
   * Whether the Device IP profile is enabled.
   */
  enabled: boolean;

  /**
   * The wirefilter expression to match registrations. Available values:
   * "identity.name", "identity.email", "identity.groups.id", "identity.groups.name",
   * "identity.groups.email", "identity.saml_attributes".
   */
  match: string;

  /**
   * A user-friendly name for the Device IP profile.
   */
  name: string;

  /**
   * The precedence of the Device IP profile. Lower values indicate higher
   * precedence. Device IP profile will be evaluated in ascending order of this
   * field.
   */
  precedence: number;

  /**
   * The ID of the Subnet.
   */
  subnet_id: string;

  /**
   * The RFC3339Nano timestamp when the Device IP profile was last updated.
   */
  updated_at: string;
}

export interface IPProfileDeleteResponse {
  /**
   * ID of the deleted Device IP profile.
   */
  id?: string;
}

export interface IPProfileCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: The wirefilter expression to match registrations. Available values:
   * "identity.name", "identity.email", "identity.groups.id", "identity.groups.name",
   * "identity.groups.email", "identity.saml_attributes".
   */
  match: string;

  /**
   * Body param: A user-friendly name for the Device IP profile.
   */
  name: string;

  /**
   * Body param: The precedence of the Device IP profile. Lower values indicate
   * higher precedence. Device IP profile will be evaluated in ascending order of
   * this field.
   */
  precedence: number;

  /**
   * Body param: The ID of the Subnet.
   */
  subnet_id: string;

  /**
   * Body param: An optional description of the Device IP profile.
   */
  description?: string | null;

  /**
   * Body param: Whether the Device IP profile will be applied to matching devices.
   */
  enabled?: boolean;
}

export interface IPProfileUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: An optional description of the Device IP profile.
   */
  description?: string;

  /**
   * Body param: Whether the Device IP profile is enabled.
   */
  enabled?: boolean;

  /**
   * Body param: The wirefilter expression to match registrations. Available values:
   * "identity.name", "identity.email", "identity.groups.id", "identity.groups.name",
   * "identity.groups.email", "identity.saml_attributes".
   */
  match?: string;

  /**
   * Body param: A user-friendly name for the Device IP profile.
   */
  name?: string;

  /**
   * Body param: The precedence of the Device IP profile. Lower values indicate
   * higher precedence. Device IP profile will be evaluated in ascending order of
   * this field.
   */
  precedence?: number;

  /**
   * Body param: The ID of the Subnet.
   */
  subnet_id?: string;
}

export interface IPProfileListParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: The number of IP profiles to return per page.
   */
  per_page?: number;
}

export interface IPProfileDeleteParams {
  account_id: string;
}

export interface IPProfileGetParams {
  account_id: string;
}

IPProfiles.IPProfilesSinglePage = IPProfilesSinglePage;

export declare namespace IPProfiles {
  export {
    type IPProfile as IPProfile,
    type IPProfileDeleteResponse as IPProfileDeleteResponse,
    IPProfilesSinglePage as IPProfilesSinglePage,
    type IPProfileCreateParams as IPProfileCreateParams,
    type IPProfileUpdateParams as IPProfileUpdateParams,
    type IPProfileListParams as IPProfileListParams,
    type IPProfileDeleteParams as IPProfileDeleteParams,
    type IPProfileGetParams as IPProfileGetParams,
  };
}
