// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import { APIPromise } from '../../../../../core';
import * as Core from '../../../../../core';
import * as SettingsAPI from './settings';
import { multipartFormRequestOptions } from '../../../../../core';
import * as WorkersAPI from '../../../../workers/workers';
import * as TailAPI from '../../../../workers/scripts/tail';

export class Settings extends APIResource {
  /**
   * Patch script metadata, such as bindings
   */
  edit(dispatchNamespace: string, scriptName: string, params: SettingEditParams, options?: Core.RequestOptions): Core.APIPromise<SettingEditResponse> {
    const { account_id, ...body } = params;
    return (this._client.patch(`/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/settings`, Core.multipartFormRequestOptions({ body, ...options })) as Core.APIPromise<{ result: SettingEditResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get script settings from a script uploaded to a Workers for Platforms namespace.
   */
  get(dispatchNamespace: string, scriptName: string, params: SettingGetParams, options?: Core.RequestOptions): Core.APIPromise<SettingGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/settings`, options) as Core.APIPromise<{ result: SettingGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingEditResponse {
  /**
   * List of bindings attached to this Worker
   */
  bindings?: Array<WorkersAPI.Binding>;

  /**
   * Opt your Worker into changes after this date
   */
  compatibility_date?: string;

  /**
   * Opt your Worker into specific changes
   */
  compatibility_flags?: Array<string>;

  /**
   * Limits to apply for this Worker.
   */
  limits?: SettingEditResponse.Limits;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Migrations to apply for Durable Objects associated with this Worker.
   */
  migrations?: WorkersAPI.SingleStepMigration | WorkersAPI.SteppedMigration;

  placement?: WorkersAPI.PlacementConfiguration;

  /**
   * Tags to help you manage your Workers
   */
  tags?: Array<string>;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScript>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

export namespace SettingEditResponse {
  /**
   * Limits to apply for this Worker.
   */
  export interface Limits {
    /**
     * The amount of CPU time this Worker can use in milliseconds.
     */
    cpu_ms?: number;
  }
}

export interface SettingGetResponse {
  /**
   * List of bindings attached to this Worker
   */
  bindings?: Array<WorkersAPI.Binding>;

  /**
   * Opt your Worker into changes after this date
   */
  compatibility_date?: string;

  /**
   * Opt your Worker into specific changes
   */
  compatibility_flags?: Array<string>;

  /**
   * Limits to apply for this Worker.
   */
  limits?: SettingGetResponse.Limits;

  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * Migrations to apply for Durable Objects associated with this Worker.
   */
  migrations?: WorkersAPI.SingleStepMigration | WorkersAPI.SteppedMigration;

  placement?: WorkersAPI.PlacementConfiguration;

  /**
   * Tags to help you manage your Workers
   */
  tags?: Array<string>;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScript>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

export namespace SettingGetResponse {
  /**
   * Limits to apply for this Worker.
   */
  export interface Limits {
    /**
     * The amount of CPU time this Worker can use in milliseconds.
     */
    cpu_ms?: number;
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
  settings?: SettingEditParams.Settings;
}

export namespace SettingEditParams {
  export interface Settings {
    /**
     * List of bindings attached to this Worker
     */
    bindings?: Array<WorkersAPI.BindingParam>;

    /**
     * Opt your Worker into changes after this date
     */
    compatibility_date?: string;

    /**
     * Opt your Worker into specific changes
     */
    compatibility_flags?: Array<string>;

    /**
     * Limits to apply for this Worker.
     */
    limits?: Settings.Limits;

    /**
     * Whether Logpush is turned on for the Worker.
     */
    logpush?: boolean;

    /**
     * Migrations to apply for Durable Objects associated with this Worker.
     */
    migrations?: WorkersAPI.SingleStepMigrationParam | WorkersAPI.SteppedMigrationParam;

    placement?: WorkersAPI.PlacementConfigurationParam;

    /**
     * Tags to help you manage your Workers
     */
    tags?: Array<string>;

    /**
     * List of Workers that will consume logs from the attached Worker.
     */
    tail_consumers?: Array<TailAPI.ConsumerScriptParam>;

    /**
     * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
     */
    usage_model?: string;
  }

  export namespace Settings {
    /**
     * Limits to apply for this Worker.
     */
    export interface Limits {
      /**
       * The amount of CPU time this Worker can use in milliseconds.
       */
      cpu_ms?: number;
    }
  }
}

export interface SettingGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Settings {
  export import SettingEditResponse = SettingsAPI.SettingEditResponse;
  export import SettingGetResponse = SettingsAPI.SettingGetResponse;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
}
