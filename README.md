# Hardrock

## Setup

npm install

## Available Scripts

- `npm run dev` - start dev server
- `npm run lint` - run ESLint
- `npm run type-check` - run TypeScript checks
- `npm run test:run` - run unit tests
- `npm run format` - format code with Prettier

## Git Hooks

This project uses Husky for:

- **pre-commit** - runs lint-staged on staged files
- **commit-msg** - enforces conventional commit format
- **pre-push** - runs type-check, lint, and tests before pushing
