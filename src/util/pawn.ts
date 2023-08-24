interface Props {
  currentPlayer: "black" | "gold";
  startIndex: number;
  width: number;
  targetIndex: number;
  target?: boolean;
}

export const validatePawn = ({
  currentPlayer,
  startIndex,
  width,
  targetIndex,
  target,
}: Props) => {
  let isValid = false;

  const BLACK_PAWN_START_ROW = [8, 9, 10, 11, 12, 13, 14, 15];

  const GOLD_PAWN_START_ROW = [48, 49, 50, 51, 52, 53, 54, 55];

  if (currentPlayer === "black") {
    if (
      (BLACK_PAWN_START_ROW.includes(startIndex) &&
        startIndex + width * 2 === targetIndex) ||
      startIndex + width === targetIndex ||
      (startIndex + width - 1 === targetIndex && target) ||
      (startIndex + width + 1 === targetIndex && target)
    ) {
      isValid = true;
    }
  } else if (currentPlayer === "gold") {
    if (
      (GOLD_PAWN_START_ROW.includes(startIndex) &&
        startIndex - width * 2 === targetIndex) ||
      startIndex - width === targetIndex ||
      (startIndex - width - 1 === targetIndex && target) ||
      (startIndex - width + 1 === targetIndex && target)
    ) {
      isValid = true;
    }
  }

  return isValid;
};
