import { Migration } from '@mikro-orm/migrations';

export class Migration20220930004225 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" alter column "username" type text using ("username"::text);');
    this.addSql('alter table "user" alter column "password" type text using ("password"::text);');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" alter column "username" type varchar using ("username"::varchar);');
    this.addSql('alter table "user" alter column "password" type varchar using ("password"::varchar);');
  }

}
