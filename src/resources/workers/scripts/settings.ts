// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as SettingsAPI from './settings';
import * as ScriptsAPI from './scripts';
import * as TailAPI from './tail';

export class Settings extends APIResource {
  /**
   * Patch script-level settings when using
   * [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions).
   * Includes Logpush and Tail Consumers.
   */
  edit(
    scriptName: string,
    params: SettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptsAPI.ScriptSetting> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/workers/scripts/${scriptName}/script-settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ScriptsAPI.ScriptSetting }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get script-level settings when using
   * [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions).
   * Includes Logpush and Tail Consumers.
   */
  get(
    scriptName: string,
    params: SettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptsAPI.ScriptSetting> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/script-settings`,
        options,
      ) as Core.APIPromise<{ result: ScriptsAPI.ScriptSetting }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Body param: List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScriptParam>;
}

export interface SettingGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Settings {
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
}
