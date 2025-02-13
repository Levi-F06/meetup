import { PageProps } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";
import { Handlers } from "$fresh/server.ts";
import { db } from "../utils/db.ts";

interface User {
  ID: number;
  username: string;
}

export const handler: Handlers = {
  async GET(req, ctx) {
    let user: User | null = null;
    const cookies = req.headers.get("cookie") || "";

    const sessionID = cookies
      .split("; ")
      .find((row: string) => row.startsWith("session="))?.split("=")[1];

    if (sessionID) {
      const usersID = await db.query(
        "SELECT * FROM sessions WHERE ID = ?",
        [sessionID],
      );

      if (usersID) {
        user = usersID[0];
      }
    }

    return ctx.render({ user });
  },
};

export default function Home(props: PageProps<{ user:User }>) {
  const url = new URL(props.url);
  const result = url.searchParams.get("result") as string;
  
  console.log(props.data.user);

  return (
    <>
      {result ? <p>Message</p> : (
        ""
      )}
      <Header />
      <p>{result}</p>
    </>
  );
}
