import background from '../assets/background.jpg';

const Background = ({
  angle,
}: {
  angle: {
    x: number,
    y: number,
  },
}) => {
  const cardTranslateYPerc = 0 ;//((angle.y - 50) / 100) * -30;
  const cardTranslateXPerc = ((angle.x - 50) / 100) * 10;

  const cardRotateYDeg = ((angle.x - 50) / 100) * 30;
  const cardRotateXDeg = 0; //((angle.y - 50) / 100) * 20;

  return (
    <img
      className="background"
      style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '120%',
        height: '120%',
        objectFit: 'cover',
        perspective: 600,
        transform: `
          translateX(${cardTranslateXPerc}%)
          translateY(${cardTranslateYPerc}%)
          rotateX(${cardRotateXDeg}deg)
          rotateY(${cardRotateYDeg}deg)
        `,
        pointerEvents: 'none',
        filter: 'blur(1px)',
        transition: 'transform 0.1s ease-in-out',
      }}
      src={background}
    />
  );
};

export default Background;
