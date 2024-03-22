// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DNSSettingsAPI from 'cloudflare/resources/zones/dns-settings';

export class DNSSettings extends APIResource {
  /**
   * Update DNS settings for a zone
   */
  edit(params: DNSSettingEditParams, options?: Core.RequestOptions): Core.APIPromise<DNSSettingEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/dns_settings`, { body, ...options }) as Core.APIPromise<{
        result: DNSSettingEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show DNS settings for a zone
   */
  get(params: DNSSettingGetParams, options?: Core.RequestOptions): Core.APIPromise<DNSSettingGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/dns_settings`, options) as Core.APIPromise<{
        result: DNSSettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DNSSettingEditResponse {
  /**
   * Settings determining the nameservers through which the zone should be available.
   */
  nameservers?: DNSSettingEditResponse.Nameservers;
}

export namespace DNSSettingEditResponse {
  /**
   * Settings determining the nameservers through which the zone should be available.
   */
  export interface Nameservers {
    /**
     * Nameserver type
     */
    type: 'cloudflare.standard' | 'cloudflare.foundation_dns';
  }
}

export interface DNSSettingGetResponse {
  /**
   * Settings determining the nameservers through which the zone should be available.
   */
  nameservers?: DNSSettingGetResponse.Nameservers;
}

export namespace DNSSettingGetResponse {
  /**
   * Settings determining the nameservers through which the zone should be available.
   */
  export interface Nameservers {
    /**
     * Nameserver type
     */
    type: 'cloudflare.standard' | 'cloudflare.foundation_dns';
  }
}

export interface DNSSettingEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Settings determining the nameservers through which the zone should
   * be available.
   */
  nameservers?: DNSSettingEditParams.Nameservers;
}

export namespace DNSSettingEditParams {
  /**
   * Settings determining the nameservers through which the zone should be available.
   */
  export interface Nameservers {
    /**
     * Nameserver type
     */
    type: 'cloudflare.standard' | 'cloudflare.foundation_dns';
  }
}

export interface DNSSettingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace DNSSettings {
  export import DNSSettingEditResponse = DNSSettingsAPI.DNSSettingEditResponse;
  export import DNSSettingGetResponse = DNSSettingsAPI.DNSSettingGetResponse;
  export import DNSSettingEditParams = DNSSettingsAPI.DNSSettingEditParams;
  export import DNSSettingGetParams = DNSSettingsAPI.DNSSettingGetParams;
}
