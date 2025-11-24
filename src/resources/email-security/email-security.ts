// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SubmissionsAPI from './submissions';
import { Submissions } from './submissions';
import * as InvestigateAPI from './investigate/investigate';
import { Investigate } from './investigate/investigate';
import * as SettingsAPI from './settings/settings';
import { Settings } from './settings/settings';

export class EmailSecurity extends APIResource {
  investigate: InvestigateAPI.Investigate = new InvestigateAPI.Investigate(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  submissions: SubmissionsAPI.Submissions = new SubmissionsAPI.Submissions(this._client);
}

EmailSecurity.Investigate = Investigate;
EmailSecurity.Settings = Settings;
EmailSecurity.Submissions = Submissions;

export declare namespace EmailSecurity {
  export { Investigate as Investigate };

  export { Settings as Settings };

  export { Submissions as Submissions };
}
