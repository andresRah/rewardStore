import * as React from "react";

function SvgComponent(props) {
  return (
    <svg width={39} height={36} viewBox="0 0 39 36" {...props}>
      <title>{"logo"}</title>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="prefix__a">
          <stop stopColor="#F80" offset="0%" />
          <stop stopColor="#F60" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M46.868 16.405a.833.833 0 00-1.126-.296l-13.494 7.646a.804.804 0 00-.395.863l4.541 21.78a.443.443 0 01-.092.337l-.552.61c-1.147 1.27-2.119 1.958-3.966 1.958-2.07 0-3.043-1.071-4.583-2.965-1.839-2.262-4.127-5.076-9.69-5.076h-.137c-.759 0-1.374.604-1.374 1.348 0 .745.615 1.349 1.374 1.349h.137c4.24 0 5.844 1.972 7.543 4.06C26.57 49.887 28.29 52 31.784 52c3.017 0 4.678-1.377 6.022-2.865l4.96-5.49L54.562 30.59a.797.797 0 00.097-.94l-7.79-13.244z"
        transform="translate(-16 -16)"
        fill="url(#prefix__a)"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default SvgComponent;
