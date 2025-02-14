import { Handlers } from "$fresh/server.ts";
import { db } from "../../utils/db.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.0/mod.ts";

export const handler: Handlers = {
  async POST(req, _ctx) {
    let result = "";

    const form = await req.formData();
    const user = await db.query(
      "SELECT password FROM users WHERE username = ?;",
      [form.get("username")],
    );

    const headers = new Headers();

    if (Object.keys(user).length) {
      const password = form.get("password") as string;
      const userPassword = user[0].password;

      if (bcrypt.compareSync(password, userPassword)) {
        const usersID = await db.query(
          "SELECT ID FROM users WHERE username=?;",
          [form.get("username")],
        );
        result = "success";
        // Create session
        const sessionsID = crypto.randomUUID();

        await db.execute(
          `INSERT INTO sessions VALUES (?, ?)`,
          [sessionsID, usersID[0].ID],
        );

        headers.append(
          "Set-Cookie",
          `session=${sessionsID}; Path=/; HttpOnly SameSite=Lax`,
        );
      } else {
        result = "incorrect_password";
      }
    } else {
      result = "username_not_found";
    }

    headers.set("location", `/?result=${result}`);
    return new Response(null, {
      status: 303,
      headers,
    });
  },
};
