<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

<p align="center">A modular and scalable <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient, enterprise-ready backend architectures with NestJS.</p>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

![Visitors](https://img.shields.io/badge/visitors-17_total-brightgreen)
![Clones](https://img.shields.io/badge/clones-23_total_17_unique-blue) <!--CLONE-BADGE-->

## 📌 Project Overview
A modular, scalable, and enterprise-ready backend architecture built with NestJS.

This project is designed to accelerate backend development, especially for rapid Proof-of-Concept (PoC) efforts, new system bootstrapping, or as a clean foundation for evolving from a monolith to microservices. It embraces the modular monolith pattern—intentionally excluding Clean Architecture and Domain-Driven Design (DDD) to reduce complexity and promote faster iteration.

Ideal for enterprises and startups, this template helps teams progress from PoC to Product-Market Fit (PMC) by offering:

- A structured yet flexible modular architecture
- Integrated logger mechanism for operational insight
- A database factory pattern supporting multiple databases (MySQL, PostgreSQL, SQLite)

If you're looking for a reliable and pragmatic backend starter—whether for demos, PoC trials, or real-world product foundations—this project can help you move fast with confidence.

<a href='https://ko-fi.com/F1F82YR41' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi6.png?v=6' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

## 🏗 Project Structure & Architecture
This project follows a modular monolith architecture, emphasizing clear separation of concerns while maintaining the simplicity of a monolithic deployment. The folder layout encourages scalable, testable, and maintainable codebases.

```
modular-monolith-architecture
├── Dockerfile
├── docker-compose.*.yml         # Support PostgreSQL & SQLite
├── logs/                        # Daily log files
├── src/
│   ├── main.ts                  # Entry point
│   ├── app.module.ts            # Root module
│   ├── common/                  # Shared logic (e.g., logger, interceptors)
│   ├── config/                  # Multi-database configuration (MySQL, PostgreSQL, SQLite)
│   └── modules/
│       ├── product/             # Product feature module
│       └── user/                # User feature module
├── test/                        # e2e testing
├── sample.env                   # Environment config template
└── README.md
```

## 🧩 Modular Breakdown

- common/: Cross-cutting concerns such as custom exception filters, response interceptors, and centralized logging.
- config/: Modular database configuration with support for SQLite, PostgreSQL, and MySQL, using a database factory pattern.
- modules/: Business logic split into independently maintainable feature modules (e.g., user, product), each with:

  - controllers/: Handle HTTP requests
  - services/: Core business logic
  - repositories/: Database access logic
  - dto/, entities/, facades/: Well-structured data handling

## ✨ Key Features

- ✅ Modular Monolith Structure – Clear, maintainable boundaries between features while remaining deployable as a single unit.
- 🧪 Built-in e2e Testing – Includes Jest test setup to validate end-to-end functionality.
- 📦 Multi-Database Support – Easily switch between SQLite, PostgreSQL, and MySQL via plug-and-play configuration.
- 🪵 Advanced Logging – Centralized file-based logging system with daily rotation (e.g., logs/application-YYYY-MM-DD.log).
- 📁 Feature-Based Modular Design – Each domain (e.g., user/product) is fully encapsulated with its own logic.
- ⚙️ Docker & Compose Ready – Start instantly with docker-compose setups for PostgreSQL and SQLite.

## 💡 Design Principles and Benefits

### 🔄 Simplicity Over Complexity
Avoids over-engineering by not enforcing Clean Architecture or full DDD. Ideal for fast-moving projects, PoCs, or early-stage product validation.

### 📦 Modular Without Microservices
All domain modules are logically isolated, enabling easier future migration to microservices when scale demands it—without premature complexity.

### 🌱 Startup & Enterprise Friendly
Whether you're a lean startup or an enterprise team, this template provides a solid base to:

- Quickly prototype ideas with real APIs
- Gradually scale into a production-grade product
- Demo to stakeholders using different DB engines

### ⚡ PoC to PMC Ready
Designed to support the lifecycle from Proof-of-Concept (PoC) to Product-Market Fit (PMC), offering balance between agility and structure.

## 🚀 Quick Start

Follow these steps to get your modular monolith project up and running in minutes.

1. Clone the Template

```bash
git clone https://github.com/your-username/modular-monolith-architecture.git
cd modular-monolith-architecture
```

2. Install Dependencies

```bash
npm install
```

3. Set Up Environment Variables

Copy the sample environment file and customize it if needed:

```bash
cp sample.env .env
```

4. Run the Application (Development Mode)

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

By default, the API will be available at:
👉 http://localhost:3000

5. Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

6. Use Docker (Optional)

- Run with SQLite (default)

```bash
docker-compose -f docker-compose.sqlite.yml up
```

- Run with PostgreSQL

```bash
docker-compose -f docker-compose.postgresql.yml up
```

## Logging

Application logs are automatically saved to the logs/ directory with daily log rotation (e.g., application-2025-04-27.log).

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Da-Wei Lin](https://www.linkedin.com/in/da-wei-lin-689a35107/)
- Website - [David Weblog](https://davidskyspace.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
