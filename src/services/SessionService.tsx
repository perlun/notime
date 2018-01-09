export class SessionService {
  public static isAuthenticated: boolean = false;

  public static authenticate(userName: string, password: string): void {
    throw new Error("NotImplemented");
  }
}
