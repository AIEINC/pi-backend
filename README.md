# PiTechLicense Backend

This is the backend server for the PiTechLicense project. It handles file uploads to IPFS using Helia.

## Installation

Run the following command inside the backend directory:

```
npm install
```

## Configuration

Create a `.env` file in the `backend` directory with the following content:

```

```

## Running the Server

To start the server, use:

```
npm start
```

## Endpoints

- **`POST /upload`** - Uploads a file to IPFS and returns its CID.

## Dependencies

- Express
- CORS
- dotenv
- Multer
- Helia (IPFS)
- @helia/unixfs
- Multiformats
