import { Providers } from "../ui/theme-provider";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <Providers>
      <div>{children}</div>
    </Providers>
  );
}
