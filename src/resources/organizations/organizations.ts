// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as OrganizationProfileAPI from './organization-profile';
import { BaseOrganizationProfile, OrganizationProfile } from './organization-profile';
import * as LogsAPI from './logs/logs';
import { BaseLogs, Logs } from './logs/logs';

export class BaseOrganizations extends APIResource {
  static override readonly _key: readonly ['organizations'] = Object.freeze(['organizations'] as const);
}
export class Organizations extends BaseOrganizations {
  organizationProfile: OrganizationProfileAPI.OrganizationProfile =
    new OrganizationProfileAPI.OrganizationProfile(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
}

Organizations.OrganizationProfile = OrganizationProfile;
Organizations.BaseOrganizationProfile = BaseOrganizationProfile;
Organizations.Logs = Logs;
Organizations.BaseLogs = BaseLogs;

export declare namespace Organizations {
  export { OrganizationProfile as OrganizationProfile, BaseOrganizationProfile as BaseOrganizationProfile };

  export { Logs as Logs, BaseLogs as BaseLogs };
}
