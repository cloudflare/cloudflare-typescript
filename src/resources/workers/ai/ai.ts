// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as AIAPI from './ai';
import * as ModelsAPI from './models/models';

export class AI extends APIResource {
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);

  /**
   * This endpoint provides users with the capability to run specific AI models
   * on-demand.
   *
   * By submitting the required input data, users can receive real-time predictions
   * or results generated by the chosen AI model. The endpoint supports various AI
   * model types, ensuring flexibility and adaptability for diverse use cases.
   *
   * Model specific inputs available in
   * [Cloudflare Docs](https://developers.cloudflare.com/workers-ai/models/).
   */
  run(modelName: string, params: AIRunParams, options?: Core.RequestOptions): Core.APIPromise<AIRunResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai/run/${modelName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AIRunResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AIRunResponse =
  | Array<AIRunResponse.TextClassification>
  | Core.Uploadable
  | AIRunResponse.TextEmbeddings
  | AIRunResponse.AutomaticSpeechRecognition
  | Array<AIRunResponse.ImageClassification>
  | Array<AIRunResponse.ObjectDetection>
  | AIRunResponse.UnionMember6
  | Core.Uploadable
  | AIRunResponse.Translation
  | AIRunResponse.Summarization
  | AIRunResponse.ImageToText;

export namespace AIRunResponse {
  export interface TextClassification {
    label?: string;

    score?: number;
  }

  export interface TextEmbeddings {
    data?: Array<Array<number>>;

    shape?: Array<number>;
  }

  export interface AutomaticSpeechRecognition {
    text: string;

    vtt?: string;

    word_count?: number;

    words?: Array<AutomaticSpeechRecognition.Word>;
  }

  export namespace AutomaticSpeechRecognition {
    export interface Word {
      end?: number;

      start?: number;

      word?: string;
    }
  }

  export interface ImageClassification {
    label?: string;

    score?: number;
  }

  export interface ObjectDetection {
    box?: ObjectDetection.Box;

    label?: string;

    score?: number;
  }

  export namespace ObjectDetection {
    export interface Box {
      xmax?: number;

      xmin?: number;

      ymax?: number;

      ymin?: number;
    }
  }

  export interface UnionMember6 {
    response?: string;

    tool_calls?: Array<UnionMember6.ToolCall>;
  }

  export namespace UnionMember6 {
    export interface ToolCall {
      arguments?: unknown;

      name?: string;
    }
  }

  export interface Translation {
    translated_text?: string;
  }

  export interface Summarization {
    summary?: string;
  }

  export interface ImageToText {
    description?: string;
  }
}

export type AIRunParams =
  | AIRunParams.TextClassification
  | AIRunParams.TextToImage
  | AIRunParams.TextEmbeddings
  | AIRunParams.AutomaticSpeechRecognition
  | AIRunParams.ImageClassification
  | AIRunParams.ObjectDetection
  | AIRunParams.Variant6
  | AIRunParams.Variant7
  | AIRunParams.Translation
  | AIRunParams.Summarization
  | AIRunParams.ImageToText;

export namespace AIRunParams {
  export interface TextClassification {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    text: string;
  }

  export interface TextToImage {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    prompt: string;

    /**
     * Body param:
     */
    guidance?: number;

    /**
     * Body param:
     */
    height?: number;

    /**
     * Body param:
     */
    image?: Array<number>;

    /**
     * Body param:
     */
    image_b64?: string;

    /**
     * Body param:
     */
    lora_weights?: Array<number>;

    /**
     * Body param:
     */
    loras?: Array<string>;

    /**
     * Body param:
     */
    mask?: Array<number>;

    /**
     * Body param:
     */
    negative_prompt?: string;

    /**
     * Body param:
     */
    num_steps?: number;

    /**
     * Body param:
     */
    seed?: number;

    /**
     * Body param:
     */
    strength?: number;

    /**
     * Body param:
     */
    width?: number;
  }

  export interface TextEmbeddings {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    text: string | Array<string>;
  }

  export interface AutomaticSpeechRecognition {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    audio: Array<number>;
  }

  export interface ImageClassification {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    image: Array<number>;
  }

  export interface ObjectDetection {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    image?: Array<number>;
  }

  export interface Variant6 {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    prompt: string;

    /**
     * Body param:
     */
    frequency_penalty?: number;

    /**
     * Body param:
     */
    lora?: string;

    /**
     * Body param:
     */
    max_tokens?: number;

    /**
     * Body param:
     */
    presence_penalty?: number;

    /**
     * Body param:
     */
    raw?: boolean;

    /**
     * Body param:
     */
    repetition_penalty?: number;

    /**
     * Body param:
     */
    seed?: number;

    /**
     * Body param:
     */
    stream?: boolean;

    /**
     * Body param:
     */
    temperature?: number;

    /**
     * Body param:
     */
    top_k?: number;

    /**
     * Body param:
     */
    top_p?: number;
  }

  export interface Variant7 {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    messages: Array<AIRunParams.Variant7.Message>;

    /**
     * Body param:
     */
    frequency_penalty?: number;

    /**
     * Body param:
     */
    max_tokens?: number;

    /**
     * Body param:
     */
    presence_penalty?: number;

    /**
     * Body param:
     */
    repetition_penalty?: number;

    /**
     * Body param:
     */
    seed?: number;

    /**
     * Body param:
     */
    stream?: boolean;

    /**
     * Body param:
     */
    temperature?: number;

    /**
     * Body param:
     */
    tools?: Array<AIRunParams.Variant7.Tool>;

    /**
     * Body param:
     */
    top_k?: number;

    /**
     * Body param:
     */
    top_p?: number;
  }

  export namespace Variant7 {
    export interface Message {
      content: string;

      role: string;
    }

    export interface Tool {
      function?: Tool.Function;

      type?: string;
    }

    export namespace Tool {
      export interface Function {
        description?: string;

        name?: string;

        parameters?: Function.Parameters;
      }

      export namespace Function {
        export interface Parameters {
          properties?: Record<string, Parameters.Properties>;

          required?: Array<string>;

          type?: string;
        }

        export namespace Parameters {
          export interface Properties {
            description?: string;

            type?: string;
          }
        }
      }
    }
  }

  export interface Translation {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    target_lang: string;

    /**
     * Body param:
     */
    text: string;

    /**
     * Body param:
     */
    source_lang?: string;
  }

  export interface Summarization {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    input_text: string;

    /**
     * Body param:
     */
    max_length?: number;
  }

  export interface ImageToText {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param:
     */
    image: Array<number>;

    /**
     * Body param:
     */
    max_tokens?: number;

    /**
     * Body param:
     */
    messages?: Array<AIRunParams.ImageToText.Message>;

    /**
     * Body param:
     */
    prompt?: string;

    /**
     * Body param:
     */
    raw?: boolean;

    /**
     * Body param:
     */
    temperature?: number;
  }

  export namespace ImageToText {
    export interface Message {
      content: string;

      role: string;
    }
  }
}

export namespace AI {
  export import AIRunResponse = AIAPI.AIRunResponse;
  export import AIRunParams = AIAPI.AIRunParams;
  export import Models = ModelsAPI.Models;
}
