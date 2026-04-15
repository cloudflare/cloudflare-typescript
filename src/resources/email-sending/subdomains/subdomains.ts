// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as DNSAPI from './dns';
import { DNS, DNSGetParams } from './dns';
import { SinglePage } from '../../../pagination';

export class Subdomains extends APIResource {
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);

  /**
   * Creates a new sending subdomain or re-enables sending on an existing subdomain
   * that had it disabled. If zone-level Email Sending has not been enabled yet, the
   * zone flag is automatically set when the entitlement is present.
   *
   * @example
   * ```ts
   * const subdomain =
   *   await client.emailSending.subdomains.create({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'sub.example.com',
   *   });
   * ```
   */
  create(
    params: SubdomainCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainCreateResponse> {
    const { zone_id = this._client.zoneId, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/email/sending/subdomains`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SubdomainCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all sending-enabled subdomains for the zone.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const subdomainListResponse of client.emailSending.subdomains.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params?: SubdomainListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubdomainListResponsesSinglePage, SubdomainListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubdomainListResponsesSinglePage, SubdomainListResponse>;
  list(
    params: SubdomainListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubdomainListResponsesSinglePage, SubdomainListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { zone_id = this._client.zoneId } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/email/sending/subdomains`,
      SubdomainListResponsesSinglePage,
      options,
    );
  }

  /**
   * Disables sending on a subdomain and removes its DNS records. If routing is still
   * active on the subdomain, only sending is disabled.
   *
   * @example
   * ```ts
   * const subdomain =
   *   await client.emailSending.subdomains.delete(
   *     'aabbccdd11223344aabbccdd11223344',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    subdomainId: string,
    params?: SubdomainDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainDeleteResponse>;
  delete(subdomainId: string, options?: Core.RequestOptions): Core.APIPromise<SubdomainDeleteResponse>;
  delete(
    subdomainId: string,
    params: SubdomainDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(subdomainId, {}, params);
    }
    const { zone_id = this._client.zoneId } = params;
    return this._client.delete(`/zones/${zone_id}/email/sending/subdomains/${subdomainId}`, options);
  }

  /**
   * Gets information for a specific sending subdomain.
   *
   * @example
   * ```ts
   * const subdomain = await client.emailSending.subdomains.get(
   *   'aabbccdd11223344aabbccdd11223344',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    subdomainId: string,
    params?: SubdomainGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainGetResponse>;
  get(subdomainId: string, options?: Core.RequestOptions): Core.APIPromise<SubdomainGetResponse>;
  get(
    subdomainId: string,
    params: SubdomainGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubdomainGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(subdomainId, {}, params);
    }
    const { zone_id = this._client.zoneId } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/email/sending/subdomains/${subdomainId}`,
        options,
      ) as Core.APIPromise<{ result: SubdomainGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SubdomainListResponsesSinglePage extends SinglePage<SubdomainListResponse> {}

export interface SubdomainCreateResponse {
  /**
   * Whether Email Sending is enabled on this subdomain.
   */
  enabled: boolean;

  /**
   * The subdomain domain name.
   */
  name: string;

  /**
   * Sending subdomain identifier.
   */
  tag: string;

  /**
   * The date and time the destination address has been created.
   */
  created?: string;

  /**
   * The DKIM selector used for email signing.
   */
  dkim_selector?: string;

  /**
   * The date and time the destination address was last modified.
   */
  modified?: string;

  /**
   * The return-path domain used for bounce handling.
   */
  return_path_domain?: string;
}

export interface SubdomainListResponse {
  /**
   * Whether Email Sending is enabled on this subdomain.
   */
  enabled: boolean;

  /**
   * The subdomain domain name.
   */
  name: string;

  /**
   * Sending subdomain identifier.
   */
  tag: string;

  /**
   * The date and time the destination address has been created.
   */
  created?: string;

  /**
   * The DKIM selector used for email signing.
   */
  dkim_selector?: string;

  /**
   * The date and time the destination address was last modified.
   */
  modified?: string;

  /**
   * The return-path domain used for bounce handling.
   */
  return_path_domain?: string;
}

export interface SubdomainDeleteResponse {
  errors: Array<SubdomainDeleteResponse.Error>;

  messages: Array<SubdomainDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace SubdomainDeleteResponse {
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

export interface SubdomainGetResponse {
  /**
   * Whether Email Sending is enabled on this subdomain.
   */
  enabled: boolean;

  /**
   * The subdomain domain name.
   */
  name: string;

  /**
   * Sending subdomain identifier.
   */
  tag: string;

  /**
   * The date and time the destination address has been created.
   */
  created?: string;

  /**
   * The DKIM selector used for email signing.
   */
  dkim_selector?: string;

  /**
   * The date and time the destination address was last modified.
   */
  modified?: string;

  /**
   * The return-path domain used for bounce handling.
   */
  return_path_domain?: string;
}

export interface SubdomainCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Body param: The subdomain name. Must be within the zone.
   */
  name: string;
}

export interface SubdomainListParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export interface SubdomainDeleteParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export interface SubdomainGetParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

Subdomains.SubdomainListResponsesSinglePage = SubdomainListResponsesSinglePage;
Subdomains.DNS = DNS;

export declare namespace Subdomains {
  export {
    type SubdomainCreateResponse as SubdomainCreateResponse,
    type SubdomainListResponse as SubdomainListResponse,
    type SubdomainDeleteResponse as SubdomainDeleteResponse,
    type SubdomainGetResponse as SubdomainGetResponse,
    SubdomainListResponsesSinglePage as SubdomainListResponsesSinglePage,
    type SubdomainCreateParams as SubdomainCreateParams,
    type SubdomainListParams as SubdomainListParams,
    type SubdomainDeleteParams as SubdomainDeleteParams,
    type SubdomainGetParams as SubdomainGetParams,
  };

  export { DNS as DNS, type DNSGetParams as DNSGetParams };
}
