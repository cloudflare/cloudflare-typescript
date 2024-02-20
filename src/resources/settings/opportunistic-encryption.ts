// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OpportunisticEncryptionAPI from 'cloudflare/resources/settings/opportunistic-encryption';

export class OpportunisticEncryption extends APIResource {
  /**
   * Changes Opportunistic Encryption setting.
   */
  edit(
    zoneId: string,
    body: OpportunisticEncryptionEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpportunisticEncryptionEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/opportunistic_encryption`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OpportunisticEncryptionEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets Opportunistic Encryption setting.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<OpportunisticEncryptionGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/opportunistic_encryption`, options) as Core.APIPromise<{
        result: OpportunisticEncryptionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enables the Opportunistic Encryption feature for a zone.
 */
export interface OpportunisticEncryptionEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'opportunistic_encryption';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

/**
 * Enables the Opportunistic Encryption feature for a zone.
 */
export interface OpportunisticEncryptionGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'opportunistic_encryption';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface OpportunisticEncryptionEditParams {
  /**
   * Value of the zone setting. Notes: Default value depends on the zone's plan
   * level.
   */
  value: 'on' | 'off';
}

export namespace OpportunisticEncryption {
  export import OpportunisticEncryptionEditResponse = OpportunisticEncryptionAPI.OpportunisticEncryptionEditResponse;
  export import OpportunisticEncryptionGetResponse = OpportunisticEncryptionAPI.OpportunisticEncryptionGetResponse;
  export import OpportunisticEncryptionEditParams = OpportunisticEncryptionAPI.OpportunisticEncryptionEditParams;
}
