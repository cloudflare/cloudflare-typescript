// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SubdomainsAPI from './subdomains/subdomains';
import {
  SubdomainCreateParams,
  SubdomainCreateResponse,
  SubdomainDeleteParams,
  SubdomainDeleteResponse,
  SubdomainGetParams,
  SubdomainGetResponse,
  SubdomainListParams,
  SubdomainListResponse,
  SubdomainListResponsesSinglePage,
  Subdomains,
} from './subdomains/subdomains';

export class EmailSending extends APIResource {
  subdomains: SubdomainsAPI.Subdomains = new SubdomainsAPI.Subdomains(this._client);

  /**
   * Send an email
   *
   * @example
   * ```ts
   * const response = await client.emailSending.send({
   *   account_id: 'account_id',
   *   from: 'sender@example.com',
   *   subject: 'Monthly Report',
   *   to: ['recipient@example.com'],
   * });
   * ```
   */
  send(
    params: EmailSendingSendParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailSendingSendResponse> {
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email/sending/send`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: EmailSendingSendResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Send a raw MIME email
   *
   * @example
   * ```ts
   * const response = await client.emailSending.sendRaw({
   *   account_id: 'account_id',
   *   from: 'sender@example.com',
   *   mime_message:
   *     'From: sender@example.com\r\nTo: recipient@example.com\r\nSubject: Hello\r\nContent-Type: text/plain\r\n\r\nHello, World!',
   *   recipients: ['recipient@example.com'],
   * });
   * ```
   */
  sendRaw(
    params: EmailSendingSendRawParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<EmailSendingSendRawResponse> {
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/email/sending/send_raw`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: EmailSendingSendRawResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface EmailSendingSendResponse {
  /**
   * Email addresses to which the message was delivered immediately.
   */
  delivered: Array<string>;

  /**
   * Email addresses that permanently bounced.
   */
  permanent_bounces: Array<string>;

  /**
   * Email addresses for which delivery was queued for later.
   */
  queued: Array<string>;
}

export interface EmailSendingSendRawResponse {
  /**
   * Email addresses to which the message was delivered immediately.
   */
  delivered: Array<string>;

  /**
   * Email addresses that permanently bounced.
   */
  permanent_bounces: Array<string>;

  /**
   * Email addresses for which delivery was queued for later.
   */
  queued: Array<string>;
}

export interface EmailSendingSendParams {
  /**
   * Path param: Identifier of the account.
   */
  account_id?: string;

  /**
   * Body param: Sender email address. Either a plain string or an object with
   * address and name.
   */
  from: string | EmailSendingSendParams.EmailSendingEmailAddressObject;

  /**
   * Body param: Email subject line.
   */
  subject: string;

  /**
   * Body param: Recipient(s). A single email string or an array of email strings.
   */
  to: string | Array<string>;

  /**
   * Body param: File attachments and inline images.
   */
  attachments?: Array<
    | EmailSendingSendParams.EmailSendingEmailInlineAttachment
    | EmailSendingSendParams.EmailSendingEmailAttachment
  >;

  /**
   * Body param: BCC recipient(s). A single email string or an array of email
   * strings.
   */
  bcc?: string | Array<string>;

  /**
   * Body param: CC recipient(s). A single email string or an array of email strings.
   */
  cc?: string | Array<string>;

  /**
   * Body param: Custom email headers as key-value pairs.
   */
  headers?: { [key: string]: string };

  /**
   * Body param: HTML body of the email. At least one of text or html must be
   * provided.
   */
  html?: string;

  /**
   * Body param: Reply-to address. Either a plain string or an object with address
   * and name.
   */
  reply_to?: string | EmailSendingSendParams.EmailSendingEmailAddressObject;

  /**
   * Body param: Plain text body of the email. At least one of text or html must be
   * provided.
   */
  text?: string;
}

export namespace EmailSendingSendParams {
  export interface EmailSendingEmailAddressObject {
    /**
     * Email address (e.g., 'user@example.com').
     */
    address: string;

    /**
     * Display name for the email address (e.g., 'John Doe').
     */
    name: string;
  }

  export interface EmailSendingEmailInlineAttachment {
    /**
     * Base64-encoded content of the attachment.
     */
    content: string;

    /**
     * Content ID used to reference this attachment in HTML via cid: URI (e.g.,
     * <img src="cid:logo">).
     */
    content_id: string;

    /**
     * Must be 'inline'. Indicates the attachment is embedded in the email body.
     */
    disposition: 'inline';

    /**
     * Filename for the attachment.
     */
    filename: string;

    /**
     * MIME type of the attachment (e.g., 'image/png', 'text/plain').
     */
    type: string;
  }

  export interface EmailSendingEmailAttachment {
    /**
     * Base64-encoded content of the attachment.
     */
    content: string;

    /**
     * Must be 'attachment'. Indicates a standard file attachment.
     */
    disposition: 'attachment';

    /**
     * Filename for the attachment.
     */
    filename: string;

    /**
     * MIME type of the attachment (e.g., 'application/pdf', 'text/plain').
     */
    type: string;
  }

  export interface EmailSendingEmailAddressObject {
    /**
     * Email address (e.g., 'user@example.com').
     */
    address: string;

    /**
     * Display name for the email address (e.g., 'John Doe').
     */
    name: string;
  }
}

export interface EmailSendingSendRawParams {
  /**
   * Path param: Identifier of the account.
   */
  account_id?: string;

  /**
   * Body param: Sender email address.
   */
  from: string;

  /**
   * Body param: The full MIME-encoded email message. Should include standard RFC
   * 5322 headers such as From, To, Subject, and Content-Type. The from and
   * recipients fields in the request body control SMTP envelope routing; the From
   * and To headers in the MIME message control what the recipient's email client
   * displays.
   */
  mime_message: string;

  /**
   * Body param: List of recipient email addresses.
   */
  recipients: Array<string>;
}

EmailSending.Subdomains = Subdomains;
EmailSending.SubdomainListResponsesSinglePage = SubdomainListResponsesSinglePage;

export declare namespace EmailSending {
  export {
    type EmailSendingSendResponse as EmailSendingSendResponse,
    type EmailSendingSendRawResponse as EmailSendingSendRawResponse,
    type EmailSendingSendParams as EmailSendingSendParams,
    type EmailSendingSendRawParams as EmailSendingSendRawParams,
  };

  export {
    Subdomains as Subdomains,
    type SubdomainCreateResponse as SubdomainCreateResponse,
    type SubdomainListResponse as SubdomainListResponse,
    type SubdomainDeleteResponse as SubdomainDeleteResponse,
    type SubdomainGetResponse as SubdomainGetResponse,
    SubdomainListResponsesSinglePage as SubdomainListResponsesSinglePage,
    type SubdomainCreateParams as SubdomainCreateParams,
    type SubdomainListParams as SubdomainListParams,
    type SubdomainDeleteParams as SubdomainDeleteParams,
    type SubdomainGetParams as SubdomainGetParams,
  };
}
