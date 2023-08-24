interface Props {
  startPieces: string[];
  currentPlayer: "black" | "gold";
  startIndex: number;
  width: number;
  targetIndex: number;
}

export const validateQueen = ({
  startPieces,
  currentPlayer,
  startIndex,
  width,
  targetIndex,
}: Props) => {
  let isValid = false;

  if (currentPlayer === "black") {
  } else if (currentPlayer === "gold") {
  }

  return isValid;
};
