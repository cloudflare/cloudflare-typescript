// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OrganizationsAPI from 'cloudflare/resources/access/organizations/organizations';
import * as RevokeUsersAPI from 'cloudflare/resources/access/organizations/revoke-users';

export class Organizations extends APIResource {
  revokeUsers: RevokeUsersAPI.RevokeUsers = new RevokeUsersAPI.RevokeUsers(this._client);

  /**
   * Sets up a Zero Trust organization for your account or zone.
   */
  zeroTrustOrganizationCreateYourZeroTrustOrganization(
    accountOrZone: string,
    accountOrZoneId: string,
    body: OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse> {
    return (
      this._client.post(`/${accountOrZone}/${accountOrZoneId}/access/organizations`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the configuration for your Zero Trust organization.
   */
  zeroTrustOrganizationGetYourZeroTrustOrganization(
    accountOrZone: string,
    accountOrZoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse> {
    return (
      this._client.get(
        `/${accountOrZone}/${accountOrZoneId}/access/organizations`,
        options,
      ) as Core.APIPromise<{ result: OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the configuration for your Zero Trust organization.
   */
  zeroTrustOrganizationUpdateYourZeroTrustOrganization(
    accountOrZone: string,
    accountOrZoneId: string,
    body: OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse> {
    return (
      this._client.put(`/${accountOrZone}/${accountOrZoneId}/access/organizations`, {
        body,
        ...options,
      }) as Core.APIPromise<{
        result: OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse {
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

  custom_pages?: OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse.CustomPages;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse.LoginDesign;

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

export namespace OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse {
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

export interface OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse {
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

  custom_pages?: OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse.CustomPages;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse.LoginDesign;

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

export namespace OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse {
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

export interface OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse {
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

  custom_pages?: OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse.CustomPages;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse.LoginDesign;

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

export namespace OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse {
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

export interface OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams {
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

  login_design?: OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams.LoginDesign;

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

export namespace OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams {
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

export interface OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams {
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

  custom_pages?: OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams.CustomPages;

  /**
   * Lock all settings as Read-Only in the Dashboard, regardless of user permission.
   * Updates may only be made via the API or Terraform for this account when enabled.
   */
  is_ui_read_only?: boolean;

  login_design?: OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams.LoginDesign;

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

export namespace OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams {
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

export namespace Organizations {
  export import OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse;
  export import OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse;
  export import OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse = OrganizationsAPI.OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse;
  export import OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams = OrganizationsAPI.OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationParams;
  export import OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams = OrganizationsAPI.OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationParams;
  export import RevokeUsers = RevokeUsersAPI.RevokeUsers;
  export import RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse = RevokeUsersAPI.RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse;
  export import RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserParams = RevokeUsersAPI.RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserParams;
}
