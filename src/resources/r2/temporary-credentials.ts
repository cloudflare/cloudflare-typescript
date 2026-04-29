// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseTemporaryCredentials extends APIResource {
  static override readonly _key: readonly ['r2', 'temporaryCredentials'] = Object.freeze([
    'r2',
    'temporaryCredentials',
  ] as const);
}
export class TemporaryCredentials extends BaseTemporaryCredentials {}
