# nestjs-boilerplate

### 프로젝트 설명

- NestJs bolerplate
- Clean Architecture 를 적용한 NestJs 프로젝트 구조
  - 클린아키텍처의 이상적인 형태가 아닌 약간의 타협이 포함되어있음
  - 점증적으로 개선해나갈 예정

### 프로젝트 구성

- NestJs
- TypeORM (PostgreSQL)

### 추가 예정 사항

- Logger, Filter, Interceptor, Guard, Middleware
- Swagger, Redis, JWT, Passport

### Hierachy

```
── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   ├── application/
│   │   └── services/
│   ├── core/
│   │   ├── entity/
│   │   │   ├── auth.entity.ts
│   │   │   ├── todo.entity.ts
│   │   │   └── user.entity.ts
│   │   ├── repositories/
│   │   │   ├── todoRepository.interface.ts
│   │   │   └── userRepository.interface.ts
│   │   └── use-case/
│   │       └── todo/
│   ├── infrastructure/
│   │   ├── configuration/
│   │   │   ├── configuration.module.ts
│   │   │   ├── database-config/
│   │   │   └── typeorm/
│   │   ├── database/
│   │   │   ├── database.module.ts
│   │   │   ├── entities/
│   │   │   ├── migrations/
│   │   │   ├── repositories/
│   │   │   └── seedes/
│   │   ├── infrastructure.module.ts
│   │   ├── logger/
│   │   │   ├── logger.module.ts
│   │   │   ├── logger.service.spec.ts
│   │   │   └── logger.service.ts
│   │   └── usecases-proxy/
│   │       ├── usecase-prox.module.ts
│   │       └── usecase-proxy.ts
│   ├── interface-adapters/
│   │   └── controller/
│   │       ├── controller.module.ts
│   │       ├── todo/
│   │       └── user/
│   └── main.ts

```

- core(heart of the application)

  - 애플리케이션의 핵심 규칙을 포함
  - 비즈니스 로직과 도메인 모델 담당

- Application

  - 주로 유즈케이스의 실행을 담당
  - controllers, 데이터 전송을 위한 dtos, 이벤트 핸들러 포함

- infrastructure

  - 외부 시스템과의 상호작용 담당
  - 데이터베이스, 메시징, 캐시 등의 구체적인 구현을 포함

- interface adapters

  - 외부 인터페이스와 내부 로직을 연결하는 어댑터 계층
  - API 인터페이스, 외부 서비스 인터페이스, 큐 인터페이스 등을 포함

- Frameworks & Drivers
  - NestJs 프레임워크 및 외부 시스템과의 연결 담당

### 프로젝트 셋팅 방법

```bash
git clone https://github.com/sora9z/nestjs-boilerplate.git my-new-project

cd my-new-project
rm -rf .git
git init
git remote add origin <새로운 리포지토리 URL>
git add .
git commit -m "Initial commit based on boilerplate"
```
