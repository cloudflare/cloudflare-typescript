// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as H2PrioritizationAPI from 'cloudflare/resources/zones/settings/h2-prioritization';

export class H2Prioritization extends APIResource {
  /**
   * Gets HTTP/2 Edge Prioritization setting.
   */
  edit(
    params: H2PrioritizationEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingH2Prioritization> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/h2_prioritization`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZoneSettingH2Prioritization }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets HTTP/2 Edge Prioritization setting.
   */
  get(
    params: H2PrioritizationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZoneSettingH2Prioritization> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/h2_prioritization`, options) as Core.APIPromise<{
        result: ZoneSettingH2Prioritization;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * HTTP/2 Edge Prioritization optimises the delivery of resources served through
 * HTTP/2 to improve page load performance. It also supports fine control of
 * content delivery when used in conjunction with Workers.
 */
export interface ZoneSettingH2Prioritization {
  /**
   * ID of the zone setting.
   */
  id: 'h2_prioritization';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off' | 'custom';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface H2PrioritizationEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: HTTP/2 Edge Prioritization optimises the delivery of resources
   * served through HTTP/2 to improve page load performance. It also supports fine
   * control of content delivery when used in conjunction with Workers.
   */
  value: ZoneSettingH2Prioritization;
}

export interface H2PrioritizationGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace H2Prioritization {
  export import ZoneSettingH2Prioritization = H2PrioritizationAPI.ZoneSettingH2Prioritization;
  export import H2PrioritizationEditParams = H2PrioritizationAPI.H2PrioritizationEditParams;
  export import H2PrioritizationGetParams = H2PrioritizationAPI.H2PrioritizationGetParams;
}
