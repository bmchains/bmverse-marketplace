module.exports = {
  apps: [
    {
      name: "bmverse-marketplace",
      cwd: "/opt/apps/bmverse-marketplace",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "600M",
      env: {
        NODE_ENV: "production",
        PORT: "3000"
      }
    }
  ]
};
