// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OrganizationsAPI from 'cloudflare/resources/access/organizations';

export class Organizations extends APIResource {
  /**
   * Sets up a Zero Trust organization for your account or zone.
   */
  create(
    accountOrZone: string,
    accountOrZoneId: string,
    body: OrganizationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationCreateResponse> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/organizations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OrganizationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the configuration for your Zero Trust organization.
   */
  list(
    accountOrZone: string,
    accountOrZoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationListResponse> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/organizations`,
        options,
      ) as Core.APIPromise<{ result: OrganizationListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the configuration for your Zero Trust organization.
   */
  replace(
    accountOrZone: string,
    accountOrZoneId: string,
    body: OrganizationReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationReplaceResponse> {
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/organizations`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OrganizationReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Revokes a user's access across all applications.
   */
  revokeUsers(
    accountOrZone: string,
    accountOrZoneId: string,
    body: OrganizationRevokeUsersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationRevokeUsersResponse> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/organizations/revoke_user`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OrganizationRevokeUsersResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OrganizationCreateResponse {
  /**
   * When set to true, users can authenticate via WARP for any application in your
   * organization. Application settings will take precedence over this value.
   */
  allow_authenticate_via_warp?: boolean;

  /**
   * The unique subdomain assigned to your Zero Trust organization.
   */
  auth_domain?: string;

  /**
   * When set to `true`, users skip the identity provider selection step during
   * login.
   */
  auto_redirect_to_identity?: boolean;

  created_at?: string;

  custom_pages?: OrganizationCreateResponse.CustomPages;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: OrganizationCreateResponse.LoginDesign;

  /**
   * The name of your Zero Trust organization.
   */
  name?: string;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m,
   * h.
   */
  session_duration?: string;

  /**
   * A description of the reason why the UI read only field is being toggled.
   */
  ui_read_only_toggle_reason?: string;

  updated_at?: string;

  /**
   * The amount of time a user seat is inactive before it expires. When the user seat
   * exceeds the set time of inactivity, the user is removed as an active seat and no
   * longer counts against your Teams seat count. Must be in the format `300ms` or
   * `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
   */
  user_seat_expiration_inactive_time?: string;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `30m` or `2h45m`. Valid time units are: m, h.
   */
  warp_auth_session_duration?: string;
}

export namespace OrganizationCreateResponse {
  export interface CustomPages {
    /**
     * The uid of the custom page to use when a user is denied access after failing a
     * non-identity rule.
     */
    forbidden?: string;

    /**
     * The uid of the custom page to use when a user is denied access.
     */
    identity_denied?: string;
  }

  export interface LoginDesign {
    /**
     * The background color on your login page.
     */
    background_color?: string;

    /**
     * The text at the bottom of your login page.
     */
    footer_text?: string;

    /**
     * The text at the top of your login page.
     */
    header_text?: string;

    /**
     * The URL of the logo on your login page.
     */
    logo_path?: string;

    /**
     * The text color on your login page.
     */
    text_color?: string;
  }
}

export interface OrganizationListResponse {
  /**
   * When set to true, users can authenticate via WARP for any application in your
   * organization. Application settings will take precedence over this value.
   */
  allow_authenticate_via_warp?: boolean;

  /**
   * The unique subdomain assigned to your Zero Trust organization.
   */
  auth_domain?: string;

  /**
   * When set to `true`, users skip the identity provider selection step during
   * login.
   */
  auto_redirect_to_identity?: boolean;

  created_at?: string;

  custom_pages?: OrganizationListResponse.CustomPages;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: OrganizationListResponse.LoginDesign;

  /**
   * The name of your Zero Trust organization.
   */
  name?: string;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m,
   * h.
   */
  session_duration?: string;

  /**
   * A description of the reason why the UI read only field is being toggled.
   */
  ui_read_only_toggle_reason?: string;

  updated_at?: string;

  /**
   * The amount of time a user seat is inactive before it expires. When the user seat
   * exceeds the set time of inactivity, the user is removed as an active seat and no
   * longer counts against your Teams seat count. Must be in the format `300ms` or
   * `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
   */
  user_seat_expiration_inactive_time?: string;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `30m` or `2h45m`. Valid time units are: m, h.
   */
  warp_auth_session_duration?: string;
}

export namespace OrganizationListResponse {
  export interface CustomPages {
    /**
     * The uid of the custom page to use when a user is denied access after failing a
     * non-identity rule.
     */
    forbidden?: string;

    /**
     * The uid of the custom page to use when a user is denied access.
     */
    identity_denied?: string;
  }

  export interface LoginDesign {
    /**
     * The background color on your login page.
     */
    background_color?: string;

    /**
     * The text at the bottom of your login page.
     */
    footer_text?: string;

    /**
     * The text at the top of your login page.
     */
    header_text?: string;

    /**
     * The URL of the logo on your login page.
     */
    logo_path?: string;

    /**
     * The text color on your login page.
     */
    text_color?: string;
  }
}

export interface OrganizationReplaceResponse {
  /**
   * When set to true, users can authenticate via WARP for any application in your
   * organization. Application settings will take precedence over this value.
   */
  allow_authenticate_via_warp?: boolean;

  /**
   * The unique subdomain assigned to your Zero Trust organization.
   */
  auth_domain?: string;

  /**
   * When set to `true`, users skip the identity provider selection step during
   * login.
   */
  auto_redirect_to_identity?: boolean;

  created_at?: string;

  custom_pages?: OrganizationReplaceResponse.CustomPages;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: OrganizationReplaceResponse.LoginDesign;

  /**
   * The name of your Zero Trust organization.
   */
  name?: string;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m,
   * h.
   */
  session_duration?: string;

  /**
   * A description of the reason why the UI read only field is being toggled.
   */
  ui_read_only_toggle_reason?: string;

  updated_at?: string;

  /**
   * The amount of time a user seat is inactive before it expires. When the user seat
   * exceeds the set time of inactivity, the user is removed as an active seat and no
   * longer counts against your Teams seat count. Must be in the format `300ms` or
   * `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
   */
  user_seat_expiration_inactive_time?: string;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `30m` or `2h45m`. Valid time units are: m, h.
   */
  warp_auth_session_duration?: string;
}

export namespace OrganizationReplaceResponse {
  export interface CustomPages {
    /**
     * The uid of the custom page to use when a user is denied access after failing a
     * non-identity rule.
     */
    forbidden?: string;

    /**
     * The uid of the custom page to use when a user is denied access.
     */
    identity_denied?: string;
  }

  export interface LoginDesign {
    /**
     * The background color on your login page.
     */
    background_color?: string;

    /**
     * The text at the bottom of your login page.
     */
    footer_text?: string;

    /**
     * The text at the top of your login page.
     */
    header_text?: string;

    /**
     * The URL of the logo on your login page.
     */
    logo_path?: string;

    /**
     * The text color on your login page.
     */
    text_color?: string;
  }
}

export type OrganizationRevokeUsersResponse = true | false;

export interface OrganizationCreateParams {
  /**
   * The unique subdomain assigned to your Zero Trust organization.
   */
  auth_domain: string;

  /**
   * The name of your Zero Trust organization.
   */
  name: string;

  /**
   * When set to true, users can authenticate via WARP for any application in your
   * organization. Application settings will take precedence over this value.
   */
  allow_authenticate_via_warp?: boolean;

  /**
   * When set to `true`, users skip the identity provider selection step during
   * login.
   */
  auto_redirect_to_identity?: boolean;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: OrganizationCreateParams.LoginDesign;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m,
   * h.
   */
  session_duration?: string;

  /**
   * A description of the reason why the UI read only field is being toggled.
   */
  ui_read_only_toggle_reason?: string;

  /**
   * The amount of time a user seat is inactive before it expires. When the user seat
   * exceeds the set time of inactivity, the user is removed as an active seat and no
   * longer counts against your Teams seat count. Must be in the format `300ms` or
   * `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
   */
  user_seat_expiration_inactive_time?: string;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `30m` or `2h45m`. Valid time units are: m, h.
   */
  warp_auth_session_duration?: string;
}

export namespace OrganizationCreateParams {
  export interface LoginDesign {
    /**
     * The background color on your login page.
     */
    background_color?: string;

    /**
     * The text at the bottom of your login page.
     */
    footer_text?: string;

    /**
     * The text at the top of your login page.
     */
    header_text?: string;

    /**
     * The URL of the logo on your login page.
     */
    logo_path?: string;

    /**
     * The text color on your login page.
     */
    text_color?: string;
  }
}

export interface OrganizationReplaceParams {
  /**
   * When set to true, users can authenticate via WARP for any application in your
   * organization. Application settings will take precedence over this value.
   */
  allow_authenticate_via_warp?: boolean;

  /**
   * The unique subdomain assigned to your Zero Trust organization.
   */
  auth_domain?: string;

  /**
   * When set to `true`, users skip the identity provider selection step during
   * login.
   */
  auto_redirect_to_identity?: boolean;

  custom_pages?: OrganizationReplaceParams.CustomPages;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: OrganizationReplaceParams.LoginDesign;

  /**
   * The name of your Zero Trust organization.
   */
  name?: string;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `300ms` or `2h45m`. Valid time units are: ns, us (or µs), ms, s, m,
   * h.
   */
  session_duration?: string;

  /**
   * A description of the reason why the UI read only field is being toggled.
   */
  ui_read_only_toggle_reason?: string;

  /**
   * The amount of time a user seat is inactive before it expires. When the user seat
   * exceeds the set time of inactivity, the user is removed as an active seat and no
   * longer counts against your Teams seat count. Must be in the format `300ms` or
   * `2h45m`. Valid time units are: `ns`, `us` (or `µs`), `ms`, `s`, `m`, `h`.
   */
  user_seat_expiration_inactive_time?: string;

  /**
   * The amount of time that tokens issued for applications will be valid. Must be in
   * the format `30m` or `2h45m`. Valid time units are: m, h.
   */
  warp_auth_session_duration?: string;
}

export namespace OrganizationReplaceParams {
  export interface CustomPages {
    /**
     * The uid of the custom page to use when a user is denied access after failing a
     * non-identity rule.
     */
    forbidden?: string;

    /**
     * The uid of the custom page to use when a user is denied access.
     */
    identity_denied?: string;
  }

  export interface LoginDesign {
    /**
     * The background color on your login page.
     */
    background_color?: string;

    /**
     * The text at the bottom of your login page.
     */
    footer_text?: string;

    /**
     * The text at the top of your login page.
     */
    header_text?: string;

    /**
     * The URL of the logo on your login page.
     */
    logo_path?: string;

    /**
     * The text color on your login page.
     */
    text_color?: string;
  }
}

export interface OrganizationRevokeUsersParams {
  /**
   * The email of the user to revoke.
   */
  email: string;
}

export namespace Organizations {
  export import OrganizationCreateResponse = OrganizationsAPI.OrganizationCreateResponse;
  export import OrganizationListResponse = OrganizationsAPI.OrganizationListResponse;
  export import OrganizationReplaceResponse = OrganizationsAPI.OrganizationReplaceResponse;
  export import OrganizationRevokeUsersResponse = OrganizationsAPI.OrganizationRevokeUsersResponse;
  export import OrganizationCreateParams = OrganizationsAPI.OrganizationCreateParams;
  export import OrganizationReplaceParams = OrganizationsAPI.OrganizationReplaceParams;
  export import OrganizationRevokeUsersParams = OrganizationsAPI.OrganizationRevokeUsersParams;
}
