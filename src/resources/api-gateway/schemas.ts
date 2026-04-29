// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseSchemas extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'schemas'] = Object.freeze([
    'apiGateway',
    'schemas',
  ] as const);
}
export class Schemas extends BaseSchemas {}
