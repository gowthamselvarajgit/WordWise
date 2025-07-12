import React from "react";
import StatBox from "./StatBox";

const StatsBar = ({ text }) => {
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;
  const sentenceCount = (text.match(/[^.!?]+[.!?]+/g) || []).length;
  const paragraphCount =
    text.trim() === "" ? 0 : text.trim().split(/\n+/).length;
  const totalWithSpaces = text.replace(/\n/g, "").length;

  return (
    <div className="bg-blue-50/40 backdrop-blur-md border border-blue-100 rounded-3xl shadow-lg p-6 mb-8 flex flex-wrap justify-center gap-6">
      <StatBox label="Words" value={wordCount} />
      <StatBox label="Characters" value={charCount} />
      <StatBox label="Sentences" value={sentenceCount} />
      <StatBox label="Paragraphs" value={paragraphCount} />
      <StatBox label="With Spaces" value={totalWithSpaces} />
      <StatBox
        label="Twitter"
        value={`${280 - charCount}/280`}
        colored={charCount > 280}
      />
      <StatBox
        label="Facebook"
        value={`${250 - charCount}/250`}
        colored={charCount > 250}
      />
      <StatBox
        label="LinkedIn"
        value={`${3000 - charCount}/3000`}
        colored={charCount > 3000}
      />
    </div>
  );
};

export default StatsBar;
