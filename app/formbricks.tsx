"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import formbricks from "@formbricks/js/website";

export default function FormbricksProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //   useEffect(() => {
  //     formbricks.init({
  //       environmentId: "cllrsaffi037mod0gr26jo2e7",
  //       apiHost: "https://app.formbricks.com",
  //       //userId: "<user-id>",
  //     });
  //   }, []);

  if (typeof window !== "undefined") {
    formbricks.init({
      environmentId: "cllrsaffi037mod0gr26jo2e7",
      //userId: "<user-id>",
      apiHost: "https://app.formbricks.com",
    });
  }

  //   useEffect(() => {
  //     formbricks?.registerRouteChange();
  //   }, [pathname, searchParams]);

  //   return null;
}
