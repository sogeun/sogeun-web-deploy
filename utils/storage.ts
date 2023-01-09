export type ParsedStorageDataTypes = {
  authToken: { token: string };
  isTutorialViewed: boolean;
  isSignupViewed: boolean;
};

export class ParsedStorage {
  static getItem = <K extends keyof ParsedStorageDataTypes>(
    key: K
  ): ParsedStorageDataTypes[K] | null => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  static setItem = <K extends keyof ParsedStorageDataTypes>(
    key: K,
    data: ParsedStorageDataTypes[K]
  ) => {
    if (typeof data !== "string") {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      localStorage.setItem(key, data);
    }
  };

  static removeItem = <K extends keyof ParsedStorageDataTypes>(key: K) => {
    localStorage.removeItem(key);
  };
}
