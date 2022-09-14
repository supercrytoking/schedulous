import React from "react";
import Font from "~/components/Font";

interface ErrorProps {
  messages: string[];
}

export default function Error({ messages }: ErrorProps): JSX.Element {
  return (
    <div>
      <Font block={false} size="small" className="color-error" mr="small">
        {messages.join(", ")}
      </Font>
    </div>
  );
}
