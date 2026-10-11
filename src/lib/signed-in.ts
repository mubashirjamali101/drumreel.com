import { cookies } from "next/headers";

export async function signedIn(): Promise<boolean> {
  const jar = await cookies();
  return jar.get("drumreel_signed_in")?.value === "1";
}
