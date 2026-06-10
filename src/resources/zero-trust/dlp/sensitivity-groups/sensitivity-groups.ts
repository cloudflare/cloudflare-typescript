// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as LevelsAPI from './levels/levels';
import {
  LevelCreateParams,
  LevelCreateResponse,
  LevelDeleteParams,
  LevelDeleteResponse,
  LevelGetParams,
  LevelGetResponse,
  LevelListParams,
  LevelListResponse,
  LevelListResponsesSinglePage,
  LevelUpdateParams,
  LevelUpdateResponse,
  Levels,
} from './levels/levels';
import { SinglePage } from '../../../../pagination';

export class SensitivityGroups extends APIResource {
  levels: LevelsAPI.Levels = new LevelsAPI.Levels(this._client);

  /**
   * Creates a new sensitivity group.
   *
   * @example
   * ```ts
   * const sensitivityGroup =
   *   await client.zeroTrust.dlp.sensitivityGroups.create({
   *     account_id: 'account_id',
   *     name: 'name',
   *   });
   * ```
   */
  create(
    params: SensitivityGroupCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SensitivityGroupCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/sensitivity_groups`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SensitivityGroupCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the attributes of a single sensitivity group.
   *
   * @example
   * ```ts
   * const sensitivityGroup =
   *   await client.zeroTrust.dlp.sensitivityGroups.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  update(
    sensitivityGroupId: string,
    params: SensitivityGroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SensitivityGroupUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SensitivityGroupUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve all sensitivity groups in an account
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const sensitivityGroupListResponse of client.zeroTrust.dlp.sensitivityGroups.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SensitivityGroupListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SensitivityGroupListResponsesSinglePage, SensitivityGroupListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dlp/sensitivity_groups`,
      SensitivityGroupListResponsesSinglePage,
      options,
    );
  }

  /**
   * Delete a single sensitivity group.
   *
   * @example
   * ```ts
   * const sensitivityGroup =
   *   await client.zeroTrust.dlp.sensitivityGroups.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    sensitivityGroupId: string,
    params: SensitivityGroupDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SensitivityGroupDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupId}`,
        options,
      ) as Core.APIPromise<{ result: SensitivityGroupDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a specific sensitivity group.
   *
   * @example
   * ```ts
   * const sensitivityGroup =
   *   await client.zeroTrust.dlp.sensitivityGroups.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    sensitivityGroupId: string,
    params: SensitivityGroupGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SensitivityGroupGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dlp/sensitivity_groups/${sensitivityGroupId}`,
        options,
      ) as Core.APIPromise<{ result: SensitivityGroupGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SensitivityGroupListResponsesSinglePage extends SinglePage<SensitivityGroupListResponse> {}

export interface SensitivityGroupCreateResponse {
  id: string;

  created_at: string;

  levels: Array<SensitivityGroupCreateResponse.Level>;

  name: string;

  updated_at: string;

  description?: string | null;

  template_id?: string | null;
}

export namespace SensitivityGroupCreateResponse {
  export interface Level {
    id: string;

    created_at: string;

    name: string;

    updated_at: string;

    description?: string | null;
  }
}

export interface SensitivityGroupUpdateResponse {
  id: string;

  created_at: string;

  levels: Array<SensitivityGroupUpdateResponse.Level>;

  name: string;

  updated_at: string;

  description?: string | null;

  template_id?: string | null;
}

export namespace SensitivityGroupUpdateResponse {
  export interface Level {
    id: string;

    created_at: string;

    name: string;

    updated_at: string;

    description?: string | null;
  }
}

export interface SensitivityGroupListResponse {
  id: string;

  created_at: string;

  levels: Array<SensitivityGroupListResponse.Level>;

  name: string;

  updated_at: string;

  description?: string | null;

  template_id?: string | null;
}

export namespace SensitivityGroupListResponse {
  export interface Level {
    id: string;

    created_at: string;

    name: string;

    updated_at: string;

    description?: string | null;
  }
}

export type SensitivityGroupDeleteResponse = unknown;

export interface SensitivityGroupGetResponse {
  id: string;

  created_at: string;

  levels: Array<SensitivityGroupGetResponse.Level>;

  name: string;

  updated_at: string;

  description?: string | null;

  template_id?: string | null;
}

export namespace SensitivityGroupGetResponse {
  export interface Level {
    id: string;

    created_at: string;

    name: string;

    updated_at: string;

    description?: string | null;
  }
}

export interface SensitivityGroupCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param: Levels to create with the group. Mutually exclusive with
   * `template_id`.
   */
  levels?: Array<SensitivityGroupCreateParams.Level>;

  /**
   * Body param
   */
  template_id?: string | null;
}

export namespace SensitivityGroupCreateParams {
  export interface Level {
    name: string;

    description?: string | null;
  }
}

export interface SensitivityGroupUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param: The desired final state of levels.
   *
   * - `None` (omitted): no level changes.
   * - `Some([])`: delete all levels.
   * - `Some([...])`: desired final set + order.
   */
  levels?: Array<SensitivityGroupUpdateParams.Level> | null;

  /**
   * Body param
   */
  name?: string | null;
}

export namespace SensitivityGroupUpdateParams {
  export interface Level {
    /**
     * If `None` (omitted), a new level will be created. Otherwise, an existing level
     * will be updated.
     */
    id?: string | null;

    description?: string | null;

    name?: string | null;
  }
}

export interface SensitivityGroupListParams {
  account_id: string;
}

export interface SensitivityGroupDeleteParams {
  account_id: string;
}

export interface SensitivityGroupGetParams {
  account_id: string;
}

SensitivityGroups.SensitivityGroupListResponsesSinglePage = SensitivityGroupListResponsesSinglePage;
SensitivityGroups.Levels = Levels;
SensitivityGroups.LevelListResponsesSinglePage = LevelListResponsesSinglePage;

export declare namespace SensitivityGroups {
  export {
    type SensitivityGroupCreateResponse as SensitivityGroupCreateResponse,
    type SensitivityGroupUpdateResponse as SensitivityGroupUpdateResponse,
    type SensitivityGroupListResponse as SensitivityGroupListResponse,
    type SensitivityGroupDeleteResponse as SensitivityGroupDeleteResponse,
    type SensitivityGroupGetResponse as SensitivityGroupGetResponse,
    SensitivityGroupListResponsesSinglePage as SensitivityGroupListResponsesSinglePage,
    type SensitivityGroupCreateParams as SensitivityGroupCreateParams,
    type SensitivityGroupUpdateParams as SensitivityGroupUpdateParams,
    type SensitivityGroupListParams as SensitivityGroupListParams,
    type SensitivityGroupDeleteParams as SensitivityGroupDeleteParams,
    type SensitivityGroupGetParams as SensitivityGroupGetParams,
  };

  export {
    Levels as Levels,
    type LevelCreateResponse as LevelCreateResponse,
    type LevelUpdateResponse as LevelUpdateResponse,
    type LevelListResponse as LevelListResponse,
    type LevelDeleteResponse as LevelDeleteResponse,
    type LevelGetResponse as LevelGetResponse,
    LevelListResponsesSinglePage as LevelListResponsesSinglePage,
    type LevelCreateParams as LevelCreateParams,
    type LevelUpdateParams as LevelUpdateParams,
    type LevelListParams as LevelListParams,
    type LevelDeleteParams as LevelDeleteParams,
    type LevelGetParams as LevelGetParams,
  };
}
