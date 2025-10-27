import EditSnippetForm from "@/components/EditSnippetForm";
import { prisma } from "@/lib/prisma";
import React from "react";

const EditSnippet = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: {
      id,
    },
  });
  if (!snippet) return <h2>Not found</h2>;
  return (
    <div className="w-4xl mx-auto">
      <EditSnippetForm snippet={snippet} />
    </div>
  );
};

export default EditSnippet;
