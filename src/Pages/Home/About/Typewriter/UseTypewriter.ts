import { useReducer, useEffect, Reducer, Dispatch, ReducerAction } from 'react';

enum Actions {
  Write = 'WRITE_TEXT',
  Next = 'NEXT_TEXT',
  Erasing = 'ERASING_TEXT',
  Pause = 'PAUSE',
  Waiting = 'WAITING',
}

type Action<T extends string, P extends {} = {}> = { type: T } & P;

type TypewriterState = {
  cancelId: number | null;
  current: 'typing' | 'suspend' | 'waiting' | 'erasing';
  text: string;
  fullText: string;
  charIndex: number;
};

const reducer: Reducer<TypewriterState, Action<Actions, Partial<TypewriterState>>> = (
  state,
  { type, fullText = '', cancelId: potentialCancelId },
) => {
  switch (type) {
    case Actions.Write: {
      const { fullText, charIndex } = state;
      const newCharIndex = fullText[charIndex + 1] === ' ' ? charIndex + 2 : charIndex + 1;
      const updatedText = fullText.substring(0, newCharIndex);
      return { ...state, text: updatedText, charIndex: newCharIndex, current: 'typing' };
    }

    case Actions.Erasing: {
      const { fullText, charIndex } = state;
      const newCharIndex = charIndex - 1;
      const updatedText = fullText.substring(0, newCharIndex);
      return { ...state, text: updatedText, charIndex: newCharIndex, current: 'erasing' };
    }

    case Actions.Next: {
      return { ...state, text: '', fullText, charIndex: 0, current: 'typing' };
    }

    case Actions.Waiting: {
      const cancelId = potentialCancelId || null;
      return { ...state, cancelId, current: 'waiting' };
    }

    default:
      throw new Error('Invalid action');
  }
};

const dispatchIn = (
  dispatch: Dispatch<ReducerAction<typeof reducer>>,
  delay: number,
  command: ReducerAction<typeof reducer>,
  previousCancelId: number | null,
) => {
  if (previousCancelId != null) {
    window.clearTimeout(previousCancelId);
  }
  const cancelId = window.setTimeout(() => {
    dispatch(command);
  }, delay || 1000);
  dispatch({ type: Actions.Waiting, cancelId });
};

export const useTypewriter = (texts: string[]) => {
  const firstText = texts[0];
  const [state, dispatch] = useReducer(reducer, {
    cancelId: null,
    current: 'typing',
    text: '',
    fullText: firstText,
    charIndex: 0,
  });

  useEffect(() => {
    const { current, fullText, charIndex } = state;
    switch (current) {
      case 'typing': {
        if (charIndex >= fullText.length) {
          // Start erasing current full text
          dispatchIn(dispatch, 2800, { type: Actions.Erasing }, state.cancelId);
        } else {
          // Writing current text
          const nextTickIn = charIndex < 3 ? 180 : Math.random() * 80 + 60;
          dispatchIn(dispatch, nextTickIn, { type: Actions.Write }, state.cancelId);
        }
        break;
      }

      case 'erasing':
        if (charIndex > 0) {
          dispatchIn(dispatch, 8, { type: Actions.Erasing }, state.cancelId);
        } else {
          const nextTextIndex = texts.findIndex(t => t === fullText) + 1;
          const nextFullText = nextTextIndex >= texts.length ? firstText : texts[nextTextIndex];

          // Start writing a new text
          dispatchIn(dispatch, 500, { type: Actions.Next, fullText: nextFullText }, state.cancelId);
        }
        break;

      case 'waiting':
      default:
        break;
    }
  });

  return state.text;
};
