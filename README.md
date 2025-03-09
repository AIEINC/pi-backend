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
PORT=3000
PI_APP_ID=PatentVault
PI_API_KEY=flg1djgokwvpvpu3enzcd1inglp7fyg7t2x6pibesmxq1ruhvpms0zvbz2uuntc3
PI_WALLET_PRIVATE_SEED=SDWIGQS4W5NIAS2OYNEJZWVBVPVDWTHLE627LQSYMKPTBEMFRGUWG62Q
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
