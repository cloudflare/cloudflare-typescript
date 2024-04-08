// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/workers/services/environments/settings';
import * as Shared from 'cloudflare/resources/shared';
import * as ScriptsAPI from 'cloudflare/resources/workers/scripts/scripts';

export class Settings extends APIResource {
  /**
   * Patch script metadata, such as bindings
   */
  edit(
    serviceName: string,
    environmentName: string,
    params: SettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptsAPI.SettingsItem> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/workers/services/${serviceName}/environments/${environmentName}/settings`,
        { body, ...options },
      ) as Core.APIPromise<{ result: ScriptsAPI.SettingsItem }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get script settings from a worker with an environment
   */
  get(
    serviceName: string,
    environmentName: string,
    params: SettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScriptsAPI.SettingsItem> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/services/${serviceName}/environments/${environmentName}/settings`,
        options,
      ) as Core.APIPromise<{ result: ScriptsAPI.SettingsItem }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  errors: Array<Shared.UnnamedSchemaRef3248f24329456e19dfa042fff9986f72>;

  /**
   * Body param:
   */
  messages: Array<Shared.UnnamedSchemaRef3248f24329456e19dfa042fff9986f72>;

  /**
   * Body param:
   */
  result: ScriptsAPI.SettingsItem;

  /**
   * Body param: Whether the API call was successful
   */
  success: true;
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
