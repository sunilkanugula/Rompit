
import React, { useEffect, useRef } from 'react';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  rotation: number;
  speed: number;
  color: string;
  type: 'circle' | 'triangle' | 'square' | 'polygon';
}

const FloatingShapes: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<Shape[]>([]);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    
    // Create initial shapes
    shapesRef.current = Array.from({ length: 15 }, (_, i) => {
      const type = ['circle', 'triangle', 'square', 'polygon'][Math.floor(Math.random() * 4)] as Shape['type'];
      const color = i % 3 === 0 ? '#FF6600' : i % 3 === 1 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
      
      return {
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: 10 + Math.random() * 40,
        opacity: 0.1 + Math.random() * 0.3,
        rotation: Math.random() * 360,
        speed: 0.2 + Math.random() * 0.8,
        color,
        type,
      };
    });

    const animate = () => {
      const shapes = shapesRef.current;
      
      shapes.forEach(shape => {
        // Update position
        shape.y -= shape.speed;
        shape.rotation += shape.speed * 0.5;
        
        // Reset if out of bounds
        if (shape.y + shape.size < 0) {
          shape.y = height + shape.size;
          shape.x = Math.random() * width;
        }
      });
      
      // Request next frame
      rafRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const renderShape = (shape: Shape) => {
    const style = {
      left: `${shape.x}px`,
      top: `${shape.y}px`,
      width: `${shape.size}px`,
      height: `${shape.size}px`,
      opacity: shape.opacity,
      transform: `rotate(${shape.rotation}deg)`,
      backgroundColor: shape.type !== 'triangle' ? shape.color : 'transparent',
    };

    switch (shape.type) {
      case 'circle':
        return (
          <div
            key={shape.id}
            className="absolute rounded-full"
            style={style}
          />
        );
      case 'square':
        return (
          <div
            key={shape.id}
            className="absolute"
            style={style}
          />
        );
      case 'triangle':
        return (
          <div
            key={shape.id}
            className="absolute"
            style={{
              ...style,
              width: 0,
              height: 0,
              backgroundColor: 'transparent',
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${shape.color}`,
            }}
          />
        );
      case 'polygon':
        return (
          <div
            key={shape.id}
            className="absolute"
            style={{
              ...style,
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {shapesRef.current.map(renderShape)}
    </div>
  );
};

export default FloatingShapes;
