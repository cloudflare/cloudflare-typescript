// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseFraud extends APIResource {
  static override readonly _key: readonly ['fraud'] = Object.freeze(['fraud'] as const);
}
export class Fraud extends BaseFraud {}
