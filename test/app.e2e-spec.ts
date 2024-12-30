import { Test, TestingModule } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import * as request from 'supertest'

import { AppModule } from '../src/app.module'

describe('[e2e] AppModule', () => {
    let app: INestApplication

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile()

        app = moduleFixture.createNestApplication()
        await app.init()
    })

    describe('AppController',
        () => {
            it('GET /',
                () => {
                    return request(app.getHttpServer())
                        .get('/')
                        .expect(404)
                })
        })
})
