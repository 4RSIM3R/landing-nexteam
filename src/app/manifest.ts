import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nexteam Teknologi Indonesia - Your Fullstack MVP Partner",
    short_name: "Nexteam",
    description:
      "Professional software development company specializing in 30-day MVP development with enterprise-grade quality",
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
