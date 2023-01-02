import { NextRouter } from "next/router";

export class HistoryManager {
  private router;
  private static instance: HistoryManager;

  constructor(router: NextRouter) {
    this.router = router;
    this.replace = this.replace.bind(this);
    this.push = this.push.bind(this);
  }

  replace(replaceUrl: string) {
    window.history.replaceState({ ...window.history }, "", replaceUrl);
  }

  push(pushUrl: string) {
    window.history.pushState({ ...window.history }, "", pushUrl);
  }

  disableGoBack() {
    this.router.beforePopState(() => false);
    return () => this.router.beforePopState(() => true);
  }

  static getInstance(router?: NextRouter) {
    if (!this.instance) {
      if (!router) {
        throw new Error("need router to initialize instance");
      }
      this.instance = new HistoryManager(router);
    }
    return this.instance;
  }
}
