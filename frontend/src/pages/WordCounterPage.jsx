import React, { useState } from "react";
import StatsBar from "../components/StatsBar";
import EditorArea from "../components/EditorArea";
import KeywordSidebar from "../components/KeywordSidebar";
import EditorActions from "../components/EditorActions";

const WordCounterPage = () => {
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 p-6">
        <StatsBar text={text} />
        <EditorArea text={text} setText={setText} />
        <EditorActions text={text} setText={setText} />
      </div>
      <div className="hidden md:block w-full md:w-1/4 p-4">
        <KeywordSidebar text={text} />
      </div>
    </div>
  );
};

export default WordCounterPage;
