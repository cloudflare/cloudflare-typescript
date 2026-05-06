// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as SpendingLimitAPI from './spending-limit';
import {
  SpendingLimit,
  SpendingLimitCreateParams,
  SpendingLimitCreateResponse,
  SpendingLimitDeleteParams,
  SpendingLimitDeleteResponse,
  SpendingLimitGetParams,
  SpendingLimitGetResponse,
} from './spending-limit';
import * as TopupAPI from './topup/topup';
import {
  Topup,
  TopupCreateParams,
  TopupCreateResponse,
  TopupStatusParams,
  TopupStatusResponse,
} from './topup/topup';

export class Billing extends APIResource {
  topup: TopupAPI.Topup = new TopupAPI.Topup(this._client);
  spendingLimit: SpendingLimitAPI.SpendingLimit = new SpendingLimitAPI.SpendingLimit(this._client);

  /**
   * Retrieve the current credit balance, payment method info, and top-up
   * configuration.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiGateway.billing.creditBalance({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  creditBalance(
    params: BillingCreditBalanceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingCreditBalanceResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-gateway/billing/credit-balance`,
        options,
      ) as Core.APIPromise<{ result: BillingCreditBalanceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a list of past invoices with pagination, optionally filtered by type.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiGateway.billing.invoiceHistory({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  invoiceHistory(
    params: BillingInvoiceHistoryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingInvoiceHistoryResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/ai-gateway/billing/invoice-history`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: BillingInvoiceHistoryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a preview of the upcoming invoice including line items and tax.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiGateway.billing.invoicePreview({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  invoicePreview(
    params: BillingInvoicePreviewParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingInvoicePreviewResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-gateway/billing/invoice-preview`,
        options,
      ) as Core.APIPromise<{ result: BillingInvoicePreviewResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve aggregated usage meter event summaries for the given time range.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiGateway.billing.usageHistory({
   *     account_id: 'account_id',
   *     value_grouping_window: 'day',
   *   });
   * ```
   */
  usageHistory(
    params: BillingUsageHistoryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingUsageHistoryResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/ai-gateway/billing/usage-history`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: BillingUsageHistoryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface BillingCreditBalanceResponse {
  balance: number;

  has_default_payment_method: boolean;

  payment_method: BillingCreditBalanceResponse.PaymentMethod | null;

  topup_config: BillingCreditBalanceResponse.TopupConfig;

  first_topup_success?: boolean;
}

export namespace BillingCreditBalanceResponse {
  export interface PaymentMethod {
    brand?: string;

    last4?: string;
  }

  export interface TopupConfig {
    amount: number | null;

    disabledReason: string | null;

    error: string | null;

    lastFailedAt: number | null;

    threshold: number | null;
  }
}

export interface BillingInvoiceHistoryResponse {
  invoices: Array<BillingInvoiceHistoryResponse.Invoice>;

  pagination: BillingInvoiceHistoryResponse.Pagination;
}

export namespace BillingInvoiceHistoryResponse {
  export interface Invoice {
    amount_due: number;

    amount_paid: number;

    amount_remaining: number;

    currency: string;

    id?: string | null;

    attempt_count?: number;

    attempted?: boolean;

    auto_advance?: boolean | null;

    created?: number;

    created_by?: string;

    description?: string | null;

    invoice_origin?: string;

    invoice_pdf?: string | null;

    status?: string | null;
  }

  export interface Pagination {
    has_more: boolean;

    page: number;

    per_page: number;

    total_count: number;
  }
}

export interface BillingInvoicePreviewResponse {
  id: string;

  amount_due: number;

  amount_paid: number;

  amount_remaining: number;

  currency: string;

  invoice_lines: Array<BillingInvoicePreviewResponse.InvoiceLine>;

  period_end: number;

  period_start: number;

  status: 'draft' | 'open' | 'paid' | 'uncollectible' | 'void';
}

export namespace BillingInvoicePreviewResponse {
  export interface InvoiceLine {
    amount: number;

    currency: string;

    description: string | null;

    period: InvoiceLine.Period;

    pricing: InvoiceLine.Pricing;

    quantity: number;

    pretax_credit_amounts?: Array<InvoiceLine.PretaxCreditAmount>;
  }

  export namespace InvoiceLine {
    export interface Period {
      end: number;

      start: number;
    }

    export interface Pricing {
      unit_amount_decimal: string | null;
    }

    export interface PretaxCreditAmount {
      amount: number;

      type: string;

      credit_balance_transaction?: string | null;

      discount?: string | null;
    }
  }
}

export interface BillingUsageHistoryResponse {
  history: Array<BillingUsageHistoryResponse.History>;
}

export namespace BillingUsageHistoryResponse {
  export interface History {
    id: string;

    aggregated_value: number;

    end_time: number;

    start_time: number;
  }
}

export interface BillingCreditBalanceParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export interface BillingInvoiceHistoryParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Query param: Filter invoice type: auto, manual, or all.
   */
  type?: 'auto' | 'all' | 'manual';
}

export interface BillingInvoicePreviewParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export interface BillingUsageHistoryParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Query param: Grouping window for usage data.
   */
  value_grouping_window: 'day' | 'hour';

  /**
   * Query param: End time as Unix timestamp in milliseconds.
   */
  end_time?: number | null;

  /**
   * Query param: Start time as Unix timestamp in milliseconds.
   */
  start_time?: number | null;
}

Billing.Topup = Topup;
Billing.SpendingLimit = SpendingLimit;

export declare namespace Billing {
  export {
    type BillingCreditBalanceResponse as BillingCreditBalanceResponse,
    type BillingInvoiceHistoryResponse as BillingInvoiceHistoryResponse,
    type BillingInvoicePreviewResponse as BillingInvoicePreviewResponse,
    type BillingUsageHistoryResponse as BillingUsageHistoryResponse,
    type BillingCreditBalanceParams as BillingCreditBalanceParams,
    type BillingInvoiceHistoryParams as BillingInvoiceHistoryParams,
    type BillingInvoicePreviewParams as BillingInvoicePreviewParams,
    type BillingUsageHistoryParams as BillingUsageHistoryParams,
  };

  export {
    Topup as Topup,
    type TopupCreateResponse as TopupCreateResponse,
    type TopupStatusResponse as TopupStatusResponse,
    type TopupCreateParams as TopupCreateParams,
    type TopupStatusParams as TopupStatusParams,
  };

  export {
    SpendingLimit as SpendingLimit,
    type SpendingLimitCreateResponse as SpendingLimitCreateResponse,
    type SpendingLimitDeleteResponse as SpendingLimitDeleteResponse,
    type SpendingLimitGetResponse as SpendingLimitGetResponse,
    type SpendingLimitCreateParams as SpendingLimitCreateParams,
    type SpendingLimitDeleteParams as SpendingLimitDeleteParams,
    type SpendingLimitGetParams as SpendingLimitGetParams,
  };
}
