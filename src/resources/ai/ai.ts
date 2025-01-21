// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AuthorsAPI from './authors';
import { AuthorListParams, AuthorListResponse, AuthorListResponsesSinglePage, Authors } from './authors';
import * as TasksAPI from './tasks';
import { TaskListParams, TaskListResponse, TaskListResponsesSinglePage, Tasks } from './tasks';
import * as FinetunesAPI from './finetunes/finetunes';
import {
  FinetuneCreateParams,
  FinetuneCreateResponse,
  FinetuneListParams,
  FinetuneListResponse,
  Finetunes,
} from './finetunes/finetunes';
import * as ModelsAPI from './models/models';
import {
  ModelListParams,
  ModelListResponse,
  ModelListResponsesV4PagePaginationArray,
  Models,
} from './models/models';

export class AI extends APIResource {
  finetunes: FinetunesAPI.Finetunes = new FinetunesAPI.Finetunes(this._client);
  authors: AuthorsAPI.Authors = new AuthorsAPI.Authors(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);
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

/**
 * An array of classification results for the input text
 */
export type AIRunResponse =
  | Array<AIRunResponse.TextClassification>
  | Core.Uploadable
  | AIRunResponse.Audio
  | AIRunResponse.TextEmbeddings
  | AIRunResponse.AutomaticSpeechRecognition
  | Array<AIRunResponse.ImageClassification>
  | Array<AIRunResponse.ObjectDetection>
  | AIRunResponse.UnionMember7
  | AIRunResponse.Translation
  | AIRunResponse.Summarization
  | AIRunResponse.ImageToText;

export namespace AIRunResponse {
  export interface TextClassification {
    /**
     * The classification label assigned to the text (e.g., 'POSITIVE' or 'NEGATIVE')
     */
    label?: string;

    /**
     * Confidence score indicating the likelihood that the text belongs to the
     * specified label
     */
    score?: number;
  }

  export interface Audio {
    /**
     * The generated audio in MP3 format, base64-encoded
     */
    audio?: string;
  }

  export interface TextEmbeddings {
    /**
     * Embeddings of the requested text values
     */
    data?: Array<Array<number>>;

    shape?: Array<number>;
  }

  export interface AutomaticSpeechRecognition {
    /**
     * The transcription
     */
    text: string;

    vtt?: string;

    word_count?: number;

    words?: Array<AutomaticSpeechRecognition.Word>;
  }

  export namespace AutomaticSpeechRecognition {
    export interface Word {
      /**
       * The ending second when the word completes
       */
      end?: number;

      /**
       * The second this word begins in the recording
       */
      start?: number;

      word?: string;
    }
  }

  export interface ImageClassification {
    /**
     * The predicted category or class for the input image based on analysis
     */
    label?: string;

    /**
     * A confidence value, between 0 and 1, indicating how certain the model is about
     * the predicted label
     */
    score?: number;
  }

  export interface ObjectDetection {
    /**
     * Coordinates defining the bounding box around the detected object
     */
    box?: ObjectDetection.Box;

    /**
     * The class label or name of the detected object
     */
    label?: string;

    /**
     * Confidence score indicating the likelihood that the detection is correct
     */
    score?: number;
  }

  export namespace ObjectDetection {
    /**
     * Coordinates defining the bounding box around the detected object
     */
    export interface Box {
      /**
       * The x-coordinate of the bottom-right corner of the bounding box
       */
      xmax?: number;

      /**
       * The x-coordinate of the top-left corner of the bounding box
       */
      xmin?: number;

      /**
       * The y-coordinate of the bottom-right corner of the bounding box
       */
      ymax?: number;

      /**
       * The y-coordinate of the top-left corner of the bounding box
       */
      ymin?: number;
    }
  }

  export interface UnionMember7 {
    /**
     * The generated text response from the model
     */
    response?: string;

    /**
     * An array of tool calls requests made during the response generation
     */
    tool_calls?: Array<UnionMember7.ToolCall>;

    /**
     * Usage statistics for the inference request
     */
    usage?: UnionMember7.Usage;
  }

  export namespace UnionMember7 {
    export interface ToolCall {
      /**
       * The arguments passed to be passed to the tool call request
       */
      arguments?: unknown;

      /**
       * The name of the tool to be called
       */
      name?: string;
    }

    /**
     * Usage statistics for the inference request
     */
    export interface Usage {
      /**
       * Total number of tokens in output
       */
      completion_tokens?: number;

      /**
       * Total number of tokens in input
       */
      prompt_tokens?: number;

      /**
       * Total number of input and output tokens
       */
      total_tokens?: number;
    }
  }

  export interface Translation {
    /**
     * The translated text in the target language
     */
    translated_text?: string;
  }

  export interface Summarization {
    /**
     * The summarized version of the input text
     */
    summary?: string;
  }

  export interface ImageToText {
    description?: string;
  }
}

export type AIRunParams =
  | AIRunParams.TextClassification
  | AIRunParams.TextToImage
  | AIRunParams.TextToSpeech
  | AIRunParams.TextEmbeddings
  | AIRunParams.AutomaticSpeechRecognition
  | AIRunParams.ImageClassification
  | AIRunParams.ObjectDetection
  | AIRunParams.Prompt
  | AIRunParams.Messages
  | AIRunParams.Translation
  | AIRunParams.Summarization
  | AIRunParams.ImageToText;

export declare namespace AIRunParams {
  export interface TextClassification {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param: The text that you want to classify
     */
    text: string;
  }

  export interface TextToImage {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param: A text description of the image you want to generate
     */
    prompt: string;

    /**
     * Body param: Controls how closely the generated image should adhere to the
     * prompt; higher values make the image more aligned with the prompt
     */
    guidance?: number;

    /**
     * Body param: The height of the generated image in pixels
     */
    height?: number;

    /**
     * Body param: For use with img2img tasks. An array of integers that represent the
     * image data constrained to 8-bit unsigned integer values
     */
    image?: Array<number>;

    /**
     * Body param: For use with img2img tasks. A base64-encoded string of the input
     * image
     */
    image_b64?: string;

    /**
     * Body param: An array representing An array of integers that represent mask image
     * data for inpainting constrained to 8-bit unsigned integer values
     */
    mask?: Array<number>;

    /**
     * Body param: Text describing elements to avoid in the generated image
     */
    negative_prompt?: string;

    /**
     * Body param: The number of diffusion steps; higher values can improve quality but
     * take longer
     */
    num_steps?: number;

    /**
     * Body param: Random seed for reproducibility of the image generation
     */
    seed?: number;

    /**
     * Body param: A value between 0 and 1 indicating how strongly to apply the
     * transformation during img2img tasks; lower values make the output closer to the
     * input image
     */
    strength?: number;

    /**
     * Body param: The width of the generated image in pixels
     */
    width?: number;
  }

  export interface TextToSpeech {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param: A text description of the image you want to generate
     */
    prompt: string;

    /**
     * Body param: The speech language (e.g., 'en' for English, 'fr' for French).
     * Defaults to 'en' if not specified
     */
    lang?: string;
  }

  export interface TextEmbeddings {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param: The text to embed
     */
    text: string | Array<string>;
  }

  export interface AutomaticSpeechRecognition {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param: An array of integers that represent the audio data constrained to
     * 8-bit unsigned integer values
     */
    audio: Array<number>;

    /**
     * Body param: The language of the recorded audio
     */
    source_lang?: string;

    /**
     * Body param: The language to translate the transcription into. Currently only
     * English is supported.
     */
    target_lang?: string;
  }

  export interface ImageClassification {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param: An array of integers that represent the image data constrained to
     * 8-bit unsigned integer values
     */
    image: Array<number>;
  }

  export interface ObjectDetection {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param: An array of integers that represent the image data constrained to
     * 8-bit unsigned integer values
     */
    image?: Array<number>;
  }

  export interface Prompt {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param: The input text prompt for the model to generate a response.
     */
    prompt: string;

    /**
     * Body param: Decreases the likelihood of the model repeating the same lines
     * verbatim.
     */
    frequency_penalty?: number;

    /**
     * Body param: Name of the LoRA (Low-Rank Adaptation) model to fine-tune the base
     * model.
     */
    lora?: string;

    /**
     * Body param: The maximum number of tokens to generate in the response.
     */
    max_tokens?: number;

    /**
     * Body param: Increases the likelihood of the model introducing new topics.
     */
    presence_penalty?: number;

    /**
     * Body param: If true, a chat template is not applied and you must adhere to the
     * specific model's expected formatting.
     */
    raw?: boolean;

    /**
     * Body param: Penalty for repeated tokens; higher values discourage repetition.
     */
    repetition_penalty?: number;

    /**
     * Body param: Random seed for reproducibility of the generation.
     */
    seed?: number;

    /**
     * Body param: If true, the response will be streamed back incrementally using SSE,
     * Server Sent Events.
     */
    stream?: boolean;

    /**
     * Body param: Controls the randomness of the output; higher values produce more
     * random results.
     */
    temperature?: number;

    /**
     * Body param: Limits the AI to choose from the top 'k' most probable words. Lower
     * values make responses more focused; higher values introduce more variety and
     * potential surprises.
     */
    top_k?: number;

    /**
     * Body param: Adjusts the creativity of the AI's responses by controlling how many
     * possible words it considers. Lower values make outputs more predictable; higher
     * values allow for more varied and creative responses.
     */
    top_p?: number;
  }

  export interface Messages {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param: An array of message objects representing the conversation history.
     */
    messages: Array<AIRunParams.Messages.Message>;

    /**
     * Body param: Decreases the likelihood of the model repeating the same lines
     * verbatim.
     */
    frequency_penalty?: number;

    /**
     * Body param:
     */
    functions?: Array<AIRunParams.Messages.Function>;

    /**
     * Body param: The maximum number of tokens to generate in the response.
     */
    max_tokens?: number;

    /**
     * Body param: Increases the likelihood of the model introducing new topics.
     */
    presence_penalty?: number;

    /**
     * Body param: Penalty for repeated tokens; higher values discourage repetition.
     */
    repetition_penalty?: number;

    /**
     * Body param: Random seed for reproducibility of the generation.
     */
    seed?: number;

    /**
     * Body param: If true, the response will be streamed back incrementally.
     */
    stream?: boolean;

    /**
     * Body param: Controls the randomness of the output; higher values produce more
     * random results.
     */
    temperature?: number;

    /**
     * Body param: A list of tools available for the assistant to use.
     */
    tools?: Array<AIRunParams.Messages.UnionMember0 | AIRunParams.Messages.UnionMember1>;

    /**
     * Body param: Limits the AI to choose from the top 'k' most probable words. Lower
     * values make responses more focused; higher values introduce more variety and
     * potential surprises.
     */
    top_k?: number;

    /**
     * Body param: Controls the creativity of the AI's responses by adjusting how many
     * possible words it considers. Lower values make outputs more predictable; higher
     * values allow for more varied and creative responses.
     */
    top_p?: number;
  }

  export namespace Messages {
    export interface Message {
      /**
       * The content of the message as a string.
       */
      content: string;

      /**
       * The role of the message sender (e.g., 'user', 'assistant', 'system', 'tool').
       */
      role: string;
    }

    export interface Function {
      code: string;

      name: string;
    }

    export interface UnionMember0 {
      /**
       * A brief description of what the tool does.
       */
      description: string;

      /**
       * The name of the tool. More descriptive the better.
       */
      name: string;

      /**
       * Schema defining the parameters accepted by the tool.
       */
      parameters: UnionMember0.Parameters;
    }

    export namespace UnionMember0 {
      /**
       * Schema defining the parameters accepted by the tool.
       */
      export interface Parameters {
        /**
         * Definitions of each parameter.
         */
        properties: Record<string, Parameters.Properties>;

        /**
         * The type of the parameters object (usually 'object').
         */
        type: string;

        /**
         * List of required parameter names.
         */
        required?: Array<string>;
      }

      export namespace Parameters {
        export interface Properties {
          /**
           * A description of the expected parameter.
           */
          description: string;

          /**
           * The data type of the parameter.
           */
          type: string;
        }
      }
    }

    export interface UnionMember1 {
      /**
       * Details of the function tool.
       */
      function: UnionMember1.Function;

      /**
       * Specifies the type of tool (e.g., 'function').
       */
      type: string;
    }

    export namespace UnionMember1 {
      /**
       * Details of the function tool.
       */
      export interface Function {
        /**
         * A brief description of what the function does.
         */
        description: string;

        /**
         * The name of the function.
         */
        name: string;

        /**
         * Schema defining the parameters accepted by the function.
         */
        parameters: Function.Parameters;
      }

      export namespace Function {
        /**
         * Schema defining the parameters accepted by the function.
         */
        export interface Parameters {
          /**
           * Definitions of each parameter.
           */
          properties: Record<string, Parameters.Properties>;

          /**
           * The type of the parameters object (usually 'object').
           */
          type: string;

          /**
           * List of required parameter names.
           */
          required?: Array<string>;
        }

        export namespace Parameters {
          export interface Properties {
            /**
             * A description of the expected parameter.
             */
            description: string;

            /**
             * The data type of the parameter.
             */
            type: string;
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
     * Body param: The language code to translate the text into (e.g., 'es' for
     * Spanish)
     */
    target_lang: string;

    /**
     * Body param: The text to be translated
     */
    text: string;

    /**
     * Body param: The language code of the source text (e.g., 'en' for English).
     * Defaults to 'en' if not specified
     */
    source_lang?: string;
  }

  export interface Summarization {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param: The text that you want the model to summarize
     */
    input_text: string;

    /**
     * Body param: The maximum length of the generated summary in tokens
     */
    max_length?: number;
  }

  export interface ImageToText {
    /**
     * Path param:
     */
    account_id: string;

    /**
     * Body param: An array of integers that represent the image data constrained to
     * 8-bit unsigned integer values
     */
    image: Array<number>;

    /**
     * Body param: The maximum number of tokens to generate in the response.
     */
    max_tokens?: number;

    /**
     * Body param: The input text prompt for the model to generate a response.
     */
    prompt?: string;

    /**
     * Body param: If true, a chat template is not applied and you must adhere to the
     * specific model's expected formatting.
     */
    raw?: boolean;

    /**
     * Body param: Controls the randomness of the output; higher values produce more
     * random results.
     */
    temperature?: number;
  }
}

AI.Finetunes = Finetunes;
AI.Authors = Authors;
AI.AuthorListResponsesSinglePage = AuthorListResponsesSinglePage;
AI.Tasks = Tasks;
AI.TaskListResponsesSinglePage = TaskListResponsesSinglePage;
AI.Models = Models;
AI.ModelListResponsesV4PagePaginationArray = ModelListResponsesV4PagePaginationArray;

export declare namespace AI {
  export {
    Finetunes as Finetunes,
    type FinetuneCreateResponse as FinetuneCreateResponse,
    type FinetuneListResponse as FinetuneListResponse,
    type FinetuneCreateParams as FinetuneCreateParams,
    type FinetuneListParams as FinetuneListParams,
  };

  export {
    Authors as Authors,
    type AuthorListResponse as AuthorListResponse,
    AuthorListResponsesSinglePage as AuthorListResponsesSinglePage,
    type AuthorListParams as AuthorListParams,
  };

  export {
    Tasks as Tasks,
    type TaskListResponse as TaskListResponse,
    TaskListResponsesSinglePage as TaskListResponsesSinglePage,
    type TaskListParams as TaskListParams,
  };

  export {
    Models as Models,
    type ModelListResponse as ModelListResponse,
    ModelListResponsesV4PagePaginationArray as ModelListResponsesV4PagePaginationArray,
    type ModelListParams as ModelListParams,
  };
}
