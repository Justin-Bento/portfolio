import React from "react";

interface LogomarkProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logomark: React.FC<LogomarkProps> = ({
  width = 40,
  height = 40,
  className = "",
}) => {
  return (
    <svg aria-hidden="true"
      width={width}
      height={height} className={className} viewBox="0 0 65 115" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <g id="Group">
        <g id="J">
          <path d="M39.3242 75.5014C38.9542 75.7513 38.6266 76.0486 38.2421 76.1826C38.1384 76.2186 37.8626 75.7606 37.6661 75.5288C38.034 75.3042 38.3918 75.0572 38.7821 74.8808C38.8361 74.8563 39.0478 75.1789 39.3242 75.5014ZM31.937 77.9502C32.8082 79.0042 33.5038 79.8459 34.2778 80.7819C33.8522 81.5372 33.6031 82.2608 33.1294 82.7792C28.4054 87.9466 23.5246 92.9528 17.9136 97.1842C15.1992 99.2319 12.3221 100.96 8.94456 101.678C8.21664 101.833 7.47432 101.972 6.73416 102.002C5.75496 102.041 5.01912 101.2 5.29776 100.288C5.6232 99.224 5.99328 98.126 6.59088 97.2037C7.46856 95.8494 8.46144 94.5361 9.58608 93.3812C15.4786 87.3282 22.2905 82.5222 29.8246 78.7285C30.3718 78.4534 30.9802 78.2986 31.937 77.9502L31.937 77.9502ZM34.0618 70.7178C30.8527 65.8657 29.1168 61.1058 31.2415 55.6467C34.1309 48.2257 38.6856 42.0718 45.4306 37.718C47.1989 36.5761 49.171 35.7128 51.1286 34.9158C52.2612 34.455 53.5421 34.2397 54.7726 34.159C59.7607 33.8329 61.578 35.851 60.4476 40.6462C59.8493 43.1864 58.9536 45.6733 57.9974 48.1083C55.8389 53.607 52.8545 58.6585 49.392 63.4393C48.2537 65.011 46.885 66.127 45 66.7462C42.3907 67.6023 39.8549 68.6816 37.2794 69.6442C36.3542 69.9898 35.4053 70.2721 34.0618 70.7178ZM28.8475 73.2378C27.2556 74.1673 25.9913 74.9434 24.6931 75.6577C17.8546 79.4197 11.5675 83.9355 6.12288 89.5407C4.48128 91.2313 3.06432 93.1731 1.75392 95.1402C1.01088 96.2554 0.485277 97.6126 0.218877 98.9324C-0.864002 104.301 1.34424 107.773 7.506 107.049C8.12592 106.976 8.73864 106.845 9.35208 106.726C12.965 106.02 16.3188 104.649 19.2902 102.492C21.7166 100.731 24.174 98.9547 26.3196 96.8775C30.811 92.5302 35.208 88.0741 39.4481 83.4819C42.5844 80.085 45.4579 76.4403 48.3559 72.8317C49.8362 70.9892 51.5462 69.7544 53.9359 69.3937C56.1586 69.0582 58.3546 68.5376 60.5477 68.0343C61.3886 67.8406 62.3002 67.6196 62.9719 67.1278C63.4954 66.7434 63.9274 65.9413 63.9878 65.2868C64.0735 64.3458 63.3838 63.5653 62.4737 63.3968C61.3886 63.1959 60.2489 63.2953 59.1329 63.2485C58.3308 63.2146 57.5294 63.1542 56.2846 63.0786C57.0766 61.6105 57.6389 60.5262 58.2386 59.4634C61.1978 54.219 63.8791 48.8427 65.2932 42.9567C65.7533 41.0408 65.8634 39.0032 65.8584 37.0225C65.8512 34.3189 64.427 32.2964 62.2181 30.811C60.8371 29.883 59.3006 29.4387 57.649 29.2659C52.5701 28.7331 47.9858 30.1839 43.7011 32.7464C35.311 37.7634 29.7058 45.0858 26.2116 54.1174C24.6586 58.13 24.5902 62.1778 26.0892 66.2214C26.6105 67.6268 27.2405 68.9912 27.7985 70.3837C28.1182 71.1814 28.3939 71.9965 28.8475 73.2378L28.8475 73.2378Z" />
        </g>
        <path d="M56 100C56 98.8954 56.8954 98 58 98C59.1046 98 60 98.8954 60 100C60 101.105 59.1046 102 58 102C56.8954 102 56 101.105 56 100Z" id="Oval" fill="#000000" fill-rule="evenodd" stroke="none" />
      </g>
    </svg>
  );
};

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 106,
  height = 40,
  className = "",
}) => {
  return (
    <>
      <svg
        viewBox="0 0 106 40"
        aria-hidden="true"
        width={width}
        height={height}
        className={className}
      >
        <Logomark width={40} height={40} className={className} />
        <path
          className="fill-gray-900"
          d="M53.1477 26V14.3636H57.5114C58.4053 14.3636 59.1553 14.5303 59.7614 14.8636C60.3712 15.197 60.8314 15.6553 61.142 16.2386C61.4564 16.8182 61.6136 17.4773 61.6136 18.2159C61.6136 18.9621 61.4564 19.625 61.142 20.2045C60.8277 20.7841 60.3636 21.2405 59.75 21.5739C59.1364 21.9034 58.3807 22.0682 57.483 22.0682H54.5909V20.3352H57.1989C57.7216 20.3352 58.1496 20.2443 58.483 20.0625C58.8163 19.8807 59.0625 19.6307 59.2216 19.3125C59.3845 18.9943 59.4659 18.6288 59.4659 18.2159C59.4659 17.803 59.3845 17.4394 59.2216 17.125C59.0625 16.8106 58.8144 16.5663 58.4773 16.392C58.1439 16.214 57.714 16.125 57.187"
        ></path>
      </svg>
    </>
  );
};