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
  const cardTranslateXPerc = ((angle.x - 50) / 100) * 20;

  const cardRotateYDeg = ((angle.x - 50) / 100) * 70;
  const cardRotateXDeg = 0; //((angle.y - 50) / 100) * 20;

  const astronautTranslateYPerc = 0; // ((angle.y - 50) / 100) * 10;
  const astronautTranslateXPerc = ((angle.x - 50) / 100) * 5;

  return (
    <div
      className="card-container"
      style={{
        display: 'grid',
        placeItems: 'center',
        perspective: 600,
      }}
    >
      <div
        className="card"
        style={{
          position: 'relative',
          width: 300,
          maxWidth: 300,
          height: 300,
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
