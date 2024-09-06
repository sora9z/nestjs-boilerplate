# nestjs-boilerplate

NestJs bolerplate

## Hierachy

```
src/
├── core/
│   ├── entities/
│   ├── use-cases/
│   └── repositories/
│       ├── product.repository.interface.ts
│       ├── order.repository.interface.ts
│       └── user.repository.interface.ts
│
├── application/
│   ├── dtos/
│   └── event-handlers/
│       └── slack-notify.handler.ts
│
├── infrastructure/
│   ├── repositories/
│   │   ├── product.repository.ts
│   │   ├── order.repository.ts
│   │   └── user.repository.ts
│   ├── database/
│   ├── messaging/
│   └── cache/
│
└── interface-adapters/
    ├── controllers/
    │   ├── order.controller.ts
    │   ├── product.controller.ts
    │   └── user.controller.ts
    ├── api/
    ├── external-services/
    │   ├── payment-gateway.service.ts
    │   └── slack-notification.service.ts
    └── queue/

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
