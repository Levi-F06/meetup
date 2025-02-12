import { Client } from "https://deno.land/x/mysql@v2.12.1/mod.ts";

export const db =  await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "meetupDemo",
  password: "",
});
