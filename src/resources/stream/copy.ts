// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseCopy extends APIResource {
  static override readonly _key: readonly ['stream', 'copy'] = Object.freeze(['stream', 'copy'] as const);
}
export class Copy extends BaseCopy {}
