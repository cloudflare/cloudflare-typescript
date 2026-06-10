// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class DataClasses extends APIResource {
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
  create(
    params: DataClassCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataClassCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/data_classes`, { body, ...options }) as Core.APIPromise<{
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
    dataClassId: string,
    params: DataClassUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataClassUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/data_classes/${dataClassId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DataClassUpdateResponse }>
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<DataClassListResponsesSinglePage, DataClassListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dlp/data_classes`,
      DataClassListResponsesSinglePage,
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
    dataClassId: string,
    params: DataClassDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataClassDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/dlp/data_classes/${dataClassId}`,
        options,
      ) as Core.APIPromise<{ result: DataClassDeleteResponse | null }>
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
    dataClassId: string,
    params: DataClassGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataClassGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dlp/data_classes/${dataClassId}`,
        options,
      ) as Core.APIPromise<{ result: DataClassGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DataClassListResponsesSinglePage extends SinglePage<DataClassListResponse> {}

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

DataClasses.DataClassListResponsesSinglePage = DataClassListResponsesSinglePage;

export declare namespace DataClasses {
  export {
    type DataClassCreateResponse as DataClassCreateResponse,
    type DataClassUpdateResponse as DataClassUpdateResponse,
    type DataClassListResponse as DataClassListResponse,
    type DataClassDeleteResponse as DataClassDeleteResponse,
    type DataClassGetResponse as DataClassGetResponse,
    DataClassListResponsesSinglePage as DataClassListResponsesSinglePage,
    type DataClassCreateParams as DataClassCreateParams,
    type DataClassUpdateParams as DataClassUpdateParams,
    type DataClassListParams as DataClassListParams,
    type DataClassDeleteParams as DataClassDeleteParams,
    type DataClassGetParams as DataClassGetParams,
  };
}
