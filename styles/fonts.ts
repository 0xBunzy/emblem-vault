import localFont from "next/font/local";

const Nohemi = localFont({
  src: [
    { path: "./fonts/Nohemi-ExtraBold.otf", weight: "800" },
    { path: "./fonts/Nohemi-ExtraBold.otf", weight: "700" },
    { path: "./fonts/Nohemi-Bold.otf", weight: "600" },
    { path: "./fonts/Nohemi-SemiBold.otf", weight: "500" },
    { path: "./fonts/Nohemi-Regular.otf", weight: "400" },
    { path: "./fonts/Nohemi-Medium.otf", weight: "300" },
    { path: "./fonts/Nohemi-Light.otf", weight: "200" },
    { path: "./fonts/Nohemi-ExtraLight.otf", weight: "100" },
  ],
});

export { Nohemi };
