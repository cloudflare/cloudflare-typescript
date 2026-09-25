// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as BadDebtAPI from './bad-debt';
import { BadDebt, BadDebtGetParams, BadDebtGetResponse, BaseBadDebt } from './bad-debt';
import * as CreditsAPI from './credits';
import { BaseCredits, CreditGetParams, CreditGetResponse, Credits } from './credits';
import * as HistoryAPI from './history';
import {
  BaseHistory,
  History,
  HistoryListParams,
  HistoryListResponse,
  HistoryListResponsesV4PagePaginationArray,
} from './history';
import * as RatePlansAPI from './rate-plans';
import { BaseRatePlans, RatePlanGetResponse, RatePlans } from './rate-plans';
import * as UnpaidInvoiceAPI from './unpaid-invoice';
import {
  BaseUnpaidInvoice,
  UnpaidInvoice,
  UnpaidInvoiceGetParams,
  UnpaidInvoiceGetResponse,
} from './unpaid-invoice';
import * as UsageAPI from './usage';
import {
  BaseUsage,
  Usage,
  UsageGetAccountUsageInfoV1Params,
  UsageGetAccountUsageInfoV1Response,
  UsageGetAccountUsageV1Params,
  UsageGetAccountUsageV1Response,
  UsageGetAccountUsageV2Params,
  UsageGetAccountUsageV2Response,
  UsageGetParams,
  UsageGetResponse,
  UsagePaygoInfoParams,
  UsagePaygoInfoResponse,
  UsagePaygoParams,
  UsagePaygoResponse,
} from './usage';
import * as ProfilesAPI from './profiles/profiles';
import {
  BaseProfiles,
  ProfileCreateParams,
  ProfileCreateResponse,
  ProfileDeleteParams,
  ProfileGetParams,
  ProfileGetResponse,
  ProfileUpdateBillingEmailParams,
  ProfileUpdateBillingEmailResponse,
  ProfileUpdateParams,
  ProfileUpdateResponse,
  Profiles,
} from './profiles/profiles';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class BaseBilling extends APIResource {
  static override readonly _key: readonly ['billing'] = Object.freeze(['billing'] as const);

  /**
   * Validates a billing address and returns validated address suggestions.
   * Authentication is not enforced to support pre-signup address validation flows,
   * so credentials are accepted but not required.
   *
   * @example
   * ```ts
   * const response = await client.billing.addressValidation();
   * ```
   */
  addressValidation(
    body: BillingAddressValidationParams,
    options?: RequestOptions,
  ): APIPromise<BillingAddressValidationResponse> {
    return (
      this._client.post('/billing/address-validation', { body, ...options }) as APIPromise<{
        result: BillingAddressValidationResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Billing extends BaseBilling {
  profiles: ProfilesAPI.Profiles = new ProfilesAPI.Profiles(this._client);
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  credits: CreditsAPI.Credits = new CreditsAPI.Credits(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  badDebt: BadDebtAPI.BadDebt = new BadDebtAPI.BadDebt(this._client);
  unpaidInvoice: UnpaidInvoiceAPI.UnpaidInvoice = new UnpaidInvoiceAPI.UnpaidInvoice(this._client);
  ratePlans: RatePlansAPI.RatePlans = new RatePlansAPI.RatePlans(this._client);
}

export interface BillingAddressValidationResponse {
  /**
   * List of validated address suggestions.
   */
  validated_addresses?: Array<BillingAddressValidationResponse.ValidatedAddress>;
}

export namespace BillingAddressValidationResponse {
  export interface ValidatedAddress {
    /**
     * Validated address line 1.
     */
    address?: string;

    /**
     * Validated address line 2.
     */
    address2?: string;

    /**
     * Validated city.
     */
    city?: string;

    /**
     * Validated country code.
     */
    country?: string;

    /**
     * Validated state or province.
     */
    state?: string;

    /**
     * The validation result code.
     */
    validation_code?: string;

    /**
     * Validated postal or zip code.
     */
    zipcode?: string;
  }
}

export interface BillingAddressValidationParams {
  /**
   * Address line 1.
   */
  address?: string;

  /**
   * Address line 2.
   */
  address2?: string;

  /**
   * City.
   */
  city?: string;

  /**
   * Country code.
   */
  country?: string;

  /**
   * State or province.
   */
  state?: string;

  /**
   * Postal or zip code.
   */
  zipcode?: string;
}

Billing.Profiles = Profiles;
Billing.BaseProfiles = BaseProfiles;
Billing.Usage = Usage;
Billing.BaseUsage = BaseUsage;
Billing.Credits = Credits;
Billing.BaseCredits = BaseCredits;
Billing.History = History;
Billing.BaseHistory = BaseHistory;
Billing.BadDebt = BadDebt;
Billing.BaseBadDebt = BaseBadDebt;
Billing.UnpaidInvoice = UnpaidInvoice;
Billing.BaseUnpaidInvoice = BaseUnpaidInvoice;
Billing.RatePlans = RatePlans;
Billing.BaseRatePlans = BaseRatePlans;

export declare namespace Billing {
  export {
    type BillingAddressValidationResponse as BillingAddressValidationResponse,
    type BillingAddressValidationParams as BillingAddressValidationParams,
  };

  export {
    Profiles as Profiles,
    BaseProfiles as BaseProfiles,
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
    Usage as Usage,
    BaseUsage as BaseUsage,
    type UsageGetResponse as UsageGetResponse,
    type UsageGetAccountUsageInfoV1Response as UsageGetAccountUsageInfoV1Response,
    type UsageGetAccountUsageV1Response as UsageGetAccountUsageV1Response,
    type UsageGetAccountUsageV2Response as UsageGetAccountUsageV2Response,
    type UsagePaygoResponse as UsagePaygoResponse,
    type UsagePaygoInfoResponse as UsagePaygoInfoResponse,
    type UsageGetParams as UsageGetParams,
    type UsageGetAccountUsageInfoV1Params as UsageGetAccountUsageInfoV1Params,
    type UsageGetAccountUsageV1Params as UsageGetAccountUsageV1Params,
    type UsageGetAccountUsageV2Params as UsageGetAccountUsageV2Params,
    type UsagePaygoParams as UsagePaygoParams,
    type UsagePaygoInfoParams as UsagePaygoInfoParams,
  };

  export {
    Credits as Credits,
    BaseCredits as BaseCredits,
    type CreditGetResponse as CreditGetResponse,
    type CreditGetParams as CreditGetParams,
  };

  export {
    History as History,
    BaseHistory as BaseHistory,
    type HistoryListResponse as HistoryListResponse,
    type HistoryListResponsesV4PagePaginationArray as HistoryListResponsesV4PagePaginationArray,
    type HistoryListParams as HistoryListParams,
  };

  export {
    BadDebt as BadDebt,
    BaseBadDebt as BaseBadDebt,
    type BadDebtGetResponse as BadDebtGetResponse,
    type BadDebtGetParams as BadDebtGetParams,
  };

  export {
    UnpaidInvoice as UnpaidInvoice,
    BaseUnpaidInvoice as BaseUnpaidInvoice,
    type UnpaidInvoiceGetResponse as UnpaidInvoiceGetResponse,
    type UnpaidInvoiceGetParams as UnpaidInvoiceGetParams,
  };

  export {
    RatePlans as RatePlans,
    BaseRatePlans as BaseRatePlans,
    type RatePlanGetResponse as RatePlanGetResponse,
  };
}
