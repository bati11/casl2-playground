import { Memory } from "../../infra/memory"
import { Instruction, Label, Tokens } from "../types"

export function execEND(
  tokens: Tokens,
  labels: Map<string, Label>,
  memory: Memory
): Instruction {
  return {
    wordLength: 0,
    tokens,
    gen: () => null
  }
}
