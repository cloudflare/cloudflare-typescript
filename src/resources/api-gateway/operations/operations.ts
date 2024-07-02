// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as OperationsAPI from './operations';
import * as SchemaValidationAPI from './schema-validation';
import { SinglePage } from '../../../pagination';

export class Operations extends APIResource {
  schemaValidation: SchemaValidationAPI.SchemaValidation = new SchemaValidationAPI.SchemaValidation(
    this._client,
  );

  /**
   * Add one or more operations to a zone. Endpoints can contain path variables.
   * Host, method, endpoint will be normalized to a canoncial form when creating an
   * operation and must be unique on the zone. Inserting an operation that matches an
   * existing one will return the record of the already existing operation and update
   * its last_updated date.
   */
  create(
    params: OperationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationCreateResponse | null> {
    const { zone_id, body } = params;
    return (
      this._client.post(`/zones/${zone_id}/api_gateway/operations`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: OperationCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve information about all operations on a zone
   */
  list(
    params: OperationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<APIShieldsSinglePage, APIShield> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(`/zones/${zone_id}/api_gateway/operations`, APIShieldsSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Delete an operation
   */
  delete(
    operationId: string,
    params: OperationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OperationDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/api_gateway/operations/${operationId}`,
        options,
      ) as Core.APIPromise<{ result: OperationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve information about an operation
   */
  get(
    operationId: string,
    params: OperationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<APIShield> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/api_gateway/operations/${operationId}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: APIShield }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class APIShieldsSinglePage extends SinglePage<APIShield> {}

export interface APIShield {
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

  last_updated: string;

  /**
   * The HTTP method used to access the endpoint.
   */
  method: 'GET' | 'POST' | 'HEAD' | 'OPTIONS' | 'PUT' | 'DELETE' | 'CONNECT' | 'PATCH' | 'TRACE';

  /**
   * UUID identifier
   */
  operation_id: string;

  features?:
    | APIShield.APIShieldOperationFeatureThresholds
    | APIShield.APIShieldOperationFeatureParameterSchemas;
}

export namespace APIShield {
  export interface APIShieldOperationFeatureThresholds {
    thresholds?: APIShieldOperationFeatureThresholds.Thresholds;
  }

  export namespace APIShieldOperationFeatureThresholds {
    export interface Thresholds {
      /**
       * The total number of auth-ids seen across this calculation.
       */
      auth_id_tokens?: number;

      /**
       * The number of data points used for the threshold suggestion calculation.
       */
      data_points?: number;

      last_updated?: string;

      /**
       * The p50 quantile of requests (in period_seconds).
       */
      p50?: number;

      /**
       * The p90 quantile of requests (in period_seconds).
       */
      p90?: number;

      /**
       * The p99 quantile of requests (in period_seconds).
       */
      p99?: number;

      /**
       * The period over which this threshold is suggested.
       */
      period_seconds?: number;

      /**
       * The estimated number of requests covered by these calculations.
       */
      requests?: number;

      /**
       * The suggested threshold in requests done by the same auth_id or period_seconds.
       */
      suggested_threshold?: number;
    }
  }

  export interface APIShieldOperationFeatureParameterSchemas {
    parameter_schemas: APIShieldOperationFeatureParameterSchemas.ParameterSchemas;
  }

  export namespace APIShieldOperationFeatureParameterSchemas {
    export interface ParameterSchemas {
      last_updated?: string;

      /**
       * An operation schema object containing a response.
       */
      parameter_schemas?: ParameterSchemas.ParameterSchemas;
    }

    export namespace ParameterSchemas {
      /**
       * An operation schema object containing a response.
       */
      export interface ParameterSchemas {
        /**
         * An array containing the learned parameter schemas.
         */
        parameters?: Array<unknown>;

        /**
         * An empty response object. This field is required to yield a valid operation
         * schema.
         */
        responses?: unknown | null;
      }
    }
  }
}

export type OperationCreateResponse = Array<APIShield>;

export type OperationDeleteResponse = unknown | string | null;

export interface OperationCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: Array<OperationCreateParams.Body>;
}

export namespace OperationCreateParams {
  export interface Body {
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
   * Query param: Direction to order results.
   */
  direction?: 'asc' | 'desc';

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
   * Query param: Field to order by. When requesting a feature, the feature keys are
   * available for ordering as well, e.g., `thresholds.suggested_threshold`.
   */
  order?: 'method' | 'host' | 'endpoint' | 'thresholds.$key';

  /**
   * Query param: Page number of paginated results.
   */
  page?: unknown;

  /**
   * Query param: Number of results to return per page
   */
  per_page?: number;
}

export interface OperationDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface OperationGetParams {
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
}

export namespace Operations {
  export import APIShield = OperationsAPI.APIShield;
  export import OperationCreateResponse = OperationsAPI.OperationCreateResponse;
  export import OperationDeleteResponse = OperationsAPI.OperationDeleteResponse;
  export import APIShieldsSinglePage = OperationsAPI.APIShieldsSinglePage;
  export import OperationCreateParams = OperationsAPI.OperationCreateParams;
  export import OperationListParams = OperationsAPI.OperationListParams;
  export import OperationDeleteParams = OperationsAPI.OperationDeleteParams;
  export import OperationGetParams = OperationsAPI.OperationGetParams;
  export import SchemaValidation = SchemaValidationAPI.SchemaValidation;
  export import SettingsMultipleRequest = SchemaValidationAPI.SettingsMultipleRequest;
  export import SchemaValidationUpdateResponse = SchemaValidationAPI.SchemaValidationUpdateResponse;
  export import SchemaValidationGetResponse = SchemaValidationAPI.SchemaValidationGetResponse;
  export import SchemaValidationUpdateParams = SchemaValidationAPI.SchemaValidationUpdateParams;
  export import SchemaValidationEditParams = SchemaValidationAPI.SchemaValidationEditParams;
  export import SchemaValidationGetParams = SchemaValidationAPI.SchemaValidationGetParams;
}
