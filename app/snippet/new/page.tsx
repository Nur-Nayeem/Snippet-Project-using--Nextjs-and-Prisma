import NewSnippetTextEditor from "@/components/NewSnippetTextEditor";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const NewSnippet = () => {
  return (
    <div>
      <h2 className="text-3xl my-3.5">Create New Snippet</h2>
      <NewSnippetTextEditor />
    </div>
  );
};

export default NewSnippet;
