import { SearchParams } from "@/types/common";
import SignInForm from "./signInForm";

export default function SignInPage({ searchParams }: SearchParams) {
  const error = searchParams?.error || "";

  return <SignInForm error={error} />;
}
