// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TracesAPI from 'cloudflare/resources/request-tracers/traces';

export class Traces extends APIResource {
  /**
   * Request Trace
   */
  create(
    accountIdentifier: string,
    body: TraceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TraceCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/request-tracer/trace`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TraceCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RequestTrace = Array<RequestTrace.RequestTraceItem>;

export namespace RequestTrace {
  /**
   * List of steps acting on request/response
   */
  export interface RequestTraceItem {
    /**
     * If step type is rule, then action performed by this rule
     */
    action?: string;

    /**
     * If step type is rule, then action parameters of this rule as JSON
     */
    action_parameters?: unknown;

    /**
     * If step type is rule or ruleset, the description of this entity
     */
    description?: string;

    /**
     * If step type is rule, then expression used to match for this rule
     */
    expression?: string;

    /**
     * If step type is ruleset, then kind of this ruleset
     */
    kind?: string;

    /**
     * Whether tracing step affected tracing request/response
     */
    matched?: boolean;

    /**
     * If step type is ruleset, then name of this ruleset
     */
    name?: string;

    /**
     * Tracing step identifying name
     */
    step_name?: string;

    trace?: TracesAPI.RequestTrace;

    /**
     * Tracing step type
     */
    type?: string;
  }
}

/**
 * Trace result with an origin status code
 */
export interface TraceCreateResponse {
  /**
   * HTTP Status code of zone response
   */
  status_code?: number;

  trace?: RequestTrace;
}

export interface TraceCreateParams {
  /**
   * HTTP Method of tracing request
   */
  method: string;

  /**
   * URL to which perform tracing request
   */
  url: string;

  body?: TraceCreateParams.Body;

  /**
   * Additional request parameters
   */
  context?: TraceCreateParams.Context;

  /**
   * Cookies added to tracing request
   */
  cookies?: Record<string, string>;

  /**
   * Headers added to tracing request
   */
  headers?: Record<string, string>;

  /**
   * HTTP Protocol of tracing request
   */
  protocol?: string;

  /**
   * Skip sending the request to the Origin server after all rules evaluation
   */
  skip_response?: boolean;
}

export namespace TraceCreateParams {
  export interface Body {
    /**
     * Base64 encoded request body
     */
    base64?: string;

    /**
     * Arbitrary json as request body
     */
    json?: unknown;

    /**
     * Request body as plain text
     */
    plain_text?: string;
  }

  /**
   * Additional request parameters
   */
  export interface Context {
    /**
     * Bot score used for evaluating tracing request processing
     */
    bot_score?: number;

    /**
     * Geodata for tracing request
     */
    geoloc?: Context.Geoloc;

    /**
     * Whether to skip any challenges for tracing request (e.g.: captcha)
     */
    skip_challenge?: boolean;

    /**
     * Threat score used for evaluating tracing request processing
     */
    threat_score?: number;
  }

  export namespace Context {
    /**
     * Geodata for tracing request
     */
    export interface Geoloc {
      city?: string;

      continent?: string;

      is_eu_country?: boolean;

      iso_code?: string;

      latitude?: number;

      longitude?: number;

      postal_code?: string;

      region_code?: string;

      subdivision_2_iso_code?: string;

      timezone?: string;
    }
  }
}

export namespace Traces {
  export import RequestTrace = TracesAPI.RequestTrace;
  export import TraceCreateResponse = TracesAPI.TraceCreateResponse;
  export import TraceCreateParams = TracesAPI.TraceCreateParams;
}
