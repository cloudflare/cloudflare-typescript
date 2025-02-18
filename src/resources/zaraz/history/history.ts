// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ConfigAPI from '../config';
import * as ConfigsAPI from './configs';
import { ConfigGetParams, ConfigGetResponse, Configs } from './configs';
import { SinglePage } from '../../../pagination';

export class History extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);

  /**
   * Restores a historical published Zaraz configuration by ID for a zone.
   */
  update(
    params: HistoryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigAPI.Configuration> {
    const { zone_id, body } = params;
    return (
      this._client.put(`/zones/${zone_id}/settings/zaraz/history`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigAPI.Configuration }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists a history of published Zaraz configuration records for a zone.
   */
  list(
    params: HistoryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<HistoryListResponsesSinglePage, HistoryListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/settings/zaraz/history`,
      HistoryListResponsesSinglePage,
      { query, ...options },
    );
  }
}

export class HistoryListResponsesSinglePage extends SinglePage<HistoryListResponse> {}

export interface HistoryListResponse {
  /**
   * ID of the configuration
   */
  id: number;

  /**
   * Date and time the configuration was created
   */
  createdAt: string;

  /**
   * Configuration description provided by the user who published this configuration
   */
  description: string;

  /**
   * Date and time the configuration was last updated
   */
  updatedAt: string;

  /**
   * Alpha-numeric ID of the account user who published the configuration
   */
  userId: string;
}

export interface HistoryUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: ID of the Zaraz configuration to restore.
   */
  body: number;
}

export interface HistoryListParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: Maximum amount of results to list. Default value is 10.
   */
  limit?: number;

  /**
   * Query param: Ordinal number to start listing the results with. Default value
   * is 0.
   */
  offset?: number;

  /**
   * Query param: The field to sort by. Default is updated_at.
   */
  sortField?: 'id' | 'user_id' | 'description' | 'created_at' | 'updated_at';

  /**
   * Query param: Sorting order. Default is DESC.
   */
  sortOrder?: 'DESC' | 'ASC';
}

History.HistoryListResponsesSinglePage = HistoryListResponsesSinglePage;
History.Configs = Configs;

export declare namespace History {
  export {
    type HistoryListResponse as HistoryListResponse,
    HistoryListResponsesSinglePage as HistoryListResponsesSinglePage,
    type HistoryUpdateParams as HistoryUpdateParams,
    type HistoryListParams as HistoryListParams,
  };

  export {
    Configs as Configs,
    type ConfigGetResponse as ConfigGetResponse,
    type ConfigGetParams as ConfigGetParams,
  };
}
