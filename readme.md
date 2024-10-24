# SDK JSON Placeholder

`sdk-json-placeholder` is an SDK wrapper around the JSONPlaceholder API, allowing you to easily fetch `todos` from the service.

## Installation

To install the package, run the following command:

```bash
npm install json-placeholder-sdk-js
```

## Usage

### Importing and Initializing the SDK

To use the SDK, you need to import it and create an instance of the `JSONPlaceholderSDK` class. You can use either ES module or CommonJS syntax.

#### Using ES Modules

```typescript
import { JSONPlaceholderSDK } from 'json-placeholder-sdk-js'

const sdk = new JSONPlaceholderSDK()
```

#### Using CommonJS

```javascript
const { JSONPlaceholderSDK } = require('json-placeholder-sdk-js')

const sdk = new JSONPlaceholderSDK()
```

### Fetching a Todo

You can fetch a todo from the JSONPlaceholder API by using the `fetchTodo` method, which takes a `todoIndex` as a parameter.

```javascript
const placeholderResponse = async () => {
    try {
        const todo = await sdk.fetchTodo(1) // Fetches the todo with id 1
        console.log('todo: ', todo)
    } catch (error) {
        console.error('Error fetching todo:', error)
    }
}

placeholderResponse()
```

### Response Format

The `fetchTodo` method returns a `Todo` object that follows this interface:

```typescript
interface IFetchTodo {
    userId: number
    id: number
    title: string
    completed: boolean
}
```

Example response:

```json
{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}
```

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

