// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as ServicesAPI from './services';
import { SinglePage } from '../../pagination';

export class Services extends APIResource {
  /**
   * Bring-Your-Own IP (BYOIP) prefixes onboarded to Cloudflare must be bound to a
   * service running on the Cloudflare network to enable a Cloudflare product on the
   * IP addresses. This endpoint can be used as a reference of available services on
   * the Cloudflare network, and their service IDs.
   */
  list(params: ServiceListParams, options?: Core.RequestOptions): Core.PagePromise<ServiceListResponsesSinglePage, ServiceListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/addressing/services`, ServiceListResponsesSinglePage, options);
  }
}

export class ServiceListResponsesSinglePage extends SinglePage<ServiceListResponse> {
}

export interface ServiceListResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Name of a service running on the Cloudflare network
   */
  name?: string;
}

export interface ServiceListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Services {
  export import ServiceListResponse = ServicesAPI.ServiceListResponse;
  export import ServiceListResponsesSinglePage = ServicesAPI.ServiceListResponsesSinglePage;
  export import ServiceListParams = ServicesAPI.ServiceListParams;
}
