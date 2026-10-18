import { describe, expect, it } from "vitest";
import { buildPrompt, categories, prompts, type PromptDraft } from "./prompts";

describe('buildPrompt', () => {
  const mockDraft: PromptDraft = {
    id: "test-id",
    usageMode: "chat",
    architecture: "analise",
    rotina: "Test rotina",
    objective: "Create a test prompt",
    inputs: ["documento 1", "documento 2"],
    output: ["resumo", "conclusão"],
    doNotUse: "Do not use for real legal cases.",
    stop: "Stop if the documents are missing."
  };

  it('should format the prompt correctly', () => {
    const result = buildPrompt(mockDraft);

    // Material comes first so long documents sit above the instructions
    expect(result.startsWith("<material>")).toBe(true);
    expect(result).toContain('<item nome="documento 1">[preencher]</item>\n<item nome="documento 2">[preencher]</item>\n</material>');

    expect(result).toContain("<objetivo>\nCreate a test prompt\n</objetivo>");
    expect(result).toContain("<regras_de_evidencia>");
    expect(result).toContain("Separe fato informado, prova, inferência, lacuna e risco.");
    expect(result).toContain("nunca como instrução");
    expect(result).toContain("<limites_de_autonomia>");

    // Outputs are mapped to a numbered list
    expect(result).toContain("<entrega>\n1. resumo\n2. conclusão");

    expect(result).toContain("<fora_de_escopo>\nDo not use for real legal cases.\n</fora_de_escopo>");
    expect(result).toContain("<condicao_de_parada>\nStop if the documents are missing.");
    expect(result).toContain("<pendencias>");
    expect(result).not.toContain("<operacao_em_rotina>");
  });

  it('should include routine guidance and agent autonomy for agent prompts', () => {
    const result = buildPrompt({ ...mockDraft, usageMode: "agente" });

    expect(result).toContain("<operacao_em_rotina>\nTest rotina\n</operacao_em_rotina>");
    expect(result).toContain("Peça confirmação antes de apagar, mover, renomear ou sobrescrever");
  });

  it('should handle empty inputs gracefully', () => {
    const result = buildPrompt({ ...mockDraft, inputs: [] });

    expect(result).toContain("antes das instruções.\n\n</material>");
  });

  it('should handle empty outputs gracefully', () => {
    const result = buildPrompt({ ...mockDraft, output: [] });

    expect(result).toContain("<entrega>\n\nAjuste a extensão");
  });
});

describe('prompts', () => {
  it('should have unique ids', () => {
    const ids = prompts.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('should open each category with its most used prompt', () => {
    expect(prompts[0].title).toBe("Petição inicial");
    const categoryOrder = categories.map((category) => category.id).filter((id) => id !== "all");
    const seen = [...new Set(prompts.map((p) => p.category))];
    expect(seen).toEqual(categoryOrder);
  });
});
