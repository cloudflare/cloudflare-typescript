// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AdvancedDDoSAPI from './advanced-ddos';

export class AdvancedDDoS extends APIResource {
  /**
   * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
   * website. This is an uneditable value that is 'on' in the case of Business and
   * Enterprise zones.
   */
  get(params: AdvancedDDoSGetParams, options?: Core.RequestOptions): Core.APIPromise<AdvancedDDoS> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/advanced_ddos`, options) as Core.APIPromise<{
        result: AdvancedDDoS;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Advanced protection from Distributed Denial of Service (DDoS) attacks on your
 * website. This is an uneditable value that is 'on' in the case of Business and
 * Enterprise zones.
 */
export interface AdvancedDDoS {
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

export interface AdvancedDDoSGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace AdvancedDDoS {
  export import AdvancedDDoS = AdvancedDDoSAPI.AdvancedDDoS;
  export import AdvancedDDoSGetParams = AdvancedDDoSAPI.AdvancedDDoSGetParams;
}
