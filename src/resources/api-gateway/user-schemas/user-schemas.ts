// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as UserSchemasAPI from './user-schemas';
import * as Shared from '../../shared';
import * as OperationsAPI from './operations';
import { SinglePage } from '../../../pagination';

export class UserSchemas extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);

  /**
   * Upload a schema to a zone
   */
  create(params: UserSchemaCreateParams, options?: Core.RequestOptions): Core.APIPromise<SchemaUpload> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(
        `/zones/${zone_id}/api_gateway/user_schemas`,
        Core.multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: SchemaUpload }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve information about all schemas on a zone
   */
  list(
    params: UserSchemaListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<PublicSchemasSinglePage, PublicSchema> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(`/zones/${zone_id}/api_gateway/user_schemas`, PublicSchemasSinglePage, {
      query,
      ...options,
    });
  }

  /**
   * Delete a schema
   */
  delete(
    schemaId: string,
    params: UserSchemaDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSchemaDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/api_gateway/user_schemas/${schemaId}`,
        options,
      ) as Core.APIPromise<{ result: UserSchemaDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable validation for a schema
   */
  edit(
    schemaId: string,
    params: UserSchemaEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PublicSchema> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/api_gateway/user_schemas/${schemaId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PublicSchema }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve information about a specific schema on a zone
   */
  get(
    schemaId: string,
    params: UserSchemaGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PublicSchema> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/api_gateway/user_schemas/${schemaId}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: PublicSchema }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class PublicSchemasSinglePage extends SinglePage<PublicSchema> {}

export type Message = Array<Shared.ResponseInfo>;

export interface PublicSchema {
  created_at: string;

  /**
   * Kind of schema
   */
  kind: 'openapi_v3';

  /**
   * Name of the schema
   */
  name: string;

  /**
   * UUID identifier
   */
  schema_id: string;

  /**
   * Source of the schema
   */
  source?: string;

  /**
   * Flag whether schema is enabled for validation.
   */
  validation_enabled?: boolean;
}

export interface SchemaUpload {
  schema: PublicSchema;

  upload_details?: SchemaUpload.UploadDetails;
}

export namespace SchemaUpload {
  export interface UploadDetails {
    /**
     * Diagnostic warning events that occurred during processing. These events are
     * non-critical errors found within the schema.
     */
    warnings?: Array<UploadDetails.Warning>;
  }

  export namespace UploadDetails {
    export interface Warning {
      /**
       * Code that identifies the event that occurred.
       */
      code: number;

      /**
       * JSONPath location(s) in the schema where these events were encountered. See
       * [https://goessner.net/articles/JsonPath/](https://goessner.net/articles/JsonPath/)
       * for JSONPath specification.
       */
      locations?: Array<string>;

      /**
       * Diagnostic message that describes the event.
       */
      message?: string;
    }
  }
}

export type UserSchemaDeleteResponse = unknown | string | null;

export interface UserSchemaCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Schema file bytes
   */
  file: Core.Uploadable;

  /**
   * Body param: Kind of schema
   */
  kind: 'openapi_v3';

  /**
   * Body param: Name of the schema
   */
  name?: string;

  /**
   * Body param: Flag whether schema is enabled for validation.
   */
  validation_enabled?: 'true' | 'false';
}

export interface UserSchemaListParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: Omit the source-files of schemas and only retrieve their meta-data.
   */
  omit_source?: boolean;

  /**
   * Query param: Page number of paginated results.
   */
  page?: unknown;

  /**
   * Query param: Maximum number of results per page.
   */
  per_page?: unknown;

  /**
   * Query param: Flag whether schema is enabled for validation.
   */
  validation_enabled?: boolean;
}

export interface UserSchemaDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface UserSchemaEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Flag whether schema is enabled for validation.
   */
  validation_enabled?: true;
}

export interface UserSchemaGetParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: Omit the source-files of schemas and only retrieve their meta-data.
   */
  omit_source?: boolean;
}

export namespace UserSchemas {
  export import Message = UserSchemasAPI.Message;
  export import PublicSchema = UserSchemasAPI.PublicSchema;
  export import SchemaUpload = UserSchemasAPI.SchemaUpload;
  export import UserSchemaDeleteResponse = UserSchemasAPI.UserSchemaDeleteResponse;
  export import PublicSchemasSinglePage = UserSchemasAPI.PublicSchemasSinglePage;
  export import UserSchemaCreateParams = UserSchemasAPI.UserSchemaCreateParams;
  export import UserSchemaListParams = UserSchemasAPI.UserSchemaListParams;
  export import UserSchemaDeleteParams = UserSchemasAPI.UserSchemaDeleteParams;
  export import UserSchemaEditParams = UserSchemasAPI.UserSchemaEditParams;
  export import UserSchemaGetParams = UserSchemasAPI.UserSchemaGetParams;
  export import Operations = OperationsAPI.Operations;
  export import OperationListResponse = OperationsAPI.OperationListResponse;
  export import OperationListResponsesSinglePage = OperationsAPI.OperationListResponsesSinglePage;
  export import OperationListParams = OperationsAPI.OperationListParams;
}
