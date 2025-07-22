// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class EndpointHealthchecks extends APIResource {
  /**
   * Create Endpoint Health Check.
   *
   * @example
   * ```ts
   * const endpointHealthcheck =
   *   await client.diagnostics.endpointHealthchecks.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     check_type: 'icmp',
   *     endpoint: '203.0.113.1',
   *   });
   * ```
   */
  create(
    params: EndpointHealthcheckCreateParams,
    options?: RequestOptions,
  ): APIPromise<EndpointHealthcheckCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/diagnostics/endpoint-healthchecks`, {
        body,
        ...options,
      }) as APIPromise<{ result: EndpointHealthcheckCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Endpoint Health Checks.
   *
   * @example
   * ```ts
   * const endpointHealthchecks =
   *   await client.diagnostics.endpointHealthchecks.list({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  list(
    params: EndpointHealthcheckListParams,
    options?: RequestOptions,
  ): APIPromise<EndpointHealthcheckListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/diagnostics/endpoint-healthchecks`,
        options,
      ) as APIPromise<{ result: EndpointHealthcheckListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EndpointHealthcheck {
  /**
   * type of check to perform
   */
  check_type: 'icmp';

  /**
   * the IP address of the host to perform checks against
   */
  endpoint: string;

  /**
   * Optional name associated with this check
   */
  name?: string;
}

export interface EndpointHealthcheckCreateResponse {
  /**
   * type of check to perform
   */
  check_type: 'icmp';

  /**
   * the IP address of the host to perform checks against
   */
  endpoint: string;

  /**
   * UUID.
   */
  id?: string;

  /**
   * Optional name associated with this check
   */
  name?: string;
}

export interface EndpointHealthcheckListResponse {
  /**
   * type of check to perform
   */
  check_type: 'icmp';

  /**
   * the IP address of the host to perform checks against
   */
  endpoint: string;

  /**
   * UUID.
   */
  id?: string;

  /**
   * Optional name associated with this check
   */
  name?: string;
}

export interface EndpointHealthcheckCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: type of check to perform
   */
  check_type: 'icmp';

  /**
   * Body param: the IP address of the host to perform checks against
   */
  endpoint: string;

  /**
   * Body param: Optional name associated with this check
   */
  name?: string;
}

export interface EndpointHealthcheckListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace EndpointHealthchecks {
  export {
    type EndpointHealthcheck as EndpointHealthcheck,
    type EndpointHealthcheckCreateResponse as EndpointHealthcheckCreateResponse,
    type EndpointHealthcheckListResponse as EndpointHealthcheckListResponse,
    type EndpointHealthcheckCreateParams as EndpointHealthcheckCreateParams,
    type EndpointHealthcheckListParams as EndpointHealthcheckListParams,
  };
}
