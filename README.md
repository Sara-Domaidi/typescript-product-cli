```markdown
# TypeScript Product CLI Tool

A professional Command Line Interface (CLI) tool built with TypeScript and Sequelize to manage a product catalog.

## Prerequisites
Before you begin, ensure you have the following installed:
- **Node.js**: v18.0.0 or higher
- **Postgres**: v14.0 or higher
- **Yarn**: v1.22 or higher (Package Manager)

## Installation & Setup

Follow these steps to get your development environment running:

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/Sara-Domaidi/typescript-product-cli.git](https://github.com/Sara-Domaidi/typescript-product-cli.git)
   cd typescript-product-cli
   ```

2. **Install Dependencies**
   This project uses **Yarn** for dependency management. Install all required packages by running:
   ```bash
   yarn install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory and add your database credentials:
   ```env
   DB_NAME=your_database_name
   DB_USER=your_postgres_username
   DB_PASSWORD=your_postgres_password
   DB_HOST=localhost
   DB_PORT=5432
   ```

## Usage Guide
You can run the tool directly using `tsx` without a manual build step. Use the following commands:

### 1. List All Products
```bash
node --import tsx src/index.ts list
```

### 2. Get Product by ID
```bash
node --import tsx src/index.ts get <id>
```

### 3. Add a New Product
```bash
node --import tsx src/index.ts add "Product Name" <price>
```

### 4. Update an Existing Product
```bash
node --import tsx src/index.ts update <id> "New Name" <new_price>
```

### 5. Delete a Product
```bash
node --import tsx src/index.ts delete <id>
```

## Technical Stack
- **Language**: TypeScript
- **ORM**: Sequelize
- **Database**: PostgreSQL
- **CLI Framework**: Commander.js
- **Package Manager**: Yarn
```
