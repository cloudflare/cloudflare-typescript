// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseOperations extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'userSchemas', 'operations'] = Object.freeze([
    'apiGateway',
    'userSchemas',
    'operations',
  ] as const);
}
export class Operations extends BaseOperations {}
