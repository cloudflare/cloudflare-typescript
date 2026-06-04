// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class CsamScanner extends APIResource {
  /**
   * Update the CSAM Scanner configuration for a zone. Allows enabling or disabling
   * CSAM scanning, updating the notification email, and configuring scanning
   * sources.
   *
   * When a new email is provided, email verification is triggered automatically. The
   * `enabled` field is a toggle; the server may adjust it based on whether the
   * notification email is verified.
   *
   * Returns 403 if the zone or account is locked by Trust & Safety.
   *
   * @example
   * ```ts
   * const response = await client.csamScanner.edit({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  edit(
    params: CsamScannerEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CsamScannerEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/csam_scanner_third_party`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CsamScannerEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the current CSAM Scanner configuration for a zone.
   *
   * The notification email is masked by default in responses.
   *
   * @example
   * ```ts
   * const csamScanner = await client.csamScanner.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: CsamScannerGetParams, options?: Core.RequestOptions): Core.APIPromise<CsamScannerGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/csam_scanner_third_party`, options) as Core.APIPromise<{
        result: CsamScannerGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * CSAM Scanner configuration for a zone.
 */
export interface CsamScannerEditResponse {
  /**
   * The feature identifier.
   */
  id?: 'csam_scanner';

  /**
   * Whether the feature state can be changed. When false, the zone or account may be
   * locked by Trust & Safety.
   */
  editable?: boolean;

  /**
   * When the setting was last modified. Currently always null as the server does not
   * populate this field.
   */
  modified_on?: string | null;

  /**
   * The CSAM Scanner feature configuration values. Contains the notification email
   * and scanning enablement settings.
   */
  value?: CsamScannerEditResponse.Value;
}

export namespace CsamScannerEditResponse {
  /**
   * The CSAM Scanner feature configuration values. Contains the notification email
   * and scanning enablement settings.
   */
  export interface Value {
    /**
     * Notification email address for CSAM scan results. Masked in responses unless
     * explicitly unmasked via admin endpoint.
     */
    email?: string;

    /**
     * Current verification state of the notification email.
     */
    email_state?: 'valid' | 'pending' | 'unverified';

    /**
     * Whether CSAM scanning is enabled for this zone.
     */
    enabled?: boolean;

    /**
     * Map of scanning sources and their enabled state.
     */
    sources?: { [key: string]: boolean };

    /**
     * The zone's plan level.
     */
    zone_plan?: string;
  }
}

/**
 * CSAM Scanner configuration for a zone.
 */
export interface CsamScannerGetResponse {
  /**
   * The feature identifier.
   */
  id?: 'csam_scanner';

  /**
   * Whether the feature state can be changed. When false, the zone or account may be
   * locked by Trust & Safety.
   */
  editable?: boolean;

  /**
   * When the setting was last modified. Currently always null as the server does not
   * populate this field.
   */
  modified_on?: string | null;

  /**
   * The CSAM Scanner feature configuration values. Contains the notification email
   * and scanning enablement settings.
   */
  value?: CsamScannerGetResponse.Value;
}

export namespace CsamScannerGetResponse {
  /**
   * The CSAM Scanner feature configuration values. Contains the notification email
   * and scanning enablement settings.
   */
  export interface Value {
    /**
     * Notification email address for CSAM scan results. Masked in responses unless
     * explicitly unmasked via admin endpoint.
     */
    email?: string;

    /**
     * Current verification state of the notification email.
     */
    email_state?: 'valid' | 'pending' | 'unverified';

    /**
     * Whether CSAM scanning is enabled for this zone.
     */
    enabled?: boolean;

    /**
     * Map of scanning sources and their enabled state.
     */
    sources?: { [key: string]: boolean };

    /**
     * The zone's plan level.
     */
    zone_plan?: string;
  }
}

export interface CsamScannerEditParams {
  /**
   * Path param: Identifier for the zone.
   */
  zone_id: string;

  /**
   * Body param: The feature identifier.
   */
  id?: 'csam_scanner';

  /**
   * Body param: Writable CSAM Scanner feature configuration values.
   */
  value?: CsamScannerEditParams.Value;
}

export namespace CsamScannerEditParams {
  /**
   * Writable CSAM Scanner feature configuration values.
   */
  export interface Value {
    /**
     * Notification email address for CSAM scan results. When changed, email
     * verification is triggered automatically.
     */
    email?: string;

    /**
     * Whether CSAM scanning is enabled for this zone.
     */
    enabled?: boolean;

    /**
     * Set to true to trigger re-sending the email verification. Write-only; never
     * appears in responses (omitted when false).
     */
    resend_email?: boolean;

    /**
     * Map of scanning sources and their enabled state.
     */
    sources?: { [key: string]: boolean };
  }
}

export interface CsamScannerGetParams {
  /**
   * Identifier for the zone.
   */
  zone_id: string;
}

export declare namespace CsamScanner {
  export {
    type CsamScannerEditResponse as CsamScannerEditResponse,
    type CsamScannerGetResponse as CsamScannerGetResponse,
    type CsamScannerEditParams as CsamScannerEditParams,
    type CsamScannerGetParams as CsamScannerGetParams,
  };
}
