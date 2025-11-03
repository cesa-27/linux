import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface OSComparisonProps {
  onBack: () => void;
}

export function OSComparison({ onBack }: OSComparisonProps) {
  const comparisonData = [
    {
      category: 'Propósito Principal',
      kali: 'Seguridad informática y pentesting ético',
      ubuntu: 'Uso general: escritorio y servidores',
      windows: 'Escritorio empresarial y gaming'
    },
    {
      category: 'Núcleo',
      kali: 'Linux Kernel 5.x/6.x (monolítico modular)',
      ubuntu: 'Linux Kernel 5.x/6.x (monolítico modular)',
      windows: 'Windows NT Kernel (híbrido)'
    },
    {
      category: 'Licencia',
      kali: 'GPL v3 (Open Source)',
      ubuntu: 'GPL v3 (Open Source)',
      windows: 'Propietaria (Microsoft EULA)'
    },
    {
      category: 'Base de Distribución',
      kali: 'Debian Testing',
      ubuntu: 'Debian Stable',
      windows: 'Código propietario'
    },
    {
      category: 'Sistema de Archivos',
      kali: 'ext4, btrfs, XFS, NTFS (lectura)',
      ubuntu: 'ext4 (predeterminado), btrfs, ZFS',
      windows: 'NTFS, FAT32, exFAT, ReFS'
    },
    {
      category: 'Gestión de Paquetes',
      kali: 'APT (Advanced Package Tool)',
      ubuntu: 'APT, Snap',
      windows: 'Windows Update, MSI, winget'
    },
    {
      category: 'Shell Predeterminado',
      kali: 'Bash (también Zsh disponible)',
      ubuntu: 'Bash',
      windows: 'PowerShell 7.x, CMD (legado)'
    },
    {
      category: 'Entorno Gráfico',
      kali: 'Xfce (predeterminado), KDE, GNOME',
      ubuntu: 'GNOME',
      windows: 'Windows Shell (Explorer)'
    },
    {
      category: 'Seguridad',
      kali: 'AppArmor, herramientas de auditoría, modo forense',
      ubuntu: 'AppArmor, UFW firewall',
      windows: 'Windows Defender, BitLocker, TPM'
    },
    {
      category: 'Control de Acceso',
      kali: 'DAC (permisos Unix), AppArmor (MAC)',
      ubuntu: 'DAC (permisos Unix), AppArmor (MAC)',
      windows: 'ACL (Access Control Lists), UAC'
    },
    {
      category: 'Herramientas Incluidas',
      kali: '600+ herramientas de pentesting preinstaladas',
      ubuntu: 'Herramientas de productividad estándar',
      windows: 'Suite Office, herramientas empresariales'
    },
    {
      category: 'Usuarios Objetivo',
      kali: 'Profesionales de ciberseguridad, pentesters',
      ubuntu: 'Usuarios generales, desarrolladores',
      windows: 'Empresas, usuarios domésticos, gamers'
    },
    {
      category: 'Modelo de Actualización',
      kali: 'Rolling release (actualizaciones continuas)',
      ubuntu: 'LTS cada 2 años + versiones intermedias',
      windows: 'Feature updates semestrales'
    },
    {
      category: 'Compatibilidad Hardware',
      kali: 'Amplio soporte de drivers, optimizado para Wi-Fi',
      ubuntu: 'Excelente soporte de hardware moderno',
      windows: 'Mayor compatibilidad con hardware propietario'
    },
    {
      category: 'Networking',
      kali: 'Soporte nativo modo monitor, packet injection',
      ubuntu: 'Networking estándar Linux',
      windows: 'Stack TCP/IP completo, Hyper-V'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] p-6">
      <div className="max-w-6xl mx-auto">
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
              Comparativa de Sistemas Operativos
            </h1>
            <p className="text-[#E0E0E0]/60 text-sm">Análisis técnico comparativo detallado</p>
          </div>
        </div>

        {/* Comparison Table */}
        <motion.div 
          className="bg-gradient-to-r from-[#1a2a35] to-[#243644] rounded-xl border border-cyan-500/20 overflow-hidden mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-cyan-500/20">
            <div className="text-[#E0E0E0] text-sm">Característica</div>
            <div className="text-cyan-400">Kali Linux</div>
            <div className="text-blue-400">Ubuntu</div>
            <div className="text-purple-400">Windows</div>
          </div>

          {/* Table Rows */}
          {comparisonData.map((row, index) => (
            <motion.div 
              key={index}
              className={`grid grid-cols-4 gap-4 p-4 border-b border-cyan-500/10 last:border-b-0 hover:bg-cyan-500/5 transition-colors ${
                index % 2 === 0 ? 'bg-black/10' : ''
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.02 }}
            >
              <div className="text-[#E0E0E0] text-sm">{row.category}</div>
              <div className="text-[#E0E0E0]/80 text-sm">{row.kali}</div>
              <div className="text-[#E0E0E0]/80 text-sm">{row.ubuntu}</div>
              <div className="text-[#E0E0E0]/80 text-sm">{row.windows}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div 
            className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-cyan-400 mb-3">Kali Linux</h4>
            <p className="text-[#E0E0E0]/70 text-sm leading-relaxed mb-3">
              Distribución especializada en seguridad informática y pruebas de penetración. Incluye más de 600 herramientas de auditoría preinstaladas y configuradas.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5" />
                <span className="text-[#E0E0E0]/60 text-xs">Rolling release con actualizaciones continuas</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5" />
                <span className="text-[#E0E0E0]/60 text-xs">Optimizado para Wi-Fi pentesting</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5" />
                <span className="text-[#E0E0E0]/60 text-xs">Modo forense sin modificar datos</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-blue-400 mb-3">Ubuntu</h4>
            <p className="text-[#E0E0E0]/70 text-sm leading-relaxed mb-3">
              Sistema operativo versátil basado en Debian, ideal para escritorio y servidores. Gran comunidad y soporte empresarial de Canonical.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5" />
                <span className="text-[#E0E0E0]/60 text-xs">Versiones LTS con 5 años de soporte</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5" />
                <span className="text-[#E0E0E0]/60 text-xs">Excelente para desarrollo de software</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-blue-400 mt-1.5" />
                <span className="text-[#E0E0E0]/60 text-xs">Gran repositorio de paquetes</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-purple-400 mb-3">Windows</h4>
            <p className="text-[#E0E0E0]/70 text-sm leading-relaxed mb-3">
              Sistema operativo propietario dominante en escritorio. Amplia compatibilidad con software comercial, juegos y hardware propietario.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5" />
                <span className="text-[#E0E0E0]/60 text-xs">Interfaz gráfica intuitiva</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5" />
                <span className="text-[#E0E0E0]/60 text-xs">Soporte empresarial extenso</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-purple-400 mt-1.5" />
                <span className="text-[#E0E0E0]/60 text-xs">Mayor compatibilidad gaming</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
