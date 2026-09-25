// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ClientSecretAPI from './client-secret';
import {
  BaseClientSecret,
  ClientSecret,
  ClientSecretCreateParams,
  ClientSecretCreateResponse,
} from './client-secret';
import * as EntitlementsAPI from './entitlements';
import {
  BaseEntitlements,
  EntitlementListParams,
  EntitlementListResponse,
  EntitlementListResponsesSinglePage,
  Entitlements,
} from './entitlements';
import * as InvoicesAPI from './invoices';
import { BaseInvoices, InvoiceEditParams, InvoiceEditResponse, Invoices } from './invoices';
import * as MembersAPI from './members';
import {
  BaseMembers,
  MemberCreateParams,
  MemberDeleteParams,
  MemberDeleteResponse,
  MemberGetParams,
  MemberListParams,
  MemberUpdateParams,
  Members,
  Status,
} from './members';
import * as PayBadDebtAPI from './pay-bad-debt';
import { BasePayBadDebt, PayBadDebt, PayBadDebtCreateParams, PayBadDebtCreateResponse } from './pay-bad-debt';
import * as PayInvoiceAPI from './pay-invoice';
import { BasePayInvoice, PayInvoice, PayInvoiceCreateParams, PayInvoiceCreateResponse } from './pay-invoice';
import * as PaymentMethodsAPI from './payment-methods';
import {
  BasePaymentMethods,
  PaymentMethodCreateParams,
  PaymentMethodCreateResponse,
  PaymentMethodDeleteParams,
  PaymentMethodDeleteResponse,
  PaymentMethodGetParams,
  PaymentMethodGetResponse,
  PaymentMethodListParams,
  PaymentMethodListResponse,
  PaymentMethodListResponsesV4PagePaginationArray,
  PaymentMethodSetAsDefaultParams,
  PaymentMethodSetAsDefaultResponse,
  PaymentMethodUpdateParams,
  PaymentMethodUpdateResponse,
  PaymentMethods,
} from './payment-methods';
import * as ReceiptsAPI from './receipts';
import { BaseReceipts, ReceiptPDFParams, Receipts } from './receipts';
import * as RolesAPI from './roles';
import { BaseRoles, RoleGetParams, RoleListParams, Roles } from './roles';
import * as LogsAPI from './logs/logs';
import { BaseLogs, Logs } from './logs/logs';
import * as SpeedSettingsAPI from './speed-settings/speed-settings';
import { BaseSpeedSettings, SpeedSettings } from './speed-settings/speed-settings';
import * as SubscriptionsAPI from './subscriptions/subscriptions';
import {
  BaseSubscriptions,
  SubscriptionCancelDowngradeParams,
  SubscriptionCancelDowngradeResponse,
  SubscriptionCreateParams,
  SubscriptionDeleteParams,
  SubscriptionDeleteResponse,
  SubscriptionGetByIdentifierParams,
  SubscriptionGetParams,
  SubscriptionUpdateParams,
  Subscriptions,
} from './subscriptions/subscriptions';
import * as TokensAPI from './tokens/tokens';
import {
  BaseTokens,
  TokenCreateParams,
  TokenCreateResponse,
  TokenDeleteParams,
  TokenDeleteResponse,
  TokenGetParams,
  TokenListParams,
  TokenUpdateParams,
  TokenVerifyParams,
  TokenVerifyResponse,
  Tokens,
} from './tokens/tokens';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseAccounts extends APIResource {
  static override readonly _key: readonly ['accounts'] = Object.freeze(['accounts'] as const);

  /**
   * Create an Account. To create the Account within an Organization, provide
   * `unit.id` and omit `standalone`. To create a standalone Free Account, provide
   * `standalone: true` and omit `unit`. Providing both fields is invalid. If you
   * omit both fields, Cloudflare can determine the destination only when the User is
   * an administrator of exactly one Organization. Cloudflare creates the Account in
   * that Organization; otherwise, the request returns an error.
   *
   * @example
   * ```ts
   * const account = await client.accounts.create({
   *   name: 'name',
   * });
   * ```
   */
  create(params: AccountCreateParams, options?: RequestOptions): APIPromise<Account> {
    const { 'Idempotency-Key': idempotencyKey, ...body } = params;
    return (
      this._client.post('/accounts', {
        body,
        ...options,
        headers: buildHeaders([
          { ...(idempotencyKey != null ? { 'Idempotency-Key': idempotencyKey } : undefined) },
          options?.headers,
        ]),
      }) as APIPromise<{ result: Account }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing account.
   *
   * @example
   * ```ts
   * const account = await client.accounts.update({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   name: 'Demo Account',
   *   type: 'standard',
   * });
   * ```
   */
  update(params: AccountUpdateParams, options?: RequestOptions): APIPromise<Account> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}`, { body, ...options }) as APIPromise<{ result: Account }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all accounts you have ownership or verified access to.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const account of client.accounts.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountsV4PagePaginationArray, Account> {
    return this._client.getAPIList('/accounts', V4PagePaginationArray<Account>, { query, ...options });
  }

  /**
   * Delete a specific account (only available for tenant admins at this time). This
   * is a permanent operation that will delete any zones or other resources under the
   * account
   *
   * @example
   * ```ts
   * const account = await client.accounts.delete({
   *   account_id: 'account_id',
   * });
   * ```
   */
  delete(params: AccountDeleteParams, options?: RequestOptions): APIPromise<AccountDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}`, options) as APIPromise<{
        result: AccountDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific account that you are a member of.
   *
   * @example
   * ```ts
   * const account = await client.accounts.get({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: AccountGetParams, options?: RequestOptions): APIPromise<Account> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}`, options) as APIPromise<{ result: Account }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Accounts extends BaseAccounts {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
  speedSettings: SpeedSettingsAPI.SpeedSettings = new SpeedSettingsAPI.SpeedSettings(this._client);
  paymentMethods: PaymentMethodsAPI.PaymentMethods = new PaymentMethodsAPI.PaymentMethods(this._client);
  payInvoice: PayInvoiceAPI.PayInvoice = new PayInvoiceAPI.PayInvoice(this._client);
  payBadDebt: PayBadDebtAPI.PayBadDebt = new PayBadDebtAPI.PayBadDebt(this._client);
  receipts: ReceiptsAPI.Receipts = new ReceiptsAPI.Receipts(this._client);
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  clientSecret: ClientSecretAPI.ClientSecret = new ClientSecretAPI.ClientSecret(this._client);
}

export type AccountsV4PagePaginationArray = V4PagePaginationArray<Account>;

export interface Account {
  /**
   * Identifier
   */
  id: string;

  /**
   * Account name
   */
  name: string;

  type: 'standard' | 'enterprise';

  /**
   * Timestamp for the creation of the account
   */
  created_on?: string;

  /**
   * Parent container details
   */
  managed_by?: Account.ManagedBy;

  /**
   * Account settings
   */
  settings?: Account.Settings;
}

export namespace Account {
  /**
   * Parent container details
   */
  export interface ManagedBy {
    /**
     * ID of the parent Organization, if one exists
     */
    parent_org_id?: string;

    /**
     * Name of the parent Organization, if one exists
     */
    parent_org_name?: string;
  }

  /**
   * Account settings
   */
  export interface Settings {
    /**
     * Sets an abuse contact email to notify for abuse reports.
     */
    abuse_contact_email?: string;

    /**
     * Indicates whether membership in this account requires that Two-Factor
     * Authentication is enabled
     */
    enforce_twofactor?: boolean;
  }
}

export interface AccountDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface AccountCreateParams {
  /**
   * Body param: Account name
   */
  name: string;

  /**
   * Body param: Set to `true` and omit `unit` to create a standalone Free Account.
   * If provided, this field must be `true`.
   */
  standalone?: true;

  /**
   * Body param
   */
  type?: 'standard' | 'enterprise';

  /**
   * Body param: Information related to the tenant unit. Provide its ID and omit
   * `standalone` to create the Account within an Organization. See
   * https://developers.cloudflare.com/tenant/how-to/manage-accounts/.
   */
  unit?: AccountCreateParams.Unit;

  /**
   * Header param: Optional key that identifies an Account-creation request. Free
   * Account creation can require exactly one valid key, so API clients should send a
   * key with every Account-creation request. Reuse the same key when retrying the
   * same request.
   */
  'Idempotency-Key'?: string;
}

export namespace AccountCreateParams {
  /**
   * Information related to the tenant unit. Provide its ID and omit `standalone` to
   * create the Account within an Organization. See
   * https://developers.cloudflare.com/tenant/how-to/manage-accounts/.
   */
  export interface Unit {
    /**
     * Tenant unit ID
     */
    id?: string;
  }
}

export interface AccountUpdateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Identifier
   */
  id: string;

  /**
   * Body param: Account name
   */
  name: string;

  /**
   * Body param
   */
  type: 'standard' | 'enterprise';

  /**
   * Body param: Parent container details
   */
  managed_by?: AccountUpdateParams.ManagedBy;

  /**
   * Body param: Account settings
   */
  settings?: AccountUpdateParams.Settings;
}

export namespace AccountUpdateParams {
  /**
   * Parent container details
   */
  export interface ManagedBy {}

  /**
   * Account settings
   */
  export interface Settings {
    /**
     * Sets an abuse contact email to notify for abuse reports.
     */
    abuse_contact_email?: string;

    /**
     * Indicates whether membership in this account requires that Two-Factor
     * Authentication is enabled
     */
    enforce_twofactor?: boolean;
  }
}

export interface AccountListParams extends V4PagePaginationArrayParams {
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Name of the account.
   */
  name?: string;
}

export interface AccountDeleteParams {
  /**
   * The account ID of the account to be deleted
   */
  account_id: string;
}

export interface AccountGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

Accounts.Members = Members;
Accounts.BaseMembers = BaseMembers;
Accounts.Roles = Roles;
Accounts.BaseRoles = BaseRoles;
Accounts.Subscriptions = Subscriptions;
Accounts.BaseSubscriptions = BaseSubscriptions;
Accounts.Tokens = Tokens;
Accounts.BaseTokens = BaseTokens;
Accounts.Logs = Logs;
Accounts.BaseLogs = BaseLogs;
Accounts.Entitlements = Entitlements;
Accounts.BaseEntitlements = BaseEntitlements;
Accounts.SpeedSettings = SpeedSettings;
Accounts.BaseSpeedSettings = BaseSpeedSettings;
Accounts.PaymentMethods = PaymentMethods;
Accounts.BasePaymentMethods = BasePaymentMethods;
Accounts.PayInvoice = PayInvoice;
Accounts.BasePayInvoice = BasePayInvoice;
Accounts.PayBadDebt = PayBadDebt;
Accounts.BasePayBadDebt = BasePayBadDebt;
Accounts.Receipts = Receipts;
Accounts.BaseReceipts = BaseReceipts;
Accounts.Invoices = Invoices;
Accounts.BaseInvoices = BaseInvoices;
Accounts.ClientSecret = ClientSecret;
Accounts.BaseClientSecret = BaseClientSecret;

export declare namespace Accounts {
  export {
    type Account as Account,
    type AccountDeleteResponse as AccountDeleteResponse,
    type AccountsV4PagePaginationArray as AccountsV4PagePaginationArray,
    type AccountCreateParams as AccountCreateParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountDeleteParams as AccountDeleteParams,
    type AccountGetParams as AccountGetParams,
  };

  export {
    Members as Members,
    BaseMembers as BaseMembers,
    type Status as Status,
    type MemberDeleteResponse as MemberDeleteResponse,
    type MemberCreateParams as MemberCreateParams,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
    type MemberDeleteParams as MemberDeleteParams,
    type MemberGetParams as MemberGetParams,
  };

  export {
    Roles as Roles,
    BaseRoles as BaseRoles,
    type RoleListParams as RoleListParams,
    type RoleGetParams as RoleGetParams,
  };

  export {
    Subscriptions as Subscriptions,
    BaseSubscriptions as BaseSubscriptions,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCancelDowngradeResponse as SubscriptionCancelDowngradeResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
    type SubscriptionCancelDowngradeParams as SubscriptionCancelDowngradeParams,
    type SubscriptionGetParams as SubscriptionGetParams,
    type SubscriptionGetByIdentifierParams as SubscriptionGetByIdentifierParams,
  };

  export {
    Tokens as Tokens,
    BaseTokens as BaseTokens,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenDeleteResponse as TokenDeleteResponse,
    type TokenVerifyResponse as TokenVerifyResponse,
    type TokenCreateParams as TokenCreateParams,
    type TokenUpdateParams as TokenUpdateParams,
    type TokenListParams as TokenListParams,
    type TokenDeleteParams as TokenDeleteParams,
    type TokenGetParams as TokenGetParams,
    type TokenVerifyParams as TokenVerifyParams,
  };

  export { Logs as Logs, BaseLogs as BaseLogs };

  export {
    Entitlements as Entitlements,
    BaseEntitlements as BaseEntitlements,
    type EntitlementListResponse as EntitlementListResponse,
    type EntitlementListResponsesSinglePage as EntitlementListResponsesSinglePage,
    type EntitlementListParams as EntitlementListParams,
  };

  export { SpeedSettings as SpeedSettings, BaseSpeedSettings as BaseSpeedSettings };

  export {
    PaymentMethods as PaymentMethods,
    BasePaymentMethods as BasePaymentMethods,
    type PaymentMethodCreateResponse as PaymentMethodCreateResponse,
    type PaymentMethodUpdateResponse as PaymentMethodUpdateResponse,
    type PaymentMethodListResponse as PaymentMethodListResponse,
    type PaymentMethodDeleteResponse as PaymentMethodDeleteResponse,
    type PaymentMethodGetResponse as PaymentMethodGetResponse,
    type PaymentMethodSetAsDefaultResponse as PaymentMethodSetAsDefaultResponse,
    type PaymentMethodListResponsesV4PagePaginationArray as PaymentMethodListResponsesV4PagePaginationArray,
    type PaymentMethodCreateParams as PaymentMethodCreateParams,
    type PaymentMethodUpdateParams as PaymentMethodUpdateParams,
    type PaymentMethodListParams as PaymentMethodListParams,
    type PaymentMethodDeleteParams as PaymentMethodDeleteParams,
    type PaymentMethodGetParams as PaymentMethodGetParams,
    type PaymentMethodSetAsDefaultParams as PaymentMethodSetAsDefaultParams,
  };

  export {
    PayInvoice as PayInvoice,
    BasePayInvoice as BasePayInvoice,
    type PayInvoiceCreateResponse as PayInvoiceCreateResponse,
    type PayInvoiceCreateParams as PayInvoiceCreateParams,
  };

  export {
    PayBadDebt as PayBadDebt,
    BasePayBadDebt as BasePayBadDebt,
    type PayBadDebtCreateResponse as PayBadDebtCreateResponse,
    type PayBadDebtCreateParams as PayBadDebtCreateParams,
  };

  export { Receipts as Receipts, BaseReceipts as BaseReceipts, type ReceiptPDFParams as ReceiptPDFParams };

  export {
    Invoices as Invoices,
    BaseInvoices as BaseInvoices,
    type InvoiceEditResponse as InvoiceEditResponse,
    type InvoiceEditParams as InvoiceEditParams,
  };

  export {
    ClientSecret as ClientSecret,
    BaseClientSecret as BaseClientSecret,
    type ClientSecretCreateResponse as ClientSecretCreateResponse,
    type ClientSecretCreateParams as ClientSecretCreateParams,
  };
}
