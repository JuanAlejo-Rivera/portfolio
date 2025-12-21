import Snowfall from 'react-snowfall';

interface SnowfallEffectProps {
  enabled?: boolean;
  snowflakeCount?: number;
  color?: string;
  radius?: [number, number];
  speed?: [number, number];
  wind?: [number, number];
}

/**
 * Componente reutilizable para efecto de nieve en toda la página
 * 
 * @param enabled - Activar/desactivar el efecto (default: true)
 * @param snowflakeCount - Cantidad de copos de nieve (default: 150)
 * @param color - Color de los copos (default: '#dee4fd')
 * @param radius - Rango del radio de los copos [min, max] (default: [0.5, 3])
 * @param speed - Rango de velocidad de caída [min, max] (default: [0.5, 2])
 * @param wind - Rango del viento horizontal [min, max] (default: [-0.5, 2])
 */
export default function SnowfallEffect({
  enabled = true,
  snowflakeCount = 150,
  color = '#dee4fd',
  radius = [0.5, 3],
  speed = [0.5, 2],
  wind = [-0.5, 2],
}: SnowfallEffectProps) {
  if (!enabled) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    >
      <Snowfall
        snowflakeCount={snowflakeCount}
        color={color}
        radius={radius}
        speed={speed}
        wind={wind}
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
        }}
      />
    </div>
  );
}
