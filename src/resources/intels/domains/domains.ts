// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DomainsAPI from 'cloudflare/resources/intels/domains/domains';
import * as BulksAPI from 'cloudflare/resources/intels/domains/bulks';

export class Domains extends APIResource {
  bulks: BulksAPI.Bulks = new BulksAPI.Bulks(this._client);

  /**
   * Get Domain Details
   */
  domainIntelligenceGetDomainDetails(
    accountId: string,
    query?: DomainDomainIntelligenceGetDomainDetailsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainDomainIntelligenceGetDomainDetailsResponse>;
  domainIntelligenceGetDomainDetails(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainDomainIntelligenceGetDomainDetailsResponse>;
  domainIntelligenceGetDomainDetails(
    accountId: string,
    query: DomainDomainIntelligenceGetDomainDetailsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainDomainIntelligenceGetDomainDetailsResponse> {
    if (isRequestOptions(query)) {
      return this.domainIntelligenceGetDomainDetails(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/intel/domain`, { query, ...options }) as Core.APIPromise<{
        result: DomainDomainIntelligenceGetDomainDetailsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DomainDomainIntelligenceGetDomainDetailsResponse {
  /**
   * Additional information related to the host name.
   */
  additional_information?: DomainDomainIntelligenceGetDomainDetailsResponse.AdditionalInformation;

  /**
   * Application that the hostname belongs to.
   */
  application?: DomainDomainIntelligenceGetDomainDetailsResponse.Application;

  /**
   * Current content categories.
   */
  content_categories?: unknown;

  domain?: string;

  inherited_content_categories?: Array<DomainDomainIntelligenceGetDomainDetailsResponse.InheritedContentCategory>;

  /**
   * Domain from which `inherited_content_categories` and `inherited_risk_types` are
   * inherited, if applicable.
   */
  inherited_from?: string;

  inherited_risk_types?: Array<DomainDomainIntelligenceGetDomainDetailsResponse.InheritedRiskType>;

  /**
   * Global Cloudflare 100k ranking for the last 30 days, if available for the
   * hostname. The top ranked domain is 1, the lowest ranked domain is 100,000.
   */
  popularity_rank?: number;

  /**
   * Specifies a list of references to one or more IP addresses or domain names that
   * the domain name currently resolves to.
   */
  resolves_to_refs?: Array<DomainDomainIntelligenceGetDomainDetailsResponse.ResolvesToRef>;

  /**
   * Hostname risk score, which is a value between 0 (lowest risk) to 1 (highest
   * risk).
   */
  risk_score?: number;

  risk_types?: unknown;
}

export namespace DomainDomainIntelligenceGetDomainDetailsResponse {
  /**
   * Additional information related to the host name.
   */
  export interface AdditionalInformation {
    /**
     * Suspected DGA malware family.
     */
    suspected_malware_family?: string;
  }

  /**
   * Application that the hostname belongs to.
   */
  export interface Application {
    id?: number;

    name?: string;
  }

  export interface InheritedContentCategory {
    id?: number;

    name?: string;

    super_category_id?: number;
  }

  export interface InheritedRiskType {
    id?: number;

    name?: string;

    super_category_id?: number;
  }

  export interface ResolvesToRef {
    /**
     * STIX 2.1 identifier:
     * https://docs.oasis-open.org/cti/stix/v2.1/cs02/stix-v2.1-cs02.html#_64yvzeku5a5c
     */
    id?: string;

    /**
     * IP address or domain name.
     */
    value?: string;
  }
}

export interface DomainDomainIntelligenceGetDomainDetailsParams {
  domain?: string;
}

export namespace Domains {
  export import DomainDomainIntelligenceGetDomainDetailsResponse = DomainsAPI.DomainDomainIntelligenceGetDomainDetailsResponse;
  export import DomainDomainIntelligenceGetDomainDetailsParams = DomainsAPI.DomainDomainIntelligenceGetDomainDetailsParams;
  export import Bulks = BulksAPI.Bulks;
  export import BulkDomainIntelligenceGetMultipleDomainDetailsResponse = BulksAPI.BulkDomainIntelligenceGetMultipleDomainDetailsResponse;
  export import BulkDomainIntelligenceGetMultipleDomainDetailsParams = BulksAPI.BulkDomainIntelligenceGetMultipleDomainDetailsParams;
}
