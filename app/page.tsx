import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();
  return (
    <div className="my-container mx-auto h-screen pt-6">
      <h2 className="text-3xl font-bold">Home</h2>
      <div className="mt-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl">Snippets</h3>
          <Link href={"/snippet/new"}>
            <button className="bg-green-600 text-white rounded-lg p-2.5">
              New
            </button>
          </Link>
        </div>
        <div className="space-y-2.5">
          {snippets.map((snpt, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 py-2.5  px-3.5 rounded-md"
            >
              <h4 className="text-xl font-medium ">{snpt.title}</h4>
              <Link href={`/snippet/${snpt.id}`}>
                <button className="text-lg">View</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
