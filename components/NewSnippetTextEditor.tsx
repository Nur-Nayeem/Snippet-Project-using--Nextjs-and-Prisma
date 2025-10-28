"use client";

import { Editor } from "@monaco-editor/react";
import React, { useActionState, useState } from "react";
import * as actions from "@/actions";

const NewSnippetTextEditor = () => {
  const [code, setCode] = useState("");

  const handleCodeArea = (value: string = "") => {
    setCode(value);
  };
  // const formData = { title, code };
  const [formStateData, handleForm] = useActionState(actions.newSnippet, {
    message: "",
  });

  return (
    <div>
      <div className="w-full">
        <form action={handleForm} className="w-full space-y-3.5">
          <div className="flex flex-col gap-1.5">
            <label className="text-lg font-medium">Title:</label>
            <input
              className="border border-gray-300 p-2.5 rounded-lg focus:outline-none"
              name="title"
              placeholder="title of the snippet"
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
            <input type="hidden" name="code" value={code} />
          </div>
          {formStateData?.message && (
            <p className="text-red-500">{formStateData.message}</p>
          )}
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
