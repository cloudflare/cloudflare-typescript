// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

/**
 * @deprecated Please use the [Schema Validation Operations Settings](https://developers.cloudflare.com/api/resources/schema_validation/subresources/settings/subresources/operations/) APIs instead
 */
export class BaseSchemaValidation extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'operations', 'schemaValidation'] = Object.freeze([
    'apiGateway',
    'operations',
    'schemaValidation',
  ] as const);
}
/**
 * @deprecated Please use the [Schema Validation Operations Settings](https://developers.cloudflare.com/api/resources/schema_validation/subresources/settings/subresources/operations/) APIs instead
 */
export class SchemaValidation extends BaseSchemaValidation {}
