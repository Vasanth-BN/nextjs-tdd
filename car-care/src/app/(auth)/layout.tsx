import { APP_ROUTES } from "@/constants/appRoutes";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/options";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect(APP_ROUTES.ROOT);
  }
  return <div>{children}</div>;
}
