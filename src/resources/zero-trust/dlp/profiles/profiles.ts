// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as CustomAPI from './custom';
import { Custom } from './custom';
import * as PredefinedAPI from './predefined';
import { Predefined } from './predefined';

export class Profiles extends APIResource {
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
  predefined: PredefinedAPI.Predefined = new PredefinedAPI.Predefined(this._client);
}

Profiles.Custom = Custom;
Profiles.Predefined = Predefined;

export declare namespace Profiles {
  export { Custom as Custom };

  export { Predefined as Predefined };
}
