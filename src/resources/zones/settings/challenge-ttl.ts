// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ChallengeTTLAPI from './challenge-ttl';

export class ChallengeTTLResource extends APIResource {}

/**
 * Specify how long a visitor is allowed access to your site after successfully
 * completing a challenge (such as a CAPTCHA). After the TTL has expired the
 * visitor will have to complete a new challenge. We recommend a 15 - 45 minute
 * setting and will attempt to honor any setting above 45 minutes.
 * (https://support.cloudflare.com/hc/en-us/articles/200170136).
 */
export interface ChallengeTTL {
  /**
   * ID of the zone setting.
   */
  id: 'challenge_ttl';

  /**
   * Current value of the zone setting.
   */
  value:
    | 300
    | 900
    | 1800
    | 2700
    | 3600
    | 7200
    | 10800
    | 14400
    | 28800
    | 57600
    | 86400
    | 604800
    | 2592000
    | 31536000;

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

export namespace ChallengeTTLResource {
  export import ChallengeTTL = ChallengeTTLAPI.ChallengeTTL;
}
