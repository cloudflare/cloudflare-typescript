// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as UserSchemasOperationsAPI from './operations';
import * as OperationsAPI from '../operations/operations';
import { SinglePage } from '../../../pagination';

export class Operations extends APIResource {
  /**
   * Retrieves all operations from the schema. Operations that already exist in API
   * Shield Endpoint Management will be returned as full operations.
   */
  list(
    schemaId: string,
    params: OperationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OperationListResponsesSinglePage, OperationListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/api_gateway/user_schemas/${schemaId}/operations`,
      OperationListResponsesSinglePage,
      { query, ...options },
    );
  }
}

export class OperationListResponsesSinglePage extends SinglePage<OperationListResponse> {}

export type OperationListResponse = OperationsAPI.APIShield | OperationListResponse.APIShieldBasicOperation;

export namespace OperationListResponse {
  export interface APIShieldBasicOperation {
    /**
     * The endpoint which can contain path parameter templates in curly braces, each
     * will be replaced from left to right with {varN}, starting with {var1}, during
     * insertion. This will further be Cloudflare-normalized upon insertion. See:
     * https://developers.cloudflare.com/rules/normalization/how-it-works/.
     */
    endpoint: string;

    /**
     * RFC3986-compliant host.
     */
    host: string;

    /**
     * The HTTP method used to access the endpoint.
     */
    method: 'GET' | 'POST' | 'HEAD' | 'OPTIONS' | 'PUT' | 'DELETE' | 'CONNECT' | 'PATCH' | 'TRACE';
  }
}

export interface OperationListParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: Filter results to only include endpoints containing this pattern.
   */
  endpoint?: string;

  /**
   * Query param: Add feature(s) to the results. The feature name that is given here
   * corresponds to the resulting feature object. Have a look at the top-level object
   * description for more details on the specific meaning.
   */
  feature?: Array<'thresholds' | 'parameter_schemas' | 'schema_info'>;

  /**
   * Query param: Filter results to only include the specified hosts.
   */
  host?: Array<string>;

  /**
   * Query param: Filter results to only include the specified HTTP methods.
   */
  method?: Array<string>;

  /**
   * Query param: Filter results by whether operations exist in API Shield Endpoint
   * Management or not. `new` will just return operations from the schema that do not
   * exist in API Shield Endpoint Management. `existing` will just return operations
   * from the schema that already exist in API Shield Endpoint Management.
   */
  operation_status?: 'new' | 'existing';

  /**
   * Query param: Page number of paginated results.
   */
  page?: unknown;

  /**
   * Query param: Maximum number of results per page.
   */
  per_page?: unknown;
}

export namespace Operations {
  export import OperationListResponse = UserSchemasOperationsAPI.OperationListResponse;
  export import OperationListResponsesSinglePage = UserSchemasOperationsAPI.OperationListResponsesSinglePage;
  export import OperationListParams = UserSchemasOperationsAPI.OperationListParams;
}
