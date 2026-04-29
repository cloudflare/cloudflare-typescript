// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseActivationCheck extends APIResource {
  static override readonly _key: readonly ['zones', 'activationCheck'] = Object.freeze([
    'zones',
    'activationCheck',
  ] as const);
}
export class ActivationCheck extends BaseActivationCheck {}
