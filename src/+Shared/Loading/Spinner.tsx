import React, { FC, useContext } from 'react';
import { ThemeContext } from 'src/Theme';

export const Spinner: FC<{ color?: string }> = ({ color }) => {
  const {
    colorSet: { primary },
  } = useContext(ThemeContext);

  return (
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <defs>
          <style>{`
.fill-color {
  fill: ${color || primary};
}`}</style>
          <filter
            id="tail-0.a4db4fdd84ecd"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
            color-interpolation-filters="sRGB"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            <feColorMatrix mode="matrix" values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 60 -40" result="cm" />
          </filter>
        </defs>
        <g filter="url(#tail-0.a4db4fdd84ecd)" transform="rotate(54 50 50)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
            dur="4s"
            begin="0s"
            repeatCount="indefinite"
          />
          <g transform="rotate(333.474 50 50)">
            <g transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="19" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.13333333333333333 0 0.03333333333333333 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(331.178 50 50)">
            <g transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="18" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.16666666666666669 0 0.06666666666666667 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(328.576 50.0001 50)">
            <g transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="17" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.2 0 0.1 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(325.612 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="16" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.23333333333333334 0 0.13333333333333333 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(322.212 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="15" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.26666666666666666 0 0.16666666666666666 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(318.287 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="14" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.30000000000000004 0 0.2 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(314.708 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="13" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.33333333333333337 0 0.23333333333333334 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(309.018 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="12" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.3666666666666667 0 0.26666666666666666 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(302.443 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="11" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.4 0 0.3 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(294.767 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="10" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.43333333333333335 0 0.3333333333333333 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(285.715 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="9" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.4666666666666667 0 0.36666666666666664 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(274.96 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="8" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.5 0 0.4 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(263.29 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="7" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.5333333333333333 0 0.43333333333333335 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(247.243 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="6" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.5666666666666667 0 0.4666666666666667 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(233.28 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="5" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.6 0 0.5 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(210.448 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="4" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.6333333333333333 0 0.5333333333333333 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(189.723 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="3" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.6666666666666666 0 0.5666666666666667 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(167.547 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="2" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.7 0 0.6 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(151.39 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="1" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.7333333333333333 0 0.6333333333333333 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
          <g transform="rotate(134.242 50 50)">
            <g ng-attr-transform="translate(50 {{config.cy}})" transform="translate(50 19.6)">
              <circle cx="0" cy="0" r="0" className="fill-color" transform="scale(0.48)" />
            </g>
            <animateTransform
              attributeName="transform"
              calcMode="spline"
              type="rotate"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
              keySplines="0.7666666666666666 0 0.6666666666666666 1"
              repeatCount="indefinite"
              dur="1"
            />
          </g>
        </g>
      </svg>
    </span>
  );
};
