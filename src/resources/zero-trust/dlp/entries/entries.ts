// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as CustomAPI from './custom';
import { Custom } from './custom';
import * as IntegrationAPI from './integration';
import { Integration } from './integration';
import * as PredefinedAPI from './predefined';
import { Predefined } from './predefined';

export class Entries extends APIResource {
  custom: CustomAPI.Custom = new CustomAPI.Custom(this._client);
  predefined: PredefinedAPI.Predefined = new PredefinedAPI.Predefined(this._client);
  integration: IntegrationAPI.Integration = new IntegrationAPI.Integration(this._client);
}

Entries.Custom = Custom;
Entries.Predefined = Predefined;
Entries.Integration = Integration;

export declare namespace Entries {
  export { Custom as Custom };

  export { Predefined as Predefined };

  export { Integration as Integration };
}
