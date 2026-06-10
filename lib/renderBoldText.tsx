import { Fragment } from "react";

const BOLD_PATTERN = /(\*\*[^*]+\*\*)/g;

export function renderBoldText(text: string) {
  return text.split(BOLD_PATTERN).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}
