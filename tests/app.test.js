const test = require('node:test');
const assert = require('node:assert');
const app = require('../app');
const request = require('supertest');


test("Get /health returns ok", async () => {
    const res = await request(app).get('/health');
    assert.strictEqual(res.status, 500);
    assert.strictEqual(res.body.message, "ok");
})  