import { authOptions } from "@/src/lib/auth";
import { getServerSession } from "next-auth";

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return <h2 className="text-2xl">Welcome {session?.user.username}</h2>;
  }
  return <h1>HomePage</h1>;
}
