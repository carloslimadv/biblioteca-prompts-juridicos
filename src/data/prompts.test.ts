import { describe, expect, it } from "vitest";
import { buildPrompt, type PromptDraft } from "./prompts";

describe('buildPrompt', () => {
  const mockDraft: PromptDraft = {
    id: "test-id",
    title: "Test Title",
    category: "pecas_revisao",
    usageMode: "chatgpt",
    architecture: "analise",
    purpose: "Test purpose",
    minimumInputs: ["input1"],
    reasoning: "baixo",
    example: "Test example",
    variations: ["var1"],
    codex: "Test codex",
    objective: "Create a test prompt",
    inputs: ["documento 1", "documento 2"],
    output: ["resumo", "conclusão"],
    doNotUse: "Do not use for real legal cases.",
    stop: "Stop if the documents are missing."
  };

  it('should format the prompt correctly', () => {
    const result = buildPrompt(mockDraft);

    // Verify objective is included correctly
    expect(result).toContain('# Objetivo\nCreate a test prompt');

    // Verify inputs are mapped to a list with "[preencher]"
    expect(result).toContain('# Material necessário\n- documento 1: [preencher]\n- documento 2: [preencher]');

    expect(result).toContain("# Restrições e evidências");
    expect(result).toContain("Separe fato informado, prova, inferência, lacuna e risco.");
    expect(result).toContain("# Limites de autonomia");

    // Verify outputs are mapped to a numbered list
    expect(result).toContain("# Entrega e critérios de sucesso\n1. resumo\n2. conclusão");

    // Verify doNotUse is included
    expect(result).toContain("# Quando não usar\nDo not use for real legal cases.");

    // Verify stop is included
    expect(result).toContain("# Condição de parada\nStop if the documents are missing.");
    expect(result).toContain("# Verificação final");
  });

  it('should handle empty inputs gracefully', () => {
    const emptyInputsDraft = { ...mockDraft, inputs: [] };
    const result = buildPrompt(emptyInputsDraft);

    expect(result).toContain("# Material necessário\n\n");
  });

  it('should handle empty outputs gracefully', () => {
    const emptyOutputsDraft = { ...mockDraft, output: [] };
    const result = buildPrompt(emptyOutputsDraft);

    expect(result).toContain("# Entrega e critérios de sucesso\n\nConsidere a entrega pronta");
  });
});
