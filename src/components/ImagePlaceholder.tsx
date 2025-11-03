interface ImagePlaceholderProps {
  text?: string;
  className?: string;
  aspect?: 'square' | 'video' | 'wide' | 'tall';
}

export function ImagePlaceholder({ 
  text = "Espacio para imagen", 
  className = "",
  aspect = 'video'
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
    tall: 'aspect-[9/16]'
  };

  return (
    <div 
      className={`relative ${aspectClasses[aspect]} w-full border-2 border-dashed border-cyan-500/30 rounded-lg bg-gradient-to-br from-cyan-500/5 to-purple-500/5 flex items-center justify-center ${className}`}
    >
      <div className="text-center px-4">
        <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
          <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
        <p className="text-cyan-400/70 text-sm">{text}</p>
      </div>
    </div>
  );
}
