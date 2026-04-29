// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as LimitsAPI from './limits';
import { Limits } from './limits';
import * as PatternsAPI from './patterns';
import { Patterns } from './patterns';
import * as PayloadLogsAPI from './payload-logs';
import { PayloadLogs } from './payload-logs';
import * as SettingsAPI from './settings';
import { Settings } from './settings';
import * as DatasetsAPI from './datasets/datasets';
import { Datasets } from './datasets/datasets';
import * as EmailAPI from './email/email';
import { Email } from './email/email';
import * as EntriesAPI from './entries/entries';
import { Entries } from './entries/entries';
import * as ProfilesAPI from './profiles/profiles';
import { Profiles } from './profiles/profiles';

export class DLP extends APIResource {
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
DLP.Patterns = Patterns;
DLP.PayloadLogs = PayloadLogs;
DLP.Settings = Settings;
DLP.Email = Email;
DLP.Profiles = Profiles;
DLP.Limits = Limits;
DLP.Entries = Entries;

export declare namespace DLP {
  export { Datasets as Datasets };

  export { Patterns as Patterns };

  export { PayloadLogs as PayloadLogs };

  export { Settings as Settings };

  export { Email as Email };

  export { Profiles as Profiles };

  export { Limits as Limits };

  export { Entries as Entries };
}
