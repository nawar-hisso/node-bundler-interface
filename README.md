# Bundler APIs Interface

This project is a React application that provides a simple user interface for interacting with Ethereum bundler APIs. It allows users to generate and submit UserOperations compliant with ERC-4337.

---

## Features

- **Generate UserOperation**: Calls the backend API to create a UserOperation.
- **Submit Transaction**: Submits the generated UserOperation to the Ethereum entry point.
- **Responsive Design**: Built with styled-components for a clean and responsive UI.
- **Proxy Middleware**: Uses an HTTP proxy middleware for backend API requests.

---

## Prerequisites

Ensure you have the following installed:

- **Node.js**: v18.x or higher
- **npm** or **yarn**: Latest version
- A running instance of the backend API (Bundler node).

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nawar-hisso/bundler-apis-interface.git
   cd bundler-apis-interface
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   Or with Yarn:

   ```bash
   yarn install
   ```

3. Configure the proxy middleware:
   The `setupProxy.js` file is already set to forward API requests (`/v1/user-op` and `/v1/rpc`) to `http://localhost:3000`. Update the target URL if your backend runs on a different host or port.

---

## Running the Application

### Start the Frontend

Run the development server:

```bash
npm run dev
```

Or with Yarn:

```bash
yarn run dev
```

The app will be available at `http://localhost:5173` by default.

### Backend Setup

Ensure your backend API is running at the configured proxy target (default: `http://localhost:3000`).

---

## Usage

1. **Generate UserOperation**:

   - Click the "Generate UserOp" button.
   - The app will send a request to `/v1/user-op` and display the generated UserOperation.

2. **Submit Transaction**:

   - After generating a UserOperation, click the "Submit Transaction" button.
   - The app will send the UserOperation to `/v1/rpc` and display the transaction hash.

3. **Error Handling**:
   - Any errors during API calls will be displayed in the response box.

---

## Project Structure

- **`src/`**:
  - **`components/ApiButtons.tsx`**: Contains the main logic for interacting with APIs.
  - **`App.tsx`**: Main application entry point.
  - **`setupProxy.js`**: Configures the proxy middleware for API requests.
- **Styled Components**: Used for styling components in a modular and reusable way.

---

## Testing

### Manual Testing

1. Start the backend API and frontend app.
2. Navigate to `http://localhost:5173`.
3. Use the buttons to generate and submit UserOperations.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

For any questions or feedback:

- **Author**: Nawar Hisso
- **Email**: [nawwarhisso@gmail.com](mailto:nawwarhisso@gmail.com)
- **LinkedIn**: [Nawar Hisso](https://www.linkedin.com/in/nawarhisso/)
