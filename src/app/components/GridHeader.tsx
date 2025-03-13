import { PlusCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

type GridHeaderProps = {
  GridTitle: string;
  AddTitle: string;
  AddPath: string;
};

const GridHeader = (props: GridHeaderProps) => {
  const { GridTitle, AddTitle, AddPath } = props;

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
      <h1 className="text-2xl font-bold text-gray-800">{GridTitle}</h1>

      <div className="flex items-center gap-4 w-full sm:w-auto">
        <Link
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-4 py-2 rounded-md"
          href={AddPath + "/0"}
        >
          <PlusCircle size={18} />
          {AddTitle}
        </Link>
      </div>
    </div>
  );
};

export default GridHeader;
