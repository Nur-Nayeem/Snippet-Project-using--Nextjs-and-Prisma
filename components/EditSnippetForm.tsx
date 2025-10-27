"use client";
import { Snippet } from "@/app/generated/prisma";
import { Editor } from "@monaco-editor/react";
import React, { useState } from "react";
import { updateSnippet } from "@/actions";

const EditSnippetForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  const changeEventHandler = (value: string = "") => {
    setCode(value);
  };

  const saveUpdateSnippet = updateSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <h2>Edit Code:</h2>
      <br />
      <Editor
        height="50vh"
        defaultLanguage="javascript"
        defaultValue={code}
        onChange={changeEventHandler}
      />
      <form action={saveUpdateSnippet} className="flex justify-end">
        <button
          type="submit"
          className="text-white bg-orange-400 p-2.5 rounded-lg"
        >
          update code
        </button>
      </form>
    </div>
  );
};

export default EditSnippetForm;
