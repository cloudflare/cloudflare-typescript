// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as FieldsAPI from './fields';

export class Received extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);
}

export namespace Received {
  export import Fields = FieldsAPI.Fields;
}
