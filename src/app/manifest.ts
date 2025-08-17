import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Muhammad Ilzam Mulkhaq - Fullstack Developer",
    short_name: "Ilzam Dev",
    description:
      "Expert fullstack developer specializing in 30-day MVP development",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
