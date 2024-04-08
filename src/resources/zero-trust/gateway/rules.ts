// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RulesAPI from 'cloudflare/resources/zero-trust/gateway/rules';
import * as Shared from 'cloudflare/resources/shared';
import { SinglePage } from 'cloudflare/pagination';

export class Rules extends APIResource {
  /**
   * Creates a new Zero Trust Gateway rule.
   */
  create(params: RuleCreateParams, options?: Core.RequestOptions): Core.APIPromise<Rule> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/gateway/rules`, { body, ...options }) as Core.APIPromise<{
        result: Rule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a configured Zero Trust Gateway rule.
   */
  update(ruleId: string, params: RuleUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Rule> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/gateway/rules/${ruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Rule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the Zero Trust Gateway rules for an account.
   */
  list(params: RuleListParams, options?: Core.RequestOptions): Core.PagePromise<RulesSinglePage, Rule> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/gateway/rules`, RulesSinglePage, options);
  }

  /**
   * Deletes a Zero Trust Gateway rule.
   */
  delete(
    ruleId: string,
    params: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/gateway/rules/${ruleId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a single Zero Trust Gateway rule.
   */
  get(ruleId: string, params: RuleGetParams, options?: Core.RequestOptions): Core.APIPromise<Rule> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway/rules/${ruleId}`, options) as Core.APIPromise<{
        result: Rule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RulesSinglePage extends SinglePage<Rule> {}

export interface DNSResolverSettingsV4 {
  /**
   * IPv4 address of upstream resolver.
   */
  ip: string;

  /**
   * A port number to use for upstream resolver. Defaults to 53 if unspecified.
   */
  port?: number;

  /**
   * Whether to connect to this resolver over a private network. Must be set when
   * vnet_id is set.
   */
  route_through_private_network?: boolean;

  /**
   * Optionally specify a virtual network for this resolver. Uses default virtual
   * network id if omitted.
   */
  vnet_id?: string;
}

export interface DNSResolverSettingsV6 {
  /**
   * IPv6 address of upstream resolver.
   */
  ip: string;

  /**
   * A port number to use for upstream resolver. Defaults to 53 if unspecified.
   */
  port?: number;

  /**
   * Whether to connect to this resolver over a private network. Must be set when
   * vnet_id is set.
   */
  route_through_private_network?: boolean;

  /**
   * Optionally specify a virtual network for this resolver. Uses default virtual
   * network id if omitted.
   */
  vnet_id?: string;
}

/**
 * The protocol or layer to use.
 */
export type FilterItem = 'http' | 'dns' | 'l4' | 'egress';

export interface Rule {
  /**
   * The API resource UUID.
   */
  id?: string;

  /**
   * The action to preform when the associated traffic, identity, and device posture
   * expressions are either absent or evaluate to `true`.
   */
  action?:
    | 'on'
    | 'off'
    | 'allow'
    | 'block'
    | 'scan'
    | 'noscan'
    | 'safesearch'
    | 'ytrestricted'
    | 'isolate'
    | 'noisolate'
    | 'override'
    | 'l4_override'
    | 'egress'
    | 'audit_ssh'
    | 'resolve';

  created_at?: string;

  /**
   * Date of deletion, if any.
   */
  deleted_at?: string | null;

  /**
   * The description of the rule.
   */
  description?: string;

  /**
   * The wirefilter expression used for device posture check matching.
   */
  device_posture?: string;

  /**
   * True if the rule is enabled.
   */
  enabled?: boolean;

  /**
   * The protocol or layer to evaluate the traffic, identity, and device posture
   * expressions.
   */
  filters?: Array<FilterItem>;

  /**
   * The wirefilter expression used for identity matching.
   */
  identity?: string;

  /**
   * The name of the rule.
   */
  name?: string;

  /**
   * Precedence sets the order of your rules. Lower values indicate higher
   * precedence. At each processing phase, applicable rules are evaluated in
   * ascending order of this value.
   */
  precedence?: number;

  /**
   * Additional settings that modify the rule's action.
   */
  rule_settings?: RuleSetting;

  /**
   * The schedule for activating DNS policies. This does not apply to HTTP or network
   * policies.
   */
  schedule?: Schedule;

  /**
   * The wirefilter expression used for traffic matching.
   */
  traffic?: string;

  updated_at?: string;
}

/**
 * Additional settings that modify the rule's action.
 */
export interface RuleSetting {
  /**
   * Add custom headers to allowed requests, in the form of key-value pairs. Keys are
   * header names, pointing to an array with its header value(s).
   */
  add_headers?: unknown;

  /**
   * Set by parent MSP accounts to enable their children to bypass this rule.
   */
  allow_child_bypass?: boolean;

  /**
   * Settings for the Audit SSH action.
   */
  audit_ssh?: RuleSetting.AuditSSH;

  /**
   * Configure how browser isolation behaves.
   */
  biso_admin_controls?: RuleSetting.BisoAdminControls;

  /**
   * Enable the custom block page.
   */
  block_page_enabled?: boolean;

  /**
   * The text describing why this block occurred, displayed on the custom block page
   * (if enabled).
   */
  block_reason?: string;

  /**
   * Set by children MSP accounts to bypass their parent's rules.
   */
  bypass_parent_rule?: boolean;

  /**
   * Configure how session check behaves.
   */
  check_session?: RuleSetting.CheckSession;

  /**
   * Add your own custom resolvers to route queries that match the resolver policy.
   * Cannot be used when resolve_dns_through_cloudflare is set. DNS queries will
   * route to the address closest to their origin. Only valid when a rule's action is
   * set to 'resolve'.
   */
  dns_resolvers?: RuleSetting.DNSResolvers;

  /**
   * Configure how Gateway Proxy traffic egresses. You can enable this setting for
   * rules with Egress actions and filters, or omit it to indicate local egress via
   * WARP IPs.
   */
  egress?: RuleSetting.Egress;

  /**
   * INSECURE - disable DNSSEC validation (for Allow actions).
   */
  insecure_disable_dnssec_validation?: boolean;

  /**
   * Set to true to enable IPs in DNS resolver category blocks. By default categories
   * only block based on domain names.
   */
  ip_categories?: boolean;

  /**
   * Set to true to include IPs in DNS resolver indicator feed blocks. By default
   * indicator feeds only block based on domain names.
   */
  ip_indicator_feeds?: boolean;

  /**
   * Send matching traffic to the supplied destination IP address and port.
   */
  l4override?: RuleSetting.L4override;

  /**
   * Configure a notification to display on the user's device when this rule is
   * matched.
   */
  notification_settings?: RuleSetting.NotificationSettings;

  /**
   * Override matching DNS queries with a hostname.
   */
  override_host?: string;

  /**
   * Override matching DNS queries with an IP or set of IPs.
   */
  override_ips?: Array<string>;

  /**
   * Configure DLP payload logging.
   */
  payload_log?: RuleSetting.PayloadLog;

  /**
   * Enable to send queries that match the policy to Cloudflare's default 1.1.1.1 DNS
   * resolver. Cannot be set when dns_resolvers are specified. Only valid when a
   * rule's action is set to 'resolve'.
   */
  resolve_dns_through_cloudflare?: boolean;

  /**
   * Configure behavior when an upstream cert is invalid or an SSL error occurs.
   */
  untrusted_cert?: RuleSetting.UntrustedCERT;
}

export namespace RuleSetting {
  /**
   * Settings for the Audit SSH action.
   */
  export interface AuditSSH {
    /**
     * Enable to turn on SSH command logging.
     */
    command_logging?: boolean;
  }

  /**
   * Configure how browser isolation behaves.
   */
  export interface BisoAdminControls {
    /**
     * Set to true to enable copy-pasting.
     */
    dcp?: boolean;

    /**
     * Set to true to enable downloading.
     */
    dd?: boolean;

    /**
     * Set to true to enable keyboard usage.
     */
    dk?: boolean;

    /**
     * Set to true to enable printing.
     */
    dp?: boolean;

    /**
     * Set to true to enable uploading.
     */
    du?: boolean;
  }

  /**
   * Configure how session check behaves.
   */
  export interface CheckSession {
    /**
     * Configure how fresh the session needs to be to be considered valid.
     */
    duration?: string;

    /**
     * Set to true to enable session enforcement.
     */
    enforce?: boolean;
  }

  /**
   * Add your own custom resolvers to route queries that match the resolver policy.
   * Cannot be used when resolve_dns_through_cloudflare is set. DNS queries will
   * route to the address closest to their origin. Only valid when a rule's action is
   * set to 'resolve'.
   */
  export interface DNSResolvers {
    ipv4?: Array<RulesAPI.DNSResolverSettingsV4>;

    ipv6?: Array<RulesAPI.DNSResolverSettingsV6>;
  }

  /**
   * Configure how Gateway Proxy traffic egresses. You can enable this setting for
   * rules with Egress actions and filters, or omit it to indicate local egress via
   * WARP IPs.
   */
  export interface Egress {
    /**
     * The IPv4 address to be used for egress.
     */
    ipv4?: string;

    /**
     * The fallback IPv4 address to be used for egress in the event of an error
     * egressing with the primary IPv4. Can be '0.0.0.0' to indicate local egress via
     * WARP IPs.
     */
    ipv4_fallback?: string;

    /**
     * The IPv6 range to be used for egress.
     */
    ipv6?: string;
  }

  /**
   * Send matching traffic to the supplied destination IP address and port.
   */
  export interface L4override {
    /**
     * IPv4 or IPv6 address.
     */
    ip?: string;

    /**
     * A port number to use for TCP/UDP overrides.
     */
    port?: number;
  }

  /**
   * Configure a notification to display on the user's device when this rule is
   * matched.
   */
  export interface NotificationSettings {
    /**
     * Set notification on
     */
    enabled?: boolean;

    /**
     * Customize the message shown in the notification.
     */
    msg?: string;

    /**
     * Optional URL to direct users to additional information. If not set, the
     * notification will open a block page.
     */
    support_url?: string;
  }

  /**
   * Configure DLP payload logging.
   */
  export interface PayloadLog {
    /**
     * Set to true to enable DLP payload logging for this rule.
     */
    enabled?: boolean;
  }

  /**
   * Configure behavior when an upstream cert is invalid or an SSL error occurs.
   */
  export interface UntrustedCERT {
    /**
     * The action performed when an untrusted certificate is seen. The default action
     * is an error with HTTP code 526.
     */
    action?: 'pass_through' | 'block' | 'error';
  }
}

/**
 * The schedule for activating DNS policies. This does not apply to HTTP or network
 * policies.
 */
export interface Schedule {
  /**
   * The time intervals when the rule will be active on Fridays, in increasing order
   * from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on
   * Fridays.
   */
  fri?: string;

  /**
   * The time intervals when the rule will be active on Mondays, in increasing order
   * from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on
   * Mondays.
   */
  mon?: string;

  /**
   * The time intervals when the rule will be active on Saturdays, in increasing
   * order from 00:00-24:00. If this parameter is omitted, the rule will be
   * deactivated on Saturdays.
   */
  sat?: string;

  /**
   * The time intervals when the rule will be active on Sundays, in increasing order
   * from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on
   * Sundays.
   */
  sun?: string;

  /**
   * The time intervals when the rule will be active on Thursdays, in increasing
   * order from 00:00-24:00. If this parameter is omitted, the rule will be
   * deactivated on Thursdays.
   */
  thu?: string;

  /**
   * The time zone the rule will be evaluated against. If a
   * [valid time zone city name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)
   * is provided, Gateway will always use the current time at that time zone. If this
   * parameter is omitted, then Gateway will use the time zone inferred from the
   * user's source IP to evaluate the rule. If Gateway cannot determine the time zone
   * from the IP, we will fall back to the time zone of the user's connected data
   * center.
   */
  time_zone?: string;

  /**
   * The time intervals when the rule will be active on Tuesdays, in increasing order
   * from 00:00-24:00. If this parameter is omitted, the rule will be deactivated on
   * Tuesdays.
   */
  tue?: string;

  /**
   * The time intervals when the rule will be active on Wednesdays, in increasing
   * order from 00:00-24:00. If this parameter is omitted, the rule will be
   * deactivated on Wednesdays.
   */
  wed?: string;
}

export interface UnnamedSchemaRef0b0764cdb06aad66b555fd74c8c78b2a {
  /**
   * The API resource UUID.
   */
  id?: string;

  /**
   * The action to preform when the associated traffic, identity, and device posture
   * expressions are either absent or evaluate to `true`.
   */
  action?:
    | 'on'
    | 'off'
    | 'allow'
    | 'block'
    | 'scan'
    | 'noscan'
    | 'safesearch'
    | 'ytrestricted'
    | 'isolate'
    | 'noisolate'
    | 'override'
    | 'l4_override'
    | 'egress'
    | 'audit_ssh'
    | 'resolve';

  created_at?: string;

  /**
   * Date of deletion, if any.
   */
  deleted_at?: string | null;

  /**
   * The description of the rule.
   */
  description?: string;

  /**
   * The wirefilter expression used for device posture check matching.
   */
  device_posture?: string;

  /**
   * True if the rule is enabled.
   */
  enabled?: boolean;

  /**
   * The protocol or layer to evaluate the traffic, identity, and device posture
   * expressions.
   */
  filters?: Array<FilterItem>;

  /**
   * The wirefilter expression used for identity matching.
   */
  identity?: string;

  /**
   * The name of the rule.
   */
  name?: string;

  /**
   * Precedence sets the order of your rules. Lower values indicate higher
   * precedence. At each processing phase, applicable rules are evaluated in
   * ascending order of this value.
   */
  precedence?: number;

  /**
   * Additional settings that modify the rule's action.
   */
  rule_settings?: RuleSetting;

  /**
   * The schedule for activating DNS policies. This does not apply to HTTP or network
   * policies.
   */
  schedule?: Schedule;

  /**
   * The wirefilter expression used for traffic matching.
   */
  traffic?: string;

  updated_at?: string;
}

export interface RuleCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The action to preform when the associated traffic, identity, and
   * device posture expressions are either absent or evaluate to `true`.
   */
  action:
    | 'on'
    | 'off'
    | 'allow'
    | 'block'
    | 'scan'
    | 'noscan'
    | 'safesearch'
    | 'ytrestricted'
    | 'isolate'
    | 'noisolate'
    | 'override'
    | 'l4_override'
    | 'egress'
    | 'audit_ssh'
    | 'resolve';

  /**
   * Body param: The name of the rule.
   */
  name: string;

  /**
   * Body param: The description of the rule.
   */
  description?: string;

  /**
   * Body param: The wirefilter expression used for device posture check matching.
   */
  device_posture?: string;

  /**
   * Body param: True if the rule is enabled.
   */
  enabled?: boolean;

  /**
   * Body param: The protocol or layer to evaluate the traffic, identity, and device
   * posture expressions.
   */
  filters?: Array<FilterItem>;

  /**
   * Body param: The wirefilter expression used for identity matching.
   */
  identity?: string;

  /**
   * Body param: Precedence sets the order of your rules. Lower values indicate
   * higher precedence. At each processing phase, applicable rules are evaluated in
   * ascending order of this value.
   */
  precedence?: number;

  /**
   * Body param: Additional settings that modify the rule's action.
   */
  rule_settings?: RuleSetting;

  /**
   * Body param: The schedule for activating DNS policies. This does not apply to
   * HTTP or network policies.
   */
  schedule?: Schedule;

  /**
   * Body param: The wirefilter expression used for traffic matching.
   */
  traffic?: string;
}

export interface RuleUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: The action to preform when the associated traffic, identity, and
   * device posture expressions are either absent or evaluate to `true`.
   */
  action:
    | 'on'
    | 'off'
    | 'allow'
    | 'block'
    | 'scan'
    | 'noscan'
    | 'safesearch'
    | 'ytrestricted'
    | 'isolate'
    | 'noisolate'
    | 'override'
    | 'l4_override'
    | 'egress'
    | 'audit_ssh'
    | 'resolve';

  /**
   * Body param: The name of the rule.
   */
  name: string;

  /**
   * Body param: The description of the rule.
   */
  description?: string;

  /**
   * Body param: The wirefilter expression used for device posture check matching.
   */
  device_posture?: string;

  /**
   * Body param: True if the rule is enabled.
   */
  enabled?: boolean;

  /**
   * Body param: The protocol or layer to evaluate the traffic, identity, and device
   * posture expressions.
   */
  filters?: Array<FilterItem>;

  /**
   * Body param: The wirefilter expression used for identity matching.
   */
  identity?: string;

  /**
   * Body param: Precedence sets the order of your rules. Lower values indicate
   * higher precedence. At each processing phase, applicable rules are evaluated in
   * ascending order of this value.
   */
  precedence?: number;

  /**
   * Body param: Additional settings that modify the rule's action.
   */
  rule_settings?: RuleSetting;

  /**
   * Body param: The schedule for activating DNS policies. This does not apply to
   * HTTP or network policies.
   */
  schedule?: Schedule;

  /**
   * Body param: The wirefilter expression used for traffic matching.
   */
  traffic?: string;
}

export interface RuleListParams {
  account_id: string;
}

export interface RuleDeleteParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface RuleGetParams {
  account_id: string;
}

export namespace Rules {
  export import DNSResolverSettingsV4 = RulesAPI.DNSResolverSettingsV4;
  export import DNSResolverSettingsV6 = RulesAPI.DNSResolverSettingsV6;
  export import FilterItem = RulesAPI.FilterItem;
  export import Rule = RulesAPI.Rule;
  export import RuleSetting = RulesAPI.RuleSetting;
  export import Schedule = RulesAPI.Schedule;
  export import UnnamedSchemaRef0b0764cdb06aad66b555fd74c8c78b2a = RulesAPI.UnnamedSchemaRef0b0764cdb06aad66b555fd74c8c78b2a;
  export import RulesSinglePage = RulesAPI.RulesSinglePage;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleUpdateParams = RulesAPI.RuleUpdateParams;
  export import RuleListParams = RulesAPI.RuleListParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleGetParams = RulesAPI.RuleGetParams;
}
