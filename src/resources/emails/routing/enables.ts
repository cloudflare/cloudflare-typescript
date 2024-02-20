// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as EnablesAPI from 'cloudflare/resources/emails/routing/enables';

export class Enables extends APIResource {
  /**
   * Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
   */
  create(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<EnableCreateResponse> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/email/routing/enable`, options) as Core.APIPromise<{
        result: EnableCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EnableCreateResponse {
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

export namespace Enables {
  export import EnableCreateResponse = EnablesAPI.EnableCreateResponse;
}
