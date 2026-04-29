// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseOutages extends APIResource {
  static override readonly _key: readonly ['radar', 'annotations', 'outages'] = Object.freeze([
    'radar',
    'annotations',
    'outages',
  ] as const);
}
export class Outages extends BaseOutages {}
