// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Services extends APIResource {
  /**
   * Bring-Your-Own IP (BYOIP) prefixes onboarded to Cloudflare must be bound to a
   * service running on the Cloudflare network to enable a Cloudflare product on the
   * IP addresses. This endpoint can be used as a reference of available services on
   * the Cloudflare network, and their service IDs.
   */
  list(
    params: ServiceListParams,
    options?: RequestOptions,
  ): PagePromise<ServiceListResponsesSinglePage, ServiceListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/addressing/services`,
      SinglePage<ServiceListResponse>,
      options,
    );
  }
}

export type ServiceListResponsesSinglePage = SinglePage<ServiceListResponse>;

export interface ServiceListResponse {
  /**
   * Identifier of a Service on the Cloudflare network. Available services and their
   * IDs may be found in the **List Services** endpoint.
   */
  id?: string;

  /**
   * Name of a service running on the Cloudflare network
   */
  name?: string;
}

export interface ServiceListParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

export declare namespace Services {
  export {
    type ServiceListResponse as ServiceListResponse,
    type ServiceListResponsesSinglePage as ServiceListResponsesSinglePage,
    type ServiceListParams as ServiceListParams,
  };
}
