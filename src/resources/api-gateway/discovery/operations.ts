// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseOperations extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'discovery', 'operations'] = Object.freeze([
    'apiGateway',
    'discovery',
    'operations',
  ] as const);
}
export class Operations extends BaseOperations {}
