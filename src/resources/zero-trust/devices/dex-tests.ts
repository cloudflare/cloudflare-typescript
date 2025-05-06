// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';

export class DEXTests extends APIResource {}

/**
 * The configuration object which contains the details for the WARP client to
 * conduct the test.
 */
export interface SchemaData {
  /**
   * The desired endpoint to test.
   */
  host?: string;

  /**
   * The type of test.
   */
  kind?: string;

  /**
   * The HTTP request method type.
   */
  method?: string;
}

export interface SchemaHTTP {
  /**
   * The configuration object which contains the details for the WARP client to
   * conduct the test.
   */
  data: SchemaData;

  /**
   * Determines whether or not the test is active.
   */
  enabled: boolean;

  /**
   * How often the test will run.
   */
  interval: string;

  /**
   * The name of the DEX test. Must be unique.
   */
  name: string;

  /**
   * Additional details about the test.
   */
  description?: string;

  /**
   * Device settings profiles targeted by this test
   */
  target_policies?: Array<SchemaHTTP.TargetPolicy>;

  targeted?: boolean;

  /**
   * The unique identifier for the test.
   */
  test_id?: string;
}

export namespace SchemaHTTP {
  export interface TargetPolicy {
    /**
     * The id of the device settings profile
     */
    id?: string;

    /**
     * Whether the profile is the account default
     */
    default?: boolean;

    /**
     * The name of the device settings profile
     */
    name?: string;
  }
}

export declare namespace DEXTests {
  export { type SchemaData as SchemaData, type SchemaHTTP as SchemaHTTP };
}
