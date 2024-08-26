// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as WidgetsAPI from './widgets';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Widgets extends APIResource {
  /**
   * Lists challenge widgets.
   */
  create(params: WidgetCreateParams, options?: Core.RequestOptions): Core.APIPromise<Widget> {
    const { account_id, direction, order, page, per_page, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/challenges/widgets`, { query: { direction, order, page, per_page }, body, ...options }) as Core.APIPromise<{ result: Widget }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the configuration of a widget.
   */
  update(sitekey: string, params: WidgetUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Widget> {
    const { account_id, ...body } = params;
    return (this._client.put(`/accounts/${account_id}/challenges/widgets/${sitekey}`, { body, ...options }) as Core.APIPromise<{ result: Widget }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all turnstile widgets of an account.
   */
  list(params: WidgetListParams, options?: Core.RequestOptions): Core.PagePromise<WidgetListResponsesV4PagePaginationArray, WidgetListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/challenges/widgets`, WidgetListResponsesV4PagePaginationArray, { query, ...options });
  }

  /**
   * Destroy a Turnstile Widget.
   */
  delete(sitekey: string, params: WidgetDeleteParams, options?: Core.RequestOptions): Core.APIPromise<Widget> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/challenges/widgets/${sitekey}`, options) as Core.APIPromise<{ result: Widget }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show a single challenge widget configuration.
   */
  get(sitekey: string, params: WidgetGetParams, options?: Core.RequestOptions): Core.APIPromise<Widget> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/challenges/widgets/${sitekey}`, options) as Core.APIPromise<{ result: Widget }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Generate a new secret key for this widget. If `invalidate_immediately` is set to
   * `false`, the previous secret remains valid for 2 hours.
   *
   * Note that secrets cannot be rotated again during the grace period.
   */
  rotateSecret(sitekey: string, params: WidgetRotateSecretParams, options?: Core.RequestOptions): Core.APIPromise<Widget> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/challenges/widgets/${sitekey}/rotate_secret`, { body, ...options }) as Core.APIPromise<{ result: Widget }>)._thenUnwrap((obj) => obj.result);
  }
}

export class WidgetListResponsesV4PagePaginationArray extends V4PagePaginationArray<WidgetListResponse> {
}

/**
 * A Turnstile widget's detailed configuration
 */
export interface Widget {
  /**
   * If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive
   * challenges in response to malicious bots (ENT only).
   */
  bot_fight_mode: boolean;

  /**
   * If Turnstile is embedded on a Cloudflare site and the widget should grant
   * challenge clearance, this setting can determine the clearance level to be set
   */
  clearance_level: 'no_clearance' | 'jschallenge' | 'managed' | 'interactive';

  /**
   * When the widget was created.
   */
  created_on: string;

  domains: Array<WidgetDomain>;

  /**
   * Widget Mode
   */
  mode: 'non-interactive' | 'invisible' | 'managed';

  /**
   * When the widget was modified.
   */
  modified_on: string;

  /**
   * Human readable widget name. Not unique. Cloudflare suggests that you set this to
   * a meaningful string to make it easier to identify your widget, and where it is
   * used.
   */
  name: string;

  /**
   * Do not show any Cloudflare branding on the widget (ENT only).
   */
  offlabel: boolean;

  /**
   * Region where this widget can be used.
   */
  region: 'world';

  /**
   * Secret key for this widget.
   */
  secret: string;

  /**
   * Widget item identifier tag.
   */
  sitekey: string;
}

/**
 * Hosts as a hostname or IPv4/IPv6 address represented by strings. The widget will
 * only work on these domains, and their subdomains.
 */
export type WidgetDomain = string

/**
 * Hosts as a hostname or IPv4/IPv6 address represented by strings. The widget will
 * only work on these domains, and their subdomains.
 */
export type WidgetDomainParam = string

/**
 * A Turnstile Widgets configuration as it appears in listings
 */
export interface WidgetListResponse {
  /**
   * If bot_fight_mode is set to `true`, Cloudflare issues computationally expensive
   * challenges in response to malicious bots (ENT only).
   */
  bot_fight_mode: boolean;

  /**
   * If Turnstile is embedded on a Cloudflare site and the widget should grant
   * challenge clearance, this setting can determine the clearance level to be set
   */
  clearance_level: 'no_clearance' | 'jschallenge' | 'managed' | 'interactive';

  /**
   * When the widget was created.
   */
  created_on: string;

  domains: Array<WidgetDomain>;

  /**
   * Widget Mode
   */
  mode: 'non-interactive' | 'invisible' | 'managed';

  /**
   * When the widget was modified.
   */
  modified_on: string;

  /**
   * Human readable widget name. Not unique. Cloudflare suggests that you set this to
   * a meaningful string to make it easier to identify your widget, and where it is
   * used.
   */
  name: string;

  /**
   * Do not show any Cloudflare branding on the widget (ENT only).
   */
  offlabel: boolean;

  /**
   * Region where this widget can be used.
   */
  region: 'world';

  /**
   * Widget item identifier tag.
   */
  sitekey: string;
}

export interface WidgetCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  domains: Array<WidgetDomainParam>;

  /**
   * Body param: Widget Mode
   */
  mode: 'non-interactive' | 'invisible' | 'managed';

  /**
   * Body param: Human readable widget name. Not unique. Cloudflare suggests that you
   * set this to a meaningful string to make it easier to identify your widget, and
   * where it is used.
   */
  name: string;

  /**
   * Query param: Direction to order widgets.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Field to order widgets by.
   */
  order?: 'id' | 'sitekey' | 'name' | 'created_on' | 'modified_on';

  /**
   * Query param: Page number of paginated results.
   */
  page?: number;

  /**
   * Query param: Number of items per page.
   */
  per_page?: number;

  /**
   * Body param: If bot_fight_mode is set to `true`, Cloudflare issues
   * computationally expensive challenges in response to malicious bots (ENT only).
   */
  bot_fight_mode?: boolean;

  /**
   * Body param: If Turnstile is embedded on a Cloudflare site and the widget should
   * grant challenge clearance, this setting can determine the clearance level to be
   * set
   */
  clearance_level?: 'no_clearance' | 'jschallenge' | 'managed' | 'interactive';

  /**
   * Body param: Do not show any Cloudflare branding on the widget (ENT only).
   */
  offlabel?: boolean;

  /**
   * Body param: Region where this widget can be used.
   */
  region?: 'world';
}

export interface WidgetUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  domains: Array<WidgetDomainParam>;

  /**
   * Body param: Widget Mode
   */
  mode: 'non-interactive' | 'invisible' | 'managed';

  /**
   * Body param: Human readable widget name. Not unique. Cloudflare suggests that you
   * set this to a meaningful string to make it easier to identify your widget, and
   * where it is used.
   */
  name: string;

  /**
   * Body param: If bot_fight_mode is set to `true`, Cloudflare issues
   * computationally expensive challenges in response to malicious bots (ENT only).
   */
  bot_fight_mode?: boolean;

  /**
   * Body param: If Turnstile is embedded on a Cloudflare site and the widget should
   * grant challenge clearance, this setting can determine the clearance level to be
   * set
   */
  clearance_level?: 'no_clearance' | 'jschallenge' | 'managed' | 'interactive';

  /**
   * Body param: Do not show any Cloudflare branding on the widget (ENT only).
   */
  offlabel?: boolean;
}

export interface WidgetListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Direction to order widgets.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Field to order widgets by.
   */
  order?: 'id' | 'sitekey' | 'name' | 'created_on' | 'modified_on';
}

export interface WidgetDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface WidgetGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface WidgetRotateSecretParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: If `invalidate_immediately` is set to `false`, the previous secret
   * will remain valid for two hours. Otherwise, the secret is immediately
   * invalidated, and requests using it will be rejected.
   */
  invalidate_immediately?: boolean;
}

export namespace Widgets {
  export import Widget = WidgetsAPI.Widget;
  export import WidgetDomain = WidgetsAPI.WidgetDomain;
  export import WidgetListResponse = WidgetsAPI.WidgetListResponse;
  export import WidgetListResponsesV4PagePaginationArray = WidgetsAPI.WidgetListResponsesV4PagePaginationArray;
  export import WidgetCreateParams = WidgetsAPI.WidgetCreateParams;
  export import WidgetUpdateParams = WidgetsAPI.WidgetUpdateParams;
  export import WidgetListParams = WidgetsAPI.WidgetListParams;
  export import WidgetDeleteParams = WidgetsAPI.WidgetDeleteParams;
  export import WidgetGetParams = WidgetsAPI.WidgetGetParams;
  export import WidgetRotateSecretParams = WidgetsAPI.WidgetRotateSecretParams;
}
