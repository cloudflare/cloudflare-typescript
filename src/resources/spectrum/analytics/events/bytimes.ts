// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseBytimes extends APIResource {
  static override readonly _key: readonly ['spectrum', 'analytics', 'events', 'bytimes'] = Object.freeze([
    'spectrum',
    'analytics',
    'events',
    'bytimes',
  ] as const);
}
export class Bytimes extends BaseBytimes {}
