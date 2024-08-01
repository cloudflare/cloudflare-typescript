// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as OverridesAPI from './overrides';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Overrides extends APIResource {
  /**
   * Creates a URI-based WAF override for a zone.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  create(
    zoneIdentifier: string,
    body: OverrideCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Override> {
    return (
      this._client.post(`/zones/${zoneIdentifier}/firewall/waf/overrides`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Override }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing URI-based WAF override.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  update(
    zoneIdentifier: string,
    id: string,
    body: OverrideUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Override> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/firewall/waf/overrides/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Override }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the URI-based WAF overrides in a zone.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  list(
    zoneIdentifier: string,
    query?: OverrideListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OverridesV4PagePaginationArray, Override>;
  list(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<OverridesV4PagePaginationArray, Override>;
  list(
    zoneIdentifier: string,
    query: OverrideListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<OverridesV4PagePaginationArray, Override> {
    if (isRequestOptions(query)) {
      return this.list(zoneIdentifier, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneIdentifier}/firewall/waf/overrides`,
      OverridesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an existing URI-based WAF override.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  delete(
    zoneIdentifier: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OverrideDeleteResponse> {
    return (
      this._client.delete(
        `/zones/${zoneIdentifier}/firewall/waf/overrides/${id}`,
        options,
      ) as Core.APIPromise<{ result: OverrideDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches the details of a URI-based WAF override.
   *
   * **Note:** Applies only to the
   * [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).
   */
  get(zoneIdentifier: string, id: string, options?: Core.RequestOptions): Core.APIPromise<Override> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/firewall/waf/overrides/${id}`, options) as Core.APIPromise<{
        result: Override;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class OverridesV4PagePaginationArray extends V4PagePaginationArray<Override> {}

export interface Override {
  /**
   * The unique identifier of the WAF override.
   */
  id?: string;

  /**
   * An informative summary of the current URI-based WAF override.
   */
  description?: string | null;

  /**
   * An object that allows you to enable or disable WAF rule groups for the current
   * WAF override. Each key of this object must be the ID of a WAF rule group, and
   * each value must be a valid WAF action (usually `default` or `disable`). When
   * creating a new URI-based WAF override, you must provide a `groups` object or a
   * `rules` object.
   */
  groups?: Record<string, unknown>;

  /**
   * When true, indicates that the WAF package is currently paused.
   */
  paused?: boolean;

  /**
   * The relative priority of the current URI-based WAF override when multiple
   * overrides match a single URL. A lower number indicates higher priority. Higher
   * priority overrides may overwrite values set by lower priority overrides.
   */
  priority?: number;

  /**
   * Specifies that, when a WAF rule matches, its configured action will be replaced
   * by the action configured in this object.
   */
  rewrite_action?: RewriteAction;

  /**
   * An object that allows you to override the action of specific WAF rules. Each key
   * of this object must be the ID of a WAF rule, and each value must be a valid WAF
   * action. Unless you are disabling a rule, ensure that you also enable the rule
   * group that this WAF rule belongs to. When creating a new URI-based WAF override,
   * you must provide a `groups` object or a `rules` object.
   */
  rules?: WAFRule;

  /**
   * The URLs to include in the current WAF override. You can use wildcards. Each
   * entered URL will be escaped before use, which means you can only use simple
   * wildcard patterns.
   */
  urls?: Array<OverrideURL>;
}

export type OverrideURL = string;

/**
 * Specifies that, when a WAF rule matches, its configured action will be replaced
 * by the action configured in this object.
 */
export interface RewriteAction {
  /**
   * The WAF rule action to apply.
   */
  block?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  challenge?: string;

  default?: string;

  /**
   * The WAF rule action to apply.
   */
  disable?: 'challenge' | 'block' | 'simulate' | 'disable' | 'default';

  simulate?: string;
}

/**
 * An object that allows you to override the action of specific WAF rules. Each key
 * of this object must be the ID of a WAF rule, and each value must be a valid WAF
 * action. Unless you are disabling a rule, ensure that you also enable the rule
 * group that this WAF rule belongs to. When creating a new URI-based WAF override,
 * you must provide a `groups` object or a `rules` object.
 */
export type WAFRule = Record<string, 'challenge' | 'block' | 'simulate' | 'disable' | 'default'>;

export interface OverrideDeleteResponse {
  /**
   * The unique identifier of the WAF override.
   */
  id?: string;
}

export type OverrideCreateParams = unknown;

export type OverrideUpdateParams = unknown;

export interface OverrideListParams extends V4PagePaginationArrayParams {}

export namespace Overrides {
  export import Override = OverridesAPI.Override;
  export import OverrideURL = OverridesAPI.OverrideURL;
  export import RewriteAction = OverridesAPI.RewriteAction;
  export import WAFRule = OverridesAPI.WAFRule;
  export import OverrideDeleteResponse = OverridesAPI.OverrideDeleteResponse;
  export import OverridesV4PagePaginationArray = OverridesAPI.OverridesV4PagePaginationArray;
  export import OverrideCreateParams = OverridesAPI.OverrideCreateParams;
  export import OverrideUpdateParams = OverridesAPI.OverrideUpdateParams;
  export import OverrideListParams = OverridesAPI.OverrideListParams;
}
