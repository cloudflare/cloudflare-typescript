// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseDataClasses extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'dataClasses'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'dataClasses',
  ] as const);

  /**
   * Creates a new data class
   *
   * @example
   * ```ts
   * const dataClass =
   *   await client.zeroTrust.dlp.dataClasses.create({
   *     account_id: 'account_id',
   *     data_tags: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
   *     expression: 'expression',
   *     name: 'name',
   *     sensitivity_levels: [
   *       {
   *         group_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *         level_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       },
   *     ],
   *   });
   * ```
   */
  create(params: DataClassCreateParams, options?: RequestOptions): APIPromise<DataClassCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dlp/data_classes`, { body, ...options }) as APIPromise<{
        result: DataClassCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the attributes of a single data class
   *
   * @example
   * ```ts
   * const dataClass =
   *   await client.zeroTrust.dlp.dataClasses.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  update(
    dataClassID: string,
    params: DataClassUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DataClassUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/dlp/data_classes/${dataClassID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: DataClassUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve all data classes in an account
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const dataClassListResponse of client.zeroTrust.dlp.dataClasses.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DataClassListParams,
    options?: RequestOptions,
  ): PagePromise<DataClassListResponsesSinglePage, DataClassListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dlp/data_classes`,
      SinglePage<DataClassListResponse>,
      options,
    );
  }

  /**
   * Delete a single data class
   *
   * @example
   * ```ts
   * const dataClass =
   *   await client.zeroTrust.dlp.dataClasses.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    dataClassID: string,
    params: DataClassDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DataClassDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/dlp/data_classes/${dataClassID}`,
        options,
      ) as APIPromise<{ result: DataClassDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a specific data class
   *
   * @example
   * ```ts
   * const dataClass =
   *   await client.zeroTrust.dlp.dataClasses.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    dataClassID: string,
    params: DataClassGetParams,
    options?: RequestOptions,
  ): APIPromise<DataClassGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dlp/data_classes/${dataClassID}`, options) as APIPromise<{
        result: DataClassGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class DataClasses extends BaseDataClasses {}

export type DataClassListResponsesSinglePage = SinglePage<DataClassListResponse>;

export interface DataClassCreateResponse {
  id: string;

  created_at: string;

  data_tags: Array<string>;

  expression: string;

  name: string;

  sensitivity_levels: Array<DataClassCreateResponse.SensitivityLevel>;

  updated_at: string;

  description?: string | null;
}

export namespace DataClassCreateResponse {
  /**
   * A reference pairing a sensitivity group with a specific level within that group.
   */
  export interface SensitivityLevel {
    group_id: string;

    level_id: string;
  }
}

export interface DataClassUpdateResponse {
  id: string;

  created_at: string;

  data_tags: Array<string>;

  expression: string;

  name: string;

  sensitivity_levels: Array<DataClassUpdateResponse.SensitivityLevel>;

  updated_at: string;

  description?: string | null;
}

export namespace DataClassUpdateResponse {
  /**
   * A reference pairing a sensitivity group with a specific level within that group.
   */
  export interface SensitivityLevel {
    group_id: string;

    level_id: string;
  }
}

export interface DataClassListResponse {
  id: string;

  created_at: string;

  data_tags: Array<string>;

  expression: string;

  name: string;

  sensitivity_levels: Array<DataClassListResponse.SensitivityLevel>;

  updated_at: string;

  description?: string | null;
}

export namespace DataClassListResponse {
  /**
   * A reference pairing a sensitivity group with a specific level within that group.
   */
  export interface SensitivityLevel {
    group_id: string;

    level_id: string;
  }
}

export type DataClassDeleteResponse = unknown;

export interface DataClassGetResponse {
  id: string;

  created_at: string;

  data_tags: Array<string>;

  expression: string;

  name: string;

  sensitivity_levels: Array<DataClassGetResponse.SensitivityLevel>;

  updated_at: string;

  description?: string | null;
}

export namespace DataClassGetResponse {
  /**
   * A reference pairing a sensitivity group with a specific level within that group.
   */
  export interface SensitivityLevel {
    group_id: string;

    level_id: string;
  }
}

export interface DataClassCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  data_tags: Array<string>;

  /**
   * Body param
   */
  expression: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  sensitivity_levels: Array<DataClassCreateParams.SensitivityLevel>;

  /**
   * Body param
   */
  description?: string | null;
}

export namespace DataClassCreateParams {
  /**
   * A reference pairing a sensitivity group with a specific level within that group.
   */
  export interface SensitivityLevel {
    group_id: string;

    level_id: string;
  }
}

export interface DataClassUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  data_tags?: Array<string> | null;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param
   */
  expression?: string | null;

  /**
   * Body param
   */
  name?: string | null;

  /**
   * Body param
   */
  sensitivity_levels?: Array<DataClassUpdateParams.SensitivityLevel> | null;
}

export namespace DataClassUpdateParams {
  /**
   * A reference pairing a sensitivity group with a specific level within that group.
   */
  export interface SensitivityLevel {
    group_id: string;

    level_id: string;
  }
}

export interface DataClassListParams {
  account_id: string;
}

export interface DataClassDeleteParams {
  account_id: string;
}

export interface DataClassGetParams {
  account_id: string;
}

export declare namespace DataClasses {
  export {
    type DataClassCreateResponse as DataClassCreateResponse,
    type DataClassUpdateResponse as DataClassUpdateResponse,
    type DataClassListResponse as DataClassListResponse,
    type DataClassDeleteResponse as DataClassDeleteResponse,
    type DataClassGetResponse as DataClassGetResponse,
    type DataClassListResponsesSinglePage as DataClassListResponsesSinglePage,
    type DataClassCreateParams as DataClassCreateParams,
    type DataClassUpdateParams as DataClassUpdateParams,
    type DataClassListParams as DataClassListParams,
    type DataClassDeleteParams as DataClassDeleteParams,
    type DataClassGetParams as DataClassGetParams,
  };
}
