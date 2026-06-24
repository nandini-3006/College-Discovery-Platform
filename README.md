🏫 College Discovery Platform (Backend)

A scalable backend architecture built with NestJS + Prisma + PostgreSQL, designed around a fully relational college ecosystem with authentication, discovery, prediction, and discussion features. All APIs are tested using Postman and are ready for frontend integration.

🧠 Architecture Overview (Core Design)

The system follows a modular, relational backend architecture where each feature is split into independent modules (College, User, Q&A, Review, Cutoff, Auth). Prisma acts as the central ORM managing strict relational consistency across entities with foreign keys and cascading rules.

Key design principle:
👉 “Everything revolves around College as the central entity, and all features (courses, placements, reviews, cutoffs, questions) are relational extensions of it.”

🔗 Database Relations (Most Important Part)
🏫 College (Core Entity)

College is the central hub connected to:

Courses (1 → Many)
Placement (1 → 1)
Reviews (1 → Many)
Cutoffs (1 → Many)
Questions (1 → Many)
👤 User Relations

User is linked to all interaction layers:

Questions (1 → Many)
Answers (1 → Many)
Reviews (1 → Many)

👉 This enables full traceability of every user action across the platform.

💬 Q&A System (Discussion Layer)
Question → belongs to User + College
Answer → belongs to User + Question
Supports nested population (question → answers → users)

👉 This creates a structured forum-like discussion system tied directly to colleges.

⭐ Reviews System
Review → belongs to User + College
Enables user-driven feedback system
Supports aggregated college evaluation
📊 Cutoff System (Predictor Engine)
Cutoff → belongs to College
Used for rank-based filtering
Powers the college predictor system

👉 Enables rule-based admission prediction using exam + rank matching.

🔐 Authentication (2-Line Summary)

Implemented secure JWT-based authentication system with bcrypt password hashing, supporting user signup and login. Role-based access control (ADMIN/USER) ensures secure separation between administrative college management and user interactions.

⚙️ Core Backend Features
🔍 Search, Filter, Sort, Pagination (Advanced Query System)

A fully optimized query system is implemented for college listing:

Search: Colleges by name, city, state
Filtering: by fees range, rating, type (government/private)
Sorting: by rating, fees, established year
Pagination: large dataset handling with page/limit support

👉 Implemented using dynamic Prisma query building for efficient database access.

📊 College Predictor System
Input: exam type + rank
Backend matches rank against cutoff table
Returns eligible colleges dynamically
Uses relational filtering between Cutoff and College tables


Role-based protected access
🧪 Postman Testing Coverage

All modules were fully tested using Postman:

✔ Authentication flow (signup/login/JWT validation)
✔ Role-based access (ADMIN vs USER restrictions)
✔ College CRUD operations
✔ Search/filter/sort/pagination queries
✔ College detail aggregation API
✔ Q&A flow (question → answer → nested retrieval)
✔ Review system (create + fetch)
✔ Cutoff-based predictor logic

🐳 Docker Setup

The project includes Docker support for easy deployment and environment consistency
🔥 Outcome

This backend behaves like a real-world production system with:

scalable relational design
modular architecture
secure authentication
optimized querying system
frontend-ready API
