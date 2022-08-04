import React from 'react';
import { Path } from 'react-native-svg';
import { FxSvg, FxSvgProps } from '../svg/svg';

export const FxChevronDownIcon = (props: FxSvgProps) => (
  <FxSvg width={12} height={7} viewBox="0 0 12 7" {...props}>
    <Path d="M6 5.5L6.35355 5.85355L6 6.20711L5.64645 5.85355L6 5.5ZM11.3536 0.853553L6.35355 5.85355L5.64645 5.14645L10.6464 0.146447L11.3536 0.853553ZM5.64645 5.85355L0.646446 0.853554L1.35355 0.146447L6.35355 5.14645L5.64645 5.85355Z" />
  </FxSvg>
);

export const FxCloseIcon = (props: FxSvgProps) => (
  <FxSvg width="18" height="18" viewBox="0 0 18 18" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M16.4697 17.5303C16.7626 17.8232 17.2374 17.8232 17.5303 17.5303C17.8232 17.2374 17.8232 16.7626 17.5303 16.4697L10.0607 9L17.5303 1.53033C17.8232 1.23744 17.8232 0.762564 17.5303 0.469669C17.2374 0.176777 16.7626 0.176777 16.4697 0.469669L9 7.93934L1.53033 0.469669C1.23744 0.176777 0.762564 0.176777 0.469669 0.469669C0.176777 0.762564 0.176777 1.23744 0.469669 1.53033L7.93934 9L0.46967 16.4697C0.176777 16.7626 0.176777 17.2374 0.46967 17.5303C0.762563 17.8232 1.23744 17.8232 1.53033 17.5303L9 10.0607L16.4697 17.5303Z"
    />
  </FxSvg>
);

export const FxDownArrowIcon = (props: FxSvgProps) => (
  <FxSvg width={14} height={9} viewBox="0 0 14 8" {...props}>
    <Path d="M7 7.49585L14 0.495849H0L7 7.49585Z" />
  </FxSvg>
);

export const FxExclamationIcon = (props: FxSvgProps) => (
  <FxSvg width={12} height={12} viewBox="0 0 12 12" {...props}>
    <Path d="M6 11.25C4.60761 11.25 3.27226 10.6969 2.28769 9.71231C1.30312 8.72774 0.75 7.39239 0.75 6C0.75 4.60761 1.30312 3.27226 2.28769 2.28769C3.27226 1.30312 4.60761 0.75 6 0.75C7.39239 0.75 8.72774 1.30312 9.71231 2.28769C10.6969 3.27226 11.25 4.60761 11.25 6C11.25 7.39239 10.6969 8.72774 9.71231 9.71231C8.72774 10.6969 7.39239 11.25 6 11.25ZM6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 4.4087 11.3679 2.88258 10.2426 1.75736C9.11742 0.632141 7.5913 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12Z" />
    <Path d="M5.25146 8.25C5.25146 8.1515 5.27086 8.05398 5.30856 7.96298C5.34625 7.87199 5.40149 7.78931 5.47113 7.71967C5.54078 7.65002 5.62346 7.59478 5.71445 7.55709C5.80545 7.5194 5.90297 7.5 6.00146 7.5C6.09996 7.5 6.19748 7.5194 6.28848 7.55709C6.37947 7.59478 6.46215 7.65002 6.53179 7.71967C6.60144 7.78931 6.65668 7.87199 6.69437 7.96298C6.73207 8.05398 6.75146 8.1515 6.75146 8.25C6.75146 8.44891 6.67245 8.63967 6.53179 8.78033C6.39114 8.92098 6.20038 9 6.00146 9C5.80255 9 5.61179 8.92098 5.47113 8.78033C5.33048 8.63967 5.25146 8.44891 5.25146 8.25ZM5.32496 3.74625C5.31498 3.65163 5.32499 3.55597 5.35437 3.46547C5.38374 3.37497 5.43181 3.29166 5.49545 3.22094C5.5591 3.15022 5.63691 3.09367 5.72382 3.05496C5.81074 3.01625 5.90482 2.99625 5.99996 2.99625C6.09511 2.99625 6.18919 3.01625 6.27611 3.05496C6.36302 3.09367 6.44083 3.15022 6.50448 3.22094C6.56812 3.29166 6.61619 3.37497 6.64556 3.46547C6.67494 3.55597 6.68495 3.65163 6.67496 3.74625L6.41247 6.3765C6.40365 6.47983 6.35637 6.57608 6.27998 6.64622C6.2036 6.71637 6.10367 6.75529 5.99996 6.75529C5.89626 6.75529 5.79633 6.71637 5.71995 6.64622C5.64356 6.57608 5.59628 6.47983 5.58746 6.3765L5.32496 3.74625Z" />
  </FxSvg>
);

export const FxFilterIcon = (props: FxSvgProps) => (
  <FxSvg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <Path d="M9.25 15.5H6.75C6.41848 15.5 6.10054 15.3683 5.86612 15.1339C5.6317 14.8995 5.5 14.5815 5.5 14.25V9.50625L0.86875 4.875C0.634008 4.64166 0.501395 4.32474 0.5 3.99375V1.75C0.5 1.41848 0.631696 1.10054 0.866116 0.866116C1.10054 0.631696 1.41848 0.5 1.75 0.5H14.25C14.5815 0.5 14.8995 0.631696 15.1339 0.866116C15.3683 1.10054 15.5 1.41848 15.5 1.75V3.99375C15.4986 4.32474 15.366 4.64166 15.1313 4.875L10.5 9.50625V14.25C10.5 14.5815 10.3683 14.8995 10.1339 15.1339C9.89946 15.3683 9.58152 15.5 9.25 15.5ZM1.75 1.75V3.99375L6.75 8.99375V14.25H9.25V8.99375L14.25 3.99375V1.75H1.75Z" />
  </FxSvg>
);

export const FxLoadingSpinnerIcon = (props: FxSvgProps) => (
  <FxSvg width={16} height={16} viewBox="0 0 16 16" {...props}>
    <Path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.83045 1.8351C7.86006 2.10965 7.6615 2.35622 7.38695 2.38583C4.5568 2.69107 2.35303 5.08851 2.35303 7.99999C2.35303 10.9115 4.5568 13.3089 7.38695 13.6141C7.6615 13.6438 7.86006 13.8903 7.83045 14.1649C7.80084 14.4394 7.55427 14.638 7.27972 14.6084C3.94724 14.249 1.35303 11.4278 1.35303 7.99999C1.35303 4.57221 3.94724 1.75102 7.27972 1.3916C7.55427 1.36199 7.80084 1.56055 7.83045 1.8351Z"
    />
  </FxSvg>
);