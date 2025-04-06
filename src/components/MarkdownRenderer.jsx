import Markdown from "react-markdown";
const MarkdownRenderer = ({ children }) => {
  return (
    <Markdown
      components={{
        ul: ({ children }) => <ul className="list-disc pl-6 text-[#444]">{children}</ul>,
        p: ({ children }) => (
          <p className="text-justify text-[#444]">{children}</p>
        ),

        h3: ({ children }) => (
          <h3 className="font-serif font-medium text-xl md:text-3xl lg:text-5xl  tracking-wider pt-6">
            {children}
          </h3>
        ),
        h2: ({ children }) => (
          <h2 className="font-serif font-medium text-xl md:text-3xl lg:text-5xl  tracking-wider  pt-6">
            {children}
          </h2>
        ),
        h1: ({ children }) => (
          <h1 className="font-serif font-medium text-xl md:text-2xl  tracking-wider">
            {children}
          </h1>
        ),
      }}
    >
      {children}
    </Markdown>
  );
};

export default MarkdownRenderer;
