// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RoutingAPI from 'cloudflare/resources/email-routing/routing/routing';
import * as AddressesAPI from 'cloudflare/resources/email-routing/routing/addresses';
import * as DNSAPI from 'cloudflare/resources/email-routing/routing/dns';
import * as RulesAPI from 'cloudflare/resources/email-routing/routing/rules/rules';

export class Routing extends APIResource {
  dns: DNSAPI.DNS = new DNSAPI.DNS(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);

  /**
   * Disable your Email Routing zone. Also removes additional MX records previously
   * required for Email Routing to work.
   */
  disable(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<RoutingDisableResponse> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/email/routing/disable`, options) as Core.APIPromise<{
        result: RoutingDisableResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
   */
  enable(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<RoutingEnableResponse> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/email/routing/enable`, options) as Core.APIPromise<{
        result: RoutingEnableResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about the settings for your Email Routing zone.
   */
  get(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<RoutingGetResponse> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/email/routing`, options) as Core.APIPromise<{
        result: RoutingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EmailSettings {
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

export interface RoutingDisableResponse {
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

export interface RoutingEnableResponse {
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

export interface RoutingGetResponse {
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

export namespace Routing {
  export import EmailSettings = RoutingAPI.EmailSettings;
  export import RoutingDisableResponse = RoutingAPI.RoutingDisableResponse;
  export import RoutingEnableResponse = RoutingAPI.RoutingEnableResponse;
  export import RoutingGetResponse = RoutingAPI.RoutingGetResponse;
  export import DNS = DNSAPI.DNS;
  export import EmailDNSRecord = DNSAPI.EmailDNSRecord;
  export import DNSGetResponse = DNSAPI.DNSGetResponse;
  export import Rules = RulesAPI.Rules;
  export import EmailRules = RulesAPI.EmailRules;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleUpdateResponse = RulesAPI.RuleUpdateResponse;
  export import RuleListResponse = RulesAPI.RuleListResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleGetResponse = RulesAPI.RuleGetResponse;
  export import RuleListResponsesV4PagePaginationArray = RulesAPI.RuleListResponsesV4PagePaginationArray;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import Addresses = AddressesAPI.Addresses;
  export import EmailAddresses = AddressesAPI.EmailAddresses;
  export import AddressCreateResponse = AddressesAPI.AddressCreateResponse;
  export import AddressListResponse = AddressesAPI.AddressListResponse;
  export import AddressDeleteResponse = AddressesAPI.AddressDeleteResponse;
  export import AddressGetResponse = AddressesAPI.AddressGetResponse;
  export import AddressListResponsesV4PagePaginationArray = AddressesAPI.AddressListResponsesV4PagePaginationArray;
  export import AddressCreateParams = AddressesAPI.AddressCreateParams;
  export import AddressListParams = AddressesAPI.AddressListParams;
}
