const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connections');

describe('ONG', () => {
    beforeEach( async () => {
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async( ) => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "Sua Nova Ong 2",
                email: "novaong@ong.com",
                whatsapp: "11000000000",
                city: "São Paulo",
                uf: "SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});