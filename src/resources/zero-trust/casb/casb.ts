// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as IntegrationsAPI from './integrations';
import {
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
} from './applications/applications';

export class Casb extends APIResource {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
}

Casb.Applications = Applications;
Casb.Integrations = Integrations;

export declare namespace Casb {
  export {
    Applications as Applications,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationGetResponse as ApplicationGetResponse,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationGetParams as ApplicationGetParams,
  };

  export {
    Integrations as Integrations,
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
}
