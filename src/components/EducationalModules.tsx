import { ArrowLeft, Book, ChevronDown, Lightbulb } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface EducationalModulesProps {
  onBack: () => void;
}

export function EducationalModules({ onBack }: EducationalModulesProps) {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const didYouKnowModule = [
    "El kernel Linux fue creado por Linus Torvalds en 1991 cuando tenía solo 21 años.",
    "Un proceso puede crear hasta 32,768 hilos en Linux (límite configurable del kernel).",
    "El primer byte de cada archivo ext4 contiene un 'magic number' (0x53EF) para identificarlo.",
    "TCP/IP fue desarrollado por DARPA en los años 70 para crear ARPANET, precursor de Internet."
  ];

  const modules = [
    {
      title: 'Módulo 1: Arquitectura del Sistema',
      color: 'from-cyan-500 to-blue-500',
      didYouKnow: didYouKnowModule[0],
      sections: {
        theory: {
          title: 'Teoría: Fundamentos de la Arquitectura de Sistemas Operativos',
          content: [
            {
              subtitle: 'Tipos de Kernel',
              text: '• Kernel Monolítico: Todos los servicios del sistema operativo se ejecutan en modo kernel (espacio privilegiado). Ejemplos: Linux, Unix tradicional. Ventaja: alto rendimiento por comunicación directa. Desventaja: un fallo puede comprometer todo el sistema.',
            },
            {
              subtitle: '',
              text: '• Microkernel: Solo las funciones esenciales (gestión de memoria, comunicación entre procesos) están en modo kernel. Los servicios se ejecutan como procesos en espacio de usuario. Ejemplo: MINIX, QNX. Ventaja: mayor estabilidad y seguridad.',
            },
            {
              subtitle: '',
              text: '• Kernel Híbrido: Combina elementos de ambos enfoques. Ejemplo: Windows NT, macOS (XNU). Mantiene servicios críticos en kernel pero modulariza otros componentes.',
            },
            {
              subtitle: 'Estructura Interna del SO',
              text: '• Espacio de Usuario (User Space): Donde se ejecutan las aplicaciones con privilegios limitados. No pueden acceder directamente al hardware.',
            },
            {
              subtitle: '',
              text: '• Espacio de Kernel (Kernel Space): Área privilegiada con acceso completo al hardware y memoria. Solo código confiable puede ejecutarse aquí.',
            },
            {
              subtitle: '',
              text: '• Llamadas al Sistema (System Calls): Mecanismo mediante el cual las aplicaciones solicitan servicios al kernel (ej: open(), read(), write(), fork()). Actúan como interfaz entre user space y kernel space.',
            },
            {
              subtitle: 'Comunicación entre Procesos (IPC)',
              text: '• Pipes: Canales unidireccionales para transferencia de datos entre procesos relacionados.',
            },
            {
              subtitle: '',
              text: '• Sockets: Comunicación bidireccional, incluso entre sistemas remotos.',
            },
            {
              subtitle: '',
              text: '• Memoria Compartida: Zona de memoria accesible por múltiples procesos para intercambio rápido de datos.',
            },
            {
              subtitle: '',
              text: '• Colas de Mensajes: Estructuras FIFO para envío asíncrono de mensajes entre procesos.',
            }
          ]
        },
        practice: {
          title: 'Implementación en Kali Linux',
          content: [
            {
              subtitle: 'Kernel Linux: Monolítico Modular',
              text: 'Kali Linux utiliza el kernel Linux, que es monolítico pero con módulos cargables dinámicamente (Loadable Kernel Modules - LKM). Esto combina el rendimiento del diseño monolítico con la flexibilidad de cargar/descargar controladores sin reiniciar el sistema.',
            },
            {
              subtitle: 'Base Debian Testing',
              text: 'Kali está basado en Debian Testing (branch de desarrollo), lo que garantiza paquetes actualizados pero probados. Esta elección proporciona un equilibrio entre estabilidad y disponibilidad de herramientas modernas de seguridad.',
            },
            {
              subtitle: 'Comandos Fundamentales',
              text: '• uname -r: Muestra la versión del kernel en ejecución (ej: 6.1.0-kali5-amd64)',
            },
            {
              subtitle: '',
              text: '• uname -a: Información completa del sistema (kernel, arquitectura, hostname)',
            },
            {
              subtitle: '',
              text: '• lsmod: Lista todos los módulos del kernel cargados actualmente',
            },
            {
              subtitle: '',
              text: '• modinfo <módulo>: Muestra información detallada sobre un módulo específico',
            },
            {
              subtitle: '',
              text: '• modprobe <módulo>: Carga un módulo del kernel con sus dependencias',
            },
            {
              subtitle: '',
              text: '• rmmod <módulo>: Descarga un módulo del kernel',
            },
            {
              subtitle: 'Enfoque en Seguridad Ofensiva',
              text: 'A diferencia de distribuciones generales, Kali incluye modificaciones específicas para pentesting: drivers de tarjetas de red con soporte para modo monitor, herramientas precompiladas con opciones de depuración, y configuraciones de kernel optimizadas para análisis forense.',
            }
          ]
        },
        components: {
          title: 'Componentes Principales del Sistema',
          items: [
            {
              name: 'Gestor de Arranque (GRUB)',
              description: 'GRUB2 (GRand Unified Bootloader) es el cargador de arranque estándar. Permite seleccionar entre múltiples kernels, pasar parámetros de arranque, y recuperar el sistema. Ubicación: /boot/grub/',
            },
            {
              name: 'Subsistema de Memoria',
              description: 'Gestiona memoria física (RAM) y virtual (swap). Implementa algoritmos de paginación bajo demanda, copy-on-write, y caché de páginas para optimizar el rendimiento.',
            },
            {
              name: 'Controladores Modulares (Drivers)',
              description: 'Módulos .ko ubicados en /lib/modules/$(uname -r)/. Incluyen controladores para dispositivos de red (ath9k para Wi-Fi), sistemas de archivos (ext4, ntfs), y dispositivos USB.',
            },
            {
              name: 'VFS (Virtual File System)',
              description: 'Capa de abstracción que permite al kernel trabajar con múltiples sistemas de archivos de forma uniforme. Proporciona una interfaz común para ext4, FAT, NTFS, NFS, etc.',
            },
            {
              name: 'Networking Stack',
              description: 'Implementación completa de TCP/IP. Incluye capas de enlace, red, transporte y aplicación. Herramientas como netfilter/iptables operan en este nivel.',
            }
          ]
        }
      }
    },
    {
      title: 'Módulo 2: Multitarea y Concurrencia',
      color: 'from-blue-500 to-purple-500',
      didYouKnow: didYouKnowModule[1],
      sections: {
        theory: {
          title: 'Teoría: Gestión de Procesos y Concurrencia',
          content: [
            {
              subtitle: 'Conceptos Fundamentales',
              text: '• Proceso: Programa en ejecución con su propio espacio de memoria, registros de CPU y recursos asignados. Cada proceso tiene un identificador único (PID).',
            },
            {
              subtitle: '',
              text: '• Hilo (Thread): Unidad de ejecución dentro de un proceso. Comparte el espacio de memoria con otros hilos del mismo proceso pero tiene su propio stack y registros.',
            },
            {
              subtitle: '',
              text: '• Multitarea: Capacidad del SO de ejecutar múltiples procesos aparentemente de forma simultánea mediante técnicas de time-sharing.',
            },
            {
              subtitle: 'Estados de un Proceso',
              text: '• New: Proceso recién creado, aún no cargado en memoria principal.',
            },
            {
              subtitle: '',
              text: '• Ready: Proceso listo para ejecutarse, esperando asignación de CPU.',
            },
            {
              subtitle: '',
              text: '• Running: Proceso actualmente ejecutándose en la CPU.',
            },
            {
              subtitle: '',
              text: '• Waiting/Blocked: Proceso esperando un evento (I/O, señal, recurso).',
            },
            {
              subtitle: '',
              text: '• Terminated/Zombie: Proceso finalizado pero aún no eliminado de la tabla de procesos.',
            },
            {
              subtitle: 'Algoritmos de Planificación',
              text: '• FCFS (First-Come, First-Served): El primer proceso en llegar es el primero en ejecutarse. Simple pero puede causar starvation.',
            },
            {
              subtitle: '',
              text: '• Round Robin: Cada proceso recibe un quantum de tiempo fijo. Al terminar, va al final de la cola. Garantiza equidad.',
            },
            {
              subtitle: '',
              text: '• Prioridades: Procesos con mayor prioridad se ejecutan primero. Puede combinarse con aging para evitar starvation.',
            },
            {
              subtitle: '',
              text: '• SJF (Shortest Job First): Ejecuta primero el proceso con menor tiempo de CPU estimado. Óptimo para tiempo de espera promedio.',
            },
            {
              subtitle: '',
              text: '• Multinivel: Múltiples colas con diferentes prioridades y algoritmos. Procesos pueden moverse entre colas según comportamiento.',
            },
            {
              subtitle: 'Concurrencia y Sincronización',
              text: '• Race Condition: Situación donde el resultado depende del orden de ejecución de operaciones concurrentes.',
            },
            {
              subtitle: '',
              text: '• Sección Crítica: Segmento de código que accede a recursos compartidos y debe ejecutarse atómicamente.',
            },
            {
              subtitle: '',
              text: '• Mutex: Mecanismo de exclusión mutua que garantiza que solo un hilo accede a la sección crítica.',
            },
            {
              subtitle: '',
              text: '• Semáforos: Variables de sincronización que controlan el acceso a recursos compartidos mediante operaciones wait() y signal().',
            }
          ]
        },
        practice: {
          title: 'Implementación en Kali Linux',
          content: [
            {
              subtitle: 'CFS: Completely Fair Scheduler',
              text: 'Desde Linux 2.6.23, el planificador predeterminado es CFS. No usa time slices fijos, sino que mantiene un "tiempo virtual de ejecución" (vruntime) para cada proceso. El proceso con menor vruntime se ejecuta a continuación.',
            },
            {
              subtitle: 'Funcionamiento del CFS',
              text: 'CFS utiliza un árbol rojo-negro (red-black tree) para mantener los procesos ordenados por vruntime. Esto permite seleccionar el siguiente proceso en O(log n). El vruntime aumenta más lentamente para procesos de alta prioridad (nice negativo).',
            },
            {
              subtitle: 'Comandos de Gestión de Procesos',
              text: '• ps aux: Lista todos los procesos con información detallada (usuario, PID, %CPU, %MEM, comando)',
            },
            {
              subtitle: '',
              text: '• ps aux --forest: Muestra procesos en formato árbol, revelando relaciones padre-hijo',
            },
            {
              subtitle: '',
              text: '• top: Monitor interactivo en tiempo real de procesos y recursos del sistema',
            },
            {
              subtitle: '',
              text: '• htop: Versión mejorada de top con interfaz colorida y más intuitiva',
            },
            {
              subtitle: '',
              text: '• pstree: Visualización en árbol de la jerarquía de procesos',
            },
            {
              subtitle: '',
              text: '• nice -n <valor> <comando>: Ejecuta un comando con prioridad ajustada (-20 más alta, 19 más baja)',
            },
            {
              subtitle: '',
              text: '• renice <valor> -p <PID>: Cambia la prioridad de un proceso en ejecución',
            },
            {
              subtitle: '',
              text: '• kill -<señal> <PID>: Envía señales a procesos (SIGTERM, SIGKILL, SIGSTOP)',
            },
            {
              subtitle: 'Información del Planificador',
              text: 'El archivo /proc/<PID>/sched proporciona estadísticas detalladas del planificador para cada proceso: vruntime, número de cambios de contexto, tiempo total de CPU, etc.',
            }
          ]
        },
        components: {
          title: 'Componentes del Subsistema de Procesos',
          items: [
            {
              name: 'Scheduler (Planificador)',
              description: 'Componente del kernel que decide qué proceso ejecutar a continuación. En Linux: CFS para procesos normales, RT scheduler para procesos de tiempo real.',
            },
            {
              name: 'Dispatcher',
              description: 'Realiza el cambio de contexto: guarda el estado del proceso actual, carga el estado del siguiente proceso, y transfiere el control de la CPU.',
            },
            {
              name: 'Process Control Block (PCB)',
              description: 'Estructura de datos que almacena toda la información de un proceso: PID, estado, prioridad, registros de CPU, punteros de memoria, archivos abiertos, etc. En Linux se llama task_struct.',
            },
            {
              name: 'Run Queue',
              description: 'Cola(s) de procesos listos para ejecutarse. CFS mantiene una run queue por CPU, implementada como red-black tree para eficiencia.',
            },
            {
              name: 'Herramientas de Monitoreo',
              description: 'atop: Monitoreo avanzado con registro histórico. iostat: Estadísticas de I/O. vmstat: Estadísticas de memoria virtual y procesos. pidstat: Estadísticas detalladas por proceso.',
            }
          ]
        }
      }
    },
    {
      title: 'Módulo 3: Almacenamiento y Memoria',
      color: 'from-purple-500 to-pink-500',
      didYouKnow: didYouKnowModule[2],
      sections: {
        theory: {
          title: 'Teoría: Gestión de Memoria y Almacenamiento',
          content: [
            {
              subtitle: 'Memoria Virtual',
              text: 'Técnica que permite a los procesos usar más memoria de la físicamente disponible. El SO crea un espacio de direcciones virtual para cada proceso, mapeado a memoria física mediante la MMU (Memory Management Unit).',
            },
            {
              subtitle: 'Paginación',
              text: '• Memoria dividida en bloques de tamaño fijo llamados páginas (típicamente 4 KB).',
            },
            {
              subtitle: '',
              text: '• Page Table: Tabla que mapea direcciones virtuales a direcciones físicas.',
            },
            {
              subtitle: '',
              text: '• Page Fault: Ocurre cuando un proceso accede a una página no presente en RAM. El SO la carga desde disco.',
            },
            {
              subtitle: '',
              text: '• TLB (Translation Lookaside Buffer): Caché de hardware que acelera la traducción de direcciones.',
            },
            {
              subtitle: 'Algoritmos de Reemplazo de Páginas',
              text: '• FIFO: Reemplaza la página más antigua en memoria.',
            },
            {
              subtitle: '',
              text: '• LRU (Least Recently Used): Reemplaza la página menos recientemente usada.',
            },
            {
              subtitle: '',
              text: '• Clock/Second Chance: Variante eficiente de LRU usando bits de referencia.',
            },
            {
              subtitle: 'Swapping',
              text: 'Cuando la RAM está llena, el SO mueve páginas inactivas al disco (swap space). Esto permite ejecutar más procesos, pero con penalización de rendimiento por acceso a disco.',
            },
            {
              subtitle: 'Sistemas de Archivos',
              text: '• ext4 (Fourth Extended Filesystem): Sistema de archivos estándar de Linux. Soporta archivos de hasta 16 TB, journaling para recuperación ante fallos, y extents para reducir fragmentación.',
            },
            {
              subtitle: '',
              text: '• FAT32: Sistema simple compatible con múltiples SO. Límite de 4 GB por archivo. Sin journaling ni permisos avanzados.',
            },
            {
              subtitle: '',
              text: '• NTFS: Sistema de archivos de Windows. Soporta journaling, encriptación (EFS), compresión, y ACLs (listas de control de acceso).',
            },
            {
              subtitle: '',
              text: '• btrfs: Sistema moderno con snapshots, RAID integrado, y comprobación de integridad mediante checksums.',
            },
            {
              subtitle: 'Permisos Unix (RWX)',
              text: 'Cada archivo tiene permisos para tres entidades: propietario (user), grupo (group), otros (others). Cada uno puede tener: r (read/4), w (write/2), x (execute/1). Ejemplo: rwxr-xr-- = 754.',
            },
            {
              subtitle: 'Inodos',
              text: 'Estructura de datos que almacena metadatos de archivos: permisos, propietario, tamaño, timestamps, punteros a bloques de datos. El nombre del archivo se almacena en el directorio, no en el inodo.',
            }
          ]
        },
        practice: {
          title: 'Implementación en Kali Linux',
          content: [
            {
              subtitle: 'Sistema de Archivos ext4',
              text: 'Kali Linux usa ext4 por defecto. Características: journaling para prevenir corrupción, delayed allocation para mejor rendimiento, extents para reducir fragmentación, y soporte para volúmenes de hasta 1 exabyte.',
            },
            {
              subtitle: 'Filesystem Hierarchy Standard (FHS)',
              text: 'Estructura estandarizada de directorios en sistemas Unix/Linux:',
            },
            {
              subtitle: '',
              text: '• /bin: Comandos esenciales (ls, cp, mv)',
            },
            {
              subtitle: '',
              text: '• /etc: Archivos de configuración del sistema',
            },
            {
              subtitle: '',
              text: '• /home: Directorios personales de usuarios',
            },
            {
              subtitle: '',
              text: '• /usr: Programas y datos de usuario (no esenciales)',
            },
            {
              subtitle: '',
              text: '• /var: Datos variables (logs, cache, bases de datos)',
            },
            {
              subtitle: '',
              text: '• /tmp: Archivos temporales (borrados al reiniciar)',
            },
            {
              subtitle: '',
              text: '• /proc: Sistema de archivos virtual con información del kernel',
            },
            {
              subtitle: 'Comandos de Gestión de Memoria',
              text: '• free -h: Muestra uso de RAM y swap en formato legible',
            },
            {
              subtitle: '',
              text: '• vmstat: Estadísticas de memoria virtual, procesos, I/O',
            },
            {
              subtitle: '',
              text: '• cat /proc/meminfo: Información detallada de memoria del kernel',
            },
            {
              subtitle: '',
              text: '• swapon -s: Muestra particiones/archivos swap activos',
            },
            {
              subtitle: 'Herramientas Forenses',
              text: '• dd: Copia bit a bit de dispositivos. Útil para crear imágenes forenses.',
            },
            {
              subtitle: '',
              text: '• testdisk: Recuperación de particiones perdidas y reparación de tablas de particiones.',
            },
            {
              subtitle: '',
              text: '• foremost: Recuperación de archivos basada en headers, footers y estructuras de datos.',
            },
            {
              subtitle: '',
              text: '• autopsy/sleuthkit: Suite completa de análisis forense digital.',
            }
          ]
        },
        components: {
          title: 'Componentes del Subsistema de Memoria',
          items: [
            {
              name: 'Page Table',
              description: 'Estructura que mapea direcciones virtuales a físicas. Linux usa tablas multinivel (4 niveles en x86-64) para reducir el overhead de memoria.',
            },
            {
              name: 'Virtual Memory Manager',
              description: 'Subsistema del kernel que gestiona el espacio de direcciones virtuales, maneja page faults, y ejecuta algoritmos de reemplazo de páginas.',
            },
            {
              name: 'Buffer Cache / Page Cache',
              description: 'Caché en RAM de bloques de disco recientemente accedidos. Acelera operaciones de I/O al reducir accesos a disco. Linux unifica buffer cache y page cache.',
            },
            {
              name: 'I/O Scheduler',
              description: 'Ordena y optimiza las solicitudes de I/O a disco. Opciones en Linux: noop (sin reordenamiento), deadline (minimiza latencia), CFQ (fair queuing), mq-deadline y kyber (para SSDs).',
            },
            {
              name: 'Swap Manager',
              description: 'Gestiona el intercambio de páginas entre RAM y disco. Mantiene estadísticas de uso de páginas para decidir cuáles mover a swap.',
            }
          ]
        }
      }
    },
    {
      title: 'Módulo 4: Redes y Seguridad',
      color: 'from-pink-500 to-cyan-500',
      didYouKnow: didYouKnowModule[3],
      sections: {
        theory: {
          title: 'Teoría: Fundamentos de Redes y Seguridad',
          content: [
            {
              subtitle: 'Modelo OSI (7 capas)',
              text: '1. Física: Transmisión de bits por medio físico (cables, ondas).',
            },
            {
              subtitle: '',
              text: '2. Enlace de Datos: Control de acceso al medio, detección de errores (Ethernet, Wi-Fi).',
            },
            {
              subtitle: '',
              text: '3. Red: Enrutamiento de paquetes, direccionamiento lógico (IP).',
            },
            {
              subtitle: '',
              text: '4. Transporte: Comunicación extremo a extremo, control de flujo (TCP, UDP).',
            },
            {
              subtitle: '',
              text: '5. Sesión: Gestión de sesiones y diálogos entre aplicaciones.',
            },
            {
              subtitle: '',
              text: '6. Presentación: Formato de datos, encriptación, compresión.',
            },
            {
              subtitle: '',
              text: '7. Aplicación: Interfaz con aplicaciones (HTTP, FTP, SSH).',
            },
            {
              subtitle: 'Stack TCP/IP (4 capas)',
              text: 'Modelo práctico usado en Internet:',
            },
            {
              subtitle: '',
              text: '1. Enlace: Acceso a la red física (combina física y enlace OSI).',
            },
            {
              subtitle: '',
              text: '2. Internet: Enrutamiento (IP, ICMP, ARP).',
            },
            {
              subtitle: '',
              text: '3. Transporte: Comunicación host-to-host (TCP, UDP).',
            },
            {
              subtitle: '',
              text: '4. Aplicación: Protocolos de alto nivel (HTTP, DNS, SSH).',
            },
            {
              subtitle: 'Puertos y Servicios',
              text: '• Puertos Well-Known (0-1023): Servicios estándar (80=HTTP, 443=HTTPS, 22=SSH).',
            },
            {
              subtitle: '',
              text: '• Puertos Registrados (1024-49151): Aplicaciones específicas.',
            },
            {
              subtitle: '',
              text: '• Puertos Dinámicos (49152-65535): Asignación temporal para conexiones cliente.',
            },
            {
              subtitle: 'Modelos de Control de Acceso',
              text: '• DAC (Discretionary Access Control): El propietario del recurso controla los permisos. Usado en Unix/Linux tradicional.',
            },
            {
              subtitle: '',
              text: '• MAC (Mandatory Access Control): Políticas de seguridad definidas centralmente. Usado en SELinux, AppArmor.',
            },
            {
              subtitle: '',
              text: '• RBAC (Role-Based Access Control): Permisos basados en roles asignados a usuarios.',
            },
            {
              subtitle: 'Conceptos de Seguridad',
              text: '• Confidencialidad: Información accesible solo a usuarios autorizados (encriptación).',
            },
            {
              subtitle: '',
              text: '• Integridad: Datos no modificados por entidades no autorizadas (hashes, firmas digitales).',
            },
            {
              subtitle: '',
              text: '• Disponibilidad: Sistemas accesibles cuando se necesitan (redundancia, protección DDoS).',
            },
            {
              subtitle: '',
              text: '• Autenticación: Verificación de identidad (contraseñas, biometría, tokens).',
            },
            {
              subtitle: '',
              text: '• Autorización: Determinación de permisos de un usuario autenticado.',
            }
          ]
        },
        practice: {
          title: 'Implementación en Kali Linux',
          content: [
            {
              subtitle: 'Configuración Avanzada de Red',
              text: 'Kali soporta configuración de interfaces en modo monitor para análisis de tráfico Wi-Fi sin asociarse a una red. Comandos: ifconfig <interfaz> down; iwconfig <interfaz> mode monitor; ifconfig <interfaz> up',
            },
            {
              subtitle: 'Herramientas de Escaneo: Nmap',
              text: 'Network Mapper es la herramienta estándar para descubrimiento de hosts y auditoría de seguridad:',
            },
            {
              subtitle: '',
              text: '• nmap -sn 192.168.1.0/24: Ping scan (descubre hosts activos)',
            },
            {
              subtitle: '',
              text: '• nmap -sV <target>: Escaneo de versiones de servicios',
            },
            {
              subtitle: '',
              text: '• nmap -sS <target>: SYN scan (sigiloso, no completa handshake)',
            },
            {
              subtitle: '',
              text: '• nmap -p- <target>: Escanea todos los 65535 puertos',
            },
            {
              subtitle: '',
              text: '• nmap --script vuln <target>: Ejecuta scripts de detección de vulnerabilidades',
            },
            {
              subtitle: 'Análisis de Tráfico: Wireshark',
              text: 'Analizador de protocolos que captura y analiza paquetes en tiempo real:',
            },
            {
              subtitle: '',
              text: '• Captura de tráfico en interfaces de red',
            },
            {
              subtitle: '',
              text: '• Filtros de visualización (tcp.port == 80, http, dns)',
            },
            {
              subtitle: '',
              text: '• Análisis de protocolos capa por capa',
            },
            {
              subtitle: '',
              text: '• Detección de anomalías y patrones sospechosos',
            },
            {
              subtitle: '',
              text: '• Exportación de objetos (archivos transferidos por HTTP)',
            },
            {
              subtitle: 'Framework de Pentesting: Metasploit',
              text: 'Plataforma completa para desarrollo y ejecución de exploits:',
            },
            {
              subtitle: '',
              text: '• msfconsole: Consola interactiva principal',
            },
            {
              subtitle: '',
              text: '• search <término>: Busca exploits, payloads, módulos',
            },
            {
              subtitle: '',
              text: '• use <módulo>: Selecciona un exploit o auxiliar',
            },
            {
              subtitle: '',
              text: '• show options: Muestra parámetros configurables',
            },
            {
              subtitle: '',
              text: '• set <opción> <valor>: Configura parámetros',
            },
            {
              subtitle: '',
              text: '• exploit / run: Ejecuta el módulo seleccionado',
            },
            {
              subtitle: 'Seguridad Ofensiva y Pentesting Ético',
              text: 'Kali está diseñado para profesionales de seguridad que realizan pruebas de penetración autorizadas. Incluye herramientas para cada fase: reconocimiento (nmap, maltego), escaneo de vulnerabilidades (nessus, openvas), explotación (metasploit, sqlmap), post-explotación (meterpreter), y generación de informes.',
            }
          ]
        },
        components: {
          title: 'Componentes del Subsistema de Red',
          items: [
            {
              name: 'Network Manager',
              description: 'Demonio que gestiona conexiones de red automáticamente. Maneja Wi-Fi, Ethernet, VPN, y conexiones móviles. Interfaz gráfica: nm-applet.',
            },
            {
              name: 'Firewall (iptables/nftables)',
              description: 'iptables: Framework de filtrado de paquetes. Define reglas para aceptar, rechazar o modificar tráfico. nftables: Sucesor moderno de iptables, más eficiente y con sintaxis simplificada.',
            },
            {
              name: 'Interfaces de Red',
              description: 'Representación software de adaptadores físicos o virtuales: eth0 (Ethernet), wlan0 (Wi-Fi), lo (loopback), tun/tap (VPN). Configuración en /etc/network/interfaces.',
            },
            {
              name: 'Netfilter',
              description: 'Framework del kernel Linux para manipulación de paquetes de red. Permite filtrado, NAT, y modificación de paquetes. Base de iptables y nftables.',
            },
            {
              name: 'SELinux / AppArmor',
              description: 'Sistemas de control de acceso obligatorio (MAC). SELinux: Políticas basadas en contextos de seguridad. AppArmor: Políticas basadas en rutas de archivos. Kali incluye AppArmor por defecto.',
            }
          ]
        }
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364] p-6 pb-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <motion.button
            onClick={onBack}
            className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center hover:scale-105 transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5 text-cyan-400" />
          </motion.button>
          <div>
            <h1 className="text-2xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Módulos Educativos
            </h1>
            <p className="text-[#E0E0E0]/60 text-sm">Contenido técnico y académico detallado</p>
          </div>
        </div>

        {/* Modules List */}
        <div className="space-y-6">
          {modules.map((module, index) => (
            <motion.div 
              key={index} 
              className="bg-gradient-to-r from-[#1a2a35] to-[#243644] rounded-xl border border-cyan-500/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                onClick={() => setSelectedModule(selectedModule === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-cyan-500/5 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${module.color} opacity-20 flex items-center justify-center`}>
                    <Book className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-[#E0E0E0]">{module.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: selectedModule === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-cyan-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {selectedModule === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 space-y-8">
                      {/* Sabías que... */}
                      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-yellow-400 text-sm mb-1">💡 Sabías que...</h4>
                            <p className="text-[#E0E0E0]/80 text-sm leading-relaxed">
                              {module.didYouKnow}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Image Placeholder */}
                      <ImagePlaceholder 
                        text={`Insertar diagrama - ${module.title}`}
                        aspect="video"
                      />

                      {/* Theory Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
                          <span className="text-cyan-400">{module.sections.theory.title}</span>
                          <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent" />
                        </div>
                        <div className="space-y-3">
                          {module.sections.theory.content.map((item, idx) => (
                            <div key={idx}>
                              {item.subtitle && (
                                <h4 className="text-[#E0E0E0] text-sm mb-1.5 mt-3">{item.subtitle}</h4>
                              )}
                              <p className="text-[#E0E0E0]/80 text-sm leading-relaxed pl-3 border-l-2 border-cyan-500/20">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Practice Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
                          <span className="text-purple-400">{module.sections.practice.title}</span>
                          <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
                        </div>
                        <div className="space-y-3">
                          {module.sections.practice.content.map((item, idx) => (
                            <div key={idx}>
                              {item.subtitle && (
                                <h4 className="text-[#E0E0E0] text-sm mb-1.5 mt-3">{item.subtitle}</h4>
                              )}
                              <p className="text-[#E0E0E0]/80 text-sm leading-relaxed pl-3 border-l-2 border-purple-500/20">
                                {item.text}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Components Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <div className="h-px flex-1 bg-gradient-to-r from-pink-500/50 to-transparent" />
                          <span className="text-pink-400">{module.sections.components.title}</span>
                          <div className="h-px flex-1 bg-gradient-to-l from-pink-500/50 to-transparent" />
                        </div>
                        <div className="grid grid-cols-1 gap-3">
                          {module.sections.components.items.map((component, idx) => (
                            <div 
                              key={idx}
                              className="bg-black/20 border border-pink-500/10 rounded-lg p-4"
                            >
                              <h4 className="text-pink-400 text-sm mb-2">{component.name}</h4>
                              <p className="text-[#E0E0E0]/70 text-sm leading-relaxed">
                                {component.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
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
