// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PrefixesAPI from 'cloudflare/resources/addresses/prefixes/prefixes';
import * as DelegationsAPI from 'cloudflare/resources/addresses/prefixes/delegations';
import * as BGPsAPI from 'cloudflare/resources/addresses/prefixes/bgps/bgps';

export class Prefixes extends APIResource {
  bgps: BGPsAPI.BGPs = new BGPsAPI.BGPs(this._client);
  delegations: DelegationsAPI.Delegations = new DelegationsAPI.Delegations(this._client);

  /**
   * Modify the description for a prefix owned by the account.
   */
  update(
    accountId: string,
    prefixId: string,
    body: PrefixUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixUpdateResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/addressing/prefixes/${prefixId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PrefixUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete an unapproved prefix owned by the account.
   */
  delete(
    accountId: string,
    prefixId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountId}/addressing/prefixes/${prefixId}`,
        options,
      ) as Core.APIPromise<{ result: PrefixDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List a particular prefix owned by the account.
   */
  get(
    accountId: string,
    prefixId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/addressing/prefixes/${prefixId}`, options) as Core.APIPromise<{
        result: PrefixGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Add a new prefix under the account.
   */
  ipAddressManagementPrefixesAddPrefix(
    accountId: string,
    body: PrefixIPAddressManagementPrefixesAddPrefixParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixIPAddressManagementPrefixesAddPrefixResponse> {
    return (
      this._client.post(`/accounts/${accountId}/addressing/prefixes`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PrefixIPAddressManagementPrefixesAddPrefixResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all prefixes owned by the account.
   */
  ipAddressManagementPrefixesListPrefixes(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixIPAddressManagementPrefixesListPrefixesResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/addressing/prefixes`, options) as Core.APIPromise<{
        result: PrefixIPAddressManagementPrefixesListPrefixesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PrefixUpdateResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Identifier
   */
  account_id?: string;

  /**
   * Prefix advertisement status to the Internet. This field is only not 'null' if on
   * demand is enabled.
   */
  advertised?: boolean | null;

  /**
   * Last time the advertisement status was changed. This field is only not 'null' if
   * on demand is enabled.
   */
  advertised_modified_at?: string | null;

  /**
   * Approval state of the prefix (P = pending, V = active).
   */
  approved?: string;

  /**
   * Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn?: number | null;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  created_at?: string;

  /**
   * Description of the prefix.
   */
  description?: string;

  /**
   * Identifier for the uploaded LOA document.
   */
  loa_document_id?: string | null;

  modified_at?: string;

  /**
   * Whether advertisement of the prefix to the Internet may be dynamically enabled
   * or disabled.
   */
  on_demand_enabled?: boolean;

  /**
   * Whether advertisement status of the prefix is locked, meaning it cannot be
   * changed.
   */
  on_demand_locked?: boolean;
}

export type PrefixDeleteResponse = unknown | Array<unknown> | string;

export interface PrefixGetResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Identifier
   */
  account_id?: string;

  /**
   * Prefix advertisement status to the Internet. This field is only not 'null' if on
   * demand is enabled.
   */
  advertised?: boolean | null;

  /**
   * Last time the advertisement status was changed. This field is only not 'null' if
   * on demand is enabled.
   */
  advertised_modified_at?: string | null;

  /**
   * Approval state of the prefix (P = pending, V = active).
   */
  approved?: string;

  /**
   * Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn?: number | null;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  created_at?: string;

  /**
   * Description of the prefix.
   */
  description?: string;

  /**
   * Identifier for the uploaded LOA document.
   */
  loa_document_id?: string | null;

  modified_at?: string;

  /**
   * Whether advertisement of the prefix to the Internet may be dynamically enabled
   * or disabled.
   */
  on_demand_enabled?: boolean;

  /**
   * Whether advertisement status of the prefix is locked, meaning it cannot be
   * changed.
   */
  on_demand_locked?: boolean;
}

export interface PrefixIPAddressManagementPrefixesAddPrefixResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Identifier
   */
  account_id?: string;

  /**
   * Prefix advertisement status to the Internet. This field is only not 'null' if on
   * demand is enabled.
   */
  advertised?: boolean | null;

  /**
   * Last time the advertisement status was changed. This field is only not 'null' if
   * on demand is enabled.
   */
  advertised_modified_at?: string | null;

  /**
   * Approval state of the prefix (P = pending, V = active).
   */
  approved?: string;

  /**
   * Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn?: number | null;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  created_at?: string;

  /**
   * Description of the prefix.
   */
  description?: string;

  /**
   * Identifier for the uploaded LOA document.
   */
  loa_document_id?: string | null;

  modified_at?: string;

  /**
   * Whether advertisement of the prefix to the Internet may be dynamically enabled
   * or disabled.
   */
  on_demand_enabled?: boolean;

  /**
   * Whether advertisement status of the prefix is locked, meaning it cannot be
   * changed.
   */
  on_demand_locked?: boolean;
}

export type PrefixIPAddressManagementPrefixesListPrefixesResponse =
  Array<PrefixIPAddressManagementPrefixesListPrefixesResponse.PrefixIPAddressManagementPrefixesListPrefixesResponseItem>;

export namespace PrefixIPAddressManagementPrefixesListPrefixesResponse {
  export interface PrefixIPAddressManagementPrefixesListPrefixesResponseItem {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Identifier
     */
    account_id?: string;

    /**
     * Prefix advertisement status to the Internet. This field is only not 'null' if on
     * demand is enabled.
     */
    advertised?: boolean | null;

    /**
     * Last time the advertisement status was changed. This field is only not 'null' if
     * on demand is enabled.
     */
    advertised_modified_at?: string | null;

    /**
     * Approval state of the prefix (P = pending, V = active).
     */
    approved?: string;

    /**
     * Autonomous System Number (ASN) the prefix will be advertised under.
     */
    asn?: number | null;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    /**
     * Description of the prefix.
     */
    description?: string;

    /**
     * Identifier for the uploaded LOA document.
     */
    loa_document_id?: string | null;

    modified_at?: string;

    /**
     * Whether advertisement of the prefix to the Internet may be dynamically enabled
     * or disabled.
     */
    on_demand_enabled?: boolean;

    /**
     * Whether advertisement status of the prefix is locked, meaning it cannot be
     * changed.
     */
    on_demand_locked?: boolean;
  }
}

export interface PrefixUpdateParams {
  /**
   * Description of the prefix.
   */
  description: string;
}

export interface PrefixIPAddressManagementPrefixesAddPrefixParams {
  /**
   * Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn: number | null;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr: string;

  /**
   * Identifier for the uploaded LOA document.
   */
  loa_document_id: string | null;
}

export namespace Prefixes {
  export import PrefixUpdateResponse = PrefixesAPI.PrefixUpdateResponse;
  export import PrefixDeleteResponse = PrefixesAPI.PrefixDeleteResponse;
  export import PrefixGetResponse = PrefixesAPI.PrefixGetResponse;
  export import PrefixIPAddressManagementPrefixesAddPrefixResponse = PrefixesAPI.PrefixIPAddressManagementPrefixesAddPrefixResponse;
  export import PrefixIPAddressManagementPrefixesListPrefixesResponse = PrefixesAPI.PrefixIPAddressManagementPrefixesListPrefixesResponse;
  export import PrefixUpdateParams = PrefixesAPI.PrefixUpdateParams;
  export import PrefixIPAddressManagementPrefixesAddPrefixParams = PrefixesAPI.PrefixIPAddressManagementPrefixesAddPrefixParams;
  export import BGPs = BGPsAPI.BGPs;
  export import Delegations = DelegationsAPI.Delegations;
  export import DelegationDeleteResponse = DelegationsAPI.DelegationDeleteResponse;
  export import DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse = DelegationsAPI.DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse;
  export import DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse = DelegationsAPI.DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse;
  export import DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationParams = DelegationsAPI.DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationParams;
}
