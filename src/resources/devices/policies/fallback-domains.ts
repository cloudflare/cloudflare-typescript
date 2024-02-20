// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as FallbackDomainsAPI from 'cloudflare/resources/devices/policies/fallback-domains';

export class FallbackDomains extends APIResource {
  /**
   * Sets the list of domains to bypass Gateway DNS resolution. These domains will
   * use the specified local DNS resolver instead. This will only apply to the
   * specified device settings profile.
   */
  update(
    identifier: unknown,
    uuid: string,
    body: FallbackDomainUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainUpdateResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/policy/${uuid}/fallback_domains`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FallbackDomainUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the list of domains to bypass Gateway DNS resolution from a specified
   * device settings profile. These domains will use the specified local DNS resolver
   * instead.
   */
  list(
    identifier: unknown,
    uuid: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FallbackDomainListResponse | null> {
    return (
      this._client.get(
        `/accounts/${identifier}/devices/policy/${uuid}/fallback_domains`,
        options,
      ) as Core.APIPromise<{ result: FallbackDomainListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type FallbackDomainUpdateResponse =
  Array<FallbackDomainUpdateResponse.FallbackDomainUpdateResponseItem>;

export namespace FallbackDomainUpdateResponse {
  export interface FallbackDomainUpdateResponseItem {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export type FallbackDomainListResponse = Array<FallbackDomainListResponse.FallbackDomainListResponseItem>;

export namespace FallbackDomainListResponse {
  export interface FallbackDomainListResponseItem {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export type FallbackDomainUpdateParams = Array<FallbackDomainUpdateParams.Body>;

export namespace FallbackDomainUpdateParams {
  export interface Body {
    /**
     * The domain suffix to match when resolving locally.
     */
    suffix: string;

    /**
     * A description of the fallback domain, displayed in the client UI.
     */
    description?: string;

    /**
     * A list of IP addresses to handle domain resolution.
     */
    dns_server?: Array<unknown>;
  }
}

export namespace FallbackDomains {
  export import FallbackDomainUpdateResponse = FallbackDomainsAPI.FallbackDomainUpdateResponse;
  export import FallbackDomainListResponse = FallbackDomainsAPI.FallbackDomainListResponse;
  export import FallbackDomainUpdateParams = FallbackDomainsAPI.FallbackDomainUpdateParams;
}
