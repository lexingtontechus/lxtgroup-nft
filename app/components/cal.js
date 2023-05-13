'use client';
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function MyCal() {
      useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", {
        calLink: "lxtgroup/30min",
        buttonPosition: "bottom-left",
        hideButtonIcon: false,
        buttonText: "#f3f4f6",
        buttonColor: "#075985",
        buttonTextColor: "#eadddd",
      });
      cal("ui", {
        styles: { branding: { brandColor: "#e53d3d" } },
        hideEventTypeDetails: true,
      });
    })();
  }, []);
}