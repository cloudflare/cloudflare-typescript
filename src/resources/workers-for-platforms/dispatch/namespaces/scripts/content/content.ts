// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BindingsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/content/bindings';
import * as ScriptsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/content/scripts';
import * as SettingsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/content/settings';

export class Content extends APIResource {
  scripts: ScriptsAPI.Scripts = new ScriptsAPI.Scripts(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  bindings: BindingsAPI.Bindings = new BindingsAPI.Bindings(this._client);
}

export namespace Content {
  export import Scripts = ScriptsAPI.Scripts;
  export import ScriptUpdateParams = ScriptsAPI.ScriptUpdateParams;
  export import ScriptGetParams = ScriptsAPI.ScriptGetParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
  export import Bindings = BindingsAPI.Bindings;
  export import BindingGetResponse = BindingsAPI.BindingGetResponse;
  export import BindingGetParams = BindingsAPI.BindingGetParams;
}
