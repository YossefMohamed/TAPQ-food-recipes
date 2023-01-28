import React from "react";

const Tag = ({
  selected = false,
  content,
}: {
  selected?: boolean;
  content: string;
}) => {
  return (
    <div className={`tag ${selected && "bg-main text-tsecondary"}`}>
      {content}
    </div>
  );
};

export default Tag;
