import React from "react";

const GitHubStats = () => {
  const username = "WebXWizard";
  const base = `https://github-profile-summary-cards.vercel.app/api/cards`;

  return (
    <section id="github" className="py-16 px-[6vw] md:px-[4vw] lg:px-[8vw] font-sans">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">GITHUB STATS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A live snapshot of my open-source activity and contributions
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center flex-wrap">
          <img src={`${base}/stats?username=${username}&theme=tokyonight`} alt="GitHub Stats" className="rounded-xl h-44 object-contain" loading="lazy" />
          <img src={`${base}/productive-time?username=${username}&theme=tokyonight&utcOffset=5.5`} alt="Productive Time" className="rounded-xl h-44 object-contain" loading="lazy" />
        </div>

        <div className="w-full flex justify-center">
          <img src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=tokyo-night&hide_border=true&area=true`} alt="GitHub Contribution Graph" className="rounded-xl w-full max-w-5xl" loading="lazy" />
        </div>

        <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center flex-wrap">
          <img src={`${base}/repos-per-language?username=${username}&theme=tokyonight`} alt="Repos Per Language" className="rounded-xl h-44 object-contain" loading="lazy" />
          <img src={`${base}/most-commit-language?username=${username}&theme=tokyonight`} alt="Most Commit Language" className="rounded-xl h-44 object-contain" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;