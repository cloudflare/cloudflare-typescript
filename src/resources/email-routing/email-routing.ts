// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AddressesAPI from './addresses';
import * as DNSAPI from './dns';
import * as RulesAPI from './rules/rules';

export class EmailRouting extends APIResource {
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);

  /**
   * Disable your Email Routing zone. Also removes additional MX records previously
   * required for Email Routing to work.
   */
  disable(params: EmailRoutingDisableParams, options?: Core.RequestOptions): Core.APIPromise<Settings> {
    const { zone_id, body } = params;
    return (
      this._client.post(`/zones/${zone_id}/email/routing/disable`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Settings }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
   */
  enable(params: EmailRoutingEnableParams, options?: Core.RequestOptions): Core.APIPromise<Settings> {
    const { zone_id, body } = params;
    return (
      this._client.post(`/zones/${zone_id}/email/routing/enable`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Settings }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about the settings for your Email Routing zone.
   */
  get(params: EmailRoutingGetParams, options?: Core.RequestOptions): Core.APIPromise<Settings> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/email/routing`, options) as Core.APIPromise<{ result: Settings }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Settings {
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
   * @deprecated: Email Routing settings tag. (Deprecated, replaced by Email Routing
   * settings identifier)
   */
  tag?: string;
}

export interface EmailRoutingDisableParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface EmailRoutingEnableParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface EmailRoutingGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace EmailRouting {
  export import DNS = DNSAPI.DNS;
  export type DNSRecord = DNSAPI.DNSRecord;
  export type DNSGetResponse = DNSAPI.DNSGetResponse;
  export type DNSCreateParams = DNSAPI.DNSCreateParams;
  export type DNSDeleteParams = DNSAPI.DNSDeleteParams;
  export type DNSEditParams = DNSAPI.DNSEditParams;
  export type DNSGetParams = DNSAPI.DNSGetParams;
  export import Rules = RulesAPI.Rules;
  export type Action = RulesAPI.Action;
  export type EmailRoutingRule = RulesAPI.EmailRoutingRule;
  export type Matcher = RulesAPI.Matcher;
  export import EmailRoutingRulesV4PagePaginationArray = RulesAPI.EmailRoutingRulesV4PagePaginationArray;
  export type RuleCreateParams = RulesAPI.RuleCreateParams;
  export type RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export type RuleListParams = RulesAPI.RuleListParams;
  export type RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export type RuleGetParams = RulesAPI.RuleGetParams;
  export import Addresses = AddressesAPI.Addresses;
  export type Address = AddressesAPI.Address;
  export import AddressesV4PagePaginationArray = AddressesAPI.AddressesV4PagePaginationArray;
  export type AddressCreateParams = AddressesAPI.AddressCreateParams;
  export type AddressListParams = AddressesAPI.AddressListParams;
  export type AddressDeleteParams = AddressesAPI.AddressDeleteParams;
  export type AddressGetParams = AddressesAPI.AddressGetParams;
}
