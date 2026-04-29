// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as IntegrationsAPI from './integrations';
import { BaseIntegrations, Integrations } from './integrations';

export class BasePosture extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'posture'] = Object.freeze([
    'zeroTrust',
    'devices',
    'posture',
  ] as const);
}
export class Posture extends BasePosture {
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
}

Posture.Integrations = Integrations;
Posture.BaseIntegrations = BaseIntegrations;

export declare namespace Posture {
  export { Integrations as Integrations, BaseIntegrations as BaseIntegrations };
}
