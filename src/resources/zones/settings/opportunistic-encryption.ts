// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OpportunisticEncryptionAPI from 'cloudflare/resources/zones/settings/opportunistic-encryption';

export class OpportunisticEncryptionResource extends APIResource {
  /**
   * Changes Opportunistic Encryption setting.
   */
  edit(
    params: OpportunisticEncryptionEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpportunisticEncryption> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/opportunistic_encryption`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OpportunisticEncryption }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets Opportunistic Encryption setting.
   */
  get(
    params: OpportunisticEncryptionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OpportunisticEncryption> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/opportunistic_encryption`, options) as Core.APIPromise<{
        result: OpportunisticEncryption;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Enables the Opportunistic Encryption feature for a zone.
 */
export interface OpportunisticEncryption {
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
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting. Notes: Default value depends on the
   * zone's plan level.
   */
  value: 'on' | 'off';
}

export interface OpportunisticEncryptionGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace OpportunisticEncryptionResource {
  export import OpportunisticEncryption = OpportunisticEncryptionAPI.OpportunisticEncryption;
  export import OpportunisticEncryptionEditParams = OpportunisticEncryptionAPI.OpportunisticEncryptionEditParams;
  export import OpportunisticEncryptionGetParams = OpportunisticEncryptionAPI.OpportunisticEncryptionGetParams;
}
