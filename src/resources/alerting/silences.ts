// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Silences extends APIResource {
  /**
   * Creates a new silence for an account.
   *
   * @example
   * ```ts
   * const silence = await client.alerting.silences.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   body: [{}],
   * });
   * ```
   */
  create(params: SilenceCreateParams, options?: RequestOptions): APIPromise<SilenceCreateResponse> {
    const { account_id, body } = params;
    return this._client.post(path`/accounts/${account_id}/alerting/v3/silences`, { body: body, ...options });
  }

  /**
   * Updates existing silences for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const silenceUpdateResponse of client.alerting.silences.update(
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [{}],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  update(
    params: SilenceUpdateParams,
    options?: RequestOptions,
  ): PagePromise<SilenceUpdateResponsesSinglePage, SilenceUpdateResponse> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/alerting/v3/silences`,
      SinglePage<SilenceUpdateResponse>,
      { body: body, method: 'put', ...options },
    );
  }

  /**
   * Gets a list of silences for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const silenceListResponse of client.alerting.silences.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: SilenceListParams,
    options?: RequestOptions,
  ): PagePromise<SilenceListResponsesSinglePage, SilenceListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/alerting/v3/silences`,
      SinglePage<SilenceListResponse>,
      options,
    );
  }

  /**
   * Deletes an existing silence for an account.
   *
   * @example
   * ```ts
   * const silence = await client.alerting.silences.delete(
   *   'f878e90c23f44126ae3cfc399f646977',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    silenceID: string,
    params: SilenceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SilenceDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(path`/accounts/${account_id}/alerting/v3/silences/${silenceID}`, options);
  }

  /**
   * Gets a specific silence for an account.
   *
   * @example
   * ```ts
   * const silence = await client.alerting.silences.get(
   *   'f878e90c23f44126ae3cfc399f646977',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(silenceID: string, params: SilenceGetParams, options?: RequestOptions): APIPromise<SilenceGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/alerting/v3/silences/${silenceID}`,
        options,
      ) as APIPromise<{ result: SilenceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SilenceUpdateResponsesSinglePage = SinglePage<SilenceUpdateResponse>;

export type SilenceListResponsesSinglePage = SinglePage<SilenceListResponse>;

export interface SilenceCreateResponse {
  errors: Array<SilenceCreateResponse.Error>;

  messages: Array<SilenceCreateResponse.Message>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export namespace SilenceCreateResponse {
  export interface Error {
    message: string;

    code?: number;
  }

  export interface Message {
    message: string;

    code?: number;
  }
}

export interface SilenceUpdateResponse {
  /**
   * Silence ID
   */
  id?: string;

  /**
   * When the silence was created.
   */
  created_at?: string;

  /**
   * When the silence ends.
   */
  end_time?: string;

  /**
   * The unique identifier of a notification policy
   */
  policy_id?: string;

  /**
   * When the silence starts.
   */
  start_time?: string;

  /**
   * When the silence was modified.
   */
  updated_at?: string;
}

export interface SilenceListResponse {
  /**
   * Silence ID
   */
  id?: string;

  /**
   * When the silence was created.
   */
  created_at?: string;

  /**
   * When the silence ends.
   */
  end_time?: string;

  /**
   * The unique identifier of a notification policy
   */
  policy_id?: string;

  /**
   * When the silence starts.
   */
  start_time?: string;

  /**
   * When the silence was modified.
   */
  updated_at?: string;
}

export interface SilenceDeleteResponse {
  errors: Array<SilenceDeleteResponse.Error>;

  messages: Array<SilenceDeleteResponse.Message>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export namespace SilenceDeleteResponse {
  export interface Error {
    message: string;

    code?: number;
  }

  export interface Message {
    message: string;

    code?: number;
  }
}

export interface SilenceGetResponse {
  /**
   * Silence ID
   */
  id?: string;

  /**
   * When the silence was created.
   */
  created_at?: string;

  /**
   * When the silence ends.
   */
  end_time?: string;

  /**
   * The unique identifier of a notification policy
   */
  policy_id?: string;

  /**
   * When the silence starts.
   */
  start_time?: string;

  /**
   * When the silence was modified.
   */
  updated_at?: string;
}

export interface SilenceCreateParams {
  /**
   * Path param: The account id
   */
  account_id: string;

  /**
   * Body param
   */
  body: Array<SilenceCreateParams.Body>;
}

export namespace SilenceCreateParams {
  export interface Body {
    /**
     * When the silence ends.
     */
    end_time?: string;

    /**
     * The unique identifier of a notification policy
     */
    policy_id?: string;

    /**
     * When the silence starts.
     */
    start_time?: string;
  }
}

export interface SilenceUpdateParams {
  /**
   * Path param: The account id
   */
  account_id: string;

  /**
   * Body param
   */
  body: Array<SilenceUpdateParams.Body>;
}

export namespace SilenceUpdateParams {
  export interface Body {
    /**
     * Silence ID
     */
    id?: string;

    /**
     * When the silence ends.
     */
    end_time?: string;

    /**
     * When the silence starts.
     */
    start_time?: string;
  }
}

export interface SilenceListParams {
  /**
   * The account id
   */
  account_id: string;
}

export interface SilenceDeleteParams {
  /**
   * The account id
   */
  account_id: string;
}

export interface SilenceGetParams {
  /**
   * The account id
   */
  account_id: string;
}

export declare namespace Silences {
  export {
    type SilenceCreateResponse as SilenceCreateResponse,
    type SilenceUpdateResponse as SilenceUpdateResponse,
    type SilenceListResponse as SilenceListResponse,
    type SilenceDeleteResponse as SilenceDeleteResponse,
    type SilenceGetResponse as SilenceGetResponse,
    type SilenceUpdateResponsesSinglePage as SilenceUpdateResponsesSinglePage,
    type SilenceListResponsesSinglePage as SilenceListResponsesSinglePage,
    type SilenceCreateParams as SilenceCreateParams,
    type SilenceUpdateParams as SilenceUpdateParams,
    type SilenceListParams as SilenceListParams,
    type SilenceDeleteParams as SilenceDeleteParams,
    type SilenceGetParams as SilenceGetParams,
  };
}
