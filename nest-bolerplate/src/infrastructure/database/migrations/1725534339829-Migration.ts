import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1725534339829 implements MigrationInterface {
    name = 'Migration1725534339829'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todo" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" text, "isDone" boolean NOT NULL DEFAULT false, "createdAt " TIMESTAMP NOT NULL DEFAULT now(), "updatedAt " TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "name" character varying NOT NULL, "password" text NOT NULL, "signupVerificationToken" character varying, "createdAt " TIMESTAMP NOT NULL DEFAULT now(), "updatedAt " TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "todo" ADD CONSTRAINT "FK_1e982e43f63a98ad9918a86035c" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "FK_1e982e43f63a98ad9918a86035c"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "todo"`);
    }

}
