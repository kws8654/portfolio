import { RefObject, useEffect, useRef } from 'react';

type DragItem = {
  id: string;
  ref: RefObject<HTMLElement>;
};

type DragState = {
  element: HTMLElement;
  originX: number;
  originY: number;
  originLeft: number;
  originTop: number;
  maxLeft: number;
  maxTop: number;
};

export const useDraggable = (
  containerRef: RefObject<HTMLElement>,
  items: DragItem[],
): void => {
  const dragStateRef = useRef<DragState | null>(null);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const state = dragStateRef.current;
      if (!state) return;

      const diffX = event.clientX - state.originX;
      const diffY = event.clientY - state.originY;
      const nextLeft = Math.min(Math.max(0, state.originLeft + diffX), state.maxLeft);
      const nextTop = Math.min(Math.max(0, state.originTop + diffY), state.maxTop);

      state.element.style.left = `${nextLeft}px`;
      state.element.style.top = `${nextTop}px`;
    };

    const onMouseUp = () => {
      dragStateRef.current = null;
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    const cleanups = items.map(({ ref }) => {
      const element = ref.current;
      if (!element) return () => undefined;

      const onMouseDown = (event: MouseEvent) => {
        const container = containerRef.current;
        if (!container) return;

        event.preventDefault();
        const { width: boxWidth, height: boxHeight } = element.getBoundingClientRect();
        const { width: containerWidth, height: containerHeight } = container.getBoundingClientRect();

        dragStateRef.current = {
          element,
          originX: event.clientX,
          originY: event.clientY,
          originLeft: element.offsetLeft,
          originTop: element.offsetTop,
          maxLeft: containerWidth - boxWidth,
          maxTop: containerHeight - boxHeight,
        };
      };

      element.addEventListener('mousedown', onMouseDown);
      return () => element.removeEventListener('mousedown', onMouseDown);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [containerRef, items]);
};
