// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as RulesAPI from './rules';
import { SinglePage } from '../../../pagination';

export class Rules extends APIResource {
  /**
   * Create a new Zero Trust Gateway rule.
   *
   * @example
   * ```ts
   * const gatewayRule =
   *   await client.zeroTrust.gateway.rules.create({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *     action: 'allow',
   *     name: 'block bad websites',
   *   });
   * ```
   */
  create(params: RuleCreateParams, options?: Core.RequestOptions): Core.APIPromise<GatewayRule> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/gateway/rules`, { body, ...options }) as Core.APIPromise<{
        result: GatewayRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a configured Zero Trust Gateway rule.
   *
   * @example
   * ```ts
   * const gatewayRule =
   *   await client.zeroTrust.gateway.rules.update(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     {
   *       account_id: '699d98642c564d2e855e9661899b7252',
   *       action: 'allow',
   *       name: 'block bad websites',
   *     },
   *   );
   * ```
   */
  update(
    ruleId: string,
    params: RuleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GatewayRule> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/gateway/rules/${ruleId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: GatewayRule }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Zero Trust Gateway rules for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const gatewayRule of client.zeroTrust.gateway.rules.list(
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RuleListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<GatewayRulesSinglePage, GatewayRule> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/gateway/rules`, GatewayRulesSinglePage, options);
  }

  /**
   * Delete a Zero Trust Gateway rule.
   *
   * @example
   * ```ts
   * const rule = await client.zeroTrust.gateway.rules.delete(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '699d98642c564d2e855e9661899b7252' },
   * );
   * ```
   */
  delete(
    ruleId: string,
    params: RuleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RuleDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/gateway/rules/${ruleId}`, options) as Core.APIPromise<{
        result: RuleDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a single Zero Trust Gateway rule.
   *
   * @example
   * ```ts
   * const gatewayRule =
   *   await client.zeroTrust.gateway.rules.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  get(ruleId: string, params: RuleGetParams, options?: Core.RequestOptions): Core.APIPromise<GatewayRule> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/gateway/rules/${ruleId}`, options) as Core.APIPromise<{
        result: GatewayRule;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Resets the expiration of a Zero Trust Gateway Rule if its duration elapsed and
   * it has a default duration. The Zero Trust Gateway Rule must have values for both
   * `expiration.expires_at` and `expiration.duration`.
   *
   * @example
   * ```ts
   * const gatewayRule =
   *   await client.zeroTrust.gateway.rules.resetExpiration(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '699d98642c564d2e855e9661899b7252' },
   *   );
   * ```
   */
  resetExpiration(
    ruleId: string,
    params: RuleResetExpirationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GatewayRule> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/gateway/rules/${ruleId}/reset_expiration`,
        options,
      ) as Core.APIPromise<{ result: GatewayRule }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class GatewayRulesSinglePage extends SinglePage<GatewayRule> {}

export interface DNSResolverSettingsV4 {
  /**
   * Specify the IPv4 address of the upstream resolver.
   */
  ip: string;

  /**
   * Specify a port number to use for the upstream resolver. Defaults to 53 if
   * unspecified.
   */
  port?: number;

  /**
   * Indicate whether to connect to this resolver over a private network. Must set
   * when vnet_id set.
   */
  route_through_private_network?: boolean;

  /**
   * Specify an optional virtual network for this resolver. Uses default virtual
   * network id if omitted.
   */
  vnet_id?: string;
}

export interface DNSResolverSettingsV4Param {
  /**
   * Specify the IPv4 address of the upstream resolver.
   */
  ip: string;

  /**
   * Specify a port number to use for the upstream resolver. Defaults to 53 if
   * unspecified.
   */
  port?: number;

  /**
   * Indicate whether to connect to this resolver over a private network. Must set
   * when vnet_id set.
   */
  route_through_private_network?: boolean;

  /**
   * Specify an optional virtual network for this resolver. Uses default virtual
   * network id if omitted.
   */
  vnet_id?: string;
}

export interface DNSResolverSettingsV6 {
  /**
   * Specify the IPv6 address of the upstream resolver.
   */
  ip: string;

  /**
   * Specify a port number to use for the upstream resolver. Defaults to 53 if
   * unspecified.
   */
  port?: number;

  /**
   * Indicate whether to connect to this resolver over a private network. Must set
   * when vnet_id set.
   */
  route_through_private_network?: boolean;

  /**
   * Specify an optional virtual network for this resolver. Uses default virtual
   * network id if omitted.
   */
  vnet_id?: string;
}

export interface DNSResolverSettingsV6Param {
  /**
   * Specify the IPv6 address of the upstream resolver.
   */
  ip: string;

  /**
   * Specify a port number to use for the upstream resolver. Defaults to 53 if
   * unspecified.
   */
  port?: number;

  /**
   * Indicate whether to connect to this resolver over a private network. Must set
   * when vnet_id set.
   */
  route_through_private_network?: boolean;

  /**
   * Specify an optional virtual network for this resolver. Uses default virtual
   * network id if omitted.
   */
  vnet_id?: string;
}

/**
 * Specify the protocol or layer to use.
 */
export type GatewayFilter = 'http' | 'dns' | 'l4' | 'egress' | 'dns_resolver';

/**
 * Specify the protocol or layer to use.
 */
export type GatewayFilterParam = 'http' | 'dns' | 'l4' | 'egress' | 'dns_resolver';

export interface GatewayRule {
  /**
   * Specify the action to perform when the associated traffic, identity, and device
   * posture expressions either absent or evaluate to `true`.
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
    | 'resolve'
    | 'quarantine'
    | 'redirect';

  /**
   * Specify whether the rule is enabled.
   */
  enabled: boolean;

  /**
   * Specify the protocol or layer to evaluate the traffic, identity, and device
   * posture expressions.
   */
  filters: Array<GatewayFilter>;

  /**
   * Specify the rule name.
   */
  name: string;

  /**
   * Set the order of your rules. Lower values indicate higher precedence. At each
   * processing phase, evaluate applicable rules in ascending order of this value.
   * Refer to
   * [Order of enforcement](http://developers.cloudflare.com/learning-paths/secure-internet-traffic/understand-policies/order-of-enforcement/#manage-precedence-with-terraform)
   * to manage precedence via Terraform.
   */
  precedence: number;

  /**
   * Specify the wirefilter expression used for traffic matching. The API
   * automatically formats and sanitizes expressions before storing them. To prevent
   * Terraform state drift, use the formatted expression returned in the API
   * response.
   */
  traffic: string;

  /**
   * Identify the API resource with a UUID.
   */
  id?: string;

  created_at?: string;

  /**
   * Indicate the date of deletion, if any.
   */
  deleted_at?: string | null;

  /**
   * Specify the rule description.
   */
  description?: string;

  /**
   * Specify the wirefilter expression used for device posture check. The API
   * automatically formats and sanitizes expressions before storing them. To prevent
   * Terraform state drift, use the formatted expression returned in the API
   * response.
   */
  device_posture?: string;

  /**
   * Defines the expiration time stamp and default duration of a DNS policy. Takes
   * precedence over the policy's `schedule` configuration, if any. This does not
   * apply to HTTP or network policies. Settable only for `dns` rules.
   */
  expiration?: GatewayRule.Expiration | null;

  /**
   * Specify the wirefilter expression used for identity matching. The API
   * automatically formats and sanitizes expressions before storing them. To prevent
   * Terraform state drift, use the formatted expression returned in the API
   * response.
   */
  identity?: string;

  /**
   * Indicate that this rule is shared via the Orgs API and read only.
   */
  read_only?: boolean;

  /**
   * Set settings related to this rule. Each setting is only valid for specific rule
   * types and can only be used with the appropriate selectors. If Terraform drift is
   * observed in these setting values, verify that the setting is supported for the
   * given rule type and that the API response reflects the requested value. If the
   * API response returns sanitized or modified values that differ from the request,
   * use the API-provided values in Terraform to ensure consistency.
   */
  rule_settings?: RuleSetting;

  /**
   * Defines the schedule for activating DNS policies. Settable only for `dns` and
   * `dns_resolver` rules.
   */
  schedule?: Schedule | null;

  /**
   * Indicate that this rule is sharable via the Orgs API.
   */
  sharable?: boolean;

  /**
   * Provide the account tag of the account that created the rule.
   */
  source_account?: string;

  updated_at?: string;

  /**
   * Indicate the version number of the rule(read-only).
   */
  version?: number;

  /**
   * Indicate a warning for a misconfigured rule, if any.
   */
  warning_status?: string | null;
}

export namespace GatewayRule {
  /**
   * Defines the expiration time stamp and default duration of a DNS policy. Takes
   * precedence over the policy's `schedule` configuration, if any. This does not
   * apply to HTTP or network policies. Settable only for `dns` rules.
   */
  export interface Expiration {
    /**
     * Show the timestamp when the policy expires and stops applying. The value must
     * follow RFC 3339 and include a UTC offset. The system accepts non-zero offsets
     * but converts them to the equivalent UTC+00:00 value and returns timestamps with
     * a trailing Z. Expiration policies ignore client timezones and expire globally at
     * the specified expires_at time.
     */
    expires_at: string;

    /**
     * Defines the default duration a policy active in minutes. Must set in order to
     * use the `reset_expiration` endpoint on this rule.
     */
    duration?: number;

    /**
     * Indicates whether the policy is expired.
     */
    expired?: boolean;
  }
}

/**
 * Set settings related to this rule. Each setting is only valid for specific rule
 * types and can only be used with the appropriate selectors. If Terraform drift is
 * observed in these setting values, verify that the setting is supported for the
 * given rule type and that the API response reflects the requested value. If the
 * API response returns sanitized or modified values that differ from the request,
 * use the API-provided values in Terraform to ensure consistency.
 */
export interface RuleSetting {
  /**
   * Add custom headers to allowed requests as key-value pairs. Use header names as
   * keys that map to arrays of header values. Settable only for `http` rules with
   * the action set to `allow`.
   */
  add_headers?: { [key: string]: Array<string> } | null;

  /**
   * Set to enable MSP children to bypass this rule. Only parent MSP accounts can set
   * this. this rule. Settable for all types of rules.
   */
  allow_child_bypass?: boolean | null;

  /**
   * Define the settings for the Audit SSH action. Settable only for `l4` rules with
   * `audit_ssh` action.
   */
  audit_ssh?: RuleSetting.AuditSSH | null;

  /**
   * Configure browser isolation behavior. Settable only for `http` rules with the
   * action set to `isolate`.
   */
  biso_admin_controls?: RuleSetting.BISOAdminControls;

  /**
   * Configure custom block page settings. If missing or null, use the account
   * settings. Settable only for `http` rules with the action set to `block`.
   */
  block_page?: RuleSetting.BlockPage | null;

  /**
   * Enable the custom block page. Settable only for `dns` rules with action `block`.
   */
  block_page_enabled?: boolean;

  /**
   * Explain why the rule blocks the request. The custom block page shows this text
   * (if enabled). Settable only for `dns`, `l4`, and `http` rules when the action
   * set to `block`.
   */
  block_reason?: string | null;

  /**
   * Set to enable MSP accounts to bypass their parent's rules. Only MSP child
   * accounts can set this. Settable for all types of rules.
   */
  bypass_parent_rule?: boolean | null;

  /**
   * Configure session check behavior. Settable only for `l4` and `http` rules with
   * the action set to `allow`.
   */
  check_session?: RuleSetting.CheckSession | null;

  /**
   * Configure custom resolvers to route queries that match the resolver policy.
   * Unused with 'resolve_dns_through_cloudflare' or 'resolve_dns_internally'
   * settings. DNS queries get routed to the address closest to their origin. Only
   * valid when a rule's action set to 'resolve'. Settable only for `dns_resolver`
   * rules.
   */
  dns_resolvers?: RuleSetting.DNSResolvers | null;

  /**
   * Configure how Gateway Proxy traffic egresses. You can enable this setting for
   * rules with Egress actions and filters, or omit it to indicate local egress via
   * WARP IPs. Settable only for `egress` rules.
   */
  egress?: RuleSetting.Egress | null;

  /**
   * Ignore category matches at CNAME domains in a response. When off, evaluate
   * categories in this rule against all CNAME domain categories in the response.
   * Settable only for `dns` and `dns_resolver` rules.
   */
  ignore_cname_category_matches?: boolean;

  /**
   * Specify whether to disable DNSSEC validation (for Allow actions) [INSECURE].
   * Settable only for `dns` rules.
   */
  insecure_disable_dnssec_validation?: boolean;

  /**
   * Enable IPs in DNS resolver category blocks. The system blocks only domain name
   * categories unless you enable this setting. Settable only for `dns` and
   * `dns_resolver` rules.
   */
  ip_categories?: boolean;

  /**
   * Indicates whether to include IPs in DNS resolver indicator feed blocks. Default,
   * indicator feeds block only domain names. Settable only for `dns` and
   * `dns_resolver` rules.
   */
  ip_indicator_feeds?: boolean;

  /**
   * Send matching traffic to the supplied destination IP address and port. Settable
   * only for `l4` rules with the action set to `l4_override`.
   */
  l4override?: RuleSetting.L4override | null;

  /**
   * Configure a notification to display on the user's device when this rule matched.
   * Settable for all types of rules with the action set to `block`.
   */
  notification_settings?: RuleSetting.NotificationSettings | null;

  /**
   * Defines a hostname for override, for the matching DNS queries. Settable only for
   * `dns` rules with the action set to `override`.
   */
  override_host?: string;

  /**
   * Defines a an IP or set of IPs for overriding matched DNS queries. Settable only
   * for `dns` rules with the action set to `override`.
   */
  override_ips?: Array<string> | null;

  /**
   * Configure DLP payload logging. Settable only for `http` rules.
   */
  payload_log?: RuleSetting.PayloadLog | null;

  /**
   * Configure settings that apply to quarantine rules. Settable only for `http`
   * rules.
   */
  quarantine?: RuleSetting.Quarantine | null;

  /**
   * Apply settings to redirect rules. Settable only for `http` rules with the action
   * set to `redirect`.
   */
  redirect?: RuleSetting.Redirect | null;

  /**
   * Configure to forward the query to the internal DNS service, passing the
   * specified 'view_id' as input. Not used when 'dns_resolvers' is specified or
   * 'resolve_dns_through_cloudflare' is set. Only valid when a rule's action set to
   * 'resolve'. Settable only for `dns_resolver` rules.
   */
  resolve_dns_internally?: RuleSetting.ResolveDNSInternally | null;

  /**
   * Enable to send queries that match the policy to Cloudflare's default 1.1.1.1 DNS
   * resolver. Cannot set when 'dns_resolvers' specified or 'resolve_dns_internally'
   * is set. Only valid when a rule's action set to 'resolve'. Settable only for
   * `dns_resolver` rules.
   */
  resolve_dns_through_cloudflare?: boolean | null;

  /**
   * Configure behavior when an upstream certificate is invalid or an SSL error
   * occurs. Settable only for `http` rules with the action set to `allow`.
   */
  untrusted_cert?: RuleSetting.UntrustedCERT | null;
}

export namespace RuleSetting {
  /**
   * Define the settings for the Audit SSH action. Settable only for `l4` rules with
   * `audit_ssh` action.
   */
  export interface AuditSSH {
    /**
     * Enable SSH command logging.
     */
    command_logging?: boolean;
  }

  /**
   * Configure browser isolation behavior. Settable only for `http` rules with the
   * action set to `isolate`.
   */
  export interface BISOAdminControls {
    /**
     * Configure copy behavior. If set to remote_only, users cannot copy isolated
     * content from the remote browser to the local clipboard. If this field is absent,
     * copying remains enabled. Applies only when version == "v2".
     */
    copy?: 'enabled' | 'disabled' | 'remote_only';

    /**
     * Set to false to enable copy-pasting. Only applies when `version == "v1"`.
     */
    dcp?: boolean;

    /**
     * Set to false to enable downloading. Only applies when `version == "v1"`.
     */
    dd?: boolean;

    /**
     * Set to false to enable keyboard usage. Only applies when `version == "v1"`.
     */
    dk?: boolean;

    /**
     * Configure download behavior. When set to remote_only, users can view downloads
     * but cannot save them. Applies only when version == "v2".
     */
    download?: 'enabled' | 'disabled' | 'remote_only';

    /**
     * Set to false to enable printing. Only applies when `version == "v1"`.
     */
    dp?: boolean;

    /**
     * Set to false to enable uploading. Only applies when `version == "v1"`.
     */
    du?: boolean;

    /**
     * Configure keyboard usage behavior. If this field is absent, keyboard usage
     * remains enabled. Applies only when version == "v2".
     */
    keyboard?: 'enabled' | 'disabled';

    /**
     * Configure paste behavior. If set to remote_only, users cannot paste content from
     * the local clipboard into isolated pages. If this field is absent, pasting
     * remains enabled. Applies only when version == "v2".
     */
    paste?: 'enabled' | 'disabled' | 'remote_only';

    /**
     * Configure print behavior. Default, Printing is enabled. Applies only when
     * version == "v2".
     */
    printing?: 'enabled' | 'disabled';

    /**
     * Configure upload behavior. If this field is absent, uploading remains enabled.
     * Applies only when version == "v2".
     */
    upload?: 'enabled' | 'disabled';

    /**
     * Indicate which version of the browser isolation controls should apply.
     */
    version?: 'v1' | 'v2';
  }

  /**
   * Configure custom block page settings. If missing or null, use the account
   * settings. Settable only for `http` rules with the action set to `block`.
   */
  export interface BlockPage {
    /**
     * Specify the URI to which the user is redirected.
     */
    target_uri: string;

    /**
     * Specify whether to pass the context information as query parameters.
     */
    include_context?: boolean;
  }

  /**
   * Configure session check behavior. Settable only for `l4` and `http` rules with
   * the action set to `allow`.
   */
  export interface CheckSession {
    /**
     * Sets the required session freshness threshold. The API returns a normalized
     * version of this value.
     */
    duration?: string;

    /**
     * Enable session enforcement.
     */
    enforce?: boolean;
  }

  /**
   * Configure custom resolvers to route queries that match the resolver policy.
   * Unused with 'resolve_dns_through_cloudflare' or 'resolve_dns_internally'
   * settings. DNS queries get routed to the address closest to their origin. Only
   * valid when a rule's action set to 'resolve'. Settable only for `dns_resolver`
   * rules.
   */
  export interface DNSResolvers {
    ipv4?: Array<RulesAPI.DNSResolverSettingsV4>;

    ipv6?: Array<RulesAPI.DNSResolverSettingsV6>;
  }

  /**
   * Configure how Gateway Proxy traffic egresses. You can enable this setting for
   * rules with Egress actions and filters, or omit it to indicate local egress via
   * WARP IPs. Settable only for `egress` rules.
   */
  export interface Egress {
    /**
     * Specify the IPv4 address to use for egress.
     */
    ipv4?: string;

    /**
     * Specify the fallback IPv4 address to use for egress when the primary IPv4 fails.
     * Set '0.0.0.0' to indicate local egress via WARP IPs.
     */
    ipv4_fallback?: string;

    /**
     * Specify the IPv6 range to use for egress.
     */
    ipv6?: string;
  }

  /**
   * Send matching traffic to the supplied destination IP address and port. Settable
   * only for `l4` rules with the action set to `l4_override`.
   */
  export interface L4override {
    /**
     * Defines the IPv4 or IPv6 address.
     */
    ip?: string;

    /**
     * Defines a port number to use for TCP/UDP overrides.
     */
    port?: number;
  }

  /**
   * Configure a notification to display on the user's device when this rule matched.
   * Settable for all types of rules with the action set to `block`.
   */
  export interface NotificationSettings {
    /**
     * Enable notification.
     */
    enabled?: boolean;

    /**
     * Indicates whether to pass the context information as query parameters.
     */
    include_context?: boolean;

    /**
     * Customize the message shown in the notification.
     */
    msg?: string;

    /**
     * Defines an optional URL to direct users to additional information. If unset, the
     * notification opens a block page.
     */
    support_url?: string;
  }

  /**
   * Configure DLP payload logging. Settable only for `http` rules.
   */
  export interface PayloadLog {
    /**
     * Enable DLP payload logging for this rule.
     */
    enabled?: boolean;
  }

  /**
   * Configure settings that apply to quarantine rules. Settable only for `http`
   * rules.
   */
  export interface Quarantine {
    /**
     * Specify the types of files to sandbox.
     */
    file_types?: Array<
      | 'exe'
      | 'pdf'
      | 'doc'
      | 'docm'
      | 'docx'
      | 'rtf'
      | 'ppt'
      | 'pptx'
      | 'xls'
      | 'xlsm'
      | 'xlsx'
      | 'zip'
      | 'rar'
    >;
  }

  /**
   * Apply settings to redirect rules. Settable only for `http` rules with the action
   * set to `redirect`.
   */
  export interface Redirect {
    /**
     * Specify the URI to which the user is redirected.
     */
    target_uri: string;

    /**
     * Specify whether to pass the context information as query parameters.
     */
    include_context?: boolean;

    /**
     * Specify whether to append the path and query parameters from the original
     * request to target_uri.
     */
    preserve_path_and_query?: boolean;
  }

  /**
   * Configure to forward the query to the internal DNS service, passing the
   * specified 'view_id' as input. Not used when 'dns_resolvers' is specified or
   * 'resolve_dns_through_cloudflare' is set. Only valid when a rule's action set to
   * 'resolve'. Settable only for `dns_resolver` rules.
   */
  export interface ResolveDNSInternally {
    /**
     * Specify the fallback behavior to apply when the internal DNS response code
     * differs from 'NOERROR' or when the response data contains only CNAME records for
     * 'A' or 'AAAA' queries.
     */
    fallback?: 'none' | 'public_dns';

    /**
     * Specify the internal DNS view identifier to pass to the internal DNS service.
     */
    view_id?: string;
  }

  /**
   * Configure behavior when an upstream certificate is invalid or an SSL error
   * occurs. Settable only for `http` rules with the action set to `allow`.
   */
  export interface UntrustedCERT {
    /**
     * Defines the action performed when an untrusted certificate seen. The default
     * action an error with HTTP code 526.
     */
    action?: 'pass_through' | 'block' | 'error';
  }
}

/**
 * Set settings related to this rule. Each setting is only valid for specific rule
 * types and can only be used with the appropriate selectors. If Terraform drift is
 * observed in these setting values, verify that the setting is supported for the
 * given rule type and that the API response reflects the requested value. If the
 * API response returns sanitized or modified values that differ from the request,
 * use the API-provided values in Terraform to ensure consistency.
 */
export interface RuleSettingParam {
  /**
   * Add custom headers to allowed requests as key-value pairs. Use header names as
   * keys that map to arrays of header values. Settable only for `http` rules with
   * the action set to `allow`.
   */
  add_headers?: { [key: string]: Array<string> } | null;

  /**
   * Set to enable MSP children to bypass this rule. Only parent MSP accounts can set
   * this. this rule. Settable for all types of rules.
   */
  allow_child_bypass?: boolean | null;

  /**
   * Define the settings for the Audit SSH action. Settable only for `l4` rules with
   * `audit_ssh` action.
   */
  audit_ssh?: RuleSettingParam.AuditSSH | null;

  /**
   * Configure browser isolation behavior. Settable only for `http` rules with the
   * action set to `isolate`.
   */
  biso_admin_controls?: RuleSettingParam.BISOAdminControls;

  /**
   * Configure custom block page settings. If missing or null, use the account
   * settings. Settable only for `http` rules with the action set to `block`.
   */
  block_page?: RuleSettingParam.BlockPage | null;

  /**
   * Enable the custom block page. Settable only for `dns` rules with action `block`.
   */
  block_page_enabled?: boolean;

  /**
   * Explain why the rule blocks the request. The custom block page shows this text
   * (if enabled). Settable only for `dns`, `l4`, and `http` rules when the action
   * set to `block`.
   */
  block_reason?: string | null;

  /**
   * Set to enable MSP accounts to bypass their parent's rules. Only MSP child
   * accounts can set this. Settable for all types of rules.
   */
  bypass_parent_rule?: boolean | null;

  /**
   * Configure session check behavior. Settable only for `l4` and `http` rules with
   * the action set to `allow`.
   */
  check_session?: RuleSettingParam.CheckSession | null;

  /**
   * Configure custom resolvers to route queries that match the resolver policy.
   * Unused with 'resolve_dns_through_cloudflare' or 'resolve_dns_internally'
   * settings. DNS queries get routed to the address closest to their origin. Only
   * valid when a rule's action set to 'resolve'. Settable only for `dns_resolver`
   * rules.
   */
  dns_resolvers?: RuleSettingParam.DNSResolvers | null;

  /**
   * Configure how Gateway Proxy traffic egresses. You can enable this setting for
   * rules with Egress actions and filters, or omit it to indicate local egress via
   * WARP IPs. Settable only for `egress` rules.
   */
  egress?: RuleSettingParam.Egress | null;

  /**
   * Ignore category matches at CNAME domains in a response. When off, evaluate
   * categories in this rule against all CNAME domain categories in the response.
   * Settable only for `dns` and `dns_resolver` rules.
   */
  ignore_cname_category_matches?: boolean;

  /**
   * Specify whether to disable DNSSEC validation (for Allow actions) [INSECURE].
   * Settable only for `dns` rules.
   */
  insecure_disable_dnssec_validation?: boolean;

  /**
   * Enable IPs in DNS resolver category blocks. The system blocks only domain name
   * categories unless you enable this setting. Settable only for `dns` and
   * `dns_resolver` rules.
   */
  ip_categories?: boolean;

  /**
   * Indicates whether to include IPs in DNS resolver indicator feed blocks. Default,
   * indicator feeds block only domain names. Settable only for `dns` and
   * `dns_resolver` rules.
   */
  ip_indicator_feeds?: boolean;

  /**
   * Send matching traffic to the supplied destination IP address and port. Settable
   * only for `l4` rules with the action set to `l4_override`.
   */
  l4override?: RuleSettingParam.L4override | null;

  /**
   * Configure a notification to display on the user's device when this rule matched.
   * Settable for all types of rules with the action set to `block`.
   */
  notification_settings?: RuleSettingParam.NotificationSettings | null;

  /**
   * Defines a hostname for override, for the matching DNS queries. Settable only for
   * `dns` rules with the action set to `override`.
   */
  override_host?: string;

  /**
   * Defines a an IP or set of IPs for overriding matched DNS queries. Settable only
   * for `dns` rules with the action set to `override`.
   */
  override_ips?: Array<string> | null;

  /**
   * Configure DLP payload logging. Settable only for `http` rules.
   */
  payload_log?: RuleSettingParam.PayloadLog | null;

  /**
   * Configure settings that apply to quarantine rules. Settable only for `http`
   * rules.
   */
  quarantine?: RuleSettingParam.Quarantine | null;

  /**
   * Apply settings to redirect rules. Settable only for `http` rules with the action
   * set to `redirect`.
   */
  redirect?: RuleSettingParam.Redirect | null;

  /**
   * Configure to forward the query to the internal DNS service, passing the
   * specified 'view_id' as input. Not used when 'dns_resolvers' is specified or
   * 'resolve_dns_through_cloudflare' is set. Only valid when a rule's action set to
   * 'resolve'. Settable only for `dns_resolver` rules.
   */
  resolve_dns_internally?: RuleSettingParam.ResolveDNSInternally | null;

  /**
   * Enable to send queries that match the policy to Cloudflare's default 1.1.1.1 DNS
   * resolver. Cannot set when 'dns_resolvers' specified or 'resolve_dns_internally'
   * is set. Only valid when a rule's action set to 'resolve'. Settable only for
   * `dns_resolver` rules.
   */
  resolve_dns_through_cloudflare?: boolean | null;

  /**
   * Configure behavior when an upstream certificate is invalid or an SSL error
   * occurs. Settable only for `http` rules with the action set to `allow`.
   */
  untrusted_cert?: RuleSettingParam.UntrustedCERT | null;
}

export namespace RuleSettingParam {
  /**
   * Define the settings for the Audit SSH action. Settable only for `l4` rules with
   * `audit_ssh` action.
   */
  export interface AuditSSH {
    /**
     * Enable SSH command logging.
     */
    command_logging?: boolean;
  }

  /**
   * Configure browser isolation behavior. Settable only for `http` rules with the
   * action set to `isolate`.
   */
  export interface BISOAdminControls {
    /**
     * Configure copy behavior. If set to remote_only, users cannot copy isolated
     * content from the remote browser to the local clipboard. If this field is absent,
     * copying remains enabled. Applies only when version == "v2".
     */
    copy?: 'enabled' | 'disabled' | 'remote_only';

    /**
     * Set to false to enable copy-pasting. Only applies when `version == "v1"`.
     */
    dcp?: boolean;

    /**
     * Set to false to enable downloading. Only applies when `version == "v1"`.
     */
    dd?: boolean;

    /**
     * Set to false to enable keyboard usage. Only applies when `version == "v1"`.
     */
    dk?: boolean;

    /**
     * Configure download behavior. When set to remote_only, users can view downloads
     * but cannot save them. Applies only when version == "v2".
     */
    download?: 'enabled' | 'disabled' | 'remote_only';

    /**
     * Set to false to enable printing. Only applies when `version == "v1"`.
     */
    dp?: boolean;

    /**
     * Set to false to enable uploading. Only applies when `version == "v1"`.
     */
    du?: boolean;

    /**
     * Configure keyboard usage behavior. If this field is absent, keyboard usage
     * remains enabled. Applies only when version == "v2".
     */
    keyboard?: 'enabled' | 'disabled';

    /**
     * Configure paste behavior. If set to remote_only, users cannot paste content from
     * the local clipboard into isolated pages. If this field is absent, pasting
     * remains enabled. Applies only when version == "v2".
     */
    paste?: 'enabled' | 'disabled' | 'remote_only';

    /**
     * Configure print behavior. Default, Printing is enabled. Applies only when
     * version == "v2".
     */
    printing?: 'enabled' | 'disabled';

    /**
     * Configure upload behavior. If this field is absent, uploading remains enabled.
     * Applies only when version == "v2".
     */
    upload?: 'enabled' | 'disabled';

    /**
     * Indicate which version of the browser isolation controls should apply.
     */
    version?: 'v1' | 'v2';
  }

  /**
   * Configure custom block page settings. If missing or null, use the account
   * settings. Settable only for `http` rules with the action set to `block`.
   */
  export interface BlockPage {
    /**
     * Specify the URI to which the user is redirected.
     */
    target_uri: string;

    /**
     * Specify whether to pass the context information as query parameters.
     */
    include_context?: boolean;
  }

  /**
   * Configure session check behavior. Settable only for `l4` and `http` rules with
   * the action set to `allow`.
   */
  export interface CheckSession {
    /**
     * Sets the required session freshness threshold. The API returns a normalized
     * version of this value.
     */
    duration?: string;

    /**
     * Enable session enforcement.
     */
    enforce?: boolean;
  }

  /**
   * Configure custom resolvers to route queries that match the resolver policy.
   * Unused with 'resolve_dns_through_cloudflare' or 'resolve_dns_internally'
   * settings. DNS queries get routed to the address closest to their origin. Only
   * valid when a rule's action set to 'resolve'. Settable only for `dns_resolver`
   * rules.
   */
  export interface DNSResolvers {
    ipv4?: Array<RulesAPI.DNSResolverSettingsV4Param>;

    ipv6?: Array<RulesAPI.DNSResolverSettingsV6Param>;
  }

  /**
   * Configure how Gateway Proxy traffic egresses. You can enable this setting for
   * rules with Egress actions and filters, or omit it to indicate local egress via
   * WARP IPs. Settable only for `egress` rules.
   */
  export interface Egress {
    /**
     * Specify the IPv4 address to use for egress.
     */
    ipv4?: string;

    /**
     * Specify the fallback IPv4 address to use for egress when the primary IPv4 fails.
     * Set '0.0.0.0' to indicate local egress via WARP IPs.
     */
    ipv4_fallback?: string;

    /**
     * Specify the IPv6 range to use for egress.
     */
    ipv6?: string;
  }

  /**
   * Send matching traffic to the supplied destination IP address and port. Settable
   * only for `l4` rules with the action set to `l4_override`.
   */
  export interface L4override {
    /**
     * Defines the IPv4 or IPv6 address.
     */
    ip?: string;

    /**
     * Defines a port number to use for TCP/UDP overrides.
     */
    port?: number;
  }

  /**
   * Configure a notification to display on the user's device when this rule matched.
   * Settable for all types of rules with the action set to `block`.
   */
  export interface NotificationSettings {
    /**
     * Enable notification.
     */
    enabled?: boolean;

    /**
     * Indicates whether to pass the context information as query parameters.
     */
    include_context?: boolean;

    /**
     * Customize the message shown in the notification.
     */
    msg?: string;

    /**
     * Defines an optional URL to direct users to additional information. If unset, the
     * notification opens a block page.
     */
    support_url?: string;
  }

  /**
   * Configure DLP payload logging. Settable only for `http` rules.
   */
  export interface PayloadLog {
    /**
     * Enable DLP payload logging for this rule.
     */
    enabled?: boolean;
  }

  /**
   * Configure settings that apply to quarantine rules. Settable only for `http`
   * rules.
   */
  export interface Quarantine {
    /**
     * Specify the types of files to sandbox.
     */
    file_types?: Array<
      | 'exe'
      | 'pdf'
      | 'doc'
      | 'docm'
      | 'docx'
      | 'rtf'
      | 'ppt'
      | 'pptx'
      | 'xls'
      | 'xlsm'
      | 'xlsx'
      | 'zip'
      | 'rar'
    >;
  }

  /**
   * Apply settings to redirect rules. Settable only for `http` rules with the action
   * set to `redirect`.
   */
  export interface Redirect {
    /**
     * Specify the URI to which the user is redirected.
     */
    target_uri: string;

    /**
     * Specify whether to pass the context information as query parameters.
     */
    include_context?: boolean;

    /**
     * Specify whether to append the path and query parameters from the original
     * request to target_uri.
     */
    preserve_path_and_query?: boolean;
  }

  /**
   * Configure to forward the query to the internal DNS service, passing the
   * specified 'view_id' as input. Not used when 'dns_resolvers' is specified or
   * 'resolve_dns_through_cloudflare' is set. Only valid when a rule's action set to
   * 'resolve'. Settable only for `dns_resolver` rules.
   */
  export interface ResolveDNSInternally {
    /**
     * Specify the fallback behavior to apply when the internal DNS response code
     * differs from 'NOERROR' or when the response data contains only CNAME records for
     * 'A' or 'AAAA' queries.
     */
    fallback?: 'none' | 'public_dns';

    /**
     * Specify the internal DNS view identifier to pass to the internal DNS service.
     */
    view_id?: string;
  }

  /**
   * Configure behavior when an upstream certificate is invalid or an SSL error
   * occurs. Settable only for `http` rules with the action set to `allow`.
   */
  export interface UntrustedCERT {
    /**
     * Defines the action performed when an untrusted certificate seen. The default
     * action an error with HTTP code 526.
     */
    action?: 'pass_through' | 'block' | 'error';
  }
}

/**
 * Defines the schedule for activating DNS policies. Settable only for `dns` and
 * `dns_resolver` rules.
 */
export interface Schedule {
  /**
   * Specify the time intervals when the rule is active on Fridays, in the increasing
   * order from 00:00-24:00. If this parameter omitted, the rule is deactivated on
   * Fridays. API returns a formatted version of this string, which may cause
   * Terraform drift if a unformatted value is used.
   */
  fri?: string;

  /**
   * Specify the time intervals when the rule is active on Mondays, in the increasing
   * order from 00:00-24:00(capped at maximum of 6 time splits). If this parameter
   * omitted, the rule is deactivated on Mondays. API returns a formatted version of
   * this string, which may cause Terraform drift if a unformatted value is used.
   */
  mon?: string;

  /**
   * Specify the time intervals when the rule is active on Saturdays, in the
   * increasing order from 00:00-24:00. If this parameter omitted, the rule is
   * deactivated on Saturdays. API returns a formatted version of this string, which
   * may cause Terraform drift if a unformatted value is used.
   */
  sat?: string;

  /**
   * Specify the time intervals when the rule is active on Sundays, in the increasing
   * order from 00:00-24:00. If this parameter omitted, the rule is deactivated on
   * Sundays. API returns a formatted version of this string, which may cause
   * Terraform drift if a unformatted value is used.
   */
  sun?: string;

  /**
   * Specify the time intervals when the rule is active on Thursdays, in the
   * increasing order from 00:00-24:00. If this parameter omitted, the rule is
   * deactivated on Thursdays. API returns a formatted version of this string, which
   * may cause Terraform drift if a unformatted value is used.
   */
  thu?: string;

  /**
   * Specify the time zone for rule evaluation. When a
   * [valid time zone city name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)
   * is provided, Gateway always uses the current time for that time zone. When this
   * parameter is omitted, Gateway uses the time zone determined from the user's IP
   * address. Colo time zone is used when the user's IP address does not resolve to a
   * location.
   */
  time_zone?: string;

  /**
   * Specify the time intervals when the rule is active on Tuesdays, in the
   * increasing order from 00:00-24:00. If this parameter omitted, the rule is
   * deactivated on Tuesdays. API returns a formatted version of this string, which
   * may cause Terraform drift if a unformatted value is used.
   */
  tue?: string;

  /**
   * Specify the time intervals when the rule is active on Wednesdays, in the
   * increasing order from 00:00-24:00. If this parameter omitted, the rule is
   * deactivated on Wednesdays. API returns a formatted version of this string, which
   * may cause Terraform drift if a unformatted value is used.
   */
  wed?: string;
}

/**
 * Defines the schedule for activating DNS policies. Settable only for `dns` and
 * `dns_resolver` rules.
 */
export interface ScheduleParam {
  /**
   * Specify the time intervals when the rule is active on Fridays, in the increasing
   * order from 00:00-24:00. If this parameter omitted, the rule is deactivated on
   * Fridays. API returns a formatted version of this string, which may cause
   * Terraform drift if a unformatted value is used.
   */
  fri?: string;

  /**
   * Specify the time intervals when the rule is active on Mondays, in the increasing
   * order from 00:00-24:00(capped at maximum of 6 time splits). If this parameter
   * omitted, the rule is deactivated on Mondays. API returns a formatted version of
   * this string, which may cause Terraform drift if a unformatted value is used.
   */
  mon?: string;

  /**
   * Specify the time intervals when the rule is active on Saturdays, in the
   * increasing order from 00:00-24:00. If this parameter omitted, the rule is
   * deactivated on Saturdays. API returns a formatted version of this string, which
   * may cause Terraform drift if a unformatted value is used.
   */
  sat?: string;

  /**
   * Specify the time intervals when the rule is active on Sundays, in the increasing
   * order from 00:00-24:00. If this parameter omitted, the rule is deactivated on
   * Sundays. API returns a formatted version of this string, which may cause
   * Terraform drift if a unformatted value is used.
   */
  sun?: string;

  /**
   * Specify the time intervals when the rule is active on Thursdays, in the
   * increasing order from 00:00-24:00. If this parameter omitted, the rule is
   * deactivated on Thursdays. API returns a formatted version of this string, which
   * may cause Terraform drift if a unformatted value is used.
   */
  thu?: string;

  /**
   * Specify the time zone for rule evaluation. When a
   * [valid time zone city name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)
   * is provided, Gateway always uses the current time for that time zone. When this
   * parameter is omitted, Gateway uses the time zone determined from the user's IP
   * address. Colo time zone is used when the user's IP address does not resolve to a
   * location.
   */
  time_zone?: string;

  /**
   * Specify the time intervals when the rule is active on Tuesdays, in the
   * increasing order from 00:00-24:00. If this parameter omitted, the rule is
   * deactivated on Tuesdays. API returns a formatted version of this string, which
   * may cause Terraform drift if a unformatted value is used.
   */
  tue?: string;

  /**
   * Specify the time intervals when the rule is active on Wednesdays, in the
   * increasing order from 00:00-24:00. If this parameter omitted, the rule is
   * deactivated on Wednesdays. API returns a formatted version of this string, which
   * may cause Terraform drift if a unformatted value is used.
   */
  wed?: string;
}

export type RuleDeleteResponse = unknown;

export interface RuleCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Specify the action to perform when the associated traffic, identity,
   * and device posture expressions either absent or evaluate to `true`.
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
    | 'resolve'
    | 'quarantine'
    | 'redirect';

  /**
   * Body param: Specify the rule name.
   */
  name: string;

  /**
   * Body param: Specify the rule description.
   */
  description?: string;

  /**
   * Body param: Specify the wirefilter expression used for device posture check. The
   * API automatically formats and sanitizes expressions before storing them. To
   * prevent Terraform state drift, use the formatted expression returned in the API
   * response.
   */
  device_posture?: string;

  /**
   * Body param: Specify whether the rule is enabled.
   */
  enabled?: boolean;

  /**
   * Body param: Defines the expiration time stamp and default duration of a DNS
   * policy. Takes precedence over the policy's `schedule` configuration, if any.
   * This does not apply to HTTP or network policies. Settable only for `dns` rules.
   */
  expiration?: RuleCreateParams.Expiration | null;

  /**
   * Body param: Specify the protocol or layer to evaluate the traffic, identity, and
   * device posture expressions.
   */
  filters?: Array<GatewayFilterParam>;

  /**
   * Body param: Specify the wirefilter expression used for identity matching. The
   * API automatically formats and sanitizes expressions before storing them. To
   * prevent Terraform state drift, use the formatted expression returned in the API
   * response.
   */
  identity?: string;

  /**
   * Body param: Set the order of your rules. Lower values indicate higher
   * precedence. At each processing phase, evaluate applicable rules in ascending
   * order of this value. Refer to
   * [Order of enforcement](http://developers.cloudflare.com/learning-paths/secure-internet-traffic/understand-policies/order-of-enforcement/#manage-precedence-with-terraform)
   * to manage precedence via Terraform.
   */
  precedence?: number;

  /**
   * Body param: Set settings related to this rule. Each setting is only valid for
   * specific rule types and can only be used with the appropriate selectors. If
   * Terraform drift is observed in these setting values, verify that the setting is
   * supported for the given rule type and that the API response reflects the
   * requested value. If the API response returns sanitized or modified values that
   * differ from the request, use the API-provided values in Terraform to ensure
   * consistency.
   */
  rule_settings?: RuleSettingParam;

  /**
   * Body param: Defines the schedule for activating DNS policies. Settable only for
   * `dns` and `dns_resolver` rules.
   */
  schedule?: ScheduleParam | null;

  /**
   * Body param: Specify the wirefilter expression used for traffic matching. The API
   * automatically formats and sanitizes expressions before storing them. To prevent
   * Terraform state drift, use the formatted expression returned in the API
   * response.
   */
  traffic?: string;
}

export namespace RuleCreateParams {
  /**
   * Defines the expiration time stamp and default duration of a DNS policy. Takes
   * precedence over the policy's `schedule` configuration, if any. This does not
   * apply to HTTP or network policies. Settable only for `dns` rules.
   */
  export interface Expiration {
    /**
     * Show the timestamp when the policy expires and stops applying. The value must
     * follow RFC 3339 and include a UTC offset. The system accepts non-zero offsets
     * but converts them to the equivalent UTC+00:00 value and returns timestamps with
     * a trailing Z. Expiration policies ignore client timezones and expire globally at
     * the specified expires_at time.
     */
    expires_at: string;

    /**
     * Defines the default duration a policy active in minutes. Must set in order to
     * use the `reset_expiration` endpoint on this rule.
     */
    duration?: number;
  }
}

export interface RuleUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Specify the action to perform when the associated traffic, identity,
   * and device posture expressions either absent or evaluate to `true`.
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
    | 'resolve'
    | 'quarantine'
    | 'redirect';

  /**
   * Body param: Specify the rule name.
   */
  name: string;

  /**
   * Body param: Specify the rule description.
   */
  description?: string;

  /**
   * Body param: Specify the wirefilter expression used for device posture check. The
   * API automatically formats and sanitizes expressions before storing them. To
   * prevent Terraform state drift, use the formatted expression returned in the API
   * response.
   */
  device_posture?: string;

  /**
   * Body param: Specify whether the rule is enabled.
   */
  enabled?: boolean;

  /**
   * Body param: Defines the expiration time stamp and default duration of a DNS
   * policy. Takes precedence over the policy's `schedule` configuration, if any.
   * This does not apply to HTTP or network policies. Settable only for `dns` rules.
   */
  expiration?: RuleUpdateParams.Expiration | null;

  /**
   * Body param: Specify the protocol or layer to evaluate the traffic, identity, and
   * device posture expressions.
   */
  filters?: Array<GatewayFilterParam>;

  /**
   * Body param: Specify the wirefilter expression used for identity matching. The
   * API automatically formats and sanitizes expressions before storing them. To
   * prevent Terraform state drift, use the formatted expression returned in the API
   * response.
   */
  identity?: string;

  /**
   * Body param: Set the order of your rules. Lower values indicate higher
   * precedence. At each processing phase, evaluate applicable rules in ascending
   * order of this value. Refer to
   * [Order of enforcement](http://developers.cloudflare.com/learning-paths/secure-internet-traffic/understand-policies/order-of-enforcement/#manage-precedence-with-terraform)
   * to manage precedence via Terraform.
   */
  precedence?: number;

  /**
   * Body param: Set settings related to this rule. Each setting is only valid for
   * specific rule types and can only be used with the appropriate selectors. If
   * Terraform drift is observed in these setting values, verify that the setting is
   * supported for the given rule type and that the API response reflects the
   * requested value. If the API response returns sanitized or modified values that
   * differ from the request, use the API-provided values in Terraform to ensure
   * consistency.
   */
  rule_settings?: RuleSettingParam;

  /**
   * Body param: Defines the schedule for activating DNS policies. Settable only for
   * `dns` and `dns_resolver` rules.
   */
  schedule?: ScheduleParam | null;

  /**
   * Body param: Specify the wirefilter expression used for traffic matching. The API
   * automatically formats and sanitizes expressions before storing them. To prevent
   * Terraform state drift, use the formatted expression returned in the API
   * response.
   */
  traffic?: string;
}

export namespace RuleUpdateParams {
  /**
   * Defines the expiration time stamp and default duration of a DNS policy. Takes
   * precedence over the policy's `schedule` configuration, if any. This does not
   * apply to HTTP or network policies. Settable only for `dns` rules.
   */
  export interface Expiration {
    /**
     * Show the timestamp when the policy expires and stops applying. The value must
     * follow RFC 3339 and include a UTC offset. The system accepts non-zero offsets
     * but converts them to the equivalent UTC+00:00 value and returns timestamps with
     * a trailing Z. Expiration policies ignore client timezones and expire globally at
     * the specified expires_at time.
     */
    expires_at: string;

    /**
     * Defines the default duration a policy active in minutes. Must set in order to
     * use the `reset_expiration` endpoint on this rule.
     */
    duration?: number;
  }
}

export interface RuleListParams {
  account_id: string;
}

export interface RuleDeleteParams {
  account_id: string;
}

export interface RuleGetParams {
  account_id: string;
}

export interface RuleResetExpirationParams {
  account_id: string;
}

Rules.GatewayRulesSinglePage = GatewayRulesSinglePage;

export declare namespace Rules {
  export {
    type DNSResolverSettingsV4 as DNSResolverSettingsV4,
    type DNSResolverSettingsV6 as DNSResolverSettingsV6,
    type GatewayFilter as GatewayFilter,
    type GatewayRule as GatewayRule,
    type RuleSetting as RuleSetting,
    type Schedule as Schedule,
    type RuleDeleteResponse as RuleDeleteResponse,
    GatewayRulesSinglePage as GatewayRulesSinglePage,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleGetParams as RuleGetParams,
    type RuleResetExpirationParams as RuleResetExpirationParams,
  };
}
