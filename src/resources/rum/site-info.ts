// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSiteInfo extends APIResource {
  static override readonly _key: readonly ['rum', 'siteInfo'] = Object.freeze(['rum', 'siteInfo'] as const);
}
export class SiteInfo extends BaseSiteInfo {}
