import React from "react";
import { Highlight, themes } from "prism-react-renderer";
import clsx from "clsx";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
  wrap?: boolean;
}

// VS Code inspired tweaks over prism-react-renderer theme
const theme = {
  ...themes.vsLight,
  plain: {
    ...themes.vsLight.plain,
    backgroundColor: "transparent",
    fontSize: "14px",
  },
};

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "python",
  showLineNumbers = false,
  className,
  wrap = false,
}) => {
  return (
    <div
      className={clsx(
        "rounded-md border bg-muted/60 p-0 overflow-hidden font-mono",
        className
      )}
    >
      <Highlight theme={theme} code={code.trim()} language={language as any}>
        {({ className: inheritedClass, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={clsx(
              inheritedClass,
              "m-0 px-4 py-3 leading-relaxed",
              wrap && "whitespace-pre-wrap break-words"
            )}
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="table-row">
                {showLineNumbers && (
                  <span className="table-cell pr-4 select-none text-xs text-muted-foreground">
                    {i + 1}
                  </span>
                )}
                <span className="table-cell">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
};

export default CodeBlock;