// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as H2PrioritizationAPI from 'cloudflare/resources/settings/h2-prioritization';

export class H2Prioritization extends APIResource {
  /**
   * Gets HTTP/2 Edge Prioritization setting.
   */
  update(
    zoneId: string,
    body: H2PrioritizationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<H2PrioritizationUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/h2_prioritization`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: H2PrioritizationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets HTTP/2 Edge Prioritization setting.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<H2PrioritizationGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/h2_prioritization`, options) as Core.APIPromise<{
        result: H2PrioritizationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * HTTP/2 Edge Prioritization optimises the delivery of resources served through
 * HTTP/2 to improve page load performance. It also supports fine control of
 * content delivery when used in conjunction with Workers.
 */
export interface H2PrioritizationUpdateResponse {
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

/**
 * HTTP/2 Edge Prioritization optimises the delivery of resources served through
 * HTTP/2 to improve page load performance. It also supports fine control of
 * content delivery when used in conjunction with Workers.
 */
export interface H2PrioritizationGetResponse {
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

export interface H2PrioritizationUpdateParams {
  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  value: H2PrioritizationUpdateParams.Value;
}

export namespace H2PrioritizationUpdateParams {
  /**
   * HTTP/2 Edge Prioritization optimises the delivery of resources served through
   * HTTP/2 to improve page load performance. It also supports fine control of
   * content delivery when used in conjunction with Workers.
   */
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id: 'h2_prioritization';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off' | 'custom';
  }
}

export namespace H2Prioritization {
  export import H2PrioritizationUpdateResponse = H2PrioritizationAPI.H2PrioritizationUpdateResponse;
  export import H2PrioritizationGetResponse = H2PrioritizationAPI.H2PrioritizationGetResponse;
  export import H2PrioritizationUpdateParams = H2PrioritizationAPI.H2PrioritizationUpdateParams;
}
