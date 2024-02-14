// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BotManagementsAPI from 'cloudflare/resources/bot-managements';

export class BotManagements extends APIResource {
  /**
   * Retrieve a zone's Bot Management Config
   */
  retrieve(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<BotManagementRetrieveResponse> {
    return (
      this._client.get(`/zones/${zoneId}/bot_management`, options) as Core.APIPromise<{
        result: BotManagementRetrieveResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

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
    zoneId: string,
    body: BotManagementUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BotManagementUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneId}/bot_management`, { body, ...options }) as Core.APIPromise<{
        result: BotManagementUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type BotManagementRetrieveResponse =
  | BotManagementRetrieveResponse.BotManagementBotFightModeConfig
  | BotManagementRetrieveResponse.BotManagementSbfmDefinitelyConfig
  | BotManagementRetrieveResponse.BotManagementSbfmLikelyConfig
  | BotManagementRetrieveResponse.BotManagementBmSubscriptionConfig;

export namespace BotManagementRetrieveResponse {
  export interface BotManagementBotFightModeConfig {
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

  export interface BotManagementSbfmDefinitelyConfig {
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

  export interface BotManagementSbfmLikelyConfig {
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

  export interface BotManagementBmSubscriptionConfig {
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
}

export type BotManagementUpdateResponse =
  | BotManagementUpdateResponse.BotManagementBotFightModeConfig
  | BotManagementUpdateResponse.BotManagementSbfmDefinitelyConfig
  | BotManagementUpdateResponse.BotManagementSbfmLikelyConfig
  | BotManagementUpdateResponse.BotManagementBmSubscriptionConfig;

export namespace BotManagementUpdateResponse {
  export interface BotManagementBotFightModeConfig {
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

  export interface BotManagementSbfmDefinitelyConfig {
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

  export interface BotManagementSbfmLikelyConfig {
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

  export interface BotManagementBmSubscriptionConfig {
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
}

export type BotManagementUpdateParams =
  | BotManagementUpdateParams.BotManagementBotFightModeConfig
  | BotManagementUpdateParams.BotManagementSbfmDefinitelyConfig
  | BotManagementUpdateParams.BotManagementSbfmLikelyConfig
  | BotManagementUpdateParams.BotManagementBmSubscriptionConfig;

export namespace BotManagementUpdateParams {
  export interface BotManagementBotFightModeConfig {
    /**
     * Use lightweight, invisible JavaScript detections to improve Bot Management.
     * [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).
     */
    enable_js?: boolean;

    /**
     * Whether to enable Bot Fight Mode.
     */
    fight_mode?: boolean;
  }

  export interface BotManagementSbfmDefinitelyConfig {
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
  }

  export interface BotManagementSbfmLikelyConfig {
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
  }

  export interface BotManagementBmSubscriptionConfig {
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
  }
}

export namespace BotManagements {
  export import BotManagementRetrieveResponse = BotManagementsAPI.BotManagementRetrieveResponse;
  export import BotManagementUpdateResponse = BotManagementsAPI.BotManagementUpdateResponse;
  export import BotManagementUpdateParams = BotManagementsAPI.BotManagementUpdateParams;
}
