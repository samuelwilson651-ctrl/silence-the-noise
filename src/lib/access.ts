import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { hasActiveMembership } from "./stripe";

export async function requireAuth() {
  const { userId } = await auth();
  if (!userId) redirect("/login");
  return userId;
}

export async function getUserAccess() {
  const { userId } = await auth();
  if (!userId) return { userId: null, isAuthenticated: false, isMember: false };
  const user = await currentUser();
  const stripeCustomerId = user?.privateMetadata?.stripeCustomerId as string | undefined;
  const isMember = await hasActiveMembership(stripeCustomerId);
  return { userId, isAuthenticated: true, isMember, stripeCustomerId };
}

export async function requireMembership() {
  const { userId } = await auth();
  if (!userId) redirect("/login?redirect=/dashboard");
  const { isMember } = await getUserAccess();
  if (!isMember) redirect("/membership");
  return true;
}
