// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AdvancedDDOSAPI from 'cloudflare/resources/settings/advanced-ddos';

export class AdvancedDDOS extends APIResource {
  /**
   * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
   * website. This is an uneditable value that is 'on' in the case of Business and
   * Enterprise zones.
   */
  get(
    params: AdvancedDDOSGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdvancedDDOSGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/advanced_ddos`, options) as Core.APIPromise<{
        result: AdvancedDDOSGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
 * website. This is an uneditable value that is 'on' in the case of Business and
 * Enterprise zones.
 */
export interface AdvancedDDOSGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'advanced_ddos';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

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

export interface AdvancedDDOSGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace AdvancedDDOS {
  export import AdvancedDDOSGetResponse = AdvancedDDOSAPI.AdvancedDDOSGetResponse;
  export import AdvancedDDOSGetParams = AdvancedDDOSAPI.AdvancedDDOSGetParams;
}
