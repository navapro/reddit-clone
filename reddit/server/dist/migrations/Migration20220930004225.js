"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220930004225 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220930004225 extends migrations_1.Migration {
    async up() {
        this.addSql('alter table "user" alter column "username" type text using ("username"::text);');
        this.addSql('alter table "user" alter column "password" type text using ("password"::text);');
    }
    async down() {
        this.addSql('alter table "user" alter column "username" type varchar using ("username"::varchar);');
        this.addSql('alter table "user" alter column "password" type varchar using ("password"::varchar);');
    }
}
exports.Migration20220930004225 = Migration20220930004225;
//# sourceMappingURL=Migration20220930004225.js.map