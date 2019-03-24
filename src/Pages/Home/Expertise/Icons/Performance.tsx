import React, { FC } from 'react';

import { IconBase } from './IconBase';

const Icon: FC<{ color?: string; className?: string }> = ({ className }) => (
  <span className={className}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -125 937.5 937">
      <g>
        <path d="M 921.875 562.75 L 890.625 562.75 L 890.625 78.375 C 890.570312 35.25 855.625 0.304688 812.5 0.25 L 125 0.25 C 81.875 0.304688 46.929688 35.25 46.875 78.375 L 46.875 562.75 L 15.625 562.75 C 6.992188 562.75 0 569.742188 0 578.375 L 0 625.25 C 0 659.765625 27.984375 687.75 62.5 687.75 L 875 687.75 C 909.515625 687.75 937.5 659.765625 937.5 625.25 L 937.5 578.375 C 937.5 569.742188 930.507812 562.75 921.875 562.75 Z M 78.125 78.375 C 78.125 52.492188 99.117188 31.5 125 31.5 L 812.5 31.5 C 838.382812 31.5 859.375 52.492188 859.375 78.375 L 859.375 562.75 L 828.125 562.75 L 828.125 109.625 C 828.125 83.742188 807.132812 62.75 781.25 62.75 L 156.25 62.75 C 130.367188 62.75 109.375 83.742188 109.375 109.625 L 109.375 562.75 L 78.125 562.75 Z M 796.875 109.625 L 796.875 562.75 L 564.34375 562.75 C 547.664062 562.65625 532.402344 572.082031 525 587.015625 C 522.890625 591.3125 518.496094 594.03125 513.703125 594 L 423.71875 594 C 418.921875 594.03125 414.539062 591.3125 412.421875 587.015625 C 405.03125 572.101562 389.800781 562.691406 373.15625 562.75 L 140.625 562.75 L 140.625 109.625 C 140.625 100.992188 147.617188 94 156.25 94 L 781.25 94 C 789.882812 94 796.875 100.992188 796.875 109.625 Z M 906.25 625.25 C 906.25 642.511719 892.261719 656.5 875 656.5 L 62.5 656.5 C 45.238281 656.5 31.25 642.511719 31.25 625.25 L 31.25 594 L 373.15625 594 C 377.953125 593.96875 382.335938 596.6875 384.453125 600.984375 C 391.84375 615.898438 407.074219 625.308594 423.71875 625.25 L 513.78125 625.25 C 530.460938 625.34375 545.722656 615.917969 553.125 600.984375 C 555.230469 596.710938 559.574219 594 564.34375 594 L 906.25 594 Z M 906.25 625.25 " />
        <path d="M 468.75 187.75 C 384.429688 187.789062 305.8125 230.304688 259.617188 300.839844 C 213.429688 371.382812 205.882812 460.449219 239.5625 537.75 L 268.203125 525.25 C 258.304688 502.472656 252.417969 478.15625 250.789062 453.375 L 281.953125 453.375 C 284.492188 484.28125 294.703125 514.058594 311.640625 540.035156 L 337.832031 522.964844 C 295.351562 457.648438 307.480469 371.011719 366.28125 319.882812 C 425.074219 268.746094 512.546875 268.746094 571.347656 319.882812 C 630.136719 371.011719 642.28125 457.648438 599.800781 522.964844 L 625.980469 540.035156 C 642.882812 514.046875 653.046875 484.265625 655.546875 453.375 L 686.710938 453.375 C 685.082031 478.15625 679.195312 502.472656 669.296875 525.25 L 697.9375 537.75 C 731.617188 460.449219 724.070312 371.382812 677.882812 300.839844 C 631.6875 230.304688 553.070312 187.789062 468.75 187.75 Z M 282.039062 422.125 L 250.789062 422.125 C 254.121094 375.054688 272.65625 330.328125 303.625 294.722656 L 325.707031 316.792969 C 300.511719 346.492188 285.253906 383.316406 282.039062 422.125 Z M 453.125 251.039062 C 414.316406 254.253906 377.492188 269.511719 347.792969 294.707031 L 325.722656 272.625 C 361.328125 241.65625 406.054688 223.121094 453.125 219.789062 Z M 589.707031 294.707031 C 560.007812 269.511719 523.183594 254.253906 484.375 251.039062 L 484.375 219.789062 C 531.445312 223.121094 576.171875 241.65625 611.777344 272.625 Z M 655.460938 422.125 C 652.246094 383.316406 636.988281 346.492188 611.792969 316.792969 L 633.875 294.722656 C 664.84375 330.328125 683.378906 375.054688 686.710938 422.125 Z M 655.460938 422.125 " />
        <path d="M 488.828125 395.5625 C 482.574219 392.511719 475.707031 390.90625 468.75 390.875 C 442.867188 390.875 421.875 411.867188 421.875 437.75 C 421.875 463.632812 442.867188 484.625 468.75 484.625 C 494.632812 484.625 515.625 463.632812 515.625 437.75 C 515.59375 430.792969 513.988281 423.925781 510.9375 417.671875 L 573.558594 355.046875 L 551.464844 332.953125 Z M 468.75 453.375 C 460.117188 453.375 453.125 446.382812 453.125 437.75 C 453.125 429.117188 460.117188 422.125 468.75 422.125 C 477.382812 422.125 484.375 429.117188 484.375 437.75 C 484.375 446.382812 477.382812 453.375 468.75 453.375 Z M 468.75 453.375 " />
        <path d="M 406.25 515.875 L 484.375 515.875 L 484.375 547.125 L 406.25 547.125 Z M 406.25 515.875 " />
        <path d="M 515.625 515.875 L 546.875 515.875 L 546.875 547.125 L 515.625 547.125 Z M 515.625 515.875 " />
        <path d="M 171.875 125.25 L 203.125 125.25 L 203.125 156.5 L 171.875 156.5 Z M 171.875 125.25 " />
        <path d="M 296.875 125.25 L 328.125 125.25 L 328.125 156.5 L 296.875 156.5 Z M 296.875 125.25 " />
        <path d="M 171.875 187.75 L 250 187.75 L 250 219 L 171.875 219 Z M 171.875 187.75 " />
        <path d="M 625 125.25 L 765.625 125.25 L 765.625 156.5 L 625 156.5 Z M 625 125.25 " />
        <path d="M 671.875 187.75 L 765.625 187.75 L 765.625 219 L 671.875 219 Z M 671.875 187.75 " />
        <path d="M 234.375 125.25 L 265.625 125.25 L 265.625 156.5 L 234.375 156.5 Z M 234.375 125.25 " />
      </g>
    </svg>
  </span>
);

export const IconPerformance = IconBase.withComponent(Icon);