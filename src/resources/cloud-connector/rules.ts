// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as RulesAPI from './rules';
import { SinglePage } from '../../pagination';

export class Rules extends APIResource {
  /**
   * Put Rules
   */
  update(params: RuleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<RuleUpdateResponse> {
    const { zone_id, body } = params;
    return (
      this._client.put(`/zones/${zone_id}/cloud_connector/rules`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: RuleUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Rules
   */
  list(
    params: RuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RuleListResponsesSinglePage, RuleListResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/cloud_connector/rules`,
      RuleListResponsesSinglePage,
      options,
    );
  }
}

export class RuleListResponsesSinglePage extends SinglePage<RuleListResponse> {}

/**
 * List of Cloud Connector rules
 */
export type RuleUpdateResponse = Array<RuleUpdateResponse.RuleUpdateResponseItem>;

export namespace RuleUpdateResponse {
  export interface RuleUpdateResponseItem {
    id?: string;

    description?: string;

    enabled?: boolean;

    expression?: string;

    /**
     * Parameters of Cloud Connector Rule
     */
    parameters?: RuleUpdateResponseItem.Parameters;

    /**
     * Cloud Provider type
     */
    provider?: 'aws_s3' | 'r2' | 'gcp_storage' | 'azure_storage';
  }

  export namespace RuleUpdateResponseItem {
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
  body: Array<RuleUpdateParams.Body>;
}

export namespace RuleUpdateParams {
  export interface Body {
    id?: string;

    description?: string;

    enabled?: boolean;

    expression?: string;

    /**
     * Parameters of Cloud Connector Rule
     */
    parameters?: Body.Parameters;

    /**
     * Cloud Provider type
     */
    provider?: 'aws_s3' | 'r2' | 'gcp_storage' | 'azure_storage';
  }

  export namespace Body {
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

export namespace Rules {
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleListResponsesSinglePage = RulesAPI.RuleListResponsesSinglePage;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
}
