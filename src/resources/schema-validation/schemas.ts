// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Schemas extends APIResource {
  /**
   * Uploads a new OpenAPI schema for API Shield schema validation. The schema
   * defines expected request/response formats for API endpoints.
   *
   * @example
   * ```ts
   * const publicSchema =
   *   await client.schemaValidation.schemas.create({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     kind: 'openapi_v3',
   *     name: 'petstore schema',
   *     source: '<schema file contents>',
   *     validation_enabled: true,
   *   });
   * ```
   */
  create(params: SchemaCreateParams, options?: Core.RequestOptions): Core.APIPromise<PublicSchema> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/schema_validation/schemas`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PublicSchema }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all OpenAPI schemas uploaded to API Shield with pagination support.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const publicSchema of client.schemaValidation.schemas.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SchemaListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PublicSchemasV4PagePaginationArray, PublicSchema> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/schema_validation/schemas`,
      PublicSchemasV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Permanently removes an uploaded OpenAPI schema from API Shield. Operations using
   * this schema will lose their validation rules.
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
    schemaId: string,
    params: SchemaDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SchemaDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/schema_validation/schemas/${schemaId}`,
        options,
      ) as Core.APIPromise<{ result: SchemaDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modifies an existing OpenAPI schema in API Shield, updating the validation rules
   * for associated API operations.
   *
   * @example
   * ```ts
   * const publicSchema =
   *   await client.schemaValidation.schemas.edit(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(
    schemaId: string,
    params: SchemaEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PublicSchema> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/schema_validation/schemas/${schemaId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PublicSchema }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the contents and metadata of a specific OpenAPI schema uploaded to API
   * Shield.
   *
   * @example
   * ```ts
   * const publicSchema =
   *   await client.schemaValidation.schemas.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    schemaId: string,
    params: SchemaGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PublicSchema> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/schema_validation/schemas/${schemaId}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: PublicSchema }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class PublicSchemasV4PagePaginationArray extends V4PagePaginationArray<PublicSchema> {}

/**
 * A schema used in schema validation
 */
export interface PublicSchema {
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
  id: string;
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
  validation_enabled: boolean;
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

Schemas.PublicSchemasV4PagePaginationArray = PublicSchemasV4PagePaginationArray;

export declare namespace Schemas {
  export {
    type PublicSchema as PublicSchema,
    type SchemaDeleteResponse as SchemaDeleteResponse,
    PublicSchemasV4PagePaginationArray as PublicSchemasV4PagePaginationArray,
    type SchemaCreateParams as SchemaCreateParams,
    type SchemaListParams as SchemaListParams,
    type SchemaDeleteParams as SchemaDeleteParams,
    type SchemaEditParams as SchemaEditParams,
    type SchemaGetParams as SchemaGetParams,
  };
}
