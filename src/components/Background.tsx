import background from '../assets/background.jpg';

const Background = ({
  angle,
}: {
  angle: {
    x: number,
    y: number,
  },
}) => {
  const robotTranslateYPerc = 0; // ((angle.y - 50) / 100) * 4;
  const robotTranslateXPerc = ((angle.x - 50) / 100) * 4;

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
        transform: `
          translateX(${robotTranslateXPerc}%)
          translateY(${robotTranslateYPerc}%)
        `,
        filter: 'blur(1px)',
        transition: 'transform 0.1s ease-in-out',
      }}
      src={background}
    />
  );
};

export default Background;
