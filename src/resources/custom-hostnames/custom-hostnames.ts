// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as CustomHostnamesAPI from 'cloudflare/resources/custom-hostnames/custom-hostnames';
import * as FallbackOriginAPI from 'cloudflare/resources/custom-hostnames/fallback-origin';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class CustomHostnames extends APIResource {
  fallbackOrigin: FallbackOriginAPI.FallbackOrigin = new FallbackOriginAPI.FallbackOrigin(this._client);

  /**
   * Add a new custom hostname and request that an SSL certificate be issued for it.
   * One of three validation methods—http, txt, email—should be used, with 'http'
   * recommended if the CNAME is already in place (or will be soon). Specifying
   * 'email' will send an email to the WHOIS contacts on file for the base domain
   * plus hostmaster, postmaster, webmaster, admin, administrator. If http is used
   * and the domain is not already pointing to the Managed CNAME host, the PATCH
   * method must be used once it is (to complete validation).
   */
  create(
    zoneId: string,
    body: CustomHostnameCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomHostnameCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/custom_hostnames`, { body, ...options }) as Core.APIPromise<{
        result: CustomHostnameCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List, search, sort, and filter all of your custom hostnames.
   */
  list(
    zoneId: string,
    query?: CustomHostnameListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomHostnameListResponsesV4PagePaginationArray, CustomHostnameListResponse>;
  list(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomHostnameListResponsesV4PagePaginationArray, CustomHostnameListResponse>;
  list(
    zoneId: string,
    query: CustomHostnameListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomHostnameListResponsesV4PagePaginationArray, CustomHostnameListResponse> {
    if (isRequestOptions(query)) {
      return this.list(zoneId, {}, query);
    }
    return this._client.getAPIList(
      `/zones/${zoneId}/custom_hostnames`,
      CustomHostnameListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete Custom Hostname (and any issued SSL certificates)
   */
  delete(
    zoneId: string,
    customHostnameId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomHostnameDeleteResponse> {
    return this._client.delete(`/zones/${zoneId}/custom_hostnames/${customHostnameId}`, options);
  }

  /**
   * Modify SSL configuration for a custom hostname. When sent with SSL config that
   * matches existing config, used to indicate that hostname should pass domain
   * control validation (DCV). Can also be used to change validation type, e.g., from
   * 'http' to 'email'.
   */
  edit(
    zoneId: string,
    customHostnameId: string,
    body: CustomHostnameEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomHostnameEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/custom_hostnames/${customHostnameId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CustomHostnameEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Custom Hostname Details
   */
  get(
    zoneId: string,
    customHostnameId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomHostnameGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/custom_hostnames/${customHostnameId}`, options) as Core.APIPromise<{
        result: CustomHostnameGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class CustomHostnameListResponsesV4PagePaginationArray extends V4PagePaginationArray<CustomHostnameListResponse> {}

export interface CustomHostnameCreateResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The custom hostname that will point to your hostname via CNAME.
   */
  hostname: string;

  /**
   * SSL properties for the custom hostname.
   */
  ssl: CustomHostnameCreateResponse.SSL;
}

export namespace CustomHostnameCreateResponse {
  /**
   * SSL properties for the custom hostname.
   */
  export interface SSL {
    /**
     * Custom hostname SSL identifier tag.
     */
    id?: string;

    /**
     * A ubiquitous bundle has the highest probability of being verified everywhere,
     * even by clients using outdated or unusual trust stores. An optimal bundle uses
     * the shortest chain and newest intermediates. And the force bundle verifies the
     * chain, but does not otherwise modify it.
     */
    bundle_method?: 'ubiquitous' | 'optimal' | 'force';

    /**
     * The Certificate Authority that will issue the certificate
     */
    certificate_authority?: 'digicert' | 'google' | 'lets_encrypt';

    /**
     * If a custom uploaded certificate is used.
     */
    custom_certificate?: string;

    /**
     * The identifier for the Custom CSR that was used.
     */
    custom_csr_id?: string;

    /**
     * The key for a custom uploaded certificate.
     */
    custom_key?: string;

    /**
     * The time the custom certificate expires on.
     */
    expires_on?: string;

    /**
     * A list of Hostnames on a custom uploaded certificate.
     */
    hosts?: Array<unknown>;

    /**
     * The issuer on a custom uploaded certificate.
     */
    issuer?: string;

    /**
     * Domain control validation (DCV) method used for this hostname.
     */
    method?: 'http' | 'txt' | 'email';

    /**
     * The serial number on a custom uploaded certificate.
     */
    serial_number?: string;

    /**
     * SSL specific settings.
     */
    settings?: SSL.Settings;

    /**
     * The signature on a custom uploaded certificate.
     */
    signature?: string;

    /**
     * Status of the hostname's SSL certificates.
     */
    status?:
      | 'initializing'
      | 'pending_validation'
      | 'deleted'
      | 'pending_issuance'
      | 'pending_deployment'
      | 'pending_deletion'
      | 'pending_expiration'
      | 'expired'
      | 'active'
      | 'initializing_timed_out'
      | 'validation_timed_out'
      | 'issuance_timed_out'
      | 'deployment_timed_out'
      | 'deletion_timed_out'
      | 'pending_cleanup'
      | 'staging_deployment'
      | 'staging_active'
      | 'deactivating'
      | 'inactive'
      | 'backup_issued'
      | 'holding_deployment';

    /**
     * Level of validation to be used for this hostname. Domain validation (dv) must be
     * used.
     */
    type?: 'dv';

    /**
     * The time the custom certificate was uploaded.
     */
    uploaded_on?: string;

    /**
     * Domain validation errors that have been received by the certificate authority
     * (CA).
     */
    validation_errors?: Array<SSL.ValidationError>;

    validation_records?: Array<SSL.ValidationRecord>;

    /**
     * Indicates whether the certificate covers a wildcard.
     */
    wildcard?: boolean;
  }

  export namespace SSL {
    /**
     * SSL specific settings.
     */
    export interface Settings {
      /**
       * An allowlist of ciphers for TLS termination. These ciphers must be in the
       * BoringSSL format.
       */
      ciphers?: Array<string>;

      /**
       * Whether or not Early Hints is enabled.
       */
      early_hints?: 'on' | 'off';

      /**
       * Whether or not HTTP2 is enabled.
       */
      http2?: 'on' | 'off';

      /**
       * The minimum TLS version supported.
       */
      min_tls_version?: '1.0' | '1.1' | '1.2' | '1.3';

      /**
       * Whether or not TLS 1.3 is enabled.
       */
      tls_1_3?: 'on' | 'off';
    }

    export interface ValidationError {
      /**
       * A domain validation error.
       */
      message?: string;
    }

    /**
     * Certificate's required validation record.
     */
    export interface ValidationRecord {
      /**
       * The set of email addresses that the certificate authority (CA) will use to
       * complete domain validation.
       */
      emails?: Array<unknown>;

      /**
       * The content that the certificate authority (CA) will expect to find at the
       * http_url during the domain validation.
       */
      http_body?: string;

      /**
       * The url that will be checked during domain validation.
       */
      http_url?: string;

      /**
       * The hostname that the certificate authority (CA) will check for a TXT record
       * during domain validation .
       */
      txt_name?: string;

      /**
       * The TXT record that the certificate authority (CA) will check during domain
       * validation.
       */
      txt_value?: string;
    }
  }
}

export interface CustomHostnameListResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The custom hostname that will point to your hostname via CNAME.
   */
  hostname: string;

  /**
   * SSL properties for the custom hostname.
   */
  ssl: CustomHostnameListResponse.SSL;
}

export namespace CustomHostnameListResponse {
  /**
   * SSL properties for the custom hostname.
   */
  export interface SSL {
    /**
     * Custom hostname SSL identifier tag.
     */
    id?: string;

    /**
     * A ubiquitous bundle has the highest probability of being verified everywhere,
     * even by clients using outdated or unusual trust stores. An optimal bundle uses
     * the shortest chain and newest intermediates. And the force bundle verifies the
     * chain, but does not otherwise modify it.
     */
    bundle_method?: 'ubiquitous' | 'optimal' | 'force';

    /**
     * The Certificate Authority that will issue the certificate
     */
    certificate_authority?: 'digicert' | 'google' | 'lets_encrypt';

    /**
     * If a custom uploaded certificate is used.
     */
    custom_certificate?: string;

    /**
     * The identifier for the Custom CSR that was used.
     */
    custom_csr_id?: string;

    /**
     * The key for a custom uploaded certificate.
     */
    custom_key?: string;

    /**
     * The time the custom certificate expires on.
     */
    expires_on?: string;

    /**
     * A list of Hostnames on a custom uploaded certificate.
     */
    hosts?: Array<unknown>;

    /**
     * The issuer on a custom uploaded certificate.
     */
    issuer?: string;

    /**
     * Domain control validation (DCV) method used for this hostname.
     */
    method?: 'http' | 'txt' | 'email';

    /**
     * The serial number on a custom uploaded certificate.
     */
    serial_number?: string;

    /**
     * SSL specific settings.
     */
    settings?: SSL.Settings;

    /**
     * The signature on a custom uploaded certificate.
     */
    signature?: string;

    /**
     * Status of the hostname's SSL certificates.
     */
    status?:
      | 'initializing'
      | 'pending_validation'
      | 'deleted'
      | 'pending_issuance'
      | 'pending_deployment'
      | 'pending_deletion'
      | 'pending_expiration'
      | 'expired'
      | 'active'
      | 'initializing_timed_out'
      | 'validation_timed_out'
      | 'issuance_timed_out'
      | 'deployment_timed_out'
      | 'deletion_timed_out'
      | 'pending_cleanup'
      | 'staging_deployment'
      | 'staging_active'
      | 'deactivating'
      | 'inactive'
      | 'backup_issued'
      | 'holding_deployment';

    /**
     * Level of validation to be used for this hostname. Domain validation (dv) must be
     * used.
     */
    type?: 'dv';

    /**
     * The time the custom certificate was uploaded.
     */
    uploaded_on?: string;

    /**
     * Domain validation errors that have been received by the certificate authority
     * (CA).
     */
    validation_errors?: Array<SSL.ValidationError>;

    validation_records?: Array<SSL.ValidationRecord>;

    /**
     * Indicates whether the certificate covers a wildcard.
     */
    wildcard?: boolean;
  }

  export namespace SSL {
    /**
     * SSL specific settings.
     */
    export interface Settings {
      /**
       * An allowlist of ciphers for TLS termination. These ciphers must be in the
       * BoringSSL format.
       */
      ciphers?: Array<string>;

      /**
       * Whether or not Early Hints is enabled.
       */
      early_hints?: 'on' | 'off';

      /**
       * Whether or not HTTP2 is enabled.
       */
      http2?: 'on' | 'off';

      /**
       * The minimum TLS version supported.
       */
      min_tls_version?: '1.0' | '1.1' | '1.2' | '1.3';

      /**
       * Whether or not TLS 1.3 is enabled.
       */
      tls_1_3?: 'on' | 'off';
    }

    export interface ValidationError {
      /**
       * A domain validation error.
       */
      message?: string;
    }

    /**
     * Certificate's required validation record.
     */
    export interface ValidationRecord {
      /**
       * The set of email addresses that the certificate authority (CA) will use to
       * complete domain validation.
       */
      emails?: Array<unknown>;

      /**
       * The content that the certificate authority (CA) will expect to find at the
       * http_url during the domain validation.
       */
      http_body?: string;

      /**
       * The url that will be checked during domain validation.
       */
      http_url?: string;

      /**
       * The hostname that the certificate authority (CA) will check for a TXT record
       * during domain validation .
       */
      txt_name?: string;

      /**
       * The TXT record that the certificate authority (CA) will check during domain
       * validation.
       */
      txt_value?: string;
    }
  }
}

export interface CustomHostnameDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface CustomHostnameEditResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The custom hostname that will point to your hostname via CNAME.
   */
  hostname: string;

  /**
   * SSL properties for the custom hostname.
   */
  ssl: CustomHostnameEditResponse.SSL;
}

export namespace CustomHostnameEditResponse {
  /**
   * SSL properties for the custom hostname.
   */
  export interface SSL {
    /**
     * Custom hostname SSL identifier tag.
     */
    id?: string;

    /**
     * A ubiquitous bundle has the highest probability of being verified everywhere,
     * even by clients using outdated or unusual trust stores. An optimal bundle uses
     * the shortest chain and newest intermediates. And the force bundle verifies the
     * chain, but does not otherwise modify it.
     */
    bundle_method?: 'ubiquitous' | 'optimal' | 'force';

    /**
     * The Certificate Authority that will issue the certificate
     */
    certificate_authority?: 'digicert' | 'google' | 'lets_encrypt';

    /**
     * If a custom uploaded certificate is used.
     */
    custom_certificate?: string;

    /**
     * The identifier for the Custom CSR that was used.
     */
    custom_csr_id?: string;

    /**
     * The key for a custom uploaded certificate.
     */
    custom_key?: string;

    /**
     * The time the custom certificate expires on.
     */
    expires_on?: string;

    /**
     * A list of Hostnames on a custom uploaded certificate.
     */
    hosts?: Array<unknown>;

    /**
     * The issuer on a custom uploaded certificate.
     */
    issuer?: string;

    /**
     * Domain control validation (DCV) method used for this hostname.
     */
    method?: 'http' | 'txt' | 'email';

    /**
     * The serial number on a custom uploaded certificate.
     */
    serial_number?: string;

    /**
     * SSL specific settings.
     */
    settings?: SSL.Settings;

    /**
     * The signature on a custom uploaded certificate.
     */
    signature?: string;

    /**
     * Status of the hostname's SSL certificates.
     */
    status?:
      | 'initializing'
      | 'pending_validation'
      | 'deleted'
      | 'pending_issuance'
      | 'pending_deployment'
      | 'pending_deletion'
      | 'pending_expiration'
      | 'expired'
      | 'active'
      | 'initializing_timed_out'
      | 'validation_timed_out'
      | 'issuance_timed_out'
      | 'deployment_timed_out'
      | 'deletion_timed_out'
      | 'pending_cleanup'
      | 'staging_deployment'
      | 'staging_active'
      | 'deactivating'
      | 'inactive'
      | 'backup_issued'
      | 'holding_deployment';

    /**
     * Level of validation to be used for this hostname. Domain validation (dv) must be
     * used.
     */
    type?: 'dv';

    /**
     * The time the custom certificate was uploaded.
     */
    uploaded_on?: string;

    /**
     * Domain validation errors that have been received by the certificate authority
     * (CA).
     */
    validation_errors?: Array<SSL.ValidationError>;

    validation_records?: Array<SSL.ValidationRecord>;

    /**
     * Indicates whether the certificate covers a wildcard.
     */
    wildcard?: boolean;
  }

  export namespace SSL {
    /**
     * SSL specific settings.
     */
    export interface Settings {
      /**
       * An allowlist of ciphers for TLS termination. These ciphers must be in the
       * BoringSSL format.
       */
      ciphers?: Array<string>;

      /**
       * Whether or not Early Hints is enabled.
       */
      early_hints?: 'on' | 'off';

      /**
       * Whether or not HTTP2 is enabled.
       */
      http2?: 'on' | 'off';

      /**
       * The minimum TLS version supported.
       */
      min_tls_version?: '1.0' | '1.1' | '1.2' | '1.3';

      /**
       * Whether or not TLS 1.3 is enabled.
       */
      tls_1_3?: 'on' | 'off';
    }

    export interface ValidationError {
      /**
       * A domain validation error.
       */
      message?: string;
    }

    /**
     * Certificate's required validation record.
     */
    export interface ValidationRecord {
      /**
       * The set of email addresses that the certificate authority (CA) will use to
       * complete domain validation.
       */
      emails?: Array<unknown>;

      /**
       * The content that the certificate authority (CA) will expect to find at the
       * http_url during the domain validation.
       */
      http_body?: string;

      /**
       * The url that will be checked during domain validation.
       */
      http_url?: string;

      /**
       * The hostname that the certificate authority (CA) will check for a TXT record
       * during domain validation .
       */
      txt_name?: string;

      /**
       * The TXT record that the certificate authority (CA) will check during domain
       * validation.
       */
      txt_value?: string;
    }
  }
}

export interface CustomHostnameGetResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The custom hostname that will point to your hostname via CNAME.
   */
  hostname: string;

  /**
   * SSL properties for the custom hostname.
   */
  ssl: CustomHostnameGetResponse.SSL;
}

export namespace CustomHostnameGetResponse {
  /**
   * SSL properties for the custom hostname.
   */
  export interface SSL {
    /**
     * Custom hostname SSL identifier tag.
     */
    id?: string;

    /**
     * A ubiquitous bundle has the highest probability of being verified everywhere,
     * even by clients using outdated or unusual trust stores. An optimal bundle uses
     * the shortest chain and newest intermediates. And the force bundle verifies the
     * chain, but does not otherwise modify it.
     */
    bundle_method?: 'ubiquitous' | 'optimal' | 'force';

    /**
     * The Certificate Authority that will issue the certificate
     */
    certificate_authority?: 'digicert' | 'google' | 'lets_encrypt';

    /**
     * If a custom uploaded certificate is used.
     */
    custom_certificate?: string;

    /**
     * The identifier for the Custom CSR that was used.
     */
    custom_csr_id?: string;

    /**
     * The key for a custom uploaded certificate.
     */
    custom_key?: string;

    /**
     * The time the custom certificate expires on.
     */
    expires_on?: string;

    /**
     * A list of Hostnames on a custom uploaded certificate.
     */
    hosts?: Array<unknown>;

    /**
     * The issuer on a custom uploaded certificate.
     */
    issuer?: string;

    /**
     * Domain control validation (DCV) method used for this hostname.
     */
    method?: 'http' | 'txt' | 'email';

    /**
     * The serial number on a custom uploaded certificate.
     */
    serial_number?: string;

    /**
     * SSL specific settings.
     */
    settings?: SSL.Settings;

    /**
     * The signature on a custom uploaded certificate.
     */
    signature?: string;

    /**
     * Status of the hostname's SSL certificates.
     */
    status?:
      | 'initializing'
      | 'pending_validation'
      | 'deleted'
      | 'pending_issuance'
      | 'pending_deployment'
      | 'pending_deletion'
      | 'pending_expiration'
      | 'expired'
      | 'active'
      | 'initializing_timed_out'
      | 'validation_timed_out'
      | 'issuance_timed_out'
      | 'deployment_timed_out'
      | 'deletion_timed_out'
      | 'pending_cleanup'
      | 'staging_deployment'
      | 'staging_active'
      | 'deactivating'
      | 'inactive'
      | 'backup_issued'
      | 'holding_deployment';

    /**
     * Level of validation to be used for this hostname. Domain validation (dv) must be
     * used.
     */
    type?: 'dv';

    /**
     * The time the custom certificate was uploaded.
     */
    uploaded_on?: string;

    /**
     * Domain validation errors that have been received by the certificate authority
     * (CA).
     */
    validation_errors?: Array<SSL.ValidationError>;

    validation_records?: Array<SSL.ValidationRecord>;

    /**
     * Indicates whether the certificate covers a wildcard.
     */
    wildcard?: boolean;
  }

  export namespace SSL {
    /**
     * SSL specific settings.
     */
    export interface Settings {
      /**
       * An allowlist of ciphers for TLS termination. These ciphers must be in the
       * BoringSSL format.
       */
      ciphers?: Array<string>;

      /**
       * Whether or not Early Hints is enabled.
       */
      early_hints?: 'on' | 'off';

      /**
       * Whether or not HTTP2 is enabled.
       */
      http2?: 'on' | 'off';

      /**
       * The minimum TLS version supported.
       */
      min_tls_version?: '1.0' | '1.1' | '1.2' | '1.3';

      /**
       * Whether or not TLS 1.3 is enabled.
       */
      tls_1_3?: 'on' | 'off';
    }

    export interface ValidationError {
      /**
       * A domain validation error.
       */
      message?: string;
    }

    /**
     * Certificate's required validation record.
     */
    export interface ValidationRecord {
      /**
       * The set of email addresses that the certificate authority (CA) will use to
       * complete domain validation.
       */
      emails?: Array<unknown>;

      /**
       * The content that the certificate authority (CA) will expect to find at the
       * http_url during the domain validation.
       */
      http_body?: string;

      /**
       * The url that will be checked during domain validation.
       */
      http_url?: string;

      /**
       * The hostname that the certificate authority (CA) will check for a TXT record
       * during domain validation .
       */
      txt_name?: string;

      /**
       * The TXT record that the certificate authority (CA) will check during domain
       * validation.
       */
      txt_value?: string;
    }
  }
}

export interface CustomHostnameCreateParams {
  /**
   * The custom hostname that will point to your hostname via CNAME.
   */
  hostname: string;

  /**
   * SSL properties used when creating the custom hostname.
   */
  ssl: CustomHostnameCreateParams.SSL;

  /**
   * These are per-hostname (customer) settings.
   */
  custom_metadata?: CustomHostnameCreateParams.CustomMetadata;
}

export namespace CustomHostnameCreateParams {
  /**
   * SSL properties used when creating the custom hostname.
   */
  export interface SSL {
    /**
     * A ubiquitous bundle has the highest probability of being verified everywhere,
     * even by clients using outdated or unusual trust stores. An optimal bundle uses
     * the shortest chain and newest intermediates. And the force bundle verifies the
     * chain, but does not otherwise modify it.
     */
    bundle_method?: 'ubiquitous' | 'optimal' | 'force';

    /**
     * The Certificate Authority that will issue the certificate
     */
    certificate_authority?: 'digicert' | 'google' | 'lets_encrypt';

    /**
     * If a custom uploaded certificate is used.
     */
    custom_certificate?: string;

    /**
     * The key for a custom uploaded certificate.
     */
    custom_key?: string;

    /**
     * Domain control validation (DCV) method used for this hostname.
     */
    method?: 'http' | 'txt' | 'email';

    /**
     * SSL specific settings.
     */
    settings?: SSL.Settings;

    /**
     * Level of validation to be used for this hostname. Domain validation (dv) must be
     * used.
     */
    type?: 'dv';

    /**
     * Indicates whether the certificate covers a wildcard.
     */
    wildcard?: boolean;
  }

  export namespace SSL {
    /**
     * SSL specific settings.
     */
    export interface Settings {
      /**
       * An allowlist of ciphers for TLS termination. These ciphers must be in the
       * BoringSSL format.
       */
      ciphers?: Array<string>;

      /**
       * Whether or not Early Hints is enabled.
       */
      early_hints?: 'on' | 'off';

      /**
       * Whether or not HTTP2 is enabled.
       */
      http2?: 'on' | 'off';

      /**
       * The minimum TLS version supported.
       */
      min_tls_version?: '1.0' | '1.1' | '1.2' | '1.3';

      /**
       * Whether or not TLS 1.3 is enabled.
       */
      tls_1_3?: 'on' | 'off';
    }
  }

  /**
   * These are per-hostname (customer) settings.
   */
  export interface CustomMetadata {
    /**
     * Unique metadata for this hostname.
     */
    key?: string;
  }
}

export interface CustomHostnameListParams extends V4PagePaginationArrayParams {
  /**
   * Hostname ID to match against. This ID was generated and returned during the
   * initial custom_hostname creation. This parameter cannot be used with the
   * 'hostname' parameter.
   */
  id?: string;

  /**
   * Direction to order hostnames.
   */
  direction?: 'asc' | 'desc';

  /**
   * Fully qualified domain name to match against. This parameter cannot be used with
   * the 'id' parameter.
   */
  hostname?: string;

  /**
   * Field to order hostnames by.
   */
  order?: 'ssl' | 'ssl_status';

  /**
   * Whether to filter hostnames based on if they have SSL enabled.
   */
  ssl?: 0 | 1;
}

export interface CustomHostnameEditParams {
  /**
   * These are per-hostname (customer) settings.
   */
  custom_metadata?: CustomHostnameEditParams.CustomMetadata;

  /**
   * a valid hostname that’s been added to your DNS zone as an A, AAAA, or CNAME
   * record.
   */
  custom_origin_server?: string;

  /**
   * A hostname that will be sent to your custom origin server as SNI for TLS
   * handshake. This can be a valid subdomain of the zone or custom origin server
   * name or the string ':request_host_header:' which will cause the host header in
   * the request to be used as SNI. Not configurable with default/fallback origin
   * server.
   */
  custom_origin_sni?: string;

  /**
   * SSL properties used when creating the custom hostname.
   */
  ssl?: CustomHostnameEditParams.SSL;
}

export namespace CustomHostnameEditParams {
  /**
   * These are per-hostname (customer) settings.
   */
  export interface CustomMetadata {
    /**
     * Unique metadata for this hostname.
     */
    key?: string;
  }

  /**
   * SSL properties used when creating the custom hostname.
   */
  export interface SSL {
    /**
     * A ubiquitous bundle has the highest probability of being verified everywhere,
     * even by clients using outdated or unusual trust stores. An optimal bundle uses
     * the shortest chain and newest intermediates. And the force bundle verifies the
     * chain, but does not otherwise modify it.
     */
    bundle_method?: 'ubiquitous' | 'optimal' | 'force';

    /**
     * The Certificate Authority that will issue the certificate
     */
    certificate_authority?: 'digicert' | 'google' | 'lets_encrypt';

    /**
     * If a custom uploaded certificate is used.
     */
    custom_certificate?: string;

    /**
     * The key for a custom uploaded certificate.
     */
    custom_key?: string;

    /**
     * Domain control validation (DCV) method used for this hostname.
     */
    method?: 'http' | 'txt' | 'email';

    /**
     * SSL specific settings.
     */
    settings?: SSL.Settings;

    /**
     * Level of validation to be used for this hostname. Domain validation (dv) must be
     * used.
     */
    type?: 'dv';

    /**
     * Indicates whether the certificate covers a wildcard.
     */
    wildcard?: boolean;
  }

  export namespace SSL {
    /**
     * SSL specific settings.
     */
    export interface Settings {
      /**
       * An allowlist of ciphers for TLS termination. These ciphers must be in the
       * BoringSSL format.
       */
      ciphers?: Array<string>;

      /**
       * Whether or not Early Hints is enabled.
       */
      early_hints?: 'on' | 'off';

      /**
       * Whether or not HTTP2 is enabled.
       */
      http2?: 'on' | 'off';

      /**
       * The minimum TLS version supported.
       */
      min_tls_version?: '1.0' | '1.1' | '1.2' | '1.3';

      /**
       * Whether or not TLS 1.3 is enabled.
       */
      tls_1_3?: 'on' | 'off';
    }
  }
}

export namespace CustomHostnames {
  export import CustomHostnameCreateResponse = CustomHostnamesAPI.CustomHostnameCreateResponse;
  export import CustomHostnameListResponse = CustomHostnamesAPI.CustomHostnameListResponse;
  export import CustomHostnameDeleteResponse = CustomHostnamesAPI.CustomHostnameDeleteResponse;
  export import CustomHostnameEditResponse = CustomHostnamesAPI.CustomHostnameEditResponse;
  export import CustomHostnameGetResponse = CustomHostnamesAPI.CustomHostnameGetResponse;
  export import CustomHostnameListResponsesV4PagePaginationArray = CustomHostnamesAPI.CustomHostnameListResponsesV4PagePaginationArray;
  export import CustomHostnameCreateParams = CustomHostnamesAPI.CustomHostnameCreateParams;
  export import CustomHostnameListParams = CustomHostnamesAPI.CustomHostnameListParams;
  export import CustomHostnameEditParams = CustomHostnamesAPI.CustomHostnameEditParams;
  export import FallbackOrigin = FallbackOriginAPI.FallbackOrigin;
  export import FallbackOriginUpdateResponse = FallbackOriginAPI.FallbackOriginUpdateResponse;
  export import FallbackOriginDeleteResponse = FallbackOriginAPI.FallbackOriginDeleteResponse;
  export import FallbackOriginGetResponse = FallbackOriginAPI.FallbackOriginGetResponse;
  export import FallbackOriginUpdateParams = FallbackOriginAPI.FallbackOriginUpdateParams;
}
