// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import * as AdvertisementStatusAPI from './advertisement-status';
import {
  AdvertisementStatus,
  AdvertisementStatusEditParams,
  AdvertisementStatusEditResponse,
  AdvertisementStatusGetParams,
  AdvertisementStatusGetResponse,
} from './advertisement-status';
import * as BGPPrefixesAPI from './bgp-prefixes';
import {
  BGPPrefix,
  BGPPrefixCreateParams,
  BGPPrefixEditParams,
  BGPPrefixGetParams,
  BGPPrefixListParams,
  BGPPrefixes,
  BGPPrefixesSinglePage,
} from './bgp-prefixes';
import * as DelegationsAPI from './delegations';
import {
  DelegationCreateParams,
  DelegationDeleteParams,
  DelegationDeleteResponse,
  DelegationListParams,
  Delegations,
  DelegationsSinglePage,
} from './delegations';
import * as ServiceBindingsAPI from './service-bindings';
import {
  ServiceBinding,
  ServiceBindingCreateParams,
  ServiceBindingDeleteParams,
  ServiceBindingDeleteResponse,
  ServiceBindingGetParams,
  ServiceBindingListParams,
  ServiceBindings,
  ServiceBindingsSinglePage,
} from './service-bindings';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Prefixes extends APIResource {
  serviceBindings: ServiceBindingsAPI.ServiceBindings = new ServiceBindingsAPI.ServiceBindings(this._client);
  bgpPrefixes: BGPPrefixesAPI.BGPPrefixes = new BGPPrefixesAPI.BGPPrefixes(this._client);
  advertisementStatus: AdvertisementStatusAPI.AdvertisementStatus =
    new AdvertisementStatusAPI.AdvertisementStatus(this._client);
  delegations: DelegationsAPI.Delegations = new DelegationsAPI.Delegations(this._client);

  /**
   * Add a new prefix under the account.
   */
  create(params: PrefixCreateParams, options?: RequestOptions): APIPromise<Prefix> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/addressing/prefixes`, {
        body,
        ...options,
      }) as APIPromise<{ result: Prefix }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all prefixes owned by the account.
   */
  list(params: PrefixListParams, options?: RequestOptions): PagePromise<PrefixesSinglePage, Prefix> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/addressing/prefixes`,
      SinglePage<Prefix>,
      options,
    );
  }

  /**
   * Delete an unapproved prefix owned by the account.
   */
  delete(
    prefixID: string,
    params: PrefixDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PrefixDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(path`/accounts/${account_id}/addressing/prefixes/${prefixID}`, options);
  }

  /**
   * Modify the description for a prefix owned by the account.
   */
  edit(prefixID: string, params: PrefixEditParams, options?: RequestOptions): APIPromise<Prefix> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/addressing/prefixes/${prefixID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Prefix }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List a particular prefix owned by the account.
   */
  get(prefixID: string, params: PrefixGetParams, options?: RequestOptions): APIPromise<Prefix> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/addressing/prefixes/${prefixID}`, options) as APIPromise<{
        result: Prefix;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PrefixesSinglePage = SinglePage<Prefix>;

export interface Prefix {
  /**
   * Identifier of an IP Prefix.
   */
  id?: string;

  /**
   * Identifier of a Cloudflare account.
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

export interface PrefixDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;

  result_info?: PrefixDeleteResponse.ResultInfo;
}

export namespace PrefixDeleteResponse {
  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface PrefixCreateParams {
  /**
   * Path param: Identifier of a Cloudflare account.
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
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

export interface PrefixDeleteParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

export interface PrefixEditParams {
  /**
   * Path param: Identifier of a Cloudflare account.
   */
  account_id: string;

  /**
   * Body param: Description of the prefix.
   */
  description: string;
}

export interface PrefixGetParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

Prefixes.ServiceBindings = ServiceBindings;
Prefixes.BGPPrefixes = BGPPrefixes;
Prefixes.AdvertisementStatus = AdvertisementStatus;

export declare namespace Prefixes {
  export {
    type Prefix as Prefix,
    type PrefixDeleteResponse as PrefixDeleteResponse,
    type PrefixesSinglePage as PrefixesSinglePage,
    type PrefixCreateParams as PrefixCreateParams,
    type PrefixListParams as PrefixListParams,
    type PrefixDeleteParams as PrefixDeleteParams,
    type PrefixEditParams as PrefixEditParams,
    type PrefixGetParams as PrefixGetParams,
  };

  export {
    ServiceBindings as ServiceBindings,
    type ServiceBinding as ServiceBinding,
    type ServiceBindingDeleteResponse as ServiceBindingDeleteResponse,
    type ServiceBindingsSinglePage as ServiceBindingsSinglePage,
    type ServiceBindingCreateParams as ServiceBindingCreateParams,
    type ServiceBindingListParams as ServiceBindingListParams,
    type ServiceBindingDeleteParams as ServiceBindingDeleteParams,
    type ServiceBindingGetParams as ServiceBindingGetParams,
  };

  export {
    BGPPrefixes as BGPPrefixes,
    type BGPPrefix as BGPPrefix,
    type BGPPrefixesSinglePage as BGPPrefixesSinglePage,
    type BGPPrefixCreateParams as BGPPrefixCreateParams,
    type BGPPrefixListParams as BGPPrefixListParams,
    type BGPPrefixEditParams as BGPPrefixEditParams,
    type BGPPrefixGetParams as BGPPrefixGetParams,
  };

  export {
    AdvertisementStatus as AdvertisementStatus,
    type AdvertisementStatusEditResponse as AdvertisementStatusEditResponse,
    type AdvertisementStatusGetResponse as AdvertisementStatusGetResponse,
    type AdvertisementStatusEditParams as AdvertisementStatusEditParams,
    type AdvertisementStatusGetParams as AdvertisementStatusGetParams,
  };

  export {
    type Delegations as Delegations,
    type DelegationDeleteResponse as DelegationDeleteResponse,
    type DelegationsSinglePage as DelegationsSinglePage,
    type DelegationCreateParams as DelegationCreateParams,
    type DelegationListParams as DelegationListParams,
    type DelegationDeleteParams as DelegationDeleteParams,
  };
}
