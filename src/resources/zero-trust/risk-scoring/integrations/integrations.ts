// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ReferencesAPI from './references';
import { References } from './references';

export class Integrations extends APIResource {
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);
}

Integrations.References = References;

export declare namespace Integrations {
  export { References as References };
}
