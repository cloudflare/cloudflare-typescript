// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SchemaAPI from './schema';
import { BaseSchema, Schema, SchemaGetParams, SchemaGetResponse } from './schema';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseModels extends APIResource {
  static override readonly _key: readonly ['ai', 'models'] = Object.freeze(['ai', 'models'] as const);

  /**
   * Searches Workers AI models by name or description.
   */
  list(
    params: ModelListParams,
    options?: RequestOptions,
  ): PagePromise<ModelListResponsesV4PagePaginationArray, ModelListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai/models/search`,
      V4PagePaginationArray<ModelListResponse>,
      { query, ...options },
    );
  }
}
export class Models extends BaseModels {
  schema: SchemaAPI.Schema = new SchemaAPI.Schema(this._client);
}

export type ModelListResponsesV4PagePaginationArray = V4PagePaginationArray<ModelListResponse>;

export type ModelListResponse = unknown;

export interface ModelListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Filter by Author
   */
  author?: string;

  /**
   * Query param: If set, return models in the requested marketplace format instead
   * of the default response.
   */
  format?: 'openrouter';

  /**
   * Query param: Filter to hide experimental models
   */
  hide_experimental?: boolean;

  /**
   * Query param: Search
   */
  search?: string;

  /**
   * Query param: Filter by Source Id
   */
  source?: number;

  /**
   * Query param: Filter by Task Name
   */
  task?: string;
}

Models.Schema = Schema;
Models.BaseSchema = BaseSchema;

export declare namespace Models {
  export {
    type ModelListResponse as ModelListResponse,
    type ModelListResponsesV4PagePaginationArray as ModelListResponsesV4PagePaginationArray,
    type ModelListParams as ModelListParams,
  };

  export {
    Schema as Schema,
    BaseSchema as BaseSchema,
    type SchemaGetResponse as SchemaGetResponse,
    type SchemaGetParams as SchemaGetParams,
  };
}
