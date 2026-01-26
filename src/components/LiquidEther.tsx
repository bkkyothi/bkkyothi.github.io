import React, { useEffect, useRef } from 'react';

interface LiquidEtherProps {
    mouseForce?: number;
    cursorSize?: number;
    isViscous?: boolean;
    viscous?: number;
    colors?: string[];
    autoDemo?: boolean;
    autoSpeed?: number;
    autoIntensity?: number;
    isBounce?: boolean;
    resolution?: number;
}

const LiquidEther: React.FC<LiquidEtherProps> = ({
    mouseForce = 20,
    cursorSize = 100,
    isViscous = true,
    viscous = 30,
    colors = ["#9a9393", "#4a6275", "#79b6d8"],
    autoDemo = true,
    autoSpeed = 0.5,
    autoIntensity = 2.2,
    isBounce = false,
    resolution = 0.5,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const mousePos = useRef({ x: 0, y: 0 });
    const targetPos = useRef({ x: 0, y: 0 });
    const particles = useRef<any[]>([]);
    const animationFrameId = useRef<number>();
    const autoTime = useRef(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        // Set canvas size
        const updateSize = () => {
            const rect = container.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
        };
        updateSize();
        window.addEventListener('resize', updateSize);

        // Parse colors to RGB
        const rgbColors = colors.map((color) => {
            const hex = color.replace('#', '');
            return {
                r: parseInt(hex.substring(0, 2), 16),
                g: parseInt(hex.substring(2, 4), 16),
                b: parseInt(hex.substring(4, 6), 16),
            };
        });

        // Initialize particles
        particles.current = [];
        const particleCount = 8;
        for (let i = 0; i < particleCount; i++) {
            particles.current.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 1,
                vy: (Math.random() - 0.5) * 1,
                size: Math.random() * 200 + 200,
                color: rgbColors[i % rgbColors.length],
                angle: Math.random() * Math.PI * 2,
            });
        }

        // Initialize auto demo position
        targetPos.current = {
            x: canvas.width / 2,
            y: canvas.height / 2,
        };
        mousePos.current = { ...targetPos.current };

        // Mouse movement handler
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            targetPos.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };

        canvas.addEventListener('mousemove', handleMouseMove);

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;

            // Auto demo movement
            if (autoDemo) {
                autoTime.current += autoSpeed * 0.016;
                const autoPosX = Math.sin(autoTime.current) * autoIntensity * 100 + canvas.width / 2;
                const autoPosY = Math.cos(autoTime.current * 0.8) * autoIntensity * 80 + canvas.height / 2;

                // Only use auto position if mouse hasn't moved
                if (!canvas.matches(':hover')) {
                    targetPos.current = { x: autoPosX, y: autoPosY };
                }
            }

            // Smooth mouse position
            if (isViscous) {
                mousePos.current.x += (targetPos.current.x - mousePos.current.x) / viscous;
                mousePos.current.y += (targetPos.current.y - mousePos.current.y) / viscous;
            } else {
                mousePos.current = { ...targetPos.current };
            }

            // Clear canvas with transparency
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.current.forEach((particle) => {
                // Calculate distance from cursor
                const dx = mousePos.current.x - particle.x;
                const dy = mousePos.current.y - particle.y;
                const dist = Math.sqrt(dx * dx + dy * dy) || 1;
                const force = Math.min(mouseForce / dist, 2);

                // Apply force towards mouse
                particle.vx += (dx / dist) * force * 0.5;
                particle.vy += (dy / dist) * force * 0.5;

                // Apply friction
                particle.vx *= 0.92;
                particle.vy *= 0.92;

                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;

                // Bounce off edges or wrap
                if (isBounce) {
                    if (particle.x < 0 || particle.x > canvas.width) {
                        particle.vx *= -0.8;
                        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
                    }
                    if (particle.y < 0 || particle.y > canvas.height) {
                        particle.vy *= -0.8;
                        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
                    }
                } else {
                    // Wrap around
                    if (particle.x < -particle.size) particle.x = canvas.width + particle.size;
                    if (particle.x > canvas.width + particle.size) particle.x = -particle.size;
                    if (particle.y < -particle.size) particle.y = canvas.height + particle.size;
                    if (particle.y > canvas.height + particle.size) particle.y = -particle.size;
                }

                // Draw particle with radial gradient
                const gradient = ctx.createRadialGradient(
                    particle.x,
                    particle.y,
                    0,
                    particle.x,
                    particle.y,
                    particle.size
                );

                const { r, g, b } = particle.color;
                gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0.8)`);
                gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, 0.5)`);
                gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, 0.2)`);
                gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Apply blur filter
            ctx.filter = 'blur(60px)';
            const tempCanvas = document.createElement('canvas');
            tempCanvas.width = canvas.width;
            tempCanvas.height = canvas.height;
            const tempCtx = tempCanvas.getContext('2d');
            if (tempCtx) {
                tempCtx.drawImage(canvas, 0, 0);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(tempCanvas, 0, 0);
            }
            ctx.filter = 'none';

            animationFrameId.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', updateSize);
            canvas.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, [mouseForce, cursorSize, isViscous, viscous, colors, autoDemo, autoSpeed, autoIntensity, isBounce, resolution]);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'hidden',
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                }}
            />
        </div>
    );
};

export default LiquidEther;
