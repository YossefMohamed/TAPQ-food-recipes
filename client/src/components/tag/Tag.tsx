import React from "react";
import { Link } from "react-router-dom";

const Tag = ({
  selected = false,
  content,
  to,
}: {
  selected?: boolean;
  content: string;
  to: string;
}) => {
  return (
    <Link to={to}>
      <div className={`tag ${selected && "bg-main text-tsecondary"}`}>
        {content}
      </div>
    </Link>
  );
};

export default Tag;
