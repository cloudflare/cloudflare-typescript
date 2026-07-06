// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IntegrationsAPI from './integrations';
import { BaseIntegrations, Integrations } from './integrations';
import * as ApplicationsAPI from './applications/applications';
import { Applications, BaseApplications } from './applications/applications';

export class BaseCasb extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb'] = Object.freeze([
    'zeroTrust',
    'casb',
  ] as const);
}
export class Casb extends BaseCasb {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
}

Casb.Applications = Applications;
Casb.BaseApplications = BaseApplications;
Casb.Integrations = Integrations;
Casb.BaseIntegrations = BaseIntegrations;

export declare namespace Casb {
  export { Applications as Applications, BaseApplications as BaseApplications };

  export { Integrations as Integrations, BaseIntegrations as BaseIntegrations };
}
