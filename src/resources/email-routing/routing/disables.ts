// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DisablesAPI from 'cloudflare/resources/email-routing/routing/disables';

export class Disables extends APIResource {
  /**
   * Disable your Email Routing zone. Also removes additional MX records previously
   * required for Email Routing to work.
   */
  create(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<DisableCreateResponse> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/email/routing/disable`, options) as Core.APIPromise<{
        result: DisableCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DisableCreateResponse {
  /**
   * Email Routing settings identifier.
   */
  id?: string;

  /**
   * The date and time the settings have been created.
   */
  created?: string;

  /**
   * State of the zone settings for Email Routing.
   */
  enabled?: true | false;

  /**
   * The date and time the settings have been modified.
   */
  modified?: string;

  /**
   * Domain of your zone.
   */
  name?: string;

  /**
   * Flag to check if the user skipped the configuration wizard.
   */
  skip_wizard?: true | false;

  /**
   * Show the state of your account, and the type or configuration error.
   */
  status?: 'ready' | 'unconfigured' | 'misconfigured' | 'misconfigured/locked' | 'unlocked';

  /**
   * Email Routing settings tag. (Deprecated, replaced by Email Routing settings
   * identifier)
   */
  tag?: string;
}

export namespace Disables {
  export import DisableCreateResponse = DisablesAPI.DisableCreateResponse;
}
