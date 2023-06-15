"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export default function MyCal() {
  useEffect(()=>{
    (async function () {
      const cal = await getCalApi();
      cal("floatingButton", {"calLink":"lxtgroup/30min","buttonText":"BOOK","buttonColor":"#075985","buttonTextColor":"#eadddd","hideButtonIcon":false,"buttonPosition":"bottom-left"});
      cal("ui", {"theme":"dark","styles":{"branding":{"brandColor":"#075985"}},"hideEventTypeDetails":false});
    })();
  }, [])
};
