// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Applications extends APIResource {
  /**
   * List applications with different filters.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const applicationListResponse of client.zeroTrust.resourceLibrary.applications.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ApplicationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ApplicationListResponsesSinglePage, ApplicationListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/resource-library/applications`,
      ApplicationListResponsesSinglePage,
      { query, ...options },
    );
  }

  /**
   * Get application by ID.
   *
   * @example
   * ```ts
   * const application =
   *   await client.zeroTrust.resourceLibrary.applications.get(
   *     '0b63249c-95bf-4cc0-a7cc-d7faaaf1dac0',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    id: string,
    params: ApplicationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ApplicationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/resource-library/applications/${id}`,
        options,
      ) as Core.APIPromise<{ result: ApplicationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ApplicationListResponsesSinglePage extends SinglePage<ApplicationListResponse> {}

export interface ApplicationListResponse {
  /**
   * Returns the application ID.
   */
  id: string;

  /**
   * Confidence score for the application. Returns -1 when no score is available.
   */
  application_confidence_score: number;

  /**
   * Returns the application source.
   */
  application_source: string;

  /**
   * Returns the application type.
   */
  application_type: string;

  /**
   * Returns the application type description.
   */
  application_type_description: string;

  /**
   * Returns the application creation time.
   */
  created_at: string;

  /**
   * GenAI score for the application. Returns -1 when no score is available.
   */
  gen_ai_score: number;

  /**
   * Returns the list of hostnames for the application.
   */
  hostnames: Array<string>;

  /**
   * Returns the human readable ID.
   */
  human_id: string;

  /**
   * Returns the list of IP subnets for the application.
   */
  ip_subnets: Array<string>;

  /**
   * Returns the application name.
   */
  name: string;

  /**
   * Returns the list of port protocols for the application.
   */
  port_protocols: Array<string>;

  /**
   * Returns the list of support domains for the application.
   */
  support_domains: Array<string>;

  /**
   * Cloudflare products that support this application.
   */
  supported: Array<'GATEWAY' | 'ACCESS' | 'CASB'>;

  /**
   * Returns the application update time.
   */
  updated_at: string;

  /**
   * Returns the application version.
   */
  version: string;

  /**
   * Returns the score composition breakdown for the application.
   */
  application_score_composition?: unknown | null;

  /**
   * Returns the Intel API ID for the application.
   */
  intel_id?: number | null;
}

export interface ApplicationGetResponse {
  /**
   * Returns the application ID.
   */
  id: string;

  /**
   * Confidence score for the application. Returns -1 when no score is available.
   */
  application_confidence_score: number;

  /**
   * Returns the application source.
   */
  application_source: string;

  /**
   * Returns the application type.
   */
  application_type: string;

  /**
   * Returns the application type description.
   */
  application_type_description: string;

  /**
   * Returns the application creation time.
   */
  created_at: string;

  /**
   * GenAI score for the application. Returns -1 when no score is available.
   */
  gen_ai_score: number;

  /**
   * Returns the list of hostnames for the application.
   */
  hostnames: Array<string>;

  /**
   * Returns the human readable ID.
   */
  human_id: string;

  /**
   * Returns the list of IP subnets for the application.
   */
  ip_subnets: Array<string>;

  /**
   * Returns the application name.
   */
  name: string;

  /**
   * Returns the list of port protocols for the application.
   */
  port_protocols: Array<string>;

  /**
   * Returns the list of support domains for the application.
   */
  support_domains: Array<string>;

  /**
   * Cloudflare products that support this application.
   */
  supported: Array<'GATEWAY' | 'ACCESS' | 'CASB'>;

  /**
   * Returns the application update time.
   */
  updated_at: string;

  /**
   * Returns the application version.
   */
  version: string;

  /**
   * Returns the score composition breakdown for the application.
   */
  application_score_composition?: unknown | null;

  /**
   * Returns the Intel API ID for the application.
   */
  intel_id?: number | null;
}

export interface ApplicationListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Filter applications using key:value format. Supported filter keys:
   *
   * - name: Filter by application name (e.g., name:HR)
   * - id: Filter by application ID (e.g., id:0b63249c-95bf-4cc0-a7cc-d7faaaf1dac0)
   * - human_id: Filter by human-readable ID (e.g., human_id:HR)
   * - hostname: Filter by hostname or support domain (e.g.,
   *   hostname:portal.example.com)
   * - source: Filter by application source name (e.g., source:cloudflare)
   * - ip_subnet: Filter by IP subnet using CIDR containment — returns applications
   *   where any stored subnet contains the search value (e.g., ip_subnet:10.0.1.5/32
   *   matches apps with 10.0.0.0/16)
   * - intel_id: Filter by Intel API ID (e.g., intel_id:498). also supports multiple
   *   values (e.g., intel_id:498,1001)
   * - category_id: Filter by category ID (e.g.,
   *   category_id:37f8ec03-8766-49d4-9a15-369b044c842c).
   * - category_name: Filter by category name (e.g., category_name:HR).
   * - supported: Filter by supported Cloudflare product (e.g., supported:ACCESS).
   *   Values: GATEWAY, ACCESS, CASB. .
   */
  filter?: string;

  /**
   * Query param: Limit of number of results to return (max 250).
   */
  limit?: number;

  /**
   * Query param: Offset of results to return.
   */
  offset?: number;

  /**
   * Query param: Order results by field name and direction (e.g., name:asc). Ignored
   * when search is provided; results are ranked by relevance instead.
   */
  order_by?: string;

  /**
   * Query param: Fuzzy search across application name and hostnames. Results are
   * ranked by relevance. Must be between 2 and 200 characters. Can be combined with
   * filter parameters.
   */
  search?: string;
}

export interface ApplicationGetParams {
  /**
   * Account ID.
   */
  account_id: string;
}

Applications.ApplicationListResponsesSinglePage = ApplicationListResponsesSinglePage;

export declare namespace Applications {
  export {
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationGetResponse as ApplicationGetResponse,
    ApplicationListResponsesSinglePage as ApplicationListResponsesSinglePage,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationGetParams as ApplicationGetParams,
  };
}
