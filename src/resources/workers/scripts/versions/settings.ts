// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/workers/scripts/versions/settings';
import * as WorkersAPI from 'cloudflare/resources/workers/workers';
import * as TailAPI from 'cloudflare/resources/workers/scripts/tail';
import { multipartFormRequestOptions } from 'cloudflare/core';

export class Settings extends APIResource {
  /**
   * Patch metadata or config, such as bindings or usage model
   */
  edit(
    scriptName: string,
    params: SettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingsItem> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/workers/scripts/${scriptName}/settings`,
        multipartFormRequestOptions({ body, ...options }),
      ) as Core.APIPromise<{ result: SettingsItem }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get metadata and config, such as bindings or usage model
   */
  get(
    scriptName: string,
    params: SettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingsItem> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/settings`,
        options,
      ) as Core.APIPromise<{ result: SettingsItem }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A binding to allow the Worker to communicate with resources
 */
export type BindingItem =
  | WorkersAPI.KVNamespaceBinding
  | WorkersAPI.ServiceBinding
  | WorkersAPI.DurableObjectBinding
  | WorkersAPI.R2Binding
  | BindingItem.WorkersQueueBinding
  | WorkersAPI.D1Binding
  | WorkersAPI.DispatchNamespaceBinding
  | WorkersAPI.MTLSCERTBinding;

export namespace BindingItem {
  export interface WorkersQueueBinding {
    /**
     * A JavaScript variable name for the binding.
     */
    name: string;

    /**
     * Name of the Queue to bind to
     */
    queue_name: string;

    /**
     * The class of resource that the binding provides.
     */
    type: 'queue';
  }
}

/**
 * A flag to opt into a specific change
 */
export type CompatibilityFlagsItem = string;

export interface SettingsItem {
  /**
   * List of bindings attached to this Worker
   */
  bindings?: Array<BindingItem>;

  /**
   * Opt your Worker into changes after this date
   */
  compatibility_date?: string;

  /**
   * Opt your Worker into specific changes
   */
  compatibility_flags?: Array<CompatibilityFlagsItem>;

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
  tags?: Array<TagsItem>;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<TailAPI.ConsumerScriptItem>;

  /**
   * Specifies the usage model for the Worker (e.g. 'bundled' or 'unbound').
   */
  usage_model?: string;
}

/**
 * Tag to help you manage your Worker
 */
export type TagsItem = string;

export interface SettingEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  settings?: SettingsItem;
}

export interface SettingGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Settings {
  export import BindingItem = SettingsAPI.BindingItem;
  export import CompatibilityFlagsItem = SettingsAPI.CompatibilityFlagsItem;
  export import SettingsItem = SettingsAPI.SettingsItem;
  export import TagsItem = SettingsAPI.TagsItem;
  export import SettingEditParams = SettingsAPI.SettingEditParams;
  export import SettingGetParams = SettingsAPI.SettingGetParams;
}
