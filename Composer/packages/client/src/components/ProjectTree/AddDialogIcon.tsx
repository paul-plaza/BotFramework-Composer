// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** @jsx jsx */
import { jsx } from '@emotion/core';
import { NeutralColors } from '@uifabric/fluent-theme';
interface AddDialogIconProps {
  active: boolean;
  className?: string;
  onClick?: () => {};
}

export const AddDialogIcon: React.FC<AddDialogIconProps> = (props) => {
  const { className = '' } = props;

  return (
    <svg
      className={className}
      fill="none"
      height="24"
      viewBox="0 0 50 39"
      width="15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M38.1353 27.6268V30.0021H42.8801V34.7469H45.2553V30.0021H50.0001V27.6268H45.2553V22.8821H42.8801V27.6268H38.1353Z"
        fill={NeutralColors.gray160}
      />
      <path
        d="M30.9862 23.8355H35.7533V35.7533H23.8355V23.8355H28.6026V19.0684H7.15066V23.8355H11.9178V35.7533H0V23.8355H4.76711V16.6849H16.6849V11.9178H11.9178V0H23.8355V11.9178H19.0684V16.6849H30.9862V23.8355ZM14.3013 2.38355V9.53421H21.452V2.38355H14.3013ZM9.53421 33.3698V26.2191H2.38355V33.3698H9.53421ZM33.3698 33.3698V26.2191H26.2191V33.3698H33.3698Z"
        fill={NeutralColors.gray160}
      />
    </svg>
  );
};

export default AddDialogIcon;