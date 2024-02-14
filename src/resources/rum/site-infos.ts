// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SiteInfosAPI from 'cloudflare/resources/rum/site-infos';

export class SiteInfos extends APIResource {
  /**
   * Creates a new Web Analytics site.
   */
  create(
    accountIdentifier: string,
    body: SiteInfoCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteInfoCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/rum/site_info`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SiteInfoCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a Web Analytics site.
   */
  retrieve(
    accountIdentifier: string,
    siteIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteInfoRetrieveResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/rum/site_info/${siteIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: SiteInfoRetrieveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing Web Analytics site.
   */
  update(
    accountIdentifier: string,
    siteIdentifier: string,
    body: SiteInfoUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteInfoUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/rum/site_info/${siteIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SiteInfoUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all Web Analytics sites of an account.
   */
  list(
    accountIdentifier: string,
    query?: SiteInfoListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteInfoListResponse>;
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<SiteInfoListResponse>;
  list(
    accountIdentifier: string,
    query: SiteInfoListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteInfoListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountIdentifier, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountIdentifier}/rum/site_info/list`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SiteInfoListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an existing Web Analytics site.
   */
  delete(
    accountIdentifier: string,
    siteIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SiteInfoDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/rum/site_info/${siteIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: SiteInfoDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SiteInfoCreateResponse {
  /**
   * If enabled, the JavaScript snippet is automatically injected for orange-clouded
   * sites.
   */
  auto_install?: boolean;

  created?: string;

  /**
   * A list of rules.
   */
  rules?: Array<SiteInfoCreateResponse.Rule>;

  ruleset?: SiteInfoCreateResponse.Ruleset;

  /**
   * The Web Analytics site identifier.
   */
  site_tag?: string;

  /**
   * The Web Analytics site token.
   */
  site_token?: string;

  /**
   * Encoded JavaScript snippet.
   */
  snippet?: string;
}

export namespace SiteInfoCreateResponse {
  export interface Rule {
    /**
     * The Web Analytics rule identifier.
     */
    id?: string;

    created?: string;

    /**
     * The hostname the rule will be applied to.
     */
    host?: string;

    /**
     * Whether the rule includes or excludes traffic from being measured.
     */
    inclusive?: boolean;

    /**
     * Whether the rule is paused or not.
     */
    is_paused?: boolean;

    /**
     * The paths the rule will be applied to.
     */
    paths?: Array<string>;

    priority?: number;
  }

  export interface Ruleset {
    /**
     * The Web Analytics ruleset identifier.
     */
    id?: string;

    /**
     * Whether the ruleset is enabled.
     */
    enabled?: boolean;

    zone_name?: string;

    /**
     * The zone identifier.
     */
    zone_tag?: string;
  }
}

export interface SiteInfoRetrieveResponse {
  /**
   * If enabled, the JavaScript snippet is automatically injected for orange-clouded
   * sites.
   */
  auto_install?: boolean;

  created?: string;

  /**
   * A list of rules.
   */
  rules?: Array<SiteInfoRetrieveResponse.Rule>;

  ruleset?: SiteInfoRetrieveResponse.Ruleset;

  /**
   * The Web Analytics site identifier.
   */
  site_tag?: string;

  /**
   * The Web Analytics site token.
   */
  site_token?: string;

  /**
   * Encoded JavaScript snippet.
   */
  snippet?: string;
}

export namespace SiteInfoRetrieveResponse {
  export interface Rule {
    /**
     * The Web Analytics rule identifier.
     */
    id?: string;

    created?: string;

    /**
     * The hostname the rule will be applied to.
     */
    host?: string;

    /**
     * Whether the rule includes or excludes traffic from being measured.
     */
    inclusive?: boolean;

    /**
     * Whether the rule is paused or not.
     */
    is_paused?: boolean;

    /**
     * The paths the rule will be applied to.
     */
    paths?: Array<string>;

    priority?: number;
  }

  export interface Ruleset {
    /**
     * The Web Analytics ruleset identifier.
     */
    id?: string;

    /**
     * Whether the ruleset is enabled.
     */
    enabled?: boolean;

    zone_name?: string;

    /**
     * The zone identifier.
     */
    zone_tag?: string;
  }
}

export interface SiteInfoUpdateResponse {
  /**
   * If enabled, the JavaScript snippet is automatically injected for orange-clouded
   * sites.
   */
  auto_install?: boolean;

  created?: string;

  /**
   * A list of rules.
   */
  rules?: Array<SiteInfoUpdateResponse.Rule>;

  ruleset?: SiteInfoUpdateResponse.Ruleset;

  /**
   * The Web Analytics site identifier.
   */
  site_tag?: string;

  /**
   * The Web Analytics site token.
   */
  site_token?: string;

  /**
   * Encoded JavaScript snippet.
   */
  snippet?: string;
}

export namespace SiteInfoUpdateResponse {
  export interface Rule {
    /**
     * The Web Analytics rule identifier.
     */
    id?: string;

    created?: string;

    /**
     * The hostname the rule will be applied to.
     */
    host?: string;

    /**
     * Whether the rule includes or excludes traffic from being measured.
     */
    inclusive?: boolean;

    /**
     * Whether the rule is paused or not.
     */
    is_paused?: boolean;

    /**
     * The paths the rule will be applied to.
     */
    paths?: Array<string>;

    priority?: number;
  }

  export interface Ruleset {
    /**
     * The Web Analytics ruleset identifier.
     */
    id?: string;

    /**
     * Whether the ruleset is enabled.
     */
    enabled?: boolean;

    zone_name?: string;

    /**
     * The zone identifier.
     */
    zone_tag?: string;
  }
}

export type SiteInfoListResponse = Array<SiteInfoListResponse.SiteInfoListResponseItem>;

export namespace SiteInfoListResponse {
  export interface SiteInfoListResponseItem {
    /**
     * If enabled, the JavaScript snippet is automatically injected for orange-clouded
     * sites.
     */
    auto_install?: boolean;

    created?: string;

    /**
     * A list of rules.
     */
    rules?: Array<SiteInfoListResponseItem.Rule>;

    ruleset?: SiteInfoListResponseItem.Ruleset;

    /**
     * The Web Analytics site identifier.
     */
    site_tag?: string;

    /**
     * The Web Analytics site token.
     */
    site_token?: string;

    /**
     * Encoded JavaScript snippet.
     */
    snippet?: string;
  }

  export namespace SiteInfoListResponseItem {
    export interface Rule {
      /**
       * The Web Analytics rule identifier.
       */
      id?: string;

      created?: string;

      /**
       * The hostname the rule will be applied to.
       */
      host?: string;

      /**
       * Whether the rule includes or excludes traffic from being measured.
       */
      inclusive?: boolean;

      /**
       * Whether the rule is paused or not.
       */
      is_paused?: boolean;

      /**
       * The paths the rule will be applied to.
       */
      paths?: Array<string>;

      priority?: number;
    }

    export interface Ruleset {
      /**
       * The Web Analytics ruleset identifier.
       */
      id?: string;

      /**
       * Whether the ruleset is enabled.
       */
      enabled?: boolean;

      zone_name?: string;

      /**
       * The zone identifier.
       */
      zone_tag?: string;
    }
  }
}

export interface SiteInfoDeleteResponse {
  /**
   * The Web Analytics site identifier.
   */
  site_tag?: string;
}

export interface SiteInfoCreateParams {
  /**
   * If enabled, the JavaScript snippet is automatically injected for orange-clouded
   * sites.
   */
  auto_install?: boolean;

  /**
   * The hostname to use for gray-clouded sites.
   */
  host?: string;

  /**
   * The zone identifier.
   */
  zone_tag?: string;
}

export interface SiteInfoUpdateParams {
  /**
   * If enabled, the JavaScript snippet is automatically injected for orange-clouded
   * sites.
   */
  auto_install?: boolean;

  /**
   * The hostname to use for gray-clouded sites.
   */
  host?: string;

  /**
   * The zone identifier.
   */
  zone_tag?: string;
}

export interface SiteInfoListParams {
  /**
   * The property used to sort the list of results.
   */
  order_by?: 'host' | 'created';

  /**
   * Current page within the paginated list of results.
   */
  page?: number;

  /**
   * Number of items to return per page of results.
   */
  per_page?: number;
}

export namespace SiteInfos {
  export import SiteInfoCreateResponse = SiteInfosAPI.SiteInfoCreateResponse;
  export import SiteInfoRetrieveResponse = SiteInfosAPI.SiteInfoRetrieveResponse;
  export import SiteInfoUpdateResponse = SiteInfosAPI.SiteInfoUpdateResponse;
  export import SiteInfoListResponse = SiteInfosAPI.SiteInfoListResponse;
  export import SiteInfoDeleteResponse = SiteInfosAPI.SiteInfoDeleteResponse;
  export import SiteInfoCreateParams = SiteInfosAPI.SiteInfoCreateParams;
  export import SiteInfoUpdateParams = SiteInfosAPI.SiteInfoUpdateParams;
  export import SiteInfoListParams = SiteInfosAPI.SiteInfoListParams;
}
