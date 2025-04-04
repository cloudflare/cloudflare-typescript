// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ServiceBindings extends APIResource {
  /**
   * Creates a new Service Binding, routing traffic to IPs within the given CIDR to a
   * service running on Cloudflare's network. **Note:** This API may only be used on
   * prefixes currently configured with a Magic Transit/Cloudflare CDN/Cloudflare
   * Spectrum service binding, and only allows creating upgrade service bindings for
   * the Cloudflare CDN or Cloudflare Spectrum.
   */
  create(
    prefixID: string,
    params: ServiceBindingCreateParams,
    options?: RequestOptions,
  ): APIPromise<ServiceBinding> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/addressing/prefixes/${prefixID}/bindings`, {
        body,
        ...options,
      }) as APIPromise<{ result: ServiceBinding }>
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
    prefixID: string,
    params: ServiceBindingListParams,
    options?: RequestOptions,
  ): PagePromise<ServiceBindingsSinglePage, ServiceBinding> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/addressing/prefixes/${prefixID}/bindings`,
      SinglePage<ServiceBinding>,
      options,
    );
  }

  /**
   * Delete a Service Binding
   */
  delete(
    bindingID: string,
    params: ServiceBindingDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ServiceBindingDeleteResponse> {
    const { account_id, prefix_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/addressing/prefixes/${prefix_id}/bindings/${bindingID}`,
      options,
    );
  }

  /**
   * Fetch a single Service Binding
   */
  get(
    bindingID: string,
    params: ServiceBindingGetParams,
    options?: RequestOptions,
  ): APIPromise<ServiceBinding> {
    const { account_id, prefix_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/addressing/prefixes/${prefix_id}/bindings/${bindingID}`,
        options,
      ) as APIPromise<{ result: ServiceBinding }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ServiceBindingsSinglePage = SinglePage<ServiceBinding>;

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
  errors: Array<ServiceBindingDeleteResponse.Error>;

  messages: Array<ServiceBindingDeleteResponse.Message>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export namespace ServiceBindingDeleteResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }
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

  /**
   * Identifier of an IP Prefix.
   */
  prefix_id: string;
}

export interface ServiceBindingGetParams {
  /**
   * Identifier of a Cloudflare account.
   */
  account_id: string;

  /**
   * Identifier of an IP Prefix.
   */
  prefix_id: string;
}

export declare namespace ServiceBindings {
  export {
    type ServiceBinding as ServiceBinding,
    type ServiceBindingDeleteResponse as ServiceBindingDeleteResponse,
    type ServiceBindingsSinglePage as ServiceBindingsSinglePage,
    type ServiceBindingCreateParams as ServiceBindingCreateParams,
    type ServiceBindingListParams as ServiceBindingListParams,
    type ServiceBindingDeleteParams as ServiceBindingDeleteParams,
    type ServiceBindingGetParams as ServiceBindingGetParams,
  };
}
