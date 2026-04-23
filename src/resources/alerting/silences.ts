// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

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
  create(params: SilenceCreateParams, options?: Core.RequestOptions): Core.APIPromise<SilenceCreateResponse> {
    const { account_id, body } = params;
    return this._client.post(`/accounts/${account_id}/alerting/v3/silences`, { body: body, ...options });
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<SilenceUpdateResponsesSinglePage, SilenceUpdateResponse> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/alerting/v3/silences`,
      SilenceUpdateResponsesSinglePage,
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<SilenceListResponsesSinglePage, SilenceListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/alerting/v3/silences`,
      SilenceListResponsesSinglePage,
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
    silenceId: string,
    params: SilenceDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SilenceDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(`/accounts/${account_id}/alerting/v3/silences/${silenceId}`, options);
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
  get(
    silenceId: string,
    params: SilenceGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SilenceGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/alerting/v3/silences/${silenceId}`,
        options,
      ) as Core.APIPromise<{ result: SilenceGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SilenceUpdateResponsesSinglePage extends SinglePage<SilenceUpdateResponse> {}

export class SilenceListResponsesSinglePage extends SinglePage<SilenceListResponse> {}

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

Silences.SilenceUpdateResponsesSinglePage = SilenceUpdateResponsesSinglePage;
Silences.SilenceListResponsesSinglePage = SilenceListResponsesSinglePage;

export declare namespace Silences {
  export {
    type SilenceCreateResponse as SilenceCreateResponse,
    type SilenceUpdateResponse as SilenceUpdateResponse,
    type SilenceListResponse as SilenceListResponse,
    type SilenceDeleteResponse as SilenceDeleteResponse,
    type SilenceGetResponse as SilenceGetResponse,
    SilenceUpdateResponsesSinglePage as SilenceUpdateResponsesSinglePage,
    SilenceListResponsesSinglePage as SilenceListResponsesSinglePage,
    type SilenceCreateParams as SilenceCreateParams,
    type SilenceUpdateParams as SilenceUpdateParams,
    type SilenceListParams as SilenceListParams,
    type SilenceDeleteParams as SilenceDeleteParams,
    type SilenceGetParams as SilenceGetParams,
  };
}
