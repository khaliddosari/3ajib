import { motion } from 'framer-motion';

const NeuralAnimation = () => {
  const nodes = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 50 + Math.cos((i / 12) * Math.PI * 2) * 40,
    y: 50 + Math.sin((i / 12) * Math.PI * 2) * 40,
  }));

  const connections = [
    [0, 3], [0, 6], [1, 4], [1, 7], [2, 5], [2, 8],
    [3, 9], [4, 10], [5, 11], [6, 9], [7, 10], [8, 11],
  ];

  return (
    <div className="relative w-48 h-48 mx-auto">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        {/* Connections */}
        {connections.map(([start, end], index) => (
          <motion.line
            key={`line-${index}`}
            x1={nodes[start].x}
            y1={nodes[start].y}
            x2={nodes[end].x}
            y2={nodes[end].y}
            stroke="url(#neural-gradient)"
            strokeWidth="0.5"
            className="neural-line"
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.circle
            key={`node-${index}`}
            cx={node.x}
            cy={node.y}
            r="3"
            fill="url(#node-gradient)"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: index * 0.1,
            }}
          />
        ))}

        {/* Center node */}
        <motion.circle
          cx="50"
          cy="50"
          r="8"
          fill="url(#center-gradient)"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <defs>
          <linearGradient id="neural-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(217, 91%, 60%)" />
            <stop offset="100%" stopColor="hsl(160, 84%, 39%)" />
          </linearGradient>
          <radialGradient id="node-gradient">
            <stop offset="0%" stopColor="hsl(160, 100%, 45%)" />
            <stop offset="100%" stopColor="hsl(160, 84%, 39%)" />
          </radialGradient>
          <radialGradient id="center-gradient">
            <stop offset="0%" stopColor="hsl(38, 92%, 50%)" />
            <stop offset="100%" stopColor="hsl(38, 72%, 40%)" />
          </radialGradient>
        </defs>
      </svg>

      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute -bottom-8 left-0 right-0 text-center text-sm text-muted-foreground"
      >
        Analyzing patterns...
      </motion.p>
    </div>
  );
};

export default NeuralAnimation;
