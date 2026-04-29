// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as CustomAPI from './custom/custom';
import { Custom } from './custom/custom';
import * as DefaultAPI from './default/default';
import { Default } from './default/default';

export class Policies extends APIResource {
  default: DefaultAPI.Default = new DefaultAPI.Default(this._client);
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
}

Policies.Default = Default;
Policies.Custom = Custom;

export declare namespace Policies {
  export { Default as Default };

  export { Custom as Custom };
}
