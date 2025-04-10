let boardState = new Array(9).fill(null);

export function getBoardState() {
  return [...boardState];
}

export function updateCell(index, value) {
  if (index >= 0 && index < 9) {
    if (boardState[index] === null) {
      const newState = [...boardState];
      newState[index] = value;
      boardState = newState;
      return true;
    }
    return false;
  }
}

export function getCellValue(index) {
  return boardState[index];
}

export function containsValue(value) {
  return boardState.includes(value);
}

export function setBoardState(newBoardState) {
  if (Array.isArray(newBoardState) && newBoardState.length === 9) {
    boardState = [...newBoardState];
    return true;
  } else {
    return false;
  }
}

export function resetBoardState() {
  boardState = new Array(9).fill(null);
  return boardState;
}

export function isBoardFull() {
  return boardState.every((cell) => cell !== null);
}
