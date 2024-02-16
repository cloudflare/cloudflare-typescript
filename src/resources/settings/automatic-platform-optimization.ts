// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AutomaticPlatformOptimizationAPI from 'cloudflare/resources/settings/automatic-platform-optimization';

export class AutomaticPlatformOptimization extends APIResource {
  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  update(
    zoneId: string,
    body: AutomaticPlatformOptimizationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AutomaticPlatformOptimizationUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/automatic_platform_optimization`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AutomaticPlatformOptimizationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/)
   * serves your WordPress site from Cloudflare's edge network and caches third-party
   * fonts.
   */
  get(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AutomaticPlatformOptimizationGetResponse> {
    return (
      this._client.get(
        `/zones/${zoneId}/settings/automatic_platform_optimization`,
        options,
      ) as Core.APIPromise<{ result: AutomaticPlatformOptimizationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AutomaticPlatformOptimizationUpdateResponse {
  /**
   * Indicates whether or not
   * [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/)
   * is enabled.
   */
  cache_by_device_type: boolean;

  /**
   * Indicates whether or not Cloudflare proxy is enabled.
   */
  cf: boolean;

  /**
   * Indicates whether or not Automatic Platform Optimization is enabled.
   */
  enabled: boolean;

  /**
   * An array of hostnames where Automatic Platform Optimization for WordPress is
   * activated.
   */
  hostnames: Array<string>;

  /**
   * Indicates whether or not site is powered by WordPress.
   */
  wordpress: boolean;

  /**
   * Indicates whether or not
   * [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is
   * installed.
   */
  wp_plugin: boolean;
}

export interface AutomaticPlatformOptimizationGetResponse {
  /**
   * Indicates whether or not
   * [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/)
   * is enabled.
   */
  cache_by_device_type: boolean;

  /**
   * Indicates whether or not Cloudflare proxy is enabled.
   */
  cf: boolean;

  /**
   * Indicates whether or not Automatic Platform Optimization is enabled.
   */
  enabled: boolean;

  /**
   * An array of hostnames where Automatic Platform Optimization for WordPress is
   * activated.
   */
  hostnames: Array<string>;

  /**
   * Indicates whether or not site is powered by WordPress.
   */
  wordpress: boolean;

  /**
   * Indicates whether or not
   * [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is
   * installed.
   */
  wp_plugin: boolean;
}

export interface AutomaticPlatformOptimizationUpdateParams {
  value: AutomaticPlatformOptimizationUpdateParams.Value;
}

export namespace AutomaticPlatformOptimizationUpdateParams {
  export interface Value {
    /**
     * Indicates whether or not
     * [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/)
     * is enabled.
     */
    cache_by_device_type: boolean;

    /**
     * Indicates whether or not Cloudflare proxy is enabled.
     */
    cf: boolean;

    /**
     * Indicates whether or not Automatic Platform Optimization is enabled.
     */
    enabled: boolean;

    /**
     * An array of hostnames where Automatic Platform Optimization for WordPress is
     * activated.
     */
    hostnames: Array<string>;

    /**
     * Indicates whether or not site is powered by WordPress.
     */
    wordpress: boolean;

    /**
     * Indicates whether or not
     * [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is
     * installed.
     */
    wp_plugin: boolean;
  }
}

export namespace AutomaticPlatformOptimization {
  export import AutomaticPlatformOptimizationUpdateResponse = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationUpdateResponse;
  export import AutomaticPlatformOptimizationGetResponse = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationGetResponse;
  export import AutomaticPlatformOptimizationUpdateParams = AutomaticPlatformOptimizationAPI.AutomaticPlatformOptimizationUpdateParams;
}
