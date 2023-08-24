import {
  FaChessKing,
  FaChessQueen,
  FaChessKnight,
  FaChessBishop,
  FaChessRook,
  FaChessPawn,
} from "react-icons/fa";

export const getColor = (index: number) => {
  let color;

  const row = Math.floor((63 - index) / 8) + 1;

  if (row % 2 === 0) {
    index % 2 === 0 ? (color = "gray") : (color = "white");
  } else {
    index % 2 === 0 ? (color = "white") : (color = "gray");
  }

  return color;
};

export const getPiece = (pieceName: string) => {
  let Piece;

  if (pieceName === "king" || pieceName === "king2") {
    Piece = FaChessKing;
  } else if (pieceName === "queen" || pieceName === "queen2") {
    Piece = FaChessQueen;
  } else if (pieceName === "knight" || pieceName === "knight2") {
    Piece = FaChessKnight;
  } else if (pieceName === "bishop" || pieceName === "bishop2") {
    Piece = FaChessBishop;
  } else if (pieceName === "rook" || pieceName === "rook2") {
    Piece = FaChessRook;
  } else if (pieceName === "pawn" || pieceName === "pawn2") {
    Piece = FaChessPawn;
  } else {
    Piece = "";
  }

  return Piece;
};

export const initialArrangement = [
  "rook",
  "knight",
  "bishop",
  "queen",
  "king",
  "bishop",
  "knight",
  "rook",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
  "pawn",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "pawn2",
  "pawn2",
  "pawn2",
  "pawn2",
  "pawn2",
  "pawn2",
  "pawn2",
  "pawn2",
  "rook2",
  "knight2",
  "bishop2",
  "queen2",
  "king2",
  "bishop2",
  "knight2",
  "rook2",
];
