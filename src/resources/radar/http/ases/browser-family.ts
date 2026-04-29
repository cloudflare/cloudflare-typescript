// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseBrowserFamily extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'ases', 'browserFamily'] = Object.freeze([
    'radar',
    'http',
    'ases',
    'browserFamily',
  ] as const);
}
export class BrowserFamily extends BaseBrowserFamily {}
