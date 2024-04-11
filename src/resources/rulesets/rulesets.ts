// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import { CloudflareError } from 'cloudflare/error';
import * as RulesAPI from 'cloudflare/resources/rulesets/rules';
import * as PhasesAPI from 'cloudflare/resources/rulesets/phases/phases';
import * as VersionsAPI from 'cloudflare/resources/rulesets/versions/versions';
import { SinglePage } from 'cloudflare/pagination';

export class Rulesets extends APIResource {
  phases: PhasesAPI.Phases = new PhasesAPI.Phases(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Creates a ruleset.
   */
  create(params: RulesetCreateParams, options?: Core.RequestOptions): Core.APIPromise<RulesetCreateResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/rulesets`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RulesetCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an account or zone ruleset, creating a new version.
   */
  update(
    rulesetId: string,
    params: RulesetUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetUpdateResponse> {
    const { account_id, zone_id, ...body } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RulesetUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches all rulesets.
   */
  list(
    params?: RulesetListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<RulesetsSinglePage, Ruleset>;
  list(options?: Core.RequestOptions): Core.PagePromise<RulesetsSinglePage, Ruleset>;
  list(
    params: RulesetListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<RulesetsSinglePage, Ruleset> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.getAPIList(
      `/${accountOrZone}/${accountOrZoneId}/rulesets`,
      RulesetsSinglePage,
      options,
    );
  }

  /**
   * Deletes all versions of an existing account or zone ruleset.
   */
  delete(
    rulesetId: string,
    params?: RulesetDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(rulesetId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    rulesetId: string,
    params: RulesetDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(rulesetId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return this._client.delete(`/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Fetches the latest version of an account or zone ruleset.
   */
  get(
    rulesetId: string,
    params?: RulesetGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetGetResponse>;
  get(rulesetId: string, options?: Core.RequestOptions): Core.APIPromise<RulesetGetResponse>;
  get(
    rulesetId: string,
    params: RulesetGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RulesetGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(rulesetId, {}, params);
    }
    const { account_id, zone_id } = params;
    if (!account_id && !zone_id) {
      throw new CloudflareError('You must provide either account_id or zone_id.');
    }
    if (account_id && zone_id) {
      throw new CloudflareError('You cannot provide both account_id and zone_id.');
    }
    const { accountOrZone, accountOrZoneId } =
      account_id ?
        {
          accountOrZone: 'accounts',
          accountOrZoneId: account_id,
        }
      : {
          accountOrZone: 'zones',
          accountOrZoneId: zone_id,
        };
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/rulesets/${rulesetId}`,
        options,
      ) as Core.APIPromise<{ result: RulesetGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class RulesetsSinglePage extends SinglePage<Ruleset> {}

/**
 * A ruleset object.
 */
export interface Ruleset {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The timestamp of when the ruleset was last modified.
   */
  last_updated: string;

  /**
   * The version of the ruleset.
   */
  version: string;

  /**
   * An informative description of the ruleset.
   */
  description?: string;

  /**
   * The kind of the ruleset.
   */
  kind?: 'managed' | 'custom' | 'root' | 'zone';

  /**
   * The human-readable name of the ruleset.
   */
  name?: string;

  /**
   * The phase of the ruleset.
   */
  phase?:
    | 'ddos_l4'
    | 'ddos_l7'
    | 'http_config_settings'
    | 'http_custom_errors'
    | 'http_log_custom_fields'
    | 'http_ratelimit'
    | 'http_request_cache_settings'
    | 'http_request_dynamic_redirect'
    | 'http_request_firewall_custom'
    | 'http_request_firewall_managed'
    | 'http_request_late_transform'
    | 'http_request_origin'
    | 'http_request_redirect'
    | 'http_request_sanitize'
    | 'http_request_sbfm'
    | 'http_request_select_configuration'
    | 'http_request_transform'
    | 'http_response_compression'
    | 'http_response_firewall_managed'
    | 'http_response_headers_transform'
    | 'magic_transit'
    | 'magic_transit_ids_managed'
    | 'magic_transit_managed';
}

/**
 * A ruleset object.
 */
export interface RulesetCreateResponse {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The kind of the ruleset.
   */
  kind: 'managed' | 'custom' | 'root' | 'zone';

  /**
   * The timestamp of when the ruleset was last modified.
   */
  last_updated: string;

  /**
   * The human-readable name of the ruleset.
   */
  name: string;

  /**
   * The phase of the ruleset.
   */
  phase:
    | 'ddos_l4'
    | 'ddos_l7'
    | 'http_config_settings'
    | 'http_custom_errors'
    | 'http_log_custom_fields'
    | 'http_ratelimit'
    | 'http_request_cache_settings'
    | 'http_request_dynamic_redirect'
    | 'http_request_firewall_custom'
    | 'http_request_firewall_managed'
    | 'http_request_late_transform'
    | 'http_request_origin'
    | 'http_request_redirect'
    | 'http_request_sanitize'
    | 'http_request_sbfm'
    | 'http_request_select_configuration'
    | 'http_request_transform'
    | 'http_response_compression'
    | 'http_response_firewall_managed'
    | 'http_response_headers_transform'
    | 'magic_transit'
    | 'magic_transit_ids_managed'
    | 'magic_transit_managed';

  /**
   * The list of rules in the ruleset.
   */
  rules: Array<
    | RulesAPI.BlockRule
    | RulesetCreateResponse.RulesetsChallengeRule
    | RulesetCreateResponse.RulesetsCompressResponseRule
    | RulesAPI.ExecuteRule
    | RulesetCreateResponse.RulesetsJsChallengeRule
    | RulesAPI.LogRule
    | RulesetCreateResponse.RulesetsManagedChallengeRule
    | RulesetCreateResponse.RulesetsRedirectRule
    | RulesetCreateResponse.RulesetsRewriteRule
    | RulesetCreateResponse.RulesetsRouteRule
    | RulesetCreateResponse.RulesetsScoreRule
    | RulesetCreateResponse.RulesetsServeErrorRule
    | RulesetCreateResponse.RulesetsSetConfigRule
    | RulesAPI.SkipRule
    | RulesetCreateResponse.RulesetsSetCacheSettingsRule
  >;

  /**
   * The version of the ruleset.
   */
  version: string;

  /**
   * An informative description of the ruleset.
   */
  description?: string;
}

export namespace RulesetCreateResponse {
  export interface RulesetsChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsCompressResponseRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'compress_response';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsCompressResponseRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsCompressResponseRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Custom order for compression algorithms.
       */
      algorithms?: Array<ActionParameters.Algorithm>;
    }

    export namespace ActionParameters {
      /**
       * Compression algorithm to enable.
       */
      export interface Algorithm {
        /**
         * Name of compression algorithm to enable.
         */
        name?: 'none' | 'auto' | 'default' | 'gzip' | 'brotli';
      }
    }
  }

  export interface RulesetsJsChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'js_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsManagedChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'managed_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsRedirectRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'redirect';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRedirectRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRedirectRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      from_list?: ActionParameters.FromList;

      /**
       * Serve a redirect based on the request properties.
       */
      from_value?: ActionParameters.FromValue;
    }

    export namespace ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      export interface FromList {
        /**
         * Expression that evaluates to the list lookup key.
         */
        key?: string;

        /**
         * The name of the list to match against.
         */
        name?: string;
      }

      /**
       * Serve a redirect based on the request properties.
       */
      export interface FromValue {
        /**
         * Keep the query string of the original request.
         */
        preserve_query_string?: boolean;

        /**
         * The status code to be used for the redirect.
         */
        status_code?: 301 | 302 | 303 | 307 | 308;

        /**
         * The URL to redirect the request to.
         */
        target_url?: FromValue.StaticURLRedirect | FromValue.DynamicURLRedirect;
      }

      export namespace FromValue {
        export interface StaticURLRedirect {
          /**
           * The URL to redirect the request to.
           */
          value?: string;
        }

        export interface DynamicURLRedirect {
          /**
           * An expression to evaluate to get the URL to redirect the request to.
           */
          expression?: string;
        }
      }
    }
  }

  export interface RulesetsRewriteRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'rewrite';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRewriteRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRewriteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Map of request headers to modify.
       */
      headers?: Record<
        string,
        ActionParameters.RemoveHeader | ActionParameters.StaticHeader | ActionParameters.DynamicHeader
      >;

      /**
       * URI to rewrite the request to.
       */
      uri?: ActionParameters.URI;
    }

    export namespace ActionParameters {
      /**
       * Remove the header from the request.
       */
      export interface RemoveHeader {
        operation: 'remove';
      }

      /**
       * Set a request header with a static value.
       */
      export interface StaticHeader {
        operation: 'set';

        /**
         * Static value for the header.
         */
        value: string;
      }

      /**
       * Set a request header with a dynamic value.
       */
      export interface DynamicHeader {
        /**
         * Expression for the header value.
         */
        expression: string;

        operation: 'set';
      }

      /**
       * URI to rewrite the request to.
       */
      export interface URI {
        /**
         * Path portion rewrite.
         */
        path?: URI.StaticValue | URI.DynamicValue;

        /**
         * Query portion rewrite.
         */
        query?: URI.StaticValue | URI.DynamicValue;
      }

      export namespace URI {
        export interface StaticValue {
          /**
           * Predefined replacement value.
           */
          value: string;
        }

        export interface DynamicValue {
          /**
           * Expression to evaluate for the replacement value.
           */
          expression: string;
        }

        export interface StaticValue {
          /**
           * Predefined replacement value.
           */
          value: string;
        }

        export interface DynamicValue {
          /**
           * Expression to evaluate for the replacement value.
           */
          expression: string;
        }
      }
    }
  }

  export interface RulesetsRouteRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'route';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRouteRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRouteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Rewrite the HTTP Host header.
       */
      host_header?: string;

      /**
       * Override the IP/TCP destination.
       */
      origin?: ActionParameters.Origin;

      /**
       * Override the Server Name Indication (SNI).
       */
      sni?: ActionParameters.Sni;
    }

    export namespace ActionParameters {
      /**
       * Override the IP/TCP destination.
       */
      export interface Origin {
        /**
         * Override the resolved hostname.
         */
        host?: string;

        /**
         * Override the destination port.
         */
        port?: number;
      }

      /**
       * Override the Server Name Indication (SNI).
       */
      export interface Sni {
        /**
         * The SNI override.
         */
        value: string;
      }
    }
  }

  export interface RulesetsScoreRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'score';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsScoreRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsScoreRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Increment contains the delta to change the score and can be either positive or
       * negative.
       */
      increment?: number;
    }
  }

  export interface RulesetsServeErrorRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'serve_error';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsServeErrorRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsServeErrorRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Error response content.
       */
      content?: string;

      /**
       * Content-type header to set with the response.
       */
      content_type?: 'application/json' | 'text/xml' | 'text/plain' | 'text/html';

      /**
       * The status code to use for the error.
       */
      status_code?: number;
    }
  }

  export interface RulesetsSetConfigRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_config';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSetConfigRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetConfigRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Turn on or off Automatic HTTPS Rewrites.
       */
      automatic_https_rewrites?: boolean;

      /**
       * Select which file extensions to minify automatically.
       */
      autominify?: ActionParameters.Autominify;

      /**
       * Turn on or off Browser Integrity Check.
       */
      bic?: boolean;

      /**
       * Turn off all active Cloudflare Apps.
       */
      disable_apps?: boolean;

      /**
       * Turn off Zaraz.
       */
      disable_zaraz?: boolean;

      /**
       * Turn on or off Email Obfuscation.
       */
      email_obfuscation?: boolean;

      /**
       * Turn on or off the Hotlink Protection.
       */
      hotlink_protection?: boolean;

      /**
       * Turn on or off Mirage.
       */
      mirage?: boolean;

      /**
       * Turn on or off Opportunistic Encryption.
       */
      opportunistic_encryption?: boolean;

      /**
       * Configure the Polish level.
       */
      polish?: 'off' | 'lossless' | 'lossy';

      /**
       * Turn on or off Rocket Loader
       */
      rocket_loader?: boolean;

      /**
       * Configure the Security Level.
       */
      security_level?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

      /**
       * Turn on or off Server Side Excludes.
       */
      server_side_excludes?: boolean;

      /**
       * Configure the SSL level.
       */
      ssl?: 'off' | 'flexible' | 'full' | 'strict' | 'origin_pull';

      /**
       * Turn on or off Signed Exchanges (SXG).
       */
      sxg?: boolean;
    }

    export namespace ActionParameters {
      /**
       * Select which file extensions to minify automatically.
       */
      export interface Autominify {
        /**
         * Minify CSS files.
         */
        css?: boolean;

        /**
         * Minify HTML files.
         */
        html?: boolean;

        /**
         * Minify JS files.
         */
        js?: boolean;
      }
    }
  }

  export interface RulesetsSetCacheSettingsRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_cache_settings';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSetCacheSettingsRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetCacheSettingsRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * List of additional ports that caching can be enabled on.
       */
      additional_cacheable_ports?: Array<number>;

      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      browser_ttl?: ActionParameters.BrowserTTL;

      /**
       * Mark whether the request’s response from origin is eligible for caching. Caching
       * itself will still depend on the cache-control header and your other caching
       * configurations.
       */
      cache?: boolean;

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      cache_key?: ActionParameters.CacheKey;

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      cache_reserve?: ActionParameters.CacheReserve;

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      edge_ttl?: ActionParameters.EdgeTTL;

      /**
       * When enabled, Cloudflare will aim to strictly adhere to RFC 7234.
       */
      origin_cache_control?: boolean;

      /**
       * Generate Cloudflare error pages from issues sent from the origin server. When
       * on, error pages will trigger for issues from the origin
       */
      origin_error_page_passthru?: boolean;

      /**
       * Define a timeout value between two successive read operations to your origin
       * server. Historically, the timeout value between two read options from Cloudflare
       * to an origin server is 100 seconds. If you are attempting to reduce HTTP 524
       * errors because of timeouts from an origin server, try increasing this timeout
       * value.
       */
      read_timeout?: number;

      /**
       * Specify whether or not Cloudflare should respect strong ETag (entity tag)
       * headers. When off, Cloudflare converts strong ETag headers to weak ETag headers.
       */
      respect_strong_etags?: boolean;

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      serve_stale?: ActionParameters.ServeStale;
    }

    export namespace ActionParameters {
      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      export interface BrowserTTL {
        /**
         * Determines which browser ttl mode to use.
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default?: number;
      }

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      export interface CacheKey {
        /**
         * Separate cached content based on the visitor’s device type
         */
        cache_by_device_type?: boolean;

        /**
         * Protect from web cache deception attacks while allowing static assets to be
         * cached
         */
        cache_deception_armor?: boolean;

        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        custom_key?: CacheKey.CustomKey;

        /**
         * Treat requests with the same query parameters the same, regardless of the order
         * those query parameters are in. A value of true ignores the query strings' order.
         */
        ignore_query_strings_order?: boolean;
      }

      export namespace CacheKey {
        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        export interface CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          cookie?: CustomKey.Cookie;

          /**
           * The header names and values to include in building the cache key.
           */
          header?: CustomKey.Header;

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          host?: CustomKey.Host;

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          query_string?: CustomKey.QueryString;

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          user?: CustomKey.User;
        }

        export namespace CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          export interface Cookie {
            /**
             * Checks for the presence of these cookie names. The presence of these cookies is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * Include these cookies' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * The header names and values to include in building the cache key.
           */
          export interface Header {
            /**
             * Checks for the presence of these header names. The presence of these headers is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * Whether or not to include the origin header. A value of true will exclude the
             * origin header in the cache key.
             */
            exclude_origin?: boolean;

            /**
             * Include these headers' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          export interface Host {
            /**
             * Use the resolved host in the cache key. A value of true will use the resolved
             * host, while a value or false will use the original host.
             */
            resolved?: boolean;
          }

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          export interface QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            exclude?: QueryString.Exclude;

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            include?: QueryString.Include;
          }

          export namespace QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            export interface Exclude {
              /**
               * Exclude all query string parameters from use in building the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters NOT used to build the cache key. All
               * parameters present in the request but missing in this list will be used to build
               * the cache key.
               */
              list?: Array<string>;
            }

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            export interface Include {
              /**
               * Use all query string parameters in the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters used to build the cache key.
               */
              list?: Array<string>;
            }
          }

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          export interface User {
            /**
             * Use the user agent's device type in the cache key.
             */
            device_type?: boolean;

            /**
             * Use the user agents's country in the cache key.
             */
            geo?: boolean;

            /**
             * Use the user agent's language in the cache key.
             */
            lang?: boolean;
          }
        }
      }

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      export interface CacheReserve {
        /**
         * Determines whether cache reserve is enabled. If this is true and a request meets
         * eligibility criteria, Cloudflare will write the resource to cache reserve.
         */
        eligible: boolean;

        /**
         * The minimum file size eligible for store in cache reserve.
         */
        min_file_size: number;
      }

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      export interface EdgeTTL {
        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default: number;

        /**
         * edge ttl options
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * List of single status codes, or status code ranges to apply the selected mode
         */
        status_code_ttl: Array<EdgeTTL.StatusCodeTTL>;
      }

      export namespace EdgeTTL {
        /**
         * Specify how long Cloudflare should cache the response based on the status code
         * from the origin. Can be a single status code or a range or status codes
         */
        export interface StatusCodeTTL {
          /**
           * Time to cache a response (in seconds). A value of 0 is equivalent to setting the
           * Cache-Control header with the value "no-cache". A value of -1 is equivalent to
           * setting Cache-Control header with the value of "no-store".
           */
          value: number;

          /**
           * The range of status codes used to apply the selected mode.
           */
          status_code_range?: StatusCodeTTL.StatusCodeRange;

          /**
           * Set the ttl for responses with this specific status code
           */
          status_code_value?: number;
        }

        export namespace StatusCodeTTL {
          /**
           * The range of status codes used to apply the selected mode.
           */
          export interface StatusCodeRange {
            /**
             * response status code lower bound
             */
            from: number;

            /**
             * response status code upper bound
             */
            to: number;
          }
        }
      }

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      export interface ServeStale {
        /**
         * Defines whether Cloudflare should serve stale content while updating. If true,
         * Cloudflare will not serve stale content while getting the latest content from
         * the origin.
         */
        disable_stale_while_updating: boolean;
      }
    }
  }
}

/**
 * A ruleset object.
 */
export interface RulesetUpdateResponse {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The kind of the ruleset.
   */
  kind: 'managed' | 'custom' | 'root' | 'zone';

  /**
   * The timestamp of when the ruleset was last modified.
   */
  last_updated: string;

  /**
   * The human-readable name of the ruleset.
   */
  name: string;

  /**
   * The phase of the ruleset.
   */
  phase:
    | 'ddos_l4'
    | 'ddos_l7'
    | 'http_config_settings'
    | 'http_custom_errors'
    | 'http_log_custom_fields'
    | 'http_ratelimit'
    | 'http_request_cache_settings'
    | 'http_request_dynamic_redirect'
    | 'http_request_firewall_custom'
    | 'http_request_firewall_managed'
    | 'http_request_late_transform'
    | 'http_request_origin'
    | 'http_request_redirect'
    | 'http_request_sanitize'
    | 'http_request_sbfm'
    | 'http_request_select_configuration'
    | 'http_request_transform'
    | 'http_response_compression'
    | 'http_response_firewall_managed'
    | 'http_response_headers_transform'
    | 'magic_transit'
    | 'magic_transit_ids_managed'
    | 'magic_transit_managed';

  /**
   * The list of rules in the ruleset.
   */
  rules: Array<
    | RulesAPI.BlockRule
    | RulesetUpdateResponse.RulesetsChallengeRule
    | RulesetUpdateResponse.RulesetsCompressResponseRule
    | RulesAPI.ExecuteRule
    | RulesetUpdateResponse.RulesetsJsChallengeRule
    | RulesAPI.LogRule
    | RulesetUpdateResponse.RulesetsManagedChallengeRule
    | RulesetUpdateResponse.RulesetsRedirectRule
    | RulesetUpdateResponse.RulesetsRewriteRule
    | RulesetUpdateResponse.RulesetsRouteRule
    | RulesetUpdateResponse.RulesetsScoreRule
    | RulesetUpdateResponse.RulesetsServeErrorRule
    | RulesetUpdateResponse.RulesetsSetConfigRule
    | RulesAPI.SkipRule
    | RulesetUpdateResponse.RulesetsSetCacheSettingsRule
  >;

  /**
   * The version of the ruleset.
   */
  version: string;

  /**
   * An informative description of the ruleset.
   */
  description?: string;
}

export namespace RulesetUpdateResponse {
  export interface RulesetsChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsCompressResponseRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'compress_response';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsCompressResponseRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsCompressResponseRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Custom order for compression algorithms.
       */
      algorithms?: Array<ActionParameters.Algorithm>;
    }

    export namespace ActionParameters {
      /**
       * Compression algorithm to enable.
       */
      export interface Algorithm {
        /**
         * Name of compression algorithm to enable.
         */
        name?: 'none' | 'auto' | 'default' | 'gzip' | 'brotli';
      }
    }
  }

  export interface RulesetsJsChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'js_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsManagedChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'managed_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsRedirectRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'redirect';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRedirectRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRedirectRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      from_list?: ActionParameters.FromList;

      /**
       * Serve a redirect based on the request properties.
       */
      from_value?: ActionParameters.FromValue;
    }

    export namespace ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      export interface FromList {
        /**
         * Expression that evaluates to the list lookup key.
         */
        key?: string;

        /**
         * The name of the list to match against.
         */
        name?: string;
      }

      /**
       * Serve a redirect based on the request properties.
       */
      export interface FromValue {
        /**
         * Keep the query string of the original request.
         */
        preserve_query_string?: boolean;

        /**
         * The status code to be used for the redirect.
         */
        status_code?: 301 | 302 | 303 | 307 | 308;

        /**
         * The URL to redirect the request to.
         */
        target_url?: FromValue.StaticURLRedirect | FromValue.DynamicURLRedirect;
      }

      export namespace FromValue {
        export interface StaticURLRedirect {
          /**
           * The URL to redirect the request to.
           */
          value?: string;
        }

        export interface DynamicURLRedirect {
          /**
           * An expression to evaluate to get the URL to redirect the request to.
           */
          expression?: string;
        }
      }
    }
  }

  export interface RulesetsRewriteRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'rewrite';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRewriteRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRewriteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Map of request headers to modify.
       */
      headers?: Record<
        string,
        ActionParameters.RemoveHeader | ActionParameters.StaticHeader | ActionParameters.DynamicHeader
      >;

      /**
       * URI to rewrite the request to.
       */
      uri?: ActionParameters.URI;
    }

    export namespace ActionParameters {
      /**
       * Remove the header from the request.
       */
      export interface RemoveHeader {
        operation: 'remove';
      }

      /**
       * Set a request header with a static value.
       */
      export interface StaticHeader {
        operation: 'set';

        /**
         * Static value for the header.
         */
        value: string;
      }

      /**
       * Set a request header with a dynamic value.
       */
      export interface DynamicHeader {
        /**
         * Expression for the header value.
         */
        expression: string;

        operation: 'set';
      }

      /**
       * URI to rewrite the request to.
       */
      export interface URI {
        /**
         * Path portion rewrite.
         */
        path?: URI.StaticValue | URI.DynamicValue;

        /**
         * Query portion rewrite.
         */
        query?: URI.StaticValue | URI.DynamicValue;
      }

      export namespace URI {
        export interface StaticValue {
          /**
           * Predefined replacement value.
           */
          value: string;
        }

        export interface DynamicValue {
          /**
           * Expression to evaluate for the replacement value.
           */
          expression: string;
        }

        export interface StaticValue {
          /**
           * Predefined replacement value.
           */
          value: string;
        }

        export interface DynamicValue {
          /**
           * Expression to evaluate for the replacement value.
           */
          expression: string;
        }
      }
    }
  }

  export interface RulesetsRouteRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'route';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRouteRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRouteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Rewrite the HTTP Host header.
       */
      host_header?: string;

      /**
       * Override the IP/TCP destination.
       */
      origin?: ActionParameters.Origin;

      /**
       * Override the Server Name Indication (SNI).
       */
      sni?: ActionParameters.Sni;
    }

    export namespace ActionParameters {
      /**
       * Override the IP/TCP destination.
       */
      export interface Origin {
        /**
         * Override the resolved hostname.
         */
        host?: string;

        /**
         * Override the destination port.
         */
        port?: number;
      }

      /**
       * Override the Server Name Indication (SNI).
       */
      export interface Sni {
        /**
         * The SNI override.
         */
        value: string;
      }
    }
  }

  export interface RulesetsScoreRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'score';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsScoreRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsScoreRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Increment contains the delta to change the score and can be either positive or
       * negative.
       */
      increment?: number;
    }
  }

  export interface RulesetsServeErrorRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'serve_error';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsServeErrorRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsServeErrorRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Error response content.
       */
      content?: string;

      /**
       * Content-type header to set with the response.
       */
      content_type?: 'application/json' | 'text/xml' | 'text/plain' | 'text/html';

      /**
       * The status code to use for the error.
       */
      status_code?: number;
    }
  }

  export interface RulesetsSetConfigRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_config';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSetConfigRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetConfigRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Turn on or off Automatic HTTPS Rewrites.
       */
      automatic_https_rewrites?: boolean;

      /**
       * Select which file extensions to minify automatically.
       */
      autominify?: ActionParameters.Autominify;

      /**
       * Turn on or off Browser Integrity Check.
       */
      bic?: boolean;

      /**
       * Turn off all active Cloudflare Apps.
       */
      disable_apps?: boolean;

      /**
       * Turn off Zaraz.
       */
      disable_zaraz?: boolean;

      /**
       * Turn on or off Email Obfuscation.
       */
      email_obfuscation?: boolean;

      /**
       * Turn on or off the Hotlink Protection.
       */
      hotlink_protection?: boolean;

      /**
       * Turn on or off Mirage.
       */
      mirage?: boolean;

      /**
       * Turn on or off Opportunistic Encryption.
       */
      opportunistic_encryption?: boolean;

      /**
       * Configure the Polish level.
       */
      polish?: 'off' | 'lossless' | 'lossy';

      /**
       * Turn on or off Rocket Loader
       */
      rocket_loader?: boolean;

      /**
       * Configure the Security Level.
       */
      security_level?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

      /**
       * Turn on or off Server Side Excludes.
       */
      server_side_excludes?: boolean;

      /**
       * Configure the SSL level.
       */
      ssl?: 'off' | 'flexible' | 'full' | 'strict' | 'origin_pull';

      /**
       * Turn on or off Signed Exchanges (SXG).
       */
      sxg?: boolean;
    }

    export namespace ActionParameters {
      /**
       * Select which file extensions to minify automatically.
       */
      export interface Autominify {
        /**
         * Minify CSS files.
         */
        css?: boolean;

        /**
         * Minify HTML files.
         */
        html?: boolean;

        /**
         * Minify JS files.
         */
        js?: boolean;
      }
    }
  }

  export interface RulesetsSetCacheSettingsRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_cache_settings';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSetCacheSettingsRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetCacheSettingsRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * List of additional ports that caching can be enabled on.
       */
      additional_cacheable_ports?: Array<number>;

      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      browser_ttl?: ActionParameters.BrowserTTL;

      /**
       * Mark whether the request’s response from origin is eligible for caching. Caching
       * itself will still depend on the cache-control header and your other caching
       * configurations.
       */
      cache?: boolean;

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      cache_key?: ActionParameters.CacheKey;

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      cache_reserve?: ActionParameters.CacheReserve;

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      edge_ttl?: ActionParameters.EdgeTTL;

      /**
       * When enabled, Cloudflare will aim to strictly adhere to RFC 7234.
       */
      origin_cache_control?: boolean;

      /**
       * Generate Cloudflare error pages from issues sent from the origin server. When
       * on, error pages will trigger for issues from the origin
       */
      origin_error_page_passthru?: boolean;

      /**
       * Define a timeout value between two successive read operations to your origin
       * server. Historically, the timeout value between two read options from Cloudflare
       * to an origin server is 100 seconds. If you are attempting to reduce HTTP 524
       * errors because of timeouts from an origin server, try increasing this timeout
       * value.
       */
      read_timeout?: number;

      /**
       * Specify whether or not Cloudflare should respect strong ETag (entity tag)
       * headers. When off, Cloudflare converts strong ETag headers to weak ETag headers.
       */
      respect_strong_etags?: boolean;

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      serve_stale?: ActionParameters.ServeStale;
    }

    export namespace ActionParameters {
      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      export interface BrowserTTL {
        /**
         * Determines which browser ttl mode to use.
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default?: number;
      }

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      export interface CacheKey {
        /**
         * Separate cached content based on the visitor’s device type
         */
        cache_by_device_type?: boolean;

        /**
         * Protect from web cache deception attacks while allowing static assets to be
         * cached
         */
        cache_deception_armor?: boolean;

        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        custom_key?: CacheKey.CustomKey;

        /**
         * Treat requests with the same query parameters the same, regardless of the order
         * those query parameters are in. A value of true ignores the query strings' order.
         */
        ignore_query_strings_order?: boolean;
      }

      export namespace CacheKey {
        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        export interface CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          cookie?: CustomKey.Cookie;

          /**
           * The header names and values to include in building the cache key.
           */
          header?: CustomKey.Header;

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          host?: CustomKey.Host;

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          query_string?: CustomKey.QueryString;

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          user?: CustomKey.User;
        }

        export namespace CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          export interface Cookie {
            /**
             * Checks for the presence of these cookie names. The presence of these cookies is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * Include these cookies' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * The header names and values to include in building the cache key.
           */
          export interface Header {
            /**
             * Checks for the presence of these header names. The presence of these headers is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * Whether or not to include the origin header. A value of true will exclude the
             * origin header in the cache key.
             */
            exclude_origin?: boolean;

            /**
             * Include these headers' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          export interface Host {
            /**
             * Use the resolved host in the cache key. A value of true will use the resolved
             * host, while a value or false will use the original host.
             */
            resolved?: boolean;
          }

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          export interface QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            exclude?: QueryString.Exclude;

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            include?: QueryString.Include;
          }

          export namespace QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            export interface Exclude {
              /**
               * Exclude all query string parameters from use in building the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters NOT used to build the cache key. All
               * parameters present in the request but missing in this list will be used to build
               * the cache key.
               */
              list?: Array<string>;
            }

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            export interface Include {
              /**
               * Use all query string parameters in the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters used to build the cache key.
               */
              list?: Array<string>;
            }
          }

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          export interface User {
            /**
             * Use the user agent's device type in the cache key.
             */
            device_type?: boolean;

            /**
             * Use the user agents's country in the cache key.
             */
            geo?: boolean;

            /**
             * Use the user agent's language in the cache key.
             */
            lang?: boolean;
          }
        }
      }

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      export interface CacheReserve {
        /**
         * Determines whether cache reserve is enabled. If this is true and a request meets
         * eligibility criteria, Cloudflare will write the resource to cache reserve.
         */
        eligible: boolean;

        /**
         * The minimum file size eligible for store in cache reserve.
         */
        min_file_size: number;
      }

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      export interface EdgeTTL {
        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default: number;

        /**
         * edge ttl options
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * List of single status codes, or status code ranges to apply the selected mode
         */
        status_code_ttl: Array<EdgeTTL.StatusCodeTTL>;
      }

      export namespace EdgeTTL {
        /**
         * Specify how long Cloudflare should cache the response based on the status code
         * from the origin. Can be a single status code or a range or status codes
         */
        export interface StatusCodeTTL {
          /**
           * Time to cache a response (in seconds). A value of 0 is equivalent to setting the
           * Cache-Control header with the value "no-cache". A value of -1 is equivalent to
           * setting Cache-Control header with the value of "no-store".
           */
          value: number;

          /**
           * The range of status codes used to apply the selected mode.
           */
          status_code_range?: StatusCodeTTL.StatusCodeRange;

          /**
           * Set the ttl for responses with this specific status code
           */
          status_code_value?: number;
        }

        export namespace StatusCodeTTL {
          /**
           * The range of status codes used to apply the selected mode.
           */
          export interface StatusCodeRange {
            /**
             * response status code lower bound
             */
            from: number;

            /**
             * response status code upper bound
             */
            to: number;
          }
        }
      }

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      export interface ServeStale {
        /**
         * Defines whether Cloudflare should serve stale content while updating. If true,
         * Cloudflare will not serve stale content while getting the latest content from
         * the origin.
         */
        disable_stale_while_updating: boolean;
      }
    }
  }
}

/**
 * A ruleset object.
 */
export interface RulesetGetResponse {
  /**
   * The unique ID of the ruleset.
   */
  id: string;

  /**
   * The kind of the ruleset.
   */
  kind: 'managed' | 'custom' | 'root' | 'zone';

  /**
   * The timestamp of when the ruleset was last modified.
   */
  last_updated: string;

  /**
   * The human-readable name of the ruleset.
   */
  name: string;

  /**
   * The phase of the ruleset.
   */
  phase:
    | 'ddos_l4'
    | 'ddos_l7'
    | 'http_config_settings'
    | 'http_custom_errors'
    | 'http_log_custom_fields'
    | 'http_ratelimit'
    | 'http_request_cache_settings'
    | 'http_request_dynamic_redirect'
    | 'http_request_firewall_custom'
    | 'http_request_firewall_managed'
    | 'http_request_late_transform'
    | 'http_request_origin'
    | 'http_request_redirect'
    | 'http_request_sanitize'
    | 'http_request_sbfm'
    | 'http_request_select_configuration'
    | 'http_request_transform'
    | 'http_response_compression'
    | 'http_response_firewall_managed'
    | 'http_response_headers_transform'
    | 'magic_transit'
    | 'magic_transit_ids_managed'
    | 'magic_transit_managed';

  /**
   * The list of rules in the ruleset.
   */
  rules: Array<
    | RulesAPI.BlockRule
    | RulesetGetResponse.RulesetsChallengeRule
    | RulesetGetResponse.RulesetsCompressResponseRule
    | RulesAPI.ExecuteRule
    | RulesetGetResponse.RulesetsJsChallengeRule
    | RulesAPI.LogRule
    | RulesetGetResponse.RulesetsManagedChallengeRule
    | RulesetGetResponse.RulesetsRedirectRule
    | RulesetGetResponse.RulesetsRewriteRule
    | RulesetGetResponse.RulesetsRouteRule
    | RulesetGetResponse.RulesetsScoreRule
    | RulesetGetResponse.RulesetsServeErrorRule
    | RulesetGetResponse.RulesetsSetConfigRule
    | RulesAPI.SkipRule
    | RulesetGetResponse.RulesetsSetCacheSettingsRule
  >;

  /**
   * The version of the ruleset.
   */
  version: string;

  /**
   * An informative description of the ruleset.
   */
  description?: string;
}

export namespace RulesetGetResponse {
  export interface RulesetsChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsCompressResponseRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'compress_response';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsCompressResponseRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsCompressResponseRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Custom order for compression algorithms.
       */
      algorithms?: Array<ActionParameters.Algorithm>;
    }

    export namespace ActionParameters {
      /**
       * Compression algorithm to enable.
       */
      export interface Algorithm {
        /**
         * Name of compression algorithm to enable.
         */
        name?: 'none' | 'auto' | 'default' | 'gzip' | 'brotli';
      }
    }
  }

  export interface RulesetsJsChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'js_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsManagedChallengeRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'managed_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsRedirectRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'redirect';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRedirectRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRedirectRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      from_list?: ActionParameters.FromList;

      /**
       * Serve a redirect based on the request properties.
       */
      from_value?: ActionParameters.FromValue;
    }

    export namespace ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      export interface FromList {
        /**
         * Expression that evaluates to the list lookup key.
         */
        key?: string;

        /**
         * The name of the list to match against.
         */
        name?: string;
      }

      /**
       * Serve a redirect based on the request properties.
       */
      export interface FromValue {
        /**
         * Keep the query string of the original request.
         */
        preserve_query_string?: boolean;

        /**
         * The status code to be used for the redirect.
         */
        status_code?: 301 | 302 | 303 | 307 | 308;

        /**
         * The URL to redirect the request to.
         */
        target_url?: FromValue.StaticURLRedirect | FromValue.DynamicURLRedirect;
      }

      export namespace FromValue {
        export interface StaticURLRedirect {
          /**
           * The URL to redirect the request to.
           */
          value?: string;
        }

        export interface DynamicURLRedirect {
          /**
           * An expression to evaluate to get the URL to redirect the request to.
           */
          expression?: string;
        }
      }
    }
  }

  export interface RulesetsRewriteRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'rewrite';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRewriteRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRewriteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Map of request headers to modify.
       */
      headers?: Record<
        string,
        ActionParameters.RemoveHeader | ActionParameters.StaticHeader | ActionParameters.DynamicHeader
      >;

      /**
       * URI to rewrite the request to.
       */
      uri?: ActionParameters.URI;
    }

    export namespace ActionParameters {
      /**
       * Remove the header from the request.
       */
      export interface RemoveHeader {
        operation: 'remove';
      }

      /**
       * Set a request header with a static value.
       */
      export interface StaticHeader {
        operation: 'set';

        /**
         * Static value for the header.
         */
        value: string;
      }

      /**
       * Set a request header with a dynamic value.
       */
      export interface DynamicHeader {
        /**
         * Expression for the header value.
         */
        expression: string;

        operation: 'set';
      }

      /**
       * URI to rewrite the request to.
       */
      export interface URI {
        /**
         * Path portion rewrite.
         */
        path?: URI.StaticValue | URI.DynamicValue;

        /**
         * Query portion rewrite.
         */
        query?: URI.StaticValue | URI.DynamicValue;
      }

      export namespace URI {
        export interface StaticValue {
          /**
           * Predefined replacement value.
           */
          value: string;
        }

        export interface DynamicValue {
          /**
           * Expression to evaluate for the replacement value.
           */
          expression: string;
        }

        export interface StaticValue {
          /**
           * Predefined replacement value.
           */
          value: string;
        }

        export interface DynamicValue {
          /**
           * Expression to evaluate for the replacement value.
           */
          expression: string;
        }
      }
    }
  }

  export interface RulesetsRouteRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'route';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRouteRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRouteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Rewrite the HTTP Host header.
       */
      host_header?: string;

      /**
       * Override the IP/TCP destination.
       */
      origin?: ActionParameters.Origin;

      /**
       * Override the Server Name Indication (SNI).
       */
      sni?: ActionParameters.Sni;
    }

    export namespace ActionParameters {
      /**
       * Override the IP/TCP destination.
       */
      export interface Origin {
        /**
         * Override the resolved hostname.
         */
        host?: string;

        /**
         * Override the destination port.
         */
        port?: number;
      }

      /**
       * Override the Server Name Indication (SNI).
       */
      export interface Sni {
        /**
         * The SNI override.
         */
        value: string;
      }
    }
  }

  export interface RulesetsScoreRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'score';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsScoreRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsScoreRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Increment contains the delta to change the score and can be either positive or
       * negative.
       */
      increment?: number;
    }
  }

  export interface RulesetsServeErrorRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'serve_error';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsServeErrorRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsServeErrorRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Error response content.
       */
      content?: string;

      /**
       * Content-type header to set with the response.
       */
      content_type?: 'application/json' | 'text/xml' | 'text/plain' | 'text/html';

      /**
       * The status code to use for the error.
       */
      status_code?: number;
    }
  }

  export interface RulesetsSetConfigRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_config';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSetConfigRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetConfigRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Turn on or off Automatic HTTPS Rewrites.
       */
      automatic_https_rewrites?: boolean;

      /**
       * Select which file extensions to minify automatically.
       */
      autominify?: ActionParameters.Autominify;

      /**
       * Turn on or off Browser Integrity Check.
       */
      bic?: boolean;

      /**
       * Turn off all active Cloudflare Apps.
       */
      disable_apps?: boolean;

      /**
       * Turn off Zaraz.
       */
      disable_zaraz?: boolean;

      /**
       * Turn on or off Email Obfuscation.
       */
      email_obfuscation?: boolean;

      /**
       * Turn on or off the Hotlink Protection.
       */
      hotlink_protection?: boolean;

      /**
       * Turn on or off Mirage.
       */
      mirage?: boolean;

      /**
       * Turn on or off Opportunistic Encryption.
       */
      opportunistic_encryption?: boolean;

      /**
       * Configure the Polish level.
       */
      polish?: 'off' | 'lossless' | 'lossy';

      /**
       * Turn on or off Rocket Loader
       */
      rocket_loader?: boolean;

      /**
       * Configure the Security Level.
       */
      security_level?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

      /**
       * Turn on or off Server Side Excludes.
       */
      server_side_excludes?: boolean;

      /**
       * Configure the SSL level.
       */
      ssl?: 'off' | 'flexible' | 'full' | 'strict' | 'origin_pull';

      /**
       * Turn on or off Signed Exchanges (SXG).
       */
      sxg?: boolean;
    }

    export namespace ActionParameters {
      /**
       * Select which file extensions to minify automatically.
       */
      export interface Autominify {
        /**
         * Minify CSS files.
         */
        css?: boolean;

        /**
         * Minify HTML files.
         */
        html?: boolean;

        /**
         * Minify JS files.
         */
        js?: boolean;
      }
    }
  }

  export interface RulesetsSetCacheSettingsRule {
    /**
     * The timestamp of when the rule was last modified.
     */
    last_updated: string;

    /**
     * The version of the rule.
     */
    version: string;

    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_cache_settings';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSetCacheSettingsRule.ActionParameters;

    /**
     * The categories of the rule.
     */
    categories?: Array<string>;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetCacheSettingsRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * List of additional ports that caching can be enabled on.
       */
      additional_cacheable_ports?: Array<number>;

      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      browser_ttl?: ActionParameters.BrowserTTL;

      /**
       * Mark whether the request’s response from origin is eligible for caching. Caching
       * itself will still depend on the cache-control header and your other caching
       * configurations.
       */
      cache?: boolean;

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      cache_key?: ActionParameters.CacheKey;

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      cache_reserve?: ActionParameters.CacheReserve;

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      edge_ttl?: ActionParameters.EdgeTTL;

      /**
       * When enabled, Cloudflare will aim to strictly adhere to RFC 7234.
       */
      origin_cache_control?: boolean;

      /**
       * Generate Cloudflare error pages from issues sent from the origin server. When
       * on, error pages will trigger for issues from the origin
       */
      origin_error_page_passthru?: boolean;

      /**
       * Define a timeout value between two successive read operations to your origin
       * server. Historically, the timeout value between two read options from Cloudflare
       * to an origin server is 100 seconds. If you are attempting to reduce HTTP 524
       * errors because of timeouts from an origin server, try increasing this timeout
       * value.
       */
      read_timeout?: number;

      /**
       * Specify whether or not Cloudflare should respect strong ETag (entity tag)
       * headers. When off, Cloudflare converts strong ETag headers to weak ETag headers.
       */
      respect_strong_etags?: boolean;

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      serve_stale?: ActionParameters.ServeStale;
    }

    export namespace ActionParameters {
      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      export interface BrowserTTL {
        /**
         * Determines which browser ttl mode to use.
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default?: number;
      }

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      export interface CacheKey {
        /**
         * Separate cached content based on the visitor’s device type
         */
        cache_by_device_type?: boolean;

        /**
         * Protect from web cache deception attacks while allowing static assets to be
         * cached
         */
        cache_deception_armor?: boolean;

        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        custom_key?: CacheKey.CustomKey;

        /**
         * Treat requests with the same query parameters the same, regardless of the order
         * those query parameters are in. A value of true ignores the query strings' order.
         */
        ignore_query_strings_order?: boolean;
      }

      export namespace CacheKey {
        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        export interface CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          cookie?: CustomKey.Cookie;

          /**
           * The header names and values to include in building the cache key.
           */
          header?: CustomKey.Header;

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          host?: CustomKey.Host;

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          query_string?: CustomKey.QueryString;

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          user?: CustomKey.User;
        }

        export namespace CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          export interface Cookie {
            /**
             * Checks for the presence of these cookie names. The presence of these cookies is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * Include these cookies' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * The header names and values to include in building the cache key.
           */
          export interface Header {
            /**
             * Checks for the presence of these header names. The presence of these headers is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * Whether or not to include the origin header. A value of true will exclude the
             * origin header in the cache key.
             */
            exclude_origin?: boolean;

            /**
             * Include these headers' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          export interface Host {
            /**
             * Use the resolved host in the cache key. A value of true will use the resolved
             * host, while a value or false will use the original host.
             */
            resolved?: boolean;
          }

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          export interface QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            exclude?: QueryString.Exclude;

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            include?: QueryString.Include;
          }

          export namespace QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            export interface Exclude {
              /**
               * Exclude all query string parameters from use in building the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters NOT used to build the cache key. All
               * parameters present in the request but missing in this list will be used to build
               * the cache key.
               */
              list?: Array<string>;
            }

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            export interface Include {
              /**
               * Use all query string parameters in the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters used to build the cache key.
               */
              list?: Array<string>;
            }
          }

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          export interface User {
            /**
             * Use the user agent's device type in the cache key.
             */
            device_type?: boolean;

            /**
             * Use the user agents's country in the cache key.
             */
            geo?: boolean;

            /**
             * Use the user agent's language in the cache key.
             */
            lang?: boolean;
          }
        }
      }

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      export interface CacheReserve {
        /**
         * Determines whether cache reserve is enabled. If this is true and a request meets
         * eligibility criteria, Cloudflare will write the resource to cache reserve.
         */
        eligible: boolean;

        /**
         * The minimum file size eligible for store in cache reserve.
         */
        min_file_size: number;
      }

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      export interface EdgeTTL {
        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default: number;

        /**
         * edge ttl options
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * List of single status codes, or status code ranges to apply the selected mode
         */
        status_code_ttl: Array<EdgeTTL.StatusCodeTTL>;
      }

      export namespace EdgeTTL {
        /**
         * Specify how long Cloudflare should cache the response based on the status code
         * from the origin. Can be a single status code or a range or status codes
         */
        export interface StatusCodeTTL {
          /**
           * Time to cache a response (in seconds). A value of 0 is equivalent to setting the
           * Cache-Control header with the value "no-cache". A value of -1 is equivalent to
           * setting Cache-Control header with the value of "no-store".
           */
          value: number;

          /**
           * The range of status codes used to apply the selected mode.
           */
          status_code_range?: StatusCodeTTL.StatusCodeRange;

          /**
           * Set the ttl for responses with this specific status code
           */
          status_code_value?: number;
        }

        export namespace StatusCodeTTL {
          /**
           * The range of status codes used to apply the selected mode.
           */
          export interface StatusCodeRange {
            /**
             * response status code lower bound
             */
            from: number;

            /**
             * response status code upper bound
             */
            to: number;
          }
        }
      }

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      export interface ServeStale {
        /**
         * Defines whether Cloudflare should serve stale content while updating. If true,
         * Cloudflare will not serve stale content while getting the latest content from
         * the origin.
         */
        disable_stale_while_updating: boolean;
      }
    }
  }
}

export interface RulesetCreateParams {
  /**
   * Body param: The kind of the ruleset.
   */
  kind: 'managed' | 'custom' | 'root' | 'zone';

  /**
   * Body param: The human-readable name of the ruleset.
   */
  name: string;

  /**
   * Body param: The phase of the ruleset.
   */
  phase:
    | 'ddos_l4'
    | 'ddos_l7'
    | 'http_config_settings'
    | 'http_custom_errors'
    | 'http_log_custom_fields'
    | 'http_ratelimit'
    | 'http_request_cache_settings'
    | 'http_request_dynamic_redirect'
    | 'http_request_firewall_custom'
    | 'http_request_firewall_managed'
    | 'http_request_late_transform'
    | 'http_request_origin'
    | 'http_request_redirect'
    | 'http_request_sanitize'
    | 'http_request_sbfm'
    | 'http_request_select_configuration'
    | 'http_request_transform'
    | 'http_response_compression'
    | 'http_response_firewall_managed'
    | 'http_response_headers_transform'
    | 'magic_transit'
    | 'magic_transit_ids_managed'
    | 'magic_transit_managed';

  /**
   * Body param: The list of rules in the ruleset.
   */
  rules: Array<
    | RulesAPI.BlockRule
    | RulesetCreateParams.RulesetsChallengeRule
    | RulesetCreateParams.RulesetsCompressResponseRule
    | RulesAPI.ExecuteRule
    | RulesetCreateParams.RulesetsJsChallengeRule
    | RulesAPI.LogRule
    | RulesetCreateParams.RulesetsManagedChallengeRule
    | RulesetCreateParams.RulesetsRedirectRule
    | RulesetCreateParams.RulesetsRewriteRule
    | RulesetCreateParams.RulesetsRouteRule
    | RulesetCreateParams.RulesetsScoreRule
    | RulesetCreateParams.RulesetsServeErrorRule
    | RulesetCreateParams.RulesetsSetConfigRule
    | RulesAPI.SkipRule
    | RulesetCreateParams.RulesetsSetCacheSettingsRule
  >;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: An informative description of the ruleset.
   */
  description?: string;
}

export namespace RulesetCreateParams {
  export interface RulesetsChallengeRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsCompressResponseRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'compress_response';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsCompressResponseRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsCompressResponseRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Custom order for compression algorithms.
       */
      algorithms?: Array<ActionParameters.Algorithm>;
    }

    export namespace ActionParameters {
      /**
       * Compression algorithm to enable.
       */
      export interface Algorithm {
        /**
         * Name of compression algorithm to enable.
         */
        name?: 'none' | 'auto' | 'default' | 'gzip' | 'brotli';
      }
    }
  }

  export interface RulesetsJsChallengeRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'js_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsManagedChallengeRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'managed_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsRedirectRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'redirect';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRedirectRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRedirectRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      from_list?: ActionParameters.FromList;

      /**
       * Serve a redirect based on the request properties.
       */
      from_value?: ActionParameters.FromValue;
    }

    export namespace ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      export interface FromList {
        /**
         * Expression that evaluates to the list lookup key.
         */
        key?: string;

        /**
         * The name of the list to match against.
         */
        name?: string;
      }

      /**
       * Serve a redirect based on the request properties.
       */
      export interface FromValue {
        /**
         * Keep the query string of the original request.
         */
        preserve_query_string?: boolean;

        /**
         * The status code to be used for the redirect.
         */
        status_code?: 301 | 302 | 303 | 307 | 308;

        /**
         * The URL to redirect the request to.
         */
        target_url?: FromValue.StaticURLRedirect | FromValue.DynamicURLRedirect;
      }

      export namespace FromValue {
        export interface StaticURLRedirect {
          /**
           * The URL to redirect the request to.
           */
          value?: string;
        }

        export interface DynamicURLRedirect {
          /**
           * An expression to evaluate to get the URL to redirect the request to.
           */
          expression?: string;
        }
      }
    }
  }

  export interface RulesetsRewriteRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'rewrite';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRewriteRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRewriteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Map of request headers to modify.
       */
      headers?: Record<
        string,
        ActionParameters.RemoveHeader | ActionParameters.StaticHeader | ActionParameters.DynamicHeader
      >;

      /**
       * URI to rewrite the request to.
       */
      uri?: ActionParameters.URI;
    }

    export namespace ActionParameters {
      /**
       * Remove the header from the request.
       */
      export interface RemoveHeader {
        operation: 'remove';
      }

      /**
       * Set a request header with a static value.
       */
      export interface StaticHeader {
        operation: 'set';

        /**
         * Static value for the header.
         */
        value: string;
      }

      /**
       * Set a request header with a dynamic value.
       */
      export interface DynamicHeader {
        /**
         * Expression for the header value.
         */
        expression: string;

        operation: 'set';
      }

      /**
       * URI to rewrite the request to.
       */
      export interface URI {
        /**
         * Path portion rewrite.
         */
        path?: URI.StaticValue | URI.DynamicValue;

        /**
         * Query portion rewrite.
         */
        query?: URI.StaticValue | URI.DynamicValue;
      }

      export namespace URI {
        export interface StaticValue {
          /**
           * Predefined replacement value.
           */
          value: string;
        }

        export interface DynamicValue {
          /**
           * Expression to evaluate for the replacement value.
           */
          expression: string;
        }

        export interface StaticValue {
          /**
           * Predefined replacement value.
           */
          value: string;
        }

        export interface DynamicValue {
          /**
           * Expression to evaluate for the replacement value.
           */
          expression: string;
        }
      }
    }
  }

  export interface RulesetsRouteRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'route';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRouteRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRouteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Rewrite the HTTP Host header.
       */
      host_header?: string;

      /**
       * Override the IP/TCP destination.
       */
      origin?: ActionParameters.Origin;

      /**
       * Override the Server Name Indication (SNI).
       */
      sni?: ActionParameters.Sni;
    }

    export namespace ActionParameters {
      /**
       * Override the IP/TCP destination.
       */
      export interface Origin {
        /**
         * Override the resolved hostname.
         */
        host?: string;

        /**
         * Override the destination port.
         */
        port?: number;
      }

      /**
       * Override the Server Name Indication (SNI).
       */
      export interface Sni {
        /**
         * The SNI override.
         */
        value: string;
      }
    }
  }

  export interface RulesetsScoreRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'score';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsScoreRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsScoreRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Increment contains the delta to change the score and can be either positive or
       * negative.
       */
      increment?: number;
    }
  }

  export interface RulesetsServeErrorRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'serve_error';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsServeErrorRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsServeErrorRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Error response content.
       */
      content?: string;

      /**
       * Content-type header to set with the response.
       */
      content_type?: 'application/json' | 'text/xml' | 'text/plain' | 'text/html';

      /**
       * The status code to use for the error.
       */
      status_code?: number;
    }
  }

  export interface RulesetsSetConfigRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_config';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSetConfigRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetConfigRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Turn on or off Automatic HTTPS Rewrites.
       */
      automatic_https_rewrites?: boolean;

      /**
       * Select which file extensions to minify automatically.
       */
      autominify?: ActionParameters.Autominify;

      /**
       * Turn on or off Browser Integrity Check.
       */
      bic?: boolean;

      /**
       * Turn off all active Cloudflare Apps.
       */
      disable_apps?: boolean;

      /**
       * Turn off Zaraz.
       */
      disable_zaraz?: boolean;

      /**
       * Turn on or off Email Obfuscation.
       */
      email_obfuscation?: boolean;

      /**
       * Turn on or off the Hotlink Protection.
       */
      hotlink_protection?: boolean;

      /**
       * Turn on or off Mirage.
       */
      mirage?: boolean;

      /**
       * Turn on or off Opportunistic Encryption.
       */
      opportunistic_encryption?: boolean;

      /**
       * Configure the Polish level.
       */
      polish?: 'off' | 'lossless' | 'lossy';

      /**
       * Turn on or off Rocket Loader
       */
      rocket_loader?: boolean;

      /**
       * Configure the Security Level.
       */
      security_level?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

      /**
       * Turn on or off Server Side Excludes.
       */
      server_side_excludes?: boolean;

      /**
       * Configure the SSL level.
       */
      ssl?: 'off' | 'flexible' | 'full' | 'strict' | 'origin_pull';

      /**
       * Turn on or off Signed Exchanges (SXG).
       */
      sxg?: boolean;
    }

    export namespace ActionParameters {
      /**
       * Select which file extensions to minify automatically.
       */
      export interface Autominify {
        /**
         * Minify CSS files.
         */
        css?: boolean;

        /**
         * Minify HTML files.
         */
        html?: boolean;

        /**
         * Minify JS files.
         */
        js?: boolean;
      }
    }
  }

  export interface RulesetsSetCacheSettingsRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_cache_settings';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSetCacheSettingsRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetCacheSettingsRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * List of additional ports that caching can be enabled on.
       */
      additional_cacheable_ports?: Array<number>;

      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      browser_ttl?: ActionParameters.BrowserTTL;

      /**
       * Mark whether the request’s response from origin is eligible for caching. Caching
       * itself will still depend on the cache-control header and your other caching
       * configurations.
       */
      cache?: boolean;

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      cache_key?: ActionParameters.CacheKey;

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      cache_reserve?: ActionParameters.CacheReserve;

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      edge_ttl?: ActionParameters.EdgeTTL;

      /**
       * When enabled, Cloudflare will aim to strictly adhere to RFC 7234.
       */
      origin_cache_control?: boolean;

      /**
       * Generate Cloudflare error pages from issues sent from the origin server. When
       * on, error pages will trigger for issues from the origin
       */
      origin_error_page_passthru?: boolean;

      /**
       * Define a timeout value between two successive read operations to your origin
       * server. Historically, the timeout value between two read options from Cloudflare
       * to an origin server is 100 seconds. If you are attempting to reduce HTTP 524
       * errors because of timeouts from an origin server, try increasing this timeout
       * value.
       */
      read_timeout?: number;

      /**
       * Specify whether or not Cloudflare should respect strong ETag (entity tag)
       * headers. When off, Cloudflare converts strong ETag headers to weak ETag headers.
       */
      respect_strong_etags?: boolean;

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      serve_stale?: ActionParameters.ServeStale;
    }

    export namespace ActionParameters {
      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      export interface BrowserTTL {
        /**
         * Determines which browser ttl mode to use.
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default?: number;
      }

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      export interface CacheKey {
        /**
         * Separate cached content based on the visitor’s device type
         */
        cache_by_device_type?: boolean;

        /**
         * Protect from web cache deception attacks while allowing static assets to be
         * cached
         */
        cache_deception_armor?: boolean;

        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        custom_key?: CacheKey.CustomKey;

        /**
         * Treat requests with the same query parameters the same, regardless of the order
         * those query parameters are in. A value of true ignores the query strings' order.
         */
        ignore_query_strings_order?: boolean;
      }

      export namespace CacheKey {
        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        export interface CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          cookie?: CustomKey.Cookie;

          /**
           * The header names and values to include in building the cache key.
           */
          header?: CustomKey.Header;

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          host?: CustomKey.Host;

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          query_string?: CustomKey.QueryString;

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          user?: CustomKey.User;
        }

        export namespace CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          export interface Cookie {
            /**
             * Checks for the presence of these cookie names. The presence of these cookies is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * Include these cookies' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * The header names and values to include in building the cache key.
           */
          export interface Header {
            /**
             * Checks for the presence of these header names. The presence of these headers is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * Whether or not to include the origin header. A value of true will exclude the
             * origin header in the cache key.
             */
            exclude_origin?: boolean;

            /**
             * Include these headers' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          export interface Host {
            /**
             * Use the resolved host in the cache key. A value of true will use the resolved
             * host, while a value or false will use the original host.
             */
            resolved?: boolean;
          }

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          export interface QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            exclude?: QueryString.Exclude;

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            include?: QueryString.Include;
          }

          export namespace QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            export interface Exclude {
              /**
               * Exclude all query string parameters from use in building the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters NOT used to build the cache key. All
               * parameters present in the request but missing in this list will be used to build
               * the cache key.
               */
              list?: Array<string>;
            }

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            export interface Include {
              /**
               * Use all query string parameters in the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters used to build the cache key.
               */
              list?: Array<string>;
            }
          }

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          export interface User {
            /**
             * Use the user agent's device type in the cache key.
             */
            device_type?: boolean;

            /**
             * Use the user agents's country in the cache key.
             */
            geo?: boolean;

            /**
             * Use the user agent's language in the cache key.
             */
            lang?: boolean;
          }
        }
      }

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      export interface CacheReserve {
        /**
         * Determines whether cache reserve is enabled. If this is true and a request meets
         * eligibility criteria, Cloudflare will write the resource to cache reserve.
         */
        eligible: boolean;

        /**
         * The minimum file size eligible for store in cache reserve.
         */
        min_file_size: number;
      }

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      export interface EdgeTTL {
        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default: number;

        /**
         * edge ttl options
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * List of single status codes, or status code ranges to apply the selected mode
         */
        status_code_ttl: Array<EdgeTTL.StatusCodeTTL>;
      }

      export namespace EdgeTTL {
        /**
         * Specify how long Cloudflare should cache the response based on the status code
         * from the origin. Can be a single status code or a range or status codes
         */
        export interface StatusCodeTTL {
          /**
           * Time to cache a response (in seconds). A value of 0 is equivalent to setting the
           * Cache-Control header with the value "no-cache". A value of -1 is equivalent to
           * setting Cache-Control header with the value of "no-store".
           */
          value: number;

          /**
           * The range of status codes used to apply the selected mode.
           */
          status_code_range?: StatusCodeTTL.StatusCodeRange;

          /**
           * Set the ttl for responses with this specific status code
           */
          status_code_value?: number;
        }

        export namespace StatusCodeTTL {
          /**
           * The range of status codes used to apply the selected mode.
           */
          export interface StatusCodeRange {
            /**
             * response status code lower bound
             */
            from: number;

            /**
             * response status code upper bound
             */
            to: number;
          }
        }
      }

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      export interface ServeStale {
        /**
         * Defines whether Cloudflare should serve stale content while updating. If true,
         * Cloudflare will not serve stale content while getting the latest content from
         * the origin.
         */
        disable_stale_while_updating: boolean;
      }
    }
  }
}

export interface RulesetUpdateParams {
  /**
   * Body param: The list of rules in the ruleset.
   */
  rules: Array<
    | RulesAPI.BlockRule
    | RulesetUpdateParams.RulesetsChallengeRule
    | RulesetUpdateParams.RulesetsCompressResponseRule
    | RulesAPI.ExecuteRule
    | RulesetUpdateParams.RulesetsJsChallengeRule
    | RulesAPI.LogRule
    | RulesetUpdateParams.RulesetsManagedChallengeRule
    | RulesetUpdateParams.RulesetsRedirectRule
    | RulesetUpdateParams.RulesetsRewriteRule
    | RulesetUpdateParams.RulesetsRouteRule
    | RulesetUpdateParams.RulesetsScoreRule
    | RulesetUpdateParams.RulesetsServeErrorRule
    | RulesetUpdateParams.RulesetsSetConfigRule
    | RulesAPI.SkipRule
    | RulesetUpdateParams.RulesetsSetCacheSettingsRule
  >;

  /**
   * Path param: The Account ID to use for this endpoint. Mutually exclusive with the
   * Zone ID.
   */
  account_id?: string;

  /**
   * Path param: The Zone ID to use for this endpoint. Mutually exclusive with the
   * Account ID.
   */
  zone_id?: string;

  /**
   * Body param: An informative description of the ruleset.
   */
  description?: string;

  /**
   * Body param: The kind of the ruleset.
   */
  kind?: 'managed' | 'custom' | 'root' | 'zone';

  /**
   * Body param: The human-readable name of the ruleset.
   */
  name?: string;

  /**
   * Body param: The phase of the ruleset.
   */
  phase?:
    | 'ddos_l4'
    | 'ddos_l7'
    | 'http_config_settings'
    | 'http_custom_errors'
    | 'http_log_custom_fields'
    | 'http_ratelimit'
    | 'http_request_cache_settings'
    | 'http_request_dynamic_redirect'
    | 'http_request_firewall_custom'
    | 'http_request_firewall_managed'
    | 'http_request_late_transform'
    | 'http_request_origin'
    | 'http_request_redirect'
    | 'http_request_sanitize'
    | 'http_request_sbfm'
    | 'http_request_select_configuration'
    | 'http_request_transform'
    | 'http_response_compression'
    | 'http_response_firewall_managed'
    | 'http_response_headers_transform'
    | 'magic_transit'
    | 'magic_transit_ids_managed'
    | 'magic_transit_managed';
}

export namespace RulesetUpdateParams {
  export interface RulesetsChallengeRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsCompressResponseRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'compress_response';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsCompressResponseRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsCompressResponseRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Custom order for compression algorithms.
       */
      algorithms?: Array<ActionParameters.Algorithm>;
    }

    export namespace ActionParameters {
      /**
       * Compression algorithm to enable.
       */
      export interface Algorithm {
        /**
         * Name of compression algorithm to enable.
         */
        name?: 'none' | 'auto' | 'default' | 'gzip' | 'brotli';
      }
    }
  }

  export interface RulesetsJsChallengeRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'js_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsManagedChallengeRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'managed_challenge';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: unknown;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export interface RulesetsRedirectRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'redirect';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRedirectRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRedirectRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      from_list?: ActionParameters.FromList;

      /**
       * Serve a redirect based on the request properties.
       */
      from_value?: ActionParameters.FromValue;
    }

    export namespace ActionParameters {
      /**
       * Serve a redirect based on a bulk list lookup.
       */
      export interface FromList {
        /**
         * Expression that evaluates to the list lookup key.
         */
        key?: string;

        /**
         * The name of the list to match against.
         */
        name?: string;
      }

      /**
       * Serve a redirect based on the request properties.
       */
      export interface FromValue {
        /**
         * Keep the query string of the original request.
         */
        preserve_query_string?: boolean;

        /**
         * The status code to be used for the redirect.
         */
        status_code?: 301 | 302 | 303 | 307 | 308;

        /**
         * The URL to redirect the request to.
         */
        target_url?: FromValue.StaticURLRedirect | FromValue.DynamicURLRedirect;
      }

      export namespace FromValue {
        export interface StaticURLRedirect {
          /**
           * The URL to redirect the request to.
           */
          value?: string;
        }

        export interface DynamicURLRedirect {
          /**
           * An expression to evaluate to get the URL to redirect the request to.
           */
          expression?: string;
        }
      }
    }
  }

  export interface RulesetsRewriteRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'rewrite';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRewriteRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRewriteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Map of request headers to modify.
       */
      headers?: Record<
        string,
        ActionParameters.RemoveHeader | ActionParameters.StaticHeader | ActionParameters.DynamicHeader
      >;

      /**
       * URI to rewrite the request to.
       */
      uri?: ActionParameters.URI;
    }

    export namespace ActionParameters {
      /**
       * Remove the header from the request.
       */
      export interface RemoveHeader {
        operation: 'remove';
      }

      /**
       * Set a request header with a static value.
       */
      export interface StaticHeader {
        operation: 'set';

        /**
         * Static value for the header.
         */
        value: string;
      }

      /**
       * Set a request header with a dynamic value.
       */
      export interface DynamicHeader {
        /**
         * Expression for the header value.
         */
        expression: string;

        operation: 'set';
      }

      /**
       * URI to rewrite the request to.
       */
      export interface URI {
        /**
         * Path portion rewrite.
         */
        path?: URI.StaticValue | URI.DynamicValue;

        /**
         * Query portion rewrite.
         */
        query?: URI.StaticValue | URI.DynamicValue;
      }

      export namespace URI {
        export interface StaticValue {
          /**
           * Predefined replacement value.
           */
          value: string;
        }

        export interface DynamicValue {
          /**
           * Expression to evaluate for the replacement value.
           */
          expression: string;
        }

        export interface StaticValue {
          /**
           * Predefined replacement value.
           */
          value: string;
        }

        export interface DynamicValue {
          /**
           * Expression to evaluate for the replacement value.
           */
          expression: string;
        }
      }
    }
  }

  export interface RulesetsRouteRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'route';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsRouteRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsRouteRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Rewrite the HTTP Host header.
       */
      host_header?: string;

      /**
       * Override the IP/TCP destination.
       */
      origin?: ActionParameters.Origin;

      /**
       * Override the Server Name Indication (SNI).
       */
      sni?: ActionParameters.Sni;
    }

    export namespace ActionParameters {
      /**
       * Override the IP/TCP destination.
       */
      export interface Origin {
        /**
         * Override the resolved hostname.
         */
        host?: string;

        /**
         * Override the destination port.
         */
        port?: number;
      }

      /**
       * Override the Server Name Indication (SNI).
       */
      export interface Sni {
        /**
         * The SNI override.
         */
        value: string;
      }
    }
  }

  export interface RulesetsScoreRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'score';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsScoreRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsScoreRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Increment contains the delta to change the score and can be either positive or
       * negative.
       */
      increment?: number;
    }
  }

  export interface RulesetsServeErrorRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'serve_error';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsServeErrorRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsServeErrorRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Error response content.
       */
      content?: string;

      /**
       * Content-type header to set with the response.
       */
      content_type?: 'application/json' | 'text/xml' | 'text/plain' | 'text/html';

      /**
       * The status code to use for the error.
       */
      status_code?: number;
    }
  }

  export interface RulesetsSetConfigRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_config';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSetConfigRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetConfigRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * Turn on or off Automatic HTTPS Rewrites.
       */
      automatic_https_rewrites?: boolean;

      /**
       * Select which file extensions to minify automatically.
       */
      autominify?: ActionParameters.Autominify;

      /**
       * Turn on or off Browser Integrity Check.
       */
      bic?: boolean;

      /**
       * Turn off all active Cloudflare Apps.
       */
      disable_apps?: boolean;

      /**
       * Turn off Zaraz.
       */
      disable_zaraz?: boolean;

      /**
       * Turn on or off Email Obfuscation.
       */
      email_obfuscation?: boolean;

      /**
       * Turn on or off the Hotlink Protection.
       */
      hotlink_protection?: boolean;

      /**
       * Turn on or off Mirage.
       */
      mirage?: boolean;

      /**
       * Turn on or off Opportunistic Encryption.
       */
      opportunistic_encryption?: boolean;

      /**
       * Configure the Polish level.
       */
      polish?: 'off' | 'lossless' | 'lossy';

      /**
       * Turn on or off Rocket Loader
       */
      rocket_loader?: boolean;

      /**
       * Configure the Security Level.
       */
      security_level?: 'off' | 'essentially_off' | 'low' | 'medium' | 'high' | 'under_attack';

      /**
       * Turn on or off Server Side Excludes.
       */
      server_side_excludes?: boolean;

      /**
       * Configure the SSL level.
       */
      ssl?: 'off' | 'flexible' | 'full' | 'strict' | 'origin_pull';

      /**
       * Turn on or off Signed Exchanges (SXG).
       */
      sxg?: boolean;
    }

    export namespace ActionParameters {
      /**
       * Select which file extensions to minify automatically.
       */
      export interface Autominify {
        /**
         * Minify CSS files.
         */
        css?: boolean;

        /**
         * Minify HTML files.
         */
        html?: boolean;

        /**
         * Minify JS files.
         */
        js?: boolean;
      }
    }
  }

  export interface RulesetsSetCacheSettingsRule {
    /**
     * The unique ID of the rule.
     */
    id?: string;

    /**
     * The action to perform when the rule matches.
     */
    action?: 'set_cache_settings';

    /**
     * The parameters configuring the rule's action.
     */
    action_parameters?: RulesetsSetCacheSettingsRule.ActionParameters;

    /**
     * An informative description of the rule.
     */
    description?: string;

    /**
     * Whether the rule should be executed.
     */
    enabled?: boolean;

    /**
     * The expression defining which traffic will match the rule.
     */
    expression?: string;

    /**
     * An object configuring the rule's logging behavior.
     */
    logging?: RulesAPI.Logging;

    /**
     * The reference of the rule (the rule ID by default).
     */
    ref?: string;
  }

  export namespace RulesetsSetCacheSettingsRule {
    /**
     * The parameters configuring the rule's action.
     */
    export interface ActionParameters {
      /**
       * List of additional ports that caching can be enabled on.
       */
      additional_cacheable_ports?: Array<number>;

      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      browser_ttl?: ActionParameters.BrowserTTL;

      /**
       * Mark whether the request’s response from origin is eligible for caching. Caching
       * itself will still depend on the cache-control header and your other caching
       * configurations.
       */
      cache?: boolean;

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      cache_key?: ActionParameters.CacheKey;

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      cache_reserve?: ActionParameters.CacheReserve;

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      edge_ttl?: ActionParameters.EdgeTTL;

      /**
       * When enabled, Cloudflare will aim to strictly adhere to RFC 7234.
       */
      origin_cache_control?: boolean;

      /**
       * Generate Cloudflare error pages from issues sent from the origin server. When
       * on, error pages will trigger for issues from the origin
       */
      origin_error_page_passthru?: boolean;

      /**
       * Define a timeout value between two successive read operations to your origin
       * server. Historically, the timeout value between two read options from Cloudflare
       * to an origin server is 100 seconds. If you are attempting to reduce HTTP 524
       * errors because of timeouts from an origin server, try increasing this timeout
       * value.
       */
      read_timeout?: number;

      /**
       * Specify whether or not Cloudflare should respect strong ETag (entity tag)
       * headers. When off, Cloudflare converts strong ETag headers to weak ETag headers.
       */
      respect_strong_etags?: boolean;

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      serve_stale?: ActionParameters.ServeStale;
    }

    export namespace ActionParameters {
      /**
       * Specify how long client browsers should cache the response. Cloudflare cache
       * purge will not purge content cached on client browsers, so high browser TTLs may
       * lead to stale content.
       */
      export interface BrowserTTL {
        /**
         * Determines which browser ttl mode to use.
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default?: number;
      }

      /**
       * Define which components of the request are included or excluded from the cache
       * key Cloudflare uses to store the response in cache.
       */
      export interface CacheKey {
        /**
         * Separate cached content based on the visitor’s device type
         */
        cache_by_device_type?: boolean;

        /**
         * Protect from web cache deception attacks while allowing static assets to be
         * cached
         */
        cache_deception_armor?: boolean;

        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        custom_key?: CacheKey.CustomKey;

        /**
         * Treat requests with the same query parameters the same, regardless of the order
         * those query parameters are in. A value of true ignores the query strings' order.
         */
        ignore_query_strings_order?: boolean;
      }

      export namespace CacheKey {
        /**
         * Customize which components of the request are included or excluded from the
         * cache key.
         */
        export interface CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          cookie?: CustomKey.Cookie;

          /**
           * The header names and values to include in building the cache key.
           */
          header?: CustomKey.Header;

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          host?: CustomKey.Host;

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          query_string?: CustomKey.QueryString;

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          user?: CustomKey.User;
        }

        export namespace CustomKey {
          /**
           * The cookies to include in building the cache key.
           */
          export interface Cookie {
            /**
             * Checks for the presence of these cookie names. The presence of these cookies is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * Include these cookies' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * The header names and values to include in building the cache key.
           */
          export interface Header {
            /**
             * Checks for the presence of these header names. The presence of these headers is
             * used in building the cache key.
             */
            check_presence?: Array<string>;

            /**
             * Whether or not to include the origin header. A value of true will exclude the
             * origin header in the cache key.
             */
            exclude_origin?: boolean;

            /**
             * Include these headers' names and their values.
             */
            include?: Array<string>;
          }

          /**
           * Whether to use the original host or the resolved host in the cache key.
           */
          export interface Host {
            /**
             * Use the resolved host in the cache key. A value of true will use the resolved
             * host, while a value or false will use the original host.
             */
            resolved?: boolean;
          }

          /**
           * Use the presence or absence of parameters in the query string to build the cache
           * key.
           */
          export interface QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            exclude?: QueryString.Exclude;

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            include?: QueryString.Include;
          }

          export namespace QueryString {
            /**
             * build the cache key using all query string parameters EXCECPT these excluded
             * parameters
             */
            export interface Exclude {
              /**
               * Exclude all query string parameters from use in building the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters NOT used to build the cache key. All
               * parameters present in the request but missing in this list will be used to build
               * the cache key.
               */
              list?: Array<string>;
            }

            /**
             * build the cache key using a list of query string parameters that ARE in the
             * request.
             */
            export interface Include {
              /**
               * Use all query string parameters in the cache key.
               */
              all?: boolean;

              /**
               * A list of query string parameters used to build the cache key.
               */
              list?: Array<string>;
            }
          }

          /**
           * Characteristics of the request user agent used in building the cache key.
           */
          export interface User {
            /**
             * Use the user agent's device type in the cache key.
             */
            device_type?: boolean;

            /**
             * Use the user agents's country in the cache key.
             */
            geo?: boolean;

            /**
             * Use the user agent's language in the cache key.
             */
            lang?: boolean;
          }
        }
      }

      /**
       * Mark whether the request's response from origin is eligible for Cache Reserve
       * (requires a Cache Reserve add-on plan).
       */
      export interface CacheReserve {
        /**
         * Determines whether cache reserve is enabled. If this is true and a request meets
         * eligibility criteria, Cloudflare will write the resource to cache reserve.
         */
        eligible: boolean;

        /**
         * The minimum file size eligible for store in cache reserve.
         */
        min_file_size: number;
      }

      /**
       * TTL (Time to Live) specifies the maximum time to cache a resource in the
       * Cloudflare edge network.
       */
      export interface EdgeTTL {
        /**
         * The TTL (in seconds) if you choose override_origin mode.
         */
        default: number;

        /**
         * edge ttl options
         */
        mode: 'respect_origin' | 'bypass_by_default' | 'override_origin';

        /**
         * List of single status codes, or status code ranges to apply the selected mode
         */
        status_code_ttl: Array<EdgeTTL.StatusCodeTTL>;
      }

      export namespace EdgeTTL {
        /**
         * Specify how long Cloudflare should cache the response based on the status code
         * from the origin. Can be a single status code or a range or status codes
         */
        export interface StatusCodeTTL {
          /**
           * Time to cache a response (in seconds). A value of 0 is equivalent to setting the
           * Cache-Control header with the value "no-cache". A value of -1 is equivalent to
           * setting Cache-Control header with the value of "no-store".
           */
          value: number;

          /**
           * The range of status codes used to apply the selected mode.
           */
          status_code_range?: StatusCodeTTL.StatusCodeRange;

          /**
           * Set the ttl for responses with this specific status code
           */
          status_code_value?: number;
        }

        export namespace StatusCodeTTL {
          /**
           * The range of status codes used to apply the selected mode.
           */
          export interface StatusCodeRange {
            /**
             * response status code lower bound
             */
            from: number;

            /**
             * response status code upper bound
             */
            to: number;
          }
        }
      }

      /**
       * Define if Cloudflare should serve stale content while getting the latest content
       * from the origin. If on, Cloudflare will not serve stale content while getting
       * the latest content from the origin.
       */
      export interface ServeStale {
        /**
         * Defines whether Cloudflare should serve stale content while updating. If true,
         * Cloudflare will not serve stale content while getting the latest content from
         * the origin.
         */
        disable_stale_while_updating: boolean;
      }
    }
  }
}

export interface RulesetListParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface RulesetDeleteParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export interface RulesetGetParams {
  /**
   * The Account ID to use for this endpoint. Mutually exclusive with the Zone ID.
   */
  account_id?: string;

  /**
   * The Zone ID to use for this endpoint. Mutually exclusive with the Account ID.
   */
  zone_id?: string;
}

export namespace Rulesets {
  export import Phases = PhasesAPI.Phases;
  export import PhaseUpdateResponse = PhasesAPI.PhaseUpdateResponse;
  export import PhaseGetResponse = PhasesAPI.PhaseGetResponse;
  export import PhaseUpdateParams = PhasesAPI.PhaseUpdateParams;
  export import PhaseGetParams = PhasesAPI.PhaseGetParams;
  export import Rules = RulesAPI.Rules;
  export import BlockRule = RulesAPI.BlockRule;
  export import ExecuteRule = RulesAPI.ExecuteRule;
  export import LogRule = RulesAPI.LogRule;
  export import Logging = RulesAPI.Logging;
  export import RulesetRule = RulesAPI.RulesetRule;
  export import SkipRule = RulesAPI.SkipRule;
  export import RuleCreateResponse = RulesAPI.RuleCreateResponse;
  export import RuleDeleteResponse = RulesAPI.RuleDeleteResponse;
  export import RuleEditResponse = RulesAPI.RuleEditResponse;
  export import RuleCreateParams = RulesAPI.RuleCreateParams;
  export import RuleDeleteParams = RulesAPI.RuleDeleteParams;
  export import RuleEditParams = RulesAPI.RuleEditParams;
  export import Versions = VersionsAPI.Versions;
  export import VersionGetResponse = VersionsAPI.VersionGetResponse;
  export import VersionListParams = VersionsAPI.VersionListParams;
  export import VersionDeleteParams = VersionsAPI.VersionDeleteParams;
  export import VersionGetParams = VersionsAPI.VersionGetParams;
}
