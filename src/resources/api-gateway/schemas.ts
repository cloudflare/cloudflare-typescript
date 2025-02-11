// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Schemas extends APIResource {
  /**
   * Retrieve operations and features as OpenAPI schemas
   */
  list(params: SchemaListParams, options?: RequestOptions): APIPromise<SchemaListResponse> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(path`/zones/${zone_id}/api_gateway/schemas`, { query, ...options }) as APIPromise<{
        result: SchemaListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SchemaListResponse {
  schemas?: Array<unknown>;

  timestamp?: string;
}

export interface SchemaListParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Query param: Add feature(s) to the results. The feature name that is given here
   * corresponds to the resulting feature object. Have a look at the top-level object
   * description for more details on the specific meaning.
   */
  feature?: Array<'thresholds' | 'parameter_schemas' | 'schema_info'>;

  /**
   * Query param: Receive schema only for the given host(s).
   */
  host?: Array<string>;
}

export declare namespace Schemas {
  export { type SchemaListResponse as SchemaListResponse, type SchemaListParams as SchemaListParams };
}
