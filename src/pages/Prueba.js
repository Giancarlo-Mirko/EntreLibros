import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledCanvas = styled.canvas`
  border: 1px solid #d3d3d3;
`;

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Draw a rectangle with a solid color
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(20, 20, 150, 100);

    // Draw a circle with a solid color
    ctx.beginPath();
    ctx.arc(250, 100, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = '#00FF00';
    ctx.fill();
  }, []);

  return <StyledCanvas ref={canvasRef} width="500" height="500" />;
};

export default Canvas;
