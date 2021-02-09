// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LgTemplate } from '@botframework-composer/types';

import { LGOption } from '../../utils';

export type TemplateRefPayload = {
  kind: 'templateRef';
  data: { templates: readonly LgTemplate[]; onSelectTemplate: (templateString: string) => void };
};

export type PropertyItem = {
  id: string;
  children: PropertyItem[];
};

export type PropertyRefPayload = {
  kind: 'propertyRef';
  data: { properties: readonly string[]; onSelectProperty: (property: string) => void };
};

export type FunctionRefPayload = {
  kind: 'functionRef';
  data: {
    functions: readonly { key: string; name: string; children: string[] }[];
    onSelectFunction: (functionString: string) => void;
  };
};

export type ToolbarButtonPayload = TemplateRefPayload | PropertyRefPayload | FunctionRefPayload;

export type LgLanguageContext =
  | 'expression'
  | 'singleQuote'
  | 'doubleQuote'
  | 'comment'
  | 'templateBody'
  | 'templateName'
  | 'root';

export const modalityTypes = ['text', 'speak', 'attachments', 'suggestedActions'] as const;
export type ModalityType = typeof modalityTypes[number];

export type CommonModalityEditorProps = {
  removeModalityDisabled: boolean;
  lgOption?: LGOption;
  lgTemplates?: readonly LgTemplate[];
  memoryVariables?: readonly string[];
  template?: LgTemplate;
  templateId: string;
  onAttachmentLayoutChange?: (layout: string) => void;
  onInputHintChange?: (inputHint: string) => void;
  onTemplateChange: (templateId: string, body?: string) => void;
  onRemoveModality: () => void;
};
