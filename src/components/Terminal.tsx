import React, { useState, useRef, useEffect } from 'react';

type TerminalProps = {
  onMatrixFullscreen?: (fullscreen: boolean) => void;
};

// Mock file system structure
const fileSystem = {
  name: '/',
  type: 'dir',
  children: [
    { name: 'src', type: 'dir', children: [
      { name: 'components', type: 'dir', children: [
        { name: 'Hero.tsx', type: 'file' },
        { name: 'About.tsx', type: 'file' },
        { name: 'Projects.tsx', type: 'file' },
        // ... add more as needed
      ] },
      { name: 'index.css', type: 'file' },
      { name: 'main.tsx', type: 'file' },
    ] },
    { name: 'public', type: 'dir', children: [
      { name: 'resume', type: 'dir', children: [
        { name: 'hariomkhonde.pdf', type: 'file' },
      ] },
      { name: 'robots.txt', type: 'file' },
    ] },
    { name: 'README.md', type: 'file' },
    { name: 'package.json', type: 'file' },
  ],
};

const ASCII_ART = `
   _   _           _             _  _              _     
  | | | | ___  ___| |_ ___  _ __| || |   __ _  ___| | __
  | |_| |/ _ \/ __| __/ _ \| '__| || |_ / _\` |/ __| |/ /
  |  _  |  __/\\__ \\ || (_) | |  |__   _| (_| | (__|   < 
  |_| |_|\\___||___/\\__\\___/|_|     |_|  \\__,_|\\___|_|\\_\\
`;

const WHOAMI_BOX = `╭─────────────────────────────────────────────────────────────╮
│                        HARIOM KHONDE                       │
│                                                             │
│  🎓 B.Tech CSE Student @ PES University RR Campus          │
│  🔬 Research Intern @ CHEAL Research Center                │
│  🚀 Full Stack Developer & AI Enthusiast                   │
│                                                             │
│  📍 Bangalore, India                                       │
│  📧 hariomkhonde@gmail.com                                 │
│  📱 +91 7676126256                                         │
│                                                             │
│  🏆 ACHIEVEMENTS:                                          │
│     • Top 10 @ CODE RED'25 (500+ teams)                   │
│     • Top 10 @ Terrathon 4.0 (160+ teams)                 │
│     • Hackathon Veteran with multiple wins                │
│                                                             │
│  💡 CURRENT FOCUS:                                         │
│     • AI-powered healthcare solutions                      │
│     • Computer vision & image processing                   │
│     • Sustainable technology development                   │
│                                                             │
│  🛠️  TECH STACK:                                           │
│     Frontend: React.js, Next.js, React Native            │
│     Backend: Node.js, Express.js, Django                  │
│     AI/ML: TensorFlow, Python, Computer Vision           │
│     Database: MongoDB, Mongoose                           │
│                                                             │
│  ⚡ FUN FACT: Building solutions that bridge technology     │
│             and social impact - from brain tumor detection │
│             to helping elderly with medication management! │
╰─────────────────────────────────────────────────────────────╯
\nType 'projects' to see my work, 'skills' for detailed tech stack,\nor 'cat resume.txt' for my complete resume!\n`;

const RESUME_TEXT = `
───────────────────────────── RESUME ─────────────────────────────
Name: Hariom Khonde
Role: B.Tech CSE Student | Full Stack Developer | AI Enthusiast

EDUCATION
  • B.Tech in Computer Science & Engineering
    PES University, RR Campus, Bangalore

EXPERIENCE
  • Research Intern @ CHEAL Research Center
  • Multiple Hackathon Wins (Top 10 @ CODE RED'25, Terrathon 4.0)

SKILLS
  • Frontend: React.js, Next.js, React Native
  • Backend: Node.js, Express.js, Django
  • AI/ML: TensorFlow, Python, Computer Vision
  • Database: MongoDB, Mongoose

CONTACT
  • Email: hariomkhonde@gmail.com
  • Phone: +91 7676126256
  • Location: Bangalore, India

ACHIEVEMENTS
  • Top 10 @ CODE RED'25 (500+ teams)
  • Top 10 @ Terrathon 4.0 (160+ teams)
  • Hackathon Veteran with multiple wins

CURRENT FOCUS
  • AI-powered healthcare solutions
  • Computer vision & image processing
  • Sustainable technology development
──────────────────────────────────────────────────────────────────
For full details, connect with me or download the PDF resume from the site!
`;

const PROJECTS_TEXT = `
──────────────────────────── PROJECTS ────────────────────────────
1. Bit Scanner/Eco-Scan
   • A real time scanner app for product info gathering
   • Tech: ReactNative, Gemini API, Tailwind
   • [GitHub] https://github.com/hariomkhonde108/Terrathon

2. Tumer Detect
   • A full-featured website for the tumer detection using React, Node.js, and ML models
   • Tech: React, ML, Python, Typescript
   • [GitHub] https://github.com/hariomkhonde108/Tumer-Detect

3. Portfolio Website
   • A modern portfolio website which displays my all work
   • Tech: TypeScript, React, Tailwind CSS
   • [GitHub] https://github.com/hariomkhonde108/Portfolio-website
   • [Live] https://hariomkhonde.vercel.app/#
──────────────────────────────────────────────────────────────────
Type 'cat resume.txt' for my resume or 'whoami' for my bio!
`;

const MATRIX_CHARS = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const SNAKE_SIZE = 16;
const SNAKE_SPEED = 180; // ms per move (slower)
const SNAKE_BOARD_W = 20;
const SNAKE_BOARD_H = 12;

function findDir(pathArr: string[], node: any): any {
  if (pathArr.length === 0) return node;
  const [next, ...rest] = pathArr;
  const found = node.children?.find((child: any) => child.name === next && child.type === 'dir');
  if (!found) return null;
  return findDir(rest, found);
}

const Terminal = ({ onMatrixFullscreen }: TerminalProps) => {
  const [history, setHistory] = useState<string[]>([
    'Welcome to the Portfolio Terminal! Type "help" to see available commands.',
  ]);
  const [input, setInput] = useState('');
  const [cwd, setCwd] = useState<string[]>([]); // array of dir names
  const inputRef = useRef<HTMLInputElement>(null);
  const [fadeWhoami, setFadeWhoami] = useState(false);
  const [fadeResume, setFadeResume] = useState(false);
  const [fadeProjects, setFadeProjects] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showSnake, setShowSnake] = useState(false);
  const matrixRef = useRef<HTMLCanvasElement>(null);
  const snakeRef = useRef<HTMLCanvasElement>(null);
  const [snakeScore, setSnakeScore] = useState(0);
  const outputRef = useRef<HTMLDivElement>(null);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdHistoryIdx, setCmdHistoryIdx] = useState<number | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [history]);

  useEffect(() => {
    if (showMatrix && matrixRef.current) {
      if (onMatrixFullscreen) onMatrixFullscreen(true);
      const canvas = matrixRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      let animationFrameId: number;
      const width = canvas.width = canvas.offsetWidth;
      const height = canvas.height = canvas.offsetHeight;
      const fontSize = 18;
      const columns = Math.floor(width / fontSize);
      const drops = Array(columns).fill(1);
      if (ctx) ctx.font = `${fontSize}px monospace`;
      if (ctx) ctx.shadowColor = '#00ff41';
      if (ctx) ctx.shadowBlur = 8;
      function drawMatrix() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(0,0,0,0.15)';
        ctx.fillRect(0, 0, width, height);
        ctx.fillStyle = '#00ff41';
        for (let i = 0; i < drops.length; i++) {
          const text = MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          drops[i]++;
        }
        animationFrameId = requestAnimationFrame(drawMatrix);
      }
      drawMatrix();
      return () => {
        cancelAnimationFrame(animationFrameId);
        if (onMatrixFullscreen) onMatrixFullscreen(false);
      };
    }
  }, [showMatrix]);

  // SNAKE GAME EFFECT
  useEffect(() => {
    if (!showSnake || !snakeRef.current) return;
    const canvas = snakeRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let direction: [number, number] = [1, 0];
    let snake: [number, number][] = [[5, 5]];
    let food: [number, number] = [
      Math.floor(Math.random() * SNAKE_BOARD_W),
      Math.floor(Math.random() * SNAKE_BOARD_H),
    ];
    let score = 0;
    let running = true;
    let moveTimer: any;

    function draw() {
      if (!ctx) return;
      ctx.fillStyle = '#111';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // Draw food
      ctx.fillStyle = '#facc15';
      ctx.fillRect(food[0] * SNAKE_SIZE, food[1] * SNAKE_SIZE, SNAKE_SIZE, SNAKE_SIZE);
      // Draw snake
      ctx.fillStyle = '#22d3ee';
      for (const [x, y] of snake) {
        ctx.fillRect(x * SNAKE_SIZE, y * SNAKE_SIZE, SNAKE_SIZE, SNAKE_SIZE);
      }
      // Score
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 16px monospace';
      ctx.fillText(`Score: ${score}`, 8, 20);
      ctx.font = '12px monospace';
      ctx.fillText('Press Esc to exit', 8, canvas.height - 8);
    }

    function move() {
      if (!running) return;
      const [dx, dy] = direction;
      const head = [snake[0][0] + dx, snake[0][1] + dy] as [number, number];
      // Check wall
      if (
        head[0] < 0 || head[0] >= SNAKE_BOARD_W ||
        head[1] < 0 || head[1] >= SNAKE_BOARD_H ||
        snake.some(([x, y]) => x === head[0] && y === head[1])
      ) {
        running = false;
        if (ctx) draw();
        if (ctx) ctx.fillStyle = '#ef4444';
        if (ctx) ctx.font = 'bold 20px monospace';
        if (ctx) ctx.fillText('Game Over!', 80, 100);
        return;
      }
      snake.unshift(head);
      // Eat food
      if (head[0] === food[0] && head[1] === food[1]) {
        score++;
        setSnakeScore(score);
        // Place new food
        let newFood: [number, number];
        do {
          newFood = [
            Math.floor(Math.random() * SNAKE_BOARD_W),
            Math.floor(Math.random() * SNAKE_BOARD_H),
          ];
        } while (snake.some(([x, y]) => x === newFood[0] && y === newFood[1]));
        food = newFood;
      } else {
        snake.pop();
      }
      if (ctx) draw();
      moveTimer = setTimeout(move, SNAKE_SPEED);
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        running = false;
        setShowSnake(false);
        return;
      }
      if (!running) return;
      if (e.key === 'ArrowUp' && direction[1] !== 1) direction = [0, -1];
      else if (e.key === 'ArrowDown' && direction[1] !== -1) direction = [0, 1];
      else if (e.key === 'ArrowLeft' && direction[0] !== 1) direction = [-1, 0];
      else if (e.key === 'ArrowRight' && direction[0] !== -1) direction = [1, 0];
    }

    window.addEventListener('keydown', handleKey);
    draw();
    moveTimer = setTimeout(move, SNAKE_SPEED);
    return () => {
      window.removeEventListener('keydown', handleKey);
      clearTimeout(moveTimer);
    };
  }, [showSnake]);

  // Auto-scroll to bottom on new output
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history, showMatrix, showSnake]);

  const getPrompt = () =>
    `hariom@portfolio:${cwd.length ? '/' + cwd.join('/') : '~'}$`;

  const handleCommand = (cmd: string) => {
    const args = cmd.trim().split(/\s+/);
    const command = args[0];
    let output = '';
    let newCwd = [...cwd];
    setFadeWhoami(false); // reset fade for each command
    setFadeResume(false);
    setFadeProjects(false);
    if (command !== 'matrix') setShowMatrix(false);
    if (command !== 'snake') setShowSnake(false);
    switch (command) {
      case 'whoami':
        output = WHOAMI_BOX;
        setTimeout(() => setFadeWhoami(true), 10); // trigger fade-in
        break;
      case 'cat':
        if (args[1] === 'resume.txt') {
          output = RESUME_TEXT;
          setTimeout(() => setFadeResume(true), 10);
        } else {
          output = `cat: ${args[1] || ''}: No such file`;
        }
        break;
      case 'projects':
        output = PROJECTS_TEXT;
        setTimeout(() => setFadeProjects(true), 10);
        break;
      case 'help':
        output =
          'Available commands: whoami, help, ls, cd <dir>, clear, ascii, projects, skills, cat resume.txt, matrix, snake';
        break;
      case 'ls': {
        const dir = findDir(cwd, fileSystem);
        if (dir && dir.children) {
          output = dir.children.map((child: any) => child.name + (child.type === 'dir' ? '/' : '')).join('  ');
        } else {
          output = 'Directory not found.';
        }
        break;
      }
      case 'cd': {
        if (!args[1] || args[1] === '~') {
          newCwd = [];
        } else if (args[1] === '..') {
          newCwd.pop();
        } else {
          const dir = findDir([...cwd, args[1]], fileSystem);
          if (dir) {
            newCwd.push(args[1]);
          } else {
            output = `No such directory: ${args[1]}`;
          }
        }
        setCwd(newCwd);
        break;
      }
      case 'clear':
        setHistory([
          `${getPrompt()} help`,
          'Available commands: whoami, help, ls, cd <dir>, clear, ascii, projects, skills, cat resume.txt, matrix, snake'
        ]);
        return;
      case 'ascii':
        output = ASCII_ART;
        break;
      case '':
        output = '';
        break;
      case 'matrix':
        setShowMatrix(true);
        setTimeout(() => setShowMatrix(false), 3000);
        break;
      case 'snake':
        setSnakeScore(0);
        setShowSnake(true);
        break;
      default:
        output = `Command not found: ${command}`;
    }
    if (command !== 'matrix' && command !== 'snake') {
      setHistory((h: string[]) => [
        ...h,
        `${getPrompt()} ${cmd}`,
        ...(output ? [output] : []),
      ]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCommand(input);
    if (input.trim()) {
      setCmdHistory((h) => [...h, input]);
    }
    setCmdHistoryIdx(null);
    setInput('');
  };

  return (
    <div className="font-mono bg-gray-900 text-green-400 rounded-lg p-4 h-96 overflow-y-auto flex flex-col relative">
      {showMatrix ? (
        <canvas
          ref={matrixRef}
          className="absolute inset-0 w-full h-full z-20 rounded-lg"
          style={{ background: 'black', width: '100%', height: '100%' }}
        />
      ) : showSnake ? (
        <canvas
          ref={snakeRef}
          width={SNAKE_BOARD_W * SNAKE_SIZE}
          height={SNAKE_BOARD_H * SNAKE_SIZE}
          className="absolute inset-0 w-full h-full z-20 rounded-lg"
          style={{ background: '#111', width: '100%', height: '100%' }}
        />
      ) : (
        <>
          <div ref={outputRef} className="flex-1 overflow-y-auto mb-2 whitespace-pre-wrap text-sm">
            {history.map((line, i) => {
              // Fade-in for whoami box
              if (line === WHOAMI_BOX) {
                return (
                  <div
                    key={i}
                    className={`transition-opacity duration-1000 ${fadeWhoami ? 'opacity-100' : 'opacity-0'}`}
                    style={{ color: '#a3e635' }}
                  >
                    {line}
                  </div>
                );
              }
              // Fade-in for resume
              if (line === RESUME_TEXT) {
                return (
                  <div
                    key={i}
                    className={`transition-opacity duration-1000 ${fadeResume ? 'opacity-100' : 'opacity-0'}`}
                    style={{ color: '#38bdf8' }}
                  >
                    {line}
                  </div>
                );
              }
              // Fade-in for projects
              if (line === PROJECTS_TEXT) {
                return (
                  <div
                    key={i}
                    className={`transition-opacity duration-1000 ${fadeProjects ? 'opacity-100' : 'opacity-0'}`}
                    style={{ color: '#facc15' }}
                  >
                    {line}
                  </div>
                );
              }
              return <div key={i} className="text-green-300">{line}</div>;
            })}
          </div>
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="mr-2">{getPrompt()}</span>
            <input
              ref={inputRef}
              className="flex-1 bg-transparent border-none outline-none text-green-100 placeholder-green-500"
              value={input}
              onChange={e => setInput(e.target.value)}
              autoFocus
              spellCheck={false}
              disabled={showMatrix || showSnake}
              onKeyDown={e => {
                if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  setCmdHistoryIdx(idx => {
                    const newIdx = idx === null ? cmdHistory.length - 1 : Math.max(0, idx - 1);
                    if (cmdHistory.length && newIdx >= 0) {
                      setInput(cmdHistory[newIdx]);
                      return newIdx;
                    }
                    return idx;
                  });
                } else if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  setCmdHistoryIdx(idx => {
                    if (idx === null) return null;
                    const newIdx = Math.min(cmdHistory.length, idx + 1);
                    if (newIdx < cmdHistory.length) {
                      setInput(cmdHistory[newIdx]);
                      return newIdx;
                    } else {
                      setInput('');
                      return null;
                    }
                  });
                }
              }}
            />
          </form>
        </>
      )}
    </div>
  );
};

export default Terminal; 