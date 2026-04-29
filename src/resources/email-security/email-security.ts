// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubmissionsAPI from './submissions';
import { BaseSubmissions, Submissions } from './submissions';
import * as InvestigateAPI from './investigate/investigate';
import { BaseInvestigate, Investigate } from './investigate/investigate';
import * as PhishguardAPI from './phishguard/phishguard';
import { BasePhishguard, Phishguard } from './phishguard/phishguard';
import * as SettingsAPI from './settings/settings';
import { BaseSettings, Settings } from './settings/settings';

export class BaseEmailSecurity extends APIResource {
  static override readonly _key: readonly ['emailSecurity'] = Object.freeze(['emailSecurity'] as const);
}
export class EmailSecurity extends BaseEmailSecurity {
  investigate: InvestigateAPI.Investigate = new InvestigateAPI.Investigate(this._client);
  phishguard: PhishguardAPI.Phishguard = new PhishguardAPI.Phishguard(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  submissions: SubmissionsAPI.Submissions = new SubmissionsAPI.Submissions(this._client);
}

EmailSecurity.Investigate = Investigate;
EmailSecurity.BaseInvestigate = BaseInvestigate;
EmailSecurity.Phishguard = Phishguard;
EmailSecurity.BasePhishguard = BasePhishguard;
EmailSecurity.Settings = Settings;
EmailSecurity.BaseSettings = BaseSettings;
EmailSecurity.Submissions = Submissions;
EmailSecurity.BaseSubmissions = BaseSubmissions;

export declare namespace EmailSecurity {
  export { Investigate as Investigate, BaseInvestigate as BaseInvestigate };

  export { Phishguard as Phishguard, BasePhishguard as BasePhishguard };

  export { Settings as Settings, BaseSettings as BaseSettings };

  export { Submissions as Submissions, BaseSubmissions as BaseSubmissions };
}
