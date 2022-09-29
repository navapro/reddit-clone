"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20220929013849 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20220929013849 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "post" ("id" serial primary key, "title" varchar(255) not null, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null);');
    }
    async down() {
        this.addSql('drop table if exists "post" cascade;');
    }
}
exports.Migration20220929013849 = Migration20220929013849;
//# sourceMappingURL=Migration20220929013849.js.map