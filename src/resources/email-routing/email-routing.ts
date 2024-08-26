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
  disable(
    zoneIdentifier: string,
    body: EmailRoutingDisableParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Settings> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/email/routing/disable`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Settings }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
   */
  enable(
    zoneIdentifier: string,
    body: EmailRoutingEnableParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Settings> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/email/routing/enable`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Settings }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about the settings for your Email Routing zone.
   */
  get(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<Settings> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/email/routing`, options) as Core.APIPromise<{
        result: Settings;
      }>
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

export type EmailRoutingDisableParams = unknown;

export type EmailRoutingEnableParams = unknown;

export namespace EmailRouting {
  export import DNS = DNSAPI.DNS;
  export import DNSRecord = DNSAPI.DNSRecord;
  export import DNSGetResponse = DNSAPI.DNSGetResponse;
  export import Rules = RulesAPI.Rules;
  export import Action = RulesAPI.Action;
  export import EmailRoutingRule = RulesAPI.EmailRoutingRule;
  export import Matcher = RulesAPI.Matcher;
  export import EmailRoutingRulesV4PagePaginationArray = RulesAPI.EmailRoutingRulesV4PagePaginationArray;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import Addresses = AddressesAPI.Addresses;
  export import Address = AddressesAPI.Address;
  export import AddressesV4PagePaginationArray = AddressesAPI.AddressesV4PagePaginationArray;
  export import AddressCreateParams = AddressesAPI.AddressCreateParams;
  export import AddressListParams = AddressesAPI.AddressListParams;
}
