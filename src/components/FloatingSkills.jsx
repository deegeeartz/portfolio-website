import React, { useEffect, useRef } from 'react';

const FloatingSkills = () => {
  const canvasRef = useRef(null);

  const skills = [
    // Hard Skills
    'Cloud Architecture', 'Python', 'AWS', 'Azure', 'Docker',
    'Kubernetes', 'CI/CD', 'RAG Pipelines', 'LLM Orchestration',
    'ETL', 'Power BI', 'SQL', 'React', 'Node.js', 'REST APIs',
    'Vector Search', 'OpenSearch', 'Terraform', 'Git',
    'Data Engineering', 'Prompt Engineering', 'DevOps', 'Java',
    'Hardware Troubleshooting', 'Software Troubleshooting', 'IT Support',
    // Soft Skills
    'Leadership', 'Strategy', 'Communication', 'Problem Solving',
    'Agile', 'Vendor Management', 'Budgeting', 'ITIL v4',
    'Team Building', 'Mentorship', 'Stakeholder Management',
    'Critical Thinking', 'Innovation', 'Negotiation',
    'Project Management', 'Risk Assessment', 'Decision Making'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = skills.map((skill) => ({
        text: skill,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        fontSize: 12 + Math.random() * 6,
        opacity: 0.04 + Math.random() * 0.14,
        rotation: (Math.random() - 0.5) * 0.3
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -100) p.x = canvas.width + 100;
        if (p.x > canvas.width + 100) p.x = -100;
        if (p.y < -30) p.y = canvas.height + 30;
        if (p.y > canvas.height + 30) p.y = -30;

        // Draw
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.font = `${p.fontSize}px 'Space Grotesk', sans-serif`;
        ctx.fillStyle = getComputedStyle(document.documentElement)
          .getPropertyValue('--text-muted').trim();
        ctx.globalAlpha = p.opacity;
        ctx.fillText(p.text, 0, 0);
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createParticles();
    animate();

    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
};

export default FloatingSkills;
