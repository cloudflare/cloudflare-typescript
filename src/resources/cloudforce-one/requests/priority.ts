// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';

export class PriorityResource extends APIResource {}

export type Label = string;

export interface Priority {
  /**
   * UUID.
   */
  id: string;

  /**
   * Priority creation time.
   */
  created: string;

  /**
   * List of labels.
   */
  labels: Array<Label>;

  /**
   * Priority.
   */
  priority: number;

  /**
   * Requirement.
   */
  requirement: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP).
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';

  /**
   * Priority last updated time.
   */
  updated: string;
}

export interface PriorityEdit {
  /**
   * List of labels.
   */
  labels: Array<Label>;

  /**
   * Priority.
   */
  priority: number;

  /**
   * Requirement.
   */
  requirement: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP).
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';
}

export declare namespace PriorityResource {
  export { type Label as Label, type Priority as Priority, type PriorityEdit as PriorityEdit };
}
