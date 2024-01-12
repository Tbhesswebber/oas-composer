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
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
  ],
};

export default config;
