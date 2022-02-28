import "./SingleCard.css";
type SingleCardProps = {
  card: {
    id?: number;
    src: string;
  };
  handleChoice: (card: any) => void;
  flipped: boolean;
};
const SingleCard = ({ card, handleChoice, flipped }: SingleCardProps) => {
  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="img/cover.png"
          alt="card back"
          onClick={() => handleChoice(card)}
        />
      </div>
    </div>
  );
};

export default SingleCard;
