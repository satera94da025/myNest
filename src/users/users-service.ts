import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { v1 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Users, UsersDocement } from './schemas/users.schemas';
import { UsersModule } from './users.module';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(Users.name) private usersModel: Model<UsersDocement>,
  ) {}

  async getAll() {
    return this.usersModel.find().exec();
  }

  async getById(id: string) {
    return this.usersModel.findById(id);
  }

  async createUser(user: CreateUserDto) {
    const newUser = new this.usersModel(user);
    return newUser.save();
  }

  async removeUser(id: string) {
    return this.usersModel.findByIdAndRemove(id);
  }

  async updateUser(id: string, user: UpdateUserDto) {
    return this.usersModel.findByIdAndUpdate(id, user, { new: true });
  }
}
