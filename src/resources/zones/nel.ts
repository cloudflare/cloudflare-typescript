// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseNEL extends APIResource {
  static override readonly _key: readonly ['zones', 'nel'] = Object.freeze(['zones', 'nel'] as const);

  /**
   * Updates the Network Error Logging (NEL) setting for a zone. Requires the NEL
   * product feature to be enabled for the zone. The setting controls whether
   * browsers report network errors to Cloudflare's NEL endpoint.
   *
   * @example
   * ```ts
   * const setting = await client.zones.nel.edit({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   value: { enabled: false },
   * });
   * ```
   */
  edit(params: NELEditParams, options?: RequestOptions): APIPromise<Setting> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/settings/nel`, { body, ...options }) as APIPromise<{
        result: Setting;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the Network Error Logging (NEL) setting for a zone. NEL allows browsers
   * to report network errors to a configured endpoint. The setting is enabled by
   * default for free and pro zones, and disabled by default for business and
   * enterprise zones unless the NEL product feature is enabled.
   *
   * @example
   * ```ts
   * const setting = await client.zones.nel.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: NELGetParams, options?: RequestOptions): APIPromise<Setting> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/settings/nel`, options) as APIPromise<{ result: Setting }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class NEL extends BaseNEL {}

/**
 * A zone-scoped NEL configuration setting.
 */
export interface Setting {
  /**
   * Zone setting identifier.
   */
  id: 'nel';

  /**
   * Whether the setting is editable. This is false when the zone's plan does not
   * include NEL or the NEL product feature is not enabled.
   */
  editable: boolean;

  /**
   * When the setting was last modified. A zero value (0001-01-01T00:00:00Z)
   * indicates the setting has never been explicitly set and is using the default
   * value.
   */
  modified_on: string;

  /**
   * The NEL configuration value.
   */
  value: Setting.Value;
}

export namespace Setting {
  /**
   * The NEL configuration value.
   */
  export interface Value {
    /**
     * Whether Network Error Logging is enabled for the zone. When enabled, browsers
     * report network errors to Cloudflare's NEL endpoint.
     */
    enabled: boolean;
  }
}

export interface NELEditParams {
  /**
   * Path param: Identifier of the zone.
   */
  zone_id: string;

  /**
   * Body param: The NEL configuration value.
   */
  value: NELEditParams.Value;
}

export namespace NELEditParams {
  /**
   * The NEL configuration value.
   */
  export interface Value {
    /**
     * Whether Network Error Logging is enabled for the zone. When enabled, browsers
     * report network errors to Cloudflare's NEL endpoint.
     */
    enabled: boolean;
  }
}

export interface NELGetParams {
  /**
   * Identifier of the zone.
   */
  zone_id: string;
}

export declare namespace NEL {
  export { type Setting as Setting, type NELEditParams as NELEditParams, type NELGetParams as NELGetParams };
}
