export default class DbClient {
    constructor(client) {
        this.client = client;
    }

    async connect() {
        await this.client.connect();
    }

    async disconnect() {
        await this.client.disconnect();
    }

    async hasCode(code) {
        return await this.client.hasCode(code);
    }

    async createUrl(url) {
        await this.client.createUrl(url);
    }

    async findUrl(url) {
        return await this.client.findUrl(url);
    }

    async updateUrl(url) {
        await this.client.updateUrl(url);
    }

    async createTempUrl(url, expireIn) {
        await this.client.createTempUrl(url, expireIn);
    }

    async findTempUrl(url) {
        return await this.client.findTempUrl(url);
    }

    async createTempUser({ email, password }) {
        await this.client.createTempUser({ email, password });
    }

    async createUser(user) {
        await this.client.createUser(user);
    }

    async findUser({ id, email, password, active }) {
        return this.client.findUser({ id, email, password, active });
    }

    /**
     *
     * @param {User} user
     * @returns {Promise<*>}
     */
    async updateUser(user) {
        return this.client.updateUser(user);
    }
}
