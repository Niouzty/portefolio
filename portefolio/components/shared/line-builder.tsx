const INDENT = "  ";

const pad = (depth: number) => INDENT.repeat(depth);

function Line({
  depth,
  index,
  children
}: {
  depth: number;
  index: number;
  children: React.ReactNode;
}) {
  const delay = `${index * 0.07}s`;
  return (
    <span className="line type-line" style={{ "--delay": delay } as React.CSSProperties}>
      <span className="indent">{pad(depth)}</span>
      {children}
    </span>
  );
}

export function LineBuilder(obj: Record<string, string | number>) {
  const entries = Object.entries(obj);
  const lines: React.ReactNode[] = [];
  const push = (depth: number, node: React.ReactNode) =>
    lines.push(
      <Line key={lines.length} depth={depth} index={lines.length}>
        {node}
      </Line>
    );

  push(0, <span className="punctuation">&#123;</span>);

  entries.forEach(([k, v], idx) => {
    const trailing = idx === entries.length - 1 ? "" : ",";
    push(
      1,
      <>
        <span className="key">"{k}"</span>
        <span className="punctuation">: </span>
        <span className="string">"{v}"</span>
        <span className="punctuation">{trailing}</span>
      </>
    );
  });

  push(0, <span className="punctuation">&#125;</span>);

  return lines;
}
