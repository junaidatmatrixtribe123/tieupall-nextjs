const nextConfig = {
  env: {
    db_host: "localhost",
    db_port: 3306,
    db_user: "root",
    db_password: "",
    db_name: "tieupdb",
    db_dialect: "mysql",
    db_benchmark: true,
    secret: "API_SET",
    emailFrom: "FROM_EMAIL",
    smtp_host: "SMTP_HOST",
    smtp_port: 587,
    smtp_user: "EMAIL_USER",
    smtp_pass: "EMAIL_PWD",
  },
};

module.exports = nextConfig;
