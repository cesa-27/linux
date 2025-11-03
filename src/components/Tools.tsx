import { ArrowLeft, Terminal, Network, Shield } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface ToolsProps {
  onBack: () => void;
}

export function Tools({ onBack }: ToolsProps) {
  const tools = [
    {
      name: 'Nmap',
      icon: Network,
      description: 'Network Mapper - Herramienta de exploración de red y auditoría de seguridad.',
      details: 'Permite descubrir hosts y servicios en una red, creando un "mapa" de la infraestructura. Identifica puertos abiertos, servicios en ejecución y versiones de software.',
      commands: ['nmap -sV 192.168.1.1', 'nmap -A -T4 target.com', 'nmap -p- --script vuln target'],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Wireshark',
      icon: Terminal,
      description: 'Analizador de protocolos de red líder en la industria.',
      details: 'Captura y analiza el tráfico de red en tiempo real. Permite inspeccionar paquetes individuales, filtrar por protocolos (HTTP, TCP, UDP) y detectar anomalías.',
      commands: ['wireshark', 'tshark -i eth0', 'tshark -r capture.pcap -Y "http"'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Metasploit',
      icon: Shield,
      description: 'Framework de pruebas de penetración y desarrollo de exploits.',
      details: 'Plataforma completa para realizar auditorías de seguridad. Incluye exploits, payloads, encoders y auxiliares para pruebas de penetración profesionales.',
      commands: ['msfconsole', 'search apache', 'use exploit/multi/handler', 'set payload windows/meterpreter/reverse_tcp'],
      color: 'from-pink-500 to-cyan-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center hover:scale-105 transition-transform"
          >
            <ArrowLeft className="w-5 h-5 text-cyan-400" />
          </button>
          <div>
            <h1 className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Herramientas Educativas
            </h1>
            <p className="text-[#E0E0E0]/60 text-sm">Principales herramientas de Kali Linux</p>
          </div>
        </div>

        {/* Tools List */}
        <div className="space-y-6">
          {tools.map((tool, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-[#1a2a35] to-[#243644] rounded-xl border border-cyan-500/20 overflow-hidden"
            >
              <div className="p-6 space-y-4">
                {/* Tool Header */}
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} opacity-20 flex items-center justify-center flex-shrink-0`}>
                    <tool.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[#E0E0E0] mb-1">{tool.name}</h3>
                    <p className="text-cyan-400 text-sm mb-2">{tool.description}</p>
                    <p className="text-[#E0E0E0]/70 text-sm leading-relaxed">{tool.details}</p>
                  </div>
                </div>

                {/* Image Placeholder */}
                <ImagePlaceholder 
                  text={`Insertar captura de pantalla o ícono de ${tool.name}`}
                  aspect="video"
                />

                {/* Command Examples */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
                    <span className="text-[#E0E0E0]/60 text-sm">Comandos Ejemplo</span>
                    <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/30 to-transparent" />
                  </div>
                  {tool.commands.map((command, idx) => (
                    <div 
                      key={idx}
                      className="bg-black/40 border border-cyan-500/20 rounded-lg p-3 font-mono text-sm"
                    >
                      <span className="text-cyan-400">$</span>
                      <span className="text-[#E0E0E0] ml-2">{command}</span>
                    </div>
                  ))}
                </div>

                {/* Badge */}
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30">
                    <span className="text-cyan-400 text-xs">Nivel Avanzado</span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                    <span className="text-purple-400 text-xs">Incluido en Kali</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
