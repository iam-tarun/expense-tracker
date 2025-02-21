import { createClient } from "redis";

class RedisService {
  constructor() {
    this.client = null;
  }

  async connect() {
    if (!this.client) {
      this.client = createClient({
        url: `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
      });

      this.client.on('error', (err) => console.error('Redis Client Error', err));

      try {
        await this.client.connect();
        console.log('Connected to Redis');
      } catch (err) {
        console.log('Redis Connection Failed', err);
        this.client = null;
      }
    }

    return this.client;
  }

  async disconnect() {
    if (!this.client) {
      throw new Error('Redis client is not connected. Call connect() first.');
    }

    return this.client;
  }
}

export default new RedisService();