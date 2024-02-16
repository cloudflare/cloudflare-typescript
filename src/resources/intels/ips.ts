// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as IPsAPI from 'cloudflare/resources/intels/ips';

export class IPs extends APIResource {
  /**
   * Get IP Overview
   */
  ipIntelligenceGetIPOverview(
    accountId: string,
    query?: IPIPIntelligenceGetIPOverviewParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPIPIntelligenceGetIPOverviewResponse | null>;
  ipIntelligenceGetIPOverview(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPIPIntelligenceGetIPOverviewResponse | null>;
  ipIntelligenceGetIPOverview(
    accountId: string,
    query: IPIPIntelligenceGetIPOverviewParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPIPIntelligenceGetIPOverviewResponse | null> {
    if (isRequestOptions(query)) {
      return this.ipIntelligenceGetIPOverview(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/intel/ip`, { query, ...options }) as Core.APIPromise<{
        result: IPIPIntelligenceGetIPOverviewResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type IPIPIntelligenceGetIPOverviewResponse =
  Array<IPIPIntelligenceGetIPOverviewResponse.IpipIntelligenceGetIPOverviewResponseItem>;

export namespace IPIPIntelligenceGetIPOverviewResponse {
  export interface IpipIntelligenceGetIPOverviewResponseItem {
    /**
     * Specifies a reference to the autonomous systems (AS) that the IP address belongs
     * to.
     */
    belongs_to_ref?: IpipIntelligenceGetIPOverviewResponseItem.BelongsToRef;

    ip?: string | string;

    risk_types?: unknown;
  }

  export namespace IpipIntelligenceGetIPOverviewResponseItem {
    /**
     * Specifies a reference to the autonomous systems (AS) that the IP address belongs
     * to.
     */
    export interface BelongsToRef {
      id?: unknown;

      country?: string;

      description?: string;

      /**
       * Infrastructure type of this ASN.
       */
      type?: 'hosting_provider' | 'isp' | 'organization';

      value?: string;
    }
  }
}

export interface IPIPIntelligenceGetIPOverviewParams {
  ipv4?: string;

  ipv6?: string;
}

export namespace IPs {
  export import IPIPIntelligenceGetIPOverviewResponse = IPsAPI.IPIPIntelligenceGetIPOverviewResponse;
  export import IPIPIntelligenceGetIPOverviewParams = IPsAPI.IPIPIntelligenceGetIPOverviewParams;
}
