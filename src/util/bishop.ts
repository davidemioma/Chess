interface Props {
  startPieces: string[];
  currentPlayer: "black" | "gold";
  startIndex: number;
  width: number;
  targetIndex: number;
}

export const validateBishop = ({
  startPieces,
  currentPlayer,
  startIndex,
  width,
  targetIndex,
}: Props) => {
  let isValid = false;

  if (currentPlayer === "black") {
    if (
      //Right hand side
      startIndex + width + 1 === targetIndex ||
      (!startPieces[startIndex + width + 1] &&
        startIndex + width * 2 + 2 === targetIndex) ||
      (!startPieces[startIndex + width + 1] &&
        !startPieces[startIndex + width * 2 + 2] &&
        startIndex + width * 3 + 3 === targetIndex) ||
      (!startPieces[startIndex + width + 1] &&
        !startPieces[startIndex + width * 2 + 2] &&
        !startPieces[startIndex + width * 3 + 3] &&
        startIndex + width * 4 + 4 === targetIndex) ||
      (!startPieces[startIndex + width + 1] &&
        !startPieces[startIndex + width * 2 + 2] &&
        !startPieces[startIndex + width * 3 + 3] &&
        !startPieces[startIndex + width * 4 + 4] &&
        startIndex + width * 5 + 5 === targetIndex) ||
      (!startPieces[startIndex + width + 1] &&
        !startPieces[startIndex + width * 2 + 2] &&
        !startPieces[startIndex + width * 3 + 3] &&
        !startPieces[startIndex + width * 4 + 4] &&
        !startPieces[startIndex + width * 5 + 5] &&
        startIndex + width * 6 + 6 === targetIndex) ||
      (!startPieces[startIndex + width + 1] &&
        !startPieces[startIndex + width * 2 + 2] &&
        !startPieces[startIndex + width * 3 + 3] &&
        !startPieces[startIndex + width * 4 + 4] &&
        !startPieces[startIndex + width * 5 + 5] &&
        !startPieces[startIndex + width * 6 + 6] &&
        startIndex + width * 7 + 7 === targetIndex) ||
      //Left hand side
      startIndex + width - 1 === targetIndex ||
      (!startPieces[startIndex + width - 1] &&
        startIndex + width * 2 - 2 === targetIndex) ||
      (!startPieces[startIndex + width - 1] &&
        !startPieces[startIndex + width * 2 - 2] &&
        startIndex + width * 3 - 3 === targetIndex) ||
      (!startPieces[startIndex + width - 1] &&
        !startPieces[startIndex + width * 2 - 2] &&
        !startPieces[startIndex + width * 3 - 3] &&
        startIndex + width * 4 - 4 === targetIndex) ||
      (!startPieces[startIndex + width - 1] &&
        !startPieces[startIndex + width * 2 - 2] &&
        !startPieces[startIndex + width * 3 - 3] &&
        !startPieces[startIndex + width * 4 - 4] &&
        startIndex + width * 5 - 5 === targetIndex) ||
      (!startPieces[startIndex + width - 1] &&
        !startPieces[startIndex + width * 2 - 2] &&
        !startPieces[startIndex + width * 3 - 3] &&
        !startPieces[startIndex + width * 4 - 4] &&
        !startPieces[startIndex + width * 5 - 5] &&
        startIndex + width * 6 - 6 === targetIndex) ||
      (!startPieces[startIndex + width - 1] &&
        !startPieces[startIndex + width * 2 - 2] &&
        !startPieces[startIndex + width * 3 - 3] &&
        !startPieces[startIndex + width * 4 - 4] &&
        !startPieces[startIndex + width * 5 - 5] &&
        !startPieces[startIndex + width * 6 - 6] &&
        startIndex + width * 7 - 7 === targetIndex) ||
      //Backwards Right hand side
      startIndex - width + 1 === targetIndex ||
      (!startPieces[startIndex - width + 1] &&
        startIndex - width * 2 + 2 === targetIndex) ||
      (!startPieces[startIndex - width + 1] &&
        !startPieces[startIndex - width * 2 + 2] &&
        startIndex - width * 3 + 3 === targetIndex) ||
      (!startPieces[startIndex - width + 1] &&
        !startPieces[startIndex - width * 2 + 2] &&
        !startPieces[startIndex - width * 3 + 3] &&
        startIndex - width * 4 + 4 === targetIndex) ||
      (!startPieces[startIndex - width + 1] &&
        !startPieces[startIndex - width * 2 + 2] &&
        !startPieces[startIndex - width * 3 + 3] &&
        !startPieces[startIndex - width * 4 + 4] &&
        startIndex - width * 5 + 5 === targetIndex) ||
      (!startPieces[startIndex - width + 1] &&
        !startPieces[startIndex - width * 2 + 2] &&
        !startPieces[startIndex - width * 3 + 3] &&
        !startPieces[startIndex - width * 4 + 4] &&
        !startPieces[startIndex - width * 5 + 5] &&
        startIndex - width * 6 + 6 === targetIndex) ||
      (!startPieces[startIndex - width + 1] &&
        !startPieces[startIndex - width * 2 + 2] &&
        !startPieces[startIndex - width * 3 + 3] &&
        !startPieces[startIndex - width * 4 + 4] &&
        !startPieces[startIndex - width * 5 + 5] &&
        !startPieces[startIndex - width * 6 + 6] &&
        startIndex - width * 7 + 7 === targetIndex) ||
      //Backwards Left hand side
      startIndex - width - 1 === targetIndex ||
      (!startPieces[startIndex - width - 1] &&
        startIndex - width * 2 - 2 === targetIndex) ||
      (!startPieces[startIndex - width - 1] &&
        !startPieces[startIndex - width * 2 - 2] &&
        startIndex - width * 3 - 3 === targetIndex) ||
      (!startPieces[startIndex - width - 1] &&
        !startPieces[startIndex - width * 2 - 2] &&
        !startPieces[startIndex - width * 3 - 3] &&
        startIndex - width * 4 - 4 === targetIndex) ||
      (!startPieces[startIndex - width - 1] &&
        !startPieces[startIndex - width * 2 - 2] &&
        !startPieces[startIndex - width * 3 - 3] &&
        !startPieces[startIndex - width * 4 - 4] &&
        startIndex - width * 5 - 5 === targetIndex) ||
      (!startPieces[startIndex - width - 1] &&
        !startPieces[startIndex - width * 2 - 2] &&
        !startPieces[startIndex - width * 3 - 3] &&
        !startPieces[startIndex - width * 4 - 4] &&
        !startPieces[startIndex - width * 5 - 5] &&
        startIndex - width * 6 - 6 === targetIndex) ||
      (!startPieces[startIndex - width - 1] &&
        !startPieces[startIndex - width * 2 - 2] &&
        !startPieces[startIndex - width * 3 - 3] &&
        !startPieces[startIndex - width * 4 - 4] &&
        !startPieces[startIndex - width * 5 - 5] &&
        !startPieces[startIndex - width * 6 - 6] &&
        startIndex - width * 7 - 7 === targetIndex)
    ) {
      isValid = true;
    }
  } else if (currentPlayer === "gold") {
    if (
      //Right hand side
      startIndex - width + 1 === targetIndex ||
      (!startPieces[startIndex - width + 1] &&
        startIndex - width * 2 + 2 === targetIndex) ||
      (!startPieces[startIndex - width + 1] &&
        !startPieces[startIndex - width * 2 + 2] &&
        startIndex - width * 3 + 3 === targetIndex) ||
      (!startPieces[startIndex - width + 1] &&
        !startPieces[startIndex - width * 2 + 2] &&
        !startPieces[startIndex - width * 3 + 3] &&
        startIndex - width * 4 + 4 === targetIndex) ||
      (!startPieces[startIndex - width + 1] &&
        !startPieces[startIndex - width * 2 + 2] &&
        !startPieces[startIndex - width * 3 + 3] &&
        !startPieces[startIndex - width * 4 + 4] &&
        startIndex - width * 5 + 5 === targetIndex) ||
      (!startPieces[startIndex - width + 1] &&
        !startPieces[startIndex - width * 2 + 2] &&
        !startPieces[startIndex - width * 3 + 3] &&
        !startPieces[startIndex - width * 4 + 4] &&
        !startPieces[startIndex - width * 5 + 5] &&
        startIndex - width * 6 + 6 === targetIndex) ||
      (!startPieces[startIndex - width + 1] &&
        !startPieces[startIndex - width * 2 + 2] &&
        !startPieces[startIndex - width * 3 + 3] &&
        !startPieces[startIndex - width * 4 + 4] &&
        !startPieces[startIndex - width * 5 + 5] &&
        !startPieces[startIndex - width * 6 + 6] &&
        startIndex - width * 7 + 7 === targetIndex) ||
      //Left hand side
      startIndex - width - 1 === targetIndex ||
      (!startPieces[startIndex - width - 1] &&
        startIndex - width * 2 - 2 === targetIndex) ||
      (!startPieces[startIndex - width - 1] &&
        !startPieces[startIndex - width * 2 - 2] &&
        startIndex - width * 3 - 3 === targetIndex) ||
      (!startPieces[startIndex - width - 1] &&
        !startPieces[startIndex - width * 2 - 2] &&
        !startPieces[startIndex - width * 3 - 3] &&
        startIndex - width * 4 - 4 === targetIndex) ||
      (!startPieces[startIndex - width - 1] &&
        !startPieces[startIndex - width * 2 - 2] &&
        !startPieces[startIndex - width * 3 - 3] &&
        !startPieces[startIndex - width * 4 - 4] &&
        startIndex - width * 5 - 5 === targetIndex) ||
      (!startPieces[startIndex - width - 1] &&
        !startPieces[startIndex - width * 2 - 2] &&
        !startPieces[startIndex - width * 3 - 3] &&
        !startPieces[startIndex - width * 4 - 4] &&
        !startPieces[startIndex - width * 5 - 5] &&
        startIndex - width * 6 - 6 === targetIndex) ||
      (!startPieces[startIndex - width - 1] &&
        !startPieces[startIndex - width * 2 - 2] &&
        !startPieces[startIndex - width * 3 - 3] &&
        !startPieces[startIndex - width * 4 - 4] &&
        !startPieces[startIndex - width * 5 - 5] &&
        !startPieces[startIndex - width * 6 - 6] &&
        startIndex - width * 7 - 7 === targetIndex) ||
      //Backwards Right hand side
      startIndex + width + 1 === targetIndex ||
      (!startPieces[startIndex + width + 1] &&
        startIndex + width * 2 + 2 === targetIndex) ||
      (!startPieces[startIndex + width + 1] &&
        !startPieces[startIndex + width * 2 + 2] &&
        startIndex + width * 3 + 3 === targetIndex) ||
      (!startPieces[startIndex + width + 1] &&
        !startPieces[startIndex + width * 2 + 2] &&
        !startPieces[startIndex + width * 3 + 3] &&
        startIndex + width * 4 + 4 === targetIndex) ||
      (!startPieces[startIndex + width + 1] &&
        !startPieces[startIndex + width * 2 + 2] &&
        !startPieces[startIndex + width * 3 + 3] &&
        !startPieces[startIndex + width * 4 + 4] &&
        startIndex + width * 5 + 5 === targetIndex) ||
      (!startPieces[startIndex + width + 1] &&
        !startPieces[startIndex + width * 2 + 2] &&
        !startPieces[startIndex + width * 3 + 3] &&
        !startPieces[startIndex + width * 4 + 4] &&
        !startPieces[startIndex + width * 5 + 5] &&
        startIndex + width * 6 + 6 === targetIndex) ||
      (!startPieces[startIndex + width + 1] &&
        !startPieces[startIndex + width * 2 + 2] &&
        !startPieces[startIndex + width * 3 + 3] &&
        !startPieces[startIndex + width * 4 + 4] &&
        !startPieces[startIndex + width * 5 + 5] &&
        !startPieces[startIndex + width * 6 + 6] &&
        startIndex - width * 7 + 7 === targetIndex) ||
      //Backwards Left hand side
      startIndex + width - 1 === targetIndex ||
      (!startPieces[startIndex + width - 1] &&
        startIndex + width * 2 - 2 === targetIndex) ||
      (!startPieces[startIndex + width - 1] &&
        !startPieces[startIndex + width * 2 - 2] &&
        startIndex + width * 3 - 3 === targetIndex) ||
      (!startPieces[startIndex + width - 1] &&
        !startPieces[startIndex + width * 2 - 2] &&
        !startPieces[startIndex + width * 3 - 3] &&
        startIndex + width * 4 - 4 === targetIndex) ||
      (!startPieces[startIndex + width - 1] &&
        !startPieces[startIndex + width * 2 - 2] &&
        !startPieces[startIndex + width * 3 - 3] &&
        !startPieces[startIndex + width * 4 - 4] &&
        startIndex + width * 5 - 5 === targetIndex) ||
      (!startPieces[startIndex + width - 1] &&
        !startPieces[startIndex + width * 2 - 2] &&
        !startPieces[startIndex + width * 3 - 3] &&
        !startPieces[startIndex + width * 4 - 4] &&
        !startPieces[startIndex + width * 5 - 5] &&
        startIndex + width * 6 - 6 === targetIndex) ||
      (!startPieces[startIndex + width - 1] &&
        !startPieces[startIndex + width * 2 - 2] &&
        !startPieces[startIndex + width * 3 - 3] &&
        !startPieces[startIndex + width * 4 - 4] &&
        !startPieces[startIndex + width * 5 - 5] &&
        !startPieces[startIndex + width * 6 - 6] &&
        startIndex + width * 7 - 7 === targetIndex)
    ) {
      isValid = true;
    }
  }

  return isValid;
};
