export default function Form() {
  const INPUT_CLASS = "border border-black outline-orange";
  const BUTTON_CLASS =
    "font-reg border-2 border-black px-2 md:px-4 py-1 shadow-md hover:shadow-2xl hover:bg-black hover:text-white transition-all";

  return (
    <form
      class="font-reg fixed flex flex-col gap-8 justify-center items-center z-10 shadow-xl mt-40 w-4/5 p-12 text-center border-black border-4"
      method="post"
      action="/api/log-in"
    >
      <div>
        <p>Username</p>
        <input
          name="username"
          class={INPUT_CLASS}
          type="text"
          placeholder="Ask Levi"
          required
        />
      </div>
      <div>
        <p>Password</p>
        <input
          name="password"
          class={INPUT_CLASS}
          type="password"
          placeholder="Not telling 😂"
          required
        />
      </div>
      <div class="flex flex-col gap-2">
        <button
          type="button"
          onClick={() => {
            alert(
              "STUPID FUCKING PRICK HOW TF? Okay so if you havent set a password then it should be password by default, if however you HAVE set a password and you forgot it then ask me NICELEY and I will reset it for you, stupid stupid stupid",
            );
          }}
          class={BUTTON_CLASS}
        >
          I forgot password 😟
        </button>
        <input class={BUTTON_CLASS} type="submit" />
      </div>
    </form>
  );
}
