// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from './operations';
import { BaseOperations, Operations } from './operations';

export class BaseSettings extends APIResource {
  static override readonly _key: readonly ['schemaValidation', 'settings'] = Object.freeze([
    'schemaValidation',
    'settings',
  ] as const);
}
export class Settings extends BaseSettings {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
}

Settings.Operations = Operations;
Settings.BaseOperations = BaseOperations;

export declare namespace Settings {
  export { Operations as Operations, BaseOperations as BaseOperations };
}
