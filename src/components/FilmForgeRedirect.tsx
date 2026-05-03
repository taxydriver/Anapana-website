import { useEffect } from "react";

export function FilmForgeRedirect() {
  useEffect(() => {
    window.location.href = "https://filmforgenew.vercel.app/";
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Redirecting to FilmForge.....</p>
    </div>
  );
}
np