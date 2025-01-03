import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./Loading";

const Scene = dynamic(() => import("./_components/Scene"), {
  suspense: true,
});

// const Scene = dynamic(
//   () =>
//     new Promise((resolve) => {
//       setTimeout(() => resolve(import("./_components/Scene")), 13000); // 13-second delay
//     }),
//   { suspense: true }
// );

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="view">
        <Scene />
      </main>
    </Suspense>
  );
}
