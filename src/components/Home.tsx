import { BookOpen, Cpu, GitCompare, ExternalLink } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { motion } from 'motion/react';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const menuItems = [
    { id: 'modules', icon: BookOpen, title: 'Módulos Educativos', desc: 'Teoría y práctica combinadas' },
    { id: 'labs', icon: Cpu, title: 'Laboratorios Prácticos', desc: 'Ejercicios guiados paso a paso' },
    { id: 'comparison', icon: GitCompare, title: 'Comparativas', desc: 'Análisis de sistemas operativos' },
    { id: 'sources', icon: ExternalLink, title: 'Fuentes Oficiales', desc: 'Documentación y recursos' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] p-6">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-4"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <span className="text-cyan-400 text-sm">Nivel Universitario</span>
          </motion.div>
          <h1 className="text-3xl mb-3 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Kali Linux: Teoría vs Realidad de los Sistemas Operativos
          </h1>
          <p className="text-[#E0E0E0]/70 text-sm">
            Aprende cómo la teoría se convierte en práctica real
          </p>
        </motion.div>

        {/* Main Image Placeholder */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <ImagePlaceholder text="Espacio para imagen de portada" aspect="video" />
        </motion.div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 gap-4">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="group relative overflow-hidden bg-gradient-to-r from-[#1a2a35] to-[#243644] p-6 rounded-xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-center gap-4">
                <motion.div 
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center"
                  whileHover={{ rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-[#E0E0E0] mb-1">{item.title}</h3>
                  <p className="text-[#E0E0E0]/60 text-sm">{item.desc}</p>
                </div>
                <motion.div 
                  className="text-cyan-400"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  →
                </motion.div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Footer */}
        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
            <motion.div 
              className="w-2 h-2 rounded-full bg-cyan-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <span className="text-[#E0E0E0]/60 text-sm">Sistema educativo interactivo</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
