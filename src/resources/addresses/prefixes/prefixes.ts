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
   * Add a new prefix under the account.
   */
  create(params: PrefixCreateParams, options?: Core.RequestOptions): Core.APIPromise<PrefixCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/addressing/prefixes`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PrefixCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all prefixes owned by the account.
   */
  list(params: PrefixListParams, options?: Core.RequestOptions): Core.APIPromise<PrefixListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/addressing/prefixes`, options) as Core.APIPromise<{
        result: PrefixListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete an unapproved prefix owned by the account.
   */
  delete(
    prefixId: string,
    params: PrefixDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}`,
        options,
      ) as Core.APIPromise<{ result: PrefixDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify the description for a prefix owned by the account.
   */
  edit(
    prefixId: string,
    params: PrefixEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/addressing/prefixes/${prefixId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PrefixEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List a particular prefix owned by the account.
   */
  get(
    prefixId: string,
    params: PrefixGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}`,
        options,
      ) as Core.APIPromise<{ result: PrefixGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PrefixCreateResponse {
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

export type PrefixListResponse = Array<PrefixListResponse.PrefixListResponseItem>;

export namespace PrefixListResponse {
  export interface PrefixListResponseItem {
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

export type PrefixDeleteResponse = unknown | Array<unknown> | string;

export interface PrefixEditResponse {
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

export interface PrefixCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Autonomous System Number (ASN) the prefix will be advertised under.
   */
  asn: number | null;

  /**
   * Body param: IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr: string;

  /**
   * Body param: Identifier for the uploaded LOA document.
   */
  loa_document_id: string | null;
}

export interface PrefixListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface PrefixDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface PrefixEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Description of the prefix.
   */
  description: string;
}

export interface PrefixGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Prefixes {
  export import PrefixCreateResponse = PrefixesAPI.PrefixCreateResponse;
  export import PrefixListResponse = PrefixesAPI.PrefixListResponse;
  export import PrefixDeleteResponse = PrefixesAPI.PrefixDeleteResponse;
  export import PrefixEditResponse = PrefixesAPI.PrefixEditResponse;
  export import PrefixGetResponse = PrefixesAPI.PrefixGetResponse;
  export import PrefixCreateParams = PrefixesAPI.PrefixCreateParams;
  export import PrefixListParams = PrefixesAPI.PrefixListParams;
  export import PrefixDeleteParams = PrefixesAPI.PrefixDeleteParams;
  export import PrefixEditParams = PrefixesAPI.PrefixEditParams;
  export import PrefixGetParams = PrefixesAPI.PrefixGetParams;
  export import BGPs = BGPsAPI.BGPs;
  export import Delegations = DelegationsAPI.Delegations;
  export import DelegationCreateResponse = DelegationsAPI.DelegationCreateResponse;
  export import DelegationListResponse = DelegationsAPI.DelegationListResponse;
  export import DelegationDeleteResponse = DelegationsAPI.DelegationDeleteResponse;
  export import DelegationCreateParams = DelegationsAPI.DelegationCreateParams;
  export import DelegationListParams = DelegationsAPI.DelegationListParams;
  export import DelegationDeleteParams = DelegationsAPI.DelegationDeleteParams;
}
