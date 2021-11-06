import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";


const uri = "mongodb://AlexD:Satera94da025@nestcluster.9lnbn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(

      uri,
      // {useUnifiedTopology: false,useNewUrlParser: false, }
    ),
    // MongooseModule.forRoot('jdbc:mysql://myUser:123Password@localhost:3306/mySchema'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'myUser',
//       password: '123Password',
//       database: 'mySchema',
//       entities: [],
//       synchronize: true,
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
