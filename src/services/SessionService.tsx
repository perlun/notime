export class SessionService {
  public static isAuthenticated: boolean = false;

  public static authenticate(userName: string, password: string): void {
    // throw new Error("NotImplemented");
    // TODO: we need to propagate this change to the App component, without coupling things together in an unreasably
    // way. A few approaches:
    // - Using a MessageBus implementation (like we used to have in the WPF world)
    // - Passing a callback all the way down, but I _think_ this is hard since we use the react-router-dom. Maybe not,
    // will have to look into it.
    // - Catching the App instance when it's created and make it accessible elsewhere. (Ugly hack!)
    this.isAuthenticated = true;
  }
}
