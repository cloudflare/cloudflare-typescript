// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as OrganizationProfileAPI from './organization-profile';
import { OrganizationProfile } from './organization-profile';
import * as LogsAPI from './logs/logs';
import { Logs } from './logs/logs';

export class Organizations extends APIResource {
  organizationProfile: OrganizationProfileAPI.OrganizationProfile =
    new OrganizationProfileAPI.OrganizationProfile(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
}

Organizations.OrganizationProfile = OrganizationProfile;
Organizations.Logs = Logs;

export declare namespace Organizations {
  export { OrganizationProfile as OrganizationProfile };

  export { Logs as Logs };
}
