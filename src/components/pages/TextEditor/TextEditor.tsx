"use client";

import { useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const TextEditor = () => {
  const [content, setContent] = useState("");

  // Get data live
  const handleChange = (value: string): void => {
    setContent(value);
    console.log("Editor Content (Live):", value);
  };

  // Get data on button click
  const handleSubmit = () => {
    console.log("Editor Content (Submit):", content);
  };

  return (
    <main className="container my-12 mx-auto pt-20">
      <div className="max-w-3xl mx-auto p-4">
        <SunEditor
          onChange={handleChange}
          height="300px"
          placeholder="Write something..."
          setOptions={{
            buttonList: [
              ["undo", "redo"],
              ["bold", "italic", "underline"],
              ["fontColor", "hiliteColor"],
              ["align", "list"],
              ["link", "image"],
              ["codeView"],
            ],
          }}
        />

        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Log Content
        </button>
      </div>
    </main>
  );
};

export default TextEditor;
