import formbricks from "@formbricks/js/website";

if (typeof window !== "undefined") {
  formbricks.init({
    environmentId: "your-environment-id",
    apiHost: "https://app.formbricks.com",
  });
}
