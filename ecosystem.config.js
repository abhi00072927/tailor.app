module.exports = {
  apps: [
    {
      name: "next-app",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production"
      }
      // Note: Status should show 'online' in PM2.
      // If it shows 'stopped', use `pm2 logs next-app` to diagnose.
    }
  ]
}
