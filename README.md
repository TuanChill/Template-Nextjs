# Next.js Boilerplate Template

A modern, production-ready Next.js boilerplate with comprehensive development tooling including Husky, lint-staged, ESLint + Prettier, Jest, React Testing Library, Storybook, and GitHub Actions.

## 🚀 Features

- **Next.js 15** with App Router and Turbo mode
- **React 19 RC** for cutting-edge React features
- **TypeScript** for type safety
- **Tailwind CSS** with animations and custom scrollbar
- **Shadcn/ui** components with Radix UI primitives
- **Zustand** for state management
- **Axios** for HTTP requests
- **T3 Env** for type-safe environment variables
- **Jest** & **React Testing Library** for testing
- **Storybook** for component development
- **ESLint** & **Prettier** for code quality
- **Husky** & **lint-staged** for git hooks
- **GitHub Actions** for CI/CD
- **Dark/Light theme** support

## 📁 Project Structure

```
template-nextjs-fe/
├── .github/                    # GitHub workflows and config
│   ├── workflows/              # CI/CD workflows
│   │   ├── main.yml           # Main CI workflow
│   │   └── dependency-review.yml
├── .husky/                     # Git hooks
│   ├── commit-msg             # Commit message validation
│   ├── pre-commit             # Lint-staged runner
│   └── pre-push               # Test runner
├── public/                     # Static assets
│   ├── favicon.ico
│   └── vercel.svg
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Home page
│   ├── components/             # React components
│   │   └── components/
│   │       ├── ui/             # Shadcn/ui components
│   │       │   ├── button.tsx
│   │       │   ├── input.tsx
│   │       │   └── sonner.tsx
│   │       └── common/         # Common components
│   │           └── button.tsx
│   ├── config/                 # Configuration files
│   │   ├── api-axios.ts        # Axios configuration
│   │   ├── env.ts              # Environment validation (T3 Env)
│   │   ├── fonts.ts            # Font configuration
│   │   └── site.ts             # Site configuration
│   ├── constants/              # App constants
│   │   ├── api.ts              # API endpoints
│   │   ├── defaults.ts         # Default values
│   │   └── routes.ts           # Route constants
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility libraries
│   │   └── utils/              # Utility functions
│   │       ├── index.ts
│   │       └── cn/             # Class name utilities
│   ├── request/                # API request functions
│   │   └── auth.ts
│   ├── stores/                 # Zustand stores
│   │   └── user.store.ts
│   ├── styles/                 # Global styles
│   │   └── globals.css
│   └── types/                  # TypeScript type definitions
│       ├── user.ts
│       ├── request/
│       └── response/
├── __mocks__/                  # Jest mocks
├── .env.example                # Environment variables template
├── components.json             # Shadcn/ui configuration
├── jest.config.js              # Jest configuration
├── jest.setup.js               # Jest setup
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── eslint.config.mjs           # ESLint configuration
└── prettier.config.js          # Prettier configuration
```

## 🛠️ Technology Stack

### Core Framework

- **Next.js 15.1.6** - React framework with App Router and Turbo mode
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

- **Zustand 5.0.8** - Lightweight state management
- **Axios 1.11.0** - HTTP client with interceptors
- **T3 Env** - Type-safe environment variables
- **Zod 3.24.1** - Schema validation

### Testing

- **Jest 29.7.0** - Testing framework
- **React Testing Library 16.0.1** - React component testing
- **Jest Environment JSDOM** - DOM testing environment
- **Jest Watch Typeahead** - Enhanced watch mode

### Development Tools

- **Storybook 8.5.3** - Component development
- **ESLint 9.19.0** - Code linting with extensive plugins
- **Prettier 3.4.2** - Code formatting
- **Husky 9.1.7** - Git hooks
- **lint-staged 15.4.3** - Pre-commit linting

## 🚀 Quick Start

### Prerequisites

- **Node.js 18.20.2+** (specified in package.json engines)
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
   NEXT_PUBLIC_APP_DOMAIN=http://localhost:3000
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
# App Configuration
NEXT_PUBLIC_APP_DOMAIN=http://localhost:3000
```

Environment validation is configured in [`src/config/env.ts`](src/config/env.ts).

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

## 🎨 Design System

### Theme Support

Built-in dark/light mode support using `next-themes` with system preference detection.

### Component Library

- **Base components**: Shadcn/ui with Radix UI primitives
- **Icons**: Lucide React icon library
- **Animations**: Tailwind CSS animations
- **Notifications**: Sonner toast library
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

Comprehensive ESLint setup with:

- TypeScript support
- React and React Hooks rules
- Next.js best practices
- Import helpers for organized imports
- Prettier integration
- Testing Library rules
- Storybook support

## 🚀 CI/CD

### GitHub Actions Workflow

The main workflow (`.github/workflows/main.yml`) includes:

1. **Prettier Check**

   - Validates code formatting
   - Uses pnpm 8.10.2 and Node.js 18

2. **ESLint Check**

   - Runs linting rules
   - Automatically fixes issues

3. **Jest Testing**

   - Runs comprehensive test suite
   - Requires prettier and eslint checks to pass

4. **Next.js Build**
   - Validates production build
   - Requires all previous checks to pass

### Dependency Management

- **Dependency Review**: Automated security scanning for PRs
- **Node.js Engine**: Locked to 18.20.2+
- **pnpm Version**: Locked with SHA for reproducible builds

## 📚 Development Workflow

### Adding New Components

1. Use Shadcn/ui CLI for base components:

   ```bash
   npx shadcn-ui@latest add button
   ```

2. Create custom components in `src/components/common/`

3. Write tests in adjacent `__tests__` folders

4. Document with Storybook stories

### API Integration

Configure API clients in `src/config/api-axios.ts` with:

- Base URL configuration
- Request/response interceptors
- Error handling
- Authentication token management

### State Management

Use Zustand stores in `src/stores/` for:

- User authentication state
- Global application state
- Persistent data with middleware

## 🔧 Customization

### Extending the Template

1. **Add new dependencies**: Use pnpm for package management
2. **Configure tools**: Update respective config files
3. **Extend CI/CD**: Modify GitHub Actions workflows
4. **Add features**: Follow established patterns and conventions

### Performance Optimization

- **Turbo mode**: Enabled for faster development builds
- **Bundle analysis**: Available through Next.js built-in analyzer
- **Image optimization**: Next.js Image component ready
- **Font optimization**: Next.js font optimization configured

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch following naming conventions
3. Make changes following code quality standards
4. Ensure all tests pass and coverage meets thresholds
5. Submit a pull request with conventional commit messages

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Create an issue in the [GitHub repository](https://github.com/TuanChill/Template-Nextjs)
- Check existing documentation and issues
- Review the comprehensive configuration files

---
