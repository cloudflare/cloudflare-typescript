// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Schemas extends APIResource {
  /**
   * Upload a schema
   *
   * @example
   * ```ts
   * const schema = await client.schemaValidation.schemas.create(
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     kind: 'openapi_v3',
   *     name: 'petstore schema',
   *     source: '<schema file contents>',
   *   },
   * );
   * ```
   */
  create(params: SchemaCreateParams, options?: RequestOptions): APIPromise<SchemaCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/schema_validation/schemas`, {
        body,
        ...options,
      }) as APIPromise<{ result: SchemaCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all uploaded schemas
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const schemaListResponse of client.schemaValidation.schemas.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SchemaListParams,
    options?: RequestOptions,
  ): PagePromise<SchemaListResponsesV4PagePaginationArray, SchemaListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/schema_validation/schemas`,
      V4PagePaginationArray<SchemaListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete a schema
   *
   * @example
   * ```ts
   * const schema = await client.schemaValidation.schemas.delete(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    schemaID: string,
    params: SchemaDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SchemaDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        path`/zones/${zone_id}/schema_validation/schemas/${schemaID}`,
        options,
      ) as APIPromise<{ result: SchemaDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit details of a schema to enable validation
   *
   * @example
   * ```ts
   * const response = await client.schemaValidation.schemas.edit(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  edit(schemaID: string, params: SchemaEditParams, options?: RequestOptions): APIPromise<SchemaEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/schema_validation/schemas/${schemaID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: SchemaEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get details of a schema
   *
   * @example
   * ```ts
   * const schema = await client.schemaValidation.schemas.get(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(schemaID: string, params: SchemaGetParams, options?: RequestOptions): APIPromise<SchemaGetResponse> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(path`/zones/${zone_id}/schema_validation/schemas/${schemaID}`, {
        query,
        ...options,
      }) as APIPromise<{ result: SchemaGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SchemaListResponsesV4PagePaginationArray = V4PagePaginationArray<SchemaListResponse>;

/**
 * A schema used in schema validation
 */
export interface SchemaCreateResponse {
  created_at: string;

  /**
   * The kind of the schema
   */
  kind: 'openapi_v3';

  /**
   * A human-readable name for the schema
   */
  name: string;

  /**
   * A unique identifier of this schema
   */
  schema_id: string;

  /**
   * The raw schema, e.g., the OpenAPI schema, either as JSON or YAML
   */
  source: string;

  /**
   * An indicator if this schema is enabled
   */
  validation_enabled?: boolean;
}

/**
 * A schema used in schema validation
 */
export interface SchemaListResponse {
  created_at: string;

  /**
   * The kind of the schema
   */
  kind: 'openapi_v3';

  /**
   * A human-readable name for the schema
   */
  name: string;

  /**
   * A unique identifier of this schema
   */
  schema_id: string;

  /**
   * The raw schema, e.g., the OpenAPI schema, either as JSON or YAML
   */
  source: string;

  /**
   * An indicator if this schema is enabled
   */
  validation_enabled?: boolean;
}

export interface SchemaDeleteResponse {
  /**
   * The ID of the schema that was just deleted
   */
  schema_id: string;
}

/**
 * A schema used in schema validation
 */
export interface SchemaEditResponse {
  created_at: string;

  /**
   * The kind of the schema
   */
  kind: 'openapi_v3';

  /**
   * A human-readable name for the schema
   */
  name: string;

  /**
   * A unique identifier of this schema
   */
  schema_id: string;

  /**
   * The raw schema, e.g., the OpenAPI schema, either as JSON or YAML
   */
  source: string;

  /**
   * An indicator if this schema is enabled
   */
  validation_enabled?: boolean;
}

/**
 * A schema used in schema validation
 */
export interface SchemaGetResponse {
  created_at: string;

  /**
   * The kind of the schema
   */
  kind: 'openapi_v3';

  /**
   * A human-readable name for the schema
   */
  name: string;

  /**
   * A unique identifier of this schema
   */
  schema_id: string;

  /**
   * The raw schema, e.g., the OpenAPI schema, either as JSON or YAML
   */
  source: string;

  /**
   * An indicator if this schema is enabled
   */
  validation_enabled?: boolean;
}

export interface SchemaCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: The kind of the schema
   */
  kind: 'openapi_v3';

  /**
   * Body param: A human-readable name for the schema
   */
  name: string;

  /**
   * Body param: The raw schema, e.g., the OpenAPI schema, either as JSON or YAML
   */
  source: string;

  /**
   * Body param: An indicator if this schema is enabled
   */
  validation_enabled?: boolean;
}

export interface SchemaListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Query param: Omit the source-files of schemas and only retrieve their meta-data.
   */
  omit_source?: boolean;

  /**
   * Query param: Filter for enabled schemas
   */
  validation_enabled?: boolean;
}

export interface SchemaDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface SchemaEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Flag whether schema is enabled for validation.
   */
  validation_enabled?: boolean;
}

export interface SchemaGetParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Query param: Omit the source-files of schemas and only retrieve their meta-data.
   */
  omit_source?: boolean;
}

export declare namespace Schemas {
  export {
    type SchemaCreateResponse as SchemaCreateResponse,
    type SchemaListResponse as SchemaListResponse,
    type SchemaDeleteResponse as SchemaDeleteResponse,
    type SchemaEditResponse as SchemaEditResponse,
    type SchemaGetResponse as SchemaGetResponse,
    type SchemaListResponsesV4PagePaginationArray as SchemaListResponsesV4PagePaginationArray,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaListParams as SchemaListParams,
    type SchemaDeleteParams as SchemaDeleteParams,
    type SchemaEditParams as SchemaEditParams,
    type SchemaGetParams as SchemaGetParams,
  };
}
