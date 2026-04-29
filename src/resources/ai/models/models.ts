// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SchemaAPI from './schema';
import { BaseSchema, Schema } from './schema';

export class BaseModels extends APIResource {
  static override readonly _key: readonly ['ai', 'models'] = Object.freeze(['ai', 'models'] as const);
}
export class Models extends BaseModels {
  schema: SchemaAPI.Schema = new SchemaAPI.Schema(this._client);
}

Models.Schema = Schema;
Models.BaseSchema = BaseSchema;

export declare namespace Models {
  export { Schema as Schema, BaseSchema as BaseSchema };
}
