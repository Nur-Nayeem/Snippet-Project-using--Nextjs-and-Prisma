import { prisma } from "@/lib/prisma";
import React from "react";

const ViewSpinnet = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  return (
    <div className="my-container pt-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl my-2.5">{snippet?.title}</h2>
        <div className="space-x-2.5">
          <button className="text-white py-2.5 px-3.5 bg-black rounded-lg">
            edit
          </button>
          <button className="text-white py-2.5 px-3.5 bg-red-500 rounded-lg">
            delete
          </button>
        </div>
      </div>

      <div className="my-3.5">
        <pre className="p-3 bg-gray-200 rounded border-gray-200">
          <code>{snippet?.code}</code>
        </pre>
      </div>
    </div>
  );
};

export default ViewSpinnet;
