// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class ConfigResource extends APIResource {
  /**
   * Updates the Google Tag Gateway configuration for a zone.
   *
   * @example
   * ```ts
   * const config = await client.googleTagGateway.config.update({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   enabled: true,
   *   endpoint: '/metrics',
   *   hideOriginalIp: true,
   *   measurementId: 'GTM-P2F3N47Q',
   * });
   * ```
   */
  update(params: ConfigUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Config> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/settings/google-tag-gateway/config`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Config }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the Google Tag Gateway configuration for a zone.
   *
   * @example
   * ```ts
   * const config = await client.googleTagGateway.config.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: ConfigGetParams, options?: Core.RequestOptions): Core.APIPromise<Config> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/google-tag-gateway/config`, options) as Core.APIPromise<{
        result: Config;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Google Tag Gateway configuration for a zone.
 */
export interface Config {
  /**
   * Enables or disables Google Tag Gateway for this zone.
   */
  enabled: boolean;

  /**
   * Specifies the endpoint path for proxying Google Tag Manager requests. Use an
   * absolute path starting with '/', with no nested paths and alphanumeric
   * characters only (e.g. /metrics).
   */
  endpoint: string;

  /**
   * Hides the original client IP address from Google when enabled.
   */
  hideOriginalIp: boolean;

  /**
   * Specify the Google Tag Manager container or measurement ID (e.g. GTM-XXXXXXX or
   * G-XXXXXXXXXX).
   */
  measurementId: string;

  /**
   * Set up the associated Google Tag on the zone automatically when enabled.
   */
  setUpTag?: boolean | null;
}

export interface ConfigUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param: Enables or disables Google Tag Gateway for this zone.
   */
  enabled: boolean;

  /**
   * Body param: Specifies the endpoint path for proxying Google Tag Manager
   * requests. Use an absolute path starting with '/', with no nested paths and
   * alphanumeric characters only (e.g. /metrics).
   */
  endpoint: string;

  /**
   * Body param: Hides the original client IP address from Google when enabled.
   */
  hideOriginalIp: boolean;

  /**
   * Body param: Specify the Google Tag Manager container or measurement ID (e.g.
   * GTM-XXXXXXX or G-XXXXXXXXXX).
   */
  measurementId: string;

  /**
   * Body param: Set up the associated Google Tag on the zone automatically when
   * enabled.
   */
  setUpTag?: boolean | null;
}

export interface ConfigGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export declare namespace ConfigResource {
  export {
    type Config as Config,
    type ConfigUpdateParams as ConfigUpdateParams,
    type ConfigGetParams as ConfigGetParams,
  };
}
