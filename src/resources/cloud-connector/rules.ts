// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rules extends APIResource {
  /**
   * Put Rules
   */
  update(
    params: RuleUpdateParams,
    options?: RequestOptions,
  ): PagePromise<RuleUpdateResponsesSinglePage, RuleUpdateResponse> {
    const { zone_id, rules } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/cloud_connector/rules`,
      SinglePage<RuleUpdateResponse>,
      { body: rules, method: 'put', ...options },
    );
  }

  /**
   * Rules
   */
  list(
    params: RuleListParams,
    options?: RequestOptions,
  ): PagePromise<RuleListResponsesSinglePage, RuleListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/cloud_connector/rules`,
      SinglePage<RuleListResponse>,
      options,
    );
  }
}

export type RuleUpdateResponsesSinglePage = SinglePage<RuleUpdateResponse>;

export type RuleListResponsesSinglePage = SinglePage<RuleListResponse>;

export interface RuleUpdateResponse {
  id?: string;

  description?: string;

  enabled?: boolean;

  expression?: string;

  /**
   * Parameters of Cloud Connector Rule
   */
  parameters?: RuleUpdateResponse.Parameters;

  /**
   * Cloud Provider type
   */
  provider?: 'aws_s3' | 'r2' | 'gcp_storage' | 'azure_storage';
}

export namespace RuleUpdateResponse {
  /**
   * Parameters of Cloud Connector Rule
   */
  export interface Parameters {
    /**
     * Host to perform Cloud Connection to
     */
    host?: string;
  }
}

export interface RuleListResponse {
  id?: string;

  description?: string;

  enabled?: boolean;

  expression?: string;

  /**
   * Parameters of Cloud Connector Rule
   */
  parameters?: RuleListResponse.Parameters;

  /**
   * Cloud Provider type
   */
  provider?: 'aws_s3' | 'r2' | 'gcp_storage' | 'azure_storage';
}

export namespace RuleListResponse {
  /**
   * Parameters of Cloud Connector Rule
   */
  export interface Parameters {
    /**
     * Host to perform Cloud Connection to
     */
    host?: string;
  }
}

export interface RuleUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: List of Cloud Connector rules
   */
  rules?: Array<RuleUpdateParams.Rule>;
}

export namespace RuleUpdateParams {
  export interface Rule {
    id?: string;

    description?: string;

    enabled?: boolean;

    expression?: string;

    /**
     * Parameters of Cloud Connector Rule
     */
    parameters?: Rule.Parameters;

    /**
     * Cloud Provider type
     */
    provider?: 'aws_s3' | 'r2' | 'gcp_storage' | 'azure_storage';
  }

  export namespace Rule {
    /**
     * Parameters of Cloud Connector Rule
     */
    export interface Parameters {
      /**
       * Host to perform Cloud Connection to
       */
      host?: string;
    }
  }
}

export interface RuleListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Rules {
  export {
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleUpdateResponsesSinglePage as RuleUpdateResponsesSinglePage,
    type RuleListResponsesSinglePage as RuleListResponsesSinglePage,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
  };
}
