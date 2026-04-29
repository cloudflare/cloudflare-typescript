// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ContentAPI from './content';
import { BaseContent, Content } from './content';
import * as DeploymentsAPI from './deployments';
import { BaseDeployments, Deployments } from './deployments';
import * as SchedulesAPI from './schedules';
import { BaseSchedules, Schedules } from './schedules';
import * as ScriptAndVersionSettingsAPI from './script-and-version-settings';
import { BaseScriptAndVersionSettings, ScriptAndVersionSettings } from './script-and-version-settings';
import * as SecretsAPI from './secrets';
import { BaseSecrets, Secrets } from './secrets';
import * as SettingsAPI from './settings';
import { BaseSettings, Settings } from './settings';
import * as SubdomainAPI from './subdomain';
import { BaseSubdomain, Subdomain } from './subdomain';
import * as TailAPI from './tail';
import { BaseTail, Tail } from './tail';
import * as VersionsAPI from './versions';
import { BaseVersions, Versions } from './versions';
import * as AssetsAPI from './assets/assets';
import { Assets, BaseAssets } from './assets/assets';

export class BaseScripts extends APIResource {
  static override readonly _key: readonly ['workers', 'scripts'] = Object.freeze([
    'workers',
    'scripts',
  ] as const);
}
export class Scripts extends BaseScripts {
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);
  subdomain: SubdomainAPI.Subdomain = new SubdomainAPI.Subdomain(this._client);
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);
  tail: TailAPI.Tail = new TailAPI.Tail(this._client);
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
  scriptAndVersionSettings: ScriptAndVersionSettingsAPI.ScriptAndVersionSettings =
    new ScriptAndVersionSettingsAPI.ScriptAndVersionSettings(this._client);
}

Scripts.Assets = Assets;
Scripts.BaseAssets = BaseAssets;
Scripts.Subdomain = Subdomain;
Scripts.BaseSubdomain = BaseSubdomain;
Scripts.Schedules = Schedules;
Scripts.BaseSchedules = BaseSchedules;
Scripts.Tail = Tail;
Scripts.BaseTail = BaseTail;
Scripts.Content = Content;
Scripts.BaseContent = BaseContent;
Scripts.Settings = Settings;
Scripts.BaseSettings = BaseSettings;
Scripts.Deployments = Deployments;
Scripts.BaseDeployments = BaseDeployments;
Scripts.Versions = Versions;
Scripts.BaseVersions = BaseVersions;
Scripts.Secrets = Secrets;
Scripts.BaseSecrets = BaseSecrets;
Scripts.ScriptAndVersionSettings = ScriptAndVersionSettings;
Scripts.BaseScriptAndVersionSettings = BaseScriptAndVersionSettings;

export declare namespace Scripts {
  export { Assets as Assets, BaseAssets as BaseAssets };

  export { Subdomain as Subdomain, BaseSubdomain as BaseSubdomain };

  export { Schedules as Schedules, BaseSchedules as BaseSchedules };

  export { Tail as Tail, BaseTail as BaseTail };

  export { Content as Content, BaseContent as BaseContent };

  export { Settings as Settings, BaseSettings as BaseSettings };

  export { Deployments as Deployments, BaseDeployments as BaseDeployments };

  export { Versions as Versions, BaseVersions as BaseVersions };

  export { Secrets as Secrets, BaseSecrets as BaseSecrets };

  export {
    ScriptAndVersionSettings as ScriptAndVersionSettings,
    BaseScriptAndVersionSettings as BaseScriptAndVersionSettings,
  };
}
