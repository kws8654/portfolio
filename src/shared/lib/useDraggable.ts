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
  scaleX: number;
  scaleY: number;
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

      const diffX = (event.clientX - state.originX) / state.scaleX;
      const diffY = (event.clientY - state.originY) / state.scaleY;
      const nextLeft = Math.min(Math.max(0, state.originLeft + diffX), state.maxLeft);
      const nextTop = Math.min(Math.max(0, state.originTop + diffY), state.maxTop);

      state.element.style.left = `${nextLeft}px`;
      state.element.style.top = `${nextTop}px`;
    };

    const onMouseUp = () => {
      dragStateRef.current = null;
    };

    const onMouseDown = (event: MouseEvent) => {
      const container = containerRef.current;
      if (!container) return;

      const target = event.target as Node | null;
      const match = items.find(({ ref }) => {
        const element = ref.current;
        return element && (element === target || (target && element.contains(target)));
      });
      if (!match?.ref.current) return;

      const element = match.ref.current;
      event.preventDefault();

      const { width: containerRectWidth, height: containerRectHeight } =
        container.getBoundingClientRect();
      const scaleX = containerRectWidth / container.offsetWidth || 1;
      const scaleY = containerRectHeight / container.offsetHeight || 1;

      dragStateRef.current = {
        element,
        originX: event.clientX,
        originY: event.clientY,
        originLeft: element.offsetLeft,
        originTop: element.offsetTop,
        maxLeft: container.offsetWidth - element.offsetWidth,
        maxTop: container.offsetHeight - element.offsetHeight,
        scaleX,
        scaleY,
      };
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    containerRef.current?.addEventListener('mousedown', onMouseDown);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      containerRef.current?.removeEventListener('mousedown', onMouseDown);
    };
  }, [containerRef, items]);
};
