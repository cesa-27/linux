import { ArrowLeft, ExternalLink, BookOpen, Code, Shield, FileText, Users, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface OfficialSourcesProps {
  onBack: () => void;
}

export function OfficialSources({ onBack }: OfficialSourcesProps) {
  const sources = [
    {
      name: 'Kali Linux Official',
      url: 'https://www.kali.org',
      icon: Shield,
      description: 'Documentación oficial de Kali Linux',
      details: 'Sitio oficial de Kali Linux mantenido por Offensive Security. Centro de recursos para profesionales de seguridad informática y estudiantes de ciberseguridad.',
      sections: [
        {
          title: 'Documentación',
          items: [
            'Guías de instalación (bare metal, VM, WSL)',
            'Documentación completa de todas las herramientas',
            'Configuración de entornos de pentesting',
            'Troubleshooting y resolución de problemas'
          ]
        },
        {
          title: 'Recursos de Aprendizaje',
          items: [
            'Tutoriales paso a paso',
            'Casos de uso y escenarios reales',
            'Best practices de seguridad ofensiva',
            'Integración con frameworks de pentesting'
          ]
        },
        {
          title: 'Comunidad',
          items: [
            'Foros oficiales de Kali Linux',
            'Blog con actualizaciones y noticias',
            'Repositorios de herramientas en GitHub',
            'Soporte de la comunidad global'
          ]
        }
      ],
      color: 'from-cyan-500 to-blue-500',
      links: [
        { name: 'Docs', url: 'https://www.kali.org/docs/' },
        { name: 'Tools', url: 'https://www.kali.org/tools/' },
        { name: 'Blog', url: 'https://www.kali.org/blog/' }
      ]
    },
    {
      name: 'The Linux Kernel Archives',
      url: 'https://www.kernel.org',
      icon: Code,
      description: 'Repositorio oficial del kernel de Linux',
      details: 'Sitio oficial del desarrollo del kernel Linux. Código fuente, documentación técnica, archivos históricos y recursos para desarrolladores del kernel.',
      sections: [
        {
          title: 'Desarrollo del Kernel',
          items: [
            'Código fuente completo de todas las versiones',
            'Documentación técnica de subsistemas',
            'Process de desarrollo y contribución',
            'Mailing lists de desarrollo (LKML)'
          ]
        },
        {
          title: 'Documentación Técnica',
          items: [
            'Arquitectura interna del kernel',
            'Guías de desarrollo de módulos',
            'APIs y interfaces del kernel',
            'Debugging y profiling del kernel'
          ]
        },
        {
          title: 'Versiones y Releases',
          items: [
            'Kernel stable releases',
            'Longterm support kernels',
            'Changelogs detallados',
            'Notas de seguridad y parches'
          ]
        }
      ],
      color: 'from-purple-500 to-pink-500',
      links: [
        { name: 'Docs', url: 'https://www.kernel.org/doc/html/latest/' },
        { name: 'Git', url: 'https://git.kernel.org/' }
      ]
    },
    {
      name: 'Offensive Security',
      url: 'https://www.offensive-security.com',
      icon: BookOpen,
      description: 'Creadores de Kali Linux y certificaciones profesionales',
      details: 'Empresa líder en formación de ciberseguridad ofensiva. Creadores de Kali Linux y responsables de las certificaciones más respetadas en pentesting.',
      sections: [
        {
          title: 'Certificaciones',
          items: [
            'OSCP: Offensive Security Certified Professional',
            'OSWE: Web Expert',
            'OSEP: Experienced Penetration Tester',
            'OSED: Exploit Developer'
          ]
        },
        {
          title: 'Cursos y Formación',
          items: [
            'PEN-200: Penetration Testing with Kali Linux',
            'WEB-300: Advanced Web Attacks and Exploitation',
            'EXP-301: Windows User Mode Exploit Development',
            'Laboratorios prácticos 24/7'
          ]
        },
        {
          title: 'Recursos Profesionales',
          items: [
            'Metodologías de pentesting reconocidas',
            'Comunidad de profesionales certificados',
            'Actualizaciones continuas de contenido',
            'Soporte técnico especializado'
          ]
        }
      ],
      color: 'from-pink-500 to-cyan-500',
      links: [
        { name: 'Courses', url: 'https://www.offensive-security.com/courses-and-certifications/' },
        { name: 'Cert', url: 'https://www.offensive-security.com/courses-and-certifications/' }
      ]
    }
  ];

  const handleLinkClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] p-6 pb-12">
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
              Fuentes Oficiales
            </h1>
            <p className="text-[#E0E0E0]/60 text-sm">Documentación autorizada y recursos de aprendizaje</p>
          </div>
        </div>

        {/* Sources */}
        <div className="space-y-6">
          {sources.map((source, index) => (
            <motion.div 
              key={index}
              className="bg-gradient-to-r from-[#1a2a35] to-[#243644] rounded-xl border border-cyan-500/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6 space-y-5">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${source.color} opacity-20 flex items-center justify-center flex-shrink-0`}>
                    <source.icon className="w-7 h-7 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-[#E0E0E0] mb-1">{source.name}</h3>
                    <button
                      onClick={() => handleLinkClick(source.url)}
                      className="flex items-center gap-2 mb-2 hover:underline"
                    >
                      <span className="text-cyan-400 text-sm">{source.url.replace('https://www.', '')}</span>
                      <ExternalLink className="w-4 h-4 text-cyan-400" />
                    </button>
                    <p className="text-[#E0E0E0]/60 text-sm mb-2">{source.description}</p>
                    <p className="text-[#E0E0E0]/70 text-sm leading-relaxed">{source.details}</p>
                  </div>
                </div>

                {/* Sections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {source.sections.map((section, idx) => (
                    <div 
                      key={idx}
                      className="bg-black/20 border border-cyan-500/10 rounded-lg p-4"
                    >
                      <h4 className="text-cyan-400 text-sm mb-3 flex items-center gap-2">
                        {idx === 0 ? <FileText className="w-4 h-4" /> : idx === 1 ? <BookOpen className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                        {section.title}
                      </h4>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                            <span className="text-[#E0E0E0]/70 text-xs leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Quick Links */}
                <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-cyan-500/10">
                  <span className="text-[#E0E0E0]/50 text-sm">Enlaces rápidos:</span>
                  {source.links.map((link, idx) => (
                    <motion.button
                      key={idx}
                      onClick={() => handleLinkClick(link.url)}
                      className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-400 text-sm flex items-center gap-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3" />
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div 
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-5">
            <h4 className="text-cyan-400 mb-3 flex items-center gap-2">
              <Award className="w-5 h-5" />
              Recursos Adicionales
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5" />
                <button
                  onClick={() => handleLinkClick('https://www.debian.org/doc/')}
                  className="text-[#E0E0E0]/70 hover:text-cyan-400 transition-colors text-left"
                >
                  Debian Documentation (debian.org/doc)
                </button>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5" />
                <button
                  onClick={() => handleLinkClick('https://www.linuxfoundation.org/')}
                  className="text-[#E0E0E0]/70 hover:text-cyan-400 transition-colors text-left"
                >
                  Linux Foundation (linuxfoundation.org)
                </button>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5" />
                <button
                  onClick={() => handleLinkClick('https://owasp.org/')}
                  className="text-[#E0E0E0]/70 hover:text-cyan-400 transition-colors text-left"
                >
                  OWASP Foundation (owasp.org)
                </button>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5" />
                <button
                  onClick={() => handleLinkClick('https://www.nist.gov/cyberframework')}
                  className="text-[#E0E0E0]/70 hover:text-cyan-400 transition-colors text-left"
                >
                  NIST Cybersecurity Framework
                </button>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-5">
            <h4 className="text-purple-400 mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Aviso Legal
            </h4>
            <p className="text-[#E0E0E0]/70 text-sm leading-relaxed mb-3">
              Esta aplicación es de uso educativo exclusivamente. Las herramientas de seguridad deben utilizarse únicamente en entornos autorizados.
            </p>
            <p className="text-[#E0E0E0]/60 text-xs leading-relaxed">
              El uso no autorizado de herramientas de pentesting puede ser ilegal y está sujeto a leyes locales, nacionales e internacionales. Siempre obtenga permiso por escrito antes de realizar pruebas de seguridad.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
