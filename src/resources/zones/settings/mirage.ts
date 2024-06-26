// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as MirageAPI from './mirage';

export class MirageResource extends APIResource {}

/**
 * Automatically optimize image loading for website visitors on mobile devices.
 * Refer to
 * [our blog post](http://blog.cloudflare.com/mirage2-solving-mobile-speed) for
 * more information.
 */
export interface Mirage {
  /**
   * ID of the zone setting.
   */
  id: 'mirage';

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

export namespace MirageResource {
  export import Mirage = MirageAPI.Mirage;
}
