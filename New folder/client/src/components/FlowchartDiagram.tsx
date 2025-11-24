interface FlowchartNode {
  id: number;
  type: "oval" | "rectangle" | "diamond" | "parallelogram";
  text: string;
}

interface FlowchartConnection {
  from: number;
  to: number;
  label?: string;
}

interface FlowchartDiagramProps {
  nodes: FlowchartNode[];
  connections: FlowchartConnection[];
  title?: string;
}

export function FlowchartDiagram({ nodes, connections, title }: FlowchartDiagramProps) {
  const getNodeStyle = (type: string) => {
    const baseStyle = "flex items-center justify-center p-4 text-sm font-medium text-foreground min-h-[60px] min-w-[140px] relative";
    
    switch (type) {
      case "oval":
        return `${baseStyle} bg-primary/10 border-2 border-primary rounded-full`;
      case "rectangle":
        return `${baseStyle} bg-accent border-2 border-border rounded-md`;
      case "diamond":
        return `${baseStyle} bg-yellow-50 dark:bg-yellow-950 border-2 border-yellow-500`;
      case "parallelogram":
        return `${baseStyle} bg-green-50 dark:bg-green-950 border-2 border-green-500`;
      default:
        return `${baseStyle} bg-card border-2 border-border rounded-md`;
    }
  };

  const renderNode = (node: FlowchartNode) => {
    if (node.type === "diamond") {
      return (
        <div key={node.id} className="flex items-center justify-center my-6" data-testid={`node-${node.id}`}>
          <div className="relative w-[140px] h-[140px]">
            <div className="absolute inset-0 rotate-45 bg-yellow-50 dark:bg-yellow-950 border-2 border-yellow-500 rounded-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium text-foreground text-center px-4 max-w-[100px]">
                {node.text}
              </span>
            </div>
          </div>
        </div>
      );
    }

    if (node.type === "parallelogram") {
      return (
        <div key={node.id} className="flex items-center justify-center my-6" data-testid={`node-${node.id}`}>
          <div className="relative w-[160px] h-[60px]">
            <div 
              className="absolute inset-0 bg-green-50 dark:bg-green-950 border-2 border-green-500"
              style={{ transform: 'skewX(-10deg)' }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm font-medium text-foreground text-center px-4">
                {node.text}
              </span>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div key={node.id} className="flex items-center justify-center my-6" data-testid={`node-${node.id}`}>
        <div className={getNodeStyle(node.type)}>
          <span className="text-center px-2">{node.text}</span>
        </div>
      </div>
    );
  };

  const renderConnection = (conn: FlowchartConnection, index: number) => {
    return (
      <div key={index} className="flex items-center justify-center my-2">
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-8 bg-primary" />
          {conn.label && (
            <div className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-md -my-1 z-10">
              {conn.label}
            </div>
          )}
          <div className="relative">
            <div className="w-0.5 h-4 bg-primary" />
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2"
              style={{
                width: 0,
                height: 0,
                borderLeft: "6px solid transparent",
                borderRight: "6px solid transparent",
                borderTop: "8px solid hsl(var(--primary))"
              }}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 bg-muted/30 rounded-lg border">
      {title && (
        <h3 className="text-lg font-semibold text-center mb-6 text-foreground">{title}</h3>
      )}
      <div className="flex flex-col items-center max-w-md mx-auto">
        {nodes.map((node, index) => (
          <div key={node.id} className="w-full">
            {renderNode(node)}
            {index < nodes.length - 1 && 
              renderConnection(
                connections.find(c => c.from === node.id) || { from: node.id, to: nodes[index + 1].id },
                index
              )
            }
          </div>
        ))}
      </div>
    </div>
  );
}
