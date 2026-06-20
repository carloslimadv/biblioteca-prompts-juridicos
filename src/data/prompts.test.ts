import { describe, it, expect } from 'vitest';
import { prompt, PromptDraft, categories } from './prompts';

describe('prompt factory function', () => {
  it('should map category, usageMode, and architecture to their correct labels', () => {
    const draft: PromptDraft = {
      id: 'test-1',
      title: 'Test Prompt',
      category: 'pecas_revisao',
      usageMode: 'chatgpt',
      architecture: 'analise',
      purpose: 'Testing purposes',
      minimumInputs: ['input1'],
      reasoning: 'baixo',
      objective: 'Do testing',
      inputs: ['input1', 'input2'],
      output: ['output1'],
      doNotUse: 'When not testing',
      stop: 'Stop testing',
      example: 'Example test',
      variations: ['var1'],
      codex: 'Codex instructions',
    };

    const result = prompt(draft);

    expect(result.categoryLabel).toBe('Peças e revisão');
    expect(result.usageLabel).toBe('Uso avulso');
    expect(result.architectureLabel).toBe('Análise');
  });

  it('should correctly format the prompt string using buildPrompt', () => {
    const draft: PromptDraft = {
      id: 'test-2',
      title: 'Formatting Test',
      category: 'fatos_provas',
      usageMode: 'codex',
      architecture: 'redacao',
      purpose: 'Testing formatting',
      minimumInputs: ['doc1'],
      reasoning: 'médio',
      objective: 'Format prompt string correctly',
      inputs: ['doc1', 'doc2'],
      output: ['result1', 'result2'],
      doNotUse: 'For production',
      stop: 'When formatting fails',
      example: 'Formatting example',
      variations: ['fmt1'],
      codex: 'Formatter codex',
    };

    const result = prompt(draft);

    expect(result.prompt).toContain('# Objetivo\nFormat prompt string correctly');
    expect(result.prompt).toContain('# Material necessário\n- doc1: [preencher]\n- doc2: [preencher]');
    expect(result.prompt).toContain('# Entrega\n1. result1\n2. result2');
    expect(result.prompt).toContain('# Quando não usar\nFor production');
    expect(result.prompt).toContain('# Condição de parada\nWhen formatting fails');
    expect(result.prompt).toContain('# Regras de segurança\n- Separe fato informado');
  });

  it('should handle edge cases like empty inputs and empty outputs gracefully', () => {
    const draft: PromptDraft = {
      id: 'test-3',
      title: 'Empty Test',
      category: 'estrategia',
      usageMode: 'instrucao',
      architecture: 'comunicacao',
      purpose: 'Testing empty arrays',
      minimumInputs: [],
      reasoning: 'alto',
      objective: 'Test empty inputs',
      inputs: [],
      output: [],
      doNotUse: 'None',
      stop: 'None',
      example: 'Empty example',
      variations: [],
      codex: 'Empty codex',
    };

    const result = prompt(draft);

    expect(result.prompt).toContain('# Material necessário\n\n'); // Empty inputs
    expect(result.prompt).toContain('# Entrega\n\n'); // Empty outputs
  });

  it('should copy all other fields correctly', () => {
      const draft: PromptDraft = {
        id: 'test-4',
        title: 'Fields Test',
        category: 'cliente',
        usageMode: 'automacao',
        architecture: 'operacao',
        purpose: 'Testing all fields',
        minimumInputs: ['min1'],
        reasoning: 'médio',
        objective: 'Test fields',
        inputs: ['in1'],
        output: ['out1'],
        doNotUse: 'None',
        stop: 'None',
        example: 'Fields example',
        variations: ['var1', 'var2'],
        codex: 'Fields codex',
      };

      const result = prompt(draft);

      expect(result.id).toBe('test-4');
      expect(result.title).toBe('Fields Test');
      expect(result.category).toBe('cliente');
      expect(result.usageMode).toBe('automacao');
      expect(result.architecture).toBe('operacao');
      expect(result.purpose).toBe('Testing all fields');
      expect(result.minimumInputs).toEqual(['min1']);
      expect(result.reasoning).toBe('médio');
      expect(result.example).toBe('Fields example');
      expect(result.variations).toEqual(['var1', 'var2']);
      expect(result.codex).toBe('Fields codex');
    });
});
