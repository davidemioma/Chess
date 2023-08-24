interface Props {
  currentPlayer: "black" | "gold";
  startIndex: number;
  width: number;
  targetIndex: number;
}

export const validateKing = ({
  currentPlayer,
  startIndex,
  width,
  targetIndex,
}: Props) => {
  let isValid = false;

  if (currentPlayer === "black") {
    if (
      startIndex + 1 === targetIndex ||
      startIndex - 1 === targetIndex ||
      startIndex + width === targetIndex ||
      startIndex - width === targetIndex ||
      startIndex + width - 1 === targetIndex ||
      startIndex + width + 1 === targetIndex ||
      startIndex - width - 1 === targetIndex ||
      startIndex - width + 1 === targetIndex
    ) {
      isValid = true;
    }
  } else if (currentPlayer === "gold") {
    if (
      startIndex + 1 === targetIndex ||
      startIndex - 1 === targetIndex ||
      startIndex - width === targetIndex ||
      startIndex + width === targetIndex ||
      startIndex - width - 1 === targetIndex ||
      startIndex - width + 1 === targetIndex ||
      startIndex + width - 1 === targetIndex ||
      startIndex + width + 1 === targetIndex
    ) {
      isValid = true;
    }
  }

  return isValid;
};
