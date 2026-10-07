import type { ReactNode } from "react";
import { useTranslation } from "@/hooks/useTranslation";

type LocalizedTextProps = {
  children: ReactNode;
};

export default function LocalizedText({ children }: LocalizedTextProps) {
  const { translateText } = useTranslation();

  if (typeof children !== "string") {
    return <>{children}</>;
  }

  return <>{translateText(children)}</>;
}
