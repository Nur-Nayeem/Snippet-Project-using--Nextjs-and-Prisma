"use client";
import { Editor } from "@monaco-editor/react";
import React from "react";

const NewSnippet = () => {
  return (
    <div className="my-container pt-5">
      <h2 className="text-3xl my-3.5">Create New Snippet</h2>
      <div className="w-full">
        <form action="" className="w-full space-y-3.5">
          <div className="flex flex-col gap-1.5">
            <label className="text-lg font-medium">Title:</label>
            <input
              className="border border-gray-300 p-2.5 rounded-lg focus:outline-none"
              type="text"
              name="title"
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
              className="textarea h-96 w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none"
              placeholder="Bio"
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
