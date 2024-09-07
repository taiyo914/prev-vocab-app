
import React from "react";
import { WordType } from "@/types/Types";

interface Props {
  word: WordType;
}

const VocabListItem : React.FC<Props> = ({ word }) => {
  return (
    <div className="flex items-center ">
      <div className="flex-1 grid grid-cols-5 border-gray-200 bg-white border shadow-sm rounded-lg py-2">
        <div className="col-span-1 flex items-center  border-r border-gray-200 px-2 font-bold text-lg">
          <div className="flex justify-center items-center min-h-10 min-w-10 bg-gray-300 rounded-full text-lg font-bold mr-3">
            {word.index}
          </div>
          <div className="flex justify-center items-center">
            {word.word}
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-center border-r border-gray-200  px-2">
          {word.meaning}
        </div>
        <div className="col-span-1 flex items-center justify-center border-r border-gray-200 px-3 text-sm">
          {word.example}
        </div>
        <div className="col-span-1 flex items-center justify-center border-r border-gray-200 px-3 text-sm">
          {word.example_translation}
        </div>
        <div className="col-span-1 flex items-center px-3 text-sm">
          {word.memo}
        </div>
      </div>
    </div>
  );
};

export default VocabListItem;
