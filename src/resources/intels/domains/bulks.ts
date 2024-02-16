// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as BulksAPI from 'cloudflare/resources/intels/domains/bulks';

export class Bulks extends APIResource {
  /**
   * Get Multiple Domain Details
   */
  domainIntelligenceGetMultipleDomainDetails(
    accountId: string,
    query?: BulkDomainIntelligenceGetMultipleDomainDetailsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkDomainIntelligenceGetMultipleDomainDetailsResponse | null>;
  domainIntelligenceGetMultipleDomainDetails(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkDomainIntelligenceGetMultipleDomainDetailsResponse | null>;
  domainIntelligenceGetMultipleDomainDetails(
    accountId: string,
    query: BulkDomainIntelligenceGetMultipleDomainDetailsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkDomainIntelligenceGetMultipleDomainDetailsResponse | null> {
    if (isRequestOptions(query)) {
      return this.domainIntelligenceGetMultipleDomainDetails(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/intel/domain/bulk`, { query, ...options }) as Core.APIPromise<{
        result: BulkDomainIntelligenceGetMultipleDomainDetailsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type BulkDomainIntelligenceGetMultipleDomainDetailsResponse =
  Array<BulkDomainIntelligenceGetMultipleDomainDetailsResponse.BulkDomainIntelligenceGetMultipleDomainDetailsResponseItem>;

export namespace BulkDomainIntelligenceGetMultipleDomainDetailsResponse {
  export interface BulkDomainIntelligenceGetMultipleDomainDetailsResponseItem {
    /**
     * Additional information related to the host name.
     */
    additional_information?: BulkDomainIntelligenceGetMultipleDomainDetailsResponseItem.AdditionalInformation;

    /**
     * Application that the hostname belongs to.
     */
    application?: BulkDomainIntelligenceGetMultipleDomainDetailsResponseItem.Application;

    /**
     * Current content categories.
     */
    content_categories?: unknown;

    domain?: string;

    inherited_content_categories?: Array<BulkDomainIntelligenceGetMultipleDomainDetailsResponseItem.InheritedContentCategory>;

    /**
     * Domain from which `inherited_content_categories` and `inherited_risk_types` are
     * inherited, if applicable.
     */
    inherited_from?: string;

    inherited_risk_types?: Array<BulkDomainIntelligenceGetMultipleDomainDetailsResponseItem.InheritedRiskType>;

    /**
     * Global Cloudflare 100k ranking for the last 30 days, if available for the
     * hostname. The top ranked domain is 1, the lowest ranked domain is 100,000.
     */
    popularity_rank?: number;

    /**
     * Hostname risk score, which is a value between 0 (lowest risk) to 1 (highest
     * risk).
     */
    risk_score?: number;

    risk_types?: unknown;
  }

  export namespace BulkDomainIntelligenceGetMultipleDomainDetailsResponseItem {
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
  }
}

export interface BulkDomainIntelligenceGetMultipleDomainDetailsParams {
  /**
   * Accepts multiple values, i.e. `?domain=cloudflare.com&domain=example.com`.
   */
  domain?: unknown;
}

export namespace Bulks {
  export import BulkDomainIntelligenceGetMultipleDomainDetailsResponse = BulksAPI.BulkDomainIntelligenceGetMultipleDomainDetailsResponse;
  export import BulkDomainIntelligenceGetMultipleDomainDetailsParams = BulksAPI.BulkDomainIntelligenceGetMultipleDomainDetailsParams;
}
