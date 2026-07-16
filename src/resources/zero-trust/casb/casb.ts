// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as IntegrationsAPI from './integrations';
import {
  BaseIntegrations,
  IntegrationCreateParams,
  IntegrationCreateResponse,
  IntegrationDeleteParams,
  IntegrationGetParams,
  IntegrationGetResponse,
  IntegrationListParams,
  IntegrationListResponse,
  IntegrationPauseParams,
  IntegrationPauseResponse,
  IntegrationResumeParams,
  IntegrationResumeResponse,
  IntegrationUpdateParams,
  IntegrationUpdateResponse,
  Integrations,
} from './integrations';
import * as ApplicationsAPI from './applications/applications';
import {
  ApplicationGetParams,
  ApplicationGetResponse,
  ApplicationListParams,
  ApplicationListResponse,
  Applications,
  BaseApplications,
} from './applications/applications';
import * as PostureAPI from './posture/posture';
import { BasePosture, Posture } from './posture/posture';

export class BaseCasb extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb'] = Object.freeze([
    'zeroTrust',
    'casb',
  ] as const);
}
export class Casb extends BaseCasb {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
  posture: PostureAPI.Posture = new PostureAPI.Posture(this._client);
}

Casb.Applications = Applications;
Casb.BaseApplications = BaseApplications;
Casb.Integrations = Integrations;
Casb.BaseIntegrations = BaseIntegrations;
Casb.Posture = Posture;
Casb.BasePosture = BasePosture;

export declare namespace Casb {
  export {
    Applications as Applications,
    BaseApplications as BaseApplications,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationGetResponse as ApplicationGetResponse,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationGetParams as ApplicationGetParams,
  };

  export {
    Integrations as Integrations,
    BaseIntegrations as BaseIntegrations,
    type IntegrationCreateResponse as IntegrationCreateResponse,
    type IntegrationUpdateResponse as IntegrationUpdateResponse,
    type IntegrationListResponse as IntegrationListResponse,
    type IntegrationGetResponse as IntegrationGetResponse,
    type IntegrationPauseResponse as IntegrationPauseResponse,
    type IntegrationResumeResponse as IntegrationResumeResponse,
    type IntegrationCreateParams as IntegrationCreateParams,
    type IntegrationUpdateParams as IntegrationUpdateParams,
    type IntegrationListParams as IntegrationListParams,
    type IntegrationDeleteParams as IntegrationDeleteParams,
    type IntegrationGetParams as IntegrationGetParams,
    type IntegrationPauseParams as IntegrationPauseParams,
    type IntegrationResumeParams as IntegrationResumeParams,
  };

  export { Posture as Posture, BasePosture as BasePosture };
}
