// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSchemaValidation extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'settings', 'schemaValidation'] = Object.freeze([
    'apiGateway',
    'settings',
    'schemaValidation',
  ] as const);
}
export class SchemaValidation extends BaseSchemaValidation {}
