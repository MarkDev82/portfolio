import { Cross } from './Cross';

interface CrossPatternProps {
  className?: string;
  spacing?: number;
  size?: number;
  color?: string;
  opacity?: number;
}

export const CrossPattern = ({ 
  className = '',
  spacing = 80,
  size = 8,
  color = '#ffffff',
  opacity = 0.03
}: CrossPatternProps) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='${spacing}' height='${spacing}' viewBox='0 0 ${spacing} ${spacing}' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M${spacing/2} ${spacing/2 - size/2}v${size}M${spacing/2 - size/2} ${spacing/2}h${size}' stroke='${encodeURIComponent(color)}' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E")`,
          backgroundSize: `${spacing}px ${spacing}px`
        }}
      />
    </div>
  );
};
