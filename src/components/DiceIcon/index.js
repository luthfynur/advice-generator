import Dice from '../../assets/Images/icon-dice.svg';

export default function DiceIcon({ refresh }) {
  return (
    <img
      src={Dice}
      alt="dice"
      className={`w-4 m-auto pr-[1px] ${refresh ? 'animate-spin' : ''}`}
    />
  );
}
