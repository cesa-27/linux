import { ArrowLeft, Play, Pause, RotateCw, Terminal as TerminalIcon } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

interface SimulatorsProps {
  onBack: () => void;
}

export function Simulators({ onBack }: SimulatorsProps) {
  const [activeSimulator, setActiveSimulator] = useState<number | null>(null);
  const [processState, setProcessState] = useState<'ready' | 'running' | 'waiting'>('ready');
  const [currentDir, setCurrentDir] = useState('/home/kali');
  const [terminalOutput, setTerminalOutput] = useState<string[]>(['Kali Linux Terminal Simulator v1.0', 'Type "help" for available commands']);

  const simulators = [
    {
      title: 'Simulador de Procesos (CFS Scheduler)',
      description: 'Visualiza cómo el planificador Completely Fair Scheduler gestiona la ejecución de procesos en el kernel de Linux.',
      features: [
        'Ver cola de procesos en tiempo real',
        'Transiciones de estado: Ready → Running → Waiting',
        'Visualización de vruntime (tiempo virtual)',
        'Prioridades y quantum de tiempo de CPU'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Explorador de Archivos Interactivo',
      description: 'Navega por el sistema de archivos de Linux y comprende la jerarquía FHS (Filesystem Hierarchy Standard).',
      features: [
        'Estructura de directorios: /bin, /etc, /home, /var',
        'Permisos Unix (rwxr-xr-x)',
        'Edición de permisos con chmod',
        'Visualización de inodos y enlaces simbólicos'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Terminal Virtual',
      description: 'Practica comandos de Linux en un entorno simulado seguro sin riesgos para el sistema.',
      features: [
        'Comandos básicos: ls, cd, pwd, cat, echo',
        'Gestión de procesos: ps, kill, top',
        'Herramientas de red: ping, netstat, ifconfig',
        'Historial de comandos y autocompletado'
      ],
      color: 'from-pink-500 to-cyan-500'
    }
  ];

  const processes = [
    { pid: 1234, name: 'firefox', state: processState, vruntime: 145230, priority: 0 },
    { pid: 5678, name: 'wireshark', state: 'ready', vruntime: 142100, priority: -5 },
    { pid: 9012, name: 'metasploit', state: 'waiting', vruntime: 148900, priority: 0 },
    { pid: 3456, name: 'nmap', state: 'ready', vruntime: 143500, priority: 10 }
  ];

  const fileSystem = [
    { name: 'bin', type: 'dir', permissions: 'drwxr-xr-x', size: '4096' },
    { name: 'etc', type: 'dir', permissions: 'drwxr-xr-x', size: '4096' },
    { name: 'home', type: 'dir', permissions: 'drwxr-xr-x', size: '4096' },
    { name: 'usr', type: 'dir', permissions: 'drwxr-xr-x', size: '4096' },
    { name: 'var', type: 'dir', permissions: 'drwxr-xr-x', size: '4096' },
    { name: 'tmp', type: 'dir', permissions: 'drwxrwxrwt', size: '4096' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <motion.button
            onClick={onBack}
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5 text-cyan-400" />
          </motion.button>
          <div>
            <h1 className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Simuladores Interactivos
            </h1>
            <p className="text-[#E0E0E0]/60 text-sm">Experimenta conceptos de SO en tiempo real</p>
          </div>
        </div>

        {/* Simulators */}
        <div className="space-y-6">
          {simulators.map((simulator, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-r from-[#1a2a35] to-[#243644] rounded-xl border border-cyan-500/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-[#E0E0E0] mb-2">{simulator.title}</h3>
                    <p className="text-[#E0E0E0]/60 text-sm mb-4">{simulator.description}</p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                      {simulator.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                          <span className="text-[#E0E0E0]/70 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Simulator Interface */}
                {index === 0 && (
                  <div className="bg-black/40 border border-cyan-500/20 rounded-lg p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <h4 className="text-cyan-400 text-sm">Process Queue - CFS Scheduler</h4>
                      <div className="flex gap-2">
                        <motion.button 
                          onClick={() => setProcessState(processState === 'running' ? 'ready' : 'running')}
                          className="px-3 py-1 rounded bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {processState === 'running' ? 'Pause' : 'Run'}
                        </motion.button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      {processes.map((proc) => (
                        <div 
                          key={proc.pid}
                          className={`p-3 rounded-lg border transition-all ${
                            proc.state === 'running' 
                              ? 'bg-cyan-500/10 border-cyan-500/40' 
                              : proc.state === 'waiting'
                              ? 'bg-yellow-500/10 border-yellow-500/40'
                              : 'bg-gray-500/10 border-gray-500/40'
                          }`}
                        >
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-4">
                              <span className="text-[#E0E0E0] font-mono">PID: {proc.pid}</span>
                              <span className="text-[#E0E0E0]/80">{proc.name}</span>
                              <span className={`px-2 py-0.5 rounded text-xs ${
                                proc.state === 'running' 
                                  ? 'bg-cyan-500/20 text-cyan-400'
                                  : proc.state === 'waiting'
                                  ? 'bg-yellow-500/20 text-yellow-400'
                                  : 'bg-gray-500/20 text-gray-400'
                              }`}>
                                {proc.state.toUpperCase()}
                              </span>
                            </div>
                            <div className="flex items-center gap-4 text-[#E0E0E0]/60">
                              <span>vruntime: {proc.vruntime}</span>
                              <span>nice: {proc.priority}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {index === 1 && (
                  <div className="bg-black/40 border border-purple-500/20 rounded-lg p-4">
                    <div className="mb-4">
                      <h4 className="text-purple-400 text-sm mb-2">File System Navigator</h4>
                      <div className="text-[#E0E0E0]/60 text-sm font-mono mb-3">
                        Current: <span className="text-cyan-400">{currentDir}</span>
                      </div>
                    </div>
                    <div className="space-y-1 font-mono text-sm">
                      {fileSystem.map((item, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center gap-4 p-2 hover:bg-purple-500/10 rounded transition-colors"
                        >
                          <span className="text-purple-400">{item.permissions}</span>
                          <span className="text-[#E0E0E0]/60">{item.size}</span>
                          <span className="text-cyan-400">{item.name}/</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {index === 2 && (
                  <div className="bg-black/40 border border-pink-500/20 rounded-lg p-4">
                    <div className="mb-3">
                      <h4 className="text-pink-400 text-sm mb-2">Kali Linux Terminal</h4>
                    </div>
                    <div className="space-y-1 font-mono text-sm h-48 overflow-y-auto">
                      {terminalOutput.map((line, idx) => (
                        <div key={idx} className="text-[#E0E0E0]/80">{line}</div>
                      ))}
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-cyan-400">kali@linux:~$</span>
                        <span className="text-[#E0E0E0] border-r-2 border-cyan-400 animate-pulse pr-1">_</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-pink-500/20">
                      <p className="text-[#E0E0E0]/50 text-xs">
                        Available commands: ls, pwd, ps, ifconfig, netstat, help
                      </p>
                    </div>
                  </div>
                )}

                {/* Controls */}
                <div className="flex items-center justify-center gap-3 pt-2">
                  <motion.button 
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-sm flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play className="w-4 h-4" />
                    Iniciar
                  </motion.button>
                  <motion.button 
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 text-sm flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Pause className="w-4 h-4" />
                    Pausar
                  </motion.button>
                  <motion.button 
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500/20 to-cyan-500/20 border border-pink-500/30 text-pink-400 text-sm flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RotateCw className="w-4 h-4" />
                    Reiniciar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
