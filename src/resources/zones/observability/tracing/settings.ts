// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['zones', 'observability', 'tracing', 'settings'] = Object.freeze([
    'zones',
    'observability',
    'tracing',
    'settings',
  ] as const);

  /**
   * Update the zone-level Cloudflare Traces settings.
   *
   * @example
   * ```ts
   * const setting =
   *   await client.zones.observability.tracing.settings.update({
   *     zone_id: 'zone_id',
   *   });
   * ```
   */
  update(params: SettingUpdateParams, options?: RequestOptions): APIPromise<SettingUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/observability/tracing/settings`, {
        body,
        ...options,
      }) as APIPromise<{ result: SettingUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Reset the zone-level Cloudflare Traces settings to their defaults while
   * preserving the sampling rules.
   *
   * @example
   * ```ts
   * const setting =
   *   await client.zones.observability.tracing.settings.delete({
   *     zone_id: 'zone_id',
   *   });
   * ```
   */
  delete(params: SettingDeleteParams, options?: RequestOptions): APIPromise<SettingDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/observability/tracing/settings`, options) as APIPromise<{
        result: SettingDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the zone-level Cloudflare Traces settings.
   *
   * @example
   * ```ts
   * const setting =
   *   await client.zones.observability.tracing.settings.get({
   *     zone_id: 'zone_id',
   *   });
   * ```
   */
  get(params: SettingGetParams, options?: RequestOptions): APIPromise<SettingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/observability/tracing/settings`, options) as APIPromise<{
        result: SettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Settings extends BaseSettings {}

export interface SettingUpdateResponse {
  /**
   * Up to 100 OpenTelemetry destination identifiers that receive traces.
   */
  destinations: Array<string>;

  /**
   * Whether Cloudflare Traces is enabled for the zone.
   */
  enabled: boolean;

  /**
   * Whether trace context is sent externally or across a zone boundary.
   */
  forward_context: boolean;

  /**
   * Whether traces are persisted in Cloudflare.
   */
  persist: boolean;

  /**
   * When inbound trace context may be continued. Authenticated propagation is not
   * supported yet.
   */
  propagation_policy: 'accept' | 'authenticated' | 'reject';

  /**
   * The ratio of requests sampled for tracing, from 0 to 1.
   */
  sampling_ratio: number;
}

export interface SettingDeleteResponse {
  /**
   * Up to 100 OpenTelemetry destination identifiers that receive traces.
   */
  destinations: Array<string>;

  /**
   * Whether Cloudflare Traces is enabled for the zone.
   */
  enabled: boolean;

  /**
   * Whether trace context is sent externally or across a zone boundary.
   */
  forward_context: boolean;

  /**
   * Whether traces are persisted in Cloudflare.
   */
  persist: boolean;

  /**
   * When inbound trace context may be continued. Authenticated propagation is not
   * supported yet.
   */
  propagation_policy: 'accept' | 'authenticated' | 'reject';

  /**
   * The ratio of requests sampled for tracing, from 0 to 1.
   */
  sampling_ratio: number;
}

export interface SettingGetResponse {
  /**
   * Up to 100 OpenTelemetry destination identifiers that receive traces.
   */
  destinations: Array<string>;

  /**
   * Whether Cloudflare Traces is enabled for the zone.
   */
  enabled: boolean;

  /**
   * Whether trace context is sent externally or across a zone boundary.
   */
  forward_context: boolean;

  /**
   * Whether traces are persisted in Cloudflare.
   */
  persist: boolean;

  /**
   * When inbound trace context may be continued. Authenticated propagation is not
   * supported yet.
   */
  propagation_policy: 'accept' | 'authenticated' | 'reject';

  /**
   * The ratio of requests sampled for tracing, from 0 to 1.
   */
  sampling_ratio: number;
}

export interface SettingUpdateParams {
  /**
   * Path param: Specify the zone ID.
   */
  zone_id: string;

  /**
   * Body param: Up to 100 OpenTelemetry destination identifiers that receive traces.
   */
  destinations?: Array<string>;

  /**
   * Body param: Whether Cloudflare Traces is enabled for the zone.
   */
  enabled?: boolean;

  /**
   * Body param: Whether trace context is sent externally or across a zone boundary.
   */
  forward_context?: boolean;

  /**
   * Body param: Whether traces are persisted in Cloudflare.
   */
  persist?: boolean;

  /**
   * Body param: When inbound trace context may be continued. Authenticated
   * propagation is not supported yet.
   */
  propagation_policy?: 'accept' | 'authenticated' | 'reject';

  /**
   * Body param: The ratio of requests sampled for tracing, from 0 to 1.
   */
  sampling_ratio?: number;
}

export interface SettingDeleteParams {
  /**
   * Specify the zone ID.
   */
  zone_id: string;
}

export interface SettingGetParams {
  /**
   * Specify the zone ID.
   */
  zone_id: string;
}

export declare namespace Settings {
  export {
    type SettingUpdateResponse as SettingUpdateResponse,
    type SettingDeleteResponse as SettingDeleteResponse,
    type SettingGetResponse as SettingGetResponse,
    type SettingUpdateParams as SettingUpdateParams,
    type SettingDeleteParams as SettingDeleteParams,
    type SettingGetParams as SettingGetParams,
  };
}
