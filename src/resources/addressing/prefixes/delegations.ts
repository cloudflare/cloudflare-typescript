// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DelegationsAPI from 'cloudflare/resources/addressing/prefixes/delegations';
import { SinglePage } from 'cloudflare/pagination';

export class Delegations extends APIResource {
  /**
   * Create a new account delegation for a given IP prefix.
   */
  create(
    prefixId: string,
    params: DelegationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressingIpamDelegations> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/addressing/prefixes/${prefixId}/delegations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AddressingIpamDelegations }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all delegations for a given account IP prefix.
   */
  list(
    prefixId: string,
    params: DelegationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AddressingIpamDelegationsSinglePage, AddressingIpamDelegations> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/addressing/prefixes/${prefixId}/delegations`,
      AddressingIpamDelegationsSinglePage,
      options,
    );
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

export class AddressingIpamDelegationsSinglePage extends SinglePage<AddressingIpamDelegations> {}

export interface AddressingIpamDelegations {
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
  export import AddressingIpamDelegations = DelegationsAPI.AddressingIpamDelegations;
  export import DelegationDeleteResponse = DelegationsAPI.DelegationDeleteResponse;
  export import AddressingIpamDelegationsSinglePage = DelegationsAPI.AddressingIpamDelegationsSinglePage;
  export import DelegationCreateParams = DelegationsAPI.DelegationCreateParams;
  export import DelegationListParams = DelegationsAPI.DelegationListParams;
  export import DelegationDeleteParams = DelegationsAPI.DelegationDeleteParams;
}
