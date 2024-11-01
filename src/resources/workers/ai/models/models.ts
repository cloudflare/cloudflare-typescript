// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as SchemaAPI from './schema';
import { Schema, SchemaGetParams, SchemaGetResponse } from './schema';

export class Models extends APIResource {
  schema: SchemaAPI.Schema = new SchemaAPI.Schema(this._client);
}

Models.Schema = Schema;

export declare namespace Models {
  export {
    Schema as Schema,
    type SchemaGetResponse as SchemaGetResponse,
    type SchemaGetParams as SchemaGetParams,
  };
}
