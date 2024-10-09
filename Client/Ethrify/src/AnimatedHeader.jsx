import React, { useEffect, useRef, useState } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const [animateHeader, setAnimateHeader] = useState(true);

  // Helper function to calculate distance between points
  const getDistance = (p1, p2) => {
    return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    let points = [];
    let target = { x: width / 2, y: height / 2 };

    // Adjust canvas size
    canvas.width = width;
    canvas.height = height;

    // Create points
    for (let x = 0; x < width; x = x + width / 20) {
      for (let y = 0; y < height; y = y + height / 20) {
        const px = x + (Math.random() * width) / 20;
        const py = y + (Math.random() * height) / 20;
        points.push({ x: px, originX: px, y: py, originY: py, closest: [] });
      }
    }

    // Find closest points
    points.forEach((p1) => {
      let closest = [];
      points.forEach((p2) => {
        if (p1 !== p2) {
          let placed = false;
          for (let k = 0; k < 5; k++) {
            if (!placed && !closest[k]) {
              closest[k] = p2;
              placed = true;
            }
          }
          for (let k = 0; k < 5; k++) {
            if (!placed && getDistance(p1, p2) < getDistance(p1, closest[k])) {
              closest[k] = p2;
              placed = true;
            }
          }
        }
      });
      p1.closest = closest;
    });

    // Define Circle class
    class Circle {
      constructor(pos, rad, color) {
        this.pos = pos;
        this.radius = rad;
        this.color = color;
        this.active = 1;
      }

      draw() {
        if (!this.active) return;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      }
    }

    points.forEach((point) => {
      point.circle = new Circle(
        point,
        2 + Math.random() * 2,
        "rgba(255,255,255,0.3)"
      );
    });

    // Handle window resize
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    // Handle mouse movement
    const mouseMove = (e) => {
      target.x =
        e.pageX ||
        e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
      target.y =
        e.pageY ||
        e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
    };

    const scrollCheck = () => {
      if (document.body.scrollTop > height) {
        setAnimateHeader(false);
      } else {
        setAnimateHeader(true);
      }
    };

    // Animate function
    const animate = () => {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        points.forEach((point) => {
          const distance = getDistance(target, point);
          if (distance < 4000) {
            point.active = 0.3;
            point.circle.active = 0.6;
          } else if (distance < 20000) {
            point.active = 0.1;
            point.circle.active = 0.3;
          } else if (distance < 40000) {
            point.active = 0.02;
            point.circle.active = 0.1;
          } else {
            point.active = 0;
            point.circle.active = 0;
          }

          drawLines(point);
          point.circle.draw();
        });
      }
      requestAnimationFrame(animate);
    };

    // Draw lines between points
    const drawLines = (p) => {
      if (!p.active) return;
      p.closest.forEach((closestPoint) => {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(closestPoint.x, closestPoint.y);
        ctx.strokeStyle = `rgba(156,217,249,${p.active})`;
        ctx.stroke();
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll", scrollCheck);
    window.addEventListener("resize", resize);

    // Initial animation
    animate();

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("scroll", scrollCheck);
      window.removeEventListener("resize", resize);
    };
  }, [animateHeader]);

  return <canvas id="demo-canvas" ref={canvasRef} />;
};

export default AnimatedBackground;
