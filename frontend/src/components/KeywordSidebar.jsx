import React from "react";

const getKeywordFrequency = (text) => {
  const words = text
    .toLowerCase()
    .match(/\b\w+\b/g) || [];

  const frequencyMap = {};

  for (let word of words) {
    if (word.length <= 2) continue;
    frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  }

  return Object.entries(frequencyMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);
};

const KeywordSidebar = ({ text }) => {
  const keywords = getKeywordFrequency(text);

  return (
    <div className="bg-blue-50/40 backdrop-blur-md rounded-3xl p-6 shadow-md border border-blue-100">
      <h3 className="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
        🔍 Top Keywords
      </h3>

      {keywords.length === 0 ? (
        <p className="text-sm text-gray-500 italic">
          Start typing to see keywords...
        </p>
      ) : (
        <ul className="space-y-2">
          {keywords.map(([word, count], i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm hover:shadow-md transition"
            >
              <span className="capitalize text-gray-800 font-medium">{word}</span>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full">
                {count}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default KeywordSidebar;
