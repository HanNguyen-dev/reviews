import React from "react";

import { Theme } from "@radix-ui/themes";

export function Providers({ children }: React.PropsWithChildren) {
  return (
    <Theme accentColor="crimson" grayColor="sand">
      {children}
    </Theme>
  );
}
