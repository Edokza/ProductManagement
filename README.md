# 📦 ProductManagement

ProductManagement is a Product Management System\
developed using .NET for Backend and Web UI for management.\
It supports full CRUD operations (Create / Read / Update / Delete).

This project is suitable as a sample business web application.

------------------------------------------------------------------------

## 🚀 Features

-   ✅ Manage products (Add / Edit / Delete / View)
-   ✅ RESTful API with ASP.NET Core
-   ✅ Database integration
-   ✅ Easy-to-use Web UI
-   ✅ Clear Backend / Frontend separation
-   ✅ Scalable architecture

------------------------------------------------------------------------

## 🧱 Project Structure

    ProductManagement
    ├── ProductManagement.Api     # Backend API (.NET)
    │   ├── Controllers
    │   ├── Models
    │   ├── Data
    │   └── appsettings.json
    │
    ├── ProductManagement.Ui      # Frontend
    │   ├── src
    │   ├── public
    │   └── package.json
    │
    └── README.md

------------------------------------------------------------------------

## 📌 System Requirements

Please install the following before running the project:

### Backend

-   .NET SDK 8.0
    https://dotnet.microsoft.com/

### Frontend

-   Node.js 18+\
    https://nodejs.org/

### Database

-   SQLite

------------------------------------------------------------------------

## ⚙️ Port Configuration

Default ports are defined in:

    ProductManagement.Api/Properties/launchSettings.json

Example:

``` json
"applicationUrl": "https://localhost:7135;http://localhost:5277"
```

  Type    Port
  ------- ------
  HTTP    5277
  HTTPS   7135

Frontend default:

    http://localhost:4200

(Check in package.json or vite.config.js)

------------------------------------------------------------------------

## 🗄️ Database Configuration

Database settings are located in:

    ProductManagement.Api/appsettings.json

Example:

``` json
"ConnectionStrings": {
  "DefaultConnection": "Server=localhost;Database=ProductDb;User Id=sa;Password=1234;TrustServerCertificate=True;"
}
```

### Sample Connection Strings

#### SQL Server

    Server=localhost;
    Database=ProductDb;
    User Id=sa;
    Password=1234;

#### MySQL

    Server=localhost;
    Database=productdb;
    User=root;
    Password=1234;

#### SQLite

    Data Source=product.db;

------------------------------------------------------------------------

## 🛠️ Installation & Setup

### 1. Clone Repository

``` bash
git clone https://github.com/Edokza/ProductManagement.git
cd ProductManagement
```

------------------------------------------------------------------------

### 2. Setup Database

1.  Create database based on connection string
2.  Edit appsettings.json
3.  Run migrations (if available)

Example:

``` bash
dotnet ef database update
```

------------------------------------------------------------------------

### 3. Run Backend API

``` bash
cd ProductManagement.Api

dotnet restore
dotnet build
dotnet run
```

API will run at:

    http://localhost:7135
    or
    https://localhost:5277

Test API:

    http://localhost:7135/swagger
    or
    http://localhost:5277/swagger

------------------------------------------------------------------------

### 4. Run Frontend UI

``` bash
cd ProductManagement.Ui

npm install
npm run dev
```

Open in browser:

    http://localhost:4200

------------------------------------------------------------------------

## 📡 API Endpoints

  Method   Endpoint             Description
  -------- -------------------- -------------------
  GET      /api/products        Get all products
  GET      /api/products/{id}   Get product by ID
  POST     /api/products        Create product
  PUT      /api/products/{id}   Update product
  DELETE   /api/products/{id}   Delete product

------------------------------------------------------------------------

## 🔐 Environment Variables

Optional environment configuration:

``` bash
DB_CONNECTION=Server=localhost;Database=ProductDb;
ASPNETCORE_ENVIRONMENT=Development
```

------------------------------------------------------------------------

## 🚨 Common Issues

### ❌ API not running

-   Check port conflicts
-   Check .NET SDK version
-   Check launchSettings.json

### ❌ Database connection failed

-   Verify connection string
-   Check credentials
-   Ensure database service is running

### ❌ Frontend cannot connect API

-   Check API base URL
-   Check CORS settings
-   Verify ports

------------------------------------------------------------------------

## 📄 License

This project is open source.\
You may add a LICENSE file later.

------------------------------------------------------------------------
