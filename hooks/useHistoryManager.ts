import { useRef } from "react";
import { useRouter } from "next/router";
import { HistoryManager } from "~/utils/commons";
export default function useHistoryManager() {
  const router = useRouter();
  const { current } = useRef(HistoryManager.getInstance(router));
  return current;
}
