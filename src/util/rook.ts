interface Props {
  startPieces: string[];
  currentPlayer: "black" | "gold";
  startIndex: number;
  width: number;
  targetIndex: number;
}

export const validateRook = ({
  startPieces,
  currentPlayer,
  startIndex,
  width,
  targetIndex,
}: Props) => {
  let isValid = false;

  if (currentPlayer === "black") {
    if (
      //Straight Down
      startIndex + width === targetIndex ||
      (!startPieces[startIndex + width] &&
        startIndex + width * 2 === targetIndex) ||
      (!startPieces[startIndex + width] &&
        !startPieces[startIndex + width * 2] &&
        startIndex + width * 3 === targetIndex) ||
      (!startPieces[startIndex + width] &&
        !startPieces[startIndex + width * 2] &&
        !startPieces[startIndex + width * 3] &&
        startIndex + width * 4 === targetIndex) ||
      (!startPieces[startIndex + width] &&
        !startPieces[startIndex + width * 2] &&
        !startPieces[startIndex + width * 3] &&
        !startPieces[startIndex + width * 4] &&
        startIndex + width * 5 === targetIndex) ||
      (!startPieces[startIndex + width] &&
        !startPieces[startIndex + width * 2] &&
        !startPieces[startIndex + width * 3] &&
        !startPieces[startIndex + width * 4] &&
        !startPieces[startIndex + width * 5] &&
        startIndex + width * 6 === targetIndex) ||
      (!startPieces[startIndex + width] &&
        !startPieces[startIndex + width * 2] &&
        !startPieces[startIndex + width * 3] &&
        !startPieces[startIndex + width * 4] &&
        !startPieces[startIndex + width * 5] &&
        !startPieces[startIndex + width * 6] &&
        startIndex + width * 7 === targetIndex) ||
      //Straight up
      startIndex - width === targetIndex ||
      (!startPieces[startIndex - width] &&
        startIndex - width * 2 === targetIndex) ||
      (!startPieces[startIndex - width] &&
        !startPieces[startIndex - width * 2] &&
        startIndex - width * 3 === targetIndex) ||
      (!startPieces[startIndex - width] &&
        !startPieces[startIndex - width * 2] &&
        !startPieces[startIndex - width * 3] &&
        startIndex - width * 4 === targetIndex) ||
      (!startPieces[startIndex - width] &&
        !startPieces[startIndex - width * 2] &&
        !startPieces[startIndex - width * 3] &&
        !startPieces[startIndex - width * 4] &&
        startIndex - width * 5 === targetIndex) ||
      (!startPieces[startIndex - width] &&
        !startPieces[startIndex - width * 2] &&
        !startPieces[startIndex - width * 3] &&
        !startPieces[startIndex - width * 4] &&
        !startPieces[startIndex - width * 5] &&
        startIndex - width * 6 === targetIndex) ||
      (!startPieces[startIndex - width] &&
        !startPieces[startIndex - width * 2] &&
        !startPieces[startIndex - width * 3] &&
        !startPieces[startIndex - width * 4] &&
        !startPieces[startIndex - width * 5] &&
        !startPieces[startIndex - width * 6] &&
        startIndex - width * 7 === targetIndex) ||
      //Stright Right
      startIndex + 1 === targetIndex ||
      (!startPieces[startIndex + 1] && startIndex + 2 === targetIndex) ||
      (!startPieces[startIndex + 1] &&
        !startPieces[startIndex + 2] &&
        startIndex + 3 === targetIndex) ||
      (!startPieces[startIndex + 1] &&
        !startPieces[startIndex + 2] &&
        !startPieces[startIndex + 3] &&
        startIndex + 4 === targetIndex) ||
      (!startPieces[startIndex + 1] &&
        !startPieces[startIndex + 2] &&
        !startPieces[startIndex + 3] &&
        !startPieces[startIndex + 4] &&
        startIndex + 5 === targetIndex) ||
      (!startPieces[startIndex + 1] &&
        !startPieces[startIndex + 2] &&
        !startPieces[startIndex + 3] &&
        !startPieces[startIndex + 4] &&
        !startPieces[startIndex + 5] &&
        startIndex + 6 === targetIndex) ||
      (!startPieces[startIndex + 1] &&
        !startPieces[startIndex + 2] &&
        !startPieces[startIndex + 3] &&
        !startPieces[startIndex + 4] &&
        !startPieces[startIndex + 5] &&
        !startPieces[startIndex + 6] &&
        startIndex + 7 === targetIndex) ||
      //Straight Left
      startIndex - 1 === targetIndex ||
      (!startPieces[startIndex - 1] && startIndex - 2 === targetIndex) ||
      (!startPieces[startIndex - 1] &&
        !startPieces[startIndex - 2] &&
        startIndex - 3 === targetIndex) ||
      (!startPieces[startIndex - 1] &&
        !startPieces[startIndex - 2] &&
        !startPieces[startIndex - 3] &&
        startIndex - 4 === targetIndex) ||
      (!startPieces[startIndex - 1] &&
        !startPieces[startIndex - 2] &&
        !startPieces[startIndex - 3] &&
        !startPieces[startIndex - 4] &&
        startIndex - 5 === targetIndex) ||
      (!startPieces[startIndex - 1] &&
        !startPieces[startIndex - 2] &&
        !startPieces[startIndex - 3] &&
        !startPieces[startIndex - 4] &&
        !startPieces[startIndex - 5] &&
        startIndex - 6 === targetIndex) ||
      (!startPieces[startIndex - 1] &&
        !startPieces[startIndex - 2] &&
        !startPieces[startIndex - 3] &&
        !startPieces[startIndex - 4] &&
        !startPieces[startIndex - 5] &&
        !startPieces[startIndex - 6] &&
        startIndex - 7 === targetIndex)
    ) {
      isValid = true;
    }
  } else if (currentPlayer === "gold") {
    if (
      //Straight Up
      startIndex - width === targetIndex ||
      (!startPieces[startIndex - width] &&
        startIndex - width * 2 === targetIndex) ||
      (!startPieces[startIndex - width] &&
        !startPieces[startIndex - width * 2] &&
        startIndex - width * 3 === targetIndex) ||
      (!startPieces[startIndex - width] &&
        !startPieces[startIndex - width * 2] &&
        !startPieces[startIndex - width * 3] &&
        startIndex - width * 4 === targetIndex) ||
      (!startPieces[startIndex - width] &&
        !startPieces[startIndex - width * 2] &&
        !startPieces[startIndex - width * 3] &&
        !startPieces[startIndex - width * 4] &&
        startIndex - width * 5 === targetIndex) ||
      (!startPieces[startIndex - width] &&
        !startPieces[startIndex - width * 2] &&
        !startPieces[startIndex - width * 3] &&
        !startPieces[startIndex - width * 4] &&
        !startPieces[startIndex - width * 5] &&
        startIndex - width * 6 === targetIndex) ||
      (!startPieces[startIndex - width] &&
        !startPieces[startIndex - width * 2] &&
        !startPieces[startIndex - width * 3] &&
        !startPieces[startIndex - width * 4] &&
        !startPieces[startIndex - width * 5] &&
        !startPieces[startIndex - width * 6] &&
        startIndex - width * 7 === targetIndex) ||
      //Straight Down
      startIndex + width === targetIndex ||
      (!startPieces[startIndex + width] &&
        startIndex + width * 2 === targetIndex) ||
      (!startPieces[startIndex + width] &&
        !startPieces[startIndex + width * 2] &&
        startIndex + width * 3 === targetIndex) ||
      (!startPieces[startIndex + width] &&
        !startPieces[startIndex + width * 2] &&
        !startPieces[startIndex + width * 3] &&
        startIndex + width * 4 === targetIndex) ||
      (!startPieces[startIndex + width] &&
        !startPieces[startIndex + width * 2] &&
        !startPieces[startIndex + width * 3] &&
        !startPieces[startIndex + width * 4] &&
        startIndex + width * 5 === targetIndex) ||
      (!startPieces[startIndex + width] &&
        !startPieces[startIndex + width * 2] &&
        !startPieces[startIndex + width * 3] &&
        !startPieces[startIndex + width * 4] &&
        !startPieces[startIndex + width * 5] &&
        startIndex + width * 6 === targetIndex) ||
      (!startPieces[startIndex + width] &&
        !startPieces[startIndex + width * 2] &&
        !startPieces[startIndex + width * 3] &&
        !startPieces[startIndex + width * 4] &&
        !startPieces[startIndex + width * 5] &&
        !startPieces[startIndex + width * 6] &&
        startIndex + width * 7 === targetIndex) ||
      //Stright Right
      startIndex + 1 === targetIndex ||
      (!startPieces[startIndex + 1] && startIndex + 2 === targetIndex) ||
      (!startPieces[startIndex + 1] &&
        !startPieces[startIndex + 2] &&
        startIndex + 3 === targetIndex) ||
      (!startPieces[startIndex + 1] &&
        !startPieces[startIndex + 2] &&
        !startPieces[startIndex + 3] &&
        startIndex + 4 === targetIndex) ||
      (!startPieces[startIndex + 1] &&
        !startPieces[startIndex + 2] &&
        !startPieces[startIndex + 3] &&
        !startPieces[startIndex + 4] &&
        startIndex + 5 === targetIndex) ||
      (!startPieces[startIndex + 1] &&
        !startPieces[startIndex + 2] &&
        !startPieces[startIndex + 3] &&
        !startPieces[startIndex + 4] &&
        !startPieces[startIndex + 5] &&
        startIndex + 6 === targetIndex) ||
      (!startPieces[startIndex + 1] &&
        !startPieces[startIndex + 2] &&
        !startPieces[startIndex + 3] &&
        !startPieces[startIndex + 4] &&
        !startPieces[startIndex + 5] &&
        !startPieces[startIndex + 6] &&
        startIndex + 7 === targetIndex) ||
      //Straight Left
      startIndex - 1 === targetIndex ||
      (!startPieces[startIndex - 1] && startIndex - 2 === targetIndex) ||
      (!startPieces[startIndex - 1] &&
        !startPieces[startIndex - 2] &&
        startIndex - 3 === targetIndex) ||
      (!startPieces[startIndex - 1] &&
        !startPieces[startIndex - 2] &&
        !startPieces[startIndex - 3] &&
        startIndex - 4 === targetIndex) ||
      (!startPieces[startIndex - 1] &&
        !startPieces[startIndex - 2] &&
        !startPieces[startIndex - 3] &&
        !startPieces[startIndex - 4] &&
        startIndex - 5 === targetIndex) ||
      (!startPieces[startIndex - 1] &&
        !startPieces[startIndex - 2] &&
        !startPieces[startIndex - 3] &&
        !startPieces[startIndex - 4] &&
        !startPieces[startIndex - 5] &&
        startIndex - 6 === targetIndex) ||
      (!startPieces[startIndex - 1] &&
        !startPieces[startIndex - 2] &&
        !startPieces[startIndex - 3] &&
        !startPieces[startIndex - 4] &&
        !startPieces[startIndex - 5] &&
        !startPieces[startIndex - 6] &&
        startIndex - 7 === targetIndex)
    ) {
      isValid = true;
    }
  }

  return isValid;
};
