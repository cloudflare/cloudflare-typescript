// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

/**
 * @deprecated Rate limiting API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#rate-limiting-api-previous-version for full details.
 */
export class BaseRateLimits extends APIResource {
  static override readonly _key: readonly ['rateLimits'] = Object.freeze(['rateLimits'] as const);
}
/**
 * @deprecated Rate limiting API is deprecated in favour of using the Ruleset Engine. See https://developers.cloudflare.com/fundamentals/api/reference/deprecations/#rate-limiting-api-previous-version for full details.
 */
export class RateLimits extends BaseRateLimits {}
