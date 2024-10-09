"use client";

import { useEffect } from "react";
//import { formbricks } from "@/lib/formbricks";
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { usePathname, useSearchParams } from "next/navigation";
//import { useEffect } from "react";
import formbricks from "@formbricks/js/website";

export default function FormbricksProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    formbricks.init({
      environmentId: "cllrsaffi037god0g349ja4i3",
      apiHost: "https://app.formbricks.com",
      userId: "<user-id>",
    });
  }, []);

  useEffect(() => {
    formbricks?.registerRouteChange();
  }, [pathname, searchParams]);

  return null;
}

export function SurveyTrigger() {
  const { user } = useUser();

  //   useEffect(() => {
  //     if (user) {
  //       formbricks.setUserId(user.id);
  //       formbricks.setAttributes({
  //         email: user.email,
  //       });
  //     }
  //   }, [user]);

  return null;
}

export function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Connect next.js router to Formbricks
    const handleRouteChange = formbricks?.registerRouteChange;
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  });
  return <Component {...pageProps} />;
}
