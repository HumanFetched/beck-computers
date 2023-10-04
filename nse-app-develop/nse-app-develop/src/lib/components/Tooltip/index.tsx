import React, { useRef, useState } from 'react';
import { usePopper } from 'react-popper';

type ITooltipPosition = 'top' | 'left' | 'right' | 'bottom';

/* eslint-disable-next-line */
export interface TooltipProps {
  title: string;
  placement?: ITooltipPosition;
  maxContent?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  title = 'Tooltip',
  children = 'hover me',
  placement = 'top',
  maxContent = true,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const referenceRef = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const popperRef = useRef<any>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const offsetDecider = (placement: string): any => {
    switch (placement) {
      case 'top':
        return [0, 10];
      case 'left':
        return [0, 10];
      case 'right':
        return [0, 10];
      case 'bottom':
        return [0, 10];
      default:
        return [0, 10];
    }
  };

  const { styles, attributes, update } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: placement,
      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: offsetDecider(placement),
          },
        },
      ],
    },
  );

  return (
    <div className={`${maxContent && ''}`}>
      <div
        ref={referenceRef}
        onMouseOver={() => {
          if (update) update();
          setIsHover(true);
        }}
        onMouseOut={() => setIsHover(false)}
        className="w-fill block truncate "
      >
        {children}
      </div>
      {/* ${isHover ? 'transition duration-300 opacity-100': 'opacity-0'} */}
      <div
        className={`relative flex justify-center items-center`}
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}
      >
        {isHover && (
          <div
            className={'whitespace-pre-line max-w-lg '}
            style={styles.offset}
          >
            <div className="relative mx-2">
              <div
                style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
                className=" text-white text-sm rounded py-1 px-3 right-0 z-50   "
              >
                {title}
                <svg
                  className={`absolute text-black h-2 transform ${
                    placement === 'right'
                      ? 'rotate-90 -left-2 -translate-y-1/2 top-1/2'
                      : placement === 'left'
                      ? '-rotate-90 -right-2 -translate-y-1/2 top-1/2'
                      : placement === 'bottom'
                      ? 'rotate-180 w-full left-0 -top-2'
                      : 'w-full left-0 top-full'
                  }`}
                  x="0px"
                  y="0px"
                  viewBox="0 0 255 255"
                  xmlSpace="preserve"
                >
                  <polygon
                    className="fill-current"
                    points="0,0 127.5,127.5 255,0"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Tooltip;
