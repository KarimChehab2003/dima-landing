import { VertexAI } from "@google-cloud/vertexai";

const PROJECT_ID = process.env.GOOGLE_CLOUD_PROJECT;
const LOCATION = "us-central1";

const vertex = new VertexAI({ project: PROJECT_ID, location: LOCATION });

export const generativeModel = vertex.getGenerativeModel({
    model: "gemini-2.5-flash-lite"
})