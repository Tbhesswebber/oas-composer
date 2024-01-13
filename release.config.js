/**
 * @type {import('semantic-release').GlobalConfig}
 */
const config = {
  branches: [
    "main",
    "release/v+([0-9])?(.{+([0-9]),x}).x",
    { name: "alpha", prerelease: true },
  ],
  // eslint-disable-next-line no-template-curly-in-string -- this is the format expected by semantic-release
  tagFormat: "v${version}",
  extends: "semantic-release-npm-github-publish",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          {
            type: "chore",
            release: "patch",
          },
          {
            type: "docs",
            release: "patch",
          },
          {
            type: "refactor",
            release: "patch",
          },
          {
            type: "style",
            release: "patch",
          },
          {
            type: "test",
            release: "patch",
          },
        ],
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};

export default config;
