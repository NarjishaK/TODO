# Project Setup Guide

## Overview
This guide will help you set up and run the project locally. The project consists of two main components:

- Client: A Nest.js API running on port 3000.
- Server: An Express.js server running on port 8001.
- Database: MongoDB running on its default port.

## Prerequisites
Before you begin, ensure you have the following installed on your system:

- Node.js (v20.14.0) (tested thoroughly with this version)
- npm (comes with Node.js)
- MongoDB (ensure it's running on the default port 27017)

## Setup Instructions
1. **Clone the Repository**

    ```bash
    git clone https://github.com/NarjishaK/TODO.git
    cd TODO
    ```

2. **Setup Client (Nest.js API)**

    Navigate to the client directory and install dependencies:

    ```bash
    cd client
    npm install
    ```

3. **Setup Server (Express.js)**

    Navigate to the server directory and install dependencies:

    ```bash
    cd ../server
    npm install
    ```

4. **Start MongoDB**

    Ensure MongoDB is running on its default port (27017). If you haven't started it yet, you can do so by running:

    ```bash
    mongod
    ```

5. **Start the Server (Express.js)**

    In the server directory, start the Express.js server:

    ```bash
    npm start
    ```

    The server will be running on http://localhost:8001.

6. **Start the Client (Nest.js API)**

    In a new terminal window, navigate to the client directory and start the Nest.js API:

    ```bash
    cd client
    npm run dev
    ```

    The client (Nest.js API) will be running on http://localhost:3000.


## Additional Notes
- **Environment Variables:** Currently, all configuration values (e.g., MongoDB URL) are hardcoded. For a production setup, it is recommended to use environment variables for better security and flexibility.

- **Dependencies:** Make sure all required dependencies are installed and up-to-date.


- If you encounter issues feel free to reach me.

## Feedback
If you have any feedback or suggestions for improvement, please feel free to reach out.

Thank you and happy coding!
