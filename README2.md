npm i -g @nestjs/cli

nest new project-name

nest generate controller <name>

nest generate service <name>

nest generate module <name>

npm i @nestjs/mongoose mongoose

docker ps

docker exec -it <names docker> bash

mongosh -u root -p

<password>;

npm i @nestjs/mongoose mongoose

@Module({
imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest')],

?authSource=admin

nest g resource <name>

ประกาศ schema 
return document ออกมา
เอา schema import module เพื่อเรียกใช้งานเข้ากับ mongo
service inject model document

export ข้ามกัน
จะใช้ product
export product.module 
order.module เรียกใช้ ให้ import 
inject ไปเรียกใช้ ที่ service
