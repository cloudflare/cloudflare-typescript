// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/scripts/settings';
import * as Shared from 'cloudflare/resources/shared';

export class Settings extends APIResource {
  /**
   * Patch script metadata, such as bindings
   */
  edit(
    dispatchNamespace: string,
    scriptName: string,
    params: SettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/settings`,
        { body, ...options },
      ) as Core.APIPromise<{ result: SettingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get script settings from a script uploaded to a Workers for Platforms namespace.
   */
  get(
    dispatchNamespace: string,
    scriptName: string,
    params: SettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/dispatch/namespaces/${dispatchNamespace}/scripts/${scriptName}/settings`,
        options,
      ) as Core.APIPromise<{ result: SettingGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingEditResponse {
  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<SettingEditResponse.TailConsumer>;
}

export namespace SettingEditResponse {
  /**
   * A reference to a script that will consume logs from the attached Worker.
   */
  export interface TailConsumer {
    /**
     * Name of Worker that is to be the consumer.
     */
    service: string;

    /**
     * Optional environment if the Worker utilizes one.
     */
    environment?: string;

    /**
     * Optional dispatch namespace the script belongs to.
     */
    namespace?: string;
  }
}

export interface SettingGetResponse {
  /**
   * Whether Logpush is turned on for the Worker.
   */
  logpush?: boolean;

  /**
   * List of Workers that will consume logs from the attached Worker.
   */
  tail_consumers?: Array<SettingGetResponse.TailConsumer>;
}

export namespace SettingGetResponse {
  /**
   * A reference to a script that will consume logs from the attached Worker.
   */
  export interface TailConsumer {
    /**
     * Name of Worker that is to be the consumer.
     */
    service: string;

    /**
     * Optional environment if the Worker utilizes one.
     */
    environment?: string;

    /**
     * Optional dispatch namespace the script belongs to.
     */
    namespace?: string;
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
  result: SettingEditParams.Result;

  /**
   * Body param: Whether the API call was successful
   */
  success: true;
}

export namespace SettingEditParams {
  export interface Result {
    /**
     * Whether Logpush is turned on for the Worker.
     */
    logpush?: boolean;

    /**
     * List of Workers that will consume logs from the attached Worker.
     */
    tail_consumers?: Array<Result.TailConsumer>;
  }

  export namespace Result {
    /**
     * A reference to a script that will consume logs from the attached Worker.
     */
    export interface TailConsumer {
      /**
       * Name of Worker that is to be the consumer.
       */
      service: string;

      /**
       * Optional environment if the Worker utilizes one.
       */
      environment?: string;

      /**
       * Optional dispatch namespace the script belongs to.
       */
      namespace?: string;
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
