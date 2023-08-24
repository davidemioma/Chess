interface Props {
  startPieces: string[];
  currentPlayer: "black" | "gold";
  startIndex: number;
  width: number;
  targetIndex: number;
}

export const validatePawn = ({
  startPieces,
  currentPlayer,
  startIndex,
  width,
  targetIndex,
}: Props) => {
  let isValid = false;

  const BLACK_PAWN_START_ROW = [8, 9, 10, 11, 12, 13, 14, 15];

  const GOLD_PAWN_START_ROW = [48, 49, 50, 51, 52, 53, 54, 55];

  if (currentPlayer === "black") {
    if (
      (BLACK_PAWN_START_ROW.includes(startIndex) &&
        !startPieces[targetIndex] &&
        startIndex + width * 2 === targetIndex) ||
      (!startPieces[targetIndex] && startIndex + width === targetIndex) ||
      (startPieces[targetIndex] && startIndex + width - 1 === targetIndex) ||
      (startPieces[targetIndex] && startIndex + width + 1 === targetIndex)
    ) {
      isValid = true;
    }
  } else if (currentPlayer === "gold") {
    if (
      (GOLD_PAWN_START_ROW.includes(startIndex) &&
        !startPieces[targetIndex] &&
        startIndex - width * 2 === targetIndex) ||
      (!startPieces[targetIndex] && startIndex - width === targetIndex) ||
      (startPieces[targetIndex] && startIndex - width - 1 === targetIndex) ||
      (startPieces[targetIndex] && startIndex - width + 1 === targetIndex)
    ) {
      isValid = true;
    }
  }

  return isValid;
};
