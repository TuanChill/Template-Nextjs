# Next.js Boilerplate Template

A modern, production-ready Next.js boilerplate with comprehensive development tooling, authentication setup, and services architecture. Built with best practices for scalable enterprise applications.

## 🚀 Features

- **Next.js 16.4.6** with App Router and Turbo mode
- **React 19 RC** for cutting-edge React features
- **TypeScript 5.7.3** for type safety
- **Tailwind CSS** with animations and custom scrollbar
- **Shadcn/ui** components with Radix UI primitives
- **Zustand** for state management with persistence
- **Axios** with interceptors for HTTP requests
- **T3 Env** for type-safe environment variables
- **Jest** & **React Testing Library** for testing
- **ESLint** & **Prettier** for code quality
- **Husky** & **lint-staged** for git hooks
- **GitHub Actions** for CI/CD
- **Dark/Light theme** support with next-themes
- **Authentication** service layer with JWT support
- **Services architecture** with proper separation of concerns

## 📁 Project Structure

```
template-nextjs-fe/
├── .github/                    # GitHub workflows and config
│   ├── workflows/              # CI/CD workflows
│   │   ├── main.yml           # Main CI workflow
│   │   └── dependency-review.yml
│   └── dependabot.yml         # Dependabot configuration
├── .husky/                     # Git hooks
│   ├── commit-msg             # Commit message validation
│   ├── pre-commit             # Lint-staged runner
│   └── pre-push               # Test runner
├── public/                     # Static assets
│   ├── favicon.ico
│   └── vercel.svg
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout with theme support
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   ├── ui/                 # Shadcn/ui components
│   │   │   ├── button.tsx      # Button component with variants
│   │   │   ├── input.tsx       # Input component
│   │   │   └── sonner.tsx      # Toast notifications
│   │   ├── layout/             # Layout components
│   │   │   └── header.tsx      # Header component
│   │   └── common/             # Common components
│   │       └── button.tsx      # Custom button component
│   ├── config/                 # Configuration files
│   │   ├── env.ts              # Environment validation (T3 Env)
│   │   ├── fonts.ts            # Font configuration (Inter, Fira Code)
│   │   └── site.ts             # Site configuration
│   ├── constants/              # App constants
│   │   ├── api.ts              # API endpoints
│   │   ├── defaults.ts         # Default values (pagination, etc.)
│   │   ├── routes.ts           # Route constants
│   │   └── index.ts            # Barrel exports
│   ├── hooks/                  # Custom React hooks
│   │   └── index.ts            # Barrel exports
│   ├── lib/                    # Utility libraries
│   │   ├── validators/         # Zod schemas and validators
│   │   └── utils/              # Utility functions
│   │       ├── cn/             # Class name utilities
│   │       └── index.ts        # Barrel exports
│   ├── providers/              # React context providers
│   │   ├── auth-provider.tsx   # Authentication provider
│   │   ├── theme-provider.tsx  # Theme provider
│   │   └── index.ts            # Barrel exports
│   ├── request/                # Legacy API request functions
│   │   └── auth.ts             # Auth requests (deprecated)
│   ├── services/               # Service layer architecture
│   │   ├── api/                # API service modules
│   │   │   ├── auth.service.ts # Authentication services
│   │   │   └── index.ts        # API barrel exports
│   │   ├── http/               # HTTP client configuration
│   │   │   ├── client.ts       # Axios client with interceptors
│   │   │   └── index.ts        # HTTP barrel exports
│   │   └── index.ts            # Services barrel exports
│   ├── stores/                 # Zustand stores
│   │   ├── user.store.ts       # User authentication store
│   │   └── index.ts            # Store barrel exports
│   ├── styles/                 # Global styles
│   │   └── globals.css         # Tailwind CSS with custom variables
│   └── types/                  # TypeScript type definitions
│       ├── user.ts             # User types
│       ├── request/            # Request type definitions
│       │   ├── auth.ts
│       │   └── index.ts
│       ├── response/           # Response type definitions
│       │   ├── common.ts       # Common API response types
│       │   └── index.ts
│       └── index.ts            # Type barrel exports
├── .env.example                # Environment variables template
├── components.json             # Shadcn/ui configuration
├── jest.config.js              # Jest configuration with coverage
├── jest.setup.js               # Jest setup file
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration (flat config)
├── prettier.config.js          # Prettier configuration
└── postcss.config.js           # PostCSS configuration
```

## 🛠️ Technology Stack

### Core Framework

- **Next.js 16.4.6** - React framework with App Router and Turbo mode
- **React 19 RC** - Latest React features
- **TypeScript 5.7.3** - Type safety and developer experience

### Styling & UI

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Tailwind Animate** - CSS animations
- **Tailwind Scrollbar** - Custom scrollbar styling
- **Shadcn/ui** - Pre-built accessible components
- **Radix UI** - Headless UI primitives
- **Class Variance Authority (CVA)** - Component variants
- **Lucide React** - Icon library
- **Next Themes** - Dark/light mode support

### State Management & HTTP

- **Zustand 5.0.8** - Lightweight state management with persistence
- **Axios 1.11.0** - HTTP client with request/response interceptors
- **T3 Env 0.12.0** - Type-safe environment variables
- **Zod 3.24.1** - Schema validation and type inference

### Testing

- **Jest 29.7.0** - Testing framework
- **React Testing Library 16.0.1** - React component testing
- **Jest Environment JSDOM** - DOM testing environment
- **Jest Watch Typeahead** - Enhanced watch mode

### Development Tools

- **ESLint 9.19.0** - Code linting with flat config and extensive plugins
- **Prettier 3.4.2** - Code formatting with Tailwind plugin
- **Husky 9.1.7** - Git hooks for quality enforcement
- **lint-staged 15.4.3** - Pre-commit linting and formatting

## 🚀 Quick Start

### Prerequisites

- **Node.js 20.9+** (specified in package.json engines)
- **pnpm 9.1.1+** (recommended package manager)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/TuanChill/Template-Nextjs.git
   cd template-nextjs-fe
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Environment setup**

   ```bash
   cp .env.example .env.local
   ```

   Update the environment variables:

   ```env
   NEXT_PUBLIC_API_BASE=http://localhost:3001/api/v1/
   ```

4. **Start development server**

   ```bash
   pnpm dev
   ```

   The server will start in Turbo mode for faster development.

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
# Development
pnpm dev                # Start development server with Turbo
pnpm build              # Build for production
pnpm start              # Start production server

# Code Quality
pnpm lint               # Run Next.js ESLint
pnpm eslint:format      # Fix ESLint issues in src/
pnpm prettier:format    # Format all files with Prettier
pnpm prettier:check     # Check Prettier formatting

# Testing
pnpm test               # Run Jest tests
pnpm test:watch         # Run tests in watch mode
pnpm test:coverage      # Run tests with coverage report
pnpm test:ci            # Run tests in CI mode

# Git Hooks (automatically set up)
pnpm postinstall        # Setup Husky hooks
```

## 🔧 Configuration

### Environment Variables

The project uses T3 Env for type-safe environment variable validation. Create a `.env.local` file:

```env
# API Configuration
NEXT_PUBLIC_API_BASE=http://localhost:3001/api/v1/
```

Environment validation is configured in [`src/config/env.ts`](src/config/env.ts) with proper Zod schemas.

### Package Manager

The project is configured to use **pnpm 9.1.1+** with specific overrides for React 19 RC types:

```json
{
  "packageManager": "pnpm@9.1.1+sha256.9551e803dcb7a1839fdf5416153a844060c7bce013218ce823410532504ac10b",
  "pnpm": {
    "overrides": {
      "@types/react": "npm:types-react@19.0.0-rc.1",
      "@types/react-dom": "npm:types-react-dom@19.0.0-rc.1"
    }
  }
}
```

### Shadcn/ui Configuration

Components are configured in [`components.json`](components.json) for easy customization and generation.

## 🎨 Design System & Architecture

### Services Architecture

The project follows a clean services architecture pattern:

- **HTTP Client** (`src/services/http/client.ts`): Configured Axios instance with interceptors
- **API Services** (`src/services/api/`): Organized by domain (auth, users, etc.)
- **Authentication** (`src/services/api/auth.service.ts`): Complete auth flow with JWT
- **Request/Response Types** (`src/types/`): Strongly typed API contracts

### State Management

- **User Store** (`src/stores/user.store.ts`): Authentication state with persistence
- **Zustand Middleware**: Automatic persistence to localStorage
- **JWT Handling**: Automatic token attachment to API requests

### Theme Support

Built-in dark/light mode support using `next-themes` with:

- System preference detection
- CSS custom properties for theming
- Seamless theme switching
- Toast notifications with theme awareness

### Component Library

- **Base components**: Shadcn/ui with Radix UI primitives
- **Icons**: Lucide React icon library (0.542.0)
- **Animations**: Tailwind CSS animations
- **Notifications**: Sonner toast library with theme integration
- **Utilities**: CVA for component variants, clsx and tailwind-merge for class management

## 🧪 Testing

### Configuration

Jest is configured with comprehensive settings:

```javascript
// Coverage thresholds
coverageThreshold: {
  global: {
    branches: 70,
    functions: 70,
    lines: 70,
    statements: 70
  }
}
```

### Test Structure

- **Unit tests**: Component and utility testing
- **Coverage reporting**: HTML and JSON formats
- **Mocking**: CSS modules, static assets, and external dependencies
- **Watch mode**: Enhanced with typeahead plugin

### Running Tests

```bash
# Development testing
pnpm test:watch         # Interactive watch mode
pnpm test:coverage      # Generate coverage report

# CI testing
pnpm test:ci           # Optimized for CI environments
```

## 🔍 Code Quality

### Git Hooks

Automated code quality enforcement with Husky:

**Pre-commit** (`.husky/pre-commit`):

- Runs `lint-staged` for staged files
- Executes Prettier formatting and ESLint fixes

**Pre-push** (`.husky/pre-push`):

- Runs full test suite with `pnpm test:ci`

**Commit message** (`.husky/commit-msg`):

- Validates conventional commit format
- Enforces message length limits (1-88 characters)

### Lint-staged Configuration

```json
{
  "lint-staged": {
    "src/**/*": ["pnpm prettier:format", "pnpm eslint:format"]
  }
}
```

### Commit Convention

Commits must follow conventional commit format:

```
feat(scope): add new feature
fix(scope): resolve bug
docs(scope): update documentation
chore(scope): maintenance task
test(scope): add tests
style(scope): formatting changes
refactor(scope): code restructuring
perf(scope): performance improvements
build(scope): build system changes
ci(scope): CI configuration
revert(scope): revert changes
```

### ESLint Configuration

Comprehensive ESLint setup with flat config format including:

- **TypeScript support** with @typescript-eslint
- **React and React Hooks** rules
- **Next.js best practices**
- **Import helpers** for organized imports with custom ordering
- **Prettier integration** for formatting consistency
- **Testing Library rules** for test files
- **Custom rules** for code quality (no-console, unused-vars, etc.)

Configuration follows the new ESLint flat config format for better performance and maintainability.

## 🚀 CI/CD

### GitHub Actions Workflow

The main workflow (`.github/workflows/main.yml`) includes:

1. **Prettier Check**

   - Validates code formatting consistency
   - Uses pnpm 8.10.2 and Node.js 20
   - Skips environment validation during CI

2. **ESLint Check**

   - Runs comprehensive linting rules
   - Automatically fixes auto-fixable issues
   - Enforces code quality standards

3. **Jest Testing**

   - Runs full test suite with coverage
   - Requires prettier and eslint checks to pass
   - Validates component and utility functions

4. **Next.js Build**
   - Validates production build process
   - Ensures all components compile correctly
   - Requires all previous checks to pass

### Dependency Management

- **Dependency Review**: Automated security scanning for PRs
- **Dependabot**: Automated dependency updates (`.github/dependabot.yml`)
- **Node.js Engine**: Locked to 20.9+
- **pnpm Version**: Locked with SHA for reproducible builds

## 📚 Development Workflow

### Services Architecture Usage

The project implements a clean services architecture:

1. **API Services**: Use services from `src/services/api/`

   ```typescript
   import { authService } from '@/services/api';

   const user = await authService.getMe();
   ```

2. **HTTP Client**: Pre-configured with interceptors

   ```typescript
   import { httpClient } from '@/services/http';

   const response = await httpClient.get('/endpoint');
   ```

3. **State Management**: Zustand stores with persistence

   ```typescript
   import { useUserStore } from '@/stores';

   const { user, setAuth, clear } = useUserStore();
   ```

### Adding New Components

1. Use Shadcn/ui CLI for base components:

   ```bash
   npx shadcn-ui@latest add button
   ```

2. Create custom components in `src/components/common/`

3. Write tests in adjacent `__tests__` folders

4. Follow the established patterns for props and variants

### API Integration

The HTTP client (`src/services/http/client.ts`) is configured with:

- **Base URL** from environment variables
- **Request interceptors** for automatic JWT token attachment
- **Response interceptors** for global error handling (401 unauthorized)
- **Timeout configuration** (5 minutes)
- **Content limits** (1GB) for file uploads

### State Management

Use Zustand stores in `src/stores/` for:

- **User authentication** state with JWT tokens
- **Persistent data** with automatic localStorage sync
- **Type-safe** state management with TypeScript

The user store includes:

- `setAuth(user, jwt)` - Set user and token
- `setUserInfo(user)` - Update user info only
- `clear()` - Clear all auth data
- `isAuthenticated()` - Check auth status
- `reload()` - Refresh user data from API

## 🔧 Customization

### Extending the Template

1. **Add new API services**: Create new service files in `src/services/api/`
2. **Add dependencies**: Use pnpm for package management
3. **Configure tools**: Update respective config files
4. **Extend CI/CD**: Modify GitHub Actions workflows
5. **Add features**: Follow established patterns and barrel exports

### Adding New Services

1. Create service file in `src/services/api/`:

   ```typescript
   // src/services/api/posts.service.ts
   import { httpClient } from '@/services/http';

   export const getPosts = async () => {
     const response = await httpClient.get('/posts');
     return response.data;
   };
   ```

2. Export from barrel file:
   ```typescript
   // src/services/api/index.ts
   export * as postsService from './posts.service';
   ```

### Performance Optimization

- **Turbo mode**: Enabled for faster development builds
- **Bundle analysis**: Available through Next.js built-in analyzer
- **Image optimization**: Next.js Image component ready
- **Font optimization**: Next.js font optimization configured with Inter and Fira Code

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch following naming conventions
3. Make changes following the established code quality standards
4. Ensure all tests pass and coverage meets thresholds (70%)
5. Follow the conventional commit format
6. Submit a pull request with descriptive commit messages

## 🏗️ Architecture Decisions

### Services Layer Pattern

- **Separation of Concerns**: API logic separated from components
- **Reusability**: Services can be used across multiple components
- **Testing**: Easier to unit test business logic
- **Maintainability**: Centralized API handling

### Barrel Exports

- **Clean Imports**: Single import statement for multiple modules
- **Refactoring**: Easier to restructure without breaking imports
- **Tree Shaking**: Better support for dead code elimination

### Type Safety

- **T3 Env**: Runtime environment validation
- **Zod Schemas**: API response validation
- **TypeScript**: Compile-time type checking
- **Strict Configuration**: Maximum type safety enabled

### Performance Considerations

- **App Router**: Latest Next.js routing for optimal performance
- **Turbo Mode**: Faster development builds
- **Code Splitting**: Automatic route-based splitting
- **Font Optimization**: Next.js font optimization
- **Image Optimization**: Built-in Next.js image optimization

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue in the [GitHub repository](https://github.com/TuanChill/Template-Nextjs)
- Check existing documentation and configuration files
- Review the comprehensive project structure and examples
- Follow the established patterns and conventions

---

**Built with ❤️ for modern web development**
