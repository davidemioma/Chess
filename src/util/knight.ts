interface Props {
  currentPlayer: "black" | "gold";
  startIndex: number;
  width: number;
  targetIndex: number;
}

export const validateKnight = ({
  currentPlayer,
  startIndex,
  width,
  targetIndex,
}: Props) => {
  let isValid = false;

  if (currentPlayer === "black") {
    if (
      startIndex + width * 2 + 1 === targetIndex ||
      startIndex + width * 2 - 1 === targetIndex ||
      startIndex + width - 2 === targetIndex ||
      startIndex + width + 2 === targetIndex ||
      startIndex - width * 2 + 1 === targetIndex ||
      startIndex - width * 2 - 1 === targetIndex ||
      startIndex - width - 2 === targetIndex ||
      startIndex - width + 2 === targetIndex
    ) {
      isValid = true;
    }
  } else if (currentPlayer === "gold") {
    if (
      startIndex - width * 2 + 1 === targetIndex ||
      startIndex - width * 2 - 1 === targetIndex ||
      startIndex - width - 2 === targetIndex ||
      startIndex - width + 2 === targetIndex ||
      startIndex + width * 2 + 1 === targetIndex ||
      startIndex + width * 2 - 1 === targetIndex ||
      startIndex + width - 2 === targetIndex ||
      startIndex + width + 2 === targetIndex
    ) {
      isValid = true;
    }
  }

  return isValid;
};
