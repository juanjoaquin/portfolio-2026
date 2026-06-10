export const PAGE_TRANSITION_MS = 450;

export type PageDirection = "forward" | "backward";

export function getPageDirection(from: number, to: number): PageDirection {
  return to >= from ? "forward" : "backward";
}
