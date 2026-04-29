// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as LimitsAPI from './limits';
import { BaseLimits, Limits } from './limits';
import * as PatternsAPI from './patterns';
import { BasePatterns, Patterns } from './patterns';
import * as PayloadLogsAPI from './payload-logs';
import { BasePayloadLogs, PayloadLogs } from './payload-logs';
import * as SettingsAPI from './settings';
import { BaseSettings, Settings } from './settings';
import * as DatasetsAPI from './datasets/datasets';
import { BaseDatasets, Datasets } from './datasets/datasets';
import * as EmailAPI from './email/email';
import { BaseEmail, Email } from './email/email';
import * as EntriesAPI from './entries/entries';
import { BaseEntries, Entries } from './entries/entries';
import * as ProfilesAPI from './profiles/profiles';
import { BaseProfiles, Profiles } from './profiles/profiles';

export class BaseDLP extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp'] = Object.freeze(['zeroTrust', 'dlp'] as const);
}
export class DLP extends BaseDLP {
  datasets: DatasetsAPI.Datasets = new DatasetsAPI.Datasets(this._client);
  patterns: PatternsAPI.Patterns = new PatternsAPI.Patterns(this._client);
  payloadLogs: PayloadLogsAPI.PayloadLogs = new PayloadLogsAPI.PayloadLogs(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  email: EmailAPI.Email = new EmailAPI.Email(this._client);
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
  limits: LimitsAPI.Limits = new LimitsAPI.Limits(this._client);
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);
}

DLP.Datasets = Datasets;
DLP.BaseDatasets = BaseDatasets;
DLP.Patterns = Patterns;
DLP.BasePatterns = BasePatterns;
DLP.PayloadLogs = PayloadLogs;
DLP.BasePayloadLogs = BasePayloadLogs;
DLP.Settings = Settings;
DLP.BaseSettings = BaseSettings;
DLP.Email = Email;
DLP.BaseEmail = BaseEmail;
DLP.Profiles = Profiles;
DLP.BaseProfiles = BaseProfiles;
DLP.Limits = Limits;
DLP.BaseLimits = BaseLimits;
DLP.Entries = Entries;
DLP.BaseEntries = BaseEntries;

export declare namespace DLP {
  export { Datasets as Datasets, BaseDatasets as BaseDatasets };

  export { Patterns as Patterns, BasePatterns as BasePatterns };

  export { PayloadLogs as PayloadLogs, BasePayloadLogs as BasePayloadLogs };

  export { Settings as Settings, BaseSettings as BaseSettings };

  export { Email as Email, BaseEmail as BaseEmail };

  export { Profiles as Profiles, BaseProfiles as BaseProfiles };

  export { Limits as Limits, BaseLimits as BaseLimits };

  export { Entries as Entries, BaseEntries as BaseEntries };
}
