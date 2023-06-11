import astronaut from '../assets/astronaut.png';

const Object = ({
  angle,
}: {
  angle: {
    x: number,
    y: number,
  },
}) => {
  const cardTranslateYPerc = 0 ;//((angle.y - 50) / 100) * -30;
  const cardTranslateXPerc = ((angle.x - 50) / 100) * 40;

  const cardRotateYDeg = ((angle.x - 50) / 100) * 20;
  const cardRotateXDeg = 0; //((angle.y - 50) / 100) * 20;

  const astronautTranslateYPerc = 0; // ((angle.y - 50) / 100) * 10;
  const astronautTranslateXPerc = ((angle.x - 50) / 100) * 5;

  return (
    <div
      className="card-container"
      style={{
        display: 'grid',
        placeItems: 'center',
        perspective: 300,
      }}
    >
      <div
        className="card"
        style={{
          position: 'relative',
          width: 300,
          maxWidth: 300,
          height: 300,
          borderRadius: 150,
          background: `linear-gradient(
            rgba(0, 0, 0, 0.05),
            rgba(0, 0, 0, 0.5))`,
          boxShadow: '0 0 100px #000',
          backdropFilter: 'blur(4px)',
          transform: `
            rotateY(${cardRotateYDeg}deg)
            rotateX(${cardRotateXDeg}deg)
            translateX(${cardTranslateXPerc}%)
            translateY(${cardTranslateYPerc}%)
          `,
          transition: 'transform 0.1s ease-in-out',
        }
      }>
        <img
          className="astronaut"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            transform: `
              translateX(${astronautTranslateXPerc}%)
              translateY(${astronautTranslateYPerc}%)
            `,
            transition: 'transform 0.2s ease-in-out',
          }}
          src={astronaut}
        />
      </div>
    </div>
  );
};
0
export default Object;
