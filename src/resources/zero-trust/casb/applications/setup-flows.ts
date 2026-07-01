// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class SetupFlows extends APIResource {
  /**
   * Returns all available setup flows for the application, one per auth method.
   *
   * @example
   * ```ts
   * const setupFlows =
   *   await client.zeroTrust.casb.applications.setupFlows.list(
   *     'slug',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  list(
    slug: string,
    params: SetupFlowListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SetupFlowListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(`/accounts/${account_id}/one/applications/${slug}/setup-flows`, {
      query,
      ...options,
    });
  }
}

export type SetupFlowListResponse = Array<SetupFlowListResponse.SetupFlowListResponseItem>;

export namespace SetupFlowListResponse {
  /**
   * Setup flow for an application auth method.
   */
  export interface SetupFlowListResponseItem {
    /**
     * Setup flow identifier.
     */
    id: string;

    /**
     * Whether this is the default auth method.
     */
    default: boolean;

    /**
     * Flow description.
     */
    description: string;

    /**
     * Human-readable flow name.
     */
    name: string;

    /**
     * Ordered list of setup steps.
     */
    steps: Array<SetupFlowListResponseItem.Step>;

    /**
     * Environments this auth method supports (standard, fedramp).
     */
    supported_environments: Array<string>;

    /**
     * OAuth configuration (present for OAuth-based flows).
     */
    auth_config?: SetupFlowListResponseItem.AuthConfig;
  }

  export namespace SetupFlowListResponseItem {
    /**
     * A single step in the setup flow. Polymorphic based on type.
     */
    export interface Step {
      /**
       * Step type.
       *
       * - `component` - component
       * - `instruction` - instruction
       * - `form_input` - form_input
       * - `oauth_redirect` - oauth_redirect
       */
      type: 'component' | 'instruction' | 'form_input' | 'oauth_redirect';

      /**
       * Component identifier (for component type).
       */
      component_id?: string | null;

      /**
       * Step description with markdown support.
       */
      description?: string | null;

      /**
       * Dynamic content blocks (for instruction/form_input).
       */
      dynamic_content?: Array<Step.DynamicContent> | null;

      /**
       * Form fields (for form_input).
       */
      form_fields?: Array<Step.FormField>;

      /**
       * Whether step is required (for form_input).
       */
      is_required?: boolean;

      /**
       * Component parameters (for component type).
       */
      parameters?: { [key: string]: string } | null;

      /**
       * Step title (for instruction/form_input/oauth_redirect).
       */
      title?: string;
    }

    export namespace Step {
      /**
       * Dynamic content for instruction/form_input steps.
       */
      export interface DynamicContent {
        /**
         * Display label.
         */
        label: string;

        /**
         * Content type.
         *
         * - `copy_block` - copy_block
         * - `external_link` - external_link
         */
        type: 'copy_block' | 'external_link';

        /**
         * URL template with {{ variable }} interpolation (for external_link).
         */
        url_template?: string | null;

        /**
         * Field path to get value from (for copy_block).
         */
        value_from?: string | null;
      }

      /**
       * A form field within a form_input step.
       */
      export interface FormField {
        /**
         * Human-readable field label.
         */
        label: string;

        /**
         * Field identifier (maps to credentials key).
         */
        name: string;

        /**
         * Placeholder text.
         */
        placeholder: string | null;

        /**
         * Whether field is required.
         */
        required: boolean;

        /**
         * Allowed file extensions for file_upload type.
         */
        supported_file_types: Array<string> | null;

        /**
         * Field input type.
         *
         * - `text` - text
         * - `password` - password
         * - `email` - email
         * - `file_upload` - file_upload
         */
        type: 'text' | 'password' | 'email' | 'file_upload';
      }
    }

    /**
     * OAuth configuration (present for OAuth-based flows).
     */
    export interface AuthConfig {
      /**
       * Authorization URL for the requested environment.
       */
      authorization_url: string | null;

      /**
       * OAuth client ID.
       */
      client_id: string | null;

      /**
       * Whether PKCE is required.
       */
      requires_pkce: boolean;

      /**
       * OAuth scopes to request.
       */
      scopes: Array<string>;

      /**
       * Placeholders in authorization URL that frontend must fill.
       */
      url_placeholders: Array<string>;
    }
  }
}

export interface SetupFlowListParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Query param: Filter by auth method slug. Get available slugs from GET
   * /v2/applications.
   */
  auth_method?: string;

  /**
   * Query param: Filter by environment.
   */
  environment?: 'fedramp' | 'standard';
}

export declare namespace SetupFlows {
  export {
    type SetupFlowListResponse as SetupFlowListResponse,
    type SetupFlowListParams as SetupFlowListParams,
  };
}
