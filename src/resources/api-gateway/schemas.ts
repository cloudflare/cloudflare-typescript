// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as SchemasAPI from './schemas';

export class Schemas extends APIResource {
  /**
   * Retrieve operations and features as OpenAPI schemas
   */
  list(params: SchemaListParams, options?: Core.RequestOptions): Core.APIPromise<SchemaListResponse> {
    const { zone_id, ...query } = params;
    return (this._client.get(`/zones/${zone_id}/api_gateway/schemas`, { query, ...options }) as Core.APIPromise<{ result: SchemaListResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface SchemaListResponse {
  schemas?: Array<unknown>;

  timestamp?: string;
}

export interface SchemaListParams {
  /**
   * Path param: Identifier
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

export namespace Schemas {
  export import SchemaListResponse = SchemasAPI.SchemaListResponse;
  export import SchemaListParams = SchemasAPI.SchemaListParams;
}
