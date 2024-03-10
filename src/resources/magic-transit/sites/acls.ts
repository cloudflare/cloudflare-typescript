// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ACLsAPI from 'cloudflare/resources/magic-transit/sites/acls';

export class ACLs extends APIResource {
  /**
   * Creates a new Site ACL.
   */
  create(
    accountIdentifier: string,
    siteIdentifier: string,
    body: ACLCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/magic/sites/${siteIdentifier}/acls`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ACLCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a specific Site ACL.
   */
  update(
    accountIdentifier: string,
    siteIdentifier: string,
    aclIdentifier: string,
    body: ACLUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/magic/sites/${siteIdentifier}/acls/${aclIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ACLUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Site ACLs associated with an account.
   */
  list(
    accountIdentifier: string,
    siteIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLListResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/magic/sites/${siteIdentifier}/acls`,
        options,
      ) as Core.APIPromise<{ result: ACLListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove a specific Site ACL.
   */
  delete(
    accountIdentifier: string,
    siteIdentifier: string,
    aclIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/magic/sites/${siteIdentifier}/acls/${aclIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: ACLDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific Site ACL.
   */
  get(
    accountIdentifier: string,
    siteIdentifier: string,
    aclIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ACLGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/magic/sites/${siteIdentifier}/acls/${aclIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: ACLGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ACLCreateResponse {
  acls?: Array<ACLCreateResponse.ACL>;
}

export namespace ACLCreateResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  export interface ACL {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Description for the ACL.
     */
    description?: string;

    lan_1?: ACL.Lan1;

    lan_2?: ACL.Lan2;

    /**
     * The name of the ACL.
     */
    name?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace ACL {
    export interface Lan1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface Lan2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export interface ACLUpdateResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  acl?: ACLUpdateResponse.ACL;
}

export namespace ACLUpdateResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  export interface ACL {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Description for the ACL.
     */
    description?: string;

    lan_1?: ACL.Lan1;

    lan_2?: ACL.Lan2;

    /**
     * The name of the ACL.
     */
    name?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace ACL {
    export interface Lan1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface Lan2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export interface ACLListResponse {
  acls?: Array<ACLListResponse.ACL>;
}

export namespace ACLListResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  export interface ACL {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Description for the ACL.
     */
    description?: string;

    lan_1?: ACL.Lan1;

    lan_2?: ACL.Lan2;

    /**
     * The name of the ACL.
     */
    name?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace ACL {
    export interface Lan1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface Lan2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export interface ACLDeleteResponse {
  deleted?: boolean;

  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  deleted_acl?: ACLDeleteResponse.DeletedACL;
}

export namespace ACLDeleteResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  export interface DeletedACL {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Description for the ACL.
     */
    description?: string;

    lan_1?: DeletedACL.Lan1;

    lan_2?: DeletedACL.Lan2;

    /**
     * The name of the ACL.
     */
    name?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace DeletedACL {
    export interface Lan1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface Lan2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export interface ACLGetResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  acl?: ACLGetResponse.ACL;
}

export namespace ACLGetResponse {
  /**
   * Bidirectional ACL policy for local network traffic within a site.
   */
  export interface ACL {
    /**
     * Identifier
     */
    id?: string;

    /**
     * Description for the ACL.
     */
    description?: string;

    lan_1?: ACL.Lan1;

    lan_2?: ACL.Lan2;

    /**
     * The name of the ACL.
     */
    name?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace ACL {
    export interface Lan1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface Lan2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export interface ACLCreateParams {
  acl?: ACLCreateParams.ACL;
}

export namespace ACLCreateParams {
  export interface ACL {
    lan_1: ACL.Lan1;

    lan_2: ACL.Lan2;

    /**
     * The name of the ACL.
     */
    name: string;

    /**
     * Description for the ACL.
     */
    description?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace ACL {
    export interface Lan1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface Lan2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export interface ACLUpdateParams {
  acl?: ACLUpdateParams.ACL;
}

export namespace ACLUpdateParams {
  export interface ACL {
    /**
     * Description for the ACL.
     */
    description?: string;

    lan_1?: ACL.Lan1;

    lan_2?: ACL.Lan2;

    /**
     * The name of the ACL.
     */
    name?: string;

    protocols?: Array<'tcp' | 'udp' | 'icmp'>;
  }

  export namespace ACL {
    export interface Lan1 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }

    export interface Lan2 {
      /**
       * The identifier for the LAN you want to create an ACL policy with.
       */
      lan_id: string;

      /**
       * The name of the LAN based on the provided lan_id.
       */
      lan_name?: string;

      /**
       * Array of ports on the provided LAN that will be included in the ACL. If no ports
       * are provided, communication on any port on this LAN is allowed.
       */
      ports?: Array<number>;

      /**
       * Array of subnet IPs within the LAN that will be included in the ACL. If no
       * subnets are provided, communication on any subnets on this LAN are allowed.
       */
      subnets?: Array<string | string>;
    }
  }
}

export namespace ACLs {
  export import ACLCreateResponse = ACLsAPI.ACLCreateResponse;
  export import ACLUpdateResponse = ACLsAPI.ACLUpdateResponse;
  export import ACLListResponse = ACLsAPI.ACLListResponse;
  export import ACLDeleteResponse = ACLsAPI.ACLDeleteResponse;
  export import ACLGetResponse = ACLsAPI.ACLGetResponse;
  export import ACLCreateParams = ACLsAPI.ACLCreateParams;
  export import ACLUpdateParams = ACLsAPI.ACLUpdateParams;
}
