import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const NewSnippet = () => {
  async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    redirect("/");
  }

  return (
    <div className="my-container pt-5">
      <h2 className="text-3xl my-3.5">Create New Snippet</h2>
      <div className="w-full">
        <form action={createSnippet} className="w-full space-y-3.5">
          <div className="flex flex-col gap-1.5">
            <label className="text-lg font-medium">Title:</label>
            <input
              className="border border-gray-300 p-2.5 rounded-lg focus:outline-none"
              type="text"
              name="title"
              id="title"
              placeholder="title of the snippet"
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-lg font-medium">Code:</label>
            {/* <Editor
              height="50vh"
              defaultLanguage="javascript"
              defaultValue={`// // some comments
// const add = ()=>{
//     return a + b;
// }`}
            /> */}
            <textarea
              name="code"
              id="code"
              className="textarea h-96 w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none"
              placeholder="Write code here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-black/80 text-white py-2.5 rounded-lg"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewSnippet;
