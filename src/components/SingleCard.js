import './SingleCard.css'

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="front"
          src={card.src}
          alt="card front"
          draggable="false"
        />
        <img
          className="back"
          src="./img/cover.png"
          onClick={handleClick}
          alt="card back"
          draggable="false"
        />
      </div>
    </div>
  );
}

export default SingleCard;