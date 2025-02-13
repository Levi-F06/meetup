import { useState } from "preact/hooks";
import Form from "../components/form.tsx";

export default function Header({ result }: { result?: string }) {
  if (result) {
    console.log(result);
  }
  const [form, expandForm] = useState<boolean>(false);

  const BUTTON_CLASS =
    "font-reg border-2 border-black px-2 md:px-4 py-1 shadow-md hover:shadow-2xl hover:bg-black hover:text-white transition-all";

  return (
    <div class="flex flex-col items-center">
      <header class="w-screen h-auto flex justify-between items-center p-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-8 md:size-10 hover:drop-shadow-xl hover:size-12 transition-all cursor-pointer"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>

        <h1 class="font-logo font-bold text-4xl md:text-6xl text-center">
          Meetup
        </h1>
        <button
          onClick={() => expandForm(!form)}
          class={`${BUTTON_CLASS} ${
            form ? "bg-black text-white shadow-2xl" : ""
          }`}
        >
          Log In
        </button>
      </header>
      {form ? <Form /> : ("")}
    </div>
  );
}
