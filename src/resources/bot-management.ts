// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class BotManagement extends APIResource {
  /**
   * Updates the Bot Management configuration for a zone.
   *
   * This API is used to update:
   *
   * - **Bot Fight Mode**
   * - **Super Bot Fight Mode**
   * - **Bot Management for Enterprise**
   *
   * See [Bot Plans](https://developers.cloudflare.com/bots/plans/) for more
   * information on the different plans
   */
  update(
    params: BotManagementUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BotManagementUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/bot_management`, { body, ...options }) as Core.APIPromise<{
        result: BotManagementUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a zone's Bot Management Config
   */
  get(
    params: BotManagementGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BotManagementGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/bot_management`, options) as Core.APIPromise<{
        result: BotManagementGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface BotFightModeConfiguration {
  /**
   * Enable rule to block AI Scrapers and Crawlers.
   */
  ai_bots_protection?: 'block' | 'disabled';

  /**
   * Use lightweight, invisible JavaScript detections to improve Bot Management.
   * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
   */
  enable_js?: boolean;

  /**
   * Whether to enable Bot Fight Mode.
   */
  fight_mode?: boolean;

  /**
   * A read-only field that indicates whether the zone currently is running the
   * latest ML model.
   */
  using_latest_model?: boolean;
}

export interface SubscriptionConfiguration {
  /**
   * Enable rule to block AI Scrapers and Crawlers.
   */
  ai_bots_protection?: 'block' | 'disabled';

  /**
   * Automatically update to the newest bot detection models created by Cloudflare as
   * they are released.
   * [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes)
   */
  auto_update_model?: boolean;

  /**
   * Use lightweight, invisible JavaScript detections to improve Bot Management.
   * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
   */
  enable_js?: boolean;

  /**
   * Whether to disable tracking the highest bot score for a session in the Bot
   * Management cookie.
   */
  suppress_session_score?: boolean;

  /**
   * A read-only field that indicates whether the zone currently is running the
   * latest ML model.
   */
  using_latest_model?: boolean;
}

export interface SuperBotFightModeDefinitelyConfiguration {
  /**
   * Enable rule to block AI Scrapers and Crawlers.
   */
  ai_bots_protection?: 'block' | 'disabled';

  /**
   * Use lightweight, invisible JavaScript detections to improve Bot Management.
   * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
   */
  enable_js?: boolean;

  /**
   * Whether to optimize Super Bot Fight Mode protections for Wordpress.
   */
  optimize_wordpress?: boolean;

  /**
   * Super Bot Fight Mode (SBFM) action to take on definitely automated requests.
   */
  sbfm_definitely_automated?: 'allow' | 'block' | 'managed_challenge';

  /**
   * Super Bot Fight Mode (SBFM) to enable static resource protection. Enable if
   * static resources on your application need bot protection. Note: Static resource
   * protection can also result in legitimate traffic being blocked.
   */
  sbfm_static_resource_protection?: boolean;

  /**
   * Super Bot Fight Mode (SBFM) action to take on verified bots requests.
   */
  sbfm_verified_bots?: 'allow' | 'block';

  /**
   * A read-only field that indicates whether the zone currently is running the
   * latest ML model.
   */
  using_latest_model?: boolean;
}

export interface SuperBotFightModeLikelyConfiguration {
  /**
   * Enable rule to block AI Scrapers and Crawlers.
   */
  ai_bots_protection?: 'block' | 'disabled';

  /**
   * Use lightweight, invisible JavaScript detections to improve Bot Management.
   * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
   */
  enable_js?: boolean;

  /**
   * Whether to optimize Super Bot Fight Mode protections for Wordpress.
   */
  optimize_wordpress?: boolean;

  /**
   * Super Bot Fight Mode (SBFM) action to take on definitely automated requests.
   */
  sbfm_definitely_automated?: 'allow' | 'block' | 'managed_challenge';

  /**
   * Super Bot Fight Mode (SBFM) action to take on likely automated requests.
   */
  sbfm_likely_automated?: 'allow' | 'block' | 'managed_challenge';

  /**
   * Super Bot Fight Mode (SBFM) to enable static resource protection. Enable if
   * static resources on your application need bot protection. Note: Static resource
   * protection can also result in legitimate traffic being blocked.
   */
  sbfm_static_resource_protection?: boolean;

  /**
   * Super Bot Fight Mode (SBFM) action to take on verified bots requests.
   */
  sbfm_verified_bots?: 'allow' | 'block';

  /**
   * A read-only field that indicates whether the zone currently is running the
   * latest ML model.
   */
  using_latest_model?: boolean;
}

export type BotManagementUpdateResponse =
  | BotFightModeConfiguration
  | SuperBotFightModeDefinitelyConfiguration
  | SuperBotFightModeLikelyConfiguration
  | SubscriptionConfiguration;

export type BotManagementGetResponse =
  | BotFightModeConfiguration
  | SuperBotFightModeDefinitelyConfiguration
  | SuperBotFightModeLikelyConfiguration
  | SubscriptionConfiguration;

export type BotManagementUpdateParams =
  | BotManagementUpdateParams.BotFightModeConfiguration
  | BotManagementUpdateParams.SuperBotFightModeDefinitelyConfiguration
  | BotManagementUpdateParams.SuperBotFightModeLikelyConfiguration
  | BotManagementUpdateParams.SubscriptionConfiguration;

export namespace BotManagementUpdateParams {
  export interface BotFightModeConfiguration {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Enable rule to block AI Scrapers and Crawlers.
     */
    ai_bots_protection?: 'block' | 'disabled';

    /**
     * Body param: Use lightweight, invisible JavaScript detections to improve Bot
     * Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Body param: Whether to enable Bot Fight Mode.
     */
    fight_mode?: boolean;
  }

  export interface SuperBotFightModeDefinitelyConfiguration {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Enable rule to block AI Scrapers and Crawlers.
     */
    ai_bots_protection?: 'block' | 'disabled';

    /**
     * Body param: Use lightweight, invisible JavaScript detections to improve Bot
     * Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Body param: Whether to optimize Super Bot Fight Mode protections for Wordpress.
     */
    optimize_wordpress?: boolean;

    /**
     * Body param: Super Bot Fight Mode (SBFM) action to take on definitely automated
     * requests.
     */
    sbfm_definitely_automated?: 'allow' | 'block' | 'managed_challenge';

    /**
     * Body param: Super Bot Fight Mode (SBFM) to enable static resource protection.
     * Enable if static resources on your application need bot protection. Note: Static
     * resource protection can also result in legitimate traffic being blocked.
     */
    sbfm_static_resource_protection?: boolean;

    /**
     * Body param: Super Bot Fight Mode (SBFM) action to take on verified bots
     * requests.
     */
    sbfm_verified_bots?: 'allow' | 'block';
  }

  export interface SuperBotFightModeLikelyConfiguration {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Enable rule to block AI Scrapers and Crawlers.
     */
    ai_bots_protection?: 'block' | 'disabled';

    /**
     * Body param: Use lightweight, invisible JavaScript detections to improve Bot
     * Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Body param: Whether to optimize Super Bot Fight Mode protections for Wordpress.
     */
    optimize_wordpress?: boolean;

    /**
     * Body param: Super Bot Fight Mode (SBFM) action to take on definitely automated
     * requests.
     */
    sbfm_definitely_automated?: 'allow' | 'block' | 'managed_challenge';

    /**
     * Body param: Super Bot Fight Mode (SBFM) action to take on likely automated
     * requests.
     */
    sbfm_likely_automated?: 'allow' | 'block' | 'managed_challenge';

    /**
     * Body param: Super Bot Fight Mode (SBFM) to enable static resource protection.
     * Enable if static resources on your application need bot protection. Note: Static
     * resource protection can also result in legitimate traffic being blocked.
     */
    sbfm_static_resource_protection?: boolean;

    /**
     * Body param: Super Bot Fight Mode (SBFM) action to take on verified bots
     * requests.
     */
    sbfm_verified_bots?: 'allow' | 'block';
  }

  export interface SubscriptionConfiguration {
    /**
     * Path param: Identifier
     */
    zone_id: string;

    /**
     * Body param: Enable rule to block AI Scrapers and Crawlers.
     */
    ai_bots_protection?: 'block' | 'disabled';

    /**
     * Body param: Automatically update to the newest bot detection models created by
     * Cloudflare as they are released.
     * [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes)
     */
    auto_update_model?: boolean;

    /**
     * Body param: Use lightweight, invisible JavaScript detections to improve Bot
     * Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Body param: Whether to disable tracking the highest bot score for a session in
     * the Bot Management cookie.
     */
    suppress_session_score?: boolean;
  }
}

export interface BotManagementGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}
