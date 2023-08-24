import React, { useState } from "react";
import { validatePawn } from "./util/pawn";
import { validateRook } from "./util/rook";
import { validateQueen } from "./util/queen";
import { validateKnight } from "./util/knight";
import { validateBishop } from "./util/bishop";
import { getColor, getPiece, initialArrangement } from "./util/util";

function App() {
  const width = 8;

  const [startIndex, setStartIndex] = useState(0);

  const [startPieces, setStartPieces] = useState(initialArrangement);

  const [currentPlayer, setCurrentPlayer] = useState<"black" | "gold">("black");

  const onDragStart = (
    e: React.DragEvent<HTMLButtonElement>,
    index: number
  ) => {
    e.dataTransfer.setData("text/plain", index.toString());

    setStartIndex(index);
  };

  const changePlayer = () => {
    setCurrentPlayer((prev) => (prev === "black" ? "gold" : "black"));
  };

  const checkValidity = (targetIndex: number) => {
    const target = startPieces[startIndex];

    switch (target) {
      case "pawn":
        const pawnIsValid = validatePawn({
          currentPlayer,
          startIndex,
          width,
          targetIndex,
          target:
            startPieces[targetIndex] !== "" &&
            (currentPlayer === "black"
              ? startPieces[targetIndex].includes("2")
              : !startPieces[targetIndex].includes("2")),
        });

        return pawnIsValid;

        break;

      case "pawn2":
        const pawn2IsValid = validatePawn({
          currentPlayer,
          startIndex,
          width,
          targetIndex,
          target:
            startPieces[targetIndex] !== "" &&
            (currentPlayer === "black"
              ? startPieces[targetIndex].includes("2")
              : !startPieces[targetIndex].includes("2")),
        });

        return pawn2IsValid;

        break;

      case "knight":
        const knightIsValid = validateKnight({
          currentPlayer,
          startIndex,
          width,
          targetIndex,
        });

        return knightIsValid;

        break;

      case "knight2":
        const knight2IsValid = validateKnight({
          currentPlayer,
          startIndex,
          width,
          targetIndex,
        });

        return knight2IsValid;

        break;

      case "bishop":
        const bishopIsValid = validateBishop({
          startPieces,
          currentPlayer,
          startIndex,
          width,
          targetIndex,
        });

        return bishopIsValid;

        break;

      case "bishop2":
        const bishop2IsValid = validateBishop({
          startPieces,
          currentPlayer,
          startIndex,
          width,
          targetIndex,
        });

        return bishop2IsValid;

        break;

      case "rook":
        const rookIsValid = validateRook({
          startPieces,
          currentPlayer,
          startIndex,
          width,
          targetIndex,
        });

        return rookIsValid;

        break;

      case "rook2":
        const rook2IsValid = validateRook({
          startPieces,
          currentPlayer,
          startIndex,
          width,
          targetIndex,
        });

        return rook2IsValid;

        break;

      case "queen":
        const queenIsValid = validateQueen({
          startPieces,
          currentPlayer,
          startIndex,
          width,
          targetIndex,
        });

        return queenIsValid;

        break;

      case "queen2":
        const queen2IsValid = validateQueen({
          startPieces,
          currentPlayer,
          startIndex,
          width,
          targetIndex,
        });

        return queen2IsValid;

        break;
    }
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();

    const pieceIndex = Number(e.dataTransfer.getData("text/plain"));

    const piece = startPieces[pieceIndex];

    //This is to prevent current user from using opponent pieces.
    if (
      (currentPlayer === "black" && piece.includes("2")) ||
      (currentPlayer === "gold" && !piece.includes("2"))
    ) {
      return;
    }

    //This is to prevent current user from taking out it's own pieces
    const taken =
      currentPlayer === "black" &&
      startPieces[index] !== "" &&
      !startPieces[index].includes("2");

    //This is to prevent opponent user from taking out it's own pieces
    const oppsTaken =
      currentPlayer === "gold" &&
      startPieces[index] !== "" &&
      startPieces[index].includes("2");

    if (taken || oppsTaken) {
      return;
    }

    const isValid = checkValidity(index);

    if (!isValid) return;

    const newPieces = [...startPieces];

    newPieces[index] = piece;

    newPieces[pieceIndex] = "";

    setStartPieces(newPieces);

    changePlayer();
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="relative z-10 grid grid-cols-8 w-[320px] h-[320px] border-2 border-black shadow-md overflow-hidden">
        {startPieces.map((piece, index) => {
          const PieceIcon = getPiece(piece);

          const color = getColor(index);

          return (
            <div
              id={`${index}`}
              key={index}
              className="relative z-[-8] w-[40px] h-[40px] flex items-center justify-center"
              style={{
                backgroundColor: color,
                color: !piece.includes("2") ? "black" : "gold",
              }}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => onDrop(e, index)}
            >
              {PieceIcon !== "" && (
                <button
                  draggable
                  className="relative z-[-10] disabled:cursor-not-allowed"
                  onDragStart={(e) => onDragStart(e, index)}
                  disabled={
                    piece.includes("2")
                      ? currentPlayer === "black"
                      : currentPlayer === "gold"
                  }
                >
                  <PieceIcon className="w-[30px] h-[30px]" />
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;