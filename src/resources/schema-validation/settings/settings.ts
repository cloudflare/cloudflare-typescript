// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as OperationsAPI from './operations';
import { Operations } from './operations';

export class Settings extends APIResource {
  operations: OperationsAPI.Operations = new OperationsAPI.Operations(this._client);
}

Settings.Operations = Operations;

export declare namespace Settings {
  export { Operations as Operations };
}
