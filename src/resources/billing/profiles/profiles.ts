// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PaymentMethodAPI from './payment-method';
import {
  BasePaymentMethod,
  PaymentMethod,
  PaymentMethodCreateParams,
  PaymentMethodCreateResponse,
} from './payment-method';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseProfiles extends APIResource {
  static override readonly _key: readonly ['billing', 'profiles'] = Object.freeze([
    'billing',
    'profiles',
  ] as const);

  /**
   * Creates a billing profile for an account.
   *
   * @example
   * ```ts
   * const profile = await client.billing.profiles.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  create(params: ProfileCreateParams, options?: RequestOptions): APIPromise<ProfileCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/billing/profile`, { body, ...options }) as APIPromise<{
        result: ProfileCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the billing profile for an account.
   *
   * @example
   * ```ts
   * const profile = await client.billing.profiles.update({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  update(params: ProfileUpdateParams, options?: RequestOptions): APIPromise<ProfileUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/billing/profile`, { body, ...options }) as APIPromise<{
        result: ProfileUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the billing profile for an account.
   *
   * @example
   * ```ts
   * await client.billing.profiles.delete({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  delete(params: ProfileDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(path`/accounts/${account_id}/billing/profile`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Gets the current billing profile for the account.
   *
   * @example
   * ```ts
   * const profile = await client.billing.profiles.get({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: ProfileGetParams, options?: RequestOptions): APIPromise<ProfileGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/billing/profile`, options) as APIPromise<{
        result: ProfileGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the billing email addresses and preferred locale for an account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.billing.profiles.updateBillingEmail({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  updateBillingEmail(
    params: ProfileUpdateBillingEmailParams,
    options?: RequestOptions,
  ): APIPromise<ProfileUpdateBillingEmailResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/billing/profile`, { body, ...options }) as APIPromise<{
        result: ProfileUpdateBillingEmailResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Profiles extends BaseProfiles {
  paymentMethod: PaymentMethodAPI.PaymentMethod = new PaymentMethodAPI.PaymentMethod(this._client);
}

export interface ProfileCreateResponse {
  /**
   * Billing item identifier tag.
   */
  id?: string;

  account_type?: string;

  address?: string;

  address2?: string;

  balance?: string;

  card_expiry_month?: number;

  card_expiry_year?: number;

  card_number?: string;

  city?: string;

  company?: string;

  country?: string;

  created_on?: string;

  edited_on?: string;

  enterprise_billing_email?: string;

  enterprise_primary_email?: string;

  first_name?: string;

  is_partner?: boolean;

  last_name?: string;

  next_bill_date?: string;

  payment_address?: string;

  payment_address2?: string;

  payment_city?: string;

  payment_country?: string;

  payment_email?: string;

  payment_first_name?: string;

  payment_last_name?: string;

  payment_state?: string;

  payment_zipcode?: string;

  primary_email?: string;

  state?: string;

  tax_id_type?: string;

  telephone?: string;

  validation_code?: string;

  vat?: string;

  zipcode?: string;
}

export interface ProfileUpdateResponse {
  /**
   * Billing item identifier tag.
   */
  id?: string;

  account_type?: string;

  address?: string;

  address2?: string;

  balance?: string;

  card_expiry_month?: number;

  card_expiry_year?: number;

  card_number?: string;

  city?: string;

  company?: string;

  country?: string;

  created_on?: string;

  edited_on?: string;

  enterprise_billing_email?: string;

  enterprise_primary_email?: string;

  first_name?: string;

  is_partner?: boolean;

  last_name?: string;

  next_bill_date?: string;

  payment_address?: string;

  payment_address2?: string;

  payment_city?: string;

  payment_country?: string;

  payment_email?: string;

  payment_first_name?: string;

  payment_last_name?: string;

  payment_state?: string;

  payment_zipcode?: string;

  primary_email?: string;

  state?: string;

  tax_id_type?: string;

  telephone?: string;

  validation_code?: string;

  vat?: string;

  zipcode?: string;
}

export interface ProfileGetResponse {
  /**
   * Billing item identifier tag.
   */
  id?: string;

  account_type?: string;

  address?: string;

  address2?: string;

  balance?: string;

  card_expiry_month?: number;

  card_expiry_year?: number;

  card_number?: string;

  city?: string;

  company?: string;

  country?: string;

  created_on?: string;

  edited_on?: string;

  enterprise_billing_email?: string;

  enterprise_primary_email?: string;

  first_name?: string;

  is_partner?: boolean;

  last_name?: string;

  next_bill_date?: string;

  payment_address?: string;

  payment_address2?: string;

  payment_city?: string;

  payment_country?: string;

  payment_email?: string;

  payment_first_name?: string;

  payment_last_name?: string;

  payment_state?: string;

  payment_zipcode?: string;

  primary_email?: string;

  state?: string;

  tax_id_type?: string;

  telephone?: string;

  validation_code?: string;

  vat?: string;

  zipcode?: string;
}

export interface ProfileUpdateBillingEmailResponse {
  /**
   * Billing item identifier tag.
   */
  id?: string;

  account_type?: string;

  address?: string;

  address2?: string;

  balance?: string;

  card_expiry_month?: number;

  card_expiry_year?: number;

  card_number?: string;

  city?: string;

  company?: string;

  country?: string;

  created_on?: string;

  edited_on?: string;

  enterprise_billing_email?: string;

  enterprise_primary_email?: string;

  first_name?: string;

  is_partner?: boolean;

  last_name?: string;

  next_bill_date?: string;

  payment_address?: string;

  payment_address2?: string;

  payment_city?: string;

  payment_country?: string;

  payment_email?: string;

  payment_first_name?: string;

  payment_last_name?: string;

  payment_state?: string;

  payment_zipcode?: string;

  primary_email?: string;

  state?: string;

  tax_id_type?: string;

  telephone?: string;

  validation_code?: string;

  vat?: string;

  zipcode?: string;
}

export interface ProfileCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Street address line 1.
   */
  address?: string;

  /**
   * Body param: Street address line 2 (apt, suite, etc.).
   */
  address2?: string;

  /**
   * Body param: Primary billing email address.
   */
  billing_email?: string;

  /**
   * Body param: Rate plan being purchased right after profile setup.
   */
  buying_rate_plan?: string;

  /**
   * Body param: Captcha challenge JWT issued during onboarding.
   */
  captcha_challenge_jwt?: string;

  /**
   * Body param: Cloudflare Turnstile response.
   */
  cf_turnstile_response?: string;

  /**
   * Body param: City on the billing profile.
   */
  city?: string;

  /**
   * Body param: Company name on the billing profile.
   */
  company?: string;

  /**
   * Body param: ISO 3166-1 alpha-2 country code.
   */
  country?: string;

  /**
   * Body param: First name on the billing profile.
   */
  first_name?: string;

  /**
   * Body param: hCaptcha response.
   */
  h_captcha_response?: string;

  /**
   * Body param: Last name on the billing profile.
   */
  last_name?: string;

  /**
   * Body param: Preferred locale for invoice rendering (BCP 47).
   */
  preferred_locale?: string;

  /**
   * Body param: Secondary billing email address for CC on invoices.
   */
  secondary_billing_email?: string;

  /**
   * Body param: State or region on the billing profile.
   */
  state?: string;

  /**
   * Body param: Type of tax ID provided.
   */
  tax_id_type?: string;

  /**
   * Body param: Contact phone number.
   */
  telephone?: string;

  /**
   * Body param: VAT identifier.
   */
  vat?: string;

  /**
   * Body param: ZIP or postal code.
   */
  zipcode?: string;
}

export interface ProfileUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Street address line 1.
   */
  address?: string;

  /**
   * Body param: Street address line 2 (apt, suite, etc.).
   */
  address2?: string;

  /**
   * Body param: Primary billing email address.
   */
  billing_email?: string;

  /**
   * Body param: Rate plan being purchased right after profile setup.
   */
  buying_rate_plan?: string;

  /**
   * Body param: Captcha challenge JWT issued during onboarding.
   */
  captcha_challenge_jwt?: string;

  /**
   * Body param: Cloudflare Turnstile response.
   */
  cf_turnstile_response?: string;

  /**
   * Body param: City on the billing profile.
   */
  city?: string;

  /**
   * Body param: Company name on the billing profile.
   */
  company?: string;

  /**
   * Body param: ISO 3166-1 alpha-2 country code.
   */
  country?: string;

  /**
   * Body param: First name on the billing profile.
   */
  first_name?: string;

  /**
   * Body param: hCaptcha response.
   */
  h_captcha_response?: string;

  /**
   * Body param: Last name on the billing profile.
   */
  last_name?: string;

  /**
   * Body param: Preferred locale for invoice rendering (BCP 47).
   */
  preferred_locale?: string;

  /**
   * Body param: Secondary billing email address for CC on invoices.
   */
  secondary_billing_email?: string;

  /**
   * Body param: State or region on the billing profile.
   */
  state?: string;

  /**
   * Body param: Type of tax ID provided.
   */
  tax_id_type?: string;

  /**
   * Body param: Contact phone number.
   */
  telephone?: string;

  /**
   * Body param: VAT identifier.
   */
  vat?: string;

  /**
   * Body param: ZIP or postal code.
   */
  zipcode?: string;
}

export interface ProfileDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ProfileGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ProfileUpdateBillingEmailParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param
   */
  billing_email?: string;

  /**
   * Body param
   */
  preferred_locale?: string;

  /**
   * Body param
   */
  secondary_billing_email?: string;
}

Profiles.PaymentMethod = PaymentMethod;
Profiles.BasePaymentMethod = BasePaymentMethod;

export declare namespace Profiles {
  export {
    type ProfileCreateResponse as ProfileCreateResponse,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileGetResponse as ProfileGetResponse,
    type ProfileUpdateBillingEmailResponse as ProfileUpdateBillingEmailResponse,
    type ProfileCreateParams as ProfileCreateParams,
    type ProfileUpdateParams as ProfileUpdateParams,
    type ProfileDeleteParams as ProfileDeleteParams,
    type ProfileGetParams as ProfileGetParams,
    type ProfileUpdateBillingEmailParams as ProfileUpdateBillingEmailParams,
  };

  export {
    PaymentMethod as PaymentMethod,
    BasePaymentMethod as BasePaymentMethod,
    type PaymentMethodCreateResponse as PaymentMethodCreateResponse,
    type PaymentMethodCreateParams as PaymentMethodCreateParams,
  };
}
