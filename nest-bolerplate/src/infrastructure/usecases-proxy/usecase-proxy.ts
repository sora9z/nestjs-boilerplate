export class UseCaseProxy<T> {
  constructor(private readonly useCase: T) {}
  // Domain layer인 useCase에서 repoaitory를 주입받아 사용할 수 있도록 하는 proxy
  getInstance(): T {
    return this.useCase;
  }
}
