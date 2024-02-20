// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ContentAPI from 'cloudflare/resources/worker-scripts/content';
import * as ContentV2API from 'cloudflare/resources/worker-scripts/content-v2';
import * as SettingsAPI from 'cloudflare/resources/worker-scripts/settings';

export class WorkerScripts extends APIResource {
  content: ContentAPI.Content = new ContentAPI.Content(this._client);
  contentV2: ContentV2API.ContentV2 = new ContentV2API.ContentV2(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
}

export namespace WorkerScripts {
  export import Content = ContentAPI.Content;
  export import ContentUpdateResponse = ContentAPI.ContentUpdateResponse;
  export import ContentUpdateParams = ContentAPI.ContentUpdateParams;
  export import ContentV2 = ContentV2API.ContentV2;
  export import Settings = SettingsAPI.Settings;
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
}
