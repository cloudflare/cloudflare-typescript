// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HostsAPI from './hosts';
import {
  BaseHosts,
  HostListParams,
  HostListResponse,
  HostListResponsesV4PagePaginationArray,
  Hosts,
} from './hosts';
import * as OperationsAPI from './operations';
import {
  BaseOperations,
  OperationListParams,
  OperationListResponse,
  OperationListResponsesV4PagePaginationArray,
  Operations,
} from './operations';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

/**
 * @deprecated Please use the [Schema Validation](https://developers.cloudflare.com/api/resources/schema_validation/) APIs instead
 */
export class BaseUserSchemas extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'userSchemas'] = Object.freeze([
    'apiGateway',
    'userSchemas',
  ] as const);

  /**
   * Uploads a new OpenAPI schema for API Shield schema validation. The schema
   * defines expected request/response formats for API endpoints.
   *
   * @deprecated Use [Schema Validation API](https://developers.cloudflare.com/api/resources/schema_validation/) instead.
   */
  create(params: UserSchemaCreateParams, options?: RequestOptions): APIPromise<UserSchemaCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(
        path`/zones/${zone_id}/api_gateway/user_schemas`,
        multipartFormRequestOptions({ body, ...options }, this._client),
      ) as APIPromise<{ result: UserSchemaCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all OpenAPI schemas uploaded to API Shield for the zone, including their
   * validation status and associated operations.
   *
   * @deprecated Use [Schema Validation API](https://developers.cloudflare.com/api/resources/schema_validation/) instead.
   */
  list(
    params: UserSchemaListParams,
    options?: RequestOptions,
  ): PagePromise<OldPublicSchemasV4PagePaginationArray, OldPublicSchema> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/api_gateway/user_schemas`,
      V4PagePaginationArray<OldPublicSchema>,
      { query, ...options },
    );
  }

  /**
   * Permanently removes an uploaded OpenAPI schema from API Shield schema
   * validation. Operations using this schema will lose their validation rules.
   *
   * @deprecated Use [Schema Validation API](https://developers.cloudflare.com/api/resources/schema_validation/) instead.
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
   * Activates schema validation for an uploaded OpenAPI schema. Requests to matching
   * endpoints will be validated against the schema definitions.
   *
   * @deprecated Use [Schema Validation API](https://developers.cloudflare.com/api/resources/schema_validation/) instead.
   */
  edit(
    schemaID: string,
    params: UserSchemaEditParams,
    options?: RequestOptions,
  ): APIPromise<OldPublicSchema> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/api_gateway/user_schemas/${schemaID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: OldPublicSchema }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets detailed information about a specific uploaded OpenAPI schema, including
   * its contents and validation configuration.
   *
   * @deprecated Use [Schema Validation API](https://developers.cloudflare.com/api/resources/schema_validation/) instead.
   */
  get(schemaID: string, params: UserSchemaGetParams, options?: RequestOptions): APIPromise<OldPublicSchema> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(path`/zones/${zone_id}/api_gateway/user_schemas/${schemaID}`, {
        query,
        ...options,
      }) as APIPromise<{ result: OldPublicSchema }>
    )._thenUnwrap((obj) => obj.result);
  }
}
/**
 * @deprecated Please use the [Schema Validation](https://developers.cloudflare.com/api/resources/schema_validation/) APIs instead
 */
export class UserSchemas extends BaseUserSchemas {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
  hosts: HostsAPI.Hosts = new HostsAPI.Hosts(this._client);
}

export type OldPublicSchemasV4PagePaginationArray = V4PagePaginationArray<OldPublicSchema>;

export type Message = Array<Message.MessageItem>;

export namespace Message {
  export interface MessageItem {
    code: number;

    message: string;

    documentation_url?: string;

    source?: MessageItem.Source;
  }

  export namespace MessageItem {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface OldPublicSchema {
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
   * UUID.
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

export interface UserSchemaCreateResponse {
  schema: OldPublicSchema;

  upload_details?: UserSchemaCreateResponse.UploadDetails;
}

export namespace UserSchemaCreateResponse {
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
   * Whether the API call was successful.
   */
  success: true;
}

export interface UserSchemaCreateParams {
  /**
   * Path param: Identifier.
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
   * Path param: Identifier.
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
   * Identifier.
   */
  zone_id: string;
}

export interface UserSchemaEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Flag whether schema is enabled for validation.
   */
  validation_enabled?: true;
}

export interface UserSchemaGetParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Query param: Omit the source-files of schemas and only retrieve their meta-data.
   */
  omit_source?: boolean;
}

UserSchemas.Operations = Operations;
UserSchemas.BaseOperations = BaseOperations;
UserSchemas.Hosts = Hosts;
UserSchemas.BaseHosts = BaseHosts;

export declare namespace UserSchemas {
  export {
    type Message as Message,
    type OldPublicSchema as OldPublicSchema,
    type UserSchemaCreateResponse as UserSchemaCreateResponse,
    type UserSchemaDeleteResponse as UserSchemaDeleteResponse,
    type OldPublicSchemasV4PagePaginationArray as OldPublicSchemasV4PagePaginationArray,
    type UserSchemaCreateParams as UserSchemaCreateParams,
    type UserSchemaListParams as UserSchemaListParams,
    type UserSchemaDeleteParams as UserSchemaDeleteParams,
    type UserSchemaEditParams as UserSchemaEditParams,
    type UserSchemaGetParams as UserSchemaGetParams,
  };

  export {
    Operations as Operations,
    BaseOperations as BaseOperations,
    type OperationListResponse as OperationListResponse,
    type OperationListResponsesV4PagePaginationArray as OperationListResponsesV4PagePaginationArray,
    type OperationListParams as OperationListParams,
  };

  export {
    Hosts as Hosts,
    BaseHosts as BaseHosts,
    type HostListResponse as HostListResponse,
    type HostListResponsesV4PagePaginationArray as HostListResponsesV4PagePaginationArray,
    type HostListParams as HostListParams,
  };
}
