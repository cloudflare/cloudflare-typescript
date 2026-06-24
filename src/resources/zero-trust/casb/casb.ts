// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as IntegrationsAPI from './integrations';
import { Integrations } from './integrations';
import * as ApplicationsAPI from './applications/applications';
import { Applications } from './applications/applications';

export class Casb extends APIResource {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
}

Casb.Applications = Applications;
Casb.Integrations = Integrations;

export declare namespace Casb {
  export { Applications as Applications };

  export { Integrations as Integrations };
}
