// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ContentAPI from 'cloudflare/resources/workers/services/environments/content';
import * as SettingsAPI from 'cloudflare/resources/workers/services/environments/settings';

export class Environments extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

export namespace Environments {
  export import Content = ContentAPI.Content;
  export import ContentUpdateResponse = ContentAPI.ContentUpdateResponse;
  export import ContentUpdateParams = ContentAPI.ContentUpdateParams;
  export import Settings = SettingsAPI.Settings;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingModifyResponse = SettingsAPI.SettingModifyResponse;
  export import SettingModifyParams = SettingsAPI.SettingModifyParams;
}
