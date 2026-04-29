// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as FieldsAPI from './fields';
import { BaseFields, Fields } from './fields';

export class BaseReceived extends APIResource {
  static override readonly _key: readonly ['logs', 'received'] = Object.freeze(['logs', 'received'] as const);
}
export class Received extends BaseReceived {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);
}

Received.Fields = Fields;
Received.BaseFields = BaseFields;

export declare namespace Received {
  export { Fields as Fields, BaseFields as BaseFields };
}
