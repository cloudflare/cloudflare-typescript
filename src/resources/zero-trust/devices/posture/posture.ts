// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as IntegrationsAPI from './integrations';
import { Integrations } from './integrations';

export class Posture extends APIResource {
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
}

Posture.Integrations = Integrations;

export declare namespace Posture {
  export { Integrations as Integrations };
}
