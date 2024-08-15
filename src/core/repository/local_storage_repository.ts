export abstract class LocalStorageRepository<T> {
  abstract keyStorage: string;
  getAll = (): T[] => {
    const result = localStorage.getItem(this.keyStorage);
    if (result) return JSON.parse(result);
    return [];
  };
  delete = (predicate: (value: T) => boolean) => {
    const result = this.getAll();

    localStorage.setItem(
      this.keyStorage,
      JSON.stringify(result.filter(predicate))
    );
  };
  create = (input: T) => {
    const result = this.getAll();
    result.push(input);
    localStorage.setItem(this.keyStorage, JSON.stringify(result));
  };
}
