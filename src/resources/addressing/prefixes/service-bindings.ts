// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';
import { SinglePage } from '../../../pagination';

export class ServiceBindings extends APIResource {
  /**
   * Creates a new Service Binding, routing traffic to IPs within the given CIDR to a
   * service running on Cloudflare's network. **Note:** This API may only be used on
   * prefixes currently configured with a Magic Transit service binding, and only
   * allows creating service bindings for the Cloudflare CDN or Cloudflare Spectrum.
   */
  create(
    prefixId: string,
    params: ServiceBindingCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceBinding> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/addressing/prefixes/${prefixId}/bindings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ServiceBinding }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List the Cloudflare services this prefix is currently bound to. Traffic sent to
   * an address within an IP prefix will be routed to the Cloudflare service of the
   * most-specific Service Binding matching the address. **Example:** binding
   * `192.0.2.0/24` to Cloudflare Magic Transit and `192.0.2.1/32` to the Cloudflare
   * CDN would route traffic for `192.0.2.1` to the CDN, and traffic for all other
   * IPs in the prefix to Cloudflare Magic Transit.
   */
  list(
    prefixId: string,
    params: ServiceBindingListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ServiceBindingsSinglePage, ServiceBinding> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/addressing/prefixes/${prefixId}/bindings`,
      ServiceBindingsSinglePage,
      options,
    );
  }

  /**
   * Delete a Service Binding
   */
  delete(
    prefixId: string,
    bindingId: string,
    params: ServiceBindingDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceBindingDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/addressing/prefixes/${prefixId}/bindings/${bindingId}`,
      options,
    );
  }

  /**
   * Fetch a single Service Binding
   */
  get(
    prefixId: string,
    bindingId: string,
    params: ServiceBindingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ServiceBinding> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/addressing/prefixes/${prefixId}/bindings/${bindingId}`,
        options,
      ) as Core.APIPromise<{ result: ServiceBinding }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ServiceBindingsSinglePage extends SinglePage<ServiceBinding> {}

export interface ServiceBinding {
  /**
   * Identifier of a Service Binding.
   */
  id?: string;

  /**
   * IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  /**
   * Status of a Service Binding's deployment to the Cloudflare network
   */
  provisioning?: ServiceBinding.Provisioning;

  /**
   * Identifier of a Service on the Cloudflare network. Available services and their
   * IDs may be found in the **List Services** endpoint.
   */
  service_id?: string;

  /**
   * Name of a service running on the Cloudflare network
   */
  service_name?: string;
}

export namespace ServiceBinding {
  /**
   * Status of a Service Binding's deployment to the Cloudflare network
   */
  export interface Provisioning {
    /**
     * When a binding has been deployed to a majority of Cloudflare datacenters, the
     * binding will become active and can be used with its associated service.
     */
    state?: 'provisioning' | 'active';
  }
}

export interface ServiceBindingDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface ServiceBindingCreateParams {
  /**
   * Path param: Identifier of a Cloudflare account.
   */
  account_id: string;

  /**
   * Body param: IP Prefix in Classless Inter-Domain Routing format.
   */
  cidr?: string;

  /**
   * Body param: Identifier of a Service on the Cloudflare network. Available
   * services and their IDs may be found in the **List Services** endpoint.
   */
  service_id?: string;
}

export interface ServiceBindingListParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

export interface ServiceBindingDeleteParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

export interface ServiceBindingGetParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;
}

ServiceBindings.ServiceBindingsSinglePage = ServiceBindingsSinglePage;

export declare namespace ServiceBindings {
  export {
    type ServiceBinding as ServiceBinding,
    type ServiceBindingDeleteResponse as ServiceBindingDeleteResponse,
    ServiceBindingsSinglePage as ServiceBindingsSinglePage,
    type ServiceBindingCreateParams as ServiceBindingCreateParams,
    type ServiceBindingListParams as ServiceBindingListParams,
    type ServiceBindingDeleteParams as ServiceBindingDeleteParams,
    type ServiceBindingGetParams as ServiceBindingGetParams,
  };
}
