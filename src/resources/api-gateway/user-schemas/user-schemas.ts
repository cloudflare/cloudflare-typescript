// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Shared from '../../shared';
import * as HostsAPI from './hosts';
import { HostListParams, HostListResponse, HostListResponsesV4PagePaginationArray, Hosts } from './hosts';
import * as OperationsAPI from './operations';
import {
  OperationListParams,
  OperationListResponse,
  OperationListResponsesV4PagePaginationArray,
  Operations,
} from './operations';
import { APIPromise } from '../../../api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';
import { type Uploadable } from '../../../uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class UserSchemas extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
  hosts: HostsAPI.Hosts = new HostsAPI.Hosts(this._client);

  /**
   * Upload a schema to a zone
   */
  create(params: UserSchemaCreateParams, options?: RequestOptions): APIPromise<SchemaUpload> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(
        path`/zones/${zone_id}/api_gateway/user_schemas`,
        multipartFormRequestOptions({ body, ...options }, this._client),
      ) as APIPromise<{ result: SchemaUpload }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve information about all schemas on a zone
   */
  list(
    params: UserSchemaListParams,
    options?: RequestOptions,
  ): PagePromise<PublicSchemasV4PagePaginationArray, PublicSchema> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/api_gateway/user_schemas`,
      V4PagePaginationArray<PublicSchema>,
      { query, ...options },
    );
  }

  /**
   * Delete a schema
   */
  delete(
    schemaID: string,
    params: UserSchemaDeleteParams,
    options?: RequestOptions,
  ): APIPromise<UserSchemaDeleteResponse> {
    const { zone_id } = params;
    return this._client.delete(path`/zones/${zone_id}/api_gateway/user_schemas/${schemaID}`, options);
  }

  /**
   * Enable validation for a schema
   */
  edit(schemaID: string, params: UserSchemaEditParams, options?: RequestOptions): APIPromise<PublicSchema> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/api_gateway/user_schemas/${schemaID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: PublicSchema }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve information about a specific schema on a zone
   */
  get(schemaID: string, params: UserSchemaGetParams, options?: RequestOptions): APIPromise<PublicSchema> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(path`/zones/${zone_id}/api_gateway/user_schemas/${schemaID}`, {
        query,
        ...options,
      }) as APIPromise<{ result: PublicSchema }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type PublicSchemasV4PagePaginationArray = V4PagePaginationArray<PublicSchema>;

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
   * UUID
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

export interface UserSchemaDeleteResponse {
  errors: Message;

  messages: Message;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface UserSchemaCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Schema file bytes
   */
  file: Uploadable;

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

export interface UserSchemaListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: Omit the source-files of schemas and only retrieve their meta-data.
   */
  omit_source?: boolean;

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

UserSchemas.Operations = Operations;
UserSchemas.Hosts = Hosts;

export declare namespace UserSchemas {
  export {
    type Message as Message,
    type PublicSchema as PublicSchema,
    type SchemaUpload as SchemaUpload,
    type UserSchemaDeleteResponse as UserSchemaDeleteResponse,
    type PublicSchemasV4PagePaginationArray as PublicSchemasV4PagePaginationArray,
    type UserSchemaCreateParams as UserSchemaCreateParams,
    type UserSchemaListParams as UserSchemaListParams,
    type UserSchemaDeleteParams as UserSchemaDeleteParams,
    type UserSchemaEditParams as UserSchemaEditParams,
    type UserSchemaGetParams as UserSchemaGetParams,
  };

  export {
    Operations as Operations,
    type OperationListResponse as OperationListResponse,
    type OperationListResponsesV4PagePaginationArray as OperationListResponsesV4PagePaginationArray,
    type OperationListParams as OperationListParams,
  };

  export {
    Hosts as Hosts,
    type HostListResponse as HostListResponse,
    type HostListResponsesV4PagePaginationArray as HostListResponsesV4PagePaginationArray,
    type HostListParams as HostListParams,
  };
}
