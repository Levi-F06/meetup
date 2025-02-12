import { PageProps } from "$fresh/server.ts";
import Header from "../islands/Header.tsx";

export default function Home(props: PageProps) {
  const url = new URL(props.url);
  const result = url.searchParams.get("result") as string;
  return (
    <>
      {result ? <p>Message</p> : (
        ""
      )}
      <Header result={result} />
      <p>{result}</p>
    </>
  );
}
