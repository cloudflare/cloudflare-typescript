// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DelegationsAPI from 'cloudflare/resources/addresses/prefixes/delegations';

export class Delegations extends APIResource {
  /**
   * Create a new account delegation for a given IP prefix.
   */
  create(
    prefixId: string,
    params: DelegationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DelegationCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/addressing/prefixes/${prefixId}/delegations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DelegationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all delegations for a given account IP prefix.
   */
  list(
    prefixId: string,
    params: DelegationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DelegationListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/delegations`,
        options,
      ) as Core.APIPromise<{ result: DelegationListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete an account delegation for a given IP prefix.
   */
  delete(
    prefixId: string,
    delegationId: string,
    params: DelegationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DelegationDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/delegations/${delegationId}`,
        options,
      ) as Core.APIPromise<{ result: DelegationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DelegationCreateResponse {
  /**
   * Delegation identifier tag.
   */
  id?: string;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  created_at?: string;

  /**
   * Account identifier for the account to which prefix is being delegated.
   */
  delegated_account_id?: string;

  modified_at?: string;

  /**
   * Identifier
   */
  parent_prefix_id?: string;
}

export type DelegationListResponse = Array<DelegationListResponse.DelegationListResponseItem>;

export namespace DelegationListResponse {
  export interface DelegationListResponseItem {
    /**
     * Delegation identifier tag.
     */
    id?: string;

    /**
     * IP Prefix in Classless Inter-Domain Routing format.
     */
    cidr?: string;

    created_at?: string;

    /**
     * Account identifier for the account to which prefix is being delegated.
     */
    delegated_account_id?: string;

    modified_at?: string;

    /**
     * Identifier
     */
    parent_prefix_id?: string;
  }
}

export interface DelegationDeleteResponse {
  /**
   * Delegation identifier tag.
   */
  id?: string;
}

export interface DelegationCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr: string;

  /**
   * Body param: Account identifier for the account to which prefix is being
   * delegated.
   */
  delegated_account_id: string;
}

export interface DelegationListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface DelegationDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Delegations {
  export import DelegationCreateResponse = DelegationsAPI.DelegationCreateResponse;
  export import DelegationListResponse = DelegationsAPI.DelegationListResponse;
  export import DelegationDeleteResponse = DelegationsAPI.DelegationDeleteResponse;
  export import DelegationCreateParams = DelegationsAPI.DelegationCreateParams;
  export import DelegationListParams = DelegationsAPI.DelegationListParams;
  export import DelegationDeleteParams = DelegationsAPI.DelegationDeleteParams;
}
