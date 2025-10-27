"use client";
import { newSnippet } from "@/actions";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";

const NewSnippetTextEditor = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  const handleCodeArea = (value: string = "") => {
    setCode(value);
  };

  const createNewSnippet = newSnippet.bind(null, title, code);

  return (
    <div>
      <div className="w-full">
        <form action={createNewSnippet} className="w-full space-y-3.5">
          <div className="flex flex-col gap-1.5">
            <label className="text-lg font-medium">Title:</label>
            <input
              className="border border-gray-300 p-2.5 rounded-lg focus:outline-none"
              value={title}
              placeholder="title of the snippet"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-lg font-medium">Code:</label>
            <Editor
              height="50vh"
              defaultLanguage="javascript"
              defaultValue={"//start code from bellow"}
              value={code}
              onChange={handleCodeArea}
            />

            {/* <textarea
              name="code"
              id="code"
              className="textarea h-96 w-full border border-gray-300 p-2.5 rounded-lg focus:outline-none"
              placeholder="Write code here"
            ></textarea> */}
          </div>
          <button
            type="submit"
            className="w-full bg-black/80 text-white py-2.5 rounded-lg hover:bg-black cursor-pointer"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewSnippetTextEditor;
