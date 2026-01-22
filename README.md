## License and Usage

This project is provided for demonstration purposes only.
Any reuse or commercial use without explicit permission is prohibited.

# Symfony Pharmacy Catalog

## Project Overview
Demonstration project of a pharmacy-style e-commerce product catalog,
featuring a hierarchical category system (parent / children) and related products.

The goal of this project is to showcase backend-oriented design,
clean data modeling, and Symfony / Doctrine best practices.

---

## Key Concepts
- Symfony 7
- Doctrine ORM
- Hierarchical (recursive) categories
- OneToMany / ManyToOne relationships
- Business-oriented data modeling
- Doctrine migrations

---

## Data Model
- Category (id, name, parent, children)
- Product (id, name, category)

---

## Development Environment
- Linux
- PhpStorm
- Symfony CLI
- Composer
- Docker (planned)

---

## Run the project locally

### Without Docker
```bash
composer install
symfony serve
