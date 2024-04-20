interface IMainContext {
  theme: TTheme;
  toggleTheme: TEmptyVoidFunction;
  changeTheme: (theme: TTheme) => void;
}

interface IMainContextProvider {
  children: JSX.Element;
}
