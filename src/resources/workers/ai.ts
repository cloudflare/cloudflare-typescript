// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AIAPI from 'cloudflare/resources/workers/ai';
import { type Uploadable } from 'cloudflare/core';

export class AI extends APIResource {
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
    const { account_id, body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai/run/${modelName}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: AIRunResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AIRunResponse =
  | Array<AIRunResponse.TextClassification>
  | Uploadable
  | Array<number>
  | AIRunResponse.TextEmbeddings
  | AIRunResponse.SpeechRecognition
  | Array<AIRunResponse.ImageClassification>
  | Array<AIRunResponse.ObjectDetection>
  | AIRunResponse.Response
  | Uploadable
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

  export interface SpeechRecognition {
    text: string;

    word_count?: number;

    words?: Array<SpeechRecognition.Word>;
  }

  export namespace SpeechRecognition {
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

  export interface Response {
    response?: string;
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

export interface AIRunParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body:
    | AIRunParams.TextClassification
    | AIRunParams.TextToImage
    | AIRunParams.SentenceSimilarity
    | AIRunParams.TextEmbeddings
    | Uploadable
    | AIRunParams.Audio
    | Uploadable
    | AIRunParams.ImageClassification
    | Uploadable
    | AIRunParams.ObjectDetection
    | AIRunParams.UnionMember10
    | AIRunParams.UnionMember11
    | AIRunParams.Translation
    | AIRunParams.Summarization
    | Uploadable
    | AIRunParams.UnionMember15;
}

export namespace AIRunParams {
  export interface TextClassification {
    text: string;
  }

  export interface TextToImage {
    prompt: string;

    guidance?: number;

    image?: Array<number>;

    mask?: Array<number>;

    num_steps?: number;

    strength?: number;
  }

  export interface SentenceSimilarity {
    sentences: Array<string>;

    source: string;
  }

  export interface TextEmbeddings {
    text: string | Array<string>;
  }

  export interface Audio {
    audio?: Array<number>;
  }

  export interface ImageClassification {
    image?: Array<number>;
  }

  export interface ObjectDetection {
    image?: Array<number>;
  }

  export interface UnionMember10 {
    prompt: string;

    lora?: string;

    max_tokens?: number;

    raw?: boolean;

    stream?: boolean;
  }

  export interface UnionMember11 {
    messages: Array<UnionMember11.Message>;

    max_tokens?: number;

    stream?: boolean;
  }

  export namespace UnionMember11 {
    export interface Message {
      content: string;

      role: string;
    }
  }

  export interface Translation {
    target_lang: string;

    text: string;

    source_lang?: string;
  }

  export interface Summarization {
    input_text: string;

    max_length?: number;
  }

  export interface UnionMember15 {
    image?: Array<number>;

    max_tokens?: number;

    prompt?: string;
  }
}

export namespace AI {
  export import AIRunResponse = AIAPI.AIRunResponse;
  export import AIRunParams = AIAPI.AIRunParams;
}
