// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class Domains extends APIResource {
  /**
   * Attaches a domain that routes traffic to a Worker.
   *
   * @example
   * ```ts
   * const domain = await client.workers.domains.update({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   hostname: 'app.example.com',
   *   service: 'my-worker',
   * });
   * ```
   */
  update(params: DomainUpdateParams, options?: Core.RequestOptions): Core.APIPromise<DomainUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/workers/domains`, { body, ...options }) as Core.APIPromise<{
        result: DomainUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all domains for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const domainListResponse of client.workers.domains.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DomainListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DomainListResponsesSinglePage, DomainListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/workers/domains`, DomainListResponsesSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Detaches a domain from a Worker. Both the Worker and all of its previews are no
   * longer routable using this domain.
   *
   * @example
   * ```ts
   * const domain = await client.workers.domains.delete(
   *   'dbe10b4bc17c295377eabd600e1787fd',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    domainId: string,
    params: DomainDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/workers/domains/${domainId}`, options);
  }

  /**
   * Gets information about a domain.
   *
   * @example
   * ```ts
   * const domain = await client.workers.domains.get(
   *   'dbe10b4bc17c295377eabd600e1787fd',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    domainId: string,
    params: DomainGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/workers/domains/${domainId}`, options) as Core.APIPromise<{
        result: DomainGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DomainListResponsesSinglePage extends SinglePage<DomainListResponse> {}

export interface DomainUpdateResponse {
  /**
   * Immutable ID of the domain.
   */
  id: string;

  /**
   * ID of the TLS certificate issued for the domain.
   */
  cert_id: string;

  /**
   * @deprecated Worker environment associated with the domain.
   */
  environment: string;

  /**
   * Hostname of the domain. Can be either the zone apex or a subdomain of the zone.
   * Requests to this hostname will be routed to the configured Worker.
   */
  hostname: string;

  /**
   * Name of the Worker associated with the domain. Requests to the configured
   * hostname will be routed to this Worker.
   */
  service: string;

  /**
   * ID of the zone containing the domain hostname.
   */
  zone_id: string;

  /**
   * Name of the zone containing the domain hostname.
   */
  zone_name: string;
}

export interface DomainListResponse {
  /**
   * Immutable ID of the domain.
   */
  id: string;

  /**
   * ID of the TLS certificate issued for the domain.
   */
  cert_id: string;

  /**
   * @deprecated Worker environment associated with the domain.
   */
  environment: string;

  /**
   * Hostname of the domain. Can be either the zone apex or a subdomain of the zone.
   * Requests to this hostname will be routed to the configured Worker.
   */
  hostname: string;

  /**
   * Name of the Worker associated with the domain. Requests to the configured
   * hostname will be routed to this Worker.
   */
  service: string;

  /**
   * ID of the zone containing the domain hostname.
   */
  zone_id: string;

  /**
   * Name of the zone containing the domain hostname.
   */
  zone_name: string;
}

export interface DomainDeleteResponse {
  errors: Array<DomainDeleteResponse.Error>;

  messages: Array<DomainDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace DomainDeleteResponse {
  export interface Error {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface DomainGetResponse {
  /**
   * Immutable ID of the domain.
   */
  id: string;

  /**
   * ID of the TLS certificate issued for the domain.
   */
  cert_id: string;

  /**
   * @deprecated Worker environment associated with the domain.
   */
  environment: string;

  /**
   * Hostname of the domain. Can be either the zone apex or a subdomain of the zone.
   * Requests to this hostname will be routed to the configured Worker.
   */
  hostname: string;

  /**
   * Name of the Worker associated with the domain. Requests to the configured
   * hostname will be routed to this Worker.
   */
  service: string;

  /**
   * ID of the zone containing the domain hostname.
   */
  zone_id: string;

  /**
   * Name of the zone containing the domain hostname.
   */
  zone_name: string;
}

export interface DomainUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: Hostname of the domain. Can be either the zone apex or a subdomain
   * of the zone. Requests to this hostname will be routed to the configured Worker.
   */
  hostname: string;

  /**
   * Body param: Name of the Worker associated with the domain. Requests to the
   * configured hostname will be routed to this Worker.
   */
  service: string;

  /**
   * @deprecated Body param: Worker environment associated with the domain.
   */
  environment?: string;

  /**
   * Body param: ID of the zone containing the domain hostname.
   */
  zone_id?: string;

  /**
   * Body param: Name of the zone containing the domain hostname.
   */
  zone_name?: string;
}

export interface DomainListParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Worker environment associated with the domain.
   */
  environment?: string;

  /**
   * Query param: Hostname of the domain.
   */
  hostname?: string;

  /**
   * Query param: Name of the Worker associated with the domain.
   */
  service?: string;

  /**
   * Query param: ID of the zone containing the domain hostname.
   */
  zone_id?: string;

  /**
   * Query param: Name of the zone containing the domain hostname.
   */
  zone_name?: string;
}

export interface DomainDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface DomainGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

Domains.DomainListResponsesSinglePage = DomainListResponsesSinglePage;

export declare namespace Domains {
  export {
    type DomainUpdateResponse as DomainUpdateResponse,
    type DomainListResponse as DomainListResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainGetResponse as DomainGetResponse,
    DomainListResponsesSinglePage as DomainListResponsesSinglePage,
    type DomainUpdateParams as DomainUpdateParams,
    type DomainListParams as DomainListParams,
    type DomainDeleteParams as DomainDeleteParams,
    type DomainGetParams as DomainGetParams,
  };
}
