// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as TracesAPI from 'cloudflare/resources/request-tracers/traces';

export class Traces extends APIResource {}

export type Trace = Array<TraceItem>;

/**
 * List of steps acting on request/response
 */
export interface TraceItem {
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

  trace?: Trace;

  /**
   * Tracing step type
   */
  type?: string;
}

export namespace Traces {
  export import Trace = TracesAPI.Trace;
  export import TraceItem = TracesAPI.TraceItem;
}
