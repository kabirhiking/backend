
---

### ✅ What's next?
Here's a full list of API's **CRUD endpoints** for the `/api/users` resource, including **GET, POST, PUT, and DELETE**, with example usage and request bodies. This works for the backend code you now have.

---

## 🧩 API ENDPOINTS — `/api/users`

---

### 📥 1. `GET /api/users`
> 🔍 Get all users

#### ✅ Example:
```http
GET http://localhost:4000/api/users
```

#### 📤 Response:
```json
[
  { "id": 1, "name": "Raihan" },
  { "id": 2, "name": "Kabir" }
]
```

---

### ➕ 2. `POST /api/users`
> 📝 Create a new user

#### ✅ Example:
```http
POST http://localhost:4000/api/users
```

#### 📩 Body (JSON):
```json
{
  "name": "New User"
}
```

#### 📤 Response:
```json
{
  "id": 3,
  "name": "New User"
}
```

---

### ✏️ 3. `PUT /api/users/:id`
> 🔄 Update a user by ID

#### ✅ Example:
```http
PUT http://localhost:4000/api/users/1
```

#### 📩 Body (JSON):
```json
{
  "name": "Updated Raihan"
}
```

#### 📤 Response:
```json
{
  "id": 1,
  "name": "Updated Raihan"
}
```

---

### ❌ 4. `DELETE /api/users/:id`
> 🗑️ Delete a user by ID

#### ✅ Example:
```http
DELETE http://localhost:4000/api/users/2
```

#### 📤 Response:
```json
{
  "id": 2,
  "name": "Kabir"
}
```

---


#live project link: https://backend-e75g.onrender.com
