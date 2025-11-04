import { ArrowLeft, Terminal, Network, Lock, Search, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PracticalLabsProps {
  onBack: () => void;
}

export function PracticalLabs({ onBack }: PracticalLabsProps) {
  const [selectedLab, setSelectedLab] = useState<number | null>(null);

  const didYouKnow = [
    "Kali Linux incluye más de 600 herramientas de pentesting preinstaladas y preconfiguradas.",
    "El primer kernel de Linux (0.01) solo tenía 10,239 líneas de código. Hoy tiene más de 27 millones.",
    "El CFS (Completely Fair Scheduler) fue introducido en Linux 2.6.23 en 2007 por Ingo Molnár.",
    "Kali Linux fue lanzado en marzo de 2013 como el sucesor de BackTrack Linux.",
    "El sistema de archivos ext4 puede manejar archivos de hasta 16 terabytes y volúmenes de hasta 1 exabyte.",
    "Linux es el sistema operativo más usado en supercomputadoras: el 100% del Top500 usa Linux.",
  ];

  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const labs = [
    {
      title: 'Laboratorio 1: Reconocimiento de Red',
      difficulty: 'Básico',
      duration: '30 min',
      color: 'from-cyan-500 to-blue-500',
      objective: 'Aprender a identificar hosts activos y servicios en una red local utilizando herramientas de escaneo.',
      tools: ['nmap', 'netdiscover', 'arp-scan'],
      steps: [
        {
          step: 'Paso 1: Identificar rango de red',
          command: 'ifconfig',
          description: 'Identifica tu dirección IP y máscara de red para determinar el rango CIDR de tu red local.'
        },
        {
          step: 'Paso 2: Descubrir hosts activos',
          command: 'nmap -sn 192.168.1.0/24',
          description: 'Realiza un ping scan (-sn) para descubrir qué hosts están activos en la red sin escanear puertos.'
        },
        {
          step: 'Paso 3: Escaneo de puertos',
          command: 'nmap -sV -p- 192.168.1.10',
          description: 'Escanea todos los puertos (-p-) y detecta versiones de servicios (-sV) en un host específico.'
        },
        {
          step: 'Paso 4: Análisis de resultados',
          command: 'nmap -A -T4 192.168.1.10',
          description: 'Escaneo agresivo (-A) que incluye detección de OS, scripts, traceroute y versiones con timing rápido (-T4).'
        }
      ],
      theory: 'El reconocimiento es la primera fase del pentesting. Consiste en recopilar información sobre el objetivo sin interacción directa (pasivo) o mediante escaneos (activo). Nmap es la herramienta estándar que usa técnicas como TCP SYN scan, TCP connect scan, y UDP scan.'
    },
    {
      title: 'Laboratorio 2: Análisis de Tráfico de Red',
      difficulty: 'Intermedio',
      duration: '45 min',
      color: 'from-purple-500 to-pink-500',
      objective: 'Capturar y analizar paquetes de red para identificar protocolos, credenciales en texto plano y anomalías.',
      tools: ['wireshark', 'tcpdump', 'tshark'],
      steps: [
        {
          step: 'Paso 1: Iniciar captura',
          command: 'tcpdump -i eth0 -w captura.pcap',
          description: 'Captura todo el tráfico en la interfaz eth0 y lo guarda en un archivo pcap para análisis posterior.'
        },
        {
          step: 'Paso 2: Filtrar tráfico HTTP',
          command: 'tshark -r captura.pcap -Y "http"',
          description: 'Aplica un filtro de visualización para mostrar solo paquetes HTTP del archivo de captura.'
        },
        {
          step: 'Paso 3: Extraer credenciales',
          command: 'tshark -r captura.pcap -Y "http.request.method == POST" -T fields -e http.request.uri -e http.file_data',
          description: 'Busca peticiones POST que pueden contener credenciales y extrae la URI y los datos enviados.'
        },
        {
          step: 'Paso 4: Análisis en Wireshark',
          command: 'wireshark captura.pcap',
          description: 'Abre el archivo en Wireshark para análisis visual detallado de protocolos capa por capa.'
        }
      ],
      theory: 'El análisis de tráfico permite comprender las comunicaciones de red. Wireshark decodifica más de 3000 protocolos. Los protocolos no cifrados (HTTP, FTP, Telnet) transmiten credenciales en texto plano, visible para cualquiera que capture el tráfico.'
    },
    {
      title: 'Laboratorio 3: Gestión de Procesos y Recursos',
      difficulty: 'Básico',
      duration: '25 min',
      color: 'from-pink-500 to-cyan-500',
      objective: 'Comprender cómo el sistema operativo gestiona procesos, prioridades y recursos del sistema.',
      tools: ['ps', 'top', 'htop', 'systemctl'],
      steps: [
        {
          step: 'Paso 1: Listar procesos',
          command: 'ps aux --forest',
          description: 'Muestra todos los procesos en formato árbol, revelando la jerarquía de procesos padre-hijo.'
        },
        {
          step: 'Paso 2: Monitoreo en tiempo real',
          command: 'htop',
          description: 'Interfaz interactiva que muestra uso de CPU, RAM, procesos ordenados por consumo de recursos.'
        },
        {
          step: 'Paso 3: Ajustar prioridad',
          command: 'renice -n -5 -p <PID>',
          description: 'Aumenta la prioridad de un proceso (nice más bajo = mayor prioridad). Requiere permisos root.'
        },
        {
          step: 'Paso 4: Gestión de servicios',
          command: 'systemctl status ssh',
          description: 'Verifica el estado del servicio SSH: activo, inactivo, tiempo de ejecución, logs recientes.'
        }
      ],
      theory: 'El planificador de procesos CFS asigna tiempo de CPU basándose en "vruntime" (tiempo virtual). Procesos con menor vruntime se ejecutan primero. Nice values van de -20 (alta prioridad) a 19 (baja prioridad). systemd es el sistema de init moderno que gestiona servicios y el boot.'
    },
    {
      title: 'Laboratorio 4: Permisos y Sistema de Archivos',
      difficulty: 'Básico',
      duration: '35 min',
      color: 'from-blue-500 to-purple-500',
      objective: 'Dominar el sistema de permisos Unix/Linux y comprender la estructura jerárquica del sistema de archivos.',
      tools: ['ls', 'chmod', 'chown', 'find'],
      steps: [
        {
          step: 'Paso 1: Inspeccionar permisos',
          command: 'ls -la /etc/',
          description: 'Lista detallada mostrando permisos (rwx), propietario, grupo, tamaño y fecha de modificación.'
        },
        {
          step: 'Paso 2: Modificar permisos',
          command: 'chmod 754 archivo.txt',
          description: 'Establece permisos: propietario (rwx=7), grupo (r-x=5), otros (r--=4). Notación octal.'
        },
        {
          step: 'Paso 3: Cambiar propietario',
          command: 'chown usuario:grupo archivo.txt',
          description: 'Cambia el propietario y grupo del archivo. Requiere permisos de superusuario (root).'
        },
        {
          step: 'Paso 4: Buscar archivos SUID',
          command: 'find / -perm -4000 -type f 2>/dev/null',
          description: 'Encuentra archivos con bit SUID (se ejecutan con permisos del propietario). Importante para auditoría.'
        }
      ],
      theory: 'Unix usa permisos basados en propietario (user), grupo (group) y otros (others). Cada uno tiene read (4), write (2), execute (1). Bits especiales: SUID (4000), SGID (2000), Sticky (1000). El FHS define la estructura estándar: /bin (binarios), /etc (config), /home (usuarios), /var (variables).'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] p-6 pb-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
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
              Laboratorios Prácticos
            </h1>
            <p className="text-[#E0E0E0]/60 text-sm">Ejercicios guiados paso a paso</p>
          </div>
        </div>

        {/* Sabías que... */}
        <motion.div
          className="mb-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-xl p-5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-yellow-400" />
            </div>
            <div className="flex-1">
              <h4 className="text-yellow-400 mb-2">💡 Sabías que...</h4>
              <p className="text-[#E0E0E0]/80 text-sm leading-relaxed">
                {didYouKnow[currentFactIndex]}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <motion.button
                  onClick={() => setCurrentFactIndex((currentFactIndex + 1) % didYouKnow.length)}
                  className="text-xs text-yellow-400 hover:text-yellow-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  → Siguiente dato curioso
                </motion.button>
                <span className="text-[#E0E0E0]/40 text-xs">
                  ({currentFactIndex + 1}/{didYouKnow.length})
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Labs */}
        <div className="space-y-5">
          {labs.map((lab, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-r from-[#1a2a35] to-[#243644] rounded-xl border border-cyan-500/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedLab(selectedLab === index ? null : index)}
                className="w-full p-5 text-left hover:bg-cyan-500/5 transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${lab.color} opacity-20 flex items-center justify-center`}>
                        <Terminal className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-[#E0E0E0]">{lab.title}</h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400">
                            {lab.difficulty}
                          </span>
                          <span className="text-xs text-[#E0E0E0]/60">⏱ {lab.duration}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#E0E0E0]/70 text-sm">{lab.objective}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: selectedLab === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-cyan-400 mt-2"
                  >
                    ▼
                  </motion.div>
                </div>
              </button>

              <AnimatePresence>
                {selectedLab === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 space-y-5">
                      {/* Tools */}
                      <div>
                        <h4 className="text-cyan-400 text-sm mb-2"> Herramientas utilizadas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {lab.tools.map((tool, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Theory */}
                      <div className="bg-black/20 border border-cyan-500/10 rounded-lg p-4">
                        <h4 className="text-cyan-400 text-sm mb-2"> Teoría:</h4>
                        <p className="text-[#E0E0E0]/70 text-sm leading-relaxed">
                          {lab.theory}
                        </p>
                      </div>

                      {/* Steps */}
                      <div>
                        <h4 className="text-cyan-400 text-sm mb-3"> Pasos a seguir:</h4>
                        <div className="space-y-3">
                          {lab.steps.map((stepData, idx) => (
                            <div 
                              key={idx}
                              className="bg-black/30 border border-cyan-500/10 rounded-lg p-4"
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-cyan-400 text-xs">{idx + 1}</span>
                                </div>
                                <div className="flex-1">
                                  <h5 className="text-[#E0E0E0] text-sm mb-2">{stepData.step}</h5>
                                  <div className="bg-black/50 border border-cyan-500/20 rounded p-2 mb-2 font-mono text-sm">
                                    <span className="text-purple-400">$</span>
                                    <span className="text-cyan-400 ml-2">{stepData.command}</span>
                                  </div>
                                  <p className="text-[#E0E0E0]/60 text-sm leading-relaxed">
                                    {stepData.description}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <motion.button
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Terminal className="w-4 h-4" />
                        Practicar en entorno real
                      </motion.button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
