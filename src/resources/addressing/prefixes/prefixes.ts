// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PrefixesAPI from 'cloudflare/resources/addressing/prefixes/prefixes';
import * as Shared from 'cloudflare/resources/shared';
import * as DelegationsAPI from 'cloudflare/resources/addressing/prefixes/delegations';
import * as BGPAPI from 'cloudflare/resources/addressing/prefixes/bgp/bgp';
import { SinglePage } from 'cloudflare/pagination';

export class Prefixes extends APIResource {
  bgp: BGPAPI.BGP = new BGPAPI.BGP(this._client);
  delegations: DelegationsAPI.Delegations = new DelegationsAPI.Delegations(this._client);

  /**
   * Add a new prefix under the account.
   */
  create(params: PrefixCreateParams, options?: Core.RequestOptions): Core.APIPromise<AddressingIpamPrefixes> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/addressing/prefixes`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AddressingIpamPrefixes }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all prefixes owned by the account.
   */
  list(
    params: PrefixListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AddressingIpamPrefixesSinglePage, AddressingIpamPrefixes> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/addressing/prefixes`,
      AddressingIpamPrefixesSinglePage,
      options,
    );
  }

  /**
   * Delete an unapproved prefix owned by the account.
   */
  delete(
    prefixId: string,
    params: PrefixDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/addressing/prefixes/${prefixId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef67bbb1ccdd42c3e2937b9fd19f791151 | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify the description for a prefix owned by the account.
   */
  edit(
    prefixId: string,
    params: PrefixEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressingIpamPrefixes> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/addressing/prefixes/${prefixId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AddressingIpamPrefixes }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List a particular prefix owned by the account.
   */
  get(
    prefixId: string,
    params: PrefixGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressingIpamPrefixes> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}`,
        options,
      ) as Core.APIPromise<{ result: AddressingIpamPrefixes }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AddressingIpamPrefixesSinglePage extends SinglePage<AddressingIpamPrefixes> {}

export interface AddressingIpamPrefixes {
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

export interface UnnamedSchemaRefE358666e049bf8f9281c0a4f89b5fe46 {
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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
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
  export import AddressingIpamPrefixes = PrefixesAPI.AddressingIpamPrefixes;
  export import UnnamedSchemaRefE358666e049bf8f9281c0a4f89b5fe46 = PrefixesAPI.UnnamedSchemaRefE358666e049bf8f9281c0a4f89b5fe46;
  export import AddressingIpamPrefixesSinglePage = PrefixesAPI.AddressingIpamPrefixesSinglePage;
  export import PrefixCreateParams = PrefixesAPI.PrefixCreateParams;
  export import PrefixListParams = PrefixesAPI.PrefixListParams;
  export import PrefixDeleteParams = PrefixesAPI.PrefixDeleteParams;
  export import PrefixEditParams = PrefixesAPI.PrefixEditParams;
  export import PrefixGetParams = PrefixesAPI.PrefixGetParams;
  export import BGP = BGPAPI.BGP;
  export import Delegations = DelegationsAPI.Delegations;
  export import AddressingIpamDelegations = DelegationsAPI.AddressingIpamDelegations;
  export import DelegationDeleteResponse = DelegationsAPI.DelegationDeleteResponse;
  export import AddressingIpamDelegationsSinglePage = DelegationsAPI.AddressingIpamDelegationsSinglePage;
  export import DelegationCreateParams = DelegationsAPI.DelegationCreateParams;
  export import DelegationListParams = DelegationsAPI.DelegationListParams;
  export import DelegationDeleteParams = DelegationsAPI.DelegationDeleteParams;
}
