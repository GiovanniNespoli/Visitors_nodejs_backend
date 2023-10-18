/* eslint-disable */
import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
const envVars = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.string().optional(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> {}
  }
}

let env: z.infer<typeof envVars> = process.env;

if (!!process.env.SKIP_ENV_VALIDATION == false) {
  const parsed = envVars.safeParse(env);

  if (parsed.success === false) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors,
    );
    throw new Error(
      `Invalid environment variables: ${JSON.stringify(
        parsed.error.flatten().fieldErrors,
      )}`,
    );
  }

  env = parsed.data;
}

export { env };