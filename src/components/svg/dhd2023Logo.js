import { useLocation } from 'react-router-dom'

const Dhd2023Logo = ({ menuStatus, currentStepIndex }) => {
  const PrimaryColor = 'var(--primary)'
  const BlackColor = 'var(--black)'
  const WhiteColor = 'var(--white)'

  const location = useLocation()

  let primaryColor = PrimaryColor
  let secondatyColor = BlackColor

  if (
    location.pathname === '/' ||
    location.pathname === '/page/cfp' ||
    location.pathname === '/team' ||
    menuStatus === 'open'
  ) {
    if ([1, 3, 4, 5].includes(currentStepIndex) || menuStatus === 'open') {
      primaryColor = secondatyColor = WhiteColor
    } else {
      primaryColor = PrimaryColor
      secondatyColor = BlackColor
    }
  }

  return (
    <div className="MenuFixed dhd-logo-wrapper">
      <svg
        width="195"
        height="76"
        viewBox="0 0 195 76"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.0763 4.08955C22.5858 5.39079 24.4447 7.15676 25.746 9.4804C27.0472 11.804 27.7908 14.5924 27.7908 17.6596C27.7908 20.7268 27.1401 23.4223 25.746 25.7459C24.3518 28.0695 22.4929 29.8355 20.0763 31.1367C17.5667 32.438 14.7784 32.9957 11.5253 32.9957H0.650635V2.1377H11.4323C14.7784 2.1377 17.5667 2.78831 20.0763 4.08955ZM18.775 25.0953C20.541 23.3293 21.4705 20.8198 21.4705 17.5667C21.4705 14.3136 20.541 11.804 18.775 10.0381C17.0091 8.17916 14.4995 7.34265 11.2464 7.34265H6.87799V27.7907H11.2464C14.4995 27.7907 17.0091 26.9542 18.775 25.0953Z"
          fill={secondatyColor}
        />
        <path
          d="M58.091 2.1377V33.0886H51.8636V19.8903H38.6653V32.9957H32.438V2.1377H38.6653V14.8713H51.8636V2.1377H58.091Z"
          fill={secondatyColor}
        />
        <path
          d="M64.0395 14.1277C65.0619 12.1759 66.3632 10.6887 68.1292 9.66632C69.8022 8.64392 71.754 8.08624 73.7988 8.08624C75.3789 8.08624 76.959 8.45803 78.3532 9.10865C79.8403 9.75927 80.9557 10.6887 81.7922 11.897V0.278809H88.1125V33.0886H81.7922V29.4637C81.0486 30.672 79.9333 31.6944 78.5391 32.3451C77.1449 33.0886 75.5648 33.4604 73.7059 33.4604C71.6611 33.4604 69.7092 32.9027 68.0362 31.8803C66.3632 30.8579 64.969 29.2779 63.9466 27.4189C62.9242 25.4671 62.4595 23.2364 62.4595 20.7269C62.5524 18.2173 63.1101 15.9866 64.0395 14.1277ZM81.0486 16.9161C80.4909 15.8007 79.6544 15.0572 78.632 14.4066C77.6096 13.8489 76.5872 13.57 75.3789 13.57C74.2636 13.57 73.1482 13.8489 72.2188 14.4066C71.2893 14.9642 70.4528 15.8007 69.8951 16.8231C69.2445 17.9385 68.9657 19.1468 68.9657 20.6339C68.9657 22.121 69.2445 23.4223 69.8951 24.5376C70.5457 25.653 71.2893 26.4895 72.3117 27.0472C73.3341 27.6048 74.3565 27.9766 75.4719 27.9766C76.5872 27.9766 77.7026 27.6978 78.725 27.1401C79.7474 26.5824 80.4909 25.7459 81.1415 24.6306C81.6992 23.5152 82.071 22.214 82.071 20.7269C81.8851 19.3327 81.6063 18.0314 81.0486 16.9161Z"
          fill={secondatyColor}
        />
        <path
          d="M95.734 26.0248C98.5224 23.7011 100.846 21.6563 102.519 20.0763C104.192 18.4962 105.586 16.8232 106.702 15.1501C107.817 13.4771 108.375 11.7112 108.375 10.1311C108.375 8.64395 108.003 7.43565 107.352 6.59914C106.609 5.76263 105.586 5.2979 104.099 5.2979C102.612 5.2979 101.497 5.76263 100.66 6.78503C99.8236 7.80744 99.4519 9.10868 99.4519 10.8746H93.4104C93.5033 7.34271 94.6187 4.64728 96.5705 2.78837C98.5224 0.929457 101.125 0 104.192 0C107.538 0 110.141 0.929457 111.907 2.69542C113.673 4.46139 114.602 6.87798 114.602 9.75929C114.602 12.0829 113.951 14.2207 112.743 16.3584C111.535 18.4962 110.048 20.2622 108.468 21.8422C106.888 23.4223 104.75 25.2812 102.24 27.419H115.346V32.531H93.5033V27.8837L95.734 26.0248Z"
          fill={secondatyColor}
        />
        <path
          d="M122.038 4.46146C123.897 1.58015 126.964 0.0930176 131.239 0.0930176C135.515 0.0930176 138.582 1.58015 140.441 4.46146C142.3 7.34278 143.229 11.3394 143.229 16.4515C143.229 21.5635 142.3 25.6531 140.441 28.5344C138.582 31.4157 135.515 32.9028 131.239 32.9028C126.964 32.9028 123.897 31.4157 122.038 28.5344C120.179 25.6531 119.249 21.5635 119.249 16.4515C119.249 11.4324 120.179 7.43572 122.038 4.46146ZM136.63 10.9677C136.351 9.48053 135.794 8.27224 134.957 7.34278C134.121 6.41332 132.912 5.94859 131.239 5.94859C129.566 5.94859 128.358 6.41332 127.521 7.34278C126.685 8.27224 126.127 9.48053 125.848 10.9677C125.57 12.4548 125.384 14.3137 125.384 16.4515C125.384 18.6821 125.477 20.5411 125.755 22.1211C126.034 23.6083 126.592 24.9095 127.428 25.839C128.265 26.7684 129.566 27.2332 131.146 27.2332C132.819 27.2332 134.028 26.7684 134.957 25.839C135.794 24.9095 136.351 23.7012 136.63 22.1211C136.909 20.634 137.002 18.6821 137.002 16.4515C137.002 14.3137 136.909 12.4548 136.63 10.9677Z"
          fill={secondatyColor}
        />
        <path
          d="M149.828 26.0248C152.617 23.7011 154.94 21.6563 156.613 20.0763C158.286 18.4962 159.681 16.8232 160.796 15.1501C161.911 13.4771 162.469 11.7112 162.469 10.1311C162.469 8.64395 162.097 7.43565 161.447 6.59914C160.703 5.76263 159.681 5.2979 158.194 5.2979C156.706 5.2979 155.591 5.76263 154.755 6.78503C153.918 7.80744 153.546 9.10868 153.546 10.8746H147.505C147.598 7.34271 148.713 4.64728 150.665 2.78837C152.617 0.929457 155.219 0 158.286 0C161.633 0 164.235 0.929457 166.001 2.69542C167.767 4.46139 168.696 6.87798 168.696 9.75929C168.696 12.0829 168.046 14.2207 166.837 16.3584C165.629 18.4962 164.142 20.2622 162.562 21.8422C160.982 23.4223 158.844 25.2812 156.335 27.419H169.44V32.531H147.505V27.8837L149.828 26.0248Z"
          fill={secondatyColor}
        />
        <path
          d="M176.504 2.41659C178.456 0.836511 180.965 0 184.125 0C186.263 0 188.122 0.371783 189.702 1.11535C191.282 1.85891 192.397 2.88132 193.141 4.18255C193.885 5.48379 194.349 6.87798 194.349 8.551C194.349 10.4099 193.885 11.99 192.955 13.2912C192.026 14.5925 190.817 15.429 189.516 15.8937V16.0796C191.189 16.6373 192.583 17.5667 193.513 18.868C194.442 20.2622 194.907 21.9352 194.907 24.0729C194.907 25.8389 194.535 27.419 193.699 28.8132C192.862 30.2073 191.654 31.3227 190.074 32.0663C188.494 32.8098 186.635 33.2746 184.404 33.2746C181.058 33.2746 178.363 32.438 176.225 30.765C174.087 29.092 173.065 26.5825 172.879 23.3294H178.92C179.013 24.8165 179.478 25.9318 180.407 26.7684C181.337 27.6049 182.638 28.0696 184.218 28.0696C185.705 28.0696 186.914 27.6049 187.657 26.7684C188.494 25.9318 188.866 24.8165 188.866 23.5153C188.866 21.7493 188.308 20.448 187.193 19.7045C186.077 18.9609 184.311 18.5891 181.988 18.5891H180.686V13.4771H181.988C186.17 13.4771 188.308 12.0829 188.308 9.29457C188.308 7.99333 187.936 7.06387 187.193 6.3203C186.449 5.57674 185.334 5.2979 183.939 5.2979C182.545 5.2979 181.523 5.66969 180.686 6.41325C179.943 7.15682 179.478 8.08627 179.385 9.29457H173.344C173.53 6.32031 174.552 4.08961 176.504 2.41659Z"
          fill={secondatyColor}
        />
        <path
          d="M2.41659 54.9309C1.67302 54.4661 1.0224 53.9085 0.65062 53.1649C0.185891 52.4213 0 51.5848 0 50.6554C0 49.7259 0.185891 48.8894 0.65062 48.1458C1.11535 47.4023 1.67302 46.8446 2.41659 46.3799C3.16015 45.9151 3.99666 45.7292 4.92612 45.7292C5.85558 45.7292 6.69209 45.9151 7.43565 46.3799C8.17922 46.8446 8.73689 47.4023 9.20162 48.1458C9.66635 48.8894 9.85224 49.7259 9.85224 50.6554C9.85224 51.5848 9.66635 52.4213 9.20162 53.1649C8.73689 53.9085 8.17922 54.4661 7.43565 54.9309C6.69209 55.3956 5.85558 55.5815 4.92612 55.5815C3.99666 55.5815 3.16015 55.3956 2.41659 54.9309ZM6.41325 53.4437C6.87798 53.1649 7.15682 52.7931 7.43565 52.3284C7.71449 51.8637 7.80744 51.306 7.80744 50.6554C7.80744 50.0047 7.71449 49.4471 7.43565 48.9823C7.15682 48.5176 6.87798 48.1458 6.41325 47.867C5.94852 47.5882 5.48379 47.4952 4.92612 47.4952C4.36845 47.4952 3.81077 47.5882 3.34604 47.867C2.88132 48.1458 2.50953 48.5176 2.32364 48.9823C2.0448 49.4471 1.95186 50.0047 1.95186 50.6554C1.95186 51.306 2.0448 51.8637 2.32364 52.3284C2.60248 52.7931 2.88132 53.1649 3.34604 53.4437C3.81077 53.7226 4.2755 53.8155 4.92612 53.8155C5.57674 53.8155 5.94852 53.7226 6.41325 53.4437Z"
          fill={secondatyColor}
        />
        <path
          d="M17.8455 50.2837C17.5667 50.7485 17.1949 51.1202 16.7302 51.3991C16.1725 51.6779 15.5219 51.7709 14.7783 51.7709H13.1983V55.4887H11.2464V45.9153H14.7783C15.5219 45.9153 16.1725 46.0082 16.6372 46.2871C17.1949 46.5659 17.5667 46.9377 17.8455 47.3095C18.1244 47.7742 18.2173 48.2389 18.2173 48.7966C18.2173 49.3543 18.1244 49.819 17.8455 50.2837ZM15.8937 49.9119C16.1725 49.6331 16.2655 49.3543 16.2655 48.8895C16.2655 47.9601 15.7078 47.4954 14.6854 47.4954H13.1983V50.2837H14.6854C15.2431 50.2837 15.6148 50.0978 15.8937 49.9119Z"
          fill={secondatyColor}
        />
        <path
          d="M21.4704 47.4024V49.819H24.7235V51.3061H21.4704V53.8157H25.0953V55.3957H19.5186V45.9153H25.0953V47.4954H21.4704V47.4024Z"
          fill={secondatyColor}
        />
        <path
          d="M35.1335 55.4887H33.1816L28.8132 48.8895V55.4887H26.8613V45.9153H28.8132L33.1816 52.5144V45.9153H35.1335V55.4887Z"
          fill={secondatyColor}
        />
        <path
          d="M48.2388 45.9153V55.4887H46.287V51.3991H42.1973V55.4887H40.2455V45.9153H42.1973V49.819H46.287V45.9153H48.2388Z"
          fill={primaryColor}
        />
        <path
          d="M52.0496 45.9153V51.8638C52.0496 52.5144 52.2355 52.9792 52.5143 53.3509C52.8861 53.7227 53.3508 53.9086 53.9085 53.9086C54.5591 53.9086 55.0238 53.7227 55.3956 53.3509C55.7674 52.9792 55.8603 52.5144 55.8603 51.8638V45.9153H57.8122V51.8638C57.8122 52.7003 57.6263 53.3509 57.2545 53.9086C56.8828 54.4663 56.418 54.931 55.8603 55.2098C55.3027 55.4887 54.6521 55.6746 53.9085 55.6746C53.1649 55.6746 52.5143 55.4887 51.9566 55.2098C51.399 54.931 50.9342 54.4663 50.5624 53.9086C50.1907 53.3509 50.0977 52.7003 50.0977 51.8638V45.9153H52.0496Z"
          fill={primaryColor}
        />
        <path
          d="M70.2669 45.9153V55.4887H68.3151V49.2613L65.7126 55.4887H64.2255L61.623 49.2613V55.4887H59.6711V45.9153H61.9018L64.969 53.0721L68.0363 45.9153H70.2669Z"
          fill={primaryColor}
        />
        <path
          d="M77.9814 53.6298H74.1706L73.52 55.4887H71.4752L75.0072 45.9153H77.2379L80.6768 55.4887H78.632L77.9814 53.6298ZM77.5167 52.1426L76.1225 48.146L74.7283 52.1426H77.5167Z"
          fill={primaryColor}
        />
        <path
          d="M90.1573 55.4887H88.2054L83.837 48.8895V55.4887H81.8851V45.9153H83.837L88.2054 52.5144V45.9153H90.1573V55.4887Z"
          fill={primaryColor}
        />
        <path d="M94.061 45.9153V55.4887H92.1091V45.9153H94.061Z" fill={primaryColor} />
        <path
          d="M102.426 45.9153V47.4954H99.8236V55.5816H97.8718V47.4954H95.2693V45.9153H102.426Z"
          fill={primaryColor}
        />
        <path d="M105.772 45.9153V55.4887H103.82V45.9153H105.772Z" fill={primaryColor} />
        <path
          d="M109.583 47.4024V49.819H112.836V51.3061H109.583V53.8157H113.208V55.3957H107.631V45.9153H113.208V47.4954H109.583V47.4024Z"
          fill={primaryColor}
        />
        <path
          d="M116.554 55.2096C115.996 55.0237 115.624 54.652 115.253 54.1872C114.974 53.7225 114.788 53.2578 114.788 52.7001H116.833C116.833 53.0719 117.019 53.4437 117.297 53.6296C117.576 53.8154 117.855 54.0013 118.32 54.0013C118.785 54.0013 119.156 53.9084 119.342 53.7225C119.621 53.5366 119.714 53.2578 119.714 52.886C119.714 52.6072 119.621 52.3283 119.435 52.1424C119.249 51.9565 119.063 51.7706 118.785 51.6777C118.506 51.5848 118.134 51.4918 117.669 51.3059C117.019 51.12 116.554 50.9341 116.182 50.7482C115.81 50.5624 115.439 50.2835 115.16 49.9117C114.881 49.5399 114.695 49.0752 114.695 48.4246C114.695 47.8669 114.881 47.4022 115.16 46.9375C115.439 46.4727 115.81 46.1939 116.368 46.008C116.926 45.8221 117.483 45.6362 118.134 45.6362C119.156 45.6362 119.9 45.9151 120.551 46.3798C121.201 46.8445 121.48 47.4951 121.573 48.4246H119.435C119.435 48.0528 119.249 47.8669 118.97 47.5881C118.692 47.4022 118.32 47.3093 117.948 47.3093C117.576 47.3093 117.297 47.4022 117.019 47.5881C116.833 47.774 116.647 48.0528 116.647 48.4246C116.647 48.7034 116.74 48.8893 116.926 49.0752C117.112 49.2611 117.297 49.3541 117.576 49.447C117.855 49.5399 118.227 49.6329 118.599 49.8188C119.249 50.0047 119.714 50.1906 120.086 50.3765C120.458 50.5623 120.829 50.8412 121.108 51.213C121.387 51.5848 121.573 52.0495 121.573 52.7001C121.573 53.2578 121.48 53.7225 121.201 54.0943C120.922 54.559 120.551 54.9308 119.993 55.1167C119.435 55.3955 118.877 55.4885 118.134 55.4885C117.669 55.5814 117.019 55.4885 116.554 55.2096Z"
          fill={primaryColor}
        />
        <path
          d="M2.41659 74.3564C1.67302 73.8917 1.0224 73.334 0.65062 72.5904C0.185891 71.8469 0 71.0104 0 70.0809C0 69.1515 0.185891 68.3149 0.65062 67.5714C1.11535 66.8278 1.67302 66.2701 2.41659 65.8054C3.16015 65.3407 3.99666 65.1548 4.92612 65.1548C5.85558 65.1548 6.69209 65.3407 7.43565 65.8054C8.17922 66.2701 8.73689 66.8278 9.20162 67.5714C9.66635 68.3149 9.85224 69.1515 9.85224 70.0809C9.85224 71.0104 9.66635 71.8469 9.20162 72.5904C8.73689 73.334 8.17922 73.8917 7.43565 74.3564C6.69209 74.8211 5.85558 75.007 4.92612 75.007C3.99666 75.007 3.16015 74.8211 2.41659 74.3564ZM6.41325 72.8693C6.87798 72.5904 7.15682 72.2187 7.43565 71.7539C7.71449 71.2892 7.80744 70.7315 7.80744 70.0809C7.80744 69.4303 7.71449 68.8726 7.43565 68.4079C7.15682 67.9432 6.87798 67.5714 6.41325 67.2925C5.94852 67.0137 5.48379 66.9208 4.92612 66.9208C4.36845 66.9208 3.81077 67.0137 3.34604 67.2925C2.88132 67.5714 2.50953 67.9432 2.32364 68.4079C2.0448 68.8726 1.95186 69.4303 1.95186 70.0809C1.95186 70.7315 2.0448 71.2892 2.32364 71.7539C2.60248 72.2187 2.88132 72.5904 3.34604 72.8693C3.81077 73.1481 4.2755 73.2411 4.92612 73.2411C5.57674 73.2411 5.94852 73.1481 6.41325 72.8693Z"
          fill={primaryColor}
        />
        <path
          d="M17.8455 69.7092C17.5667 70.1739 17.1949 70.5457 16.7302 70.8245C16.1725 71.1034 15.5219 71.1963 14.7783 71.1963H13.1983V74.9141H11.2464V65.2478H14.7783C15.5219 65.2478 16.1725 65.3407 16.6372 65.6196C17.102 65.8984 17.5667 66.2702 17.8455 66.642C18.1244 67.1067 18.2173 67.5714 18.2173 68.1291C18.2173 68.7797 18.1244 69.2445 17.8455 69.7092ZM15.8937 69.2445C16.1725 68.9656 16.2655 68.6868 16.2655 68.2221C16.2655 67.2926 15.7078 66.8279 14.6854 66.8279H13.1983V69.6162H14.6854C15.2431 69.6162 15.6148 69.5233 15.8937 69.2445Z"
          fill={primaryColor}
        />
        <path
          d="M21.4704 66.8279V69.2445H24.7235V70.7316H21.4704V73.3341H25.0953V74.9141H19.5186V65.2478H25.0953V66.8279H21.4704Z"
          fill={primaryColor}
        />
        <path
          d="M35.1335 74.9141H33.1816L28.8132 68.315V74.9141H26.8613V65.2478H28.8132L33.1816 71.8469V65.2478H35.1335V74.9141Z"
          fill={primaryColor}
        />
        <path
          d="M40.4314 67.5714C40.8961 66.8278 41.4538 66.2701 42.1974 65.8054C42.9409 65.4336 43.7774 65.1548 44.7069 65.1548C45.8222 65.1548 46.7517 65.4336 47.4953 65.9913C48.3318 66.549 48.8894 67.2925 49.1683 68.3149H46.9376C46.7517 67.8502 46.3799 67.4784 46.0081 67.2925C45.6363 67.1066 45.1716 66.9208 44.6139 66.9208C44.0563 66.9208 43.5915 67.0137 43.1268 67.2925C42.6621 67.5714 42.3832 67.9432 42.1044 68.4079C41.8256 68.8726 41.7326 69.4303 41.7326 70.0809C41.7326 70.7315 41.8256 71.2892 42.1044 71.7539C42.3832 72.2187 42.6621 72.5904 43.1268 72.8693C43.5915 73.1481 44.0563 73.2411 44.6139 73.2411C45.1716 73.2411 45.6363 73.1481 46.0081 72.8693C46.3799 72.5904 46.7517 72.3116 46.9376 71.8469H49.1683C48.8894 72.8693 48.2388 73.6128 47.4953 74.1705C46.6587 74.7282 45.7293 75.007 44.7069 75.007C43.7774 75.007 42.9409 74.8211 42.1974 74.3564C41.4538 73.9846 40.8961 73.334 40.4314 72.5904C39.9667 71.8469 39.7808 71.0104 39.7808 70.0809C39.7808 69.1515 40.0596 68.3149 40.4314 67.5714Z"
          fill={secondatyColor}
        />
        <path
          d="M52.7932 65.2478V71.1963C52.7932 71.8469 52.9791 72.3117 53.2579 72.6835C53.6297 73.0552 54.0944 73.2411 54.6521 73.2411C55.3027 73.2411 55.7674 73.0552 56.1392 72.6835C56.511 72.3117 56.6039 71.8469 56.6039 71.1963V65.2478H58.5558V71.1963C58.5558 72.0328 58.3699 72.6835 57.9981 73.2411C57.6263 73.7988 57.1616 74.2635 56.6039 74.5424C56.0463 74.8212 55.3956 75.0071 54.6521 75.0071C53.9085 75.0071 53.2579 74.8212 52.7002 74.5424C52.1425 74.2635 51.6778 73.7988 51.306 73.2411C50.9343 72.6835 50.8413 72.0328 50.8413 71.1963V65.2478H52.7932Z"
          fill={secondatyColor}
        />
        <path
          d="M62.3665 73.3341H65.5267V74.8212H60.4147V65.2478H62.3665V73.3341Z"
          fill={secondatyColor}
        />
        <path
          d="M73.3341 65.2478V66.8279H70.7316V74.9141H68.7798V66.8279H66.1773V65.2478H73.3341Z"
          fill={secondatyColor}
        />
        <path
          d="M76.5872 65.2478V71.1963C76.5872 71.8469 76.7731 72.3117 77.052 72.6835C77.4238 73.0552 77.8885 73.2411 78.4462 73.2411C79.0968 73.2411 79.5615 73.0552 79.9333 72.6835C80.3051 72.3117 80.398 71.8469 80.398 71.1963V65.2478H82.4428V71.1963C82.4428 72.0328 82.2569 72.6835 81.8852 73.2411C81.5134 73.7988 81.0486 74.2635 80.491 74.5424C79.9333 74.8212 79.2827 75.0071 78.5391 75.0071C77.7955 75.0071 77.1449 74.8212 76.5872 74.5424C76.0296 74.2635 75.5648 73.7988 75.1931 73.2411C74.8213 72.6835 74.7283 72.0328 74.7283 71.1963V65.2478H76.5872Z"
          fill={secondatyColor}
        />
        <path
          d="M89.2279 74.9141L87.0901 71.1963H86.1607V74.9141H84.3018V65.2478H87.9266C88.6702 65.2478 89.3208 65.3407 89.7856 65.6196C90.3432 65.8984 90.715 66.2702 90.9938 66.642C91.2727 67.1067 91.3656 67.5714 91.3656 68.1291C91.3656 68.7797 91.1797 69.3374 90.808 69.8021C90.4362 70.2669 89.8785 70.6387 89.1349 70.8245L91.4586 74.7283H89.2279V74.9141ZM86.2536 69.7092H87.8337C88.3914 69.7092 88.7631 69.6162 89.042 69.3374C89.3208 69.0586 89.4138 68.7797 89.4138 68.315C89.4138 67.8503 89.3208 67.5714 89.042 67.2926C88.7631 67.0138 88.3914 66.9208 87.8337 66.9208H86.2536V69.7092Z"
          fill={secondatyColor}
        />
        <path
          d="M95.0834 66.8279V69.2445H98.3365V70.7316H95.0834V73.3341H98.7083V74.9141H93.1316V65.2478H98.7083V66.8279H95.0834Z"
          fill={secondatyColor}
        />
        <path d="M194.814 46.3799H132.169V48.6106H194.814V46.3799Z" fill={primaryColor} />
        <path
          d="M194.721 64.2254V61.2511C194.814 59.0204 193.885 56.6968 192.212 55.1167C190.539 53.5366 188.308 52.6072 185.891 52.6072H185.705C183.382 52.6072 181.058 53.4437 179.385 55.0238C178.92 55.3955 178.549 55.8603 178.177 56.4179C177.062 57.9051 176.504 59.671 176.597 61.437L176.411 74.3565H178.642V74.2635H178.735L178.549 61.2511C178.456 59.8569 178.827 58.4628 179.664 57.2545C179.943 56.8827 180.222 56.5109 180.5 56.2321C181.895 54.8379 183.847 54.0943 185.891 54.0014H186.077C188.029 54.0014 189.981 54.7449 191.468 56.0462C192.955 57.4404 193.885 59.2993 193.885 61.3441L194.164 74.2635H195L194.721 64.2254Z"
          fill={primaryColor}
        />
        <path
          d="M172.507 61.2511C172.6 59.0204 171.671 56.6968 169.998 55.1167C168.325 53.5366 166.094 52.6072 163.677 52.6072H163.491C161.447 52.6072 159.402 53.2578 157.822 54.4661C157.543 54.652 157.264 54.8379 157.078 55.0238C155.312 56.6038 154.29 59.0204 154.29 61.2511L154.104 74.1706H156.335V74.0776H156.428L156.149 61.1582C156.056 59.2063 156.799 57.3474 158.193 56.0462C158.379 55.8603 158.565 55.6744 158.751 55.5814C160.052 54.559 161.725 54.0014 163.491 53.9084H163.677C165.629 53.9084 167.581 54.652 169.068 55.9532C170.555 57.3474 171.485 59.2063 171.485 61.2511L171.764 74.1706H172.6L172.507 64.1324V61.2511Z"
          fill={primaryColor}
        />
        <path
          d="M147.691 55.2097C146.018 53.6297 143.787 52.7002 141.37 52.7002H141.184C138.861 52.7002 136.537 53.5367 134.864 55.1168C133.098 56.6969 132.076 59.1134 132.076 61.3441L131.89 72.1258H107.724V74.3565H134.121H134.214L133.935 61.4371C133.842 59.4852 134.585 57.6263 135.979 56.3251C137.374 54.9309 139.326 54.1873 141.37 54.0944H141.556C143.508 54.0944 145.46 54.8379 146.947 56.1392C148.434 57.5334 149.364 59.3923 149.364 61.4371L149.642 74.3565H150.479L150.293 61.4371C150.293 59.1134 149.364 56.7898 147.691 55.2097Z"
          fill={primaryColor}
        />
      </svg>
    </div>
  )
}

export default Dhd2023Logo
