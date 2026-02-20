// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Fraud extends APIResource {
  /**
   * Update Fraud Detection settings for a zone.
   *
   * Notes on `username_expressions` behavior:
   *
   * - If omitted or set to null, expressions are not modified.
   * - If provided as an empty array `[]`, all expressions will be cleared.
   *
   * @example
   * ```ts
   * const fraudSettings = await client.fraud.update({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   username_expressions: [],
   * });
   * ```
   */
  update(params: FraudUpdateParams, options?: Core.RequestOptions): Core.APIPromise<FraudSettings> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/fraud_detection/settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: FraudSettings }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve Fraud Detection settings for a zone.
   *
   * @example
   * ```ts
   * const fraudSettings = await client.fraud.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: FraudGetParams, options?: Core.RequestOptions): Core.APIPromise<FraudSettings> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/fraud_detection/settings`, options) as Core.APIPromise<{
        result: FraudSettings;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface FraudSettings {
  /**
   * Whether Fraud User Profiles is enabled for the zone.
   */
  user_profiles?: 'enabled' | 'disabled';

  /**
   * List of expressions to detect usernames in write HTTP requests.
   *
   * - Maximum of 10 expressions.
   * - Omit or set to null to leave unchanged on update.
   * - Provide an empty array `[]` to clear all expressions on update.
   * - Invalid expressions will result in a 10400 Bad Request with details in the
   *   `messages` array.
   */
  username_expressions?: Array<string>;
}

export interface FraudUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Whether Fraud User Profiles is enabled for the zone.
   */
  user_profiles?: 'enabled' | 'disabled';

  /**
   * Body param: List of expressions to detect usernames in write HTTP requests.
   *
   * - Maximum of 10 expressions.
   * - Omit or set to null to leave unchanged on update.
   * - Provide an empty array `[]` to clear all expressions on update.
   * - Invalid expressions will result in a 10400 Bad Request with details in the
   *   `messages` array.
   */
  username_expressions?: Array<string>;
}

export interface FraudGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace Fraud {
  export {
    type FraudSettings as FraudSettings,
    type FraudUpdateParams as FraudUpdateParams,
    type FraudGetParams as FraudGetParams,
  };
}
