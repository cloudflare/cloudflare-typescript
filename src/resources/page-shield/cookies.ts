// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseCookies extends APIResource {
  static override readonly _key: readonly ['pageShield', 'cookies'] = Object.freeze([
    'pageShield',
    'cookies',
  ] as const);
}
export class Cookies extends BaseCookies {}
