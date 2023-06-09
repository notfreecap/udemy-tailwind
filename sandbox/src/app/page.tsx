import Link from "next/link";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center p-6 max-w-sm mx-auto rounded-xl shadow-lg space-x-4 mt-2 font-light">
        <ul className="text-center">
          <li className="hover:bg-slate-500 hover:rounded-sm hover:transition duration-700 ease-in-out">
            <Link href="/utility-first">Utility First</Link>
          </li>
          <li className="hover:bg-slate-500 hover:rounded-sm hover:transition duration-700 ease-in-out">
            <Link href="/colors">Colors</Link>
          </li>
          <li className="hover:bg-slate-500 hover:rounded-sm hover:transition duration-700 ease-in-out">
            <Link href="/container-spacing">Container Spacing</Link>
          </li>
          <li className="hover:bg-slate-500 hover:rounded-sm hover:transition duration-700 ease-in-out">
            <Link href="/typography">Typography</Link>
          </li>
          <li className="hover:bg-slate-500 hover:rounded-sm hover:transition duration-700 ease-in-out">
            <Link href="/sizing">Sizing</Link>
          </li>
          <li className="hover:bg-slate-500 hover:rounded-sm hover:transition duration-700 ease-in-out">
            <Link href="/layout-position">Layout Position</Link>
          </li>
          <li className="hover:bg-slate-500 hover:rounded-sm hover:transition duration-700 ease-in-out">
            <Link href="/backgrounds">Backgrounds</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
