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
        "rounded-md border bg-muted/60 overflow-hidden font-mono",
        className
      )}
    >
      <div className="overflow-x-auto">
        <Highlight theme={theme} code={code.trim()} language={language as any}>
          {({ className: inheritedClass, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={clsx(
                inheritedClass,
                "m-0 px-3 py-2 sm:px-4 sm:py-3 leading-relaxed text-xs sm:text-sm",
                wrap && "whitespace-pre-wrap break-words",
                !wrap && "overflow-x-auto"
              )}
              style={style}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })} className="table-row">
                  {showLineNumbers && (
                    <span className="table-cell pr-2 sm:pr-4 select-none text-xs text-muted-foreground whitespace-nowrap">
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
    </div>
  );
};

export default CodeBlock;